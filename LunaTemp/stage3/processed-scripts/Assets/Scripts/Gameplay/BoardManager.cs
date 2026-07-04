using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Центральный менеджер поля.
// Хранит все ячейки, расставляет стартовые стопки и запускает цепную реакцию слияния
// при установке новой стопки игроком (см. PlaceStack).
public class BoardManager : MonoBehaviour
{
    [Header("Ячейки поля")]
    [Tooltip("Необязательно: если задано, все BoardCell в детях этого трансформа соберутся сюда автоматически.")]
    [SerializeField] private Transform cellsParent;
    [SerializeField] private List<BoardCell> cells = new List<BoardCell>();
    [Tooltip("Цвета подсветки ячейки при наведении стопки во время драга — один ассет на все ячейки поля " +
             "сразу, назначать в каждую BoardCell вручную не нужно (см. Awake).")]
    [SerializeField] private CellHighlightConfig cellHighlightConfig;

    [Header("Определение соседей")]
    [Tooltip("Максимальное мировое расстояние (по XZ), в пределах которого две ячейки считаются " +
             "соседями. Должно быть ЧУТЬ больше реального шага гекс-сетки (расстояния до ближайшей " +
             "ячейки), но заметно меньше расстояния до ЯЧЕЙКИ ЧЕРЕЗ ОДНУ — тогда каждая ячейка " +
             "находит ровно свои 6 соседей. По умолчанию ~0.45 при шаге сетки ~0.35. Соседей ищем " +
             "напрямую по расстоянию, а не через осевые координаты с округлением: округление на " +
             "своей границе даёт в билде (IL2CPP) и редакторе (Mono) РАЗНЫЙ результат, из-за чего " +
             "у крайних ячеек сосед мог не находиться и последний переход цепочки не срабатывал; " +
             "порог по расстоянию к этому нечувствителен — сосед либо явно внутри, либо явно снаружи.")]
    [SerializeField] private float neighborMaxDistance = 0.45f;

    [Header("Шаблоны для стартовых стопок на поле")]
    [SerializeField] private HexStack stackPrefab;
    [SerializeField] private HexPieceView piecePrefab;
    [SerializeField] private HexColorPalette palette;
    [Tooltip("Поворот (Euler), с которым спавнятся стартовые стопки на поле. Instantiate ставит " +
             "именно этот поворот, а не поворот из самого stackPrefab — без этого поля стопки всегда " +
             "спавнились с нулевым поворотом по всем осям (Quaternion.identity), независимо от макета.")]
    [SerializeField] private Vector3 initialStackRotation = new Vector3(0f, 0f, -90f);

    [Header("Скорость анимации цепной реакции")]
    [SerializeField] private float baseJumpDuration = 5f;
    [Tooltip("Во сколько раз ускоряется перелёт/исчезновение после каждой схлопнувшейся стопки в одной цепочке.")]
    [SerializeField] private float speedMultiplierPerClear = 1.3f;

    [Header("Исчезновение схлопнувшейся стопки")]
    [Tooltip("Время, за которое три верхние фишки сплющиваются по Y/Z — быстрое и резкое, отдельно " +
             "от проваливания вниз (см. sinkDuration).")]
    [SerializeField] private float squashDuration = 0.15f;
    [Tooltip("Время, за которое стопка проваливается вниз до sinkTargetY — медленное и плавное, " +
             "не связанное с длительностью сплющивания фишек.")]
    [SerializeField] private float sinkDuration = 0.6f;
    [Tooltip("Абсолютная мировая координата Y, до которой проваливается стопка перед уничтожением " +
             "(не смещение, а именно конечная координата).")]
    [SerializeField] private float sinkTargetY = -10f;
    [Tooltip("Целевой масштаб по Y/Z для трёх верхних фишек стопки при исчезновении, по порядку: " +
             "самая верхняя, вторая сверху, третья сверху (в Hierarchy редактора это последние " +
             "по счёту дочерние объекты стопки — самые нижние строчки в списке детей).")]
    [SerializeField] private float[] topPieceSquashScaleYZ = { 0.1f, 0.2f, 0.3f };
    [Tooltip("Мировой уровень Y, ниже которого шейдер Game/AlwaysOnTop сам обрезает (clip) пиксели " +
             "фишки — см. AlwaysOnTop.shader/_ClipY. Проваливаясь под доску, фишка уходит ниже этого " +
             "уровня и перестаёт рисоваться, вместо ручного включения/выключения Renderer.")]
    [SerializeField] private float pieceClipPlaneY = 0f;
    [Tooltip("Партикл-эффект, проигрывается на месте стопки, когда она полностью исчезла. Цвет " +
             "частиц (ParticleSystem.MainModule.startColor) подстраивается под цвет исчезнувшей " +
             "стопки — берётся из того же material palette.GetMaterial(color), что и у самих фишек.")]
    [SerializeField] private ParticleSystem destroyStackEffectPrefab;
    [Tooltip("За сколько секунд ДО конца анимации проваливания (до Destroy стопки) запускать " +
             "партикл-эффект — например, 1 значит 'за секунду до конца', а не задержка от начала. " +
             "Подберите так, чтобы совпадало с моментом, когда стопка визуально скрывается под " +
             "маской доски (_ClipY).")]
    [SerializeField] private float destroyEffectOffsetBeforeEnd = 1f;

    [Header("Дуга перелёта фишки")]
    [SerializeField] private AnimationCurve jumpEasing = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
    [Tooltip("Задержка между стартами перелёта соседних фишек в одном трансфере — они летят не разом, " +
             "а внахлёст друг за другом.")]
    [SerializeField] private float jumpStartStagger = 0.1f;
    [Tooltip("Короткий довороток сразу после приземления до фактической ориентации стопки-получателя, " +
             "чтобы не было рывка в момент, когда AppendPiece сбрасывает поворот фишки.")]
    [SerializeField] private float landingSettleDuration = 0.08f;

    private bool chainRunning;

    // Монотонный счётчик волн цепной реакции. Каждый запуск ProcessChainReaction берёт новый id и
    // штампует им очередь своего BFS (BoardCell.QueuedWave) — дедуп очереди без сброса между волнами
    // и изоляция параллельных волн (у каждой свой id). См. BoardCell.QueuedWave.
    private int reactionWaveCounter;

    // Срабатывает, когда после цепной реакции на поле не осталось ни одной стопки —
    // GameFlowController может досрочно перейти к пэкшоту, не дожидаясь таймера.
    public event Action OnBoardCleared;

    // Стреляет сразу после того, как стопка встала на ячейку, но СТРОГО ДО запуска цепной реакции
    // (см. PlaceStack) — в отличие от StackDragHandler.OnAnyStackReleased, который срабатывает уже
    // ПОСЛЕ StartCoroutine(ProcessChainReaction). Если реакция целиком успевает пройти синхронно
    // (например, ни один переход не требует yield) и уничтожает саму эту стопку, то к моменту
    // OnAnyStackReleased её GameObject уже мог не существовать — TrayRefillManager подписывается
    // именно на это событие, чтобы гарантированно не пропустить момент постановки.
    public event Action<HexStack> OnStackPlaced;

    public bool IsChainRunning => chainRunning;

    // Например, TutorialHandController использует это, чтобы указать руку на любую свободную ячейку.
    public IReadOnlyList<BoardCell> Cells => cells;

    // Те же шаблоны, что и для стартовых стопок поля — переиспользуются, например,
    // TrayRefillManager-ом при спавне новых случайных стопок лотка взамен израсходованных.
    public HexStack StackPrefab => stackPrefab;
    public HexPieceView PiecePrefab => piecePrefab;
    public HexColorPalette Palette => palette;

    private static readonly int ClipYShaderId = Shader.PropertyToID("_ClipY");
    private int _flightsRemaining = 0;

    private void Awake()
    {
        // Глобальное свойство шейдера — общее сразу для всех материалов Game/AlwaysOnTop,
        // отдельно настраивать на каждом не нужно (см. AlwaysOnTop.shader).
        Shader.SetGlobalFloat(ClipYShaderId, pieceClipPlaneY);

        if (cellsParent != null && cells.Count == 0)
            cells.AddRange(cellsParent.GetComponentsInChildren<BoardCell>());

        ComputeNeighbors();

        foreach (var cell in cells)
            cell.SetHighlightConfig(cellHighlightConfig);
    }

    // Для каждой ячейки собирает список ячеек, находящихся в пределах neighborMaxDistance по XZ,
    // и складывает его ПРЯМО в cell.Neighbors (не в Dictionary — см. BoardCell.Neighbors про то,
    // почему BoardCell как ключ хеш-коллекции ненадёжен в билде). Считается один раз при старте —
    // ячейки поля неподвижны. Никаких осевых координат/округления: сосед определяется чистым
    // сравнением расстояния, одинаковым в билде и редакторе (см. тултип neighborMaxDistance).
    private void ComputeNeighbors()
    {
        float maxSqr = neighborMaxDistance * neighborMaxDistance;

        foreach (var cell in cells)
        {
            if (cell == null) continue;

            cell.Neighbors.Clear();
            var cellPos = cell.transform.position;

            foreach (var other in cells)
            {
                if (other == null || other == cell) continue;

                var delta = other.transform.position - cellPos;
                delta.y = 0f; // сетка плоская — как и раньше, высота роли не играет
                if (delta.sqrMagnitude <= maxSqr)
                    cell.Neighbors.Add(other);
            }
        }
    }

    private void Start()
    {
        // Расставляем стопки, заранее заданные дизайнером на ячейках — это и есть
        // "поле с шестиугольниками", в которое игрок подмешивает стопки из лотка.
        foreach (var cell in cells)
        {
            if (cell.InitialStackColors.Count == 0) continue;

            var stack = Instantiate(stackPrefab, cell.SnapPosition, Quaternion.Euler(initialStackRotation));
            stack.Initialize(cell.InitialStackColors, piecePrefab, palette);
            stack.CurrentCell = cell;
            cell.CurrentStack = stack;

            // Стартовые стопки на поле — не перетаскиваемые, в отличие от стопок лотка.
            var drag = stack.GetComponent<StackDragHandler>();
            if (drag != null) drag.enabled = false;
        }
    }

    public void PlaceStack(HexStack stack, BoardCell cell)
    {
        stack.transform.position = cell.SnapPosition;
        stack.CurrentCell = cell;
        cell.CurrentStack = stack;
        OnStackPlaced?.Invoke(stack);
        StartCoroutine(ProcessChainReaction(cell));
    }

    private List<BoardCell> GetNeighbors(BoardCell cell)
    {
        return cell.Neighbors;
    }

    // Волна цепной реакции от только что поставленной ячейки. Модель проста и явна:
    // 1) BFS (RunChainReactionBfs) обходит реакцию: у активной стопки смотрим соседей, при
    //    совпадении верхнего цвета более ВЫСОКАЯ стопка отдаёт свои фишки этого цвета более
    //    маленькой; затем продолжаем от получившихся стопок, пока передачи не затухнут. КАЖДАЯ
    //    стопка, вошедшая в реакцию (донор ИЛИ получатель любой передачи, плюс стартовая),
    //    помечается флагом HexStack.InReaction и собирается в список reactionStacks.
    // 2) По окончании реакции уничтожаем из этого списка все стопки, ставшие ПОЛНОСТЬЮ одноцветными.
    //
    // Помечаем и храним сами СТОПКИ прямым флагом на объекте (а не ячейки/наборы по ссылке/индексу):
    // это надёжно в билде Luna, где HashSet/List.Contains/bool[]-по-индексу теряли элементы, и точно
    // ограничивает удаление участниками именно этой реакции — ничего лишнего на поле не трогаем.
    private IEnumerator ProcessChainReaction(BoardCell startCell)
    {
        chainRunning = true;
        int waveId = ++reactionWaveCounter;
        var reactionStacks = new List<HexStack>();

        Debug.Log($"[Chain] START: Reaction initiated at cell {startCell.name}. WaveID: {waveId}");

        // Запуск BFS
        yield return StartCoroutine(RunChainReactionBfs(startCell, waveId, reactionStacks));
        
        Debug.Log($"[Chain] BFS FINISHED. Collected {reactionStacks.Count} stacks in reaction.");

        //DestroyMonochromeStacks(reactionStacks);
    }

    private IEnumerator TryDestroyMonochromeStacks(List<HexStack> reactionStacks)
    {
        // Сбор стопок на уничтожение
        var toDestroy = new List<HexStack>();
        foreach (var stack in reactionStacks)
        {
            if (stack == null) continue;
            
            stack.InReaction = false;
            
            bool isMonochrome = stack.IsMonochrome;
            bool isEmpty = stack.IsEmpty;
            
            if (!isEmpty && isMonochrome)
            {
                toDestroy.Add(stack);
                Debug.Log($"[Chain] STACK MARKED FOR DESTROY: {stack.name}. Color: {stack.TopColor}");
            }
        }

        Debug.Log($"[Chain] TOTAL STACKS TO DESTROY: {toDestroy.Count}");

        // Уничтожение
        if (toDestroy.Count > 0)
        {
            Debug.Log("[Chain] Starting AnimateAndDestroyAll...");
            yield return StartCoroutine(AnimateAndDestroyAll(toDestroy));
            Debug.Log("[Chain] AnimateAndDestroyAll completed successfully.");
        }
        else
        {
            Debug.Log("[Chain] No stacks found to destroy, ending chain.");
        }

        chainRunning = false;
        Debug.Log("[Chain] END: Reaction fully finished.");

        if (IsBoardFullyCleared())
        {
            Debug.Log("[Chain] Board is fully cleared! Triggering OnBoardCleared.");
            OnBoardCleared?.Invoke();
        }
    }

    // Помечает стопку как участника текущей реакции и добавляет в список ровно один раз. Дедуп — через
    // прямой флаг HexStack.InReaction, а НЕ List.Contains/HashSet (те в билде Luna ненадёжны).
    private static void MarkInReaction(HexStack stack, List<HexStack> reactionStacks)
    {
        if (stack == null || stack.InReaction) return;
        stack.InReaction = true;
        reactionStacks.Add(stack);
    }

    // Собственно волновой обход: у активной стопки смотрим соседей, при совпадении верхнего цвета —
    // передача (более высокая → более маленькой), потом продолжаем от получившихся стопок, пока
    // передачи не затухнут. Только переносит фишки и ПОМЕЧАЕТ участников (MarkInReaction) — само
    // уничтожение решает ProcessChainReaction после.
    //
    // Дедупликация очереди — прямым полем cell.QueuedWave == waveId (чистое сравнение int, без
    // bool[]/HashSet/List по ячейке: любой такой набор в билде Luna терял ячейки).
    private IEnumerator RunChainReactionBfs(BoardCell startCell, int waveId, List<HexStack> reactionStacks)
    {
        Debug.Log($"[Chain] BFS: Starting BFS from cell {startCell.name}...");
        float speedMultiplier = 1f;

        var queue = new Queue<BoardCell>();

        queue.Enqueue(startCell);
        startCell.QueuedWave = waveId;
        MarkInReaction(startCell.CurrentStack, reactionStacks);

        while (queue.Count > 0)
        {
            var cell = queue.Dequeue();
            Debug.Log($"[Chain] PROCESS {cell.name}, queue after dequeue={queue.Count}");
            
            var neighbors = new List<BoardCell>(GetNeighbors(cell));
            var visited = new HashSet<BoardCell>();
            
            Debug.Log($"[neighbors.count={neighbors.Count}] BFS: Processing cell {cell.name} with top stack color {cell.CurrentStack?.TopColor.ToString() ?? "null"}.");
            foreach (var neighbor in neighbors)
            {
                var activeStack = cell.CurrentStack;
                var neighborStack = neighbor.CurrentStack;

                if (activeStack == null || activeStack.IsEmpty) break;
                if (neighborStack == null || neighborStack.IsEmpty) continue;
                if (neighborStack.TopColor != activeStack.TopColor) continue;

                bool activeIsDonor = activeStack.Count >= neighborStack.Count;
                var donorStack = activeIsDonor ? activeStack : neighborStack;
                var receiverStack = activeIsDonor ? neighborStack : activeStack;
                var donorCell = activeIsDonor ? cell : neighbor;
                var receiverCell = activeIsDonor ? neighbor : cell;

                MarkInReaction(donorStack, reactionStacks);
                MarkInReaction(receiverStack, reactionStacks);

                Debug.Log($"[Chain] TRANSFER START {cell.name} -> {neighbor.name}. active={activeStack.Count} neighbor={neighborStack.Count}");
                yield return TransferMatchingColor(donorStack, receiverStack, speedMultiplier);
                Debug.Log($"[Chain] TRANSFER END {cell.name} -> {neighbor.name}. donorEmpty={donorStack.IsEmpty} activeTop={(cell.CurrentStack!=null && !cell.CurrentStack.IsEmpty ? cell.CurrentStack.TopColor.ToString() : "null")}");
                
                speedMultiplier *= speedMultiplierPerClear;

                if (donorStack.IsEmpty)
                {
                    Destroy(donorStack.gameObject);
                    donorCell.CurrentStack = null;
                }

                else if (!activeIsDonor && donorCell.QueuedWave != waveId)
                {
                    donorCell.QueuedWave = waveId;
                    Debug.Log($"[Chain] BFS: Enqueuing donor cell {donorCell.name} for further processing. [donorCell.QueuedWave={donorCell.QueuedWave}, waveId={waveId}]");
                    queue.Enqueue(donorCell);
                }

                if (activeIsDonor && receiverCell.QueuedWave != waveId)
                {
                    receiverCell.QueuedWave = waveId;
                    Debug.Log($"[Chain] BFS: Enqueuing neighbor cell {receiverCell.name} for further processing. [receiverCell.QueuedWave={receiverCell.QueuedWave}, waveId={waveId}]");
                    queue.Enqueue(receiverCell);
                }
            }

            Debug.Log($"[Chain] FOREACH END {cell.name}, queue={queue.Count}");
            yield return null;
            Debug.Log($"[queue.Count={queue.Count}, speedMultiplier={speedMultiplier}]");
        }

        Debug.Log("[Chain] BFS: Queue empty, triggering destruction.");
        yield return StartCoroutine(TryDestroyMonochromeStacks(reactionStacks));
    }

    // Перекидывает по одной все фишки совпадающего верхнего цвета из донора в получателя. Фишки
    // летят не строго друг за другом, а внахлёст — каждая следующая стартует через jumpStartStagger
    // после предыдущей, не дожидаясь её приземления (см. MoveHexWithArc). Сам метод возвращается
    // только когда ВСЕ запущенные фишки долетели и осели в получателе — иначе вызывающий код
    // (ProcessChainReaction) мог бы проверить получателя раньше, чем все они реально долетели.
    private IEnumerator TransferMatchingColor(HexStack donorStack, HexStack receiverStack, float speedMultiplier)
    {
        var matchColor = receiverStack.TopColor;
        float duration = baseJumpDuration / speedMultiplier;
        float stagger = jumpStartStagger / speedMultiplier;

        var flights = new List<Coroutine>();
        int reserved = 0;

        while (!donorStack.IsEmpty && donorStack.TopColor == matchColor)
        {
            var piece = donorStack.PopTopPiece();
            var from = piece.transform.position;
            var to = receiverStack.GetNextSlotWorldPosition(reserved);
            reserved++;

            // На время перелёта фишка не привязана ни к донору, ни к получателю —
            // так масштаб/поворот стопок её не задевает, пока она летит и переворачивается.
            _flightsRemaining++;
            piece.transform.SetParent(null, true);
            StartCoroutine(FlyAndLand(piece, from, to, duration, receiverStack));

            // Пауза-нахлёст между стартами фишек — вручную через Time.deltaTime, БЕЗ WaitForSeconds:
            // в билде Luna код ПОСЛЕ `yield return WaitForSeconds` не исполняется (транспайлер
            // превращает его в return), и цикл раздачи прерывался бы после первой же фишки
            // (см. доки Luna common-issues / комментарий в ProcessChainReaction).
            float staggerElapsed = 0f;
            while (staggerElapsed < stagger)
            {
                staggerElapsed += Time.deltaTime;
                yield return null;
            }
        }

        while (_flightsRemaining > 0)
        {
            Debug.Log("WAIT FLIGHT");

            yield return null;

            Debug.Log("FLIGHT DONE");
        }
    }

    private IEnumerator FlyAndLand(HexPieceView piece, [Bridge.Ref] Vector3 from, [Bridge.Ref] Vector3 to, float duration, HexStack receiverStack)
    {
        // StartCoroutine, а не «сырой» yield return <IEnumerator>: иначе в билде Luna FlyAndLand не
        // проснётся после перелёта — фишка визуально долетит, но AppendPiece ниже не выполнится, а
        // ожидающий этот перелёт TransferMatchingColor/BFS/ProcessChainReaction навсегда зависнут,
        // так и не дойдя до удаления монохромных стопок (см. подробный комментарий в ProcessChainReaction).
        Debug.Log("MOVE START");
        yield return StartCoroutine(MoveHexWithArc(piece.gameObject, from, to, duration));
        Debug.Log("MOVE END");
        // AppendPiece сразу после этого ставит localRotation = identity относительно receiverStack
        // (т.е. итоговый мировой поворот станет receiverStack.transform.rotation) — расхождение
        // оказалось не только по X (там оно было заметнее всего), но и по остальным осям тоже,
        // просто меньше — поэтому довороток теперь по всем осям сразу, одним Slerp.
        yield return StartCoroutine(SmoothRotateTo(piece.transform, receiverStack.transform.rotation, landingSettleDuration));
        Debug.Log("ROTATE END");

        receiverStack.AppendPiece(piece);
        _flightsRemaining--;
        Debug.Log("APPEND END");
    }

    private IEnumerator SmoothRotateTo(Transform target, [Bridge.Ref] Quaternion targetRotation, float duration)
    {
        if (target == null) yield break;

        var fromRotation = target.rotation;
        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            target.rotation = Quaternion.Slerp(fromRotation, targetRotation, Mathf.Clamp01(elapsed / duration));
            yield return null;
        }

        target.rotation = targetRotation;
    }

    // Все монохромные стопки волны исчезают в ОДНОЙ плоской корутине: одновременно проваливаются
    // вниз до sinkTargetY и сплющивают верхние фишки, а в конце все разом уничтожаются. Никаких
    // вложенных под-корутин и НИ ОДНОГО WaitForSeconds — в билде Luna код после WaitForSeconds не
    // исполнялся, из-за чего Destroy стопки не срабатывал. Единственный yield здесь — `yield return
    // null`. Все стопки идут в одном темпе (без per-stack ускорения) — визуально они и так исчезают
    // вместе, зато логика проще и надёжнее.
    
    private IEnumerator AnimateAndDestroyAll(List<HexStack> stacks)
    {
        // 1. Очищаем список от null-ссылок сразу, чтобы не проверять их в цикле
        var activeStacks = new List<HexStack>();
        if (stacks != null)
        {
            foreach (var s in stacks)
            {
                if (s != null) activeStacks.Add(s);
            }
        }
        
        int n = activeStacks.Count;
        if (n == 0) yield break;

        // 2. Предварительно кэшируем все данные
        var roots = new Transform[n];
        var startPositions = new Vector3[n];
        var endPositions = new Vector3[n];
        var colors = new HexColor[n];
        var squashPieces = new Transform[n][];
        var squashStartScales = new Vector3[n][];

        for (int s = 0; s < n; s++)
        {
            var stack = activeStacks[s];
            var root = stack.transform;
            roots[s] = root;
            startPositions[s] = root.position;
            endPositions[s] = new Vector3(root.position.x, sinkTargetY, root.position.z);
            colors[s] = stack.TopColor;

            int squashCount = Mathf.Min(topPieceSquashScaleYZ.Length, root.childCount);
            var pieces = new Transform[squashCount];
            var scales = new Vector3[squashCount];
            for (int i = 0; i < squashCount; i++)
            {
                pieces[i] = root.GetChild(root.childCount - 1 - i);
                scales[i] = pieces[i].localScale;
            }
            squashPieces[s] = pieces;
            squashStartScales[s] = scales;
        }

        float duration = Mathf.Max(squashDuration, sinkDuration);
        float particleDelay = Mathf.Max(0f, duration - destroyEffectOffsetBeforeEnd);
        bool particlesSpawned = false;

        float elapsed = 0f;
        // 3. Используем простой while с yield return null
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float sinkN = sinkDuration > 0f ? Mathf.Clamp01(elapsed / sinkDuration) : 1f;
            float squashN = squashDuration > 0f ? Mathf.Clamp01(elapsed / squashDuration) : 1f;

            for (int s = 0; s < n; s++)
            {
                if (roots[s] == null) continue;
                if (elapsed >= particleDelay) 
                {
                    for (int t = 0; t < n; t++)
                    {
                        if (roots[t] != null) Destroy(roots[t].gameObject);
                    }
                    break;
                }

                roots[s].position = Vector3.Lerp(startPositions[s], endPositions[s], sinkN);

                var pieces = squashPieces[s];
                var scales = squashStartScales[s];
                for (int i = 0; i < pieces.Length; i++)
                {
                    var sc = pieces[i].localScale;
                    sc.y = Mathf.Lerp(scales[i].y, topPieceSquashScaleYZ[i], squashN);
                    sc.z = Mathf.Lerp(scales[i].z, topPieceSquashScaleYZ[i], squashN);
                    pieces[i].localScale = sc;
                }
            }

            if (!particlesSpawned && elapsed >= particleDelay)
            {
                particlesSpawned = true;
                for (int s = 0; s < n; s++)
                    SpawnDestroyEffect(startPositions[s], colors[s]);
            }

            yield return null;
        }
    }

    // Партикл-эффект окрашивается под цвет исчезнувшей стопки — берём тот же материал, что и у
    // фишек этого цвета (palette.GetMaterial), и переносим его _Color в startColor системы частиц.
    private void SpawnDestroyEffect([Bridge.Ref] Vector3 position, HexColor color)
    {
        if (destroyStackEffectPrefab == null) return;

        var effect = Instantiate(destroyStackEffectPrefab, position, destroyStackEffectPrefab.transform.rotation);

        var sourceMaterial = palette != null ? palette.GetMaterial(color) : null;
        if (sourceMaterial != null)
        {
            var main = effect.main;
            main.startColor = new ParticleSystem.MinMaxGradient(sourceMaterial.color);
        }

        Destroy(effect.gameObject, 2f);
    }

    // "Переваливание" фишки через ребро между старой и новой ячейкой — позиция и поворот здесь
    // не два независимых расчёта (как раньше — отдельно дуга по Y, отдельно поворот), а буквально
    // ОДНО вращение: фишка крутится вокруг горизонтальной оси, проходящей через середину пути
    // (то самое общее ребро между ячейками), перпендикулярной направлению движения. Поворот на 180°
    // вокруг точки строго между start и end — это точечное отражение, поэтому он гарантированно
    // переносит фишку из start ровно в end одним и тем же движением, которым она и переворачивается,
    // без какого-либо рассинхрона/лишнего кручения в сторону.
    private IEnumerator MoveHexWithArc(GameObject hex, Vector3 startPos, Vector3 endPos, float duration)
    {
        if (hex == null) yield break;

        var hexTransform = hex.transform;
        var startRotation = hexTransform.rotation;

        var pivot = (startPos + endPos) * 0.5f; // середина пути — точка на общем ребре ячеек
        var startOffset = startPos - pivot;      // радиус-вектор от ребра до старта

        startOffset *= 0.9f;

        var flatDirection = endPos - startPos;
        flatDirection.y = 0f;
        // Знак оси определяет, с какой стороны идёт дуга — сверху или снизу через pivot;
        // Cross(up, direction), а не Cross(direction, up), даёт проход через верх.
        var flipAxis = flatDirection.sqrMagnitude > 0.0001f
            ? Vector3.Cross(Vector3.up, flatDirection.normalized)
            : Vector3.right;

        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            // AnimationCurve даёт eased-прогресс n (ускорение в начале, замедление в конце).
            float n = jumpEasing.Evaluate(Mathf.Clamp01(elapsed / duration));

            // Одно и то же вращение (delta) одновременно поворачивает саму фишку и её позицию
            // вокруг ребра — на пике (n=0.5, 90°) она ровно на ребре, к n=1 (180°) она точно
            // в endPos, потому что 180°-поворот точки вокруг pivot — это точечное отражение.
            var delta = Quaternion.AngleAxis(n * 180f, flipAxis);
            hexTransform.position = pivot + delta * startOffset;
            hexTransform.rotation = delta * startRotation;

            yield return null;
        }
        Debug.Log("ARC FINISHED");
        hexTransform.position = endPos;
        hexTransform.rotation = Quaternion.AngleAxis(180f, flipAxis) * startRotation;
    }


    private bool IsBoardFullyCleared()
    {
        foreach (var cell in cells)
            if (!cell.IsEmpty) return false;
        return true;
    }
}
