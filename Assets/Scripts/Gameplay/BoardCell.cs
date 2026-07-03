using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Пустая ячейка поля (отдельный шестиугольник с материалом OctagonWhiteForBoard).
// Саму ячейку двигать нельзя, и ставить стопку на стопку нельзя — только на свободную ячейку.
public class BoardCell : MonoBehaviour
{
    private static readonly int ColorPropertyId = Shader.PropertyToID("_Color");

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

    // Мировая позиция для установки стопки — всегда базовая (не поднятая), даже если прямо сейчас
    // идёт анимация подсветки: иначе стопка, поставленная в момент угасания подсветки, могла бы
    // на мгновение поймать ещё не до конца опустившуюся высоту ячейки.
    public Vector3 SnapPosition
    {
        get
        {
            var localPos = transform.localPosition;
            localPos.y = basePositionY;
            return transform.parent != null ? transform.parent.TransformPoint(localPos) : localPos;
        }
    }

    private MeshRenderer cellRenderer;
    private MaterialPropertyBlock propertyBlock;
    private CellHighlightConfig highlightConfig;
    private Coroutine highlightRoutine;
    private Color currentColor = Color.white;
    private float baseScaleX;
    private float basePositionY;
    private float currentScaleX;
    private float currentPositionY;
    private bool isHighlighted;

    private void Awake()
    {
        cellRenderer = GetComponentInChildren<MeshRenderer>();
        propertyBlock = new MaterialPropertyBlock();

        // "Обычное" состояние — то, с каким масштабом/позицией ячейка стоит в сцене изначально;
        // конфиг задаёт только состояние "подсвечено", а не оба состояния сразу.
        baseScaleX = transform.localScale.x;
        basePositionY = transform.localPosition.y;
        currentScaleX = baseScaleX;
        currentPositionY = basePositionY;
    }

    // Вызывается BoardManager-ом один раз при старте, чтобы не назначать один и тот же
    // ассет цветов подсветки вручную на каждую из ячеек поля.
    public void SetHighlightConfig(CellHighlightConfig config)
    {
        highlightConfig = config;
        currentColor = config != null ? config.NormalColor : Color.white;
        ApplyColor(currentColor);
    }

    // Плавно (интерполяцией) переключает ячейку между обычным и подсвеченным состоянием —
    // цвет, масштаб по X и подъём по Y — используется StackDragHandler-ом, пока игрок держит
    // стопку над полем.
    public void SetHighlighted(bool highlighted)
    {
        if (isHighlighted == highlighted) return;
        isHighlighted = highlighted;

        if (highlightRoutine != null) StopCoroutine(highlightRoutine);
        highlightRoutine = StartCoroutine(AnimateHighlight(highlighted));
    }

    private IEnumerator AnimateHighlight(bool highlighted)
    {
        Color targetColor = Color.white;
        float targetScaleX = baseScaleX;
        float targetPositionY = basePositionY;
        float duration = 0.15f;

        if (highlightConfig != null)
        {
            targetColor = highlighted ? highlightConfig.HighlightColor : highlightConfig.NormalColor;
            targetScaleX = highlighted ? highlightConfig.HighlightScaleX : baseScaleX;
            targetPositionY = highlighted ? highlightConfig.HighlightPositionY : basePositionY;
            duration = highlightConfig.TransitionDuration;
        }

        var fromColor = currentColor;
        var fromScaleX = currentScaleX;
        var fromPositionY = currentPositionY;

        float t = 0f;
        while (t < duration)
        {
            t += Time.deltaTime;
            float n = duration > 0f ? t / duration : 1f;

            currentColor = Color.Lerp(fromColor, targetColor, n);
            currentScaleX = Mathf.Lerp(fromScaleX, targetScaleX, n);
            currentPositionY = Mathf.Lerp(fromPositionY, targetPositionY, n);

            ApplyColor(currentColor);
            ApplyScaleAndPosition(currentScaleX, currentPositionY);
            yield return null;
        }

        currentColor = targetColor;
        currentScaleX = targetScaleX;
        currentPositionY = targetPositionY;
        ApplyColor(currentColor);
        ApplyScaleAndPosition(currentScaleX, currentPositionY);
    }

    private void ApplyColor(Color color)
    {
        if (cellRenderer == null) return;

        cellRenderer.GetPropertyBlock(propertyBlock);
        propertyBlock.SetColor(ColorPropertyId, color);
        cellRenderer.SetPropertyBlock(propertyBlock);
    }

    private void ApplyScaleAndPosition(float scaleX, float positionY)
    {
        var scale = transform.localScale;
        scale.x = scaleX;
        transform.localScale = scale;

        var position = transform.localPosition;
        position.y = positionY;
        transform.localPosition = position;
    }
}
