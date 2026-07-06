using UnityEngine;

// Жизненный цикл плейбла: Тутор -> Геймплей (таймер 25с) -> Пэкшот.
// Тутор завершается, когда игрок реально потащил стопку (см. TutorialHandController).
// Геймплей завершается либо по истечении таймера, либо досрочно, если игрок успел
// собрать всё поле до истечения времени.
public class GameFlowController : MonoBehaviour
{
    private enum Phase { Tutorial, Gameplay, Packshot }

    [SerializeField] private TutorialHandController tutorial;
    [SerializeField] private GameTimerUI timer;
    [Tooltip("Полоска-таймер с попапом \"Fail\" по истечении времени — пэкшот при проигрыше по " +
             "таймеру показывается ТОЛЬКО после того, как этот попап полностью доиграет появление " +
             "(см. TimerSliderUI.OnFailPopupShown), а не сразу по OnTimerExpired, иначе пэкшот " +
             "выскакивал бы поверх ещё не доигравшего попапа.")]
    [SerializeField] private TimerSliderUI timerSlider;
    [SerializeField] private PackshotController packshot;
    [SerializeField] private BoardManager board;
    [Tooltip("Все три стопки лотка — отключаются при переходе в пэкшот, чтобы их нельзя было тащить.")]
    [SerializeField] private StackDragHandler[] dragHandlers;

    private Phase phase = Phase.Tutorial;

    private void OnEnable()
    {
        if (tutorial != null) tutorial.OnTutorialFinished += HandleTutorialFinished;
        if (timerSlider != null) timerSlider.OnFailPopupShown += HandleFailPopupShown;
        if (board != null) board.OnBoardCleared += HandleBoardCleared;
    }

    private void OnDisable()
    {
        if (tutorial != null) tutorial.OnTutorialFinished -= HandleTutorialFinished;
        if (timerSlider != null) timerSlider.OnFailPopupShown -= HandleFailPopupShown;
        if (board != null) board.OnBoardCleared -= HandleBoardCleared;
    }

    private void HandleTutorialFinished()
    {
        if (phase != Phase.Tutorial) return;

        phase = Phase.Gameplay;
        timer.StartTimer();
        Luna.Unity.LifeCycle.GameStarted();
    }

    // Таймер истёк — сам переход к пэкшоту откладывается до конца анимации попапа "Fail"
    // (см. TimerSliderUI.OnFailPopupShown), поэтому здесь никакой прямой реакции на
    // GameTimerUI.OnTimerExpired не требуется.
    private void HandleFailPopupShown() => GoToPackshot();

    private void HandleBoardCleared()
    {
        if (phase == Phase.Gameplay) GoToPackshot();
    }

    private void GoToPackshot()
    {
        if (phase == Phase.Packshot) return;

        phase = Phase.Packshot;
        timer.StopTimer();

        foreach (var handler in dragHandlers)
            if (handler != null) handler.enabled = false;

        packshot.Show();
    }
}
