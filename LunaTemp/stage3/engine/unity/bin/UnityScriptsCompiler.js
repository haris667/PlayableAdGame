if ( TRACE ) { TRACE( JSON.parse( '["BoardCell#init","BoardCell#AutoComputeAxialFromPosition#get","BoardCell#AxialCoord#get","BoardCell#InitialStackColors#get","BoardCell#IsClickable#get","BoardCell#IsEmpty#get","BoardCell#SnapPosition#get","BoardCell#init","BoardCell#SetAxialCoord","BoardCell#Awake","BoardCell#EnsureInitialized","BoardCell#SetHighlightConfig","BoardCell#SetHighlighted","BoardCell#AnimateHighlight","BoardCell#SetTutorialHighlighted","BoardCell#SetLayer","BoardCell#ApplyColor","BoardCell#ApplyScaleAndPosition","BoardManager#init","BoardManager#MarkInReaction","BoardManager#IsChainRunning#get","BoardManager#Cells#get","BoardManager#StackPrefab#get","BoardManager#PiecePrefab#get","BoardManager#Palette#get","BoardManager#init","BoardManager#Awake","BoardManager#ComputeNeighbors","BoardManager#Start","BoardManager#PlaceStack","BoardManager#GetNeighbors","BoardManager#ProcessChainReaction","BoardManager#TryDestroyMonochromeStacks","BoardManager#RunChainReactionBfs","BoardManager#TransferMatchingColor","BoardManager#FlyAndLand","BoardManager#SmoothRotateTo","BoardManager#AnimateAndDestroyAll","BoardManager#SpawnDestroyEffect","BoardManager#MoveHexWithArc","BoardManager#IsBoardFullyCleared","CellHighlightConfig#NormalColor#get","CellHighlightConfig#HighlightColor#get","CellHighlightConfig#HighlightScaleX#get","CellHighlightConfig#HighlightPositionY#get","CellHighlightConfig#TransitionDuration#get","CellHighlightConfig#init","CopyRectSize#OnEnable","FloatingHoverEffect#init","FloatingHoverEffect#Awake","FloatingHoverEffect#LateUpdate","GameFlowController#init","GameFlowController#OnEnable","GameFlowController#OnDisable","GameFlowController#HandleTutorialFinished","GameFlowController#HandleFailPopupShown","GameFlowController#HandleBoardCleared","GameFlowController#GoToPackshot","GameTimerUI#Progress01#get","GameTimerUI#RemainingSeconds#get","GameTimerUI#init","GameTimerUI#StartTimer","GameTimerUI#StopTimer","GameTimerUI#Update","HexColorPalette#GetMaterial","HexColorPalette.Entry#getDefaultValue","HexColorPalette.Entry#ctor","HexColorPalette.Entry#getHashCode","HexColorPalette.Entry#equals","HexColorPalette.Entry#$clone","HexPieceView#init","HexPieceView#init","HexPieceView#SetNeedsAlwaysOnTopMaterial","HexPieceView#SetColor","HexPieceView#SetAlwaysOnTop","HexPieceView#SetGlow","HexStack#Count#get","HexStack#IsEmpty#get","HexStack#TopColor#get","HexStack#IsMonochrome#get","HexStack#init","HexStack#Awake","HexStack#Initialize","HexStack#BuildFromColors","HexStack#SpawnPieceAtTop","HexStack#GetLocalPositionForIndex","HexStack#GetNextSlotWorldPosition","HexStack#GetTopWorldPosition","HexStack#GetTopPieceIndex","HexStack#SetAlwaysOnTop","HexStack#SetGlow","HexStack#SetLayer","HexStack#PopTopPiece","HexStack#AppendPiece","HexStack#UpdateHitCollider","PackshotController#init","PackshotController#Awake","PackshotController#Show","PackshotController#AnimateReveal","PackshotController#GrowMask","PackshotController#PulseIn","PackshotController#GoToStore","ScreenScaler#Start","ScreenScaler#LateUpdate","ScreenScaler#Resize","StackDragHandler#IsInTray#get","StackDragHandler#init","StackDragHandler#Awake","StackDragHandler#SetBoard","StackDragHandler#OnDisable","StackDragHandler#OnMouseDown","StackDragHandler#OnMouseDrag","StackDragHandler#OnMouseUp","StackDragHandler#UpdateHighlightedCell","StackDragHandler#SetHighlightedCell","StackDragHandler#RaycastCellUnderPointer","StackDragHandler#ReturnToOrigin","TimerSliderUI#init","TimerSliderUI#init","TimerSliderUI#Awake","TimerSliderUI#OnEnable","TimerSliderUI#OnDisable","TimerSliderUI#HandleWarningZoneEntered","TimerSliderUI#HandleTimerStopped","TimerSliderUI#PlayAlarmThenShowPopup","TimerSliderUI#ShowPopup","TimerSliderUI#LateUpdate","TimerWarningEffects#init","TimerWarningEffects#init","TimerWarningEffects#Awake","TimerWarningEffects#OnEnable","TimerWarningEffects#OnDisable","TimerWarningEffects#HandleWarningZoneEntered","TimerWarningEffects#HandleTimerStopped","TimerWarningEffects#ResetVisuals","TimerWarningEffects#LateUpdate","TrayRefillManager#init","TrayRefillManager#Awake","TrayRefillManager#OnEnable","TrayRefillManager#OnDisable","TrayRefillManager#CaptureTraySlots","TrayRefillManager#HandleTimerStopped","TrayRefillManager#HandleStackPlaced","TrayRefillManager#AllSlotsUsed","TrayRefillManager#RefillTray","TrayRefillManager#GenerateRandomColors","TrayRefillManager#AnimateSpawn","TutorialHandController#init","TutorialHandController#OnEnable","TutorialHandController#OnDisable","TutorialHandController#Start","TutorialHandController#ShowHand","TutorialHandController#HideHand","TutorialHandController#HandleGrabbed","TutorialHandController#HandleMoved","TutorialHandController#HandleReleased","TutorialHandController#ReshowAfterDelay","TutorialHandController#LoopHandAnimation","TutorialHandController#MoveHand","TutorialHandController#SetFinger","TutorialHandController#ApplySpotlight","TutorialHandController#ClearSpotlight","TutorialHandController#FindAvailableTrayStack","TutorialHandController#FindNearestEmptyCell","TutorialHandController#WorldToCanvasPoint","TutorialSpotlightOverlay#init","TutorialSpotlightOverlay#Awake","TutorialSpotlightOverlay#SetupRevealCamera","TutorialSpotlightOverlay#Show","TutorialSpotlightOverlay#Hide","TutorialSpotlightOverlay#HideImmediate","TutorialSpotlightOverlay#FadeTo","TutorialSpotlightOverlay#DisableOverlay"]' ) ); }
/**
 * @version 1.0.9683.22681
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BoardCell start.*/
    Bridge.define("BoardCell", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ColorPropertyId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BoardCell#init", this ); }

                    this.ColorPropertyId = UnityEngine.Shader.PropertyToID("_Color");
                }
            }
        },
        fields: {
            autoComputeAxialFromPosition: false,
            axialCoord: null,
            initialStackColors: null,
            isClickable: false,
            CurrentStack: null,
            Neighbors: null,
            QueuedWave: 0,
            cellRenderer: null,
            propertyBlock: null,
            highlightConfig: null,
            highlightRoutine: null,
            currentColor: null,
            baseScaleX: 0,
            basePositionY: 0,
            currentScaleX: 0,
            currentPositionY: 0,
            isHighlighted: false,
            tutorialHighlightActive: false,
            tutorialHighlightColor: null
        },
        props: {
            AutoComputeAxialFromPosition: {
                get: function () {
if ( TRACE ) { TRACE( "BoardCell#AutoComputeAxialFromPosition#get", this ); }

                    return this.autoComputeAxialFromPosition;
                }
            },
            AxialCoord: {
                get: function () {
if ( TRACE ) { TRACE( "BoardCell#AxialCoord#get", this ); }

                    return this.axialCoord.$clone();
                }
            },
            InitialStackColors: {
                get: function () {
if ( TRACE ) { TRACE( "BoardCell#InitialStackColors#get", this ); }

                    return this.initialStackColors;
                }
            },
            IsClickable: {
                get: function () {
if ( TRACE ) { TRACE( "BoardCell#IsClickable#get", this ); }

                    return this.isClickable;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "BoardCell#IsEmpty#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Equality(this.CurrentStack, null);
                }
            },
            SnapPosition: {
                get: function () {
if ( TRACE ) { TRACE( "BoardCell#SnapPosition#get", this ); }

                    this.EnsureInitialized();
                    var localPos = this.transform.localPosition.$clone();
                    localPos.y = this.basePositionY;
                    return UnityEngine.Component.op_Inequality(this.transform.parent, null) ? this.transform.parent.TransformPoint$1(localPos) : localPos.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardCell#init", this ); }

                this.axialCoord = new UnityEngine.Vector2Int();
                this.currentColor = new UnityEngine.Color();
                this.tutorialHighlightColor = new UnityEngine.Color();
                this.autoComputeAxialFromPosition = true;
                this.initialStackColors = new (System.Collections.Generic.List$1(HexColor)).ctor();
                this.isClickable = true;
                this.Neighbors = new (System.Collections.Generic.List$1(BoardCell)).ctor();
                this.currentColor = new pc.Color( 1, 1, 1, 1 );
                this.tutorialHighlightColor = new pc.Color( 1, 1, 1, 1 );
            }
        },
        methods: {
            /*BoardCell.SetAxialCoord start.*/
            SetAxialCoord: function (coord) {
if ( TRACE ) { TRACE( "BoardCell#SetAxialCoord", this ); }

                this.axialCoord = coord.$clone();
            },
            /*BoardCell.SetAxialCoord end.*/

            /*BoardCell.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BoardCell#Awake", this ); }

                this.EnsureInitialized();
            },
            /*BoardCell.Awake end.*/

            /*BoardCell.EnsureInitialized start.*/
            EnsureInitialized: function () {
if ( TRACE ) { TRACE( "BoardCell#EnsureInitialized", this ); }

                if (UnityEngine.Component.op_Inequality(this.cellRenderer, null)) {
                    return;
                }

                this.cellRenderer = this.GetComponentInChildren(UnityEngine.MeshRenderer);
                this.propertyBlock = new UnityEngine.MaterialPropertyBlock();

                // "Обычное" состояние — то, с каким масштабом/позицией ячейка стоит в сцене изначально;
                // конфиг задаёт только состояние "подсвечено", а не оба состояния сразу.
                this.baseScaleX = this.transform.localScale.x;
                this.basePositionY = this.transform.localPosition.y;
                this.currentScaleX = this.baseScaleX;
                this.currentPositionY = this.basePositionY;
            },
            /*BoardCell.EnsureInitialized end.*/

            /*BoardCell.SetHighlightConfig start.*/
            SetHighlightConfig: function (config) {
if ( TRACE ) { TRACE( "BoardCell#SetHighlightConfig", this ); }

                this.EnsureInitialized();
                this.highlightConfig = config;
                this.currentColor = config != null ? config.NormalColor.$clone() : new pc.Color( 1, 1, 1, 1 );
                this.ApplyColor(this.currentColor);
            },
            /*BoardCell.SetHighlightConfig end.*/

            /*BoardCell.SetHighlighted start.*/
            SetHighlighted: function (highlighted) {
if ( TRACE ) { TRACE( "BoardCell#SetHighlighted", this ); }

                this.EnsureInitialized();
                if (this.isHighlighted === highlighted) {
                    return;
                }
                this.isHighlighted = highlighted;

                if (this.highlightRoutine != null) {
                    this.StopCoroutine$2(this.highlightRoutine);
                }
                this.highlightRoutine = this.StartCoroutine$1(this.AnimateHighlight(highlighted));
            },
            /*BoardCell.SetHighlighted end.*/

            /*BoardCell.AnimateHighlight start.*/
            AnimateHighlight: function (highlighted) {
if ( TRACE ) { TRACE( "BoardCell#AnimateHighlight", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    targetColor,
                    targetScaleX,
                    targetPositionY,
                    duration,
                    fromColor,
                    fromScaleX,
                    fromPositionY,
                    t,
                    n,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    targetColor = new pc.Color( 1, 1, 1, 1 );
                                        targetScaleX = this.baseScaleX;
                                        targetPositionY = this.basePositionY;
                                        duration = 0.15;

                                        if (this.highlightConfig != null) {
                                            targetColor = highlighted ? this.highlightConfig.HighlightColor.$clone() : this.highlightConfig.NormalColor.$clone();
                                            targetScaleX = highlighted ? this.highlightConfig.HighlightScaleX : this.baseScaleX;
                                            targetPositionY = highlighted ? this.highlightConfig.HighlightPositionY : this.basePositionY;
                                            duration = this.highlightConfig.TransitionDuration;
                                        }

                                        fromColor = this.currentColor.$clone();
                                        fromScaleX = this.currentScaleX;
                                        fromPositionY = this.currentPositionY;

                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = duration > 0.0 ? t / duration : 1.0;

                                        this.currentColor = pc.Color.lerp( fromColor, targetColor, n );
                                        this.currentScaleX = pc.math.lerp(fromScaleX, targetScaleX, n);
                                        this.currentPositionY = pc.math.lerp(fromPositionY, targetPositionY, n);

                                        this.ApplyColor(this.currentColor);
                                        this.ApplyScaleAndPosition(this.currentScaleX, this.currentPositionY);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.currentColor = targetColor.$clone();
                                        this.currentScaleX = targetScaleX;
                                        this.currentPositionY = targetPositionY;
                                        this.ApplyColor(this.currentColor);
                                        this.ApplyScaleAndPosition(this.currentScaleX, this.currentPositionY);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardCell.AnimateHighlight end.*/

            /*BoardCell.SetTutorialHighlighted start.*/
            SetTutorialHighlighted: function (active, highlightColor) {
if ( TRACE ) { TRACE( "BoardCell#SetTutorialHighlighted", this ); }

                this.EnsureInitialized();
                this.tutorialHighlightActive = active;
                this.tutorialHighlightColor = highlightColor.$clone();
                this.ApplyColor(this.currentColor);
            },
            /*BoardCell.SetTutorialHighlighted end.*/

            /*BoardCell.SetLayer start.*/
            SetLayer: function (layer) {
if ( TRACE ) { TRACE( "BoardCell#SetLayer", this ); }

                this.EnsureInitialized();
                if (UnityEngine.Component.op_Inequality(this.cellRenderer, null)) {
                    this.cellRenderer.gameObject.layer = layer;
                }
            },
            /*BoardCell.SetLayer end.*/

            /*BoardCell.ApplyColor start.*/
            ApplyColor: function (color) {
if ( TRACE ) { TRACE( "BoardCell#ApplyColor", this ); }

                if (UnityEngine.Component.op_Equality(this.cellRenderer, null)) {
                    return;
                }

                this.cellRenderer.GetPropertyBlock(this.propertyBlock);
                this.propertyBlock.SetColor(BoardCell.ColorPropertyId, this.tutorialHighlightActive ? this.tutorialHighlightColor.$clone() : color.$clone());
                this.cellRenderer.SetPropertyBlock(this.propertyBlock);
            },
            /*BoardCell.ApplyColor end.*/

            /*BoardCell.ApplyScaleAndPosition start.*/
            ApplyScaleAndPosition: function (scaleX, positionY) {
if ( TRACE ) { TRACE( "BoardCell#ApplyScaleAndPosition", this ); }

                var scale = this.transform.localScale.$clone();
                scale.x = scaleX;
                this.transform.localScale = scale.$clone();

                var position = this.transform.localPosition.$clone();
                position.y = positionY;
                this.transform.localPosition = position.$clone();
            },
            /*BoardCell.ApplyScaleAndPosition end.*/


        }
    });
    /*BoardCell end.*/

    /*BoardManager start.*/
    Bridge.define("BoardManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ClipYShaderId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BoardManager#init", this ); }

                    this.ClipYShaderId = UnityEngine.Shader.PropertyToID("_ClipY");
                }
            },
            methods: {
                /*BoardManager.MarkInReaction:static start.*/
                MarkInReaction: function (stack, reactionStacks) {
if ( TRACE ) { TRACE( "BoardManager#MarkInReaction", this ); }

                    if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || stack.InReaction) {
                        return;
                    }
                    stack.InReaction = true;
                    reactionStacks.add(stack);
                },
                /*BoardManager.MarkInReaction:static end.*/


            }
        },
        fields: {
            cellsParent: null,
            cells: null,
            cellHighlightConfig: null,
            neighborMaxDistance: 0,
            stackPrefab: null,
            piecePrefab: null,
            palette: null,
            initialStackRotation: null,
            baseJumpDuration: 0,
            speedMultiplierPerClear: 0,
            squashDuration: 0,
            sinkDuration: 0,
            sinkTargetY: 0,
            topPieceSquashScaleYZ: null,
            pieceClipPlaneY: 0,
            destroyStackEffectPrefab: null,
            destroyEffectOffsetBeforeEnd: 0,
            jumpEasing: null,
            jumpStartStagger: 0,
            landingSettleDuration: 0,
            chainRunning: false,
            reactionWaveCounter: 0,
            _flightsRemaining: 0
        },
        events: {
            OnBoardCleared: null,
            OnStackPlaced: null
        },
        props: {
            IsChainRunning: {
                get: function () {
if ( TRACE ) { TRACE( "BoardManager#IsChainRunning#get", this ); }

                    return this.chainRunning;
                }
            },
            Cells: {
                get: function () {
if ( TRACE ) { TRACE( "BoardManager#Cells#get", this ); }

                    return this.cells;
                }
            },
            StackPrefab: {
                get: function () {
if ( TRACE ) { TRACE( "BoardManager#StackPrefab#get", this ); }

                    return this.stackPrefab;
                }
            },
            PiecePrefab: {
                get: function () {
if ( TRACE ) { TRACE( "BoardManager#PiecePrefab#get", this ); }

                    return this.piecePrefab;
                }
            },
            Palette: {
                get: function () {
if ( TRACE ) { TRACE( "BoardManager#Palette#get", this ); }

                    return this.palette;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardManager#init", this ); }

                this.initialStackRotation = new UnityEngine.Vector3();
                this.cells = new (System.Collections.Generic.List$1(BoardCell)).ctor();
                this.neighborMaxDistance = 0.45;
                this.initialStackRotation = new pc.Vec3( 0.0, 0.0, -90.0 );
                this.baseJumpDuration = 5.0;
                this.speedMultiplierPerClear = 1.3;
                this.squashDuration = 0.15;
                this.sinkDuration = 0.6;
                this.sinkTargetY = -10.0;
                this.topPieceSquashScaleYZ = System.Array.init([
                    0.1, 
                    0.2, 
                    0.3
                ], System.Single);
                this.pieceClipPlaneY = 0.0;
                this.destroyEffectOffsetBeforeEnd = 1.0;
                this.jumpEasing = pc.AnimationCurve.createEaseInOut(0.0, 0.0, 1.0, 1.0);
                this.jumpStartStagger = 0.1;
                this.landingSettleDuration = 0.08;
                this._flightsRemaining = 0;
            }
        },
        methods: {
            /*BoardManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BoardManager#Awake", this ); }

                var $t;
                // Глобальное свойство шейдера — общее сразу для всех материалов Game/AlwaysOnTop,
                // отдельно настраивать на каждом не нужно (см. AlwaysOnTop.shader).
                UnityEngine.Shader.SetGlobalFloat(BoardManager.ClipYShaderId, this.pieceClipPlaneY);

                if (UnityEngine.Component.op_Inequality(this.cellsParent, null) && this.cells.Count === 0) {
                    this.cells.AddRange(this.cellsParent.GetComponentsInChildren(BoardCell));
                }

                this.ComputeNeighbors();

                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        cell.SetHighlightConfig(this.cellHighlightConfig);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardManager.Awake end.*/

            /*BoardManager.ComputeNeighbors start.*/
            ComputeNeighbors: function () {
if ( TRACE ) { TRACE( "BoardManager#ComputeNeighbors", this ); }

                var $t, $t1;
                var maxSqr = this.neighborMaxDistance * this.neighborMaxDistance;

                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(cell, null)) {
                            continue;
                        }

                        cell.Neighbors.clear();
                        var cellPos = cell.transform.position.$clone();

                        $t1 = Bridge.getEnumerator(this.cells);
                        try {
                            while ($t1.moveNext()) {
                                var other = $t1.Current;
                                if (UnityEngine.MonoBehaviour.op_Equality(other, null) || UnityEngine.MonoBehaviour.op_Equality(other, cell)) {
                                    continue;
                                }

                                var delta = other.transform.position.$clone().sub( cellPos );
                                delta.y = 0.0; // сетка плоская — как и раньше, высота роли не играет
                                if (delta.lengthSq() <= maxSqr) {
                                    cell.Neighbors.add(other);
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardManager.ComputeNeighbors end.*/

            /*BoardManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BoardManager#Start", this ); }

                var $t;
                // Расставляем стопки, заранее заданные дизайнером на ячейках — это и есть
                // "поле с шестиугольниками", в которое игрок подмешивает стопки из лотка.
                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (System.Array.getCount(cell.InitialStackColors, HexColor) === 0) {
                            continue;
                        }

                        var stack = UnityEngine.Object.Instantiate$2(HexStack, this.stackPrefab, cell.SnapPosition, new pc.Quat().setFromEulerAngles_Unity( this.initialStackRotation.x, this.initialStackRotation.y, this.initialStackRotation.z ));
                        stack.Initialize(cell.InitialStackColors, this.piecePrefab, this.palette);
                        stack.CurrentCell = cell;
                        cell.CurrentStack = stack;

                        // Стартовые стопки на поле — не перетаскиваемые, в отличие от стопок лотка.
                        var drag = stack.GetComponent(StackDragHandler);
                        if (UnityEngine.MonoBehaviour.op_Inequality(drag, null)) {
                            drag.enabled = false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardManager.Start end.*/

            /*BoardManager.PlaceStack start.*/
            PlaceStack: function (stack, cell) {
if ( TRACE ) { TRACE( "BoardManager#PlaceStack", this ); }

                stack.transform.position = cell.SnapPosition.$clone();
                stack.CurrentCell = cell;
                cell.CurrentStack = stack;
                !Bridge.staticEquals(this.OnStackPlaced, null) ? this.OnStackPlaced(stack) : null;
                this.StartCoroutine$1(this.ProcessChainReaction(cell));
            },
            /*BoardManager.PlaceStack end.*/

            /*BoardManager.GetNeighbors start.*/
            GetNeighbors: function (cell) {
if ( TRACE ) { TRACE( "BoardManager#GetNeighbors", this ); }

                return cell.Neighbors;
            },
            /*BoardManager.GetNeighbors end.*/

            /*BoardManager.ProcessChainReaction start.*/
            ProcessChainReaction: function (startCell) {
if ( TRACE ) { TRACE( "BoardManager#ProcessChainReaction", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    waveId,
                    reactionStacks,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.chainRunning = true;
                                        waveId = ((this.reactionWaveCounter = (this.reactionWaveCounter + 1) | 0));
                                        reactionStacks = new (System.Collections.Generic.List$1(HexStack)).ctor();

                                        UnityEngine.Debug.Log$1(System.String.format("[Chain] START: Reaction initiated at cell {0}. WaveID: {1}", startCell.name, Bridge.box(waveId, System.Int32)));

                                        // Запуск BFS
                                        $enumerator.current = this.StartCoroutine$1(this.RunChainReactionBfs(startCell, waveId, reactionStacks));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.Debug.Log$1(System.String.format("[Chain] BFS FINISHED. Collected {0} stacks in reaction.", [Bridge.box(reactionStacks.Count, System.Int32)]));

                                        //DestroyMonochromeStacks(reactionStacks);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.ProcessChainReaction end.*/

            /*BoardManager.TryDestroyMonochromeStacks start.*/
            TryDestroyMonochromeStacks: function (reactionStacks) {
if ( TRACE ) { TRACE( "BoardManager#TryDestroyMonochromeStacks", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    toDestroy,
                    $t,
                    stack,
                    isMonochrome,
                    isEmpty,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Сбор стопок на уничтожение
                                        toDestroy = new (System.Collections.Generic.List$1(HexStack)).ctor();
                                        $t = Bridge.getEnumerator(reactionStacks);
                                        try {
                                            while ($t.moveNext()) {
                                                stack = $t.Current;
                                                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                                                    continue;
                                                }

                                                stack.InReaction = false;

                                                isMonochrome = stack.IsMonochrome;
                                                isEmpty = stack.IsEmpty;

                                                if (!isEmpty && isMonochrome) {
                                                    toDestroy.add(stack);
                                                    UnityEngine.Debug.Log$1(System.String.format("[Chain] STACK MARKED FOR DESTROY: {0}. Color: {1}", stack.name, Bridge.box(stack.TopColor, HexColor, System.Enum.toStringFn(HexColor))));
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        UnityEngine.Debug.Log$1(System.String.format("[Chain] TOTAL STACKS TO DESTROY: {0}", [Bridge.box(toDestroy.Count, System.Int32)]));

                                        // Уничтожение
                                        if (toDestroy.Count > 0) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    UnityEngine.Debug.Log$1("[Chain] Starting AnimateAndDestroyAll...");
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAndDestroyAll(toDestroy));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    UnityEngine.Debug.Log$1("[Chain] AnimateAndDestroyAll completed successfully.");
                                    $step = 4;
                                    continue;
                                }
                                case 3: {
                                    UnityEngine.Debug.Log$1("[Chain] No stacks found to destroy, ending chain.");
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    this.chainRunning = false;
                                        UnityEngine.Debug.Log$1("[Chain] END: Reaction fully finished.");

                                        if (this.IsBoardFullyCleared()) {
                                            UnityEngine.Debug.Log$1("[Chain] Board is fully cleared! Triggering OnBoardCleared.");
                                            !Bridge.staticEquals(this.OnBoardCleared, null) ? this.OnBoardCleared() : null;
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.TryDestroyMonochromeStacks end.*/

            /*BoardManager.RunChainReactionBfs start.*/
            RunChainReactionBfs: function (startCell, waveId, reactionStacks) {
if ( TRACE ) { TRACE( "BoardManager#RunChainReactionBfs", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    speedMultiplier,
                    queue,
                    cell,
                    neighbors,
                    visited,
                    $t,
                    $t1,
                    $t2,
                    neighbor,
                    activeStack,
                    neighborStack,
                    activeIsDonor,
                    donorStack,
                    receiverStack,
                    donorCell,
                    receiverCell,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    UnityEngine.Debug.Log$1(System.String.format("[Chain] BFS: Starting BFS from cell {0}...", [startCell.name]));
                                        speedMultiplier = 1.0;

                                        queue = new (System.Collections.Generic.Queue$1(BoardCell)).ctor();

                                        queue.Enqueue(startCell);
                                        startCell.QueuedWave = waveId;
                                        BoardManager.MarkInReaction(startCell.CurrentStack, reactionStacks);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( queue.Count > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 2: {
                                    cell = queue.Dequeue();
                                        UnityEngine.Debug.Log$1(System.String.format("[Chain] PROCESS {0}, queue after dequeue={1}", cell.name, Bridge.box(queue.Count, System.Int32)));

                                        neighbors = new (System.Collections.Generic.List$1(BoardCell)).$ctor1(this.GetNeighbors(cell));
                                        visited = new (System.Collections.Generic.HashSet$1(BoardCell)).ctor();

                                        UnityEngine.Debug.Log$1(System.String.format("[neighbors.count={0}] BFS: Processing cell {1} with top stack color {2}.", Bridge.box(neighbors.Count, System.Int32), cell.name, ($t = (UnityEngine.MonoBehaviour.op_Inequality(($t1 = cell.CurrentStack), null) ? System.Enum.toString(HexColor, $t1.TopColor) : null), $t != null ? $t : "null")));
                                        $t2 = Bridge.getEnumerator(neighbors);
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ($t2.moveNext()) {
                                            neighbor = $t2.Current;
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    activeStack = cell.CurrentStack;
                                        neighborStack = neighbor.CurrentStack;

                                        if (UnityEngine.MonoBehaviour.op_Equality(activeStack, null) || activeStack.IsEmpty) {
                                            $step = 6;
                                            continue;
                                        }
                                        if (UnityEngine.MonoBehaviour.op_Equality(neighborStack, null) || neighborStack.IsEmpty) {
                                            $step = 3;
                                            continue;
                                        }
                                        if (neighborStack.TopColor !== activeStack.TopColor) {
                                            $step = 3;
                                            continue;
                                        }

                                        activeIsDonor = activeStack.Count >= neighborStack.Count;
                                        donorStack = activeIsDonor ? activeStack : neighborStack;
                                        receiverStack = activeIsDonor ? neighborStack : activeStack;
                                        donorCell = activeIsDonor ? cell : neighbor;
                                        receiverCell = activeIsDonor ? neighbor : cell;

                                        BoardManager.MarkInReaction(donorStack, reactionStacks);
                                        BoardManager.MarkInReaction(receiverStack, reactionStacks);

                                        UnityEngine.Debug.Log$1(System.String.format("[Chain] TRANSFER START {0} -> {1}. active={2} neighbor={3}", cell.name, neighbor.name, Bridge.box(activeStack.Count, System.Int32), Bridge.box(neighborStack.Count, System.Int32)));
                                        $enumerator.current = this.TransferMatchingColor(donorStack, receiverStack, speedMultiplier);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    UnityEngine.Debug.Log$1(System.String.format("[Chain] TRANSFER END {0} -> {1}. donorEmpty={2} activeTop={3}", cell.name, neighbor.name, Bridge.box(donorStack.IsEmpty, System.Boolean, System.Boolean.toString), (UnityEngine.MonoBehaviour.op_Inequality(cell.CurrentStack, null) && !cell.CurrentStack.IsEmpty ? System.Enum.toString(HexColor, cell.CurrentStack.TopColor) : "null")));

                                        speedMultiplier *= this.speedMultiplierPerClear;

                                        if (donorStack.IsEmpty) {
                                            UnityEngine.MonoBehaviour.Destroy(donorStack.gameObject);
                                            donorCell.CurrentStack = null;
                                        } else if (!activeIsDonor && donorCell.QueuedWave !== waveId) {
                                            donorCell.QueuedWave = waveId;
                                            UnityEngine.Debug.Log$1(System.String.format("[Chain] BFS: Enqueuing donor cell {0} for further processing. [donorCell.QueuedWave={1}, waveId={2}]", donorCell.name, Bridge.box(donorCell.QueuedWave, System.Int32), Bridge.box(waveId, System.Int32)));
                                            queue.Enqueue(donorCell);
                                        }

                                        if (activeIsDonor && receiverCell.QueuedWave !== waveId) {
                                            receiverCell.QueuedWave = waveId;
                                            UnityEngine.Debug.Log$1(System.String.format("[Chain] BFS: Enqueuing neighbor cell {0} for further processing. [receiverCell.QueuedWave={1}, waveId={2}]", receiverCell.name, Bridge.box(receiverCell.QueuedWave, System.Int32), Bridge.box(waveId, System.Int32)));
                                            queue.Enqueue(receiverCell);
                                        }
                                    $step = 3;
                                    continue;
                                }
                                case 6: {
                                    UnityEngine.Debug.Log$1(System.String.format("[Chain] FOREACH END {0}, queue={1}", cell.name, Bridge.box(queue.Count, System.Int32)));
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    UnityEngine.Debug.Log$1(System.String.format("[queue.Count={0}, speedMultiplier={1}]", Bridge.box(queue.Count, System.Int32), Bridge.box(speedMultiplier, System.Single, System.Single.format, System.Single.getHashCode)));

                                        $step = 1;
                                        continue;
                                }
                                case 8: {
                                    UnityEngine.Debug.Log$1("[Chain] BFS: Queue empty, triggering destruction.");
                                        $enumerator.current = this.StartCoroutine$1(this.TryDestroyMonochromeStacks(reactionStacks));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.RunChainReactionBfs end.*/

            /*BoardManager.TransferMatchingColor start.*/
            TransferMatchingColor: function (donorStack, receiverStack, speedMultiplier) {
if ( TRACE ) { TRACE( "BoardManager#TransferMatchingColor", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    matchColor,
                    duration,
                    stagger,
                    flights,
                    reserved,
                    piece,
                    from,
                    to,
                    staggerElapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    matchColor = receiverStack.TopColor;
                                        duration = this.baseJumpDuration / speedMultiplier;
                                        stagger = this.jumpStartStagger / speedMultiplier;

                                        flights = new (System.Collections.Generic.List$1(UnityEngine.Coroutine)).ctor();
                                        reserved = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( !donorStack.IsEmpty && donorStack.TopColor === matchColor ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 2: {
                                    piece = donorStack.PopTopPiece();
                                        from = piece.transform.position.$clone();
                                        to = receiverStack.GetNextSlotWorldPosition(reserved);
                                        reserved = (reserved + 1) | 0;

                                        // На время перелёта фишка не привязана ни к донору, ни к получателю —
                                        // так масштаб/поворот стопок её не задевает, пока она летит и переворачивается.
                                        this._flightsRemaining = (this._flightsRemaining + 1) | 0;
                                        piece.transform.SetParent(null, true);
                                        this.StartCoroutine$1(this.FlyAndLand(piece, from, to, duration, receiverStack));

                                        // Пауза-нахлёст между стартами фишек — вручную через Time.deltaTime, БЕЗ WaitForSeconds:
                                        // в билде Luna код ПОСЛЕ `yield return WaitForSeconds` не исполняется (транспайлер
                                        // превращает его в return), и цикл раздачи прерывался бы после первой же фишки
                                        // (см. доки Luna common-issues / комментарий в ProcessChainReaction).
                                        staggerElapsed = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( staggerElapsed < stagger ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    staggerElapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 7: {
                                    if ( this._flightsRemaining > 0 ) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 8: {
                                    UnityEngine.Debug.Log$1("WAIT FLIGHT");

                                        $enumerator.current = null;
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    UnityEngine.Debug.Log$1("FLIGHT DONE");

                                        $step = 7;
                                        continue;
                                }
                                case 10: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.TransferMatchingColor end.*/

            /*BoardManager.FlyAndLand start.*/
            FlyAndLand: function (piece, from, to, duration, receiverStack) {
if ( TRACE ) { TRACE( "BoardManager#FlyAndLand", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // StartCoroutine, а не «сырой» yield return <IEnumerator>: иначе в билде Luna FlyAndLand не
                                        // проснётся после перелёта — фишка визуально долетит, но AppendPiece ниже не выполнится, а
                                        // ожидающий этот перелёт TransferMatchingColor/BFS/ProcessChainReaction навсегда зависнут,
                                        // так и не дойдя до удаления монохромных стопок (см. подробный комментарий в ProcessChainReaction).
                                        UnityEngine.Debug.Log$1("MOVE START");
                                        $enumerator.current = this.StartCoroutine$1(this.MoveHexWithArc(piece.gameObject, from.$clone(), to.$clone(), duration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.Debug.Log$1("MOVE END");
                                        // AppendPiece сразу после этого ставит localRotation = identity относительно receiverStack
                                        // (т.е. итоговый мировой поворот станет receiverStack.transform.rotation) — расхождение
                                        // оказалось не только по X (там оно было заметнее всего), но и по остальным осям тоже,
                                        // просто меньше — поэтому довороток теперь по всем осям сразу, одним Slerp.
                                        $enumerator.current = this.StartCoroutine$1(this.SmoothRotateTo(piece.transform, receiverStack.transform.rotation, this.landingSettleDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    UnityEngine.Debug.Log$1("ROTATE END");

                                        receiverStack.AppendPiece(piece);
                                        this._flightsRemaining = (this._flightsRemaining - 1) | 0;
                                        UnityEngine.Debug.Log$1("APPEND END");

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.FlyAndLand end.*/

            /*BoardManager.SmoothRotateTo start.*/
            SmoothRotateTo: function (target, targetRotation, duration) {
if ( TRACE ) { TRACE( "BoardManager#SmoothRotateTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    fromRotation,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(target, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    fromRotation = target.rotation.$clone();
                                        elapsed = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        target.rotation = new pc.Quat().slerpUnclamped( fromRotation, targetRotation, pc.math.clamp( Math.max(0, Math.min(1, elapsed / duration)), 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    target.rotation = targetRotation.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.SmoothRotateTo end.*/

            /*BoardManager.AnimateAndDestroyAll start.*/
            AnimateAndDestroyAll: function (stacks) {
if ( TRACE ) { TRACE( "BoardManager#AnimateAndDestroyAll", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    activeStacks,
                    $t,
                    s,
                    n,
                    roots,
                    startPositions,
                    endPositions,
                    colors,
                    squashPieces,
                    squashStartScales,
                    stack,
                    root,
                    squashCount,
                    pieces,
                    scales,
                    duration,
                    particleDelay,
                    particlesSpawned,
                    elapsed,
                    sinkN,
                    squashN,
                    pieces1,
                    scales1,
                    sc,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // 1. Очищаем список от null-ссылок сразу, чтобы не проверять их в цикле
                                        activeStacks = new (System.Collections.Generic.List$1(HexStack)).ctor();
                                        if (stacks != null) {
                                            $t = Bridge.getEnumerator(stacks);
                                            try {
                                                while ($t.moveNext()) {
                                                    s = $t.Current;
                                                    if (UnityEngine.MonoBehaviour.op_Inequality(s, null)) {
                                                        activeStacks.add(s);
                                                    }
                                                }
                                            } finally {
                                                if (Bridge.is($t, System.IDisposable)) {
                                                    $t.System$IDisposable$Dispose();
                                                }
                                            }
                                        }

                                        n = activeStacks.Count;
                                        if (n === 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    // 2. Предварительно кэшируем все данные
                                        roots = System.Array.init(n, null, UnityEngine.Transform);
                                        startPositions = System.Array.init(n, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        endPositions = System.Array.init(n, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        colors = System.Array.init(n, 0, HexColor);
                                        squashPieces = System.Array.init(n, null, System.Array.type(UnityEngine.Transform));
                                        squashStartScales = System.Array.init(n, null, System.Array.type(UnityEngine.Vector3));

                                        for (var s1 = 0; s1 < n; s1 = (s1 + 1) | 0) {
                                            stack = activeStacks.getItem(s1);
                                            root = stack.transform;
                                            roots[s1] = root;
                                            startPositions[s1] = root.position.$clone();
                                            endPositions[s1] = new pc.Vec3( root.position.x, this.sinkTargetY, root.position.z );
                                            colors[s1] = stack.TopColor;

                                            squashCount = UnityEngine.Mathf.Min(this.topPieceSquashScaleYZ.length, root.childCount);
                                            pieces = System.Array.init(squashCount, null, UnityEngine.Transform);
                                            scales = System.Array.init(squashCount, function (){
                                                return new UnityEngine.Vector3();
                                            }, UnityEngine.Vector3);
                                            for (var i = 0; i < squashCount; i = (i + 1) | 0) {
                                                pieces[i] = root.GetChild(((((root.childCount - 1) | 0) - i) | 0));
                                                scales[i] = pieces[i].localScale.$clone();
                                            }
                                            squashPieces[s1] = pieces;
                                            squashStartScales[s1] = scales;
                                        }

                                        duration = UnityEngine.Mathf.Max(this.squashDuration, this.sinkDuration);
                                        particleDelay = UnityEngine.Mathf.Max(0.0, duration - this.destroyEffectOffsetBeforeEnd);
                                        particlesSpawned = false;

                                        elapsed = 0.0;
                                        // 3. Используем простой while с yield return null
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;

                                        sinkN = this.sinkDuration > 0.0 ? Math.max(0, Math.min(1, elapsed / this.sinkDuration)) : 1.0;
                                        squashN = this.squashDuration > 0.0 ? Math.max(0, Math.min(1, elapsed / this.squashDuration)) : 1.0;

                                        for (var s2 = 0; s2 < n; s2 = (s2 + 1) | 0) {
                                            if (UnityEngine.Component.op_Equality(roots[s2], null)) {
                                                continue;
                                            }
                                            if (elapsed >= particleDelay) {
                                                for (var t = 0; t < n; t = (t + 1) | 0) {
                                                    if (UnityEngine.Component.op_Inequality(roots[t], null)) {
                                                        UnityEngine.MonoBehaviour.Destroy(roots[t].gameObject);
                                                    }
                                                }
                                                break;
                                            }

                                            roots[s2].position = new pc.Vec3().lerp( startPositions[s2], endPositions[s2], sinkN );

                                            pieces1 = squashPieces[s2];
                                            scales1 = squashStartScales[s2];
                                            for (var i1 = 0; i1 < pieces1.length; i1 = (i1 + 1) | 0) {
                                                sc = pieces1[i1].localScale.$clone();
                                                sc.y = pc.math.lerp(scales1[i1].y, this.topPieceSquashScaleYZ[i1], squashN);
                                                sc.z = pc.math.lerp(scales1[i1].z, this.topPieceSquashScaleYZ[i1], squashN);
                                                pieces1[i1].localScale = sc.$clone();
                                            }
                                        }

                                        if (!particlesSpawned && elapsed >= particleDelay) {
                                            particlesSpawned = true;
                                            for (var s3 = 0; s3 < n; s3 = (s3 + 1) | 0) {
                                                this.SpawnDestroyEffect(startPositions[s3], colors[s3]);
                                            }
                                        }

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.AnimateAndDestroyAll end.*/

            /*BoardManager.SpawnDestroyEffect start.*/
            SpawnDestroyEffect: function (position, color) {
if ( TRACE ) { TRACE( "BoardManager#SpawnDestroyEffect", this ); }

                if (UnityEngine.Component.op_Equality(this.destroyStackEffectPrefab, null)) {
                    return;
                }

                var effect = UnityEngine.Object.Instantiate$2(UnityEngine.ParticleSystem, this.destroyStackEffectPrefab, position, this.destroyStackEffectPrefab.transform.rotation);

                var sourceMaterial = this.palette != null ? this.palette.GetMaterial(color) : null;
                if (sourceMaterial != null) {
                    var main = effect.main;
                    main.startColor = new pc.MinMaxGradient(sourceMaterial.color.$clone());
                }

                this.Destroy(effect.gameObject, 2.0);
            },
            /*BoardManager.SpawnDestroyEffect end.*/

            /*BoardManager.MoveHexWithArc start.*/
            MoveHexWithArc: function (hex, startPos, endPos, duration) {
if ( TRACE ) { TRACE( "BoardManager#MoveHexWithArc", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    hexTransform,
                    startRotation,
                    pivot,
                    startOffset,
                    flatDirection,
                    flipAxis,
                    elapsed,
                    n,
                    delta,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.GameObject.op_Equality(hex, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    hexTransform = hex.transform;
                                        startRotation = hexTransform.rotation.$clone();

                                        pivot = (startPos.$clone().add( endPos )).clone().scale( 0.5 ); // середина пути — точка на общем ребре ячеек
                                        startOffset = startPos.$clone().sub( pivot ); // радиус-вектор от ребра до старта

                                        startOffset = startOffset.$clone().clone().scale( 0.9 );

                                        flatDirection = endPos.$clone().sub( startPos );
                                        flatDirection.y = 0.0;
                                        // Знак оси определяет, с какой стороны идёт дуга — сверху или снизу через pivot;
                                        // Cross(up, direction), а не Cross(direction, up), даёт проход через верх.
                                        flipAxis = flatDirection.lengthSq() > 0.0001 ? new pc.Vec3().cross( pc.Vec3.UP.clone(), flatDirection.clone().normalize() ) : pc.Vec3.RIGHT.clone();

                                        elapsed = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        // AnimationCurve даёт eased-прогресс n (ускорение в начале, замедление в конце).
                                        n = this.jumpEasing.value(Math.max(0, Math.min(1, elapsed / duration)));

                                        // Одно и то же вращение (delta) одновременно поворачивает саму фишку и её позицию
                                        // вокруг ребра — на пике (n=0.5, 90°) она ровно на ребре, к n=1 (180°) она точно
                                        // в endPos, потому что 180°-поворот точки вокруг pivot — это точечное отражение.
                                        delta = new pc.Quat().setFromAxisAngle( flipAxis, n * 180.0 );
                                        hexTransform.position = pivot.$clone().add( delta.transformVector( startOffset ) );
                                        hexTransform.rotation = delta.clone().mul( startRotation );

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    UnityEngine.Debug.Log$1("ARC FINISHED");
                                        hexTransform.position = endPos.$clone();
                                        hexTransform.rotation = new pc.Quat().setFromAxisAngle( flipAxis, 180.0 ).clone().mul( startRotation );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BoardManager.MoveHexWithArc end.*/

            /*BoardManager.IsBoardFullyCleared start.*/
            IsBoardFullyCleared: function () {
if ( TRACE ) { TRACE( "BoardManager#IsBoardFullyCleared", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (!cell.IsEmpty) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*BoardManager.IsBoardFullyCleared end.*/


        }
    });
    /*BoardManager end.*/

    /*CellHighlightConfig start.*/
    Bridge.define("CellHighlightConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            normalColor: null,
            highlightColor: null,
            highlightScaleX: 0,
            highlightPositionY: 0,
            transitionDuration: 0
        },
        props: {
            NormalColor: {
                get: function () {
if ( TRACE ) { TRACE( "CellHighlightConfig#NormalColor#get", this ); }

                    return this.normalColor.$clone();
                }
            },
            HighlightColor: {
                get: function () {
if ( TRACE ) { TRACE( "CellHighlightConfig#HighlightColor#get", this ); }

                    return this.highlightColor.$clone();
                }
            },
            HighlightScaleX: {
                get: function () {
if ( TRACE ) { TRACE( "CellHighlightConfig#HighlightScaleX#get", this ); }

                    return this.highlightScaleX;
                }
            },
            HighlightPositionY: {
                get: function () {
if ( TRACE ) { TRACE( "CellHighlightConfig#HighlightPositionY#get", this ); }

                    return this.highlightPositionY;
                }
            },
            TransitionDuration: {
                get: function () {
if ( TRACE ) { TRACE( "CellHighlightConfig#TransitionDuration#get", this ); }

                    return this.transitionDuration;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CellHighlightConfig#init", this ); }

                this.normalColor = new UnityEngine.Color();
                this.highlightColor = new UnityEngine.Color();
                this.normalColor = new pc.Color( 1, 1, 1, 1 );
                this.highlightColor = new pc.Color( 0.5, 1.0, 0.5, 1 );
                this.highlightScaleX = 0.3;
                this.highlightPositionY = 0.02;
                this.transitionDuration = 0.15;
            }
        }
    });
    /*CellHighlightConfig end.*/

    /*CopyRectSize start.*/
    Bridge.define("CopyRectSize", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sourceBG: null,
            currentBG: null
        },
        methods: {
            /*CopyRectSize.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CopyRectSize#OnEnable", this ); }

                if (UnityEngine.Component.op_Equality(this.sourceBG, null) || UnityEngine.Component.op_Equality(this.currentBG, null)) {
                    return;
                }
                var sourceSize = this.sourceBG.rect.size.$clone();
                this.currentBG.sizeDelta = sourceSize.$clone();
            },
            /*CopyRectSize.OnEnable end.*/


        }
    });
    /*CopyRectSize end.*/

    /*FloatingHoverEffect start.*/
    Bridge.define("FloatingHoverEffect", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            amplitude: 0,
            frequency: 0,
            rotationAmplitudeDegrees: 0,
            basePosition: null,
            baseRotationZ: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FloatingHoverEffect#init", this ); }

                this.basePosition = new UnityEngine.Vector2();
                this.amplitude = 20.0;
                this.frequency = 0.5;
                this.rotationAmplitudeDegrees = 3.0;
            }
        },
        methods: {
            /*FloatingHoverEffect.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FloatingHoverEffect#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.target, null)) {
                    this.target = Bridge.as(this.transform, UnityEngine.RectTransform);
                }
                this.basePosition = this.target.anchoredPosition.$clone();
                this.baseRotationZ = this.target.localEulerAngles.z;
            },
            /*FloatingHoverEffect.Awake end.*/

            /*FloatingHoverEffect.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "FloatingHoverEffect#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.target, null)) {
                    return;
                }

                var phase = UnityEngine.Time.time * this.frequency * UnityEngine.Mathf.PI * 2.0;
                this.target.anchoredPosition = this.basePosition.$clone().add( pc.Vec2.UP.clone().scale( (Math.sin(phase) * this.amplitude) ) );
                this.target.localEulerAngles = new pc.Vec3( 0.0, 0.0, this.baseRotationZ + Math.sin(phase * 0.5) * this.rotationAmplitudeDegrees );
            },
            /*FloatingHoverEffect.LateUpdate end.*/


        }
    });
    /*FloatingHoverEffect end.*/

    /*GameFlowController start.*/
    Bridge.define("GameFlowController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tutorial: null,
            timer: null,
            timerSlider: null,
            packshot: null,
            board: null,
            dragHandlers: null,
            phase: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameFlowController#init", this ); }

                this.phase = GameFlowController.Phase.Tutorial;
            }
        },
        methods: {
            /*GameFlowController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "GameFlowController#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                    this.tutorial.addOnTutorialFinished(Bridge.fn.cacheBind(this, this.HandleTutorialFinished));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timerSlider, null)) {
                    this.timerSlider.addOnFailPopupShown(Bridge.fn.cacheBind(this, this.HandleFailPopupShown));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.board, null)) {
                    this.board.addOnBoardCleared(Bridge.fn.cacheBind(this, this.HandleBoardCleared));
                }
            },
            /*GameFlowController.OnEnable end.*/

            /*GameFlowController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "GameFlowController#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                    this.tutorial.removeOnTutorialFinished(Bridge.fn.cacheBind(this, this.HandleTutorialFinished));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timerSlider, null)) {
                    this.timerSlider.removeOnFailPopupShown(Bridge.fn.cacheBind(this, this.HandleFailPopupShown));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.board, null)) {
                    this.board.removeOnBoardCleared(Bridge.fn.cacheBind(this, this.HandleBoardCleared));
                }
            },
            /*GameFlowController.OnDisable end.*/

            /*GameFlowController.HandleTutorialFinished start.*/
            HandleTutorialFinished: function () {
if ( TRACE ) { TRACE( "GameFlowController#HandleTutorialFinished", this ); }

                if (this.phase !== GameFlowController.Phase.Tutorial) {
                    return;
                }

                this.phase = GameFlowController.Phase.Gameplay;
                this.timer.StartTimer();
                Luna.Unity.LifeCycle.GameStarted();
            },
            /*GameFlowController.HandleTutorialFinished end.*/

            /*GameFlowController.HandleFailPopupShown start.*/
            HandleFailPopupShown: function () {
if ( TRACE ) { TRACE( "GameFlowController#HandleFailPopupShown", this ); }

                this.GoToPackshot();
            },
            /*GameFlowController.HandleFailPopupShown end.*/

            /*GameFlowController.HandleBoardCleared start.*/
            HandleBoardCleared: function () {
if ( TRACE ) { TRACE( "GameFlowController#HandleBoardCleared", this ); }

                if (this.phase === GameFlowController.Phase.Gameplay) {
                    this.GoToPackshot();
                }
            },
            /*GameFlowController.HandleBoardCleared end.*/

            /*GameFlowController.GoToPackshot start.*/
            GoToPackshot: function () {
if ( TRACE ) { TRACE( "GameFlowController#GoToPackshot", this ); }

                var $t;
                if (this.phase === GameFlowController.Phase.Packshot) {
                    return;
                }

                this.phase = GameFlowController.Phase.Packshot;
                this.timer.StopTimer();

                $t = Bridge.getEnumerator(this.dragHandlers);
                try {
                    while ($t.moveNext()) {
                        var handler = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(handler, null)) {
                            handler.enabled = false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.packshot.Show();
            },
            /*GameFlowController.GoToPackshot end.*/


        }
    });
    /*GameFlowController end.*/

    /*GameFlowController+Phase start.*/
    Bridge.define("GameFlowController.Phase", {
        $kind: 1006,
        statics: {
            fields: {
                Tutorial: 0,
                Gameplay: 1,
                Packshot: 2
            }
        }
    });
    /*GameFlowController+Phase end.*/

    /*GameTimerUI start.*/
    Bridge.define("GameTimerUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            clockHand: null,
            duration: 0,
            startAngleZ: 0,
            endAngleZ: 0,
            warningRemainingFraction: 0,
            elapsed: 0,
            running: false,
            warningTriggered: false
        },
        events: {
            OnTimerExpired: null,
            OnWarningZoneEntered: null,
            OnTimerStopped: null
        },
        props: {
            Progress01: {
                get: function () {
if ( TRACE ) { TRACE( "GameTimerUI#Progress01#get", this ); }

                    return this.duration > 0.0 ? Math.max(0, Math.min(1, this.elapsed / this.duration)) : 0.0;
                }
            },
            RemainingSeconds: {
                get: function () {
if ( TRACE ) { TRACE( "GameTimerUI#RemainingSeconds#get", this ); }

                    return UnityEngine.Mathf.Max(0.0, this.duration - this.elapsed);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameTimerUI#init", this ); }

                this.duration = 25.0;
                this.startAngleZ = -136.0;
                this.endAngleZ = 223.0;
                this.warningRemainingFraction = 0.333333343;
            }
        },
        methods: {
            /*GameTimerUI.StartTimer start.*/
            StartTimer: function () {
if ( TRACE ) { TRACE( "GameTimerUI#StartTimer", this ); }

                this.elapsed = 0.0;
                this.running = true;
                this.warningTriggered = false;
                if (UnityEngine.Component.op_Inequality(this.clockHand, null)) {
                    this.clockHand.localEulerAngles = new pc.Vec3( 0.0, 0.0, this.startAngleZ );
                }
            },
            /*GameTimerUI.StartTimer end.*/

            /*GameTimerUI.StopTimer start.*/
            StopTimer: function () {
if ( TRACE ) { TRACE( "GameTimerUI#StopTimer", this ); }

                this.running = false;
                !Bridge.staticEquals(this.OnTimerStopped, null) ? this.OnTimerStopped() : null;
            },
            /*GameTimerUI.StopTimer end.*/

            /*GameTimerUI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameTimerUI#Update", this ); }

                if (!this.running) {
                    return;
                }

                this.elapsed += UnityEngine.Time.deltaTime;
                var n = Math.max(0, Math.min(1, this.elapsed / this.duration));

                if (UnityEngine.Component.op_Inequality(this.clockHand, null)) {
                    this.clockHand.localEulerAngles = new pc.Vec3( 0.0, 0.0, UnityEngine.Mathf.LerpUnclamped(this.startAngleZ, this.endAngleZ, n) );
                }

                if (!this.warningTriggered && 1.0 - n <= this.warningRemainingFraction) {
                    this.warningTriggered = true;
                    !Bridge.staticEquals(this.OnWarningZoneEntered, null) ? this.OnWarningZoneEntered() : null;
                }

                if (n >= 1.0) {
                    this.running = false;
                    !Bridge.staticEquals(this.OnTimerExpired, null) ? this.OnTimerExpired() : null;
                    !Bridge.staticEquals(this.OnTimerStopped, null) ? this.OnTimerStopped() : null;
                }
            },
            /*GameTimerUI.Update end.*/


        }
    });
    /*GameTimerUI end.*/

    /*HexColor start.*/
    Bridge.define("HexColor", {
        $kind: 6,
        statics: {
            fields: {
                Red: 0,
                Yellow: 1,
                Green: 2,
                Cyan: 3,
                Blue: 4,
                Violet: 5,
                SoftBlue: 6,
                White: 7
            }
        }
    });
    /*HexColor end.*/

    /*HexColorPalette start.*/
    Bridge.define("HexColorPalette", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            entries: null
        },
        methods: {
            /*HexColorPalette.GetMaterial start.*/
            GetMaterial: function (color) {
if ( TRACE ) { TRACE( "HexColorPalette#GetMaterial", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.entries);
                try {
                    while ($t.moveNext()) {
                        var entry = $t.Current.$clone();
                        if (entry.color === color) {
                            return entry.material;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                UnityEngine.Debug.LogError$2(System.String.format("HexColorPalette: \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043b\u044f \u0446\u0432\u0435\u0442\u0430 {0} \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0432 \u0430\u0441\u0441\u0435\u0442\u0435 {1}.", Bridge.box(color, HexColor, System.Enum.toStringFn(HexColor)), this.name));
                return null;
            },
            /*HexColorPalette.GetMaterial end.*/


        }
    });
    /*HexColorPalette end.*/

    /*HexColorPalette+Entry start.*/
    Bridge.define("HexColorPalette.Entry", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexColorPalette.Entry#getDefaultValue", this ); }
 return new HexColorPalette.Entry(); }
            }
        },
        fields: {
            color: 0,
            material: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "HexColorPalette.Entry#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexColorPalette.Entry#getHashCode", this ); }

                var h = Bridge.addHash([1920233150, this.color, this.material]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexColorPalette.Entry#equals", this ); }

                if (!Bridge.is(o, HexColorPalette.Entry)) {
                    return false;
                }
                return Bridge.equals(this.color, o.color) && Bridge.equals(this.material, o.material);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexColorPalette.Entry#$clone", this ); }

                var s = to || new HexColorPalette.Entry();
                s.color = this.color;
                s.material = this.material;
                return s;
            }
        }
    });
    /*HexColorPalette+Entry end.*/

    /*HexPieceView start.*/
    Bridge.define("HexPieceView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                AlwaysOnTopRenderQueue: 0,
                NormalRenderQueue: 0,
                ZTestPropertyId: 0,
                ColorPropertyId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexPieceView#init", this ); }

                    this.AlwaysOnTopRenderQueue = 5000;
                    this.NormalRenderQueue = UnityEngine.Rendering.RenderQueue.Geometry;
                    this.ZTestPropertyId = UnityEngine.Shader.PropertyToID("_ZTest");
                    this.ColorPropertyId = UnityEngine.Shader.PropertyToID("_Color");
                }
            }
        },
        fields: {
            needsAlwaysOnTopMaterial: false,
            meshRenderer: null,
            propertyBlock: null,
            baseColor: null,
            Color: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexPieceView#init", this ); }

                this.baseColor = new UnityEngine.Color();
                this.needsAlwaysOnTopMaterial = false;
                this.baseColor = new pc.Color( 1, 1, 1, 1 );
            }
        },
        methods: {
            /*HexPieceView.SetNeedsAlwaysOnTopMaterial start.*/
            SetNeedsAlwaysOnTopMaterial: function (value) {
if ( TRACE ) { TRACE( "HexPieceView#SetNeedsAlwaysOnTopMaterial", this ); }

                this.needsAlwaysOnTopMaterial = value;
            },
            /*HexPieceView.SetNeedsAlwaysOnTopMaterial end.*/

            /*HexPieceView.SetColor start.*/
            SetColor: function (color, palette) {
if ( TRACE ) { TRACE( "HexPieceView#SetColor", this ); }

                var $t;
                this.Color = color;

                if (UnityEngine.Component.op_Equality(this.meshRenderer, null)) {
                    this.meshRenderer = this.GetComponent(UnityEngine.MeshRenderer);
                }

                var sourceMaterial = palette.GetMaterial(color);
                if (sourceMaterial == null) {
                    return;
                }

                // Запоминаем "родной" цвет — от него считается свечение в SetGlow (см. ниже), через
                // MaterialPropertyBlock, не трогая сам материал/ассет.
                this.baseColor = sourceMaterial.color.$clone();

                if (!this.needsAlwaysOnTopMaterial) {
                    this.meshRenderer.sharedMaterial = sourceMaterial;
                    return;
                }

                // Личная копия материала — иначе все фишки одного цвета делили бы один и тот же ассет
                // из палитры, и смена renderQueue на одной стопке во время драга задела бы заодно все
                // остальные стопки того же цвета. Имя явно переименовываем — new Material(...), в отличие
                // от геттера Renderer.material, сам по себе суффикс "(Instance)" не добавляет, так что
                // в инспекторе копия иначе выглядела бы неотличимо от общего ассета из палитры.
                var instance = ($t = new UnityEngine.Material.$ctor1(sourceMaterial), $t.name = (sourceMaterial.name || "") + " (Piece Instance)", $t);
                this.meshRenderer.material = instance;
            },
            /*HexPieceView.SetColor end.*/

            /*HexPieceView.SetAlwaysOnTop start.*/
            SetAlwaysOnTop: function (alwaysOnTop) {
if ( TRACE ) { TRACE( "HexPieceView#SetAlwaysOnTop", this ); }

                // Нет личной копии материала — либо переключать нечего, либо (что хуже) мы бы задели
                // общий ассет из палитры, попытавшись отредактировать его напрямую.
                if (!this.needsAlwaysOnTopMaterial) {
                    return;
                }

                if (UnityEngine.Component.op_Equality(this.meshRenderer, null)) {
                    this.meshRenderer = this.GetComponent(UnityEngine.MeshRenderer);
                }

                var material = this.meshRenderer.material;
                material.renderQueue = alwaysOnTop ? HexPieceView.AlwaysOnTopRenderQueue : HexPieceView.NormalRenderQueue;
                material.SetInt(HexPieceView.ZTestPropertyId, alwaysOnTop ? UnityEngine.Rendering.CompareFunction.Always : UnityEngine.Rendering.CompareFunction.LessEqual);
            },
            /*HexPieceView.SetAlwaysOnTop end.*/

            /*HexPieceView.SetGlow start.*/
            SetGlow: function (multiplier) {
if ( TRACE ) { TRACE( "HexPieceView#SetGlow", this ); }

                if (UnityEngine.Component.op_Equality(this.meshRenderer, null)) {
                    this.meshRenderer = this.GetComponent(UnityEngine.MeshRenderer);
                }
                if (this.propertyBlock == null) {
                    this.propertyBlock = new UnityEngine.MaterialPropertyBlock();
                }

                this.meshRenderer.GetPropertyBlock(this.propertyBlock);
                this.propertyBlock.SetColor(HexPieceView.ColorPropertyId, new pc.Color( this.baseColor.r * multiplier, this.baseColor.g * multiplier, this.baseColor.b * multiplier, this.baseColor.a * multiplier ));
                this.meshRenderer.SetPropertyBlock(this.propertyBlock);
            },
            /*HexPieceView.SetGlow end.*/


        }
    });
    /*HexPieceView end.*/

    /*HexStack start.*/
    Bridge.define("HexStack", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            piecePrefab: null,
            palette: null,
            perPieceOffset: null,
            initialColors: null,
            pieces: null,
            hitCollider: null,
            piecesNeedAlwaysOnTopMaterial: false,
            CurrentCell: null,
            InReaction: false
        },
        props: {
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#Count#get", this ); }

                    return this.pieces.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#IsEmpty#get", this ); }

                    return this.pieces.Count === 0;
                }
            },
            TopColor: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#TopColor#get", this ); }

                    return this.pieces.getItem(this.GetTopPieceIndex()).Color;
                }
            },
            IsMonochrome: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#IsMonochrome#get", this ); }

                    if (this.pieces.Count === 0) {
                        return false;
                    }
                    var color = this.pieces.getItem(0).Color;
                    for (var i = 1; i < this.pieces.Count; i = (i + 1) | 0) {
                        if (this.pieces.getItem(i).Color !== color) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexStack#init", this ); }

                this.perPieceOffset = new UnityEngine.Vector3();
                this.perPieceOffset = new pc.Vec3( -0.05, 0.0, 0.0 );
                this.initialColors = new (System.Collections.Generic.List$1(HexColor)).ctor();
                this.pieces = new (System.Collections.Generic.List$1(HexPieceView)).ctor();
            }
        },
        methods: {
            /*HexStack.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexStack#Awake", this ); }

                this.hitCollider = this.GetComponent(UnityEngine.BoxCollider);

                if (this.pieces.Count === 0 && this.initialColors.Count > 0 && UnityEngine.MonoBehaviour.op_Inequality(this.piecePrefab, null) && this.palette != null) {
                    this.piecesNeedAlwaysOnTopMaterial = true;
                    this.BuildFromColors(this.initialColors);
                }
            },
            /*HexStack.Awake end.*/

            /*HexStack.Initialize start.*/
            Initialize: function (colors, prefab, colorPalette, needsAlwaysOnTopMaterial) {
if ( TRACE ) { TRACE( "HexStack#Initialize", this ); }

                if (needsAlwaysOnTopMaterial === void 0) { needsAlwaysOnTopMaterial = false; }
                this.piecePrefab = prefab;
                this.palette = colorPalette;
                this.piecesNeedAlwaysOnTopMaterial = needsAlwaysOnTopMaterial;

                for (var i = 0; i < this.pieces.Count; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.pieces.getItem(i), null)) {
                        UnityEngine.MonoBehaviour.Destroy(this.pieces.getItem(i).gameObject);
                    }
                }
                this.pieces.clear();

                this.BuildFromColors(colors);
            },
            /*HexStack.Initialize end.*/

            /*HexStack.BuildFromColors start.*/
            BuildFromColors: function (colors) {
if ( TRACE ) { TRACE( "HexStack#BuildFromColors", this ); }

                for (var i = 0; i < System.Array.getCount(colors, HexColor); i = (i + 1) | 0) {
                    this.SpawnPieceAtTop(System.Array.getItem(colors, i, HexColor));
                }
            },
            /*HexStack.BuildFromColors end.*/

            /*HexStack.SpawnPieceAtTop start.*/
            SpawnPieceAtTop: function (color) {
if ( TRACE ) { TRACE( "HexStack#SpawnPieceAtTop", this ); }

                var piece = UnityEngine.Object.Instantiate(HexPieceView, this.piecePrefab, this.transform);
                piece.transform.localPosition = this.GetLocalPositionForIndex(this.pieces.Count);
                piece.transform.localRotation = pc.Quat.IDENTITY.clone();
                piece.SetNeedsAlwaysOnTopMaterial(this.piecesNeedAlwaysOnTopMaterial);
                piece.SetColor(color, this.palette);
                this.pieces.add(piece);
                this.UpdateHitCollider();
            },
            /*HexStack.SpawnPieceAtTop end.*/

            /*HexStack.GetLocalPositionForIndex start.*/
            GetLocalPositionForIndex: function (index) {
if ( TRACE ) { TRACE( "HexStack#GetLocalPositionForIndex", this ); }

                return this.perPieceOffset.$clone().clone().scale( (((index + 1) | 0)) );
            },
            /*HexStack.GetLocalPositionForIndex end.*/

            /*HexStack.GetNextSlotWorldPosition start.*/
            GetNextSlotWorldPosition: function (reserved) {
if ( TRACE ) { TRACE( "HexStack#GetNextSlotWorldPosition", this ); }

                if (reserved === void 0) { reserved = 0; }
                return this.transform.TransformPoint$1(this.GetLocalPositionForIndex(((this.pieces.Count + reserved) | 0)));
            },
            /*HexStack.GetNextSlotWorldPosition end.*/

            /*HexStack.GetTopWorldPosition start.*/
            GetTopWorldPosition: function () {
if ( TRACE ) { TRACE( "HexStack#GetTopWorldPosition", this ); }

                return this.pieces.Count === 0 ? this.transform.position.$clone() : this.pieces.getItem(this.GetTopPieceIndex()).transform.position.$clone();
            },
            /*HexStack.GetTopWorldPosition end.*/

            /*HexStack.GetTopPieceIndex start.*/
            GetTopPieceIndex: function () {
if ( TRACE ) { TRACE( "HexStack#GetTopPieceIndex", this ); }

                if (this.pieces.Count === 0) {
                    return 0;
                }

                var worldStep = this.transform.rotation.transformVector( this.perPieceOffset );
                var flatThreshold = 0.001;
                if (worldStep.y < -0.001) {
                    return 0;
                }
                return ((this.pieces.Count - 1) | 0);
            },
            /*HexStack.GetTopPieceIndex end.*/

            /*HexStack.SetAlwaysOnTop start.*/
            SetAlwaysOnTop: function (alwaysOnTop) {
if ( TRACE ) { TRACE( "HexStack#SetAlwaysOnTop", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t.moveNext()) {
                        var piece = $t.Current;
                        piece.SetAlwaysOnTop(alwaysOnTop);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexStack.SetAlwaysOnTop end.*/

            /*HexStack.SetGlow start.*/
            SetGlow: function (multiplier) {
if ( TRACE ) { TRACE( "HexStack#SetGlow", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t.moveNext()) {
                        var piece = $t.Current;
                        piece.SetGlow(multiplier);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexStack.SetGlow end.*/

            /*HexStack.SetLayer start.*/
            SetLayer: function (layer) {
if ( TRACE ) { TRACE( "HexStack#SetLayer", this ); }

                var $t;
                this.gameObject.layer = layer;
                $t = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t.moveNext()) {
                        var piece = $t.Current;
                        piece.gameObject.layer = layer;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexStack.SetLayer end.*/

            /*HexStack.PopTopPiece start.*/
            PopTopPiece: function () {
if ( TRACE ) { TRACE( "HexStack#PopTopPiece", this ); }

                if (this.pieces.Count === 0) {
                    return null;
                }
                var topIndex = this.GetTopPieceIndex();
                var piece = this.pieces.getItem(topIndex);
                this.pieces.removeAt(topIndex);
                this.UpdateHitCollider();
                return piece;
            },
            /*HexStack.PopTopPiece end.*/

            /*HexStack.AppendPiece start.*/
            AppendPiece: function (piece) {
if ( TRACE ) { TRACE( "HexStack#AppendPiece", this ); }

                piece.transform.SetParent(this.transform, true);
                piece.transform.localPosition = this.GetLocalPositionForIndex(this.pieces.Count);
                piece.transform.localRotation = pc.Quat.IDENTITY.clone();
                this.pieces.add(piece);
                this.UpdateHitCollider();
            },
            /*HexStack.AppendPiece end.*/

            /*HexStack.UpdateHitCollider start.*/
            UpdateHitCollider: function () {
if ( TRACE ) { TRACE( "HexStack#UpdateHitCollider", this ); }

                var $t, $t1, $t2;
                if (UnityEngine.Component.op_Equality(this.hitCollider, null)) {
                    return;
                }

                if (this.pieces.Count === 0) {
                    this.hitCollider.size = pc.Vec3.ZERO.clone();
                    return;
                }

                var min = new pc.Vec3( Infinity, Infinity, Infinity );
                var max = new pc.Vec3( -Infinity, -Infinity, -Infinity );

                $t = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t.moveNext()) {
                        var piece = $t.Current;
                        var halfExtent = piece.transform.localScale.$clone().clone().scale( 0.5 );
                        var pos = piece.transform.localPosition.$clone();
                        min = ($t1 = pos.$clone().sub( halfExtent ), new pc.Vec3( Math.min( min.x, $t1.x ), Math.min( min.y, $t1.y ), Math.min( min.z, $t1.z) ));
                        max = ($t2 = pos.$clone().add( halfExtent ), new pc.Vec3( Math.max( max.x, $t2.x ), Math.max( max.y, $t2.y ), Math.max( max.z, $t2.z ) ));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.hitCollider.center = (min.$clone().add( max )).clone().scale( 0.5 );
                this.hitCollider.size = max.$clone().sub( min );
            },
            /*HexStack.UpdateHitCollider end.*/


        }
    });
    /*HexStack end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PackshotController start.*/
    Bridge.define("PackshotController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            panelRoot: null,
            playNowButton: null,
            fullscreenTapButton: null,
            transitionAnimator: null,
            transitionTrigger: null,
            maskRect: null,
            maskTargetSize: 0,
            maskGrowDuration: 0,
            maskGrowCurve: null,
            headerRect: null,
            playButtonRect: null,
            revealPulseDuration: 0,
            revealPulseCurve: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PackshotController#init", this ); }

                this.transitionTrigger = "Show";
                this.maskTargetSize = 10000.0;
                this.maskGrowDuration = 0.5;
                this.maskGrowCurve = pc.AnimationCurve.createEaseInOut(0.0, 0.0, 1.0, 1.0);
                this.revealPulseDuration = 0.45;
                this.revealPulseCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.6, 1.15, 0, 0), new pc.Keyframe(1.0, 1.0, 0, 0) ]});
            }
        },
        methods: {
            /*PackshotController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PackshotController#Awake", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.playNowButton, null)) {
                    this.playNowButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.GoToStore));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.fullscreenTapButton, null)) {
                    this.fullscreenTapButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.GoToStore));
                }
            },
            /*PackshotController.Awake end.*/

            /*PackshotController.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "PackshotController#Show", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(true);
                }
                if (UnityEngine.Component.op_Inequality(this.transitionAnimator, null)) {
                    this.transitionAnimator.SetTrigger$1(this.transitionTrigger);
                }

                // Отключаем ВСЕ StackDragHandler в сцене (не только исходные три слота лотка, как это уже
                // частично делает GameFlowController.dragHandlers) — иначе перезаполненные TrayRefillManager-ом
                // стопки или уже стоящие на поле (их тоже можно таскать заново, см. StackDragHandler)
                // остались бы перетаскиваемыми поверх пэкшота.
                $t = Bridge.getEnumerator(UnityEngine.Object.FindObjectsOfType(StackDragHandler));
                try {
                    while ($t.moveNext()) {
                        var handler = $t.Current;
                        handler.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                Luna.Unity.LifeCycle.GameEnded();

                this.StartCoroutine$1(this.AnimateReveal());
            },
            /*PackshotController.Show end.*/

            /*PackshotController.AnimateReveal start.*/
            AnimateReveal: function () {
if ( TRACE ) { TRACE( "PackshotController#AnimateReveal", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Inequality(this.maskRect, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.GrowMask());
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if (UnityEngine.Component.op_Inequality(this.headerRect, null)) {
                                            this.StartCoroutine$1(this.PulseIn(this.headerRect));
                                        }
                                        if (UnityEngine.Component.op_Inequality(this.playButtonRect, null)) {
                                            this.StartCoroutine$1(this.PulseIn(this.playButtonRect));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PackshotController.AnimateReveal end.*/

            /*PackshotController.GrowMask start.*/
            GrowMask: function () {
if ( TRACE ) { TRACE( "PackshotController#GrowMask", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    n,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.maskRect.sizeDelta = pc.Vec2.ZERO.clone();

                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.maskGrowDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = this.maskGrowCurve.value(Math.max(0, Math.min(1, t / this.maskGrowDuration)));
                                        this.maskRect.sizeDelta = pc.Vec2.ONE.clone().scale( (this.maskTargetSize * n) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.maskRect.sizeDelta = pc.Vec2.ONE.clone().scale( this.maskTargetSize );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PackshotController.GrowMask end.*/

            /*PackshotController.PulseIn start.*/
            PulseIn: function (rect) {
if ( TRACE ) { TRACE( "PackshotController#PulseIn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    n,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rect.localScale = pc.Vec3.ZERO.clone();

                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.revealPulseDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = this.revealPulseCurve.value(Math.max(0, Math.min(1, t / this.revealPulseDuration)));
                                        rect.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( n );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rect.localScale = new pc.Vec3( 1, 1, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PackshotController.PulseIn end.*/

            /*PackshotController.GoToStore start.*/
            GoToStore: function () {
if ( TRACE ) { TRACE( "PackshotController#GoToStore", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*PackshotController.GoToStore end.*/


        }
    });
    /*PackshotController end.*/

    /*ScreenScaler start.*/
    Bridge.define("ScreenScaler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mainCamera: null
        },
        methods: {
            /*ScreenScaler.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ScreenScaler#Start", this ); }

                this.mainCamera = UnityEngine.Camera.main;
                this.Resize();
            },
            /*ScreenScaler.Start end.*/

            /*ScreenScaler.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "ScreenScaler#LateUpdate", this ); }

                // В редакторе обновляем постоянно, в игре — только если изменилось разрешение
                if (this.transform.hasChanged) {
                    this.Resize();
                    this.transform.hasChanged = false;
                }
            },
            /*ScreenScaler.LateUpdate end.*/

            /*ScreenScaler.Resize start.*/
            Resize: function () {
if ( TRACE ) { TRACE( "ScreenScaler#Resize", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    this.mainCamera = UnityEngine.Camera.main;
                }
                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    return;
                }

                var height = 0.0;
                var width = 0.0;

                if (this.mainCamera.orthographic) {
                    // Расчет для ортографической камеры
                    height = this.mainCamera.orthographicSize * 2.0;
                    width = height * this.mainCamera.aspect;
                } else {
                    // Расчет для перспективной камеры
                    // Находим чистую дистанцию по прямой оси от камеры до плоскости
                    var distance = this.transform.position.$clone().sub( this.mainCamera.transform.position ).dot( this.mainCamera.transform.forward );

                    if (distance <= 0) {
                        return;
                    } // Защита, если объект оказался сзади камеры

                    height = 2.0 * distance * Math.tan(this.mainCamera.fieldOfView * 0.5 * UnityEngine.Mathf.Deg2Rad);
                    width = height * this.mainCamera.aspect;
                }

                // ВАЖНО: Стандартный Plane в Unity лежит горизонтально (по осям X и Z).
                // Чтобы он смотрел на камеру как экран, его Scale нужно крутить по X и Z, а не по Y.
                this.transform.localScale = new pc.Vec3( width / 10.0, 1.0, height / 10.0 );
            },
            /*ScreenScaler.Resize end.*/


        }
    });
    /*ScreenScaler end.*/

    /*StackDragHandler start.*/
    Bridge.define("StackDragHandler", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnAnyStackGrabbed: null,
                OnAnyStackMoved: null,
                OnAnyStackReleased: null
            }
        },
        fields: {
            board: null,
            dragHeight: 0,
            minDragDistanceToCountAsMoved: 0,
            returnDuration: 0,
            cam: null,
            stack: null,
            ownCollider: null,
            originalPosition: null,
            dragStartPosition: null,
            grabOffset: null,
            pointerWorldPoint: null,
            dragPlane: null,
            dragging: false,
            hasMoved: false,
            highlightedCell: null
        },
        props: {
            IsInTray: {
                get: function () {
if ( TRACE ) { TRACE( "StackDragHandler#IsInTray#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(this.stack, null) && UnityEngine.MonoBehaviour.op_Equality(this.stack.CurrentCell, null);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "StackDragHandler#init", this ); }

                this.originalPosition = new UnityEngine.Vector3();
                this.dragStartPosition = new UnityEngine.Vector3();
                this.grabOffset = new UnityEngine.Vector3();
                this.pointerWorldPoint = new UnityEngine.Vector3();
                this.dragPlane = new UnityEngine.Plane();
                this.dragHeight = 0.3;
                this.minDragDistanceToCountAsMoved = 0.05;
                this.returnDuration = 0.2;
            }
        },
        methods: {
            /*StackDragHandler.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "StackDragHandler#Awake", this ); }

                this.stack = this.GetComponent(HexStack);
                this.ownCollider = this.GetComponent(UnityEngine.Collider);
                this.cam = UnityEngine.Camera.main;
                if (UnityEngine.MonoBehaviour.op_Equality(this.board, null)) {
                    this.board = UnityEngine.Object.FindObjectOfType(BoardManager);
                }
            },
            /*StackDragHandler.Awake end.*/

            /*StackDragHandler.SetBoard start.*/
            SetBoard: function (boardManager) {
if ( TRACE ) { TRACE( "StackDragHandler#SetBoard", this ); }

                this.board = boardManager;
            },
            /*StackDragHandler.SetBoard end.*/

            /*StackDragHandler.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "StackDragHandler#OnDisable", this ); }

                if (this.dragging) {
                    this.stack.SetAlwaysOnTop(false);
                }
                this.dragging = false;
                this.SetHighlightedCell(null);
            },
            /*StackDragHandler.OnDisable end.*/

            /*StackDragHandler.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "StackDragHandler#OnMouseDown", this ); }

                // Раньше здесь ещё была проверка board.IsChainRunning, полностью блокировавшая любой
                // драг, пока где-то на поле идёт цепная реакция — игрок не мог взять и переставить
                // ДРУГУЮ свою стопку, пока предыдущая ещё анимируется. Реакции идут независимо друг от
                // друга по разным ячейкам (см. BoardManager.ProcessChainReaction), так что блокировать
                // весь драг ради одной текущей реакции не нужно.
                if (UnityEngine.MonoBehaviour.op_Equality(this.board, null)) {
                    return;
                }

                // Стопка стоит на ячейке, с которой её нельзя забирать (BoardCell.IsClickable == false,
                // например — стартовая стопка поля) — драг вообще не начинаем.
                if (UnityEngine.MonoBehaviour.op_Inequality(this.stack.CurrentCell, null) && !this.stack.CurrentCell.IsClickable) {
                    return;
                }

                this.dragging = true;
                this.hasMoved = false;
                this.originalPosition = this.transform.position.$clone();
                this.dragStartPosition = this.transform.position.$clone();
                this.dragPlane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), this.transform.position);
                this.stack.SetAlwaysOnTop(true);

                // Смещение между точкой, где палец/курсор коснулся плоскости, и текущей позицией стопки —
                // сохраняем его на весь драг, чтобы стопка не прыгала центром под курсор, а двигалась
                // с той же самой относительной точки, за которую её взяли.
                var ray = this.cam.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var grabDistance = { };
                if (this.dragPlane.Raycast(ray, grabDistance)) {
                    this.pointerWorldPoint = ray.GetPoint(grabDistance.v);
                    this.grabOffset = this.transform.position.$clone().sub( this.pointerWorldPoint );
                } else {
                    this.pointerWorldPoint = this.transform.position.$clone();
                    this.grabOffset = pc.Vec3.ZERO.clone();
                }

                !Bridge.staticEquals(StackDragHandler.OnAnyStackGrabbed, null) ? StackDragHandler.OnAnyStackGrabbed() : null;
            },
            /*StackDragHandler.OnMouseDown end.*/

            /*StackDragHandler.OnMouseDrag start.*/
            OnMouseDrag: function () {
if ( TRACE ) { TRACE( "StackDragHandler#OnMouseDrag", this ); }

                if (!this.dragging) {
                    return;
                }

                var ray = this.cam.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var distance = { };
                if (!this.dragPlane.Raycast(ray, distance)) {
                    return;
                }

                this.pointerWorldPoint = ray.GetPoint(distance.v);

                var point = this.pointerWorldPoint.$clone().add( this.grabOffset );
                point.y = this.originalPosition.y + this.dragHeight;
                this.transform.position = point.$clone();

                if (!this.hasMoved && pc.Vec3.distance( point, this.dragStartPosition ) > this.minDragDistanceToCountAsMoved) {
                    this.hasMoved = true;
                    !Bridge.staticEquals(StackDragHandler.OnAnyStackMoved, null) ? StackDragHandler.OnAnyStackMoved() : null;
                }

                this.UpdateHighlightedCell();
            },
            /*StackDragHandler.OnMouseDrag end.*/

            /*StackDragHandler.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "StackDragHandler#OnMouseUp", this ); }

                if (!this.dragging) {
                    return;
                }
                this.dragging = false;
                this.SetHighlightedCell(null);

                // Выключаем "поверх всего" ДО того, как стопка встанет на финальную позицию (см.
                // PlaceStack/ReturnToOrigin ниже) — иначе, пока она уже опустилась на место, но ещё
                // рисуется поверх всего, могла бы на мгновение "просвечивать" сквозь соседей.
                this.stack.SetAlwaysOnTop(false);

                var cell = this.RaycastCellUnderPointer();
                if (UnityEngine.MonoBehaviour.op_Inequality(cell, null) && cell.IsEmpty) {
                    // Если стопка уже стояла на другой ячейке (игрок переставляет её, а не ставит
                    // впервые из лотка) — освобождаем прежнюю ячейку, иначе она навсегда останется
                    // занятой ссылкой на стопку, которая физически уже переехала.
                    var previousCell = this.stack.CurrentCell;
                    if (UnityEngine.MonoBehaviour.op_Inequality(previousCell, null) && UnityEngine.MonoBehaviour.op_Inequality(previousCell, cell)) {
                        previousCell.CurrentStack = null;
                    }

                    this.board.PlaceStack(this.stack, cell);
                    !Bridge.staticEquals(StackDragHandler.OnAnyStackReleased, null) ? StackDragHandler.OnAnyStackReleased(true) : null;
                    return;
                }

                this.StartCoroutine$1(this.ReturnToOrigin());
                !Bridge.staticEquals(StackDragHandler.OnAnyStackReleased, null) ? StackDragHandler.OnAnyStackReleased(false) : null;
            },
            /*StackDragHandler.OnMouseUp end.*/

            /*StackDragHandler.UpdateHighlightedCell start.*/
            UpdateHighlightedCell: function () {
if ( TRACE ) { TRACE( "StackDragHandler#UpdateHighlightedCell", this ); }

                var cell = this.RaycastCellUnderPointer();
                this.SetHighlightedCell(UnityEngine.MonoBehaviour.op_Inequality(cell, null) && cell.IsEmpty ? cell : null);
            },
            /*StackDragHandler.UpdateHighlightedCell end.*/

            /*StackDragHandler.SetHighlightedCell start.*/
            SetHighlightedCell: function (cell) {
if ( TRACE ) { TRACE( "StackDragHandler#SetHighlightedCell", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.highlightedCell, cell)) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.highlightedCell, null)) {
                    this.highlightedCell.SetHighlighted(false);
                }
                this.highlightedCell = cell;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.highlightedCell, null)) {
                    this.highlightedCell.SetHighlighted(true);
                }
            },
            /*StackDragHandler.SetHighlightedCell end.*/

            /*StackDragHandler.RaycastCellUnderPointer start.*/
            RaycastCellUnderPointer: function () {
if ( TRACE ) { TRACE( "StackDragHandler#RaycastCellUnderPointer", this ); }

                var $t;
                var ray = this.cam.ScreenPointToRay(UnityEngine.Input.mousePosition);

                var wasEnabled = this.ownCollider.enabled;
                this.ownCollider.enabled = false;
                var hits = UnityEngine.Physics.RaycastAll$1(ray);
                this.ownCollider.enabled = wasEnabled;

                System.Array.sort(hits, function (a, b) {
                        return Bridge.compare(a.distance, b.distance);
                    });

                $t = Bridge.getEnumerator(hits);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current.$clone();
                        var cell = hit.collider.GetComponentInParent(BoardCell);
                        if (UnityEngine.MonoBehaviour.op_Inequality(cell, null)) {
                            return cell;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*StackDragHandler.RaycastCellUnderPointer end.*/

            /*StackDragHandler.ReturnToOrigin start.*/
            ReturnToOrigin: function () {
if ( TRACE ) { TRACE( "StackDragHandler#ReturnToOrigin", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    from,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    from = this.transform.position.$clone();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.returnDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.transform.position = new pc.Vec3().lerp( from, this.originalPosition, t / this.returnDuration );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = this.originalPosition.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*StackDragHandler.ReturnToOrigin end.*/


        }
    });
    /*StackDragHandler end.*/

    /*TimerSliderUI start.*/
    Bridge.define("TimerSliderUI", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                BlurSizePropertyId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#init", this ); }

                    this.BlurSizePropertyId = UnityEngine.Shader.PropertyToID("_Size");
                }
            }
        },
        fields: {
            timer: null,
            barRect: null,
            maxRightOffset: 0,
            barImageOutline: null,
            barImage: null,
            startColor: null,
            midColor: null,
            endColor: null,
            clockIcon: null,
            pulseScaleMultiplier: 0,
            pulseFrequency: 0,
            pulseSharpness: 0,
            clockOutlineImage: null,
            loaderBackgroundImage: null,
            pulseColor: null,
            alarmShakeStartOffset: 0,
            alarmShakeDuration: 0,
            alarmShakeAmplitudeDegrees: 0,
            alarmShakeFrequency: 0,
            alarmShakePositionAmplitude: 0,
            popupRoot: null,
            popupContent: null,
            popupAnimDuration: 0,
            popupScaleCurve: null,
            popupStartAngleZ: 0,
            popupBackgroundImage: null,
            popupBackgroundStartColor: null,
            popupBackgroundEndColor: null,
            clockBaseScale: null,
            clockBasePosition: null,
            clockOutlineBaseColor: null,
            loaderBackgroundBaseColor: null,
            popupBaseScale: null,
            pulseActive: false,
            alarmTriggered: false
        },
        events: {
            OnFailPopupShown: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#init", this ); }

                this.startColor = new UnityEngine.Color();
                this.midColor = new UnityEngine.Color();
                this.endColor = new UnityEngine.Color();
                this.pulseColor = new UnityEngine.Color();
                this.popupBackgroundStartColor = new UnityEngine.Color();
                this.popupBackgroundEndColor = new UnityEngine.Color();
                this.clockBaseScale = new UnityEngine.Vector3();
                this.clockBasePosition = new UnityEngine.Vector3();
                this.clockOutlineBaseColor = new UnityEngine.Color();
                this.loaderBackgroundBaseColor = new UnityEngine.Color();
                this.popupBaseScale = new UnityEngine.Vector3();
                this.maxRightOffset = 722.0;
                this.startColor = new pc.Color( 0.2, 1.0, 0.2, 1 );
                this.midColor = new pc.Color( 1, 1, 0, 1 );
                this.endColor = new pc.Color( 1, 0, 0, 1 );
                this.pulseScaleMultiplier = 1.15;
                this.pulseFrequency = 0.4;
                this.pulseSharpness = 3.9;
                this.pulseColor = new pc.Color( 1, 0, 0, 1 );
                this.alarmShakeStartOffset = 0.0;
                this.alarmShakeDuration = 1.0;
                this.alarmShakeAmplitudeDegrees = 15.0;
                this.alarmShakeFrequency = 25.0;
                this.alarmShakePositionAmplitude = 8.0;
                this.popupAnimDuration = 0.35;
                this.popupScaleCurve = pc.AnimationCurve.createEaseInOut(0.0, 0.0, 1.0, 1.0);
                this.popupStartAngleZ = 90.0;
                this.popupBackgroundStartColor = new pc.Color( 1, 1, 1, 1 );
                this.popupBackgroundEndColor = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(113, 113, 113, 255));
                this.clockBaseScale = new pc.Vec3( 1, 1, 1 );
                this.clockBasePosition = pc.Vec3.ZERO.clone();
                this.clockOutlineBaseColor = new pc.Color( 1, 1, 1, 1 );
                this.loaderBackgroundBaseColor = new pc.Color( 1, 1, 1, 1 );
                this.popupBaseScale = new pc.Vec3( 1, 1, 1 );
            }
        },
        methods: {
            /*TimerSliderUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#Awake", this ); }

                if (UnityEngine.Component.op_Inequality(this.clockIcon, null)) {
                    this.clockBaseScale = this.clockIcon.localScale.$clone();
                    this.clockBasePosition = this.clockIcon.localPosition.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.clockOutlineImage, null)) {
                    this.clockOutlineBaseColor = this.clockOutlineImage.color.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.loaderBackgroundImage, null)) {
                    this.loaderBackgroundBaseColor = this.loaderBackgroundImage.color.$clone();
                }

                var popupTransform = UnityEngine.Component.op_Inequality(this.popupContent, null) ? this.popupContent : UnityEngine.GameObject.op_Inequality(this.popupRoot, null) ? this.popupRoot.transform : null;
                if (UnityEngine.Component.op_Inequality(popupTransform, null)) {
                    this.popupBaseScale = popupTransform.localScale.$clone();
                }
                if (UnityEngine.GameObject.op_Inequality(this.popupRoot, null)) {
                    this.popupRoot.SetActive(false);
                }
            },
            /*TimerSliderUI.Awake end.*/

            /*TimerSliderUI.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.timer, null)) {
                    return;
                }
                this.timer.addOnWarningZoneEntered(Bridge.fn.cacheBind(this, this.HandleWarningZoneEntered));
                this.timer.addOnTimerStopped(Bridge.fn.cacheBind(this, this.HandleTimerStopped));
            },
            /*TimerSliderUI.OnEnable end.*/

            /*TimerSliderUI.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.timer, null)) {
                    return;
                }
                this.timer.removeOnWarningZoneEntered(Bridge.fn.cacheBind(this, this.HandleWarningZoneEntered));
                this.timer.removeOnTimerStopped(Bridge.fn.cacheBind(this, this.HandleTimerStopped));
            },
            /*TimerSliderUI.OnDisable end.*/

            /*TimerSliderUI.HandleWarningZoneEntered start.*/
            HandleWarningZoneEntered: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#HandleWarningZoneEntered", this ); }

                this.pulseActive = true;
            },
            /*TimerSliderUI.HandleWarningZoneEntered end.*/

            /*TimerSliderUI.HandleTimerStopped start.*/
            HandleTimerStopped: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#HandleTimerStopped", this ); }

                this.pulseActive = false;
                if (UnityEngine.Component.op_Inequality(this.clockIcon, null)) {
                    this.clockIcon.localScale = this.clockBaseScale.$clone();
                    this.clockIcon.localPosition = this.clockBasePosition.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.clockOutlineImage, null)) {
                    this.clockOutlineImage.color = this.clockOutlineBaseColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.loaderBackgroundImage, null)) {
                    this.loaderBackgroundImage.color = this.loaderBackgroundBaseColor.$clone();
                }
            },
            /*TimerSliderUI.HandleTimerStopped end.*/

            /*TimerSliderUI.PlayAlarmThenShowPopup start.*/
            PlayAlarmThenShowPopup: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#PlayAlarmThenShowPopup", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    shakeAngle,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.alarmShakeDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        if (UnityEngine.Component.op_Inequality(this.clockIcon, null)) {
                                            // Вращение по Z (как и раньше) + дрожание позиции — случайный джиттер, а не ещё
                                            // одна синусоида, чтобы это читалось как вибрация, а не как второе покачивание.
                                            shakeAngle = Math.sin(t * this.alarmShakeFrequency) * this.alarmShakeAmplitudeDegrees;
                                            this.clockIcon.localEulerAngles = new pc.Vec3( 0.0, 0.0, shakeAngle );
                                            this.clockIcon.localPosition = this.clockBasePosition.$clone().add( UnityEngine.Vector3.FromVector2((UnityEngine.Random.insideUnitCircle.$clone().scale( this.alarmShakePositionAmplitude ))) );
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.Component.op_Inequality(this.clockIcon, null)) {
                                            this.clockIcon.localEulerAngles = pc.Vec3.ZERO.clone();
                                            this.clockIcon.localPosition = this.clockBasePosition.$clone();
                                        }

                                        $enumerator.current = this.ShowPopup();
                                        $step = 5;
                                        return true;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TimerSliderUI.PlayAlarmThenShowPopup end.*/

            /*TimerSliderUI.ShowPopup start.*/
            ShowPopup: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#ShowPopup", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    popupTransform,
                    t,
                    n,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.GameObject.op_Equality(this.popupRoot, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.popupRoot.SetActive(true);
                                        popupTransform = UnityEngine.Component.op_Inequality(this.popupContent, null) ? this.popupContent : this.popupRoot.transform;
                                        popupTransform.localScale = pc.Vec3.ZERO.clone();
                                        popupTransform.localEulerAngles = new pc.Vec3( 0.0, 0.0, this.popupStartAngleZ );

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.popupBackgroundImage, null)) {
                                            this.popupBackgroundImage.color = this.popupBackgroundStartColor.$clone();
                                        }

                                        t = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < this.popupAnimDuration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = this.popupScaleCurve.value(Math.max(0, Math.min(1, t / this.popupAnimDuration)));
                                        popupTransform.localScale = this.popupBaseScale.$clone().clone().scale( n );
                                        popupTransform.localEulerAngles = new pc.Vec3( 0.0, 0.0, UnityEngine.Mathf.LerpUnclamped(this.popupStartAngleZ, 0.0, n) );

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.popupBackgroundImage, null)) {
                                            this.popupBackgroundImage.color = pc.Color.lerp( this.popupBackgroundStartColor, this.popupBackgroundEndColor, n );
                                        }

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    popupTransform.localScale = this.popupBaseScale.$clone();
                                        popupTransform.localEulerAngles = pc.Vec3.ZERO.clone();
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.popupBackgroundImage, null)) {
                                            this.popupBackgroundImage.color = this.popupBackgroundEndColor.$clone();
                                        }

                                        !Bridge.staticEquals(this.OnFailPopupShown, null) ? this.OnFailPopupShown() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TimerSliderUI.ShowPopup end.*/

            /*TimerSliderUI.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "TimerSliderUI#LateUpdate", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.timer, null)) {
                    return;
                }

                var n = this.timer.Progress01;

                // Будильник — не по событию OnTimerExpired (строго в конце), а по оставшемуся времени:
                // так его можно запустить на alarmShakeStartOffset секунд раньше фактического конца.
                if (!this.alarmTriggered && this.timer.RemainingSeconds <= this.alarmShakeStartOffset) {
                    this.alarmTriggered = true;
                    this.StartCoroutine$1(this.PlayAlarmThenShowPopup());
                }

                if (UnityEngine.Component.op_Inequality(this.barRect, null)) {
                    var offsetMax = this.barRect.offsetMax.$clone();
                    offsetMax.x = -pc.math.lerp(0.0, this.maxRightOffset, n);
                    this.barRect.offsetMax = offsetMax.$clone();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.barImage, null)) {
                    this.barImage.color = n < 0.5 ? pc.Color.lerp( this.startColor, this.midColor, n / 0.5 ) : pc.Color.lerp( this.midColor, this.endColor, (n - 0.5) / 0.5 );

                    this.barImageOutline.color = n < 0.5 ? pc.Color.lerp( this.startColor, this.midColor, n / 0.5 ) : pc.Color.lerp( this.midColor, this.endColor, (n - 0.5) / 0.5 );
                }

                if (this.pulseActive) {
                    // Обычная синусоида (0..1) возводится в степень pulseSharpness — это "поджимает" её
                    // к нулю на большей части периода и оставляет короткий острый всплеск к 1, как удар
                    // сердца, а не плавное дыхание туда-сюда. Один и тот же beat одновременно двигает
                    // масштаб часов и цвет обеих картинок — они бьются в такт друг с другом.
                    var raw01 = 0.5 + 0.5 * Math.sin(UnityEngine.Time.time * this.pulseFrequency * UnityEngine.Mathf.PI * 2.0);
                    var beat = Math.pow(raw01, this.pulseSharpness);

                    if (UnityEngine.Component.op_Inequality(this.clockIcon, null)) {
                        this.clockIcon.localScale = this.clockBaseScale.$clone().clone().scale( (1.0 + (this.pulseScaleMultiplier - 1.0) * beat) );
                    }

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.clockOutlineImage, null)) {
                        this.clockOutlineImage.color = pc.Color.lerp( this.clockOutlineBaseColor, this.pulseColor, beat );
                    }

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.loaderBackgroundImage, null)) {
                        this.loaderBackgroundImage.color = pc.Color.lerp( this.loaderBackgroundBaseColor, this.pulseColor, beat );
                    }
                }
            },
            /*TimerSliderUI.LateUpdate end.*/


        }
    });
    /*TimerSliderUI end.*/

    /*TimerWarningEffects start.*/
    Bridge.define("TimerWarningEffects", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ColorAId: 0,
                ColorBId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#init", this ); }

                    this.ColorAId = UnityEngine.Shader.PropertyToID("_ColorA");
                    this.ColorBId = UnityEngine.Shader.PropertyToID("_ColorB");
                }
            }
        },
        fields: {
            timer: null,
            outlineGraphic: null,
            warningOutlineColor: null,
            blinkSpeed: 0,
            clockHandVisual: null,
            growScale: 0,
            shakeAmplitudeDegrees: 0,
            shakeSpeed: 0,
            loaderGradientImages: null,
            warningColorA: null,
            warningColorB: null,
            originalOutlineColor: null,
            originalHandScale: null,
            loaderMaterials: null,
            originalColorA: null,
            originalColorB: null,
            warningActive: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#init", this ); }

                this.warningOutlineColor = new UnityEngine.Color();
                this.warningColorA = new UnityEngine.Color();
                this.warningColorB = new UnityEngine.Color();
                this.originalOutlineColor = new UnityEngine.Color();
                this.originalHandScale = new UnityEngine.Vector3();
                this.warningOutlineColor = new pc.Color( 0.2, 0.55, 1.0, 1.0 );
                this.blinkSpeed = 4.0;
                this.growScale = 1.2;
                this.shakeAmplitudeDegrees = 6.0;
                this.shakeSpeed = 25.0;
                this.warningColorA = new pc.Color( 0.15, 0.35, 1.0, 1.0 );
                this.warningColorB = new pc.Color( 0.02, 0.08, 0.4, 1.0 );
                this.originalHandScale = new pc.Vec3( 1, 1, 1 );
            }
        },
        methods: {
            /*TimerWarningEffects.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.outlineGraphic, null)) {
                    this.originalOutlineColor = this.outlineGraphic.color.$clone();
                }

                if (UnityEngine.Component.op_Inequality(this.clockHandVisual, null)) {
                    this.originalHandScale = this.clockHandVisual.localScale.$clone();
                }

                if (this.loaderGradientImages != null && this.loaderGradientImages.length > 0) {
                    this.loaderMaterials = System.Array.init(this.loaderGradientImages.length, null, UnityEngine.Material);
                    this.originalColorA = System.Array.init(this.loaderGradientImages.length, function (){
                        return new UnityEngine.Color();
                    }, UnityEngine.Color);
                    this.originalColorB = System.Array.init(this.loaderGradientImages.length, function (){
                        return new UnityEngine.Color();
                    }, UnityEngine.Color);

                    for (var i = 0; i < this.loaderGradientImages.length; i = (i + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.loaderGradientImages[i], null)) {
                            continue;
                        }

                        // .material создаёт индивидуальный инстанс материала для этого Image,
                        // чтобы не перекрасить общий ассет для всех остальных пользователей шейдера.
                        this.loaderMaterials[i] = this.loaderGradientImages[i].material;
                        this.originalColorA[i] = this.loaderMaterials[i].GetColor(TimerWarningEffects.ColorAId);
                        this.originalColorB[i] = this.loaderMaterials[i].GetColor(TimerWarningEffects.ColorBId);
                    }
                }
            },
            /*TimerWarningEffects.Awake end.*/

            /*TimerWarningEffects.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.timer, null)) {
                    return;
                }
                this.timer.addOnWarningZoneEntered(Bridge.fn.cacheBind(this, this.HandleWarningZoneEntered));
                this.timer.addOnTimerStopped(Bridge.fn.cacheBind(this, this.HandleTimerStopped));
            },
            /*TimerWarningEffects.OnEnable end.*/

            /*TimerWarningEffects.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.timer, null)) {
                    return;
                }
                this.timer.removeOnWarningZoneEntered(Bridge.fn.cacheBind(this, this.HandleWarningZoneEntered));
                this.timer.removeOnTimerStopped(Bridge.fn.cacheBind(this, this.HandleTimerStopped));
            },
            /*TimerWarningEffects.OnDisable end.*/

            /*TimerWarningEffects.HandleWarningZoneEntered start.*/
            HandleWarningZoneEntered: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#HandleWarningZoneEntered", this ); }

                this.warningActive = true;
            },
            /*TimerWarningEffects.HandleWarningZoneEntered end.*/

            /*TimerWarningEffects.HandleTimerStopped start.*/
            HandleTimerStopped: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#HandleTimerStopped", this ); }

                this.warningActive = false;
                this.ResetVisuals();
            },
            /*TimerWarningEffects.HandleTimerStopped end.*/

            /*TimerWarningEffects.ResetVisuals start.*/
            ResetVisuals: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#ResetVisuals", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.outlineGraphic, null)) {
                    this.outlineGraphic.color = this.originalOutlineColor.$clone();
                }
                if (UnityEngine.Component.op_Inequality(this.clockHandVisual, null)) {
                    this.clockHandVisual.localScale = this.originalHandScale.$clone();
                    this.clockHandVisual.localEulerAngles = pc.Vec3.ZERO.clone();
                }

                if (this.loaderMaterials == null) {
                    return;
                }
                for (var i = 0; i < this.loaderMaterials.length; i = (i + 1) | 0) {
                    if (this.loaderMaterials[i] == null) {
                        continue;
                    }
                    this.loaderMaterials[i].SetColor(TimerWarningEffects.ColorAId, this.originalColorA[i]);
                    this.loaderMaterials[i].SetColor(TimerWarningEffects.ColorBId, this.originalColorB[i]);
                }
            },
            /*TimerWarningEffects.ResetVisuals end.*/

            /*TimerWarningEffects.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "TimerWarningEffects#LateUpdate", this ); }

                if (!this.warningActive) {
                    return;
                }

                var blink = (Math.sin(UnityEngine.Time.time * this.blinkSpeed) + 1.0) * 0.5; // 0..1

                if (UnityEngine.MonoBehaviour.op_Inequality(this.outlineGraphic, null)) {
                    this.outlineGraphic.color = pc.Color.lerp( this.originalOutlineColor, this.warningOutlineColor, blink );
                }

                if (UnityEngine.Component.op_Inequality(this.clockHandVisual, null)) {
                    var scaleN = pc.math.lerp(1.0, this.growScale, blink);
                    this.clockHandVisual.localScale = this.originalHandScale.$clone().clone().scale( scaleN );
                    this.clockHandVisual.localEulerAngles = new pc.Vec3( 0.0, 0.0, Math.sin(UnityEngine.Time.time * this.shakeSpeed) * this.shakeAmplitudeDegrees );
                }

                if (this.loaderMaterials == null) {
                    return;
                }
                for (var i = 0; i < this.loaderMaterials.length; i = (i + 1) | 0) {
                    if (this.loaderMaterials[i] == null) {
                        continue;
                    }
                    this.loaderMaterials[i].SetColor(TimerWarningEffects.ColorAId, pc.Color.lerp( this.originalColorA[i], this.warningColorA, blink ));
                    this.loaderMaterials[i].SetColor(TimerWarningEffects.ColorBId, pc.Color.lerp( this.originalColorB[i], this.warningColorB, blink ));
                }
            },
            /*TimerWarningEffects.LateUpdate end.*/


        }
    });
    /*TimerWarningEffects end.*/

    /*TrayRefillManager start.*/
    Bridge.define("TrayRefillManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            board: null,
            trayHandlers: null,
            timer: null,
            minPieces: 0,
            maxPieces: 0,
            spawnAnimDuration: 0,
            spawnBounceHeight: 0,
            spawnScaleCurve: null,
            trayPositions: null,
            trayRotations: null,
            trayScales: null,
            trayStacks: null,
            slotUsed: null,
            pieceColorValues: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#init", this ); }

                this.minPieces = 4;
                this.maxPieces = 6;
                this.spawnAnimDuration = 0.4;
                this.spawnBounceHeight = 0.3;
                this.spawnScaleCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.6, 1.15, 0, 0), new pc.Keyframe(1.0, 1.0, 0, 0) ]});
                this.pieceColorValues = System.Array.findAll(Bridge.cast(System.Enum.getValues(HexColor), System.Array.type(HexColor)), function (color) {
                        return color !== HexColor.SoftBlue;
                    });
            }
        },
        methods: {
            /*TrayRefillManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#Awake", this ); }

                this.CaptureTraySlots();
            },
            /*TrayRefillManager.Awake end.*/

            /*TrayRefillManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.board, null)) {
                    this.board.addOnStackPlaced(Bridge.fn.cacheBind(this, this.HandleStackPlaced));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timer, null)) {
                    this.timer.addOnTimerStopped(Bridge.fn.cacheBind(this, this.HandleTimerStopped));
                }
            },
            /*TrayRefillManager.OnEnable end.*/

            /*TrayRefillManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.board, null)) {
                    this.board.removeOnStackPlaced(Bridge.fn.cacheBind(this, this.HandleStackPlaced));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timer, null)) {
                    this.timer.removeOnTimerStopped(Bridge.fn.cacheBind(this, this.HandleTimerStopped));
                }
            },
            /*TrayRefillManager.OnDisable end.*/

            /*TrayRefillManager.CaptureTraySlots start.*/
            CaptureTraySlots: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#CaptureTraySlots", this ); }

                this.trayPositions = System.Array.init(this.trayHandlers.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.trayRotations = System.Array.init(this.trayHandlers.length, function (){
                    return new UnityEngine.Quaternion();
                }, UnityEngine.Quaternion);
                this.trayScales = System.Array.init(this.trayHandlers.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.trayStacks = System.Array.init(this.trayHandlers.length, null, HexStack);
                this.slotUsed = System.Array.init(this.trayHandlers.length, false, System.Boolean);

                for (var i = 0; i < this.trayHandlers.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.trayHandlers[i], null)) {
                        continue;
                    }
                    var t = this.trayHandlers[i].transform;
                    this.trayPositions[i] = t.position.$clone();
                    this.trayRotations[i] = t.rotation.$clone();
                    this.trayScales[i] = t.localScale.$clone();
                    this.trayStacks[i] = this.trayHandlers[i].GetComponent(HexStack);
                }
            },
            /*TrayRefillManager.CaptureTraySlots end.*/

            /*TrayRefillManager.HandleTimerStopped start.*/
            HandleTimerStopped: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#HandleTimerStopped", this ); }

                this.enabled = false;
            },
            /*TrayRefillManager.HandleTimerStopped end.*/

            /*TrayRefillManager.HandleStackPlaced start.*/
            HandleStackPlaced: function (stack) {
if ( TRACE ) { TRACE( "TrayRefillManager#HandleStackPlaced", this ); }

                for (var i = 0; i < this.trayStacks.length; i = (i + 1) | 0) {
                    if (!this.slotUsed[i] && UnityEngine.MonoBehaviour.op_Equality(this.trayStacks[i], stack)) {
                        this.slotUsed[i] = true;
                    }
                }

                if (this.AllSlotsUsed()) {
                    this.RefillTray();
                }
            },
            /*TrayRefillManager.HandleStackPlaced end.*/

            /*TrayRefillManager.AllSlotsUsed start.*/
            AllSlotsUsed: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#AllSlotsUsed", this ); }

                var $t;
                if (this.slotUsed.length === 0) {
                    return false;
                }
                $t = Bridge.getEnumerator(this.slotUsed);
                try {
                    while ($t.moveNext()) {
                        var used = $t.Current;
                        if (!used) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*TrayRefillManager.AllSlotsUsed end.*/

            /*TrayRefillManager.RefillTray start.*/
            RefillTray: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#RefillTray", this ); }

                var newHandlers = System.Array.init(this.trayHandlers.length, null, StackDragHandler);
                var newStacks = System.Array.init(this.trayHandlers.length, null, HexStack);

                for (var i = 0; i < this.trayHandlers.length; i = (i + 1) | 0) {
                    var stack = UnityEngine.Object.Instantiate$2(HexStack, this.board.StackPrefab, this.trayPositions[i], this.trayRotations[i]);
                    stack.transform.localScale = this.trayScales[i].$clone();
                    // needsAlwaysOnTopMaterial: true — это стопка лотка, её реально таскают, ей нужна
                    // личная копия материала для StackDragHandler.SetAlwaysOnTop во время драга (иначе
                    // "поверх всего" во время перетаскивания этой стопки просто не работал бы).
                    stack.Initialize(this.GenerateRandomColors(), this.board.PiecePrefab, this.board.Palette, true);

                    // StackDragHandler.Awake сам находит BoardManager через FindObjectOfType, если поле
                    // не назначено явно — отдельно вызывать SetBoard не нужно.
                    newHandlers[i] = stack.GetComponent(StackDragHandler);
                    newStacks[i] = stack;

                    this.StartCoroutine$1(this.AnimateSpawn(stack.transform, this.trayPositions[i], this.trayScales[i]));
                }

                // Заменяем отслеживаемый набор на новые стопки — как только их тоже все израсходуют,
                // AllSlotsUsed() снова сработает и запустит следующий рефилл.
                this.trayHandlers = newHandlers;
                this.trayStacks = newStacks;
                this.slotUsed = System.Array.init(this.trayHandlers.length, false, System.Boolean);
            },
            /*TrayRefillManager.RefillTray end.*/

            /*TrayRefillManager.GenerateRandomColors start.*/
            GenerateRandomColors: function () {
if ( TRACE ) { TRACE( "TrayRefillManager#GenerateRandomColors", this ); }

                var count = UnityEngine.Random.Range(this.minPieces, ((this.maxPieces + 1) | 0));

                var colorValues = this.pieceColorValues;
                var colorA = colorValues[UnityEngine.Random.Range(0, colorValues.length)];
                var colorB = new HexColor();
                do {
                    colorB = colorValues[UnityEngine.Random.Range(0, colorValues.length)];
                } while (colorB === colorA);

                var countA = UnityEngine.Random.Range(1, count); // 1..count-1 — оба цвета хотя бы по разу

                var colors = new (System.Collections.Generic.List$1(HexColor)).$ctor2(count);
                for (var i = 0; i < countA; i = (i + 1) | 0) {
                    colors.add(colorA);
                }
                for (var i1 = countA; i1 < count; i1 = (i1 + 1) | 0) {
                    colors.add(colorB);
                }
                return colors;
            },
            /*TrayRefillManager.GenerateRandomColors end.*/

            /*TrayRefillManager.AnimateSpawn start.*/
            AnimateSpawn: function (stackTransform, targetPosition, targetScale) {
if ( TRACE ) { TRACE( "TrayRefillManager#AnimateSpawn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    n,
                    scaleN,
                    hop,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(stackTransform, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    stackTransform.position = targetPosition.$clone();
                                        stackTransform.localScale = pc.Vec3.ZERO.clone();

                                        t = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < this.spawnAnimDuration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = Math.max(0, Math.min(1, t / this.spawnAnimDuration));

                                        scaleN = this.spawnScaleCurve.value(n);
                                        stackTransform.localScale = targetScale.$clone().clone().scale( scaleN );

                                        // Симметричный подскок — 0 в начале и в конце, пик посередине пути.
                                        hop = Math.sin(n * UnityEngine.Mathf.PI) * this.spawnBounceHeight;
                                        stackTransform.position = targetPosition.$clone().add( pc.Vec3.UP.clone().clone().scale( hop ) );

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    stackTransform.localScale = targetScale.$clone();
                                        stackTransform.position = targetPosition.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TrayRefillManager.AnimateSpawn end.*/


        }
    });
    /*TrayRefillManager end.*/

    /*TutorialHandController start.*/
    Bridge.define("TutorialHandController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            handRoot: null,
            traySlots: null,
            board: null,
            worldCamera: null,
            moveDuration: 0,
            pauseAtEdges: 0,
            idleDelayBeforeReshow: 0,
            handArcHeight: 0,
            overrideSourceStack: null,
            overrideTargetCell: null,
            handAnimator: null,
            handShadowAnimator: null,
            clenchTrigger: null,
            unclenchTrigger: null,
            fingerAnimDuration: 0,
            spotlightOverlay: null,
            targetCellHighlightColor: null,
            cellGlowMultiplier: 0,
            loopRoutine: null,
            idleRoutine: null,
            rootCanvas: null,
            finished: false,
            spotlightedStack: null,
            spotlightedStackOriginalLayer: 0,
            spotlightedCell: null,
            spotlightedCellOriginalLayer: 0
        },
        events: {
            OnTutorialFinished: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialHandController#init", this ); }

                this.targetCellHighlightColor = new UnityEngine.Color();
                this.moveDuration = 1.0;
                this.pauseAtEdges = 0.3;
                this.idleDelayBeforeReshow = 2.0;
                this.handArcHeight = 160.0;
                this.clenchTrigger = "HandTipTo";
                this.unclenchTrigger = "HandTipExit";
                this.fingerAnimDuration = 0.3;
                this.targetCellHighlightColor = new pc.Color( 1.0, 0.85, 0.3, 1 );
                this.cellGlowMultiplier = 1.3;
            }
        },
        methods: {
            /*TutorialHandController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TutorialHandController#OnEnable", this ); }

                StackDragHandler.addOnAnyStackGrabbed(Bridge.fn.cacheBind(this, this.HandleGrabbed));
                StackDragHandler.addOnAnyStackMoved(Bridge.fn.cacheBind(this, this.HandleMoved));
                StackDragHandler.addOnAnyStackReleased(Bridge.fn.cacheBind(this, this.HandleReleased));
            },
            /*TutorialHandController.OnEnable end.*/

            /*TutorialHandController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TutorialHandController#OnDisable", this ); }

                StackDragHandler.removeOnAnyStackGrabbed(Bridge.fn.cacheBind(this, this.HandleGrabbed));
                StackDragHandler.removeOnAnyStackMoved(Bridge.fn.cacheBind(this, this.HandleMoved));
                StackDragHandler.removeOnAnyStackReleased(Bridge.fn.cacheBind(this, this.HandleReleased));
            },
            /*TutorialHandController.OnDisable end.*/

            /*TutorialHandController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutorialHandController#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.worldCamera, null)) {
                    this.worldCamera = UnityEngine.Camera.main;
                }
                this.rootCanvas = this.handRoot.GetComponentInParent(UnityEngine.Canvas);

                // Рука должна рисоваться ПОВЕРХ затемняющей панели тутора, а не под ней — поднимаем
                // sortingOrder канваса руки выше, если он ниже (или равен).
                if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightOverlay, null) && UnityEngine.Component.op_Inequality(this.spotlightOverlay.OverlayCanvas, null) && UnityEngine.Component.op_Inequality(this.rootCanvas, null) && this.rootCanvas.sortingOrder <= this.spotlightOverlay.OverlayCanvas.sortingOrder) {
                    this.rootCanvas.sortingOrder = (this.spotlightOverlay.OverlayCanvas.sortingOrder + 1) | 0;
                }

                this.ShowHand();
            },
            /*TutorialHandController.Start end.*/

            /*TutorialHandController.ShowHand start.*/
            ShowHand: function () {
if ( TRACE ) { TRACE( "TutorialHandController#ShowHand", this ); }

                if (this.finished) {
                    return;
                }
                this.handRoot.gameObject.SetActive(true);
                // Затемняющая панель включается ВНУТРИ LoopHandAnimation, только когда реально найдены
                // источник и цель — иначе (например, в первые кадры, пока поле/лоток ещё не готовы) экран
                // затемнился бы полностью, а подсвечивать было бы нечего.
                this.loopRoutine = this.StartCoroutine$1(this.LoopHandAnimation());
            },
            /*TutorialHandController.ShowHand end.*/

            /*TutorialHandController.HideHand start.*/
            HideHand: function () {
if ( TRACE ) { TRACE( "TutorialHandController#HideHand", this ); }

                if (this.loopRoutine != null) {
                    this.StopCoroutine$2(this.loopRoutine);
                }
                if (this.idleRoutine != null) {
                    this.StopCoroutine$2(this.idleRoutine);
                }
                this.handRoot.gameObject.SetActive(false);
                this.ClearSpotlight();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightOverlay, null)) {
                    this.spotlightOverlay.Hide();
                }
            },
            /*TutorialHandController.HideHand end.*/

            /*TutorialHandController.HandleGrabbed start.*/
            HandleGrabbed: function () {
if ( TRACE ) { TRACE( "TutorialHandController#HandleGrabbed", this ); }

                this.HideHand();
            },
            /*TutorialHandController.HandleGrabbed end.*/

            /*TutorialHandController.HandleMoved start.*/
            HandleMoved: function () {
if ( TRACE ) { TRACE( "TutorialHandController#HandleMoved", this ); }

                if (this.finished) {
                    return;
                }
                this.finished = true;
                this.HideHand();
                !Bridge.staticEquals(this.OnTutorialFinished, null) ? this.OnTutorialFinished() : null;
            },
            /*TutorialHandController.HandleMoved end.*/

            /*TutorialHandController.HandleReleased start.*/
            HandleReleased: function (success) {
if ( TRACE ) { TRACE( "TutorialHandController#HandleReleased", this ); }

                if (this.finished) {
                    return;
                }
                // Стопку отпустили, но не сдвинули по-настоящему — через паузу повторно показываем руку.
                this.idleRoutine = this.StartCoroutine$1(this.ReshowAfterDelay());
            },
            /*TutorialHandController.HandleReleased end.*/

            /*TutorialHandController.ReshowAfterDelay start.*/
            ReshowAfterDelay: function () {
if ( TRACE ) { TRACE( "TutorialHandController#ReshowAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.idleDelayBeforeReshow);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (!this.finished) {
                                            this.ShowHand();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialHandController.ReshowAfterDelay end.*/

            /*TutorialHandController.LoopHandAnimation start.*/
            LoopHandAnimation: function () {
if ( TRACE ) { TRACE( "TutorialHandController#LoopHandAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    source,
                    target,
                    fromScreen,
                    toScreen,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 1: {
                                    // Каждое поле переопределяется независимо от другого: если задано только одно (например,
                                        // источник), второе всё равно считается автоматически (ближайшая свободная ячейка к
                                        // ВЫБРАННОМУ источнику, а не к случайному).
                                        source = UnityEngine.MonoBehaviour.op_Inequality(this.overrideSourceStack, null) ? this.overrideSourceStack.transform : this.FindAvailableTrayStack();
                                        target = UnityEngine.MonoBehaviour.op_Inequality(this.overrideTargetCell, null) ? this.overrideTargetCell : this.FindNearestEmptyCell(source);

                                        if (UnityEngine.Component.op_Equality(source, null) || UnityEngine.MonoBehaviour.op_Equality(target, null)) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    // Показывать некого/некуда — например, все стопки уже разобраны, либо поле/лоток
                                        // ещё не готовы. Прячем панель (нечего подсвечивать) и подождём, проверим снова.
                                        this.ClearSpotlight();
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightOverlay, null)) {
                                            this.spotlightOverlay.Hide();
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 0;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightOverlay, null)) {
                                            this.spotlightOverlay.Show();
                                        }
                                        this.ApplySpotlight(source, target);

                                        fromScreen = this.WorldToCanvasPoint(source.position);
                                        toScreen = this.WorldToCanvasPoint(target.SnapPosition);

                                        this.handRoot.anchoredPosition = fromScreen.$clone();
                                        // Триггер здесь НЕ ставим: палец уже разжат — либо это самый первый цикл (дефолтная
                                        // поза аниматора), либо предыдущая итерация уже закончилась HandTipExit при возврате
                                        // сюда же. Лишний вызов SetFinger(false) в этой точке ничего не "открывал" заново, а
                                        // просто ретриггерил аниматор посреди уже разжатого состояния — от этого и была
                                        // "кривая" игра анимации. Всего должно быть ровно 2 триггера за цикл, не 3.
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    // Путь ОТ стопки К ячейке: сначала полностью доигрывает анимация сжатия (рука ещё
                                        // стоит на месте), и только ПОСЛЕ неё начинается само движение — а не одновременно с
                                        // триггером, как было. Триггер №1 за цикл.
                                        this.SetFinger(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.fingerAnimDuration);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.MoveHand(fromScreen.$clone(), toScreen.$clone());
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    // Обратный путь ОТ ячейки К стопке: та же логика — сначала доигрывает анимация
                                        // разжатия ("отпустили" стопку), и только потом стартует анимированное движение назад.
                                        // Триггер №2 (и последний) за цикл.
                                        this.SetFinger(false);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.fingerAnimDuration);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    $enumerator.current = this.MoveHand(toScreen.$clone(), fromScreen.$clone());
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 12: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialHandController.LoopHandAnimation end.*/

            /*TutorialHandController.MoveHand start.*/
            MoveHand: function (from, to) {
if ( TRACE ) { TRACE( "TutorialHandController#MoveHand", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    n,
                    pos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.moveDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = pc.math.smoothstep(0.0, 1.0, t / this.moveDuration);
                                        pos = new pc.Vec2().lerp( from, to, n );
                                        pos.y += Math.sin(n * UnityEngine.Mathf.PI) * this.handArcHeight; // симметричная дуга, пик посередине пути
                                        this.handRoot.anchoredPosition = pos.$clone();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.handRoot.anchoredPosition = to.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialHandController.MoveHand end.*/

            /*TutorialHandController.SetFinger start.*/
            SetFinger: function (clenched) {
if ( TRACE ) { TRACE( "TutorialHandController#SetFinger", this ); }

                var trigger = clenched ? this.clenchTrigger : this.unclenchTrigger;
                if (UnityEngine.Component.op_Inequality(this.handAnimator, null)) {
                    this.handAnimator.SetTrigger$1(trigger);
                }
                if (UnityEngine.Component.op_Inequality(this.handShadowAnimator, null)) {
                    this.handShadowAnimator.SetTrigger$1(trigger);
                }
            },
            /*TutorialHandController.SetFinger end.*/

            /*TutorialHandController.ApplySpotlight start.*/
            ApplySpotlight: function (source, target) {
if ( TRACE ) { TRACE( "TutorialHandController#ApplySpotlight", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.spotlightOverlay, null) || this.spotlightOverlay.SpotlightLayer < 0) {
                    return;
                }

                var stack = UnityEngine.Component.op_Inequality(source, null) ? source.GetComponent(HexStack) : null;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightedStack, stack)) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightedStack, null)) {
                        this.spotlightedStack.SetLayer(this.spotlightedStackOriginalLayer);
                    }
                    this.spotlightedStack = stack;
                    if (UnityEngine.MonoBehaviour.op_Inequality(stack, null)) {
                        this.spotlightedStackOriginalLayer = source.gameObject.layer;
                        stack.SetLayer(this.spotlightOverlay.SpotlightLayer);
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightedCell, target)) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightedCell, null)) {
                        this.spotlightedCell.SetLayer(this.spotlightedCellOriginalLayer);
                        this.spotlightedCell.SetTutorialHighlighted(false, this.targetCellHighlightColor);
                    }
                    this.spotlightedCell = target;
                    if (UnityEngine.MonoBehaviour.op_Inequality(target, null)) {
                        this.spotlightedCellOriginalLayer = target.gameObject.layer;
                        target.SetLayer(this.spotlightOverlay.SpotlightLayer);
                        target.SetTutorialHighlighted(true, new pc.Color( this.targetCellHighlightColor.r * this.cellGlowMultiplier, this.targetCellHighlightColor.g * this.cellGlowMultiplier, this.targetCellHighlightColor.b * this.cellGlowMultiplier, this.targetCellHighlightColor.a * this.cellGlowMultiplier ));
                    }
                }
            },
            /*TutorialHandController.ApplySpotlight end.*/

            /*TutorialHandController.ClearSpotlight start.*/
            ClearSpotlight: function () {
if ( TRACE ) { TRACE( "TutorialHandController#ClearSpotlight", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightedStack, null)) {
                    this.spotlightedStack.SetLayer(this.spotlightedStackOriginalLayer);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.spotlightedCell, null)) {
                    this.spotlightedCell.SetLayer(this.spotlightedCellOriginalLayer);
                    this.spotlightedCell.SetTutorialHighlighted(false, this.targetCellHighlightColor);
                }
                this.spotlightedStack = null;
                this.spotlightedCell = null;
            },
            /*TutorialHandController.ClearSpotlight end.*/

            /*TutorialHandController.FindAvailableTrayStack start.*/
            FindAvailableTrayStack: function () {
if ( TRACE ) { TRACE( "TutorialHandController#FindAvailableTrayStack", this ); }

                var $t;
                if (this.traySlots == null) {
                    return null;
                }

                $t = Bridge.getEnumerator(this.traySlots);
                try {
                    while ($t.moveNext()) {
                        var handler = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(handler, null) && handler.IsInTray) {
                            return handler.transform;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*TutorialHandController.FindAvailableTrayStack end.*/

            /*TutorialHandController.FindNearestEmptyCell start.*/
            FindNearestEmptyCell: function (source) {
if ( TRACE ) { TRACE( "TutorialHandController#FindNearestEmptyCell", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this.board, null)) {
                    return null;
                }

                var best = null;
                var bestDist = 3.40282347E+38;

                $t = Bridge.getEnumerator(this.board.Cells, BoardCell);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (!cell.IsEmpty) {
                            continue;
                        }
                        if (UnityEngine.Component.op_Equality(source, null)) {
                            return cell;
                        }

                        var dist = pc.Vec3.distance( cell.SnapPosition, source.position );
                        if (dist < bestDist) {
                            bestDist = dist;
                            best = cell;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return best;
            },
            /*TutorialHandController.FindNearestEmptyCell end.*/

            /*TutorialHandController.WorldToCanvasPoint start.*/
            WorldToCanvasPoint: function (worldPos) {
if ( TRACE ) { TRACE( "TutorialHandController#WorldToCanvasPoint", this ); }

                var screenPoint = this.worldCamera.WorldToScreenPoint(worldPos);

                // Overlay-канвас не привязан ни к какой камере — RectTransformUtility ожидает здесь null
                // именно для этого режима, а не любую камеру (иначе локальная точка считается неверно, и
                // рука "залипает" в углу канваса). Для Screen Space - Camera / World Space, наоборот,
                // нужна реальная камера — поэтому режим канваса проверяется каждый раз, а не жёстко зашит.
                var cameraForConversion = UnityEngine.Component.op_Inequality(this.rootCanvas, null) && this.rootCanvas.renderMode === UnityEngine.RenderMode.ScreenSpaceOverlay ? null : this.worldCamera;
                var localPoint = { v : new UnityEngine.Vector2() };

                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.as(this.handRoot.parent, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(screenPoint), cameraForConversion, localPoint);
                return localPoint.v.$clone();
            },
            /*TutorialHandController.WorldToCanvasPoint end.*/


        }
    });
    /*TutorialHandController end.*/

    /*TutorialSpotlightOverlay start.*/
    Bridge.define("TutorialSpotlightOverlay", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mainCamera: null,
            revealCamera: null,
            overlayRoot: null,
            revealImage: null,
            overlayCanvasGroup: null,
            spotlightLayerName: null,
            fadeDuration: 0,
            SpotlightLayer: 0,
            OverlayCanvas: null,
            revealTexture: null,
            fadeRoutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#init", this ); }

                this.spotlightLayerName = "TutorialSpotlight";
                this.fadeDuration = 0.3;
                this.SpotlightLayer = -1;
            }
        },
        methods: {
            /*TutorialSpotlightOverlay.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#Awake", this ); }

                this.SpotlightLayer = UnityEngine.LayerMask.NameToLayer(this.spotlightLayerName);
                if (this.SpotlightLayer < 0) {
                    UnityEngine.Debug.LogError$2((System.String.format("TutorialSpotlightOverlay: \u0441\u043b\u043e\u0439 '{0}' \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0432 ", [this.spotlightLayerName]) || "") + "Project Settings > Tags and Layers \u2014 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e.", this);
                    this.enabled = false;
                    return;
                }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    this.mainCamera = UnityEngine.Camera.main;
                }
                if (UnityEngine.GameObject.op_Inequality(this.overlayRoot, null)) {
                    this.OverlayCanvas = this.overlayRoot.GetComponent(UnityEngine.Canvas);
                }

                this.SetupRevealCamera();
                this.HideImmediate();
            },
            /*TutorialSpotlightOverlay.Awake end.*/

            /*TutorialSpotlightOverlay.SetupRevealCamera start.*/
            SetupRevealCamera: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#SetupRevealCamera", this ); }

                if (UnityEngine.Component.op_Equality(this.revealCamera, null)) {
                    return;
                }

                // Оптика (FOV/клиппинг/ортографичность и т.д.) копируется с основной камеры, чтобы
                // картинка совпадала пиксель-в-пиксель — позицию/поворот/родителя настраиваете сами
                // в сцене (обычно — как дочерний объект основной камеры с нулевым локальным смещением).
                if (UnityEngine.Component.op_Inequality(this.mainCamera, null)) {
                    this.revealCamera.CopyFrom(this.mainCamera);
                }

                // Прозрачный фон — то, что реально нарисовано (подсвеченные объекты), выйдет с альфой 1
                // поверх него, и именно по альфе RawImage "просвечивает" только эти пиксели.
                this.revealCamera.clearFlags = UnityEngine.CameraClearFlags.SolidColor;
                this.revealCamera.backgroundColor = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                this.revealCamera.cullingMask = 1 << this.SpotlightLayer;
                this.revealCamera.depth = -1;

                this.revealTexture = new UnityEngine.RenderTexture.$ctor5(UnityEngine.Mathf.Max(UnityEngine.Screen.width, 1), UnityEngine.Mathf.Max(UnityEngine.Screen.height, 1), 24, UnityEngine.RenderTextureFormat.ARGB32);
                this.revealCamera.targetTexture = this.revealTexture;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.revealImage, null)) {
                    this.revealImage.texture = this.revealTexture;
                }
            },
            /*TutorialSpotlightOverlay.SetupRevealCamera end.*/

            /*TutorialSpotlightOverlay.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#Show", this ); }

                if (this.fadeRoutine != null) {
                    this.StopCoroutine$2(this.fadeRoutine);
                }
                if (UnityEngine.GameObject.op_Inequality(this.overlayRoot, null)) {
                    this.overlayRoot.SetActive(true);
                }
                if (UnityEngine.Component.op_Inequality(this.revealCamera, null)) {
                    this.revealCamera.enabled = true;
                }
                this.fadeRoutine = this.StartCoroutine$1(this.FadeTo(1.0, false));
            },
            /*TutorialSpotlightOverlay.Show end.*/

            /*TutorialSpotlightOverlay.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#Hide", this ); }

                if (this.fadeRoutine != null) {
                    this.StopCoroutine$2(this.fadeRoutine);
                }
                this.fadeRoutine = this.StartCoroutine$1(this.FadeTo(0.0, true));
            },
            /*TutorialSpotlightOverlay.Hide end.*/

            /*TutorialSpotlightOverlay.HideImmediate start.*/
            HideImmediate: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#HideImmediate", this ); }

                if (this.fadeRoutine != null) {
                    this.StopCoroutine$2(this.fadeRoutine);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.overlayCanvasGroup, null)) {
                    this.overlayCanvasGroup.alpha = 0.0;
                }
                if (UnityEngine.GameObject.op_Inequality(this.overlayRoot, null)) {
                    this.overlayRoot.SetActive(false);
                }
                if (UnityEngine.Component.op_Inequality(this.revealCamera, null)) {
                    this.revealCamera.enabled = false;
                }
            },
            /*TutorialSpotlightOverlay.HideImmediate end.*/

            /*TutorialSpotlightOverlay.FadeTo start.*/
            FadeTo: function (targetAlpha, disableAtEnd) {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#FadeTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAlpha,
                    t,
                    n,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this.overlayCanvasGroup, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    if (disableAtEnd) {
                                            this.DisableOverlay();
                                        }
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    startAlpha = this.overlayCanvasGroup.alpha;
                                        t = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < this.fadeDuration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = this.fadeDuration > 0.0 ? t / this.fadeDuration : 1.0;
                                        this.overlayCanvasGroup.alpha = pc.math.lerp(startAlpha, targetAlpha, n);
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    this.overlayCanvasGroup.alpha = targetAlpha;
                                        if (disableAtEnd) {
                                            this.DisableOverlay();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialSpotlightOverlay.FadeTo end.*/

            /*TutorialSpotlightOverlay.DisableOverlay start.*/
            DisableOverlay: function () {
if ( TRACE ) { TRACE( "TutorialSpotlightOverlay#DisableOverlay", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.overlayRoot, null)) {
                    this.overlayRoot.SetActive(false);
                }
                if (UnityEngine.Component.op_Inequality(this.revealCamera, null)) {
                    this.revealCamera.enabled = false;
                }
            },
            /*TutorialSpotlightOverlay.DisableOverlay end.*/


        }
    });
    /*TutorialSpotlightOverlay end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine","System.Collections.Generic","UnityEngine.UI"];

    /*GameFlowController start.*/
    $m("GameFlowController", function () { return {"nested":[GameFlowController.Phase],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GoToPackshot","t":8,"sn":"GoToPackshot","rt":$n[0].Void},{"a":1,"n":"HandleBoardCleared","t":8,"sn":"HandleBoardCleared","rt":$n[0].Void},{"a":1,"n":"HandleFailPopupShown","t":8,"sn":"HandleFailPopupShown","rt":$n[0].Void},{"a":1,"n":"HandleTutorialFinished","t":8,"sn":"HandleTutorialFinished","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0441\u0435 \u0442\u0440\u0438 \u0441\u0442\u043e\u043f\u043a\u0438 \u043b\u043e\u0442\u043a\u0430 \u2014 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u0432 \u043f\u044d\u043a\u0448\u043e\u0442, \u0447\u0442\u043e\u0431\u044b \u0438\u0445 \u043d\u0435\u043b\u044c\u0437\u044f \u0431\u044b\u043b\u043e \u0442\u0430\u0449\u0438\u0442\u044c."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragHandlers","t":4,"rt":System.Array.type(StackDragHandler),"sn":"dragHandlers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packshot","t":4,"rt":PackshotController,"sn":"packshot"},{"a":1,"n":"phase","t":4,"rt":GameFlowController.Phase,"sn":"phase","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timer","t":4,"rt":GameTimerUI,"sn":"timer"},{"at":[new UnityEngine.TooltipAttribute("\u041f\u043e\u043b\u043e\u0441\u043a\u0430-\u0442\u0430\u0439\u043c\u0435\u0440 \u0441 \u043f\u043e\u043f\u0430\u043f\u043e\u043c \"Fail\" \u043f\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u2014 \u043f\u044d\u043a\u0448\u043e\u0442 \u043f\u0440\u0438 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0448\u0435 \u043f\u043e \u0442\u0430\u0439\u043c\u0435\u0440\u0443 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0422\u041e\u041b\u042c\u041a\u041e \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u044d\u0442\u043e\u0442 \u043f\u043e\u043f\u0430\u043f \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e\u0438\u0433\u0440\u0430\u0435\u0442 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435 (\u0441\u043c. TimerSliderUI.OnFailPopupShown), \u0430 \u043d\u0435 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e OnTimerExpired, \u0438\u043d\u0430\u0447\u0435 \u043f\u044d\u043a\u0448\u043e\u0442 \u0432\u044b\u0441\u043a\u0430\u043a\u0438\u0432\u0430\u043b \u0431\u044b \u043f\u043e\u0432\u0435\u0440\u0445 \u0435\u0449\u0451 \u043d\u0435 \u0434\u043e\u0438\u0433\u0440\u0430\u0432\u0448\u0435\u0433\u043e \u043f\u043e\u043f\u0430\u043f\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerSlider","t":4,"rt":TimerSliderUI,"sn":"timerSlider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorial","t":4,"rt":TutorialHandController,"sn":"tutorial"}]}; }, $n);
    /*GameFlowController end.*/

    /*GameFlowController+Phase start.*/
    $m("GameFlowController.Phase", function () { return {"td":GameFlowController,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Gameplay","is":true,"t":4,"rt":GameFlowController.Phase,"sn":"Gameplay","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}},{"a":2,"n":"Packshot","is":true,"t":4,"rt":GameFlowController.Phase,"sn":"Packshot","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}},{"a":2,"n":"Tutorial","is":true,"t":4,"rt":GameFlowController.Phase,"sn":"Tutorial","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}}]}; }, $n);
    /*GameFlowController+Phase end.*/

    /*BoardCell start.*/
    $m("BoardCell", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateHighlight","t":8,"pi":[{"n":"highlighted","pt":$n[0].Boolean,"ps":0}],"sn":"AnimateHighlight","rt":$n[1].IEnumerator,"p":[$n[0].Boolean]},{"a":1,"n":"ApplyColor","t":8,"pi":[{"n":"color","pt":$n[2].Color,"ps":0}],"sn":"ApplyColor","rt":$n[0].Void,"p":[$n[2].Color]},{"a":1,"n":"ApplyScaleAndPosition","t":8,"pi":[{"n":"scaleX","pt":$n[0].Single,"ps":0},{"n":"positionY","pt":$n[0].Single,"ps":1}],"sn":"ApplyScaleAndPosition","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnsureInitialized","t":8,"sn":"EnsureInitialized","rt":$n[0].Void},{"a":2,"n":"SetAxialCoord","t":8,"pi":[{"n":"coord","pt":$n[2].Vector2Int,"ps":0}],"sn":"SetAxialCoord","rt":$n[0].Void,"p":[$n[2].Vector2Int]},{"a":2,"n":"SetHighlightConfig","t":8,"pi":[{"n":"config","pt":CellHighlightConfig,"ps":0}],"sn":"SetHighlightConfig","rt":$n[0].Void,"p":[CellHighlightConfig]},{"a":2,"n":"SetHighlighted","t":8,"pi":[{"n":"highlighted","pt":$n[0].Boolean,"ps":0}],"sn":"SetHighlighted","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetLayer","t":8,"pi":[{"n":"layer","pt":$n[0].Int32,"ps":0}],"sn":"SetLayer","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetTutorialHighlighted","t":8,"pi":[{"n":"active","pt":$n[0].Boolean,"ps":0},{"n":"highlightColor","pt":$n[2].Color,"ps":1}],"sn":"SetTutorialHighlighted","rt":$n[0].Void,"p":[$n[0].Boolean,$n[2].Color]},{"a":2,"n":"AutoComputeAxialFromPosition","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_AutoComputeAxialFromPosition","t":8,"rt":$n[0].Boolean,"fg":"AutoComputeAxialFromPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"AutoComputeAxialFromPosition"},{"a":2,"n":"AxialCoord","t":16,"rt":$n[2].Vector2Int,"g":{"a":2,"n":"get_AxialCoord","t":8,"rt":$n[2].Vector2Int,"fg":"AxialCoord"},"fn":"AxialCoord"},{"a":2,"n":"CurrentStack","t":16,"rt":HexStack,"g":{"a":2,"n":"get_CurrentStack","t":8,"rt":HexStack,"fg":"CurrentStack"},"s":{"a":2,"n":"set_CurrentStack","t":8,"p":[HexStack],"rt":$n[0].Void,"fs":"CurrentStack"},"fn":"CurrentStack"},{"a":2,"n":"InitialStackColors","t":16,"rt":$n[3].IReadOnlyList$1(HexColor),"g":{"a":2,"n":"get_InitialStackColors","t":8,"rt":$n[3].IReadOnlyList$1(HexColor),"fg":"InitialStackColors"},"fn":"InitialStackColors"},{"a":2,"n":"IsClickable","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClickable","t":8,"rt":$n[0].Boolean,"fg":"IsClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsClickable"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"SnapPosition","t":16,"rt":$n[2].Vector3,"g":{"a":2,"n":"get_SnapPosition","t":8,"rt":$n[2].Vector3,"fg":"SnapPosition"},"fn":"SnapPosition"},{"a":1,"n":"ColorPropertyId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorPropertyId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Neighbors","t":4,"rt":$n[3].List$1(BoardCell),"sn":"Neighbors"},{"a":2,"n":"QueuedWave","t":4,"rt":$n[0].Int32,"sn":"QueuedWave","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u2014 BoardManager \u0441\u0430\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442 Axial Coord \u0438\u0437 \u043c\u0438\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u044f\u0447\u0435\u0439\u043a\u0438 (\u0441\u043c. BoardManager.gridOrigin/columnSpacing/rowSpacing) \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0448\u0435\u0442\u0441\u044f. \u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b, \u043d\u0435 \u0432\u044b\u0432\u043e\u0434\u0438\u043c\u044b\u0435 \u0438\u0437 \u043f\u043e\u0437\u0438\u0446\u0438\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoComputeAxialFromPosition","t":4,"rt":$n[0].Boolean,"sn":"autoComputeAxialFromPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u041e\u0441\u0435\u0432\u044b\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u044f\u0447\u0435\u0439\u043a\u0438 \u0432 \u0433\u0435\u043a\u0441-\u0441\u0435\u0442\u043a\u0435 (axial q,r). \u0421\u043e\u0441\u0435\u0434\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e 6 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c \u0433\u0435\u043a\u0441-\u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u043c \u043e\u0442 \u044d\u0442\u0438\u0445 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axialCoord","t":4,"rt":$n[2].Vector2Int,"sn":"axialCoord"},{"a":1,"n":"basePositionY","t":4,"rt":$n[0].Single,"sn":"basePositionY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"baseScaleX","t":4,"rt":$n[0].Single,"sn":"baseScaleX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"cellRenderer","t":4,"rt":$n[2].MeshRenderer,"sn":"cellRenderer"},{"a":1,"n":"currentColor","t":4,"rt":$n[2].Color,"sn":"currentColor"},{"a":1,"n":"currentPositionY","t":4,"rt":$n[0].Single,"sn":"currentPositionY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentScaleX","t":4,"rt":$n[0].Single,"sn":"currentScaleX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"highlightConfig","t":4,"rt":CellHighlightConfig,"sn":"highlightConfig"},{"a":1,"n":"highlightRoutine","t":4,"rt":$n[2].Coroutine,"sn":"highlightRoutine"},{"at":[new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u043d\u0430 \u0441\u0442\u0430\u0440\u0442\u0435 \u043d\u0430 \u044d\u0442\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0435 \u0443\u0436\u0435 \u0441\u0442\u043e\u0438\u0442 \u0441\u0442\u043e\u043f\u043a\u0430 \u2014 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0435\u0451 \u0446\u0432\u0435\u0442\u0430 \u0441\u043d\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialStackColors","t":4,"rt":$n[3].List$1(HexColor),"sn":"initialStackColors"},{"at":[new UnityEngine.TooltipAttribute("\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0417\u0410\u0411\u0418\u0420\u0410\u0422\u042c \u0441\u0442\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u0436\u0435 \u0441\u0442\u043e\u0438\u0442 \u043d\u0430 \u044d\u0442\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0435 (\u0441\u043c. StackDragHandler.OnMouseDown). \u041d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0442\u043e, \u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u0421\u042e\u0414\u0410 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043f\u043a\u0443 \u0438\u0437 \u043b\u043e\u0442\u043a\u0430 \u2014 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0440\u043e\u043f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u044d\u0442\u043e\u0439 \u0433\u0430\u043b\u043a\u0438. \u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0434\u043b\u044f \u044f\u0447\u0435\u0435\u043a \u0441\u043e \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u043c\u0438 \u0441\u0442\u043e\u043f\u043a\u0430\u043c\u0438 \u043f\u043e\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435\u043f\u043e\u0434\u0432\u0438\u0436\u043d\u044b\u043c\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isClickable","t":4,"rt":$n[0].Boolean,"sn":"isClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHighlighted","t":4,"rt":$n[0].Boolean,"sn":"isHighlighted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"propertyBlock","t":4,"rt":$n[2].MaterialPropertyBlock,"sn":"propertyBlock"},{"a":1,"n":"tutorialHighlightActive","t":4,"rt":$n[0].Boolean,"sn":"tutorialHighlightActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tutorialHighlightColor","t":4,"rt":$n[2].Color,"sn":"tutorialHighlightColor"},{"a":1,"backing":true,"n":"<CurrentStack>k__BackingField","t":4,"rt":HexStack,"sn":"CurrentStack"}]}; }, $n);
    /*BoardCell end.*/

    /*BoardManager start.*/
    $m("BoardManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateAndDestroyAll","t":8,"pi":[{"n":"stacks","pt":$n[3].List$1(HexStack),"ps":0}],"sn":"AnimateAndDestroyAll","rt":$n[1].IEnumerator,"p":[$n[3].List$1(HexStack)]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ComputeNeighbors","t":8,"sn":"ComputeNeighbors","rt":$n[0].Void},{"a":1,"n":"FlyAndLand","t":8,"pi":[{"n":"piece","pt":HexPieceView,"ps":0},{"n":"from","pt":$n[2].Vector3,"ps":1},{"n":"to","pt":$n[2].Vector3,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"receiverStack","pt":HexStack,"ps":4}],"sn":"FlyAndLand","rt":$n[1].IEnumerator,"p":[HexPieceView,$n[2].Vector3,$n[2].Vector3,$n[0].Single,HexStack]},{"a":1,"n":"GetNeighbors","t":8,"pi":[{"n":"cell","pt":BoardCell,"ps":0}],"sn":"GetNeighbors","rt":$n[3].List$1(BoardCell),"p":[BoardCell]},{"a":1,"n":"IsBoardFullyCleared","t":8,"sn":"IsBoardFullyCleared","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MarkInReaction","is":true,"t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"reactionStacks","pt":$n[3].List$1(HexStack),"ps":1}],"sn":"MarkInReaction","rt":$n[0].Void,"p":[HexStack,$n[3].List$1(HexStack)]},{"a":1,"n":"MoveHexWithArc","t":8,"pi":[{"n":"hex","pt":$n[2].GameObject,"ps":0},{"n":"startPos","pt":$n[2].Vector3,"ps":1},{"n":"endPos","pt":$n[2].Vector3,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"MoveHexWithArc","rt":$n[1].IEnumerator,"p":[$n[2].GameObject,$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":2,"n":"PlaceStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"cell","pt":BoardCell,"ps":1}],"sn":"PlaceStack","rt":$n[0].Void,"p":[HexStack,BoardCell]},{"a":1,"n":"ProcessChainReaction","t":8,"pi":[{"n":"startCell","pt":BoardCell,"ps":0}],"sn":"ProcessChainReaction","rt":$n[1].IEnumerator,"p":[BoardCell]},{"a":1,"n":"RunChainReactionBfs","t":8,"pi":[{"n":"startCell","pt":BoardCell,"ps":0},{"n":"waveId","pt":$n[0].Int32,"ps":1},{"n":"reactionStacks","pt":$n[3].List$1(HexStack),"ps":2}],"sn":"RunChainReactionBfs","rt":$n[1].IEnumerator,"p":[BoardCell,$n[0].Int32,$n[3].List$1(HexStack)]},{"a":1,"n":"SmoothRotateTo","t":8,"pi":[{"n":"target","pt":$n[2].Transform,"ps":0},{"n":"targetRotation","pt":$n[2].Quaternion,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"SmoothRotateTo","rt":$n[1].IEnumerator,"p":[$n[2].Transform,$n[2].Quaternion,$n[0].Single]},{"a":1,"n":"SpawnDestroyEffect","t":8,"pi":[{"n":"position","pt":$n[2].Vector3,"ps":0},{"n":"color","pt":HexColor,"ps":1}],"sn":"SpawnDestroyEffect","rt":$n[0].Void,"p":[$n[2].Vector3,HexColor]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TransferMatchingColor","t":8,"pi":[{"n":"donorStack","pt":HexStack,"ps":0},{"n":"receiverStack","pt":HexStack,"ps":1},{"n":"speedMultiplier","pt":$n[0].Single,"ps":2}],"sn":"TransferMatchingColor","rt":$n[1].IEnumerator,"p":[HexStack,HexStack,$n[0].Single]},{"a":1,"n":"TryDestroyMonochromeStacks","t":8,"pi":[{"n":"reactionStacks","pt":$n[3].List$1(HexStack),"ps":0}],"sn":"TryDestroyMonochromeStacks","rt":$n[1].IEnumerator,"p":[$n[3].List$1(HexStack)]},{"a":2,"n":"Cells","t":16,"rt":$n[3].IReadOnlyList$1(BoardCell),"g":{"a":2,"n":"get_Cells","t":8,"rt":$n[3].IReadOnlyList$1(BoardCell),"fg":"Cells"},"fn":"Cells"},{"a":2,"n":"IsChainRunning","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsChainRunning","t":8,"rt":$n[0].Boolean,"fg":"IsChainRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsChainRunning"},{"a":2,"n":"Palette","t":16,"rt":HexColorPalette,"g":{"a":2,"n":"get_Palette","t":8,"rt":HexColorPalette,"fg":"Palette"},"fn":"Palette"},{"a":2,"n":"PiecePrefab","t":16,"rt":HexPieceView,"g":{"a":2,"n":"get_PiecePrefab","t":8,"rt":HexPieceView,"fg":"PiecePrefab"},"fn":"PiecePrefab"},{"a":2,"n":"StackPrefab","t":16,"rt":HexStack,"g":{"a":2,"n":"get_StackPrefab","t":8,"rt":HexStack,"fg":"StackPrefab"},"fn":"StackPrefab"},{"a":1,"n":"ClipYShaderId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ClipYShaderId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_flightsRemaining","t":4,"rt":$n[0].Int32,"sn":"_flightsRemaining","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u0446\u0435\u043f\u043d\u043e\u0439 \u0440\u0435\u0430\u043a\u0446\u0438\u0438"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseJumpDuration","t":4,"rt":$n[0].Single,"sn":"baseJumpDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0432\u0435\u0442\u0430 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u044f\u0447\u0435\u0439\u043a\u0438 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u0441\u0442\u043e\u043f\u043a\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0434\u0440\u0430\u0433\u0430 \u2014 \u043e\u0434\u0438\u043d \u0430\u0441\u0441\u0435\u0442 \u043d\u0430 \u0432\u0441\u0435 \u044f\u0447\u0435\u0439\u043a\u0438 \u043f\u043e\u043b\u044f \u0441\u0440\u0430\u0437\u0443, \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0442\u044c \u0432 \u043a\u0430\u0436\u0434\u0443\u044e BoardCell \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u043d\u0435 \u043d\u0443\u0436\u043d\u043e (\u0441\u043c. Awake)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellHighlightConfig","t":4,"rt":CellHighlightConfig,"sn":"cellHighlightConfig"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cells","t":4,"rt":$n[3].List$1(BoardCell),"sn":"cells"},{"at":[new UnityEngine.HeaderAttribute("\u042f\u0447\u0435\u0439\u043a\u0438 \u043f\u043e\u043b\u044f"),new UnityEngine.TooltipAttribute("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e: \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e, \u0432\u0441\u0435 BoardCell \u0432 \u0434\u0435\u0442\u044f\u0445 \u044d\u0442\u043e\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430 \u0441\u043e\u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0441\u044e\u0434\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellsParent","t":4,"rt":$n[2].Transform,"sn":"cellsParent"},{"a":1,"n":"chainRunning","t":4,"rt":$n[0].Boolean,"sn":"chainRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u0417\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u0414\u041e \u043a\u043e\u043d\u0446\u0430 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u043d\u0438\u044f (\u0434\u043e Destroy \u0441\u0442\u043e\u043f\u043a\u0438) \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u0430\u0440\u0442\u0438\u043a\u043b-\u044d\u0444\u0444\u0435\u043a\u0442 \u2014 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, 1 \u0437\u043d\u0430\u0447\u0438\u0442 '\u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0434\u043e \u043a\u043e\u043d\u0446\u0430', \u0430 \u043d\u0435 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430. \u041f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u043b\u043e \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u043e\u043c, \u043a\u043e\u0433\u0434\u0430 \u0441\u0442\u043e\u043f\u043a\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u043c\u0430\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u043a\u0438 (_ClipY)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"destroyEffectOffsetBeforeEnd","t":4,"rt":$n[0].Single,"sn":"destroyEffectOffsetBeforeEnd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u041f\u0430\u0440\u0442\u0438\u043a\u043b-\u044d\u0444\u0444\u0435\u043a\u0442, \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u0441\u0442\u043e\u043f\u043a\u0438, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0441\u0447\u0435\u0437\u043b\u0430. \u0426\u0432\u0435\u0442 \u0447\u0430\u0441\u0442\u0438\u0446 (ParticleSystem.MainModule.startColor) \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0446\u0432\u0435\u0442 \u0438\u0441\u0447\u0435\u0437\u043d\u0443\u0432\u0448\u0435\u0439 \u0441\u0442\u043e\u043f\u043a\u0438 \u2014 \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0438\u0437 \u0442\u043e\u0433\u043e \u0436\u0435 material palette.GetMaterial(color), \u0447\u0442\u043e \u0438 \u0443 \u0441\u0430\u043c\u0438\u0445 \u0444\u0438\u0448\u0435\u043a."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"destroyStackEffectPrefab","t":4,"rt":$n[2].ParticleSystem,"sn":"destroyStackEffectPrefab"},{"at":[new UnityEngine.TooltipAttribute("\u041f\u043e\u0432\u043e\u0440\u043e\u0442 (Euler), \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u043f\u0430\u0432\u043d\u044f\u0442\u0441\u044f \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0435 \u0441\u0442\u043e\u043f\u043a\u0438 \u043d\u0430 \u043f\u043e\u043b\u0435. Instantiate \u0441\u0442\u0430\u0432\u0438\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0442 \u043f\u043e\u0432\u043e\u0440\u043e\u0442, \u0430 \u043d\u0435 \u043f\u043e\u0432\u043e\u0440\u043e\u0442 \u0438\u0437 \u0441\u0430\u043c\u043e\u0433\u043e stackPrefab \u2014 \u0431\u0435\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u0441\u0442\u043e\u043f\u043a\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043f\u0430\u0432\u043d\u0438\u043b\u0438\u0441\u044c \u0441 \u043d\u0443\u043b\u0435\u0432\u044b\u043c \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u043c \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0441\u044f\u043c (Quaternion.identity), \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043c\u0430\u043a\u0435\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialStackRotation","t":4,"rt":$n[2].Vector3,"sn":"initialStackRotation"},{"at":[new UnityEngine.HeaderAttribute("\u0414\u0443\u0433\u0430 \u043f\u0435\u0440\u0435\u043b\u0451\u0442\u0430 \u0444\u0438\u0448\u043a\u0438"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpEasing","t":4,"rt":pc.AnimationCurve,"sn":"jumpEasing"},{"at":[new UnityEngine.TooltipAttribute("\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0430\u0440\u0442\u0430\u043c\u0438 \u043f\u0435\u0440\u0435\u043b\u0451\u0442\u0430 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u0444\u0438\u0448\u0435\u043a \u0432 \u043e\u0434\u043d\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u0435 \u2014 \u043e\u043d\u0438 \u043b\u0435\u0442\u044f\u0442 \u043d\u0435 \u0440\u0430\u0437\u043e\u043c, \u0430 \u0432\u043d\u0430\u0445\u043b\u0451\u0441\u0442 \u0434\u0440\u0443\u0433 \u0437\u0430 \u0434\u0440\u0443\u0433\u043e\u043c."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpStartStagger","t":4,"rt":$n[0].Single,"sn":"jumpStartStagger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0434\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u043a \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u0437\u0435\u043c\u043b\u0435\u043d\u0438\u044f \u0434\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0441\u0442\u043e\u043f\u043a\u0438-\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u0440\u044b\u0432\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442, \u043a\u043e\u0433\u0434\u0430 AppendPiece \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0432\u043e\u0440\u043e\u0442 \u0444\u0438\u0448\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landingSettleDuration","t":4,"rt":$n[0].Single,"sn":"landingSettleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0435\u0434\u0435\u0439"),new UnityEngine.TooltipAttribute("\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0438\u0440\u043e\u0432\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 (\u043f\u043e XZ), \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u0432\u0435 \u044f\u0447\u0435\u0439\u043a\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0441\u043e\u0441\u0435\u0434\u044f\u043c\u0438. \u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0427\u0423\u0422\u042c \u0431\u043e\u043b\u044c\u0448\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0448\u0430\u0433\u0430 \u0433\u0435\u043a\u0441-\u0441\u0435\u0442\u043a\u0438 (\u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0439 \u044f\u0447\u0435\u0439\u043a\u0438), \u043d\u043e \u0437\u0430\u043c\u0435\u0442\u043d\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043e \u042f\u0427\u0415\u0419\u041a\u0418 \u0427\u0415\u0420\u0415\u0417 \u041e\u0414\u041d\u0423 \u2014 \u0442\u043e\u0433\u0434\u0430 \u043a\u0430\u0436\u0434\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0440\u043e\u0432\u043d\u043e \u0441\u0432\u043e\u0438 6 \u0441\u043e\u0441\u0435\u0434\u0435\u0439. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ~0.45 \u043f\u0440\u0438 \u0448\u0430\u0433\u0435 \u0441\u0435\u0442\u043a\u0438 ~0.35. \u0421\u043e\u0441\u0435\u0434\u0435\u0439 \u0438\u0449\u0435\u043c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044e, \u0430 \u043d\u0435 \u0447\u0435\u0440\u0435\u0437 \u043e\u0441\u0435\u0432\u044b\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0441 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435\u043c: \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0432\u043e\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u0435 \u0434\u0430\u0451\u0442 \u0432 \u0431\u0438\u043b\u0434\u0435 (IL2CPP) \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 (Mono) \u0420\u0410\u0417\u041d\u042b\u0419 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043e \u0443 \u043a\u0440\u0430\u0439\u043d\u0438\u0445 \u044f\u0447\u0435\u0435\u043a \u0441\u043e\u0441\u0435\u0434 \u043c\u043e\u0433 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u043d\u0435 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b; \u043f\u043e\u0440\u043e\u0433 \u043f\u043e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044e \u043a \u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d \u2014 \u0441\u043e\u0441\u0435\u0434 \u043b\u0438\u0431\u043e \u044f\u0432\u043d\u043e \u0432\u043d\u0443\u0442\u0440\u0438, \u043b\u0438\u0431\u043e \u044f\u0432\u043d\u043e \u0441\u043d\u0430\u0440\u0443\u0436\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"neighborMaxDistance","t":4,"rt":$n[0].Single,"sn":"neighborMaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"palette","t":4,"rt":HexColorPalette,"sn":"palette"},{"at":[new UnityEngine.TooltipAttribute("\u041c\u0438\u0440\u043e\u0432\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c Y, \u043d\u0438\u0436\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0448\u0435\u0439\u0434\u0435\u0440 Game/AlwaysOnTop \u0441\u0430\u043c \u043e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 (clip) \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u0444\u0438\u0448\u043a\u0438 \u2014 \u0441\u043c. AlwaysOnTop.shader/_ClipY. \u041f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u044f\u0441\u044c \u043f\u043e\u0434 \u0434\u043e\u0441\u043a\u0443, \u0444\u0438\u0448\u043a\u0430 \u0443\u0445\u043e\u0434\u0438\u0442 \u043d\u0438\u0436\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0438 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0451\u0442 \u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u0432\u043c\u0435\u0441\u0442\u043e \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f Renderer."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieceClipPlaneY","t":4,"rt":$n[0].Single,"sn":"pieceClipPlaneY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"piecePrefab","t":4,"rt":HexPieceView,"sn":"piecePrefab"},{"a":1,"n":"reactionWaveCounter","t":4,"rt":$n[0].Int32,"sn":"reactionWaveCounter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0440\u0435\u043c\u044f, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u0442\u043e\u043f\u043a\u0430 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0438\u0437 \u0434\u043e sinkTargetY \u2014 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e\u0435 \u0438 \u043f\u043b\u0430\u0432\u043d\u043e\u0435, \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0435 \u0441 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u043f\u043b\u044e\u0449\u0438\u0432\u0430\u043d\u0438\u044f \u0444\u0438\u0448\u0435\u043a."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sinkDuration","t":4,"rt":$n[0].Single,"sn":"sinkDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u0430\u044f \u043c\u0438\u0440\u043e\u0432\u0430\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430 Y, \u0434\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u0434 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435\u043c (\u043d\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sinkTargetY","t":4,"rt":$n[0].Single,"sn":"sinkTargetY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u043b\u0451\u0442/\u0438\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0445\u043b\u043e\u043f\u043d\u0443\u0432\u0448\u0435\u0439\u0441\u044f \u0441\u0442\u043e\u043f\u043a\u0438 \u0432 \u043e\u0434\u043d\u043e\u0439 \u0446\u0435\u043f\u043e\u0447\u043a\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedMultiplierPerClear","t":4,"rt":$n[0].Single,"sn":"speedMultiplierPerClear","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0418\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u0441\u0445\u043b\u043e\u043f\u043d\u0443\u0432\u0448\u0435\u0439\u0441\u044f \u0441\u0442\u043e\u043f\u043a\u0438"),new UnityEngine.TooltipAttribute("\u0412\u0440\u0435\u043c\u044f, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0442\u0440\u0438 \u0432\u0435\u0440\u0445\u043d\u0438\u0435 \u0444\u0438\u0448\u043a\u0438 \u0441\u043f\u043b\u044e\u0449\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e Y/Z \u2014 \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u0438 \u0440\u0435\u0437\u043a\u043e\u0435, \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u043d\u0438\u044f \u0432\u043d\u0438\u0437 (\u0441\u043c. sinkDuration)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"squashDuration","t":4,"rt":$n[0].Single,"sn":"squashDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u043e\u043f\u043e\u043a \u043d\u0430 \u043f\u043e\u043b\u0435"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackPrefab","t":4,"rt":HexStack,"sn":"stackPrefab"},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043f\u043e Y/Z \u0434\u043b\u044f \u0442\u0440\u0451\u0445 \u0432\u0435\u0440\u0445\u043d\u0438\u0445 \u0444\u0438\u0448\u0435\u043a \u0441\u0442\u043e\u043f\u043a\u0438 \u043f\u0440\u0438 \u0438\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u0438, \u043f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443: \u0441\u0430\u043c\u0430\u044f \u0432\u0435\u0440\u0445\u043d\u044f\u044f, \u0432\u0442\u043e\u0440\u0430\u044f \u0441\u0432\u0435\u0440\u0445\u0443, \u0442\u0440\u0435\u0442\u044c\u044f \u0441\u0432\u0435\u0440\u0445\u0443 (\u0432 Hierarchy \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430 \u044d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u043e \u0441\u0447\u0451\u0442\u0443 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u0442\u043e\u043f\u043a\u0438 \u2014 \u0441\u0430\u043c\u044b\u0435 \u043d\u0438\u0436\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u0447\u043a\u0438 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u0435\u0442\u0435\u0439)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"topPieceSquashScaleYZ","t":4,"rt":$n[0].Array.type(System.Single),"sn":"topPieceSquashScaleYZ"},{"a":2,"n":"OnBoardCleared","t":2,"ad":{"a":2,"n":"add_OnBoardCleared","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBoardCleared","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBoardCleared","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBoardCleared","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnStackPlaced","t":2,"ad":{"a":2,"n":"add_OnStackPlaced","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnStackPlaced","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnStackPlaced","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnStackPlaced","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*BoardManager end.*/

    /*CellHighlightConfig start.*/
    $m("CellHighlightConfig", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "CellHighlightConfig", menuName: "Game/Cell Highlight Config"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HighlightColor","t":16,"rt":$n[2].Color,"g":{"a":2,"n":"get_HighlightColor","t":8,"rt":$n[2].Color,"fg":"HighlightColor"},"fn":"HighlightColor"},{"a":2,"n":"HighlightPositionY","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HighlightPositionY","t":8,"rt":$n[0].Single,"fg":"HighlightPositionY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"HighlightPositionY"},{"a":2,"n":"HighlightScaleX","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HighlightScaleX","t":8,"rt":$n[0].Single,"fg":"HighlightScaleX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"HighlightScaleX"},{"a":2,"n":"NormalColor","t":16,"rt":$n[2].Color,"g":{"a":2,"n":"get_NormalColor","t":8,"rt":$n[2].Color,"fg":"NormalColor"},"fn":"NormalColor"},{"a":2,"n":"TransitionDuration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_TransitionDuration","t":8,"rt":$n[0].Single,"fg":"TransitionDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"TransitionDuration"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightColor","t":4,"rt":$n[2].Color,"sn":"highlightColor"},{"at":[new UnityEngine.TooltipAttribute("\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043f\u043e Y, \u0434\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightPositionY","t":4,"rt":$n[0].Single,"sn":"highlightPositionY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u041c\u0430\u0441\u0448\u0442\u0430\u0431 \u0438 \u043f\u043e\u0434\u044a\u0451\u043c"),new UnityEngine.TooltipAttribute("\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043f\u043e X, \u0434\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0443\u0432\u0430\u0435\u0442\u0441\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightScaleX","t":4,"rt":$n[0].Single,"sn":"highlightScaleX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0426\u0432\u0435\u0442"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"normalColor","t":4,"rt":$n[2].Color,"sn":"normalColor"},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0440\u0435\u043c\u044f \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u044b\u0447\u043d\u044b\u043c \u0438 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transitionDuration","t":4,"rt":$n[0].Single,"sn":"transitionDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CellHighlightConfig end.*/

    /*HexColor start.*/
    $m("HexColor", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":HexColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Cyan","is":true,"t":4,"rt":HexColor,"sn":"Cyan","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":HexColor,"sn":"Green","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":HexColor,"sn":"Red","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"SoftBlue","is":true,"t":4,"rt":HexColor,"sn":"SoftBlue","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Violet","is":true,"t":4,"rt":HexColor,"sn":"Violet","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"White","is":true,"t":4,"rt":HexColor,"sn":"White","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":HexColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexColor end.*/

    /*HexColorPalette start.*/
    $m("HexColorPalette", function () { return {"nested":[HexColorPalette.Entry],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "HexColorPalette", menuName: "Game/Hex Color Palette"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetMaterial","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0}],"sn":"GetMaterial","rt":$n[2].Material,"p":[HexColor]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"entries","t":4,"rt":System.Array.type(HexColorPalette.Entry),"sn":"entries"}]}; }, $n);
    /*HexColorPalette end.*/

    /*HexColorPalette+Entry start.*/
    $m("HexColorPalette.Entry", function () { return {"td":HexColorPalette,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":HexColor,"sn":"color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"material","t":4,"rt":$n[2].Material,"sn":"material"}]}; }, $n);
    /*HexColorPalette+Entry end.*/

    /*HexPieceView start.*/
    $m("HexPieceView", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.MeshRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetAlwaysOnTop","t":8,"pi":[{"n":"alwaysOnTop","pt":$n[0].Boolean,"ps":0}],"sn":"SetAlwaysOnTop","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetColor","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0},{"n":"palette","pt":HexColorPalette,"ps":1}],"sn":"SetColor","rt":$n[0].Void,"p":[HexColor,HexColorPalette]},{"a":2,"n":"SetGlow","t":8,"pi":[{"n":"multiplier","pt":$n[0].Single,"ps":0}],"sn":"SetGlow","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetNeedsAlwaysOnTopMaterial","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SetNeedsAlwaysOnTopMaterial","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"Color","t":16,"rt":HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"s":{"a":1,"n":"set_Color","t":8,"p":[HexColor],"rt":$n[0].Void,"fs":"Color"},"fn":"Color"},{"a":1,"n":"AlwaysOnTopRenderQueue","is":true,"t":4,"rt":$n[0].Int32,"sn":"AlwaysOnTopRenderQueue","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ColorPropertyId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorPropertyId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"NormalRenderQueue","is":true,"t":4,"rt":$n[0].Int32,"sn":"NormalRenderQueue","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ZTestPropertyId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ZTestPropertyId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"baseColor","t":4,"rt":$n[2].Color,"sn":"baseColor"},{"a":1,"n":"meshRenderer","t":4,"rt":$n[2].MeshRenderer,"sn":"meshRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"needsAlwaysOnTopMaterial","t":4,"rt":$n[0].Boolean,"sn":"needsAlwaysOnTopMaterial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"propertyBlock","t":4,"rt":$n[2].MaterialPropertyBlock,"sn":"propertyBlock"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexPieceView end.*/

    /*HexStack start.*/
    $m("HexStack", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.BoxCollider)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AppendPiece","t":8,"pi":[{"n":"piece","pt":HexPieceView,"ps":0}],"sn":"AppendPiece","rt":$n[0].Void,"p":[HexPieceView]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BuildFromColors","t":8,"pi":[{"n":"colors","pt":$n[3].IReadOnlyList$1(HexColor),"ps":0}],"sn":"BuildFromColors","rt":$n[0].Void,"p":[$n[3].IReadOnlyList$1(HexColor)]},{"a":1,"n":"GetLocalPositionForIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetLocalPositionForIndex","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetNextSlotWorldPosition","t":8,"pi":[{"n":"reserved","dv":0,"o":true,"pt":$n[0].Int32,"ps":0}],"sn":"GetNextSlotWorldPosition","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":1,"n":"GetTopPieceIndex","t":8,"sn":"GetTopPieceIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetTopWorldPosition","t":8,"sn":"GetTopWorldPosition","rt":$n[2].Vector3},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"colors","pt":$n[3].IReadOnlyList$1(HexColor),"ps":0},{"n":"prefab","pt":HexPieceView,"ps":1},{"n":"colorPalette","pt":HexColorPalette,"ps":2},{"n":"needsAlwaysOnTopMaterial","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[3].IReadOnlyList$1(HexColor),HexPieceView,HexColorPalette,$n[0].Boolean]},{"a":2,"n":"PopTopPiece","t":8,"sn":"PopTopPiece","rt":HexPieceView},{"a":2,"n":"SetAlwaysOnTop","t":8,"pi":[{"n":"alwaysOnTop","pt":$n[0].Boolean,"ps":0}],"sn":"SetAlwaysOnTop","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetGlow","t":8,"pi":[{"n":"multiplier","pt":$n[0].Single,"ps":0}],"sn":"SetGlow","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetLayer","t":8,"pi":[{"n":"layer","pt":$n[0].Int32,"ps":0}],"sn":"SetLayer","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"SpawnPieceAtTop","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0}],"sn":"SpawnPieceAtTop","rt":$n[0].Void,"p":[HexColor]},{"a":1,"n":"UpdateHitCollider","t":8,"sn":"UpdateHitCollider","rt":$n[0].Void},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"CurrentCell","t":16,"rt":BoardCell,"g":{"a":2,"n":"get_CurrentCell","t":8,"rt":BoardCell,"fg":"CurrentCell"},"s":{"a":2,"n":"set_CurrentCell","t":8,"p":[BoardCell],"rt":$n[0].Void,"fs":"CurrentCell"},"fn":"CurrentCell"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"IsMonochrome","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsMonochrome","t":8,"rt":$n[0].Boolean,"fg":"IsMonochrome","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsMonochrome"},{"a":2,"n":"TopColor","t":16,"rt":HexColor,"g":{"a":2,"n":"get_TopColor","t":8,"rt":HexColor,"fg":"TopColor","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"fn":"TopColor"},{"a":2,"n":"InReaction","t":4,"rt":$n[0].Boolean,"sn":"InReaction","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hitCollider","t":4,"rt":$n[2].BoxCollider,"sn":"hitCollider"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u0442\u043e\u043f\u043a\u0430, \u0437\u0430\u0434\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0441\u0446\u0435\u043d\u0435 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)"),new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u0441\u0442\u043e\u043f\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0430 \u0432 \u0441\u0446\u0435\u043d\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0434\u043d\u0430 \u0438\u0437 \u0442\u0440\u0451\u0445 \u0441\u0442\u043e\u043f\u043e\u043a \u043b\u043e\u0442\u043a\u0430), \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0435\u0451 \u0446\u0432\u0435\u0442\u0430 \u0441\u043d\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445 \u2014 \u0444\u0438\u0448\u043a\u0438 \u0437\u0430\u0441\u043f\u0430\u0432\u043d\u044f\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialColors","t":4,"rt":$n[3].List$1(HexColor),"sn":"initialColors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"palette","t":4,"rt":HexColorPalette,"sn":"palette"},{"at":[new UnityEngine.TooltipAttribute("\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0444\u0438\u0448\u043a\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perPieceOffset","t":4,"rt":$n[2].Vector3,"sn":"perPieceOffset"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043f\u0430\u0432\u043d \u0444\u0438\u0448\u0435\u043a"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"piecePrefab","t":4,"rt":HexPieceView,"sn":"piecePrefab"},{"a":1,"n":"pieces","t":4,"rt":$n[3].List$1(HexPieceView),"sn":"pieces","ro":true},{"a":1,"n":"piecesNeedAlwaysOnTopMaterial","t":4,"rt":$n[0].Boolean,"sn":"piecesNeedAlwaysOnTopMaterial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<CurrentCell>k__BackingField","t":4,"rt":BoardCell,"sn":"CurrentCell"}]}; }, $n);
    /*HexStack end.*/

    /*StackDragHandler start.*/
    $m("StackDragHandler", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(HexStack)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseDrag","t":8,"sn":"OnMouseDrag","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":1,"n":"RaycastCellUnderPointer","t":8,"sn":"RaycastCellUnderPointer","rt":BoardCell},{"a":1,"n":"ReturnToOrigin","t":8,"sn":"ReturnToOrigin","rt":$n[1].IEnumerator},{"a":2,"n":"SetBoard","t":8,"pi":[{"n":"boardManager","pt":BoardManager,"ps":0}],"sn":"SetBoard","rt":$n[0].Void,"p":[BoardManager]},{"a":1,"n":"SetHighlightedCell","t":8,"pi":[{"n":"cell","pt":BoardCell,"ps":0}],"sn":"SetHighlightedCell","rt":$n[0].Void,"p":[BoardCell]},{"a":1,"n":"UpdateHighlightedCell","t":8,"sn":"UpdateHighlightedCell","rt":$n[0].Void},{"a":2,"n":"IsInTray","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsInTray","t":8,"rt":$n[0].Boolean,"fg":"IsInTray","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInTray"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragHeight","t":4,"rt":$n[0].Single,"sn":"dragHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragPlane","t":4,"rt":$n[2].Plane,"sn":"dragPlane"},{"a":1,"n":"dragStartPosition","t":4,"rt":$n[2].Vector3,"sn":"dragStartPosition"},{"a":1,"n":"dragging","t":4,"rt":$n[0].Boolean,"sn":"dragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"grabOffset","t":4,"rt":$n[2].Vector3,"sn":"grabOffset"},{"a":1,"n":"hasMoved","t":4,"rt":$n[0].Boolean,"sn":"hasMoved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"highlightedCell","t":4,"rt":BoardCell,"sn":"highlightedCell"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minDragDistanceToCountAsMoved","t":4,"rt":$n[0].Single,"sn":"minDragDistanceToCountAsMoved","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalPosition","t":4,"rt":$n[2].Vector3,"sn":"originalPosition"},{"a":1,"n":"ownCollider","t":4,"rt":$n[2].Collider,"sn":"ownCollider"},{"a":1,"n":"pointerWorldPoint","t":4,"rt":$n[2].Vector3,"sn":"pointerWorldPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"returnDuration","t":4,"rt":$n[0].Single,"sn":"returnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"stack","t":4,"rt":HexStack,"sn":"stack"},{"a":2,"n":"OnAnyStackGrabbed","is":true,"t":2,"ad":{"a":2,"n":"add_OnAnyStackGrabbed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAnyStackGrabbed","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAnyStackGrabbed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAnyStackGrabbed","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnAnyStackMoved","is":true,"t":2,"ad":{"a":2,"n":"add_OnAnyStackMoved","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAnyStackMoved","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAnyStackMoved","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAnyStackMoved","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnAnyStackReleased","is":true,"t":2,"ad":{"a":2,"n":"add_OnAnyStackReleased","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAnyStackReleased","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAnyStackReleased","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAnyStackReleased","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*StackDragHandler end.*/

    /*TrayRefillManager start.*/
    $m("TrayRefillManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AllSlotsUsed","t":8,"sn":"AllSlotsUsed","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"AnimateSpawn","t":8,"pi":[{"n":"stackTransform","pt":$n[2].Transform,"ps":0},{"n":"targetPosition","pt":$n[2].Vector3,"ps":1},{"n":"targetScale","pt":$n[2].Vector3,"ps":2}],"sn":"AnimateSpawn","rt":$n[1].IEnumerator,"p":[$n[2].Transform,$n[2].Vector3,$n[2].Vector3]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CaptureTraySlots","t":8,"sn":"CaptureTraySlots","rt":$n[0].Void},{"a":1,"n":"GenerateRandomColors","t":8,"sn":"GenerateRandomColors","rt":$n[3].List$1(HexColor)},{"a":1,"n":"HandleStackPlaced","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"HandleStackPlaced","rt":$n[0].Void,"p":[HexStack]},{"a":1,"n":"HandleTimerStopped","t":8,"sn":"HandleTimerStopped","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"RefillTray","t":8,"sn":"RefillTray","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxPieces","t":4,"rt":$n[0].Int32,"sn":"maxPieces","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u043e\u043f\u043a\u0438"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minPieces","t":4,"rt":$n[0].Int32,"sn":"minPieces","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pieceColorValues","t":4,"rt":System.Array.type(HexColor),"sn":"pieceColorValues","ro":true},{"a":1,"n":"slotUsed","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"slotUsed"},{"at":[new UnityEngine.HeaderAttribute("\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u2014 \u043f\u043e\u0434\u0441\u043a\u043e\u043a + \u0440\u0430\u0437\u043c\u0435\u0440"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnAnimDuration","t":4,"rt":$n[0].Single,"sn":"spawnAnimDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b\u0441\u043e\u043a\u043e \u0441\u0442\u043e\u043f\u043a\u0430 \u043f\u043e\u0434\u043f\u0440\u044b\u0433\u0438\u0432\u0430\u0435\u0442 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f (\u043c\u0438\u0440\u043e\u0432\u044b\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnBounceHeight","t":4,"rt":$n[0].Single,"sn":"spawnBounceHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u041a\u0440\u0438\u0432\u0430\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430 0..1 \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043f\u0435\u0440\u0435\u043b\u0451\u0442\u043e\u043c (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 \u0434\u043e ~1.15 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043a 1) \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u043b\u0451\u0433\u043a\u043e\u0433\u043e '\u043f\u0440\u0443\u0436\u0438\u043d\u043d\u043e\u0433\u043e' \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnScaleCurve","t":4,"rt":pc.AnimationCurve,"sn":"spawnScaleCurve"},{"at":[new UnityEngine.TooltipAttribute("\u041e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0444\u0438\u043b\u043b, \u043a\u043e\u0433\u0434\u0430 \u0438\u0433\u0440\u0430 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f (\u043e\u0431\u044b\u0447\u043d\u043e \u2014 \u0442\u043e\u0442 \u0436\u0435 GameTimerUI, \u0447\u0442\u043e \u0438 \u0443 GameFlowController) \u2014 \u0438\u043d\u0430\u0447\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0437\u0430\u0441\u043f\u0430\u0432\u043d\u0435\u043d\u043d\u044b\u0435, \u0435\u0449\u0451 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u043e\u043f\u043a\u0438 \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0431\u044b \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0435\u043c\u044b\u043c\u0438 \u043f\u043e\u0432\u0435\u0440\u0445 \u043f\u044d\u043a\u0448\u043e\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timer","t":4,"rt":GameTimerUI,"sn":"timer"},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0441\u0435 \u0441\u0442\u043e\u043f\u043a\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043b\u043e\u0442\u043a\u0430 \u2014 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 '\u0432\u0441\u0435 \u0438\u0437\u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432\u0430\u043d\u044b'. \u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0444\u0438\u043b\u043b\u0430 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u0430\u043c \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u043d\u043e\u0432\u044b\u0435 \u0437\u0430\u0441\u043f\u0430\u0432\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u043e\u043f\u043a\u0438, \u0442\u0430\u043a \u0447\u0442\u043e \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438 \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trayHandlers","t":4,"rt":System.Array.type(StackDragHandler),"sn":"trayHandlers"},{"a":1,"n":"trayPositions","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"trayPositions"},{"a":1,"n":"trayRotations","t":4,"rt":System.Array.type(UnityEngine.Quaternion),"sn":"trayRotations"},{"a":1,"n":"trayScales","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"trayScales"},{"a":1,"n":"trayStacks","t":4,"rt":System.Array.type(HexStack),"sn":"trayStacks"}]}; }, $n);
    /*TrayRefillManager end.*/

    /*ScreenScaler start.*/
    $m("ScreenScaler", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Resize","t":8,"sn":"Resize","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"mainCamera","t":4,"rt":$n[2].Camera,"sn":"mainCamera"}]}; }, $n);
    /*ScreenScaler end.*/

    /*CopyRectSize start.*/
    $m("CopyRectSize", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentBG","t":4,"rt":$n[2].RectTransform,"sn":"currentBG"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sourceBG","t":4,"rt":$n[2].RectTransform,"sn":"sourceBG"}]}; }, $n);
    /*CopyRectSize end.*/

    /*FloatingHoverEffect start.*/
    $m("FloatingHoverEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("\u0410\u043c\u043f\u043b\u0438\u0442\u0443\u0434\u0430 \u043f\u0430\u0440\u0435\u043d\u0438\u044f \u043f\u043e Y, \u0432 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 RectTransform."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"amplitude","t":4,"rt":$n[0].Single,"sn":"amplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"basePosition","t":4,"rt":$n[2].Vector2,"sn":"basePosition"},{"a":1,"n":"baseRotationZ","t":4,"rt":$n[0].Single,"sn":"baseRotationZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0427\u0430\u0441\u0442\u043e\u0442\u0430 \u043f\u0430\u0440\u0435\u043d\u0438\u044f \u2014 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u043d\u044b\u0445 \u0446\u0438\u043a\u043b\u043e\u0432 \u0432\u0432\u0435\u0440\u0445-\u0432\u043d\u0438\u0437 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frequency","t":4,"rt":$n[0].Single,"sn":"frequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0410\u043c\u043f\u043b\u0438\u0442\u0443\u0434\u0430 \u043b\u0451\u0433\u043a\u043e\u0433\u043e \u043f\u043e\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u043f\u043e Z (\u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445) \u2014 \u0438\u0434\u0451\u0442 \u0432\u0434\u0432\u043e\u0435 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435 \u0441\u0430\u043c\u043e\u0433\u043e \u043f\u0430\u0440\u0435\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u0441 \u043d\u0438\u043c \u0432 \u0442\u0430\u043a\u0442 \u0438 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u043d\u043e."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationAmplitudeDegrees","t":4,"rt":$n[0].Single,"sn":"rotationAmplitudeDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f RectTransform \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u0438\u0441\u0438\u0442 \u0441\u043a\u0440\u0438\u043f\u0442."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[2].RectTransform,"sn":"target"}]}; }, $n);
    /*FloatingHoverEffect end.*/

    /*GameTimerUI start.*/
    $m("GameTimerUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StartTimer","t":8,"sn":"StartTimer","rt":$n[0].Void},{"a":2,"n":"StopTimer","t":8,"sn":"StopTimer","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Progress01","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Progress01","t":8,"rt":$n[0].Single,"fg":"Progress01","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Progress01"},{"a":2,"n":"RemainingSeconds","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_RemainingSeconds","t":8,"rt":$n[0].Single,"fg":"RemainingSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"RemainingSeconds"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockHand","t":4,"rt":$n[2].RectTransform,"sn":"clockHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"elapsed","t":4,"rt":$n[0].Single,"sn":"elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endAngleZ","t":4,"rt":$n[0].Single,"sn":"endAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043b\u0435\u0432\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 (\u0443\u0433\u043e\u043b \u043f\u043e Z \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f) \u043e\u0442 startAngleZ \u0434\u043e endAngleZ."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startAngleZ","t":4,"rt":$n[0].Single,"sn":"startAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0414\u043e\u043b\u044f \u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0433\u043e\u0441\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u043e\u0441\u043b\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435 (\u043f\u043e \u0422\u0417 \u2014 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0442\u0440\u0435\u0442\u044c)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningRemainingFraction","t":4,"rt":$n[0].Single,"sn":"warningRemainingFraction","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"warningTriggered","t":4,"rt":$n[0].Boolean,"sn":"warningTriggered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnTimerExpired","t":2,"ad":{"a":2,"n":"add_OnTimerExpired","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTimerExpired","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTimerExpired","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTimerExpired","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnTimerStopped","t":2,"ad":{"a":2,"n":"add_OnTimerStopped","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTimerStopped","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTimerStopped","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTimerStopped","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnWarningZoneEntered","t":2,"ad":{"a":2,"n":"add_OnWarningZoneEntered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWarningZoneEntered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWarningZoneEntered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWarningZoneEntered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*GameTimerUI end.*/

    /*PackshotController start.*/
    $m("PackshotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateReveal","t":8,"sn":"AnimateReveal","rt":$n[1].IEnumerator},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[0].Void},{"a":1,"n":"GrowMask","t":8,"sn":"GrowMask","rt":$n[1].IEnumerator},{"a":1,"n":"PulseIn","t":8,"pi":[{"n":"rect","pt":$n[2].RectTransform,"ps":0}],"sn":"PulseIn","rt":$n[1].IEnumerator,"p":[$n[2].RectTransform]},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0435\u0432\u0438\u0434\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d \u043f\u044d\u043a\u0448\u043e\u0442\u0430 \u2014 \u043b\u044e\u0431\u043e\u0439 \u0442\u0430\u043f \u0432\u0435\u0434\u0451\u0442 \u0432 \u0441\u0442\u043e\u0440."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fullscreenTapButton","t":4,"rt":$n[4].Button,"sn":"fullscreenTapButton"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435 Header \u0438 \u043a\u043d\u043e\u043f\u043a\u0438 Play (\u043f\u043e\u0441\u043b\u0435 \u043c\u0430\u0441\u043a\u0438, \u043f\u0443\u043b\u044c\u0441\u0430\u0446\u0438\u0435\u0439)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"headerRect","t":4,"rt":$n[2].RectTransform,"sn":"headerRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maskGrowCurve","t":4,"rt":pc.AnimationCurve,"sn":"maskGrowCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maskGrowDuration","t":4,"rt":$n[0].Single,"sn":"maskGrowDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u0438\u0435 \u043c\u0430\u0441\u043a\u0438 (\u0441\u043c. GameObject \"Mask\")"),new UnityEngine.TooltipAttribute("\u0420\u0430\u0441\u0442\u0451\u0442 \u043e\u0442 0 \u0434\u043e maskTargetSize \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u0438 \u043f\u043e\u043a\u0430\u0437\u0435 \u043f\u044d\u043a\u0448\u043e\u0442\u0430 \u2014 \u0438\u043c\u0435\u043d\u043d\u043e Width/Height (RectTransform.sizeDelta), \u0430 \u043d\u0435 localScale, \u0447\u0442\u043e\u0431\u044b \u043c\u0430\u0441\u043a\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u043b\u0430\u0441\u044c \u043f\u043e \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0443, \u0430 \u043d\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043b\u0430 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maskRect","t":4,"rt":$n[2].RectTransform,"sn":"maskRect"},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0435\u043b\u0435\u0432\u044b\u0435 Width/Height \u043c\u0430\u0441\u043a\u0438 (sizeDelta) \u0432 \u043a\u043e\u043d\u0446\u0435 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u0438\u044f \u2014 \u0441 \u0437\u0430\u043f\u0430\u0441\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u044d\u043a\u0440\u0430\u043d\u0430, \u0447\u0442\u043e\u0431\u044b \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u044c \u043a\u0440\u0430\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f/\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maskTargetSize","t":4,"rt":$n[0].Single,"sn":"maskTargetSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRoot","t":4,"rt":$n[2].GameObject,"sn":"panelRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playButtonRect","t":4,"rt":$n[2].RectTransform,"sn":"playButtonRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNowButton","t":4,"rt":$n[4].Button,"sn":"playNowButton"},{"at":[new UnityEngine.TooltipAttribute("\u041a\u0440\u0438\u0432\u0430\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430 0..1 \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043f\u0435\u0440\u0435\u043b\u0451\u0442\u043e\u043c (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 \u0434\u043e ~1.15 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043a 1) \u0434\u043b\u044f \u043f\u0440\u0443\u0436\u0438\u043d\u043d\u043e\u0433\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u2014 \u0442\u0430 \u0436\u0435 \u0438\u0434\u0435\u044f, \u0447\u0442\u043e \u0438 \u0432 TrayRefillManager.spawnScaleCurve."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealPulseCurve","t":4,"rt":pc.AnimationCurve,"sn":"revealPulseCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealPulseDuration","t":4,"rt":$n[0].Single,"sn":"revealPulseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e: \u0430\u043d\u0438\u043c\u0430\u0442\u043e\u0440 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u044d\u043a\u0448\u043e\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transitionAnimator","t":4,"rt":$n[2].Animator,"sn":"transitionAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transitionTrigger","t":4,"rt":$n[0].String,"sn":"transitionTrigger"}]}; }, $n);
    /*PackshotController end.*/

    /*TimerSliderUI start.*/
    $m("TimerSliderUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleTimerStopped","t":8,"sn":"HandleTimerStopped","rt":$n[0].Void},{"a":1,"n":"HandleWarningZoneEntered","t":8,"sn":"HandleWarningZoneEntered","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"PlayAlarmThenShowPopup","t":8,"sn":"PlayAlarmThenShowPopup","rt":$n[1].IEnumerator},{"a":1,"n":"ShowPopup","t":8,"sn":"ShowPopup","rt":$n[1].IEnumerator},{"a":1,"n":"BlurSizePropertyId","is":true,"t":4,"rt":$n[0].Int32,"sn":"BlurSizePropertyId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmShakeAmplitudeDegrees","t":4,"rt":$n[0].Single,"sn":"alarmShakeAmplitudeDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u0447\u0430\u0441\u044b \u0440\u0435\u0437\u043a\u043e \u0442\u0440\u044f\u0441\u0443\u0442\u0441\u044f/\u0432\u0438\u0431\u0440\u0438\u0440\u0443\u044e\u0442, \u043a\u0430\u043a \u0437\u0432\u043e\u043d\u044f\u0449\u0438\u0439 \u0431\u0443\u0434\u0438\u043b\u044c\u043d\u0438\u043a, \u0434\u043e \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmShakeDuration","t":4,"rt":$n[0].Single,"sn":"alarmShakeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmShakeFrequency","t":4,"rt":$n[0].Single,"sn":"alarmShakeFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0410\u043c\u043f\u043b\u0438\u0442\u0443\u0434\u0430 \u0434\u0440\u043e\u0436\u0430\u043d\u0438\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u0438 (\u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 RectTransform) \u2014 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u0451\u0442 \u044d\u0444\u0444\u0435\u043a\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u0438, \u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmShakePositionAmplitude","t":4,"rt":$n[0].Single,"sn":"alarmShakePositionAmplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0411\u0443\u0434\u0438\u043b\u044c\u043d\u0438\u043a \u043f\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0438 \u0442\u0430\u0439\u043c\u0435\u0440\u0430"),new UnityEngine.TooltipAttribute("\u0417\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u0414\u041e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043d\u0446\u0430 \u0442\u0430\u0439\u043c\u0435\u0440\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0431\u0443\u0434\u0438\u043b\u044c\u043d\u0438\u043a (0 \u2014 \u0440\u043e\u0432\u043d\u043e \u0432 \u043a\u043e\u043d\u0446\u0435). \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e \u0447\u0443\u0442\u044c \u0440\u0430\u043d\u044c\u0448\u0435, \u0430 \u043d\u0435 \u0441\u0442\u0440\u043e\u0433\u043e \u043f\u043e OnTimerExpired."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmShakeStartOffset","t":4,"rt":$n[0].Single,"sn":"alarmShakeStartOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"alarmTriggered","t":4,"rt":$n[0].Boolean,"sn":"alarmTriggered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barImage","t":4,"rt":$n[4].Image,"sn":"barImage"},{"at":[new UnityEngine.HeaderAttribute("\u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u043e\u0441\u043a\u0438 \u2014 \u0442\u0440\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0442\u043e\u0447\u043a\u0438"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barImageOutline","t":4,"rt":$n[4].Image,"sn":"barImageOutline"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u043e\u043b\u043e\u0441\u043a\u0430 (Rect Transform, \u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\u044b\u0439 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u043e\u043b\u0435 Right)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barRect","t":4,"rt":$n[2].RectTransform,"sn":"barRect"},{"a":1,"n":"clockBasePosition","t":4,"rt":$n[2].Vector3,"sn":"clockBasePosition"},{"a":1,"n":"clockBaseScale","t":4,"rt":$n[2].Vector3,"sn":"clockBaseScale"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u0443\u043b\u044c\u0441\u0430\u0446\u0438\u044f \u0438\u043a\u043e\u043d\u043a\u0438 \u0447\u0430\u0441\u043e\u0432 (\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0442\u0440\u0435\u0442\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0441\u043c. GameTimerUI.warningRemainingFraction)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockIcon","t":4,"rt":$n[2].Transform,"sn":"clockIcon"},{"a":1,"n":"clockOutlineBaseColor","t":4,"rt":$n[2].Color,"sn":"clockOutlineBaseColor"},{"at":[new UnityEngine.HeaderAttribute("\u0426\u0432\u0435\u0442 \u0432 \u0442\u0430\u043a\u0442 \u043f\u0443\u043b\u044c\u0441\u0430\u0446\u0438\u0438 (\u0442\u0435 \u0436\u0435 \u0443\u0434\u0430\u0440\u044b, \u0447\u0442\u043e \u0438 \u0443 \u0438\u043a\u043e\u043d\u043a\u0438 \u0447\u0430\u0441\u043e\u0432)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockOutlineImage","t":4,"rt":$n[4].Image,"sn":"clockOutlineImage"},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0432\u0435\u0442 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043e\u0442\u0441\u0447\u0451\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endColor","t":4,"rt":$n[2].Color,"sn":"endColor"},{"a":1,"n":"loaderBackgroundBaseColor","t":4,"rt":$n[2].Color,"sn":"loaderBackgroundBaseColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loaderBackgroundImage","t":4,"rt":$n[4].Image,"sn":"loaderBackgroundImage"},{"at":[new UnityEngine.TooltipAttribute("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 Right (\u0442\u043e \u0441\u0430\u043c\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432 \u0438\u043d\u0441\u043f\u0435\u043a\u0442\u043e\u0440\u0435 Rect Transform) \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u0442\u0441\u0447\u0451\u0442\u0430 \u2014 \u043f\u043e\u043b\u043e\u0441\u043a\u0430 \u0441\u0436\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043e\u0442 0 (\u0441\u0442\u0430\u0440\u0442) \u0434\u043e \u044d\u0442\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u043a\u043e\u043d\u0435\u0446)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxRightOffset","t":4,"rt":$n[0].Single,"sn":"maxRightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0432\u0435\u0442 \u0440\u043e\u0432\u043d\u043e \u043d\u0430 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u2014 \u043f\u043b\u0430\u0432\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0438\u0434\u0451\u0442 start -> mid (\u043f\u0435\u0440\u0432\u0430\u044f \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430) \u0438 mid -> end (\u0432\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"midColor","t":4,"rt":$n[2].Color,"sn":"midColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupAnimDuration","t":4,"rt":$n[0].Single,"sn":"popupAnimDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupBackgroundEndColor","t":4,"rt":$n[2].Color,"sn":"popupBackgroundEndColor"},{"at":[new UnityEngine.HeaderAttribute("\u0424\u043e\u043d \u043f\u043e\u043f\u0430\u043f\u0430 \u2014 \u0446\u0432\u0435\u0442 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f (\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0441\u043e \u0441\u043a\u0435\u0439\u043b\u043e\u043c/\u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u043c)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupBackgroundImage","t":4,"rt":$n[4].Image,"sn":"popupBackgroundImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupBackgroundStartColor","t":4,"rt":$n[2].Color,"sn":"popupBackgroundStartColor"},{"a":1,"n":"popupBaseScale","t":4,"rt":$n[2].Vector3,"sn":"popupBaseScale"},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e: \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u0442\u044c/\u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u043e\u043f\u0430\u043f\u0430. \u0415\u0441\u043b\u0438 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f transform \u0441\u0430\u043c\u043e\u0433\u043e popupRoot."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupContent","t":4,"rt":$n[2].Transform,"sn":"popupContent"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u043e\u043f\u0430\u043f \u043f\u043e\u0441\u043b\u0435 \u0431\u0443\u0434\u0438\u043b\u044c\u043d\u0438\u043a\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupRoot","t":4,"rt":$n[2].GameObject,"sn":"popupRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupScaleCurve","t":4,"rt":pc.AnimationCurve,"sn":"popupScaleCurve"},{"at":[new UnityEngine.TooltipAttribute("\u0423\u0433\u043e\u043b \u043f\u043e Z, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u043e\u043f\u0430\u043f \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u2014 \u0434\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043e 0 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0441\u043e \u0441\u043a\u0435\u0439\u043b\u043e\u043c, \u043f\u043e \u0442\u043e\u0439 \u0436\u0435 \u043a\u0440\u0438\u0432\u043e\u0439 popupScaleCurve \u0438 \u0437\u0430 \u0442\u043e \u0436\u0435 popupAnimDuration."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popupStartAngleZ","t":4,"rt":$n[0].Single,"sn":"popupStartAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pulseActive","t":4,"rt":$n[0].Boolean,"sn":"pulseActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0432\u0435\u0442, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0430\u0443\u0442\u043b\u0430\u0439\u043d \u0447\u0430\u0441\u043e\u0432 \u0438 \u0431\u044d\u043a\u0433\u0440\u0430\u0443\u043d\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u0443\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 \u043f\u0438\u043a\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0443\u0434\u0430\u0440\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseColor","t":4,"rt":$n[2].Color,"sn":"pulseColor"},{"at":[new UnityEngine.TooltipAttribute("\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0434\u0430\u0440\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u2014 0.4 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0443 2.5 \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043c\u0435\u0436\u0434\u0443 \u0443\u0434\u0430\u0440\u0430\u043c\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseFrequency","t":4,"rt":$n[0].Single,"sn":"pulseFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseScaleMultiplier","t":4,"rt":$n[0].Single,"sn":"pulseScaleMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0437\u043a\u0438\u0439 \u0441\u0430\u043c \u0443\u0434\u0430\u0440: 1 \u2014 \u043f\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0438\u043d\u0443\u0441\u043e\u0438\u0434\u0430; \u0447\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435, \u0442\u0435\u043c \u043a\u043e\u0440\u043e\u0447\u0435 \u0438 \u0440\u0435\u0437\u0447\u0435 \u0441\u043a\u0430\u0447\u043e\u043a \u0432\u0432\u0435\u0440\u0445 \u0438 \u0442\u0435\u043c \u0434\u043e\u043b\u044c\u0448\u0435 \u043f\u0430\u0443\u0437\u0430 \u043d\u0430 \u0431\u0430\u0437\u043e\u0432\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435 \u043c\u0435\u0436\u0434\u0443 \u0443\u0434\u0430\u0440\u0430\u043c\u0438. \u0423\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u043e \u043d\u0430 35% \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0435\u0436\u043d\u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (6 -> 3.9), \u0447\u0442\u043e\u0431\u044b \u0441\u0430\u043c \u0441\u043a\u0430\u0447\u043e\u043a \u0431\u044b\u043b \u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u043c/\u043f\u043b\u0430\u0432\u043d\u044b\u043c."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseSharpness","t":4,"rt":$n[0].Single,"sn":"pulseSharpness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0432\u0435\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043e\u0442\u0441\u0447\u0451\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startColor","t":4,"rt":$n[2].Color,"sn":"startColor"},{"at":[new UnityEngine.HeaderAttribute("\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timer","t":4,"rt":GameTimerUI,"sn":"timer"},{"a":2,"n":"OnFailPopupShown","t":2,"ad":{"a":2,"n":"add_OnFailPopupShown","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnFailPopupShown","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnFailPopupShown","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnFailPopupShown","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TimerSliderUI end.*/

    /*TimerWarningEffects start.*/
    $m("TimerWarningEffects", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleTimerStopped","t":8,"sn":"HandleTimerStopped","rt":$n[0].Void},{"a":1,"n":"HandleWarningZoneEntered","t":8,"sn":"HandleWarningZoneEntered","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ResetVisuals","t":8,"sn":"ResetVisuals","rt":$n[0].Void},{"a":1,"n":"ColorAId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorAId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ColorBId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorBId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"blinkSpeed","t":4,"rt":$n[0].Single,"sn":"blinkSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0447\u0430\u0441\u043e\u0432 \u2014 \u0440\u0430\u0441\u0442\u0451\u0442 \u0438 \u0442\u0440\u044f\u0441\u0451\u0442\u0441\u044f"),new UnityEngine.TooltipAttribute("\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 child ClockHand'\u0430 (\u041d\u0415 \u0441\u0430\u043c \u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0439 pivot \u0438\u0437 GameTimerUI, \u0438\u043d\u0430\u0447\u0435 \u043f\u043e\u0432\u043e\u0440\u043e\u0442 \u0442\u0430\u0439\u043c\u0435\u0440\u0430 \u0438 \u0442\u0440\u044f\u0441\u043a\u0430 \u0431\u0443\u0434\u0443\u0442 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432\u0430\u0442\u044c \u0437\u0430 localEulerAngles)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockHandVisual","t":4,"rt":$n[2].Transform,"sn":"clockHandVisual"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"growScale","t":4,"rt":$n[0].Single,"sn":"growScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u2014 \u0441\u043c\u0435\u043d\u0430 \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0435"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loaderGradientImages","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"loaderGradientImages"},{"a":1,"n":"loaderMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"loaderMaterials"},{"a":1,"n":"originalColorA","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"originalColorA"},{"a":1,"n":"originalColorB","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"originalColorB"},{"a":1,"n":"originalHandScale","t":4,"rt":$n[2].Vector3,"sn":"originalHandScale"},{"a":1,"n":"originalOutlineColor","t":4,"rt":$n[2].Color,"sn":"originalOutlineColor"},{"at":[new UnityEngine.HeaderAttribute("\u0410\u0443\u0442\u043b\u0430\u0439\u043d \u2014 \u043c\u043e\u0440\u0433\u0430\u0435\u0442 \u0441\u0438\u043d\u0438\u043c"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"outlineGraphic","t":4,"rt":$n[4].Graphic,"sn":"outlineGraphic"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeAmplitudeDegrees","t":4,"rt":$n[0].Single,"sn":"shakeAmplitudeDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeSpeed","t":4,"rt":$n[0].Single,"sn":"shakeSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timer","t":4,"rt":GameTimerUI,"sn":"timer"},{"a":1,"n":"warningActive","t":4,"rt":$n[0].Boolean,"sn":"warningActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningColorA","t":4,"rt":$n[2].Color,"sn":"warningColorA"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningColorB","t":4,"rt":$n[2].Color,"sn":"warningColorB"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningOutlineColor","t":4,"rt":$n[2].Color,"sn":"warningOutlineColor"}]}; }, $n);
    /*TimerWarningEffects end.*/

    /*TutorialHandController start.*/
    $m("TutorialHandController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplySpotlight","t":8,"pi":[{"n":"source","pt":$n[2].Transform,"ps":0},{"n":"target","pt":BoardCell,"ps":1}],"sn":"ApplySpotlight","rt":$n[0].Void,"p":[$n[2].Transform,BoardCell]},{"a":1,"n":"ClearSpotlight","t":8,"sn":"ClearSpotlight","rt":$n[0].Void},{"a":1,"n":"FindAvailableTrayStack","t":8,"sn":"FindAvailableTrayStack","rt":$n[2].Transform},{"a":1,"n":"FindNearestEmptyCell","t":8,"pi":[{"n":"source","pt":$n[2].Transform,"ps":0}],"sn":"FindNearestEmptyCell","rt":BoardCell,"p":[$n[2].Transform]},{"a":1,"n":"HandleGrabbed","t":8,"sn":"HandleGrabbed","rt":$n[0].Void},{"a":1,"n":"HandleMoved","t":8,"sn":"HandleMoved","rt":$n[0].Void},{"a":1,"n":"HandleReleased","t":8,"pi":[{"n":"success","pt":$n[0].Boolean,"ps":0}],"sn":"HandleReleased","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"HideHand","t":8,"sn":"HideHand","rt":$n[0].Void},{"a":1,"n":"LoopHandAnimation","t":8,"sn":"LoopHandAnimation","rt":$n[1].IEnumerator},{"a":1,"n":"MoveHand","t":8,"pi":[{"n":"from","pt":$n[2].Vector2,"ps":0},{"n":"to","pt":$n[2].Vector2,"ps":1}],"sn":"MoveHand","rt":$n[1].IEnumerator,"p":[$n[2].Vector2,$n[2].Vector2]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReshowAfterDelay","t":8,"sn":"ReshowAfterDelay","rt":$n[1].IEnumerator},{"a":1,"n":"SetFinger","t":8,"pi":[{"n":"clenched","pt":$n[0].Boolean,"ps":0}],"sn":"SetFinger","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ShowHand","t":8,"sn":"ShowHand","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"WorldToCanvasPoint","t":8,"pi":[{"n":"worldPos","pt":$n[2].Vector3,"ps":0}],"sn":"WorldToCanvasPoint","rt":$n[2].Vector2,"p":[$n[2].Vector3]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"at":[new UnityEngine.TooltipAttribute("\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c \u044f\u0440\u043a\u043e\u0441\u0442\u0438 \u0446\u0432\u0435\u0442\u0430 \u044f\u0447\u0435\u0439\u043a\u0438-\u0446\u0435\u043b\u0438 (1 \u2014 \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, >1 \u2014 \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044f \u044f\u0440\u0447\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430) \u2014 \u0434\u0430\u0451\u0442 \u044d\u0444\u0444\u0435\u043a\u0442 \u0441\u0432\u0435\u0447\u0435\u043d\u0438\u044f \u0432\u043e\u043a\u0440\u0443\u0433 \u044f\u0447\u0435\u0439\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellGlowMultiplier","t":4,"rt":$n[0].Single,"sn":"cellGlowMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0422\u0440\u0438\u0433\u0433\u0435\u0440 \u0441\u0436\u0430\u0442\u0438\u044f \u043f\u0430\u043b\u044c\u0446\u0430 \u2014 \u0438\u0433\u0440\u0430\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0434 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u043c \u041e\u0422 \u0441\u0442\u043e\u043f\u043a\u0438 \u041a \u044f\u0447\u0435\u0439\u043a\u0435 (\u043a\u0430\u043a \u0431\u0443\u0434\u0442\u043e \u0432\u0437\u044f\u043b\u0438 \u0441\u0442\u043e\u043f\u043a\u0443)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clenchTrigger","t":4,"rt":$n[0].String,"sn":"clenchTrigger"},{"at":[new UnityEngine.TooltipAttribute("\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u0441\u0436\u0430\u0442\u0438\u044f/\u0440\u0430\u0437\u0436\u0430\u0442\u0438\u044f \u2014 \u0440\u0443\u043a\u0430 \u0434\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u0434\u043e\u0438\u0433\u0440\u0430\u0435\u0442 \u041f\u041e\u041b\u041d\u041e\u0421\u0422\u042c\u042e, \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043c \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 (\u0430 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0435\u0433\u043e \u0441\u0440\u0430\u0437\u0443 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u043e\u043c)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerAnimDuration","t":4,"rt":$n[0].Single,"sn":"fingerAnimDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"finished","t":4,"rt":$n[0].Boolean,"sn":"finished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("\u0410\u043d\u0438\u043c\u0430\u0442\u043e\u0440 \u043f\u0430\u043b\u044c\u0446\u0430 \u2014 \u0438\u043b\u043b\u044e\u0437\u0438\u044f, \u0447\u0442\u043e \u0440\u0443\u043a\u0430 \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u043e\u043f\u043a\u0443"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handAnimator","t":4,"rt":$n[2].Animator,"sn":"handAnimator"},{"at":[new UnityEngine.TooltipAttribute("\u0412\u044b\u0441\u043e\u0442\u0430 \u0434\u0443\u0433\u0438, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0443\u043a\u0430 \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044f \u043e\u0442 \u0441\u0442\u043e\u043f\u043a\u0438 \u043a \u044f\u0447\u0435\u0439\u043a\u0435 (\u0432 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 Rect Transform \u043a\u0430\u043d\u0432\u0430\u0441\u0430, \u043f\u043e \u043e\u0441\u044f\u043c X/Y \u2014 \u043a\u0430\u043d\u0432\u0430\u0441 \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u044b\u0439) \u2014 \u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u0434\u044a\u0451\u043c \u0441 \u043f\u0438\u043a\u043e\u043c \u043f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u043f\u0443\u0442\u0438, \u0430 \u043d\u0435 \u043f\u0440\u044f\u043c\u0430\u044f \u043b\u0438\u043d\u0438\u044f."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handArcHeight","t":4,"rt":$n[0].Single,"sn":"handArcHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handRoot","t":4,"rt":$n[2].RectTransform,"sn":"handRoot"},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e: \u0430\u043d\u0438\u043c\u0430\u0442\u043e\u0440 \u0442\u0435\u043d\u0438 \u0440\u0443\u043a\u0438 \u2014 \u0442\u0435 \u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u044b (clenchTrigger/unclenchTrigger) \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043d\u0451\u043c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441 handAnimator."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handShadowAnimator","t":4,"rt":$n[2].Animator,"sn":"handShadowAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleDelayBeforeReshow","t":4,"rt":$n[0].Single,"sn":"idleDelayBeforeReshow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleRoutine","t":4,"rt":$n[2].Coroutine,"sn":"idleRoutine"},{"a":1,"n":"loopRoutine","t":4,"rt":$n[2].Coroutine,"sn":"loopRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0420\u0443\u0447\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430/\u0446\u0435\u043b\u0438 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)"),new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e \u2014 \u0440\u0443\u043a\u0430 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u0441 \u044d\u0442\u043e\u0439 \u0441\u0442\u043e\u043f\u043a\u0438 \u043b\u043e\u0442\u043a\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439. Null \u2014 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 (FindAvailableTrayStack)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overrideSourceStack","t":4,"rt":StackDragHandler,"sn":"overrideSourceStack"},{"at":[new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e \u2014 \u0440\u0443\u043a\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u044d\u0442\u0443 \u044f\u0447\u0435\u0439\u043a\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0439 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0439. Null \u2014 \u0446\u0435\u043b\u044c \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 (FindNearestEmptyCell)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overrideTargetCell","t":4,"rt":BoardCell,"sn":"overrideTargetCell"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pauseAtEdges","t":4,"rt":$n[0].Single,"sn":"pauseAtEdges","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rootCanvas","t":4,"rt":$n[2].Canvas,"sn":"rootCanvas"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0435 \u0437\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u043a\u0440\u0443\u0433 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438"),new UnityEngine.TooltipAttribute("\u0417\u0430\u0442\u0435\u043c\u043d\u044f\u0435\u0442 \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e \u0432\u0441\u0451 (3D-\u0441\u0446\u0435\u043d\u0443, \u0432\u0435\u0441\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 UI, \u0444\u043e\u043d), \u043a\u0440\u043e\u043c\u0435 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u043e\u043f\u043a\u0438-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u0438 \u044f\u0447\u0435\u0439\u043a\u0438-\u0446\u0435\u043b\u0438 \u2014 \u0441\u043c. TutorialSpotlightOverlay."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spotlightOverlay","t":4,"rt":TutorialSpotlightOverlay,"sn":"spotlightOverlay"},{"a":1,"n":"spotlightedCell","t":4,"rt":BoardCell,"sn":"spotlightedCell"},{"a":1,"n":"spotlightedCellOriginalLayer","t":4,"rt":$n[0].Int32,"sn":"spotlightedCellOriginalLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"spotlightedStack","t":4,"rt":HexStack,"sn":"spotlightedStack"},{"a":1,"n":"spotlightedStackOriginalLayer","t":4,"rt":$n[0].Int32,"sn":"spotlightedStackOriginalLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("\u0426\u0432\u0435\u0442 \u044f\u0447\u0435\u0439\u043a\u0438-\u0446\u0435\u043b\u0438 \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u2014 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c \u043e\u0442 \u043e\u0431\u044b\u0447\u043d\u043e\u0439 drag-hover \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetCellHighlightColor","t":4,"rt":$n[2].Color,"sn":"targetCellHighlightColor"},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0441\u0435 \u0441\u0442\u043e\u043f\u043a\u0438 \u043b\u043e\u0442\u043a\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0443\u0442\u043e\u0440 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0435\u0449\u0451 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u0443\u044e (StackDragHandler.IsInTray == true)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"traySlots","t":4,"rt":System.Array.type(StackDragHandler),"sn":"traySlots"},{"at":[new UnityEngine.TooltipAttribute("\u0422\u0440\u0438\u0433\u0433\u0435\u0440 \u0440\u0430\u0437\u0436\u0430\u0442\u0438\u044f \u043f\u0430\u043b\u044c\u0446\u0430 \u2014 \u0438\u0433\u0440\u0430\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0434 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u043c \u041e\u0422 \u044f\u0447\u0435\u0439\u043a\u0438 \u041e\u0411\u0420\u0410\u0422\u041d\u041e \u043a \u0441\u0442\u043e\u043f\u043a\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"unclenchTrigger","t":4,"rt":$n[0].String,"sn":"unclenchTrigger"},{"at":[new UnityEngine.TooltipAttribute("\u041a\u0430\u043c\u0435\u0440\u0430, \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u044d\u043a\u0440\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u0443\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"worldCamera","t":4,"rt":$n[2].Camera,"sn":"worldCamera"},{"a":2,"n":"OnTutorialFinished","t":2,"ad":{"a":2,"n":"add_OnTutorialFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTutorialFinished","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTutorialFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTutorialFinished","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TutorialHandController end.*/

    /*TutorialSpotlightOverlay start.*/
    $m("TutorialSpotlightOverlay", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"DisableOverlay","t":8,"sn":"DisableOverlay","rt":$n[0].Void},{"a":1,"n":"FadeTo","t":8,"pi":[{"n":"targetAlpha","pt":$n[0].Single,"ps":0},{"n":"disableAtEnd","pt":$n[0].Boolean,"ps":1}],"sn":"FadeTo","rt":$n[1].IEnumerator,"p":[$n[0].Single,$n[0].Boolean]},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"HideImmediate","t":8,"sn":"HideImmediate","rt":$n[0].Void},{"a":1,"n":"SetupRevealCamera","t":8,"sn":"SetupRevealCamera","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":2,"n":"OverlayCanvas","t":16,"rt":$n[2].Canvas,"g":{"a":2,"n":"get_OverlayCanvas","t":8,"rt":$n[2].Canvas,"fg":"OverlayCanvas"},"s":{"a":1,"n":"set_OverlayCanvas","t":8,"p":[$n[2].Canvas],"rt":$n[0].Void,"fs":"OverlayCanvas"},"fn":"OverlayCanvas"},{"a":2,"n":"SpotlightLayer","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_SpotlightLayer","t":8,"rt":$n[0].Int32,"fg":"SpotlightLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_SpotlightLayer","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"SpotlightLayer"},"fn":"SpotlightLayer"},{"a":1,"n":"__Property__Initializer__SpotlightLayer","t":4,"rt":$n[0].Int32,"sn":"__Property__Initializer__SpotlightLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fadeRoutine","t":4,"rt":$n[2].Coroutine,"sn":"fadeRoutine"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u0446\u0435\u043d\u044b"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[2].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.TooltipAttribute("CanvasGroup \u043d\u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043f\u0430\u043d\u0435\u043b\u0438 \u2014 \u0447\u0435\u0440\u0435\u0437 \u0435\u0451 Alpha \u043f\u043b\u0430\u0432\u043d\u043e \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f Show/Hide."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overlayCanvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"overlayCanvasGroup"},{"at":[new UnityEngine.TooltipAttribute("\u041a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 GameObject Canvas'\u0430 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u2014 Show/Hide \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442/\u0432\u044b\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u0435\u0433\u043e."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overlayRoot","t":4,"rt":$n[2].GameObject,"sn":"overlayRoot"},{"at":[new UnityEngine.TooltipAttribute("\u041a\u0430\u043c\u0435\u0440\u0430-\u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430 \u2014 \u0432\u0438\u0434\u0438\u0442 \u0422\u041e\u041b\u042c\u041a\u041e \u0441\u043b\u043e\u0439 TutorialSpotlight, \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442 \u0432 RenderTexture."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealCamera","t":4,"rt":$n[2].Camera,"sn":"revealCamera"},{"at":[new UnityEngine.TooltipAttribute("RawImage, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 RenderTexture \u043a\u0430\u043c\u0435\u0440\u044b-\u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u2014 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u0434\u0442\u0438 \u041f\u041e\u0417\u0416\u0415 \u0437\u0430\u0442\u0435\u043c\u043d\u044f\u044e\u0449\u0435\u0439 Image \u0432 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u044d\u0442\u043e\u0433\u043e Canvas'\u0430 (\u0442\u043e \u0435\u0441\u0442\u044c \u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0435\u0440\u0445 \u043d\u0435\u0451)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealImage","t":4,"rt":$n[4].RawImage,"sn":"revealImage"},{"a":1,"n":"revealTexture","t":4,"rt":$n[2].RenderTexture,"sn":"revealTexture"},{"at":[new UnityEngine.HeaderAttribute("\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),new UnityEngine.TooltipAttribute("\u0421\u043b\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0438\u0434\u0438\u0442 \u043a\u0430\u043c\u0435\u0440\u0430-\u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430 \u2014 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 Project Settings > Tags and Layers."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spotlightLayerName","t":4,"rt":$n[0].String,"sn":"spotlightLayerName"},{"a":1,"backing":true,"n":"<OverlayCanvas>k__BackingField","t":4,"rt":$n[2].Canvas,"sn":"OverlayCanvas"},{"a":1,"backing":true,"n":"<SpotlightLayer>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SpotlightLayer","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*TutorialSpotlightOverlay end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
