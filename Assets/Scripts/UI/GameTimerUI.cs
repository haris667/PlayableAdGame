using System;
using UnityEngine;

// Верхний таймер (циферблат ClockBG/ClockHand из макета). Запускается только в фазе геймплея
// и идёт duration секунд (по ТЗ — 25), по истечении которых стрелка доходит до конца оборота.
// Когда остаётся меньше warningRemainingFraction времени (по ТЗ — последняя треть),
// один раз стреляет OnWarningZoneEntered — на него подписывается TimerWarningEffects.
public class GameTimerUI : MonoBehaviour
{
    [SerializeField] private RectTransform clockHand;
    [SerializeField] private float duration = 25f;
    [Tooltip("Стрелка вращается в левую сторону (угол по Z прибавляется) от startAngleZ до endAngleZ.")]
    [SerializeField] private float startAngleZ = -136f;
    [SerializeField] private float endAngleZ = 223f;

    [Tooltip("Доля оставшегося времени, после которой включается визуальное предупреждение (по ТЗ — последняя треть).")]
    [SerializeField] private float warningRemainingFraction = 1f / 3f;

    private float elapsed;
    private bool running;
    private bool warningTriggered;

    public event Action OnTimerExpired;
    public event Action OnWarningZoneEntered;
    public event Action OnTimerStopped;

    // Доля пройденного времени (0 — старт, 1 — конец) — читают другие UI-элементы, которые должны
    // визуально идти синхронно с этим таймером (например, полоска-слайдер), не храня свой
    // собственный elapsed/duration и не рискуя разойтись с реальным игровым таймером.
    public float Progress01 => duration > 0f ? Mathf.Clamp01(elapsed / duration) : 0f;

    // Сколько секунд реально осталось — нужно, чтобы другие UI-элементы могли запускать свою
    // анимацию на фиксированный оффсет РАНЬШЕ фактического конца таймера (например, будильник
    // в TimerSliderUI), а не только строго по событию OnTimerExpired в самом конце.
    public float RemainingSeconds => Mathf.Max(0f, duration - elapsed);

    public void StartTimer()
    {
        elapsed = 0f;
        running = true;
        warningTriggered = false;
        if (clockHand != null)
            clockHand.localEulerAngles = new Vector3(0f, 0f, startAngleZ);
    }

    public void StopTimer()
    {
        running = false;
        OnTimerStopped?.Invoke();
    }

    private void Update()
    {
        if (!running) return;

        elapsed += Time.deltaTime;
        float n = Mathf.Clamp01(elapsed / duration);

        if (clockHand != null)
            clockHand.localEulerAngles = new Vector3(0f, 0f, Mathf.LerpUnclamped(startAngleZ, endAngleZ, n));

        if (!warningTriggered && 1f - n <= warningRemainingFraction)
        {
            warningTriggered = true;
            OnWarningZoneEntered?.Invoke();
        }

        if (n >= 1f)
        {
            running = false;
            OnTimerExpired?.Invoke();
            OnTimerStopped?.Invoke();
        }
    }
}
