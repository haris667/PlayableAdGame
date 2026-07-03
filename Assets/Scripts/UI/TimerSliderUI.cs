using UnityEngine;
using UnityEngine.UI;

// Полоска-таймер (НЕ радиальный Loader/InnerLoaderBG из сцены — те через Fill Amount). Синхронизирована
// с GameTimerUI.Progress01, а не хранит свои elapsed/duration — гарантированно не разойдётся с
// реальным игровым таймером/пэкшотом.
public class TimerSliderUI : MonoBehaviour
{
    [Header("Источник прогресса")]
    [SerializeField] private GameTimerUI timer;

    [Header("Полоска (Rect Transform, растянутый горизонтально — использует поле Right)")]
    [SerializeField] private RectTransform barRect;
    [Tooltip("Значение Right (то самое поле в инспекторе Rect Transform) в момент полного " +
             "завершения отсчёта — полоска сжимается от 0 (старт) до этого значения (конец).")]
    [SerializeField] private float maxRightOffset = 722f;

    [Header("Цвет полоски — три ключевые точки")]
    [SerializeField] private Image barImageOutline;
    [SerializeField] private Image barImage;
    [Tooltip("Цвет в начале отсчёта.")]
    [SerializeField] private Color startColor = new Color(0.2f, 1f, 0.2f);
    [Tooltip("Цвет ровно на середине — плавный переход идёт start -> mid (первая половина) и mid -> end (вторая половина).")]
    [SerializeField] private Color midColor = Color.yellow;
    [Tooltip("Цвет в конце отсчёта.")]
    [SerializeField] private Color endColor = Color.red;

    [Header("Пульсация иконки часов (последняя треть времени, см. GameTimerUI.warningRemainingFraction)")]
    [SerializeField] private Transform clockIcon;
    [SerializeField] private float pulseScaleMultiplier = 1.15f;
    [Tooltip("Сколько ударов в секунду — по умолчанию 1 (раз в секунду, как удар сердца).")]
    [SerializeField] private float pulseFrequency = 1f;
    [Tooltip("Насколько резкий сам удар: 1 — плавная синусоида; чем больше, тем короче и резче " +
             "скачок вверх и тем дольше пауза на базовом размере между ударами.")]
    [SerializeField] private float pulseSharpness = 6f;

    private Vector3 clockBaseScale = Vector3.one;
    private bool pulseActive;

    private void Awake()
    {
        if (clockIcon != null) clockBaseScale = clockIcon.localScale;
    }

    private void OnEnable()
    {
        if (timer == null) return;
        timer.OnWarningZoneEntered += HandleWarningZoneEntered;
        timer.OnTimerStopped += HandleTimerStopped;
    }

    private void OnDisable()
    {
        if (timer == null) return;
        timer.OnWarningZoneEntered -= HandleWarningZoneEntered;
        timer.OnTimerStopped -= HandleTimerStopped;
    }

    private void HandleWarningZoneEntered() => pulseActive = true;

    private void HandleTimerStopped()
    {
        pulseActive = false;
        if (clockIcon != null) clockIcon.localScale = clockBaseScale;
    }

    // LateUpdate — после GameTimerUI.Update() в этом же кадре, чтобы Progress01 уже учитывал
    // текущий elapsed (тот же приём, что и в TimerWarningEffects, и по той же причине).
    private void LateUpdate()
    {
        if (timer == null) return;

        float n = timer.Progress01;

        if (barRect != null)
        {
            var offsetMax = barRect.offsetMax;
            offsetMax.x = -Mathf.Lerp(0f, maxRightOffset, n);
            barRect.offsetMax = offsetMax;
        }

        if (barImage != null)
        {
            barImage.color = n < 0.5f
                ? Color.Lerp(startColor, midColor, n / 0.5f)
                : Color.Lerp(midColor, endColor, (n - 0.5f) / 0.5f);

            barImageOutline.color = n < 0.5f
                ? Color.Lerp(startColor, midColor, n / 0.5f)
                : Color.Lerp(midColor, endColor, (n - 0.5f) / 0.5f);
        }

        if (pulseActive && clockIcon != null)
        {
            // Обычная синусоида (0..1) возводится в степень pulseSharpness — это "поджимает" её
            // к нулю на большей части периода и оставляет короткий острый всплеск к 1, как удар
            // сердца, а не плавное дыхание туда-сюда.
            float raw01 = 0.5f + 0.5f * Mathf.Sin(Time.time * pulseFrequency * Mathf.PI * 2f);
            float beat = Mathf.Pow(raw01, pulseSharpness);
            float pulse = 1f + (pulseScaleMultiplier - 1f) * beat;
            clockIcon.localScale = clockBaseScale * pulse;
        }
    }
}
