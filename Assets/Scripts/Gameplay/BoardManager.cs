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
    [Tooltip("Во сколько раз ускоряется перелёт/исчезновение после каждой схлопнувшейся стопки в одной цепочке.")]
    [SerializeField] private float speedMultiplierPerClear = 1.3f;

    [Header("Исчезновение схлопнувшейся стопки")]
    [Tooltip("Время, за которое три верхние фишки сплющиваются по Y/Z — быстрое и резкое, отдельно " +
             "от проваливания вниз (см. sinkDuration).")]
    [SerializeField] private float squashDuration = 0.15f;
    [Tooltip("Время, за которое стопка проваливается вниз до sinkTargetY — медленное и плавное, " +
             "не связанное с длительностью сплющивания фишек.")]
    [SerializeField] private float sinkDuration = 0.6f;
    [Tooltip("Абсолютная мировая координата Y, до которой проваливается стопка перед уничтожением " +
             "(не смещение, а именно конечная координата).")]
    [SerializeField] private float sinkTargetY = -10f;
    [Tooltip("Целевой масштаб по Y/Z для трёх верхних фишек стопки при исчезновении, по порядку: " +
             "самая верхняя, вторая сверху, третья сверху (в Hierarchy редактора это последние " +
             "по счёту дочерние объекты стопки — самые нижние строчки в списке детей).")]
    [SerializeField] private float[] topPieceSquashScaleYZ = { 0.1f, 0.2f, 0.3f };
    [Tooltip("Мировой уровень Y, ниже которого шейдер Game/AlwaysOnTop сам обрезает (clip) пиксели " +
             "фишки — см. AlwaysOnTop.shader/_ClipY. Проваливаясь под доску, фишка уходит ниже этого " +
             "уровня и перестаёт рисоваться, вместо ручного включения/выключения Renderer.")]
    [SerializeField] private float pieceClipPlaneY = 0f;
    [Tooltip("Партикл-эффект, проигрывается на месте стопки, когда она полностью исчезла. Цвет " +
             "частиц (ParticleSystem.MainModule.startColor) подстраивается под цвет исчезнувшей " +
             "стопки — берётся из того же material palette.GetMaterial(color), что и у самих фишек.")]
    [SerializeField] private ParticleSystem destroyStackEffectPrefab;
    [Tooltip("За сколько секунд ДО конца анимации проваливания (до Destroy стопки) запускать " +
             "партикл-эффект — например, 1 значит 'за секунду до конца', а не задержка от начала. " +
             "Подберите так, чтобы совпадало с моментом, когда стопка визуально скрывается под " +
             "маской доски (_ClipY).")]
    [SerializeField] private float destroyEffectOffsetBeforeEnd = 1f;

    [Header("Дуга перелёта фишки")]
    [SerializeField] private AnimationCurve jumpEasing = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
    [Tooltip("Задержка между стартами перелёта соседних фишек в одном трансфере — они летят не разом, " +
             "а внахлёст друг за другом.")]
    [SerializeField] private float jumpStartStagger = 0.1f;
    [Tooltip("Короткий довороток сразу после приземления до фактической ориентации стопки-получателя, " +
             "чтобы не было рывка в момент, когда AppendPiece сбрасывает поворот фишки.")]
    [SerializeField] private float landingSettleDuration = 0.08f;

    private readonly Dictionary<Vector2Int, BoardCell> cellByCoord = new Dictionary<Vector2Int, BoardCell>();
    private bool chainRunning;

    // Срабатывает, когда после цепной реакции на поле не осталось ни одной стопки —
    // GameFlowController может досрочно перейти к пэкшоту, не дожидаясь таймера.
    public event Action OnBoardCleared;

    public bool IsChainRunning => chainRunning;

    // Например, TutorialHandController использует это, чтобы указать руку на любую свободную ячейку.
    public IReadOnlyList<BoardCell> Cells => cells;

    private static readonly int ClipYShaderId = Shader.PropertyToID("_ClipY");

    private void Awake()
    {
        // Глобальное свойство шейдера — общее сразу для всех материалов Game/AlwaysOnTop,
        // отдельно настраивать на каждом не нужно (см. AlwaysOnTop.shader).
        Shader.SetGlobalFloat(ClipYShaderId, pieceClipPlaneY);

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
        // Стопки, ставшие однотонными где-то в процессе цепочки, не исчезают сразу на месте —
        // это могло бы визуально "провалить" стопку раньше, чем ей ещё передадут фишки где-то
        // дальше по той же волне (например, если она позже снова окажется получателем). Ячейка
        // логически освобождается (CurrentStack = null) сразу, чтобы BFS корректно считал её
        // пустой и не пытался мёржить с ней дальше, а сама визуальная анимация исчезновения
        // копится в этом списке и запускается только один раз — после того, как ВСЯ цепочка
        // передач полностью завершится (см. конец try). Сначала передаются все доступные
        // шестиугольники по всей цепочке — потом исчезновение стопок.
        var pendingDisappear = new List<(HexStack stack, float speedMultiplier, HexColor color)>();

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

                    // ВАЖНО: однотонность (IsMonochrome) сама по себе — НЕ повод немедленно
                    // финализировать стопку прямо здесь. У неё (или у cell) могут быть ЕЩЁ не
                    // проверенные в этом проходе соседи того же цвета, с которыми она должна
                    // сначала успеть провзаимодействовать (отдать/принять ещё) — иначе стопка
                    // "исчезает" раньше, чем должна была получить фишки от другого соседа.
                    // Единственный повод финализировать прямо сейчас — стопка ОПУСТЕЛА (ей больше
                    // некого/нечего проверять). Однотонный, но не пустой донор/получатель просто
                    // встаёт в очередь на полный проход по СВОИМ соседям — донор наравне с
                    // получателем, независимо от того, кто из них сейчас cell, а кто neighbor.
                    // Реально "схлопнуть" однотонную стопку мы решаем только один раз — после
                    // того, как у неё проверены ВСЕ соседи (см. ниже, после этого foreach).
                    if (donorStack.IsEmpty)
                    {
                        Destroy(donorStack.gameObject);
                        donorCell.CurrentStack = null;
                    }
                    else if (donorCell != cell && queued.Add(donorCell))
                    {
                        queue.Enqueue(donorCell);
                    }

                    if (receiverCell != cell && queued.Add(receiverCell))
                    {
                        queue.Enqueue(receiverCell);
                    }
                }

                // Только теперь, проверив ВСЕХ соседей cell в этом проходе, решаем её судьбу:
                // если стопка однотонна — значит, ей больше не с кем сливаться дальше (иначе
                // foreach выше уже бы это обработал и, возможно, "разбавил" её обратно), и она
                // окончательно схлопывается.
                if (cell.CurrentStack != null && cell.CurrentStack.IsMonochrome)
                {
                    var finalStack = cell.CurrentStack;
                    cell.CurrentStack = null;
                    pendingDisappear.Add((finalStack, speedMultiplier, finalStack.TopColor));
                    speedMultiplier *= speedMultiplierPerClear;
                }
            }

            // Разные стопки одной волны могут иметь разный speedMultiplier (он растёт после каждого
            // схлопнувшегося звена цепочки), а значит и разную длительность собственной анимации
            // проваливания — "за X секунд до СВОЕГО конца" у каждой получалось бы в разный момент
            // реального времени. Партиклы синхронизируем по самой долгой анимации во всей пачке —
            // тогда все, кто исчезает в одной волне, показывают эффект одновременно.
            float particleSyncDuration = 0f;
            foreach (var (_, mult, _) in pendingDisappear)
                particleSyncDuration = Mathf.Max(particleSyncDuration, squashDuration / mult, sinkDuration / mult);

            var disappearFlights = new List<Coroutine>();
            foreach (var (stack, mult, color) in pendingDisappear)
                disappearFlights.Add(StartCoroutine(AnimateAndDestroy(stack, mult, color, particleSyncDuration)));
            foreach (var flight in disappearFlights)
                yield return flight;
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

        // AppendPiece сразу после этого ставит localRotation = identity относительно receiverStack
        // (т.е. итоговый мировой поворот станет receiverStack.transform.rotation) — расхождение
        // оказалось не только по X (там оно было заметнее всего), но и по остальным осям тоже,
        // просто меньше — поэтому довороток теперь по всем осям сразу, одним Slerp.
        yield return SmoothRotateTo(piece.transform, receiverStack.transform.rotation, landingSettleDuration);

        receiverStack.AppendPiece(piece);
    }

    private IEnumerator SmoothRotateTo(Transform target, Quaternion targetRotation, float duration)
    {
        if (target == null) yield break;

        var fromRotation = target.rotation;
        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            target.rotation = Quaternion.Slerp(fromRotation, targetRotation, Mathf.Clamp01(elapsed / duration));
            yield return null;
        }

        target.rotation = targetRotation;
    }

    private IEnumerator AnimateAndDestroy(HexStack stack, float speedMultiplier, HexColor color, float particleSyncDuration)
    {
        if (stack == null) yield break;

        // Позиция ДО проваливания — стопка в итоге уходит под доску (sinkTargetY), и партикл на
        // финальной позиции был бы попросту невидим под ней. Эффект должен появиться там, где
        // стопка реально стояла на поле.
        var spawnPosition = stack.transform.position;

        var disappearRoutine = StartCoroutine(AnimateDisappear(
            stack.transform, squashDuration / speedMultiplier, sinkDuration / speedMultiplier));

        // Партикл — за destroyEffectOffsetBeforeEnd секунд до конца САМОЙ ДОЛГОЙ анимации во всей
        // пачке одновременно исчезающих стопок (particleSyncDuration), а не до конца собственной,
        // возможно куда более короткой из-за ускорения по speedMultiplier — иначе несколько стопок
        // одной волны показывали бы партиклы вразнобой, а не одновременно.
        float delayBeforeSpawn = Mathf.Max(0f, particleSyncDuration - destroyEffectOffsetBeforeEnd);
        yield return new WaitForSeconds(delayBeforeSpawn);
        SpawnDestroyEffect(spawnPosition, color);

        yield return disappearRoutine;
        Destroy(stack.gameObject);
    }

    // Партикл-эффект окрашивается под цвет исчезнувшей стопки — берём тот же материал, что и у
    // фишек этого цвета (palette.GetMaterial), и переносим его _Color в startColor системы частиц.
    private void SpawnDestroyEffect(Vector3 position, HexColor color)
    {
        if (destroyStackEffectPrefab == null) return;

        var effect = Instantiate(destroyStackEffectPrefab, position, destroyStackEffectPrefab.transform.rotation);

        var sourceMaterial = palette != null ? palette.GetMaterial(color) : null;
        if (sourceMaterial != null)
        {
            var main = effect.main;
            main.startColor = new ParticleSystem.MinMaxGradient(sourceMaterial.color);
        }

        Destroy(effect.gameObject, 2f);
    }

    // "Переваливание" фишки через ребро между старой и новой ячейкой — позиция и поворот здесь
    // не два независимых расчёта (как раньше — отдельно дуга по Y, отдельно поворот), а буквально
    // ОДНО вращение: фишка крутится вокруг горизонтальной оси, проходящей через середину пути
    // (то самое общее ребро между ячейками), перпендикулярной направлению движения. Поворот на 180°
    // вокруг точки строго между start и end — это точечное отражение, поэтому он гарантированно
    // переносит фишку из start ровно в end одним и тем же движением, которым она и переворачивается,
    // без какого-либо рассинхрона/лишнего кручения в сторону.
    private IEnumerator MoveHexWithArc(GameObject hex, Vector3 startPos, Vector3 endPos, float duration)
    {
        if (hex == null) yield break;

        var hexTransform = hex.transform;
        var startRotation = hexTransform.rotation;

        var pivot = (startPos + endPos) * 0.5f; // середина пути — точка на общем ребре ячеек
        var startOffset = startPos - pivot;      // радиус-вектор от ребра до старта

        var flatDirection = endPos - startPos;
        flatDirection.y = 0f;
        // Знак оси определяет, с какой стороны идёт дуга — сверху или снизу через pivot;
        // Cross(up, direction), а не Cross(direction, up), даёт проход через верх.
        var flipAxis = flatDirection.sqrMagnitude > 0.0001f
            ? Vector3.Cross(Vector3.up, flatDirection.normalized)
            : Vector3.right;

        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            // AnimationCurve даёт eased-прогресс n (ускорение в начале, замедление в конце).
            float n = jumpEasing.Evaluate(Mathf.Clamp01(elapsed / duration));

            // Одно и то же вращение (delta) одновременно поворачивает саму фишку и её позицию
            // вокруг ребра — на пике (n=0.5, 90°) она ровно на ребре, к n=1 (180°) она точно
            // в endPos, потому что 180°-поворот точки вокруг pivot — это точечное отражение.
            var delta = Quaternion.AngleAxis(n * 180f, flipAxis);
            hexTransform.position = pivot + delta * startOffset;
            hexTransform.rotation = delta * startRotation;

            yield return null;
        }

        hexTransform.position = endPos;
        hexTransform.rotation = Quaternion.AngleAxis(180f, flipAxis) * startRotation;
    }

    // Стопка не схлопывается в точку, а проваливается вниз до абсолютной координаты sinkTargetY,
    // будто уходит под доску. Сплющивание трёх верхних фишек (последние по счёту дочерние объекты
    // стопки — см. HexStack.SpawnPieceAtTop: каждая следующая фишка добавляется последней и в
    // списке, и в Hierarchy) идёт на СВОЕЙ отдельной длительности squashDur — обычно короткой и
    // резкой, тогда как проваливание (sinkDur) — медленное и плавное; оба стартуют одновременно
    // (t=0), но у каждого свой прогресс, и более короткая анимация просто держит финальное
    // значение, пока не закончится более длинная.
    private IEnumerator AnimateDisappear(Transform stackRoot, float squashDur, float sinkDur)
    {
        if (stackRoot == null) yield break;

        var startPos = stackRoot.position;
        var endPos = new Vector3(startPos.x, sinkTargetY, startPos.z);

        int squashCount = Mathf.Min(topPieceSquashScaleYZ.Length, stackRoot.childCount);
        var topPieces = new Transform[squashCount];
        var topStartScales = new Vector3[squashCount];
        for (int i = 0; i < squashCount; i++)
        {
            topPieces[i] = stackRoot.GetChild(stackRoot.childCount - 1 - i);
            topStartScales[i] = topPieces[i].localScale;
        }

        float duration = Mathf.Max(squashDur, sinkDur);
        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float sinkN = sinkDur > 0f ? Mathf.Clamp01(elapsed / sinkDur) : 1f;
            stackRoot.position = Vector3.Lerp(startPos, endPos, sinkN);

            float squashN = squashDur > 0f ? Mathf.Clamp01(elapsed / squashDur) : 1f;
            for (int i = 0; i < squashCount; i++)
            {
                var scale = topStartScales[i];
                float targetYZ = topPieceSquashScaleYZ[i];
                scale.y = Mathf.Lerp(topStartScales[i].y, targetYZ, squashN);
                scale.z = Mathf.Lerp(topStartScales[i].z, targetYZ, squashN);
                topPieces[i].localScale = scale;
            }

            yield return null;
        }

        stackRoot.position = endPos;
        for (int i = 0; i < squashCount; i++)
        {
            var scale = topPieces[i].localScale;
            scale.y = topPieceSquashScaleYZ[i];
            scale.z = topPieceSquashScaleYZ[i];
            topPieces[i].localScale = scale;
        }
    }

    private bool IsBoardFullyCleared()
    {
        foreach (var cell in cells)
            if (!cell.IsEmpty) return false;
        return true;
    }
}
