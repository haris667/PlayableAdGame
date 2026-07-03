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
    [SerializeField] private float baseJumpDuration = 0.18f;
    [SerializeField] private float baseClearDuration = 0.25f;
    [Tooltip("Во сколько раз ускоряется перелёт/исчезновение после каждой схлопнувшейся стопки в одной цепочке.")]
    [SerializeField] private float speedMultiplierPerClear = 1.3f;

    [SerializeField] private HexJumpAnimator jumpAnimator;

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
        }
    }

    // Вычисляет (q, r) каждой ячейки из её мировой позиции относительно gridOrigin, чтобы не
    // проставлять координаты руками. Формула обратна той, по которой сама сетка была построена:
    // world.x = origin.x + columnSpacing * q
    // world.z = origin.z + rowSpacing * (r + q / 2)
    private void ComputeAxialCoordinates()
    {
        if (gridOrigin == null) return;

        foreach (var cell in cells)
        {
            if (!cell.AutoComputeAxialFromPosition) continue;

            var delta = cell.transform.position - gridOrigin.position;
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

    // Волна цепной реакции от только что поставленной ячейки: одинаковые цвета "перетекают"
    // в соседние стопки, где этот цвет тоже наверху; стопка, ставшая однотонной, исчезает.
    // Скорость анимаций множится на speedMultiplierPerClear за каждую схлопнувшуюся в этой волне стопку.
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

                var activeStack = cell.CurrentStack;
                if (activeStack == null || activeStack.IsEmpty) continue;

                foreach (var neighbor in GetNeighbors(cell))
                {
                    if (activeStack.IsEmpty) break;

                    var neighborStack = neighbor.CurrentStack;
                    if (neighborStack == null || neighborStack.IsEmpty) continue;
                    if (neighborStack.TopColor != activeStack.TopColor) continue;

                    yield return TransferMatchingColor(neighborStack, activeStack, speedMultiplier);

                    if (neighborStack.IsEmpty)
                    {
                        Destroy(neighborStack.gameObject);
                        neighbor.CurrentStack = null;
                    }
                    else if (neighborStack.IsMonochrome)
                    {
                        yield return ClearStack(neighbor, speedMultiplier);
                        speedMultiplier *= speedMultiplierPerClear;
                    }
                    else if (queued.Add(neighbor))
                    {
                        queue.Enqueue(neighbor);
                    }
                }

                if (activeStack.IsMonochrome)
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

    // Перекидывает по одной все фишки совпадающего верхнего цвета из донора в получателя, с дугой-анимацией.
    private IEnumerator TransferMatchingColor(HexStack donorStack, HexStack receiverStack, float speedMultiplier)
    {
        var matchColor = receiverStack.TopColor;

        while (!donorStack.IsEmpty && donorStack.TopColor == matchColor)
        {
            var piece = donorStack.PopTopPiece();
            var from = piece.transform.position;
            var to = receiverStack.GetNextSlotWorldPosition();
            float duration = baseJumpDuration / speedMultiplier;

            // На время перелёта фишка не привязана ни к донору, ни к получателю —
            // так масштаб/поворот стопок её не задевает, пока она летит и переворачивается.
            piece.transform.SetParent(null, true);
            yield return jumpAnimator.AnimatePieceTransfer(piece.transform, from, to, duration);
            receiverStack.AppendPiece(piece);
        }
    }

    private IEnumerator ClearStack(BoardCell cell, float speedMultiplier)
    {
        var stack = cell.CurrentStack;
        cell.CurrentStack = null;
        if (stack == null) yield break;

        float duration = baseClearDuration / speedMultiplier;
        yield return jumpAnimator.AnimateDisappear(stack.transform, duration);
        Destroy(stack.gameObject);
    }

    private bool IsBoardFullyCleared()
    {
        foreach (var cell in cells)
            if (!cell.IsEmpty) return false;
        return true;
    }
}
