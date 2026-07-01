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

        Luna.Unity.LifeCycle.GameEnded();
    }

    private void GoToStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
