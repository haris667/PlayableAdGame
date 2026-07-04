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

    // Соседи по полю — заполняются BoardManager-ом один раз в Awake (по мировому расстоянию).
    // Рантайм-поле (не сериализуется), хранится ПРЯМО на ячейке, а не в Dictionary<BoardCell,...>
    // на BoardManager: BoardCell как КЛЮЧ хеш-коллекции (Dictionary/HashSet) ненадёжен на платформе
    // экспорта — транспилятор Luna, похоже, криво обрабатывает GetHashCode для UnityEngine.Object,
    // из-за чего lookup по такому ключу молча не работал в билде. Прямое поле обходит хеширование.
    [System.NonSerialized] public List<BoardCell> Neighbors = new List<BoardCell>();

    // Штамп «ячейка сейчас в очереди BFS волны N» — ПРЯМОЕ int-поле на ячейке (как Neighbors), а не
    // элемент bool[]/HashSet/List по ссылке или индексу: любой такой набор, адресуемый через
    // BoardCell, в билде Luna терял ячейки. Сравнение QueuedWave == waveId — чистый int. id волн
    // монотонно растут (BoardManager.reactionWaveCounter), поэтому сброс между волнами не нужен, а
    // параллельные волны не путают очереди друг друга (у каждой свой id). Только для дедупа очереди —
    // удаление монохромных стопок идёт отдельным полным проходом и в пометке не нуждается.
    [System.NonSerialized] public int QueuedWave;

    // Мировая позиция для установки стопки — всегда базовая (не поднятая), даже если прямо сейчас
    // идёт анимация подсветки: иначе стопка, поставленная в момент угасания подсветки, могла бы
    // на мгновение поймать ещё не до конца опустившуюся высоту ячейки.
    public Vector3 SnapPosition
    {
        get
        {
            EnsureInitialized();
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
    private bool tutorialHighlightActive;
    private Color tutorialHighlightColor = Color.white;

    private void Awake()
    {
        EnsureInitialized();
    }

    // Unity не гарантирует порядок Awake() между разными GameObject'ами — BoardManager.Awake()
    // вызывает SetHighlightConfig на всех ячейках сразу после себя, и если для КОНКРЕТНОЙ ячейки
    // её собственный Awake() ещё не успел отработать, cellRenderer/propertyBlock были бы всё ещё
    // null, а ApplyColor молча ничего не делал бы (см. ниже) — цвет оставался бы дефолтным,
    // пока что-то другое (например, анимация подсветки при драге) не вызвало бы ApplyColor
    // повторно, уже после того как Awake() наконец отработал. Именно так выглядел баг "у одной
    // ячейки неправильный цвет, пока по ней не проведут стопкой" — воспроизводился только в
    // билде из-за другого порядка инициализации скриптов. Ленивая инициализация (вызывается из
    // каждого публичного метода, а не только из Awake) убирает зависимость от этого порядка.
    private void EnsureInitialized()
    {
        if (cellRenderer != null) return;

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
        EnsureInitialized();
        highlightConfig = config;
        currentColor = config != null ? config.NormalColor : Color.white;
        ApplyColor(currentColor);
    }

    // Плавно (интерполяцией) переключает ячейку между обычным и подсвеченным состоянием —
    // цвет, масштаб по X и подъём по Y — используется StackDragHandler-ом, пока игрок держит
    // стопку над полем.
    public void SetHighlighted(bool highlighted)
    {
        EnsureInitialized();
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

    // Отдельный, настраиваемый снаружи цвет подсветки цели тутора — независим от обычной
    // drag-hover подсветки (CellHighlightConfig): пока активен, перекрывает собой любой цвет,
    // который выставляет AnimateHighlight, а при выключении возвращает то, что было бы показано
    // без него (см. ApplyColor).
    public void SetTutorialHighlighted(bool active, [Bridge.Ref] Color highlightColor)
    {
        EnsureInitialized();
        tutorialHighlightActive = active;
        tutorialHighlightColor = highlightColor;
        ApplyColor(currentColor);
    }

    // Переносит плитку ячейки на другой слой (Layer) — используется тутором
    // (TutorialSpotlightOverlay/TutorialHandController) для "прожектора": камера-подсветка видит
    // только объекты на специальном слое, остальное перекрывается затемняющей панелью.
    public void SetLayer(int layer)
    {
        EnsureInitialized();
        if (cellRenderer != null) cellRenderer.gameObject.layer = layer;
    }

    private void ApplyColor([Bridge.Ref] Color color)
    {
        if (cellRenderer == null) return;

        cellRenderer.GetPropertyBlock(propertyBlock);
        propertyBlock.SetColor(ColorPropertyId, tutorialHighlightActive ? tutorialHighlightColor : color);
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
