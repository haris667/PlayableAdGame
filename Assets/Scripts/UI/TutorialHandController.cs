using System.Collections;
using UnityEngine;

// Рука-тутор (HandImage/HandTip из макета): показывает игроку, что стопку снизу экрана нужно
// перетащить в пустую ячейку поля.
// Источник и цель руки НЕ фиксированы заранее — на каждый цикл анимации заново берётся
// любая ещё не поставленная стопка лотка и ближайшая к ней свободная ячейка поля. Мировые
// координаты каждый раз пересчитываются в экранные через камеру, так что рука попадает
// в нужное место независимо от разрешения/пропорций экрана устройства.
// Как только игрок схватил стопку — руку прячем. Если игрок реально потащил стопку — тутор
// завершается насовсем. Если просто отпустил без движения — через пару секунд бездействия
// рука появляется снова.
public class TutorialHandController : MonoBehaviour
{
    [SerializeField] private RectTransform handRoot;
    [Tooltip("Все стопки лотка, из которых тутор выбирает ещё не поставленную (StackDragHandler.IsInTray == true).")]
    [SerializeField] private StackDragHandler[] traySlots;
    [SerializeField] private BoardManager board;
    [Tooltip("Камера, через которую считается экранная позиция руки.")]
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
        while (true)
        {
            var source = FindAvailableTrayStack();
            var target = FindNearestEmptyCell(source);

            if (source == null || target == null)
            {
                // Показывать некого/некуда — например, все стопки уже разобраны. Подождём и проверим снова.
                yield return new WaitForSeconds(pauseAtEdges);
                continue;
            }

            var fromScreen = WorldToCanvasPoint(source.position);
            var toScreen = WorldToCanvasPoint(target.SnapPosition);

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

    // Любая стопка лотка, которую ещё можно тащить (не установлена на поле).
    private Transform FindAvailableTrayStack()
    {
        if (traySlots == null) return null;

        foreach (var handler in traySlots)
            if (handler != null && handler.IsInTray)
                return handler.transform;

        return null;
    }

    // Свободная ячейка поля, ближайшая к источнику — так рука указывает на осмысленный, а не случайный ход.
    private BoardCell FindNearestEmptyCell(Transform source)
    {
        if (board == null) return null;

        BoardCell best = null;
        float bestDist = float.MaxValue;

        foreach (var cell in board.Cells)
        {
            if (!cell.IsEmpty) continue;
            if (source == null) return cell;

            float dist = Vector3.Distance(cell.SnapPosition, source.position);
            if (dist < bestDist)
            {
                bestDist = dist;
                best = cell;
            }
        }

        return best;
    }

    private Vector2 WorldToCanvasPoint(Vector3 worldPos)
    {
        var screenPoint = worldCamera.WorldToScreenPoint(worldPos);
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            handRoot.parent as RectTransform, screenPoint, worldCamera, out var localPoint);
        return localPoint;
    }
}
