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

    [Header("Шаблоны для стартовых стопок на поле")]
    [SerializeField] private HexStack stackPrefab;
    [SerializeField] private HexPieceView piecePrefab;
    [SerializeField] private HexColorPalette palette;

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

    private void Awake()
    {
        if (cellsParent != null && cells.Count == 0)
            cells.AddRange(cellsParent.GetComponentsInChildren<BoardCell>());

        foreach (var cell in cells)
            cellByCoord[cell.AxialCoord] = cell;
    }

    private void Start()
    {
        // Расставляем стопки, заранее заданные дизайнером на ячейках — это и есть
        // "поле с шестиугольниками", в которое игрок подмешивает стопки из лотка.
        foreach (var cell in cells)
        {
            if (cell.InitialStackColors.Count == 0) continue;

            var stack = Instantiate(stackPrefab, cell.SnapPosition, Quaternion.identity);
            stack.Initialize(cell.InitialStackColors, piecePrefab, palette);
            stack.CurrentCell = cell;
            cell.CurrentStack = stack;

            // Стартовые стопки на поле — не перетаскиваемые, в отличие от стопок лотка.
            var drag = stack.GetComponent<StackDragHandler>();
            if (drag != null) drag.enabled = false;
        }
    }

    // Ближайшая свободная ячейка к мировой точке (используется при отпускании стопки игроком).
    public BoardCell GetClosestEmptyCell(Vector3 worldPosition, float maxDistance)
    {
        BoardCell best = null;
        float bestDist = maxDistance;

        foreach (var cell in cells)
        {
            if (!cell.IsEmpty) continue;
            float dist = Vector3.Distance(cell.SnapPosition, worldPosition);
            if (dist <= bestDist)
            {
                bestDist = dist;
                best = cell;
            }
        }

        return best;
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

        chainRunning = false;
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
