using System.Collections;
using UnityEngine;
using UnityEngine.UI;

// Пэкшот: фон, лого, кнопка PLAY NOW. Показывается по окончании таймера/цепной реакции.
// Появление пэкшота сигнализирует Luna об окончании плейбла; любой тап по экрану (не только
// по кнопке) ведёт в стор.
public class PackshotController : MonoBehaviour
{
    [SerializeField] private GameObject panelRoot;
    [SerializeField] private Button playNowButton;
    [Tooltip("Невидимая кнопка на весь экран пэкшота — любой тап ведёт в стор.")]
    [SerializeField] private Button fullscreenTapButton;
    [Tooltip("Необязательно: аниматор визуального эффекта появления пэкшота.")]
    [SerializeField] private Animator transitionAnimator;
    [SerializeField] private string transitionTrigger = "Show";

    [Header("Раскрытие маски (см. GameObject \"Mask\")")]
    [Tooltip("Растёт от 0 до maskTargetSize сразу при показе пэкшота — именно Width/Height " +
             "(RectTransform.sizeDelta), а не localScale, чтобы маска реально раскрывалась по " +
             "прямоугольнику, а не масштабировала уже готовый размер.")]
    [SerializeField] private RectTransform maskRect;
    [Tooltip("Целевые Width/Height маски (sizeDelta) в конце раскрытия — с запасом больше экрана, " +
             "чтобы гарантированно перекрыть края независимо от разрешения/пропорций устройства.")]
    [SerializeField] private float maskTargetSize = 10000f;
    [SerializeField] private float maskGrowDuration = 0.5f;
    [SerializeField] private AnimationCurve maskGrowCurve = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);

    [Header("Появление Header и кнопки Play (после маски, пульсацией)")]
    [SerializeField] private RectTransform headerRect;
    [SerializeField] private RectTransform playButtonRect;
    [SerializeField] private float revealPulseDuration = 0.45f;
    [Tooltip("Кривая масштаба 0..1 с небольшим перелётом (по умолчанию — до ~1.15 и обратно к 1) " +
             "для пружинного эффекта появления — та же идея, что и в TrayRefillManager.spawnScaleCurve.")]
    [SerializeField] private AnimationCurve revealPulseCurve = new AnimationCurve(
        new Keyframe(0f, 0f),
        new Keyframe(0.6f, 1.15f),
        new Keyframe(1f, 1f));

    private void Awake()
    {
        if (panelRoot != null) panelRoot.SetActive(false);
        if (playNowButton != null) playNowButton.onClick.AddListener(GoToStore);
        if (fullscreenTapButton != null) fullscreenTapButton.onClick.AddListener(GoToStore);
    }

    public void Show()
    {
        if (panelRoot != null) panelRoot.SetActive(true);
        if (transitionAnimator != null) transitionAnimator.SetTrigger(transitionTrigger);

        // Отключаем ВСЕ StackDragHandler в сцене (не только исходные три слота лотка, как это уже
        // частично делает GameFlowController.dragHandlers) — иначе перезаполненные TrayRefillManager-ом
        // стопки или уже стоящие на поле (их тоже можно таскать заново, см. StackDragHandler)
        // остались бы перетаскиваемыми поверх пэкшота.
        foreach (var handler in FindObjectsOfType<StackDragHandler>())
            handler.enabled = false;

        Luna.Unity.LifeCycle.GameEnded();

        StartCoroutine(AnimateReveal());
    }

    // Порядок появления: 1) весь пэкшот целиком проявляется из альфы 0, 2) маска растёт от 0 до
    // полного размера, 3) и только ПОСЛЕ этого — одновременно — пульсацией появляются Header и
    // кнопка Play (см. PulseIn), последними в цепочке. Header/Play запускаются и не ждутся —
    // после них в этой корутине больше ничего не происходит.
    private IEnumerator AnimateReveal()
    {
        if (maskRect != null)
            yield return StartCoroutine(GrowMask());

        if (headerRect != null) StartCoroutine(PulseIn(headerRect));
        if (playButtonRect != null) StartCoroutine(PulseIn(playButtonRect));
    }

    private IEnumerator GrowMask()
    {
        maskRect.sizeDelta = Vector2.zero;

        float t = 0f;
        while (t < maskGrowDuration)
        {
            t += Time.deltaTime;
            float n = maskGrowCurve.Evaluate(Mathf.Clamp01(t / maskGrowDuration));
            maskRect.sizeDelta = Vector2.one * (maskTargetSize * n);
            yield return null;
        }

        maskRect.sizeDelta = Vector2.one * maskTargetSize;
    }

    private IEnumerator PulseIn(RectTransform rect)
    {
        rect.localScale = Vector3.zero;

        float t = 0f;
        while (t < revealPulseDuration)
        {
            t += Time.deltaTime;
            float n = revealPulseCurve.Evaluate(Mathf.Clamp01(t / revealPulseDuration));
            rect.localScale = Vector3.one * n;
            yield return null;
        }

        rect.localScale = Vector3.one;
    }

    private void GoToStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
