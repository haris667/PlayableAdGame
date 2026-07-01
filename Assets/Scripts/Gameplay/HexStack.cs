using System.Collections.Generic;
using UnityEngine;

// Стопка шестиугольников: и стопка в лотке, которую тащит игрок, и стопка, уже стоящая на ячейке поля.
// Состав хранится снизу вверх. Визуально фишки складываются с тем же шагом смещения,
// что уже задан художником в макете сцены (см. perPieceOffset).
[RequireComponent(typeof(BoxCollider))]
public class HexStack : MonoBehaviour
{
    [Header("Спавн фишек")]
    [SerializeField] private HexPieceView piecePrefab;
    [SerializeField] private HexColorPalette palette;

    [Tooltip("Локальное смещение каждой следующей фишки относительно предыдущей.")]
    [SerializeField] private Vector3 perPieceOffset = new Vector3(-0.05f, 0f, 0f);

    [Header("Стопка, заданная прямо в сцене (необязательно)")]
    [Tooltip("Если стопка размещена в сцене вручную (например, одна из трёх стопок лотка), " +
             "перечислите её цвета снизу вверх — фишки заспавнятся автоматически при старте.")]
    [SerializeField] private List<HexColor> initialColors = new List<HexColor>();

    private readonly List<HexPieceView> pieces = new List<HexPieceView>();

    public int Count => pieces.Count;
    public bool IsEmpty => pieces.Count == 0;
    public HexColor TopColor => pieces[pieces.Count - 1].Color;

    public bool IsMonochrome
    {
        get
        {
            if (pieces.Count == 0) return false;
            var color = pieces[0].Color;
            for (int i = 1; i < pieces.Count; i++)
                if (pieces[i].Color != color)
                    return false;
            return true;
        }
    }

    // Ячейка поля, на которой сейчас стоит стопка. Null, пока стопка в лотке.
    public BoardCell CurrentCell { get; set; }

    private void Awake()
    {
        if (pieces.Count == 0 && initialColors.Count > 0 && piecePrefab != null && palette != null)
            BuildFromColors(initialColors);
    }

    // Используется BoardManager-ом для процедурного создания стопок (например, стартовых на поле).
    // Если на объекте уже что-то заспавнено (например, Awake() успел собрать initialColors) —
    // сначала чистим, чтобы не задвоить фишки.
    public void Initialize(IReadOnlyList<HexColor> colors, HexPieceView prefab, HexColorPalette colorPalette)
    {
        piecePrefab = prefab;
        palette = colorPalette;

        for (int i = 0; i < pieces.Count; i++)
            if (pieces[i] != null) Destroy(pieces[i].gameObject);
        pieces.Clear();

        BuildFromColors(colors);
    }

    private void BuildFromColors(IReadOnlyList<HexColor> colors)
    {
        for (int i = 0; i < colors.Count; i++)
            SpawnPieceAtTop(colors[i]);
    }

    private void SpawnPieceAtTop(HexColor color)
    {
        var piece = Instantiate(piecePrefab, transform);
        piece.transform.localPosition = perPieceOffset * pieces.Count;
        piece.transform.localRotation = Quaternion.identity;
        piece.SetColor(color, palette);
        pieces.Add(piece);
    }

    // Мировая позиция следующего свободного слота сверху стопки — куда должна прилететь новая фишка.
    public Vector3 GetNextSlotWorldPosition()
    {
        return transform.TransformPoint(perPieceOffset * pieces.Count);
    }

    public Vector3 GetTopWorldPosition()
    {
        return pieces.Count == 0 ? transform.position : pieces[pieces.Count - 1].transform.position;
    }

    // Снимает верхнюю фишку для перелёта в другую стопку. Сам GameObject не уничтожается —
    // им управляет HexJumpAnimator, пока летит дугой к месту назначения.
    public HexPieceView PopTopPiece()
    {
        if (pieces.Count == 0) return null;
        var piece = pieces[pieces.Count - 1];
        pieces.RemoveAt(pieces.Count - 1);
        return piece;
    }

    // Принимает фишку, прилетевшую из другой стопки, и доращивает стопку на её законное место.
    public void AppendPiece(HexPieceView piece)
    {
        piece.transform.SetParent(transform, true);
        piece.transform.localPosition = perPieceOffset * pieces.Count;
        piece.transform.localRotation = Quaternion.identity;
        pieces.Add(piece);
    }
}
