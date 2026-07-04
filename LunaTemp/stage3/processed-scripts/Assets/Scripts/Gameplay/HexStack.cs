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
    private BoxCollider hitCollider;

    // true только для стопок, заданных прямо в сцене через initialColors (стопки лотка,
    // существующие с самого старта, см. Awake) — только им реально может понадобиться личная
    // копия материала (SetAlwaysOnTop во время драга). Стопки, которые BoardManager создаёт
    // процедурно на старте игры через Initialize (стартовые стопки поля), не двигаются никогда,
    // поэтому копия материала им не нужна — остаётся false.
    private bool piecesNeedAlwaysOnTopMaterial;

    public int Count => pieces.Count;
    public bool IsEmpty => pieces.Count == 0;
    public HexColor TopColor => pieces[GetTopPieceIndex()].Color;

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

    // Помечена как участник ТЕКУЩЕЙ цепной реакции (донор или получатель любой передачи, либо
    // стартовая стопка). Прямое поле на самой стопке — надёжно в билде Luna, в отличие от наборов
    // по ссылке (HashSet/List.Contains) и по внешнему индексу (bool[]), которые там теряли элементы.
    // По окончании реакции BoardManager проверяет все помеченные стопки и уничтожает ставшие
    // одноцветными, тут же снимая флаг.
    [System.NonSerialized] public bool InReaction;

    private void Awake()
    {
        hitCollider = GetComponent<BoxCollider>();

        if (pieces.Count == 0 && initialColors.Count > 0 && piecePrefab != null && palette != null)
        {
            piecesNeedAlwaysOnTopMaterial = true;
            BuildFromColors(initialColors);
        }
    }

    // Используется BoardManager-ом для процедурного создания стопок (например, стартовых на поле).
    // Если на объекте уже что-то заспавнено (например, Awake() успел собрать initialColors) —
    // сначала чистим, чтобы не задвоить фишки. needsAlwaysOnTopMaterial по умолчанию false
    // (стартовые стопки поля неподвижны, копия материала им не нужна) — TrayRefillManager явно
    // передаёт true для новых стопок лотка, которые реально можно таскать.
    public void Initialize(IReadOnlyList<HexColor> colors, HexPieceView prefab, HexColorPalette colorPalette, bool needsAlwaysOnTopMaterial = false)
    {
        piecePrefab = prefab;
        palette = colorPalette;
        piecesNeedAlwaysOnTopMaterial = needsAlwaysOnTopMaterial;

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
        piece.transform.localPosition = GetLocalPositionForIndex(pieces.Count);
        piece.transform.localRotation = Quaternion.identity;
        piece.SetNeedsAlwaysOnTopMaterial(piecesNeedAlwaysOnTopMaterial);
        piece.SetColor(color, palette);
        pieces.Add(piece);
        UpdateHitCollider();
    }

    // Локальная позиция фишки с данным индексом в стопке (снизу вверх, от 0).
    // Даже первая фишка (index 0) уже смещена на один шаг perPieceOffset от позиции самой
    // ячейки/корня стопки — а не стоит вплотную к нулю — каждая следующая смещается ещё на
    // perPieceOffset дальше, так и получается "лесенка" со ступенькой -0.05 по X.
    private Vector3 GetLocalPositionForIndex(int index)
    {
        return perPieceOffset * (index + 1);
    }

    // Мировая позиция следующего свободного слота сверху стопки — куда должна прилететь новая фишка.
    // reserved — сколько слотов уже "забронировано" под фишки, которые летят сюда прямо сейчас,
    // но ещё не приземлились (pieces.Count растёт только при реальном AppendPiece при посадке) —
    // без этого несколько фишек, запущенных внахлёст, целились бы в один и тот же слот.
    public Vector3 GetNextSlotWorldPosition(int reserved = 0)
    {
        return transform.TransformPoint(GetLocalPositionForIndex(pieces.Count + reserved));
    }

    public Vector3 GetTopWorldPosition()
    {
        return pieces.Count == 0 ? transform.position : pieces[GetTopPieceIndex()].transform.position;
    }

    // Индекс "верхней" фишки стопки (от неё зависят TopColor и то, какие фишки переносить).
    // "Верх" — это конец лесенки с наибольшей мировой Y. Определяем его по НАПРАВЛЕНИЮ роста стопки
    // (perPieceOffset, повёрнутый на текущий поворот стопки), а НЕ сравнением почти равных
    // world.position.y у каждой фишки. Причина: когда стопка растёт горизонтально (y-компонента
    // шага ≈ 0), у всех фишок почти одинаковая высота, и пофишковое сравнение float в билде Luna
    // (IL2CPP/WebGL) и редакторе (Mono) округлялось ПО-РАЗНОМУ — в билде TopColor "колебался",
    // из-за чего слияние переносило НЕ ТУ фишку и стопка после слияния оставалась НЕ монохромной
    // в данных (хотя визуально выглядела одноцветной) → её не удаляло. Симптом был строго
    // позиционным и только в билде. Знак y-компоненты шага детерминирован и одинаков везде:
    //   растёт вверх  → верх = последняя добавленная (Count-1);
    //   растёт вниз   → верх = первая (0);
    //   почти плоская → детерминированно последняя добавленная (логический верх стопки).
    private int GetTopPieceIndex()
    {
        if (pieces.Count == 0) return 0;

        Vector3 worldStep = transform.rotation * perPieceOffset;
        const float flatThreshold = 1e-3f;
        if (worldStep.y < -flatThreshold) return 0;
        return pieces.Count - 1;
    }

    // Включает/выключает "поверх всего" сразу на всех фишках стопки — см. HexPieceView.SetAlwaysOnTop
    // и StackDragHandler (включается на время активного драга).
    public void SetAlwaysOnTop(bool alwaysOnTop)
    {
        foreach (var piece in pieces)
            piece.SetAlwaysOnTop(alwaysOnTop);
    }

    // См. HexPieceView.SetGlow — применяется сразу ко всем фишкам стопки.
    public void SetGlow(float multiplier)
    {
        foreach (var piece in pieces)
            piece.SetGlow(multiplier);
    }

    // Переносит саму стопку и все её фишки на другой слой (Layer) — используется тутором
    // (TutorialSpotlightOverlay/TutorialHandController) для "прожектора": камера-подсветка видит
    // только объекты на специальном слое, остальное перекрывается затемняющей панелью.
    public void SetLayer(int layer)
    {
        gameObject.layer = layer;
        foreach (var piece in pieces)
            piece.gameObject.layer = layer;
    }

    // Снимает верхнюю фишку для перелёта в другую стопку. Сам GameObject не уничтожается —
    // им управляет BoardManager.AnimatePieceTransfer, пока летит дугой к месту назначения.
    public HexPieceView PopTopPiece()
    {
        if (pieces.Count == 0) return null;
        int topIndex = GetTopPieceIndex();
        var piece = pieces[topIndex];
        pieces.RemoveAt(topIndex);
        UpdateHitCollider();
        return piece;
    }

    // Принимает фишку, прилетевшую из другой стопки, и доращивает стопку на её законное место.
    public void AppendPiece(HexPieceView piece)
    {
        piece.transform.SetParent(transform, true);
        piece.transform.localPosition = GetLocalPositionForIndex(pieces.Count);
        piece.transform.localRotation = Quaternion.identity;
        pieces.Add(piece);
        UpdateHitCollider();
    }

    // Подгоняет BoxCollider (используется OnMouseDown/OnMouseDrag в StackDragHandler) точно под
    // текущий набор фишек, а не под дефолтный куб 1x1x1 — иначе клик рядом со стопкой, но мимо
    // видимых фишек, всё равно засчитывался бы как клик по стопке.
    private void UpdateHitCollider()
    {
        if (hitCollider == null) return;

        if (pieces.Count == 0)
        {
            hitCollider.size = Vector3.zero;
            return;
        }

        Vector3 min = Vector3.positiveInfinity;
        Vector3 max = Vector3.negativeInfinity;

        foreach (var piece in pieces)
        {
            var halfExtent = piece.transform.localScale * 0.5f;
            var pos = piece.transform.localPosition;
            min = Vector3.Min(min, pos - halfExtent);
            max = Vector3.Max(max, pos + halfExtent);
        }

        hitCollider.center = (min + max) * 0.5f;
        hitCollider.size = max - min;
    }
}
