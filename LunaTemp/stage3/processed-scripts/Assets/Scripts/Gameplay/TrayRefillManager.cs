using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Когда все стопки текущего лотка израсходованы (каждая хоть раз поставлена на поле —
// StackDragHandler.IsInTray == false), на тех же самых позициях лотка спавнятся новые случайные
// стопки (4-6 фишек, ровно 2 цвета подряд), чтобы игра могла продолжаться дальше. Срабатывает
// повторно на каждый новый набор — не только один раз для изначальных трёх стопок.
public class TrayRefillManager : MonoBehaviour
{
    [SerializeField] private BoardManager board;
    [Tooltip("Все стопки текущего лотка — отслеживаются на предмет 'все израсходованы'. После " +
             "рефилла массив сам заменяется на новые заспавненные стопки, так что механика " +
             "продолжает работать и для следующих наборов.")]
    [SerializeField] private StackDragHandler[] trayHandlers;
    [Tooltip("Останавливает рефилл, когда игра заканчивается (обычно — тот же GameTimerUI, что и у " +
             "GameFlowController) — иначе только что заспавненные, ещё не поставленные стопки " +
             "остались бы перетаскиваемыми поверх пэкшота.")]
    [SerializeField] private GameTimerUI timer;

    [Header("Случайная генерация новой стопки")]
    [SerializeField] private int minPieces = 4;
    [SerializeField] private int maxPieces = 6;

    [Header("Анимация появления — подскок + размер")]
    [SerializeField] private float spawnAnimDuration = 0.4f;
    [Tooltip("Насколько высоко стопка подпрыгивает во время появления (мировые единицы).")]
    [SerializeField] private float spawnBounceHeight = 0.3f;
    [Tooltip("Кривая масштаба 0..1 с небольшим перелётом (по умолчанию — до ~1.15 и обратно к 1) " +
             "для эффекта лёгкого 'пружинного' появления.")]
    [SerializeField] private AnimationCurve spawnScaleCurve = new AnimationCurve(
        new Keyframe(0f, 0f),
        new Keyframe(0.6f, 1.15f),
        new Keyframe(1f, 1f));

    private Vector3[] trayPositions;
    private Quaternion[] trayRotations;
    private Vector3[] trayScales;
    // Ссылка на HexStack каждого слота — нужна, чтобы напрямую опознать В BoardManager.OnStackPlaced,
    // какой именно из отслеживаемых слотов только что поставили (событие передаёт саму стопку).
    private HexStack[] trayStacks;
    // Индивидуально по каждому слоту: "хоть раз поставлена на поле". Помечается СРАЗУ в обработчике
    // BoardManager.OnStackPlaced — это событие стреляет ДО запуска цепной реакции (см. PlaceStack),
    // поэтому слот гарантированно помечается использованным раньше, чем реакция вообще успеет что-то
    // уничтожить. Раньше отслеживание шло через StackDragHandler.OnAnyStackReleased, который
    // срабатывает уже ПОСЛЕ старта реакции — если реакция проходила целиком синхронно (без единого
    // yield) и тут же уничтожала саму эту стопку, к моменту проверки её GameObject уже не
    // существовал, и рефилл для этого слота не засчитывался вообще.
    private bool[] slotUsed;

    // SoftBlue исключён из случайной генерации — этот цвет зарезервирован под материал ячеек
    // поля, а не фишек в стопках; если бы он случайно выпал здесь, фишка получила бы чужой,
    // не предназначенный для неё материал.
    private readonly HexColor[] pieceColorValues = System.Array.FindAll(
        (HexColor[])System.Enum.GetValues(typeof(HexColor)),
        color => color != HexColor.SoftBlue);

    private void Awake()
    {
        CaptureTraySlots();
    }

    private void OnEnable()
    {
        if (board != null) board.OnStackPlaced += HandleStackPlaced;
        if (timer != null) timer.OnTimerStopped += HandleTimerStopped;
    }

    private void OnDisable()
    {
        if (board != null) board.OnStackPlaced -= HandleStackPlaced;
        if (timer != null) timer.OnTimerStopped -= HandleTimerStopped;
    }

    // Запоминаем позицию/поворот/масштаб КАЖДОГО слота лотка один раз, до первого перетаскивания —
    // у StackDragHandler.originalPosition после первой установки уже не исходный слот, а место,
    // откуда стопку в последний раз подняли, так что для этой цели он не подходит.
    private void CaptureTraySlots()
    {
        trayPositions = new Vector3[trayHandlers.Length];
        trayRotations = new Quaternion[trayHandlers.Length];
        trayScales = new Vector3[trayHandlers.Length];
        trayStacks = new HexStack[trayHandlers.Length];
        slotUsed = new bool[trayHandlers.Length];

        for (int i = 0; i < trayHandlers.Length; i++)
        {
            if (trayHandlers[i] == null) continue;
            var t = trayHandlers[i].transform;
            trayPositions[i] = t.position;
            trayRotations[i] = t.rotation;
            trayScales[i] = t.localScale;
            trayStacks[i] = trayHandlers[i].GetComponent<HexStack>();
        }
    }

    private void HandleTimerStopped() => enabled = false;

    private void HandleStackPlaced(HexStack stack)
    {
        for (int i = 0; i < trayStacks.Length; i++)
        {
            if (!slotUsed[i] && trayStacks[i] == stack)
                slotUsed[i] = true;
        }

        if (AllSlotsUsed())
            RefillTray();
    }

    private bool AllSlotsUsed()
    {
        if (slotUsed.Length == 0) return false;
        foreach (var used in slotUsed)
            if (!used) return false;
        return true;
    }

    private void RefillTray()
    {
        var newHandlers = new StackDragHandler[trayHandlers.Length];
        var newStacks = new HexStack[trayHandlers.Length];

        for (int i = 0; i < trayHandlers.Length; i++)
        {
            var stack = Instantiate(board.StackPrefab, trayPositions[i], trayRotations[i]);
            stack.transform.localScale = trayScales[i];
            // needsAlwaysOnTopMaterial: true — это стопка лотка, её реально таскают, ей нужна
            // личная копия материала для StackDragHandler.SetAlwaysOnTop во время драга (иначе
            // "поверх всего" во время перетаскивания этой стопки просто не работал бы).
            stack.Initialize(GenerateRandomColors(), board.PiecePrefab, board.Palette, needsAlwaysOnTopMaterial: true);

            // StackDragHandler.Awake сам находит BoardManager через FindObjectOfType, если поле
            // не назначено явно — отдельно вызывать SetBoard не нужно.
            newHandlers[i] = stack.GetComponent<StackDragHandler>();
            newStacks[i] = stack;

            StartCoroutine(AnimateSpawn(stack.transform, trayPositions[i], trayScales[i]));
        }

        // Заменяем отслеживаемый набор на новые стопки — как только их тоже все израсходуют,
        // AllSlotsUsed() снова сработает и запустит следующий рефилл.
        trayHandlers = newHandlers;
        trayStacks = newStacks;
        slotUsed = new bool[trayHandlers.Length];
    }

    // Ровно 2 случайных цвета подряд (например, 4 красных + 2 синих) — количество каждого выбрано
    // так, чтобы оба цвета гарантированно присутствовали хотя бы по одной фишке.
    private List<HexColor> GenerateRandomColors()
    {
        int count = Random.Range(minPieces, maxPieces + 1);

        var colorValues = pieceColorValues;
        var colorA = colorValues[Random.Range(0, colorValues.Length)];
        HexColor colorB;
        do
        {
            colorB = colorValues[Random.Range(0, colorValues.Length)];
        } while (colorB == colorA);

        int countA = Random.Range(1, count); // 1..count-1 — оба цвета хотя бы по разу

        var colors = new List<HexColor>(count);
        for (int i = 0; i < countA; i++) colors.Add(colorA);
        for (int i = countA; i < count; i++) colors.Add(colorB);
        return colors;
    }

    private IEnumerator AnimateSpawn(Transform stackTransform, [Bridge.Ref] Vector3 targetPosition, [Bridge.Ref] Vector3 targetScale)
    {
        if (stackTransform == null) yield break;

        stackTransform.position = targetPosition;
        stackTransform.localScale = Vector3.zero;

        float t = 0f;
        while (t < spawnAnimDuration)
        {
            t += Time.deltaTime;
            float n = Mathf.Clamp01(t / spawnAnimDuration);

            float scaleN = spawnScaleCurve.Evaluate(n);
            stackTransform.localScale = targetScale * scaleN;

            // Симметричный подскок — 0 в начале и в конце, пик посередине пути.
            float hop = Mathf.Sin(n * Mathf.PI) * spawnBounceHeight;
            stackTransform.position = targetPosition + Vector3.up * hop;

            yield return null;
        }

        stackTransform.localScale = targetScale;
        stackTransform.position = targetPosition;
    }
}
