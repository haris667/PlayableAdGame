using UnityEngine;

// Ассет-конфиг подсветки ячейки поля при наведении стопки во время драга — цвет, масштаб по X
// и подъём по Y. "Обычное" состояние каждая BoardCell берёт из своих собственных transform-значений
// на старте, а этот конфиг задаёт только то, во что она превращается при подсветке.
// Создаётся через меню Assets > Create > Game > Cell Highlight Config.
[CreateAssetMenu(fileName = "CellHighlightConfig", menuName = "Game/Cell Highlight Config")]
public class CellHighlightConfig : ScriptableObject
{
    [Header("Цвет")]
    [SerializeField] private Color normalColor = Color.white;
    [SerializeField] private Color highlightColor = new Color(0.5f, 1f, 0.5f);

    [Header("Масштаб и подъём")]
    [Tooltip("Локальный масштаб по X, до которого раздувается ячейка при подсветке.")]
    [SerializeField] private float highlightScaleX = 0.3f;
    [Tooltip("Локальная позиция по Y, до которой поднимается ячейка при подсветке.")]
    [SerializeField] private float highlightPositionY = 0.02f;

    [Tooltip("Время полного перехода между обычным и подсвеченным состоянием, в секундах.")]
    [SerializeField] private float transitionDuration = 0.15f;

    public Color NormalColor => normalColor;
    public Color HighlightColor => highlightColor;
    public float HighlightScaleX => highlightScaleX;
    public float HighlightPositionY => highlightPositionY;
    public float TransitionDuration => transitionDuration;
}
