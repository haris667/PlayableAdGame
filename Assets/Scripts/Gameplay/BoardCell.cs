using System.Collections.Generic;
using UnityEngine;

// Пустая ячейка поля (отдельный шестиугольник с материалом OctagonWhiteForBoard).
// Саму ячейку двигать нельзя, и ставить стопку на стопку нельзя — только на свободную ячейку.
public class BoardCell : MonoBehaviour
{
    [Tooltip("Осевые координаты ячейки в гекс-сетке (axial q,r). " +
             "Соседи определяются по 6 стандартным гекс-смещениям от этих координат.")]
    [SerializeField] private Vector2Int axialCoord;

    [Tooltip("Если на старте на этой ячейке уже стоит стопка — перечислите её цвета снизу вверх.")]
    [SerializeField] private List<HexColor> initialStackColors = new List<HexColor>();

    public Vector2Int AxialCoord => axialCoord;
    public IReadOnlyList<HexColor> InitialStackColors => initialStackColors;

    public HexStack CurrentStack { get; set; }
    public bool IsEmpty => CurrentStack == null;
    public Vector3 SnapPosition => transform.position;
}
