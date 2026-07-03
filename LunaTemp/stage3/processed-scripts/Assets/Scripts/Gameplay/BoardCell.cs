using System.Collections.Generic;
using UnityEngine;

// Пустая ячейка поля (отдельный шестиугольник с материалом OctagonWhiteForBoard).
// Саму ячейку двигать нельзя, и ставить стопку на стопку нельзя — только на свободную ячейку.
public class BoardCell : MonoBehaviour
{
    [Tooltip("Если включено — BoardManager сам вычислит Axial Coord из мировой позиции ячейки " +
             "(см. BoardManager.gridOrigin/columnSpacing/rowSpacing) и значение ниже перезапишется. " +
             "Выключите, если для этой ячейки нужны координаты, не выводимые из позиции.")]
    [SerializeField] private bool autoComputeAxialFromPosition = true;

    [Tooltip("Осевые координаты ячейки в гекс-сетке (axial q,r). " +
             "Соседи определяются по 6 стандартным гекс-смещениям от этих координат.")]
    [SerializeField] private Vector2Int axialCoord;

    [Tooltip("Если на старте на этой ячейке уже стоит стопка — перечислите её цвета снизу вверх.")]
    [SerializeField] private List<HexColor> initialStackColors = new List<HexColor>();

    [Tooltip("Можно ли ЗАБИРАТЬ стопку, которая уже стоит на этой ячейке (см. StackDragHandler.OnMouseDown). " +
             "Не влияет на то, можно ли СЮДА поставить стопку из лотка — свободная ячейка всегда " +
             "принимает дроп независимо от этой галки. Выключите для ячеек со стартовыми стопками поля, " +
             "которые должны быть неподвижными.")]
    [SerializeField] private bool isClickable = true;

    public bool AutoComputeAxialFromPosition => autoComputeAxialFromPosition;
    public Vector2Int AxialCoord => axialCoord;
    public IReadOnlyList<HexColor> InitialStackColors => initialStackColors;
    public bool IsClickable => isClickable;

    public void SetAxialCoord(Vector2Int coord) => axialCoord = coord;

    public HexStack CurrentStack { get; set; }
    public bool IsEmpty => CurrentStack == null;
    public Vector3 SnapPosition => transform.position;
}
