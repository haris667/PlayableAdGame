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
    [Tooltip("Высота дуги, по которой рука движется от стопки к ячейке (в единицах Rect Transform " +
             "канваса, по осям X/Y — канвас двумерный) — симметричный подъём с пиком посередине " +
             "пути, а не прямая линия.")]
    [SerializeField] private float handArcHeight = 160f;

    [Header("Ручное переопределение источника/цели (необязательно)")]
    [Tooltip("Если задано — рука стартует именно с этой стопки лотка вместо случайно выбранной. " +
             "Null — источник по-прежнему выбирается автоматически (FindAvailableTrayStack).")]
    [SerializeField] private StackDragHandler overrideSourceStack;
    [Tooltip("Если задано — рука указывает именно на эту ячейку вместо ближайшей свободной. " +
             "Null — цель по-прежнему выбирается автоматически (FindNearestEmptyCell).")]
    [SerializeField] private BoardCell overrideTargetCell;

    [Header("Аниматор пальца — иллюзия, что рука держит стопку")]
    [SerializeField] private Animator handAnimator;
    [Tooltip("Необязательно: аниматор тени руки — те же самые триггеры (clenchTrigger/unclenchTrigger) " +
             "переключаются на нём одновременно с handAnimator.")]
    [SerializeField] private Animator handShadowAnimator;
    [Tooltip("Триггер сжатия пальца — играется перед движением ОТ стопки К ячейке (как будто взяли стопку).")]
    [SerializeField] private string clenchTrigger = "HandTipTo";
    [Tooltip("Триггер разжатия пальца — играется перед движением ОТ ячейки ОБРАТНО к стопке.")]
    [SerializeField] private string unclenchTrigger = "HandTipExit";
    [Tooltip("Длительность анимации сжатия/разжатия — рука дожидается, пока анимация доиграет " +
             "ПОЛНОСТЬЮ, и только потом начинает движение (а не запускает его сразу вместе с триггером).")]
    [SerializeField] private float fingerAnimDuration = 0.3f;

    [Header("Полноэкранное затемнение вокруг текущей подсказки")]
    [Tooltip("Затемняет буквально всё (3D-сцену, весь остальной UI, фон), кроме подсвеченной " +
             "стопки-источника и ячейки-цели — см. TutorialSpotlightOverlay.")]
    [SerializeField] private TutorialSpotlightOverlay spotlightOverlay;
    [Tooltip("Цвет ячейки-цели на время подсказки — независим от обычной drag-hover подсветки.")]
    [SerializeField] private Color targetCellHighlightColor = new Color(1f, 0.85f, 0.3f);
    [Tooltip("Множитель яркости цвета ячейки-цели (1 — без изменений, >1 — светится ярче настроенного цвета) — даёт эффект свечения вокруг ячейки.")]
    [SerializeField] private float cellGlowMultiplier = 1.3f;

    public event System.Action OnTutorialFinished;

    private Coroutine loopRoutine;
    private Coroutine idleRoutine;
    private Canvas rootCanvas;
    private bool finished;

    // Слои, на которые были переведены ТЕКУЩИЕ подсвеченные объекты, до подсветки — чтобы вернуть
    // их обратно, когда подсказка сменится на другую пару стопка/ячейка или тутор завершится.
    private HexStack spotlightedStack;
    private int spotlightedStackOriginalLayer;
    private BoardCell spotlightedCell;
    private int spotlightedCellOriginalLayer;

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
        rootCanvas = handRoot.GetComponentInParent<Canvas>();

        // Рука должна рисоваться ПОВЕРХ затемняющей панели тутора, а не под ней — поднимаем
        // sortingOrder канваса руки выше, если он ниже (или равен).
        if (spotlightOverlay != null && spotlightOverlay.OverlayCanvas != null && rootCanvas != null
            && rootCanvas.sortingOrder <= spotlightOverlay.OverlayCanvas.sortingOrder)
        {
            rootCanvas.sortingOrder = spotlightOverlay.OverlayCanvas.sortingOrder + 1;
        }

        ShowHand();
    }

    private void ShowHand()
    {
        if (finished) return;
        handRoot.gameObject.SetActive(true);
        // Затемняющая панель включается ВНУТРИ LoopHandAnimation, только когда реально найдены
        // источник и цель — иначе (например, в первые кадры, пока поле/лоток ещё не готовы) экран
        // затемнился бы полностью, а подсвечивать было бы нечего.
        loopRoutine = StartCoroutine(LoopHandAnimation());
    }

    private void HideHand()
    {
        if (loopRoutine != null) StopCoroutine(loopRoutine);
        if (idleRoutine != null) StopCoroutine(idleRoutine);
        handRoot.gameObject.SetActive(false);
        ClearSpotlight();
        if (spotlightOverlay != null) spotlightOverlay.Hide();
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
            // Каждое поле переопределяется независимо от другого: если задано только одно (например,
            // источник), второе всё равно считается автоматически (ближайшая свободная ячейка к
            // ВЫБРАННОМУ источнику, а не к случайному).
            var source = overrideSourceStack != null ? overrideSourceStack.transform : FindAvailableTrayStack();
            var target = overrideTargetCell != null ? overrideTargetCell : FindNearestEmptyCell(source);

            if (source == null || target == null)
            {
                // Показывать некого/некуда — например, все стопки уже разобраны, либо поле/лоток
                // ещё не готовы. Прячем панель (нечего подсвечивать) и подождём, проверим снова.
                ClearSpotlight();
                if (spotlightOverlay != null) spotlightOverlay.Hide();
                yield return new WaitForSeconds(pauseAtEdges);
                continue;
            }

            if (spotlightOverlay != null) spotlightOverlay.Show();
            ApplySpotlight(source, target);

            var fromScreen = WorldToCanvasPoint(source.position);
            var toScreen = WorldToCanvasPoint(target.SnapPosition);

            handRoot.anchoredPosition = fromScreen;
            // Триггер здесь НЕ ставим: палец уже разжат — либо это самый первый цикл (дефолтная
            // поза аниматора), либо предыдущая итерация уже закончилась HandTipExit при возврате
            // сюда же. Лишний вызов SetFinger(false) в этой точке ничего не "открывал" заново, а
            // просто ретриггерил аниматор посреди уже разжатого состояния — от этого и была
            // "кривая" игра анимации. Всего должно быть ровно 2 триггера за цикл, не 3.
            yield return new WaitForSeconds(pauseAtEdges);

            // Путь ОТ стопки К ячейке: сначала полностью доигрывает анимация сжатия (рука ещё
            // стоит на месте), и только ПОСЛЕ неё начинается само движение — а не одновременно с
            // триггером, как было. Триггер №1 за цикл.
            SetFinger(clenched: true);
            yield return new WaitForSeconds(fingerAnimDuration);
            yield return MoveHand(fromScreen, toScreen);
            yield return new WaitForSeconds(pauseAtEdges);

            // Обратный путь ОТ ячейки К стопке: та же логика — сначала доигрывает анимация
            // разжатия ("отпустили" стопку), и только потом стартует анимированное движение назад.
            // Триггер №2 (и последний) за цикл.
            SetFinger(clenched: false);
            yield return new WaitForSeconds(fingerAnimDuration);
            yield return MoveHand(toScreen, fromScreen);
            yield return new WaitForSeconds(pauseAtEdges);
        }
    }

    private IEnumerator MoveHand(Vector2 from, Vector2 to)
    {
        float t = 0f;
        while (t < moveDuration)
        {
            t += Time.deltaTime;
            float n = Mathf.SmoothStep(0f, 1f, t / moveDuration);
            var pos = Vector2.Lerp(from, to, n);
            pos.y += Mathf.Sin(n * Mathf.PI) * handArcHeight; // симметричная дуга, пик посередине пути
            handRoot.anchoredPosition = pos;
            yield return null;
        }

        handRoot.anchoredPosition = to;
    }

    private void SetFinger(bool clenched)
    {
        var trigger = clenched ? clenchTrigger : unclenchTrigger;
        if (handAnimator != null) handAnimator.SetTrigger(trigger);
        if (handShadowAnimator != null) handShadowAnimator.SetTrigger(trigger);
    }

    // Переводит стопку-источник и ячейку-цель ТЕКУЩЕЙ подсказки на слой TutorialSpotlightOverlay —
    // камера-подсветка видит только этот слой и рисует их поверх затемняющей панели (см.
    // TutorialSpotlightOverlay) — плюс подсвечивает цветом саму ячейку-цель. Сначала возвращает
    // на место объекты ПРЕДЫДУЩЕЙ подсказки (если подсказка сменилась), запоминая их исходный
    // слой перед переключением.
    private void ApplySpotlight(Transform source, BoardCell target)
    {
        if (spotlightOverlay == null || spotlightOverlay.SpotlightLayer < 0) return;

        var stack = source != null ? source.GetComponent<HexStack>() : null;

        if (spotlightedStack != stack)
        {
            if (spotlightedStack != null) spotlightedStack.SetLayer(spotlightedStackOriginalLayer);
            spotlightedStack = stack;
            if (stack != null)
            {
                spotlightedStackOriginalLayer = source.gameObject.layer;
                stack.SetLayer(spotlightOverlay.SpotlightLayer);
            }
        }

        if (spotlightedCell != target)
        {
            if (spotlightedCell != null)
            {
                spotlightedCell.SetLayer(spotlightedCellOriginalLayer);
                spotlightedCell.SetTutorialHighlighted(false, targetCellHighlightColor);
            }
            spotlightedCell = target;
            if (target != null)
            {
                spotlightedCellOriginalLayer = target.gameObject.layer;
                target.SetLayer(spotlightOverlay.SpotlightLayer);
                target.SetTutorialHighlighted(true, targetCellHighlightColor * cellGlowMultiplier);
            }
        }
    }

    // Возвращает подсвеченные объекты на исходный слой/цвет — вызывается, когда рука прячется
    // (игрок схватил стопку) или тутор завершился насовсем.
    private void ClearSpotlight()
    {
        if (spotlightedStack != null) spotlightedStack.SetLayer(spotlightedStackOriginalLayer);
        if (spotlightedCell != null)
        {
            spotlightedCell.SetLayer(spotlightedCellOriginalLayer);
            spotlightedCell.SetTutorialHighlighted(false, targetCellHighlightColor);
        }
        spotlightedStack = null;
        spotlightedCell = null;
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

    private Vector2 WorldToCanvasPoint([Bridge.Ref] Vector3 worldPos)
    {
        var screenPoint = worldCamera.WorldToScreenPoint(worldPos);

        // Overlay-канвас не привязан ни к какой камере — RectTransformUtility ожидает здесь null
        // именно для этого режима, а не любую камеру (иначе локальная точка считается неверно, и
        // рука "залипает" в углу канваса). Для Screen Space - Camera / World Space, наоборот,
        // нужна реальная камера — поэтому режим канваса проверяется каждый раз, а не жёстко зашит.
        var cameraForConversion = rootCanvas != null && rootCanvas.renderMode == RenderMode.ScreenSpaceOverlay
            ? null
            : worldCamera;

        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            handRoot.parent as RectTransform, screenPoint, cameraForConversion, out var localPoint);
        return localPoint;
    }
}
