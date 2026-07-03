using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Центральный менеджер поля.
// Хранит все ячейки, расставляет стартовые стопки и запускает цепную реакцию слияния
// при установке новой стопки игроком (см. PlaceStack).
public class BoardManager : MonoBehaviour
{
    // Шесть стандартных смещений соседей для плоской (flat-top) гекс-сетки в осевых координатах.
    private static readonly Vector2Int[] AxialDirections =
    {
        new Vector2Int(1, 0), new Vector2Int(1, -1), new Vector2Int(0, -1),
        new Vector2Int(-1, 0), new Vector2Int(-1, 1), new Vector2Int(0, 1)
    };

    [Header("Ячейки поля")]
    [Tooltip("Необязательно: если задано, все BoardCell в детях этого трансформа соберутся сюда автоматически.")]
    [SerializeField] private Transform cellsParent;
    [SerializeField] private List<BoardCell> cells = new List<BoardCell>();
    [Tooltip("Цвета подсветки ячейки при наведении стопки во время драга — один ассет на все ячейки поля " +
             "сразу, назначать в каждую BoardCell вручную не нужно (см. Awake).")]
    [SerializeField] private CellHighlightConfig cellHighlightConfig;

    [Header("Авто-расчёт Axial Coord из позиции")]
    [Tooltip("Трансформ, который считается центром сетки (q=0, r=0). Можно назначить сюда " +
             "трансформ одной из самих BoardCell — например, центральной ячейки поля.")]
    [SerializeField] private Transform gridOrigin;
    [Tooltip("Шаг сетки по мировой оси X между соседними колонками ячеек.")]
    [SerializeField] private float columnSpacing = 0.31f;
    [Tooltip("Шаг сетки по мировой оси Z между соседними рядами ячеек в одной колонке.")]
    [SerializeField] private float rowSpacing = 0.348f;

    [Header("Шаблоны для стартовых стопок на поле")]
    [SerializeField] private HexStack stackPrefab;
    [SerializeField] private HexPieceView piecePrefab;
    [SerializeField] private HexColorPalette palette;
    [Tooltip("Поворот (Euler), с которым спавнятся стартовые стопки на поле. Instantiate ставит " +
             "именно этот поворот, а не поворот из самого stackPrefab — без этого поля стопки всегда " +
             "спавнились с нулевым поворотом по всем осям (Quaternion.identity), независимо от макета.")]
    [SerializeField] private Vector3 initialStackRotation = new Vector3(0f, 0f, -90f);

    [Header("Скорость анимации цепной реакции")]
    [SerializeField] private float baseJumpDuration = 5f;
    [SerializeField] private float baseClearDuration = 0.25f;
    [Tooltip("Во сколько раз ускоряется перелёт/исчезновение после каждой схлопнувшейся стопки в одной цепочке.")]
    [SerializeField] private float speedMultiplierPerClear = 1.3f;

    [Header("Дуга перелёта фишки")]
    [SerializeField] private float jumpArcHeight = 0.25f;
    [SerializeField] private AnimationCurve jumpEasing = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
    [Tooltip("Общий поворот фишки за весь перелёт, в градусах. 180 = фишка непрерывно переворачивается " +
             "на обратную сторону (а не встаёт на ребро и падает обратно на ту же сторону): в середине " +
             "пути (пик дуги) она ровно на ребре (90°), к приземлению — полностью на другой стороне.")]
    [SerializeField] private float jumpFlipDegrees = 180f;
    [Tooltip("Задержка между стартами перелёта соседних фишек в одном трансфере — они летят не разом, " +
             "а внахлёст друг за другом.")]
    [SerializeField] private float jumpStartStagger = 0.1f;

    private readonly Dictionary<Vector2Int, BoardCell> cellByCoord = new Dictionary<Vector2Int, BoardCell>();
    private bool chainRunning;

    // Срабатывает, когда после цепной реакции на поле не осталось ни одной стопки —
    // GameFlowController может досрочно перейти к пэкшоту, не дожидаясь таймера.
    public event Action OnBoardCleared;

    public bool IsChainRunning => chainRunning;

    // Например, TutorialHandController использует это, чтобы указать руку на любую свободную ячейку.
    public IReadOnlyList<BoardCell> Cells => cells;

    private void Awake()
    {
        if (cellsParent != null && cells.Count == 0)
            cells.AddRange(cellsParent.GetComponentsInChildren<BoardCell>());

        ComputeAxialCoordinates();

        foreach (var cell in cells)
        {
            if (cellByCoord.ContainsKey(cell.AxialCoord))
                Debug.LogWarning($"BoardManager: две ячейки получили одинаковые Axial Coord {cell.AxialCoord} " +
                                  $"({cellByCoord[cell.AxialCoord].name} и {cell.name}) — проверьте gridOrigin/columnSpacing/rowSpacing.", cell);
            cellByCoord[cell.AxialCoord] = cell;

            cell.SetHighlightConfig(cellHighlightConfig);
        }
    }

    // Вычисляет (q, r) каждой ячейки из её мировой позиции относительно gridOrigin, чтобы не
    // проставлять координаты руками. Формула обратна той, по которой сама сетка была построена:
    // world.x = origin.x + columnSpacing * q
    // world.z = origin.z + rowSpacing * (r + q / 2)
    private void ComputeAxialCoordinates()
    {
        var origin = gridOrigin;
        if (origin == null)
        {
            // Без точки отсчёта координаты не считаются вообще — все ячейки молча остаются
            // на (0,0), GetNeighbors ни для кого не находит соседей, и цепная реакция никогда
            // не запускается между соседними стопками. Формула ниже зависит только от РАЗНИЦЫ
            // позиций, так что любая фиксированная точка подходит как временная замена —
            // берём позицию первой ячейки, лишь бы не оставлять всех без координат вообще.
            if (cells.Count == 0) return;
            origin = cells[0].transform;
            Debug.LogWarning($"BoardManager: Grid Origin не назначен в инспекторе — временно использую позицию " +
                              $"ячейки '{cells[0].name}' как точку отсчёта для Axial Coord. Назначьте Grid Origin " +
                              $"явно, чтобы не полагаться на это резервное поведение.", this);
        }

        foreach (var cell in cells)
        {
            if (!cell.AutoComputeAxialFromPosition) continue;

            var delta = cell.transform.position - origin.position;
            int q = Mathf.RoundToInt(delta.x / columnSpacing);
            int r = Mathf.RoundToInt(delta.z / rowSpacing - q * 0.5f);
            cell.SetAxialCoord(new Vector2Int(q, r));
        }
    }

    private void Start()
    {
        // Расставляем стопки, заранее заданные дизайнером на ячейках — это и есть
        // "поле с шестиугольниками", в которое игрок подмешивает стопки из лотка.
        foreach (var cell in cells)
        {
            if (cell.InitialStackColors.Count == 0) continue;

            var stack = Instantiate(stackPrefab, cell.SnapPosition, Quaternion.Euler(initialStackRotation));
            stack.Initialize(cell.InitialStackColors, piecePrefab, palette);
            stack.CurrentCell = cell;
            cell.CurrentStack = stack;

            // Стартовые стопки на поле — не перетаскиваемые, в отличие от стопок лотка.
            var drag = stack.GetComponent<StackDragHandler>();
            if (drag != null) drag.enabled = false;
        }
    }

    public void PlaceStack(HexStack stack, BoardCell cell)
    {
        stack.transform.position = cell.SnapPosition;
        stack.CurrentCell = cell;
        cell.CurrentStack = stack;
        StartCoroutine(ProcessChainReaction(cell));
    }

    private List<BoardCell> GetNeighbors(BoardCell cell)
    {
        var result = new List<BoardCell>(6);
        foreach (var dir in AxialDirections)
        {
            if (cellByCoord.TryGetValue(cell.AxialCoord + dir, out var neighbor))
                result.Add(neighbor);
        }

        return result;
    }

    // Волна цепной реакции от только что поставленной ячейки: если верхний цвет двух соседних
    // стопок совпадает, БОЛЕЕ ВЫСОКАЯ (по числу фишек) стопка отдаёт своё совпадающего цвета
    // фишки БОЛЕЕ МАЛЕНЬКОЙ — независимо от того, какая из двух сейчас "активная" ячейка волны,
    // а не только сосед → в только что поставленную. Стопка, ставшая однотонной, исчезает;
    // если после этого у неё (или у получателя) снова совпал верх с другим соседом — реакция
    // продолжается дальше, образуя цепочку. Скорость анимаций множится на speedMultiplierPerClear
    // за каждую схлопнувшуюся в этой волне стопку.
    private IEnumerator ProcessChainReaction(BoardCell startCell)
    {
        chainRunning = true;

        // chainRunning блокирует OnMouseDown у всех стопок лотка (см. StackDragHandler), пока идёт
        // реакция. Если где-то внутри цепочки вылетит необработанное исключение, корутина оборвётся
        // без try/finally — и chainRunning навсегда останется true, что выглядит как "весь драг
        // сломался" даже на ячейках, к цепочке не относящихся. finally гарантирует сброс флага
        // в любом случае, даже если сама реакция отработала некорректно.
        try
        {
            float speedMultiplier = 1f;

            var queue = new Queue<BoardCell>();
            var queued = new HashSet<BoardCell>();
            queue.Enqueue(startCell);
            queued.Add(startCell);

            while (queue.Count > 0)
            {
                var cell = queue.Dequeue();
                queued.Remove(cell);

                if (cell.CurrentStack == null || cell.CurrentStack.IsEmpty) continue;

                foreach (var neighbor in GetNeighbors(cell))
                {
                    // Перечитываем каждый раз: activeStack мог опустеть и уничтожиться на
                    // предыдущей итерации этого же foreach, если он оказался донором.
                    var activeStack = cell.CurrentStack;
                    if (activeStack == null || activeStack.IsEmpty) break;

                    var neighborStack = neighbor.CurrentStack;
                    if (neighborStack == null || neighborStack.IsEmpty) continue;
                    if (neighborStack.TopColor != activeStack.TopColor) continue;

                    // Более высокая стопка — донор, более маленькая — получатель, независимо
                    // от того, кто из них сейчас cell (активная ячейка волны), а кто neighbor.
                    bool activeIsDonor = activeStack.Count >= neighborStack.Count;
                    var donorStack = activeIsDonor ? activeStack : neighborStack;
                    var receiverStack = activeIsDonor ? neighborStack : activeStack;
                    var donorCell = activeIsDonor ? cell : neighbor;
                    var receiverCell = activeIsDonor ? neighbor : cell;

                    yield return TransferMatchingColor(donorStack, receiverStack, speedMultiplier);

                    if (donorStack.IsEmpty)
                    {
                        Destroy(donorStack.gameObject);
                        donorCell.CurrentStack = null;
                    }
                    else if (donorStack.IsMonochrome)
                    {
                        yield return ClearStack(donorCell, speedMultiplier);
                        speedMultiplier *= speedMultiplierPerClear;
                    }
                    else if (donorCell != cell && queued.Add(donorCell))
                    {
                        queue.Enqueue(donorCell);
                    }

                    // Получатель — сосед (донором была cell) — мог сам стать однотонным,
                    // пополнившись; получателя-cell проверяем один раз ниже, после всех соседей.
                    if (receiverCell != cell)
                    {
                        if (receiverStack.IsMonochrome)
                        {
                            yield return ClearStack(receiverCell, speedMultiplier);
                            speedMultiplier *= speedMultiplierPerClear;
                        }
                        else if (queued.Add(receiverCell))
                        {
                            queue.Enqueue(receiverCell);
                        }
                    }
                }

                if (cell.CurrentStack != null && cell.CurrentStack.IsMonochrome)
                {
                    yield return ClearStack(cell, speedMultiplier);
                    speedMultiplier *= speedMultiplierPerClear;
                }
            }
        }
        finally
        {
            chainRunning = false;
        }

        if (IsBoardFullyCleared())
            OnBoardCleared?.Invoke();
    }

    // Перекидывает по одной все фишки совпадающего верхнего цвета из донора в получателя. Фишки
    // летят не строго друг за другом, а внахлёст — каждая следующая стартует через jumpStartStagger
    // после предыдущей, не дожидаясь её приземления (см. MoveHexWithArc). Сам метод возвращается
    // только когда ВСЕ запущенные фишки долетели и осели в получателе — иначе вызывающий код
    // (ProcessChainReaction) мог бы проверить получателя раньше, чем все они реально долетели.
    private IEnumerator TransferMatchingColor(HexStack donorStack, HexStack receiverStack, float speedMultiplier)
    {
        var matchColor = receiverStack.TopColor;
        float duration = baseJumpDuration / speedMultiplier;
        float stagger = jumpStartStagger / speedMultiplier;

        var flights = new List<Coroutine>();
        int reserved = 0;

        while (!donorStack.IsEmpty && donorStack.TopColor == matchColor)
        {
            var piece = donorStack.PopTopPiece();
            var from = piece.transform.position;
            var to = receiverStack.GetNextSlotWorldPosition(reserved);
            reserved++;

            // На время перелёта фишка не привязана ни к донору, ни к получателю —
            // так масштаб/поворот стопок её не задевает, пока она летит и переворачивается.
            piece.transform.SetParent(null, true);
            flights.Add(StartCoroutine(FlyAndLand(piece, from, to, duration, receiverStack)));

            yield return new WaitForSeconds(stagger);
        }

        foreach (var flight in flights)
            yield return flight;
    }

    private IEnumerator FlyAndLand(HexPieceView piece, Vector3 from, Vector3 to, float duration, HexStack receiverStack)
    {
        yield return MoveHexWithArc(piece.gameObject, from, to, duration);
        receiverStack.AppendPiece(piece);
    }

    private IEnumerator ClearStack(BoardCell cell, float speedMultiplier)
    {
        var stack = cell.CurrentStack;
        cell.CurrentStack = null;
        if (stack == null) yield break;

        float duration = baseClearDuration / speedMultiplier;
        yield return AnimateDisappear(stack.transform, duration);
        Destroy(stack.gameObject);
    }

    // Прыжок фишки по параболической дуге с переворотом на jumpFlipDegrees — чистая математика,
    // без Rigidbody/физики. Поворот идёт НЕПРЕРЫВНО от старта на фиксированный угол (по умолчанию
    // 180° — "монетка", показывающая обратную сторону), независимо от поворота стопки-получателя:
    // на пике дуги (n=0.5) фишка ровно на ребре, и оттуда она продолжает докручиваться дальше,
    // а не возвращается назад к той стороне, на которой лежала в старой стопке.
    private IEnumerator MoveHexWithArc(GameObject hex, Vector3 startPos, Vector3 endPos, float duration)
    {
        if (hex == null) yield break;

        var hexTransform = hex.transform;
        var startRotation = hexTransform.rotation;
        var flipAxis = GetFlipAxis(startPos, endPos);
        var endRotation = startRotation * Quaternion.AngleAxis(jumpFlipDegrees, flipAxis);

        // Пик дуги — фиксированная высота (jumpArcHeight) НАД более высокой из двух точек,
        // а не над серединой прямой между ними (если старт и финиш на разной высоте).
        float apexY = Mathf.Max(startPos.y, endPos.y) + jumpArcHeight;

        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            // AnimationCurve даёт eased-прогресс n (ускорение в начале, замедление в конце) —
            // им управляются и XZ, и Y, и поворот, чтобы всё двигалось синхронно.
            float n = jumpEasing.Evaluate(Mathf.Clamp01(elapsed / duration));

            var pos = Vector3.Lerp(startPos, endPos, n); // X/Z — линейная интерполяция

            // Y — квадратичная (параболическая) интерполяция Лагранжа через 3 точки:
            // старт (n=0, startPos.y), пик (n=0.5, apexY), финиш (n=1, endPos.y).
            // y(n) = y0·(1-n)(1-2n) + 4·y1·n(1-n) + y2·n(2n-1)
            pos.y = startPos.y * (1f - n) * (1f - 2f * n)
                  + 4f * apexY * n * (1f - n)
                  + endPos.y * n * (2f * n - 1f);

            hexTransform.position = pos;

            // Один непрерывный Slerp от startRotation до endRotation (кратчайший путь между ними
            // равен ровно jumpFlipDegrees вокруг flipAxis, так как endRotation этим же поворотом
            // и построен) — на пике дуги фишка ровно на ребре, дальше без остановки докручивается.
            hexTransform.rotation = Quaternion.Slerp(startRotation, endRotation, n);

            yield return null;
        }

        hexTransform.position = endPos;
        hexTransform.rotation = endRotation;
    }

    // Горизонтальная ось, перпендикулярная направлению движения — как ось колеса, катящегося к цели.
    private static Vector3 GetFlipAxis(Vector3 from, Vector3 to)
    {
        var flatDirection = to - from;
        flatDirection.y = 0f;
        return flatDirection.sqrMagnitude > 0.0001f
            ? Vector3.Cross(flatDirection.normalized, Vector3.up)
            : Vector3.right;
    }

    private IEnumerator AnimateDisappear(Transform stackRoot, float duration)
    {
        if (stackRoot == null) yield break;

        var startScale = stackRoot.localScale;
        float t = 0f;
        while (t < duration)
        {
            t += Time.deltaTime;
            stackRoot.localScale = Vector3.Lerp(startScale, Vector3.zero, Mathf.Clamp01(t / duration));
            yield return null;
        }

        stackRoot.localScale = Vector3.zero;
    }

    private bool IsBoardFullyCleared()
    {
        foreach (var cell in cells)
            if (!cell.IsEmpty) return false;
        return true;
    }
}
