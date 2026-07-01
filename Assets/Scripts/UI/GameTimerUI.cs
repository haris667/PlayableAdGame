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
    [SerializeField] private float startAngleZ = 0f;
    [SerializeField] private float endAngleZ = -360f;

    [Tooltip("Доля оставшегося времени, после которой включается визуальное предупреждение (по ТЗ — последняя треть).")]
    [SerializeField] private float warningRemainingFraction = 1f / 3f;

    private float elapsed;
    private bool running;
    private bool warningTriggered;

    public event Action OnTimerExpired;
    public event Action OnWarningZoneEntered;
    public event Action OnTimerStopped;

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
