using System.Collections;
using UnityEngine;

// Рука-тутор (HandImage/HandTip из макета): показывает игроку, что стопку снизу экрана нужно
// перетащить в пустую ячейку поля.
// Как только игрок схватил стопку — руку прячем. Если игрок реально потащил стопку — тутор
// завершается насовсем. Если просто отпустил без движения — через пару секунд бездействия
// рука появляется снова.
public class TutorialHandController : MonoBehaviour
{
    [SerializeField] private RectTransform handRoot;
    [Tooltip("Мировая точка, откуда 'стартует' рука — например, стопка лотка.")]
    [SerializeField] private Transform fromPoint;
    [Tooltip("Мировая точка, куда 'ведёт' рука — например, целевая ячейка поля.")]
    [SerializeField] private Transform toPoint;
    [Tooltip("Камера, через которую считается экранная позиция fromPoint/toPoint.")]
    [SerializeField] private Camera worldCamera;
    [SerializeField] private float moveDuration = 1f;
    [SerializeField] private float pauseAtEdges = 0.3f;
    [SerializeField] private float idleDelayBeforeReshow = 2f;

    public event System.Action OnTutorialFinished;

    private Coroutine loopRoutine;
    private Coroutine idleRoutine;
    private bool finished;

    private void OnEnable()
    {
        StackDragHandler.OnAnyStackGrabbed += HandleGrabbed;
        StackDragHandler.OnAnyStackMoved += HandleMoved;
        StackDragHandler.OnAnyStackReleased += HandleReleased;
    }

    private void OnDisable()
    {
        StackDragHandler.OnAnyStackGrabbed -= HandleGrabbed;
        StackDragHandler.OnAnyStackMoved -= HandleMoved;
        StackDragHandler.OnAnyStackReleased -= HandleReleased;
    }

    private void Start()
    {
        if (worldCamera == null) worldCamera = Camera.main;
        ShowHand();
    }

    private void ShowHand()
    {
        if (finished) return;
        handRoot.gameObject.SetActive(true);
        loopRoutine = StartCoroutine(LoopHandAnimation());
    }

    private void HideHand()
    {
        if (loopRoutine != null) StopCoroutine(loopRoutine);
        if (idleRoutine != null) StopCoroutine(idleRoutine);
        handRoot.gameObject.SetActive(false);
    }

    private void HandleGrabbed() => HideHand();

    private void HandleMoved()
    {
        if (finished) return;
        finished = true;
        HideHand();
        OnTutorialFinished?.Invoke();
    }

    private void HandleReleased(bool success)
    {
        if (finished) return;
        // Стопку отпустили, но не сдвинули по-настоящему — через паузу повторно показываем руку.
        idleRoutine = StartCoroutine(ReshowAfterDelay());
    }

    private IEnumerator ReshowAfterDelay()
    {
        yield return new WaitForSeconds(idleDelayBeforeReshow);
        if (!finished) ShowHand();
    }

    private IEnumerator LoopHandAnimation()
    {
        var fromScreen = WorldToCanvasPoint(fromPoint.position);
        var toScreen = WorldToCanvasPoint(toPoint.position);

        while (true)
        {
            handRoot.anchoredPosition = fromScreen;
            yield return new WaitForSeconds(pauseAtEdges);

            float t = 0f;
            while (t < moveDuration)
            {
                t += Time.deltaTime;
                handRoot.anchoredPosition = Vector2.Lerp(fromScreen, toScreen, Mathf.SmoothStep(0f, 1f, t / moveDuration));
                yield return null;
            }

            yield return new WaitForSeconds(pauseAtEdges);
        }
    }

    private Vector2 WorldToCanvasPoint(Vector3 worldPos)
    {
        var screenPoint = worldCamera.WorldToScreenPoint(worldPos);
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            handRoot.parent as RectTransform, screenPoint, worldCamera, out var localPoint);
        return localPoint;
    }
}
