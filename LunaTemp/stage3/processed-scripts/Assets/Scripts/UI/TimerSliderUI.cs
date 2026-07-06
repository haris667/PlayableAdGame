using System.Collections;
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
    [Tooltip("Сколько ударов в секунду — 0.4 соответствует промежутку 2.5 секунды между ударами.")]
    [SerializeField] private float pulseFrequency = 0.4f;
    [Tooltip("Насколько резкий сам удар: 1 — плавная синусоида; чем больше, тем короче и резче " +
             "скачок вверх и тем дольше пауза на базовом размере между ударами. Уменьшено на 35% " +
             "относительно прежнего значения (6 -> 3.9), чтобы сам скачок был более медленным/плавным.")]
    [SerializeField] private float pulseSharpness = 3.9f;

    [Header("Цвет в такт пульсации (те же удары, что и у иконки часов)")]
    [SerializeField] private Image clockOutlineImage;
    [SerializeField] private Image loaderBackgroundImage;
    [Tooltip("Цвет, в который аутлайн часов и бэкграунд загрузчика уходят на пике каждого удара.")]
    [SerializeField] private Color pulseColor = Color.red;

    [Header("Будильник по окончании таймера")]
    [Tooltip("За сколько секунд ДО фактического конца таймера запускать будильник (0 — ровно в " +
             "конце). Позволяет стартовать анимацию чуть раньше, а не строго по OnTimerExpired.")]
    [SerializeField] private float alarmShakeStartOffset = 0f;
    [Tooltip("Сколько секунд часы резко трясутся/вибрируют, как звонящий будильник, до появления попапа.")]
    [SerializeField] private float alarmShakeDuration = 1f;
    [SerializeField] private float alarmShakeAmplitudeDegrees = 15f;
    [SerializeField] private float alarmShakeFrequency = 25f;
    [Tooltip("Амплитуда дрожания позиции (в локальных единицах RectTransform) — вместе с вращением " +
             "даёт эффект вибрации, а не просто покачивания на месте.")]
    [SerializeField] private float alarmShakePositionAmplitude = 8f;

    [Header("Попап после будильника")]
    [SerializeField] private GameObject popupRoot;
    [Tooltip("Необязательно: что именно масштабировать/поворачивать при появлении попапа. Если не " +
             "задано — используется transform самого popupRoot.")]
    [SerializeField] private Transform popupContent;
    [SerializeField] private float popupAnimDuration = 0.35f;
    [SerializeField] private AnimationCurve popupScaleCurve = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
    [Tooltip("Угол по Z, с которого попап начинает появление — доворачивается до 0 синхронно со " +
             "скейлом, по той же кривой popupScaleCurve и за то же popupAnimDuration.")]
    [SerializeField] private float popupStartAngleZ = 90f;

    [Header("Фон попапа — цвет во время появления (синхронно со скейлом/поворотом)")]
    [SerializeField] private Image popupBackgroundImage;
    [SerializeField] private Color popupBackgroundStartColor = Color.white;
    [SerializeField] private Color popupBackgroundEndColor = new Color32(0x71, 0x71, 0x71, 0xFF);

    private static readonly int BlurSizePropertyId = Shader.PropertyToID("_Size");

    private Vector3 clockBaseScale = Vector3.one;
    private Vector3 clockBasePosition = Vector3.zero;
    private Color clockOutlineBaseColor = Color.white;
    private Color loaderBackgroundBaseColor = Color.white;
    private Vector3 popupBaseScale = Vector3.one;
    private bool pulseActive;
    private bool alarmTriggered;

    // Стреляет, когда попап "Fail" полностью доиграл анимацию появления (см. ShowPopup) — GameFlowController
    // ждёт именно это событие, а не сам OnTimerExpired, чтобы пэкшот не выскакивал поверх ещё не
    // доигравшего попапа, а появлялся строго после него.
    public event System.Action OnFailPopupShown;

    private void Awake()
    {
        if (clockIcon != null)
        {
            clockBaseScale = clockIcon.localScale;
            clockBasePosition = clockIcon.localPosition;
        }
        if (clockOutlineImage != null) clockOutlineBaseColor = clockOutlineImage.color;
        if (loaderBackgroundImage != null) loaderBackgroundBaseColor = loaderBackgroundImage.color;

        var popupTransform = popupContent != null ? popupContent : popupRoot != null ? popupRoot.transform : null;
        if (popupTransform != null) popupBaseScale = popupTransform.localScale;
        if (popupRoot != null) popupRoot.SetActive(false);
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
        if (clockIcon != null)
        {
            clockIcon.localScale = clockBaseScale;
            clockIcon.localPosition = clockBasePosition;
        }
        if (clockOutlineImage != null) clockOutlineImage.color = clockOutlineBaseColor;
        if (loaderBackgroundImage != null) loaderBackgroundImage.color = loaderBackgroundBaseColor;
    }

    private IEnumerator PlayAlarmThenShowPopup()
    {
        float t = 0f;
        while (t < alarmShakeDuration)
        {
            t += Time.deltaTime;
            if (clockIcon != null)
            {
                // Вращение по Z (как и раньше) + дрожание позиции — случайный джиттер, а не ещё
                // одна синусоида, чтобы это читалось как вибрация, а не как второе покачивание.
                float shakeAngle = Mathf.Sin(t * alarmShakeFrequency) * alarmShakeAmplitudeDegrees;
                clockIcon.localEulerAngles = new Vector3(0f, 0f, shakeAngle);
                clockIcon.localPosition = clockBasePosition + (Vector3)(Random.insideUnitCircle * alarmShakePositionAmplitude);
            }
            yield return null;
        }

        if (clockIcon != null)
        {
            clockIcon.localEulerAngles = Vector3.zero;
            clockIcon.localPosition = clockBasePosition;
        }

        yield return ShowPopup();
    }

    private IEnumerator ShowPopup()
    {
        if (popupRoot == null) yield break;

        popupRoot.SetActive(true);
        var popupTransform = popupContent != null ? popupContent : popupRoot.transform;
        popupTransform.localScale = Vector3.zero;
        popupTransform.localEulerAngles = new Vector3(0f, 0f, popupStartAngleZ);

        if (popupBackgroundImage != null) popupBackgroundImage.color = popupBackgroundStartColor;

        float t = 0f;
        while (t < popupAnimDuration)
        {
            t += Time.deltaTime;
            float n = popupScaleCurve.Evaluate(Mathf.Clamp01(t / popupAnimDuration));
            popupTransform.localScale = popupBaseScale * n;
            popupTransform.localEulerAngles = new Vector3(0f, 0f, Mathf.LerpUnclamped(popupStartAngleZ, 0f, n));

            if (popupBackgroundImage != null)
                popupBackgroundImage.color = Color.Lerp(popupBackgroundStartColor, popupBackgroundEndColor, n);

            yield return null;
        }

        popupTransform.localScale = popupBaseScale;
        popupTransform.localEulerAngles = Vector3.zero;
        if (popupBackgroundImage != null) popupBackgroundImage.color = popupBackgroundEndColor;

        OnFailPopupShown?.Invoke();
    }

    // LateUpdate — после GameTimerUI.Update() в этом же кадре, чтобы Progress01 уже учитывал
    // текущий elapsed (тот же приём, что и в TimerWarningEffects, и по той же причине).
    private void LateUpdate()
    {
        if (timer == null) return;

        float n = timer.Progress01;

        // Будильник — не по событию OnTimerExpired (строго в конце), а по оставшемуся времени:
        // так его можно запустить на alarmShakeStartOffset секунд раньше фактического конца.
        if (!alarmTriggered && timer.RemainingSeconds <= alarmShakeStartOffset)
        {
            alarmTriggered = true;
            StartCoroutine(PlayAlarmThenShowPopup());
        }

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

        if (pulseActive)
        {
            // Обычная синусоида (0..1) возводится в степень pulseSharpness — это "поджимает" её
            // к нулю на большей части периода и оставляет короткий острый всплеск к 1, как удар
            // сердца, а не плавное дыхание туда-сюда. Один и тот же beat одновременно двигает
            // масштаб часов и цвет обеих картинок — они бьются в такт друг с другом.
            float raw01 = 0.5f + 0.5f * Mathf.Sin(Time.time * pulseFrequency * Mathf.PI * 2f);
            float beat = Mathf.Pow(raw01, pulseSharpness);

            if (clockIcon != null)
                clockIcon.localScale = clockBaseScale * (1f + (pulseScaleMultiplier - 1f) * beat);

            if (clockOutlineImage != null)
                clockOutlineImage.color = Color.Lerp(clockOutlineBaseColor, pulseColor, beat);

            if (loaderBackgroundImage != null)
                loaderBackgroundImage.color = Color.Lerp(loaderBackgroundBaseColor, pulseColor, beat);
        }
    }
}
