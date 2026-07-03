if ( TRACE ) { TRACE( JSON.parse( '["BoardCell#AutoComputeAxialFromPosition#get","BoardCell#AxialCoord#get","BoardCell#InitialStackColors#get","BoardCell#IsClickable#get","BoardCell#IsEmpty#get","BoardCell#SnapPosition#get","BoardCell#init","BoardCell#SetAxialCoord","BoardManager#init","BoardManager#IsChainRunning#get","BoardManager#Cells#get","BoardManager#init","BoardManager#Awake","BoardManager#ComputeAxialCoordinates","BoardManager#Start","BoardManager#PlaceStack","BoardManager#GetNeighbors","BoardManager#ProcessChainReaction","BoardManager#TransferMatchingColor","BoardManager#ClearStack","BoardManager#IsBoardFullyCleared","GameFlowController#init","GameFlowController#OnEnable","GameFlowController#OnDisable","GameFlowController#HandleTutorialFinished","GameFlowController#HandleTimerExpired","GameFlowController#HandleBoardCleared","GameFlowController#GoToPackshot","GameTimerUI#init","GameTimerUI#StartTimer","GameTimerUI#StopTimer","GameTimerUI#Update","GradientSlicedImage#OnPopulateMesh","HexColorPalette#GetMaterial","HexColorPalette.Entry#getDefaultValue","HexColorPalette.Entry#ctor","HexColorPalette.Entry#getHashCode","HexColorPalette.Entry#equals","HexColorPalette.Entry#$clone","HexJumpAnimator#init","HexJumpAnimator#AnimatePieceTransfer","HexJumpAnimator#AnimateDisappear","HexPieceView#SetColor","HexStack#Count#get","HexStack#IsEmpty#get","HexStack#TopColor#get","HexStack#IsMonochrome#get","HexStack#init","HexStack#Awake","HexStack#Initialize","HexStack#BuildFromColors","HexStack#SpawnPieceAtTop","HexStack#GetLocalPositionForIndex","HexStack#GetNextSlotWorldPosition","HexStack#GetTopWorldPosition","HexStack#PopTopPiece","HexStack#AppendPiece","HexStack#UpdateHitCollider","PackshotController#init","PackshotController#Awake","PackshotController#Show","PackshotController#GoToStore","ScreenScaler#Start","ScreenScaler#LateUpdate","ScreenScaler#Resize","StackDragHandler#IsInTray#get","StackDragHandler#init","StackDragHandler#Awake","StackDragHandler#SetBoard","StackDragHandler#OnMouseDown","StackDragHandler#OnMouseDrag","StackDragHandler#OnMouseUp","StackDragHandler#RaycastCellUnderPointer","StackDragHandler#ReturnToOrigin","TimerWarningEffects#init","TimerWarningEffects#init","TimerWarningEffects#Awake","TimerWarningEffects#OnEnable","TimerWarningEffects#OnDisable","TimerWarningEffects#HandleWarningZoneEntered","TimerWarningEffects#HandleTimerStopped","TimerWarningEffects#ResetVisuals","TimerWarningEffects#LateUpdate","TutorialHandController#init","TutorialHandController#OnEnable","TutorialHandController#OnDisable","TutorialHandController#Start","TutorialHandController#ShowHand","TutorialHandController#HideHand","TutorialHandController#HandleGrabbed","TutorialHandController#HandleMoved","TutorialHandController#HandleReleased","TutorialHandController#ReshowAfterDelay","TutorialHandController#LoopHandAnimation","TutorialHandController#FindAvailableTrayStack","TutorialHandController#FindNearestEmptyCell","TutorialHandController#WorldToCanvasPoint"]' ) ); }
/**
 * @version 1.0.9680.2733
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BoardCell start.*/
    Bridge.define("BoardCell", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            autoComputeAxialFromPosition: false,
            axialCoord: null,
            initialStackColors: null,
            isClickable: false,
            CurrentStack: null
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

                    return this.transform.position.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardCell#init", this ); }

                this.axialCoord = new UnityEngine.Vector2Int();
                this.autoComputeAxialFromPosition = true;
                this.initialStackColors = new (System.Collections.Generic.List$1(HexColor)).ctor();
                this.isClickable = true;
            }
        },
        methods: {
            /*BoardCell.SetAxialCoord start.*/
            SetAxialCoord: function (coord) {
if ( TRACE ) { TRACE( "BoardCell#SetAxialCoord", this ); }

                this.axialCoord = coord.$clone();
            },
            /*BoardCell.SetAxialCoord end.*/


        }
    });
    /*BoardCell end.*/

    /*BoardManager start.*/
    Bridge.define("BoardManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                AxialDirections: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BoardManager#init", this ); }

                    this.AxialDirections = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 1), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1)
                    ], UnityEngine.Vector2Int);
                }
            }
        },
        fields: {
            cellsParent: null,
            cells: null,
            gridOrigin: null,
            columnSpacing: 0,
            rowSpacing: 0,
            stackPrefab: null,
            piecePrefab: null,
            palette: null,
            initialStackRotation: null,
            baseJumpDuration: 0,
            baseClearDuration: 0,
            speedMultiplierPerClear: 0,
            jumpAnimator: null,
            cellByCoord: null,
            chainRunning: false
        },
        events: {
            OnBoardCleared: null
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
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardManager#init", this ); }

                this.initialStackRotation = new UnityEngine.Vector3();
                this.cells = new (System.Collections.Generic.List$1(BoardCell)).ctor();
                this.columnSpacing = 0.31;
                this.rowSpacing = 0.348;
                this.initialStackRotation = new pc.Vec3( 0.0, 0.0, -90.0 );
                this.baseJumpDuration = 0.18;
                this.baseClearDuration = 0.25;
                this.speedMultiplierPerClear = 1.3;
                this.cellByCoord = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector2Int,BoardCell)).ctor();
            }
        },
        methods: {
            /*BoardManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BoardManager#Awake", this ); }

                var $t;
                if (UnityEngine.Component.op_Inequality(this.cellsParent, null) && this.cells.Count === 0) {
                    this.cells.AddRange(this.cellsParent.GetComponentsInChildren(BoardCell));
                }

                this.ComputeAxialCoordinates();

                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (this.cellByCoord.containsKey(cell.AxialCoord.$clone())) {
                            UnityEngine.Debug.LogWarning$1((System.String.format("BoardManager: \u0434\u0432\u0435 \u044f\u0447\u0435\u0439\u043a\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 Axial Coord {0} ", [cell.AxialCoord.$clone()]) || "") + (System.String.format("({0} \u0438 {1}) \u2014 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 gridOrigin/columnSpacing/rowSpacing.", this.cellByCoord.getItem(cell.AxialCoord).name, cell.name) || ""), cell);
                        }
                        this.cellByCoord.setItem(cell.AxialCoord, cell);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardManager.Awake end.*/

            /*BoardManager.ComputeAxialCoordinates start.*/
            ComputeAxialCoordinates: function () {
if ( TRACE ) { TRACE( "BoardManager#ComputeAxialCoordinates", this ); }

                var $t;
                if (UnityEngine.Component.op_Equality(this.gridOrigin, null)) {
                    return;
                }

                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (!cell.AutoComputeAxialFromPosition) {
                            continue;
                        }

                        var delta = cell.transform.position.$clone().sub( this.gridOrigin.position );
                        var q = Math.round(delta.x / this.columnSpacing);
                        var r = Math.round(delta.z / this.rowSpacing - q * 0.5);
                        cell.SetAxialCoord(new UnityEngine.Vector2Int.$ctor1(q, r));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardManager.ComputeAxialCoordinates end.*/

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
                this.StartCoroutine$1(this.ProcessChainReaction(cell));
            },
            /*BoardManager.PlaceStack end.*/

            /*BoardManager.GetNeighbors start.*/
            GetNeighbors: function (cell) {
if ( TRACE ) { TRACE( "BoardManager#GetNeighbors", this ); }

                var $t;
                var result = new (System.Collections.Generic.List$1(BoardCell)).$ctor2(6);
                $t = Bridge.getEnumerator(BoardManager.AxialDirections);
                try {
                    while ($t.moveNext()) {
                        var dir = $t.Current.$clone();
                        var neighbor = { };
                        if (this.cellByCoord.tryGetValue(UnityEngine.Vector2Int.op_Addition(cell.AxialCoord.$clone(), dir.$clone()), neighbor)) {
                            result.add(neighbor.v);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return result;
            },
            /*BoardManager.GetNeighbors end.*/

            /*BoardManager.ProcessChainReaction start.*/
            ProcessChainReaction: function (startCell) {
if ( TRACE ) { TRACE( "BoardManager#ProcessChainReaction", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    speedMultiplier,
                    queue,
                    queued,
                    cell,
                    activeStack,
                    $t,
                    neighbor,
                    neighborStack,
                    $async_e,
                    $async_e1;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.chainRunning = true;

                                        // chainRunning блокирует OnMouseDown у всех стопок лотка (см. StackDragHandler), пока идёт
                                        // реакция. Если где-то внутри цепочки вылетит необработанное исключение, корутина оборвётся
                                        // без try/finally — и chainRunning навсегда останется true, что выглядит как "весь драг
                                        // сломался" даже на ячейках, к цепочке не относящихся. finally гарантирует сброс флага
                                        // в любом случае, даже если сама реакция отработала некорректно.
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    speedMultiplier = 1.0;

                                        queue = new (System.Collections.Generic.Queue$1(BoardCell)).ctor();
                                        queued = new (System.Collections.Generic.HashSet$1(BoardCell)).ctor();
                                        queue.Enqueue(startCell);
                                        queued.add(startCell);
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( queue.Count > 0 ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 18;
                                        continue;
                                }
                                case 3: {
                                    cell = queue.Dequeue();
                                        queued.remove(cell);

                                        activeStack = cell.CurrentStack;
                                        if (UnityEngine.MonoBehaviour.op_Equality(activeStack, null) || activeStack.IsEmpty) {
                                            $step = 2;
                                            continue;
                                        }

                                        $t = Bridge.getEnumerator(this.GetNeighbors(cell));
                                        $step = 4;
                                        continue;
                                }
                                case 4: {
                                    if ($t.moveNext()) {
                                            neighbor = $t.Current;
                                            $step = 5;
                                            continue;
                                        }
                                    $step = 14;
                                    continue;
                                }
                                case 5: {
                                    if (activeStack.IsEmpty) {
                                            $step = 14;
                                            continue;
                                        }

                                        neighborStack = neighbor.CurrentStack;
                                        if (UnityEngine.MonoBehaviour.op_Equality(neighborStack, null) || neighborStack.IsEmpty) {
                                            $step = 4;
                                            continue;
                                        }
                                        if (neighborStack.TopColor !== activeStack.TopColor) {
                                            $step = 4;
                                            continue;
                                        }

                                        $enumerator.current = this.TransferMatchingColor(neighborStack, activeStack, speedMultiplier);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    if (neighborStack.IsEmpty) {
                                            $step = 7;
                                            continue;
                                        } else  {
                                            $step = 8;
                                            continue;
                                        }
                                }
                                case 7: {
                                    UnityEngine.MonoBehaviour.Destroy(neighborStack.gameObject);
                                        neighbor.CurrentStack = null;
                                    $step = 13;
                                    continue;
                                }
                                case 8: {
                                    if (neighborStack.IsMonochrome) {
                                            $step = 9;
                                            continue;
                                        } else  {
                                            $step = 11;
                                            continue;
                                        }
                                }
                                case 9: {
                                    $enumerator.current = this.ClearStack(neighbor, speedMultiplier);
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    speedMultiplier *= this.speedMultiplierPerClear;
                                    $step = 12;
                                    continue;
                                }
                                case 11: {
                                    if (queued.add(neighbor)) {
                                            queue.Enqueue(neighbor);
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    $step = 13;
                                    continue;
                                }
                                case 13: {
                                    $step = 4;
                                    continue;
                                }
                                case 14: {
                                    if (activeStack.IsMonochrome) {
                                            $step = 15;
                                            continue;
                                        } 
                                        $step = 17;
                                        continue;
                                }
                                case 15: {
                                    $enumerator.current = this.ClearStack(cell, speedMultiplier);
                                        $step = 16;
                                        return true;
                                }
                                case 16: {
                                    speedMultiplier *= this.speedMultiplierPerClear;
                                    $step = 17;
                                    continue;
                                }
                                case 17: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 18: {
                                    $step = 19;
                                    continue;
                                }
                                case 19: {
                                    this.chainRunning = false;

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                    $step = 20;
                                    continue;
                                }
                                case 20: {
                                    if (this.IsBoardFullyCleared()) {
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
                        if ($step >= 1 && $step <= 18){

                            $step = 19;
                            $enumerator.moveNext();
                            return;
                        }
                        throw $async_e;
                    }
                }), function () {
                    if ($step >= 1 && $step <= 18){

                        $step = 19;
                        $enumerator.moveNext();
                        return;
                    }

                });
                return $enumerator;
            },
            /*BoardManager.ProcessChainReaction end.*/

            /*BoardManager.TransferMatchingColor start.*/
            TransferMatchingColor: function (donorStack, receiverStack, speedMultiplier) {
if ( TRACE ) { TRACE( "BoardManager#TransferMatchingColor", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    matchColor,
                    piece,
                    from,
                    to,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    matchColor = receiverStack.TopColor;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( !donorStack.IsEmpty && donorStack.TopColor === matchColor ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    piece = donorStack.PopTopPiece();
                                        from = piece.transform.position.$clone();
                                        to = receiverStack.GetNextSlotWorldPosition();
                                        duration = this.baseJumpDuration / speedMultiplier;

                                        // На время перелёта фишка не привязана ни к донору, ни к получателю —
                                        // так масштаб/поворот стопок её не задевает, пока она летит и переворачивается.
                                        piece.transform.SetParent(null, true);
                                        $enumerator.current = this.jumpAnimator.AnimatePieceTransfer(piece.transform, from.$clone(), to.$clone(), duration);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    receiverStack.AppendPiece(piece);

                                        $step = 1;
                                        continue;
                                }
                                case 4: {

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

            /*BoardManager.ClearStack start.*/
            ClearStack: function (cell, speedMultiplier) {
if ( TRACE ) { TRACE( "BoardManager#ClearStack", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    stack,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    stack = cell.CurrentStack;
                                        cell.CurrentStack = null;
                                        if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
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
                                    duration = this.baseClearDuration / speedMultiplier;
                                        $enumerator.current = this.jumpAnimator.AnimateDisappear(stack.transform, duration);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    UnityEngine.MonoBehaviour.Destroy(stack.gameObject);

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
            /*BoardManager.ClearStack end.*/

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

    /*GameFlowController start.*/
    Bridge.define("GameFlowController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tutorial: null,
            timer: null,
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
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timer, null)) {
                    this.timer.addOnTimerExpired(Bridge.fn.cacheBind(this, this.HandleTimerExpired));
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
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timer, null)) {
                    this.timer.removeOnTimerExpired(Bridge.fn.cacheBind(this, this.HandleTimerExpired));
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

            /*GameFlowController.HandleTimerExpired start.*/
            HandleTimerExpired: function () {
if ( TRACE ) { TRACE( "GameFlowController#HandleTimerExpired", this ); }

                this.GoToPackshot();
            },
            /*GameFlowController.HandleTimerExpired end.*/

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
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameTimerUI#init", this ); }

                this.duration = 25.0;
                this.startAngleZ = 0.0;
                this.endAngleZ = -360.0;
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

    /*GradientSlicedImage start.*/
    /**
     * @public
     * @class GradientSlicedImage
     * @augments UnityEngine.UI.Image
     */
    Bridge.define("GradientSlicedImage", {
        inherits: [UnityEngine.UI.Image],
        methods: {
            /*GradientSlicedImage.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
if ( TRACE ) { TRACE( "GradientSlicedImage#OnPopulateMesh", this ); }

                UnityEngine.UI.Image.prototype.OnPopulateMesh.call(this, vh);

                var rect = this.rectTransform.rect.$clone();

                var v = { v : new UnityEngine.UIVertex() };
                for (var i = 0; i < vh.currentVertCount; i = (i + 1) | 0) {
                    vh.PopulateUIVertex(v, i);

                    v.v.uv1 = new pc.Vec2( (v.v.position.x - rect.xMin) / rect.width, (v.v.position.y - rect.yMin) / rect.height );

                    vh.SetUIVertex(v.v.$clone(), i);
                }
            },
            /*GradientSlicedImage.OnPopulateMesh end.*/


        }
    });
    /*GradientSlicedImage end.*/

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

    /*HexJumpAnimator start.*/
    Bridge.define("HexJumpAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            arcHeight: 0,
            easing: null,
            flipPeakDegrees: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexJumpAnimator#init", this ); }

                this.arcHeight = 0.25;
                this.easing = pc.AnimationCurve.createEaseInOut(0.0, 0.0, 1.0, 1.0);
                this.flipPeakDegrees = 90.0;
            }
        },
        methods: {
            /*HexJumpAnimator.AnimatePieceTransfer start.*/
            AnimatePieceTransfer: function (piece, from, to, duration) {
if ( TRACE ) { TRACE( "HexJumpAnimator#AnimatePieceTransfer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startRotation,
                    flatDirection,
                    flipAxis,
                    t,
                    n,
                    arcPhase,
                    pos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(piece, null)) {
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
                                    startRotation = piece.rotation.$clone();
                                        flatDirection = to.$clone().sub( from );
                                        flatDirection.y = 0.0;
                                        flipAxis = flatDirection.lengthSq() > 0.0001 ? new pc.Vec3().cross( pc.Vec3.UP.clone(), flatDirection.clone().normalize() ) : pc.Vec3.RIGHT.clone();

                                        t = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        n = this.easing.value(Math.max(0, Math.min(1, t / duration)));
                                        arcPhase = Math.sin(n * UnityEngine.Mathf.PI); // 0 в начале и в конце, 1 в середине пути

                                        pos = new pc.Vec3().lerp( from, to, n );
                                        pos.y += arcPhase * this.arcHeight;
                                        piece.position = pos.$clone();

                                        piece.rotation = startRotation.clone().mul( new pc.Quat().setFromAxisAngle( flipAxis, arcPhase * this.flipPeakDegrees ) );

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    piece.position = to.$clone();
                                        piece.rotation = startRotation.$clone();

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
            /*HexJumpAnimator.AnimatePieceTransfer end.*/

            /*HexJumpAnimator.AnimateDisappear start.*/
            AnimateDisappear: function (stackRoot, duration) {
if ( TRACE ) { TRACE( "HexJumpAnimator#AnimateDisappear", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startScale,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(stackRoot, null)) {
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
                                    startScale = stackRoot.localScale.$clone();
                                        t = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        stackRoot.localScale = new pc.Vec3().lerp( startScale, pc.Vec3.ZERO.clone(), Math.max(0, Math.min(1, t / duration)) );
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    stackRoot.localScale = pc.Vec3.ZERO.clone();

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
            /*HexJumpAnimator.AnimateDisappear end.*/


        }
    });
    /*HexJumpAnimator end.*/

    /*HexPieceView start.*/
    Bridge.define("HexPieceView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            meshRenderer: null,
            Color: 0
        },
        methods: {
            /*HexPieceView.SetColor start.*/
            SetColor: function (color, palette) {
if ( TRACE ) { TRACE( "HexPieceView#SetColor", this ); }

                this.Color = color;

                if (UnityEngine.Component.op_Equality(this.meshRenderer, null)) {
                    this.meshRenderer = this.GetComponent(UnityEngine.MeshRenderer);
                }

                var material = palette.GetMaterial(color);
                if (material != null) {
                    this.meshRenderer.sharedMaterial = material;
                }
            },
            /*HexPieceView.SetColor end.*/


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
            CurrentCell: null
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

                    return this.pieces.getItem(((this.pieces.Count - 1) | 0)).Color;
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
                    this.BuildFromColors(this.initialColors);
                }
            },
            /*HexStack.Awake end.*/

            /*HexStack.Initialize start.*/
            Initialize: function (colors, prefab, colorPalette) {
if ( TRACE ) { TRACE( "HexStack#Initialize", this ); }

                this.piecePrefab = prefab;
                this.palette = colorPalette;

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
            GetNextSlotWorldPosition: function () {
if ( TRACE ) { TRACE( "HexStack#GetNextSlotWorldPosition", this ); }

                return this.transform.TransformPoint$1(this.GetLocalPositionForIndex(this.pieces.Count));
            },
            /*HexStack.GetNextSlotWorldPosition end.*/

            /*HexStack.GetTopWorldPosition start.*/
            GetTopWorldPosition: function () {
if ( TRACE ) { TRACE( "HexStack#GetTopWorldPosition", this ); }

                return this.pieces.Count === 0 ? this.transform.position.$clone() : this.pieces.getItem(((this.pieces.Count - 1) | 0)).transform.position.$clone();
            },
            /*HexStack.GetTopWorldPosition end.*/

            /*HexStack.PopTopPiece start.*/
            PopTopPiece: function () {
if ( TRACE ) { TRACE( "HexStack#PopTopPiece", this ); }

                if (this.pieces.Count === 0) {
                    return null;
                }
                var piece = this.pieces.getItem(((this.pieces.Count - 1) | 0));
                this.pieces.removeAt(((this.pieces.Count - 1) | 0));
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
            transitionTrigger: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PackshotController#init", this ); }

                this.transitionTrigger = "Show";
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

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(true);
                }
                if (UnityEngine.Component.op_Inequality(this.transitionAnimator, null)) {
                    this.transitionAnimator.SetTrigger$1(this.transitionTrigger);
                }

                Luna.Unity.LifeCycle.GameEnded();
            },
            /*PackshotController.Show end.*/

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
            hasMoved: false
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

            /*StackDragHandler.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "StackDragHandler#OnMouseDown", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.board, null) || this.board.IsChainRunning) {
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
            },
            /*StackDragHandler.OnMouseDrag end.*/

            /*StackDragHandler.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "StackDragHandler#OnMouseUp", this ); }

                if (!this.dragging) {
                    return;
                }
                this.dragging = false;

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
            loopRoutine: null,
            idleRoutine: null,
            finished: false
        },
        events: {
            OnTutorialFinished: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialHandController#init", this ); }

                this.moveDuration = 1.0;
                this.pauseAtEdges = 0.3;
                this.idleDelayBeforeReshow = 2.0;
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
                    t,
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
                                        $step = 11;
                                        continue;
                                }
                                case 1: {
                                    source = this.FindAvailableTrayStack();
                                        target = this.FindNearestEmptyCell(source);

                                        if (UnityEngine.Component.op_Equality(source, null) || UnityEngine.MonoBehaviour.op_Equality(target, null)) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    // Показывать некого/некуда — например, все стопки уже разобраны. Подождём и проверим снова.
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 0;
                                        continue;
                                }
                                case 4: {
                                    fromScreen = this.WorldToCanvasPoint(source.position);
                                        toScreen = this.WorldToCanvasPoint(target.SnapPosition);

                                        this.handRoot.anchoredPosition = fromScreen.$clone();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    t = 0.0;
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    if ( t < this.moveDuration ) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.handRoot.anchoredPosition = new pc.Vec2().lerp( fromScreen, toScreen, pc.math.smoothstep(0.0, 1.0, t / this.moveDuration) );
                                        $enumerator.current = null;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    
                                        $step = 6;
                                        continue;
                                }
                                case 9: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseAtEdges);
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 11: {

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
                var localPoint = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.as(this.handRoot.parent, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(screenPoint), this.worldCamera, localPoint);
                return localPoint.v.$clone();
            },
            /*TutorialHandController.WorldToCanvasPoint end.*/


        }
    });
    /*TutorialHandController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","System.Collections","UnityEngine.UI"];

    /*GameFlowController start.*/
    $m("GameFlowController", function () { return {"nested":[GameFlowController.Phase],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GoToPackshot","t":8,"sn":"GoToPackshot","rt":$n[0].Void},{"a":1,"n":"HandleBoardCleared","t":8,"sn":"HandleBoardCleared","rt":$n[0].Void},{"a":1,"n":"HandleTimerExpired","t":8,"sn":"HandleTimerExpired","rt":$n[0].Void},{"a":1,"n":"HandleTutorialFinished","t":8,"sn":"HandleTutorialFinished","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0441\u0435 \u0442\u0440\u0438 \u0441\u0442\u043e\u043f\u043a\u0438 \u043b\u043e\u0442\u043a\u0430 \u2014 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u0432 \u043f\u044d\u043a\u0448\u043e\u0442, \u0447\u0442\u043e\u0431\u044b \u0438\u0445 \u043d\u0435\u043b\u044c\u0437\u044f \u0431\u044b\u043b\u043e \u0442\u0430\u0449\u0438\u0442\u044c."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragHandlers","t":4,"rt":System.Array.type(StackDragHandler),"sn":"dragHandlers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packshot","t":4,"rt":PackshotController,"sn":"packshot"},{"a":1,"n":"phase","t":4,"rt":GameFlowController.Phase,"sn":"phase","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timer","t":4,"rt":GameTimerUI,"sn":"timer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorial","t":4,"rt":TutorialHandController,"sn":"tutorial"}]}; }, $n);
    /*GameFlowController end.*/

    /*GameFlowController+Phase start.*/
    $m("GameFlowController.Phase", function () { return {"td":GameFlowController,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Gameplay","is":true,"t":4,"rt":GameFlowController.Phase,"sn":"Gameplay","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}},{"a":2,"n":"Packshot","is":true,"t":4,"rt":GameFlowController.Phase,"sn":"Packshot","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}},{"a":2,"n":"Tutorial","is":true,"t":4,"rt":GameFlowController.Phase,"sn":"Tutorial","box":function ($v) { return Bridge.box($v, GameFlowController.Phase, System.Enum.toStringFn(GameFlowController.Phase));}}]}; }, $n);
    /*GameFlowController+Phase end.*/

    /*BoardCell start.*/
    $m("BoardCell", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetAxialCoord","t":8,"pi":[{"n":"coord","pt":$n[1].Vector2Int,"ps":0}],"sn":"SetAxialCoord","rt":$n[0].Void,"p":[$n[1].Vector2Int]},{"a":2,"n":"AutoComputeAxialFromPosition","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_AutoComputeAxialFromPosition","t":8,"rt":$n[0].Boolean,"fg":"AutoComputeAxialFromPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"AutoComputeAxialFromPosition"},{"a":2,"n":"AxialCoord","t":16,"rt":$n[1].Vector2Int,"g":{"a":2,"n":"get_AxialCoord","t":8,"rt":$n[1].Vector2Int,"fg":"AxialCoord"},"fn":"AxialCoord"},{"a":2,"n":"CurrentStack","t":16,"rt":HexStack,"g":{"a":2,"n":"get_CurrentStack","t":8,"rt":HexStack,"fg":"CurrentStack"},"s":{"a":2,"n":"set_CurrentStack","t":8,"p":[HexStack],"rt":$n[0].Void,"fs":"CurrentStack"},"fn":"CurrentStack"},{"a":2,"n":"InitialStackColors","t":16,"rt":$n[2].IReadOnlyList$1(HexColor),"g":{"a":2,"n":"get_InitialStackColors","t":8,"rt":$n[2].IReadOnlyList$1(HexColor),"fg":"InitialStackColors"},"fn":"InitialStackColors"},{"a":2,"n":"IsClickable","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClickable","t":8,"rt":$n[0].Boolean,"fg":"IsClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsClickable"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"SnapPosition","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_SnapPosition","t":8,"rt":$n[1].Vector3,"fg":"SnapPosition"},"fn":"SnapPosition"},{"at":[new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u2014 BoardManager \u0441\u0430\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442 Axial Coord \u0438\u0437 \u043c\u0438\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u044f\u0447\u0435\u0439\u043a\u0438 (\u0441\u043c. BoardManager.gridOrigin/columnSpacing/rowSpacing) \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0448\u0435\u0442\u0441\u044f. \u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b, \u043d\u0435 \u0432\u044b\u0432\u043e\u0434\u0438\u043c\u044b\u0435 \u0438\u0437 \u043f\u043e\u0437\u0438\u0446\u0438\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoComputeAxialFromPosition","t":4,"rt":$n[0].Boolean,"sn":"autoComputeAxialFromPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u041e\u0441\u0435\u0432\u044b\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u044f\u0447\u0435\u0439\u043a\u0438 \u0432 \u0433\u0435\u043a\u0441-\u0441\u0435\u0442\u043a\u0435 (axial q,r). \u0421\u043e\u0441\u0435\u0434\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e 6 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c \u0433\u0435\u043a\u0441-\u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u043c \u043e\u0442 \u044d\u0442\u0438\u0445 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axialCoord","t":4,"rt":$n[1].Vector2Int,"sn":"axialCoord"},{"at":[new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u043d\u0430 \u0441\u0442\u0430\u0440\u0442\u0435 \u043d\u0430 \u044d\u0442\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0435 \u0443\u0436\u0435 \u0441\u0442\u043e\u0438\u0442 \u0441\u0442\u043e\u043f\u043a\u0430 \u2014 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0435\u0451 \u0446\u0432\u0435\u0442\u0430 \u0441\u043d\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialStackColors","t":4,"rt":$n[2].List$1(HexColor),"sn":"initialStackColors"},{"at":[new UnityEngine.TooltipAttribute("\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0417\u0410\u0411\u0418\u0420\u0410\u0422\u042c \u0441\u0442\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u0436\u0435 \u0441\u0442\u043e\u0438\u0442 \u043d\u0430 \u044d\u0442\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0435 (\u0441\u043c. StackDragHandler.OnMouseDown). \u041d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0442\u043e, \u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u0421\u042e\u0414\u0410 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043f\u043a\u0443 \u0438\u0437 \u043b\u043e\u0442\u043a\u0430 \u2014 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0440\u043e\u043f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u044d\u0442\u043e\u0439 \u0433\u0430\u043b\u043a\u0438. \u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0434\u043b\u044f \u044f\u0447\u0435\u0435\u043a \u0441\u043e \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u043c\u0438 \u0441\u0442\u043e\u043f\u043a\u0430\u043c\u0438 \u043f\u043e\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435\u043f\u043e\u0434\u0432\u0438\u0436\u043d\u044b\u043c\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isClickable","t":4,"rt":$n[0].Boolean,"sn":"isClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<CurrentStack>k__BackingField","t":4,"rt":HexStack,"sn":"CurrentStack"}]}; }, $n);
    /*BoardCell end.*/

    /*BoardManager start.*/
    $m("BoardManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClearStack","t":8,"pi":[{"n":"cell","pt":BoardCell,"ps":0},{"n":"speedMultiplier","pt":$n[0].Single,"ps":1}],"sn":"ClearStack","rt":$n[3].IEnumerator,"p":[BoardCell,$n[0].Single]},{"a":1,"n":"ComputeAxialCoordinates","t":8,"sn":"ComputeAxialCoordinates","rt":$n[0].Void},{"a":1,"n":"GetNeighbors","t":8,"pi":[{"n":"cell","pt":BoardCell,"ps":0}],"sn":"GetNeighbors","rt":$n[2].List$1(BoardCell),"p":[BoardCell]},{"a":1,"n":"IsBoardFullyCleared","t":8,"sn":"IsBoardFullyCleared","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PlaceStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"cell","pt":BoardCell,"ps":1}],"sn":"PlaceStack","rt":$n[0].Void,"p":[HexStack,BoardCell]},{"a":1,"n":"ProcessChainReaction","t":8,"pi":[{"n":"startCell","pt":BoardCell,"ps":0}],"sn":"ProcessChainReaction","rt":$n[3].IEnumerator,"p":[BoardCell]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TransferMatchingColor","t":8,"pi":[{"n":"donorStack","pt":HexStack,"ps":0},{"n":"receiverStack","pt":HexStack,"ps":1},{"n":"speedMultiplier","pt":$n[0].Single,"ps":2}],"sn":"TransferMatchingColor","rt":$n[3].IEnumerator,"p":[HexStack,HexStack,$n[0].Single]},{"a":2,"n":"Cells","t":16,"rt":$n[2].IReadOnlyList$1(BoardCell),"g":{"a":2,"n":"get_Cells","t":8,"rt":$n[2].IReadOnlyList$1(BoardCell),"fg":"Cells"},"fn":"Cells"},{"a":2,"n":"IsChainRunning","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsChainRunning","t":8,"rt":$n[0].Boolean,"fg":"IsChainRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsChainRunning"},{"a":1,"n":"AxialDirections","is":true,"t":4,"rt":System.Array.type(UnityEngine.Vector2Int),"sn":"AxialDirections","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseClearDuration","t":4,"rt":$n[0].Single,"sn":"baseClearDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u0446\u0435\u043f\u043d\u043e\u0439 \u0440\u0435\u0430\u043a\u0446\u0438\u0438"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseJumpDuration","t":4,"rt":$n[0].Single,"sn":"baseJumpDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"cellByCoord","t":4,"rt":$n[2].Dictionary$2(UnityEngine.Vector2Int,BoardCell),"sn":"cellByCoord","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cells","t":4,"rt":$n[2].List$1(BoardCell),"sn":"cells"},{"at":[new UnityEngine.HeaderAttribute("\u042f\u0447\u0435\u0439\u043a\u0438 \u043f\u043e\u043b\u044f"),new UnityEngine.TooltipAttribute("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e: \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e, \u0432\u0441\u0435 BoardCell \u0432 \u0434\u0435\u0442\u044f\u0445 \u044d\u0442\u043e\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430 \u0441\u043e\u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0441\u044e\u0434\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellsParent","t":4,"rt":$n[1].Transform,"sn":"cellsParent"},{"a":1,"n":"chainRunning","t":4,"rt":$n[0].Boolean,"sn":"chainRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u0428\u0430\u0433 \u0441\u0435\u0442\u043a\u0438 \u043f\u043e \u043c\u0438\u0440\u043e\u0432\u043e\u0439 \u043e\u0441\u0438 X \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u043c\u0438 \u043a\u043e\u043b\u043e\u043d\u043a\u0430\u043c\u0438 \u044f\u0447\u0435\u0435\u043a."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"columnSpacing","t":4,"rt":$n[0].Single,"sn":"columnSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0410\u0432\u0442\u043e-\u0440\u0430\u0441\u0447\u0451\u0442 Axial Coord \u0438\u0437 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"),new UnityEngine.TooltipAttribute("\u0422\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0446\u0435\u043d\u0442\u0440\u043e\u043c \u0441\u0435\u0442\u043a\u0438 (q=0, r=0). \u041c\u043e\u0436\u043d\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0441\u044e\u0434\u0430 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0441\u0430\u043c\u0438\u0445 BoardCell \u2014 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u043f\u043e\u043b\u044f."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gridOrigin","t":4,"rt":$n[1].Transform,"sn":"gridOrigin"},{"at":[new UnityEngine.TooltipAttribute("\u041f\u043e\u0432\u043e\u0440\u043e\u0442 (Euler), \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u043f\u0430\u0432\u043d\u044f\u0442\u0441\u044f \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0435 \u0441\u0442\u043e\u043f\u043a\u0438 \u043d\u0430 \u043f\u043e\u043b\u0435. Instantiate \u0441\u0442\u0430\u0432\u0438\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0442 \u043f\u043e\u0432\u043e\u0440\u043e\u0442, \u0430 \u043d\u0435 \u043f\u043e\u0432\u043e\u0440\u043e\u0442 \u0438\u0437 \u0441\u0430\u043c\u043e\u0433\u043e stackPrefab \u2014 \u0431\u0435\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u0441\u0442\u043e\u043f\u043a\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043f\u0430\u0432\u043d\u0438\u043b\u0438\u0441\u044c \u0441 \u043d\u0443\u043b\u0435\u0432\u044b\u043c \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u043c \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0441\u044f\u043c (Quaternion.identity), \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043c\u0430\u043a\u0435\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialStackRotation","t":4,"rt":$n[1].Vector3,"sn":"initialStackRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpAnimator","t":4,"rt":HexJumpAnimator,"sn":"jumpAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"palette","t":4,"rt":HexColorPalette,"sn":"palette"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"piecePrefab","t":4,"rt":HexPieceView,"sn":"piecePrefab"},{"at":[new UnityEngine.TooltipAttribute("\u0428\u0430\u0433 \u0441\u0435\u0442\u043a\u0438 \u043f\u043e \u043c\u0438\u0440\u043e\u0432\u043e\u0439 \u043e\u0441\u0438 Z \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u043c\u0438 \u0440\u044f\u0434\u0430\u043c\u0438 \u044f\u0447\u0435\u0435\u043a \u0432 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rowSpacing","t":4,"rt":$n[0].Single,"sn":"rowSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u043b\u0451\u0442/\u0438\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0445\u043b\u043e\u043f\u043d\u0443\u0432\u0448\u0435\u0439\u0441\u044f \u0441\u0442\u043e\u043f\u043a\u0438 \u0432 \u043e\u0434\u043d\u043e\u0439 \u0446\u0435\u043f\u043e\u0447\u043a\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedMultiplierPerClear","t":4,"rt":$n[0].Single,"sn":"speedMultiplierPerClear","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u043e\u043f\u043e\u043a \u043d\u0430 \u043f\u043e\u043b\u0435"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackPrefab","t":4,"rt":HexStack,"sn":"stackPrefab"},{"a":2,"n":"OnBoardCleared","t":2,"ad":{"a":2,"n":"add_OnBoardCleared","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBoardCleared","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBoardCleared","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBoardCleared","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*BoardManager end.*/

    /*HexColor start.*/
    $m("HexColor", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":HexColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Cyan","is":true,"t":4,"rt":HexColor,"sn":"Cyan","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":HexColor,"sn":"Green","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":HexColor,"sn":"Red","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"SoftBlue","is":true,"t":4,"rt":HexColor,"sn":"SoftBlue","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Violet","is":true,"t":4,"rt":HexColor,"sn":"Violet","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"White","is":true,"t":4,"rt":HexColor,"sn":"White","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":HexColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexColor end.*/

    /*HexColorPalette start.*/
    $m("HexColorPalette", function () { return {"nested":[HexColorPalette.Entry],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "HexColorPalette", menuName: "Game/Hex Color Palette"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetMaterial","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0}],"sn":"GetMaterial","rt":$n[1].Material,"p":[HexColor]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"entries","t":4,"rt":System.Array.type(HexColorPalette.Entry),"sn":"entries"}]}; }, $n);
    /*HexColorPalette end.*/

    /*HexColorPalette+Entry start.*/
    $m("HexColorPalette.Entry", function () { return {"td":HexColorPalette,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":HexColor,"sn":"color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"material","t":4,"rt":$n[1].Material,"sn":"material"}]}; }, $n);
    /*HexColorPalette+Entry end.*/

    /*HexJumpAnimator start.*/
    $m("HexJumpAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimateDisappear","t":8,"pi":[{"n":"stackRoot","pt":$n[1].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"AnimateDisappear","rt":$n[3].IEnumerator,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"AnimatePieceTransfer","t":8,"pi":[{"n":"piece","pt":$n[1].Transform,"ps":0},{"n":"from","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[1].Vector3,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"AnimatePieceTransfer","rt":$n[3].IEnumerator,"p":[$n[1].Transform,$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"at":[new UnityEngine.HeaderAttribute("\u0414\u0443\u0433\u0430 \u043f\u0435\u0440\u0435\u043b\u0451\u0442\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arcHeight","t":4,"rt":$n[0].Single,"sn":"arcHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"easing","t":4,"rt":pc.AnimationCurve,"sn":"easing"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u0435\u0440\u0435\u0432\u043e\u0440\u043e\u0442 \u0444\u0438\u0448\u043a\u0438 \u0432 \u043f\u043e\u043b\u0451\u0442\u0435 (\u0417\u0410\u0413\u041b\u0423\u0428\u041a\u0410, \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u043d\u044b \u043d\u0430 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0437\u0443\u0430\u043b)"),new UnityEngine.TooltipAttribute("\u041d\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0433\u0440\u0430\u0434\u0443\u0441\u043e\u0432 \u0444\u0438\u0448\u043a\u0430 \u0432\u0441\u0442\u0430\u0451\u0442 \u043d\u0430 \u0440\u0435\u0431\u0440\u043e \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0441\u043e\u0441\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u043e\u043f\u043a\u0438 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0442\u043e\u0447\u043a\u0435 \u0434\u0443\u0433\u0438. 90 = \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u043f\u0443\u0442\u0438, \u0437\u0430\u0442\u0435\u043c \u043f\u0430\u0434\u0430\u0435\u0442 \u043f\u043b\u0430\u0448\u043c\u044f \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u043e\u043f\u043a\u0443."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flipPeakDegrees","t":4,"rt":$n[0].Single,"sn":"flipPeakDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HexJumpAnimator end.*/

    /*HexPieceView start.*/
    $m("HexPieceView", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.MeshRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetColor","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0},{"n":"palette","pt":HexColorPalette,"ps":1}],"sn":"SetColor","rt":$n[0].Void,"p":[HexColor,HexColorPalette]},{"a":2,"n":"Color","t":16,"rt":HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"s":{"a":1,"n":"set_Color","t":8,"p":[HexColor],"rt":$n[0].Void,"fs":"Color"},"fn":"Color"},{"a":1,"n":"meshRenderer","t":4,"rt":$n[1].MeshRenderer,"sn":"meshRenderer"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexPieceView end.*/

    /*HexStack start.*/
    $m("HexStack", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.BoxCollider)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AppendPiece","t":8,"pi":[{"n":"piece","pt":HexPieceView,"ps":0}],"sn":"AppendPiece","rt":$n[0].Void,"p":[HexPieceView]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BuildFromColors","t":8,"pi":[{"n":"colors","pt":$n[2].IReadOnlyList$1(HexColor),"ps":0}],"sn":"BuildFromColors","rt":$n[0].Void,"p":[$n[2].IReadOnlyList$1(HexColor)]},{"a":1,"n":"GetLocalPositionForIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetLocalPositionForIndex","rt":$n[1].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetNextSlotWorldPosition","t":8,"sn":"GetNextSlotWorldPosition","rt":$n[1].Vector3},{"a":2,"n":"GetTopWorldPosition","t":8,"sn":"GetTopWorldPosition","rt":$n[1].Vector3},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"colors","pt":$n[2].IReadOnlyList$1(HexColor),"ps":0},{"n":"prefab","pt":HexPieceView,"ps":1},{"n":"colorPalette","pt":HexColorPalette,"ps":2}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[2].IReadOnlyList$1(HexColor),HexPieceView,HexColorPalette]},{"a":2,"n":"PopTopPiece","t":8,"sn":"PopTopPiece","rt":HexPieceView},{"a":1,"n":"SpawnPieceAtTop","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0}],"sn":"SpawnPieceAtTop","rt":$n[0].Void,"p":[HexColor]},{"a":1,"n":"UpdateHitCollider","t":8,"sn":"UpdateHitCollider","rt":$n[0].Void},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"CurrentCell","t":16,"rt":BoardCell,"g":{"a":2,"n":"get_CurrentCell","t":8,"rt":BoardCell,"fg":"CurrentCell"},"s":{"a":2,"n":"set_CurrentCell","t":8,"p":[BoardCell],"rt":$n[0].Void,"fs":"CurrentCell"},"fn":"CurrentCell"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"IsMonochrome","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsMonochrome","t":8,"rt":$n[0].Boolean,"fg":"IsMonochrome","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsMonochrome"},{"a":2,"n":"TopColor","t":16,"rt":HexColor,"g":{"a":2,"n":"get_TopColor","t":8,"rt":HexColor,"fg":"TopColor","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"fn":"TopColor"},{"a":1,"n":"hitCollider","t":4,"rt":$n[1].BoxCollider,"sn":"hitCollider"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u0442\u043e\u043f\u043a\u0430, \u0437\u0430\u0434\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0441\u0446\u0435\u043d\u0435 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)"),new UnityEngine.TooltipAttribute("\u0415\u0441\u043b\u0438 \u0441\u0442\u043e\u043f\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0430 \u0432 \u0441\u0446\u0435\u043d\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0434\u043d\u0430 \u0438\u0437 \u0442\u0440\u0451\u0445 \u0441\u0442\u043e\u043f\u043e\u043a \u043b\u043e\u0442\u043a\u0430), \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0435\u0451 \u0446\u0432\u0435\u0442\u0430 \u0441\u043d\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445 \u2014 \u0444\u0438\u0448\u043a\u0438 \u0437\u0430\u0441\u043f\u0430\u0432\u043d\u044f\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialColors","t":4,"rt":$n[2].List$1(HexColor),"sn":"initialColors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"palette","t":4,"rt":HexColorPalette,"sn":"palette"},{"at":[new UnityEngine.TooltipAttribute("\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0444\u0438\u0448\u043a\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perPieceOffset","t":4,"rt":$n[1].Vector3,"sn":"perPieceOffset"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043f\u0430\u0432\u043d \u0444\u0438\u0448\u0435\u043a"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"piecePrefab","t":4,"rt":HexPieceView,"sn":"piecePrefab"},{"a":1,"n":"pieces","t":4,"rt":$n[2].List$1(HexPieceView),"sn":"pieces","ro":true},{"a":1,"backing":true,"n":"<CurrentCell>k__BackingField","t":4,"rt":BoardCell,"sn":"CurrentCell"}]}; }, $n);
    /*HexStack end.*/

    /*StackDragHandler start.*/
    $m("StackDragHandler", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(HexStack)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseDrag","t":8,"sn":"OnMouseDrag","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":1,"n":"RaycastCellUnderPointer","t":8,"sn":"RaycastCellUnderPointer","rt":BoardCell},{"a":1,"n":"ReturnToOrigin","t":8,"sn":"ReturnToOrigin","rt":$n[3].IEnumerator},{"a":2,"n":"SetBoard","t":8,"pi":[{"n":"boardManager","pt":BoardManager,"ps":0}],"sn":"SetBoard","rt":$n[0].Void,"p":[BoardManager]},{"a":2,"n":"IsInTray","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsInTray","t":8,"rt":$n[0].Boolean,"fg":"IsInTray","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInTray"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragHeight","t":4,"rt":$n[0].Single,"sn":"dragHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragPlane","t":4,"rt":$n[1].Plane,"sn":"dragPlane"},{"a":1,"n":"dragStartPosition","t":4,"rt":$n[1].Vector3,"sn":"dragStartPosition"},{"a":1,"n":"dragging","t":4,"rt":$n[0].Boolean,"sn":"dragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"grabOffset","t":4,"rt":$n[1].Vector3,"sn":"grabOffset"},{"a":1,"n":"hasMoved","t":4,"rt":$n[0].Boolean,"sn":"hasMoved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minDragDistanceToCountAsMoved","t":4,"rt":$n[0].Single,"sn":"minDragDistanceToCountAsMoved","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalPosition"},{"a":1,"n":"ownCollider","t":4,"rt":$n[1].Collider,"sn":"ownCollider"},{"a":1,"n":"pointerWorldPoint","t":4,"rt":$n[1].Vector3,"sn":"pointerWorldPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"returnDuration","t":4,"rt":$n[0].Single,"sn":"returnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"stack","t":4,"rt":HexStack,"sn":"stack"},{"a":2,"n":"OnAnyStackGrabbed","is":true,"t":2,"ad":{"a":2,"n":"add_OnAnyStackGrabbed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAnyStackGrabbed","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAnyStackGrabbed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAnyStackGrabbed","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnAnyStackMoved","is":true,"t":2,"ad":{"a":2,"n":"add_OnAnyStackMoved","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAnyStackMoved","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAnyStackMoved","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAnyStackMoved","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnAnyStackReleased","is":true,"t":2,"ad":{"a":2,"n":"add_OnAnyStackReleased","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAnyStackReleased","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAnyStackReleased","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAnyStackReleased","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*StackDragHandler end.*/

    /*GradientSlicedImage start.*/
    $m("GradientSlicedImage", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("UI/Gradient Sliced Image")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[4].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[0].Void,"p":[$n[4].VertexHelper]}]}; }, $n);
    /*GradientSlicedImage end.*/

    /*ScreenScaler start.*/
    $m("ScreenScaler", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Resize","t":8,"sn":"Resize","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"}]}; }, $n);
    /*ScreenScaler end.*/

    /*GameTimerUI start.*/
    $m("GameTimerUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StartTimer","t":8,"sn":"StartTimer","rt":$n[0].Void},{"a":2,"n":"StopTimer","t":8,"sn":"StopTimer","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockHand","t":4,"rt":$n[1].RectTransform,"sn":"clockHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"elapsed","t":4,"rt":$n[0].Single,"sn":"elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endAngleZ","t":4,"rt":$n[0].Single,"sn":"endAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startAngleZ","t":4,"rt":$n[0].Single,"sn":"startAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0414\u043e\u043b\u044f \u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0433\u043e\u0441\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u043e\u0441\u043b\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435 (\u043f\u043e \u0422\u0417 \u2014 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0442\u0440\u0435\u0442\u044c)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningRemainingFraction","t":4,"rt":$n[0].Single,"sn":"warningRemainingFraction","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"warningTriggered","t":4,"rt":$n[0].Boolean,"sn":"warningTriggered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnTimerExpired","t":2,"ad":{"a":2,"n":"add_OnTimerExpired","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTimerExpired","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTimerExpired","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTimerExpired","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnTimerStopped","t":2,"ad":{"a":2,"n":"add_OnTimerStopped","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTimerStopped","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTimerStopped","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTimerStopped","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnWarningZoneEntered","t":2,"ad":{"a":2,"n":"add_OnWarningZoneEntered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWarningZoneEntered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWarningZoneEntered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWarningZoneEntered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*GameTimerUI end.*/

    /*PackshotController start.*/
    $m("PackshotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0435\u0432\u0438\u0434\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d \u043f\u044d\u043a\u0448\u043e\u0442\u0430 \u2014 \u043b\u044e\u0431\u043e\u0439 \u0442\u0430\u043f \u0432\u0435\u0434\u0451\u0442 \u0432 \u0441\u0442\u043e\u0440."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fullscreenTapButton","t":4,"rt":$n[4].Button,"sn":"fullscreenTapButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRoot","t":4,"rt":$n[1].GameObject,"sn":"panelRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNowButton","t":4,"rt":$n[4].Button,"sn":"playNowButton"},{"at":[new UnityEngine.TooltipAttribute("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e: \u0430\u043d\u0438\u043c\u0430\u0442\u043e\u0440 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u044d\u043a\u0448\u043e\u0442\u0430."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transitionAnimator","t":4,"rt":$n[1].Animator,"sn":"transitionAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transitionTrigger","t":4,"rt":$n[0].String,"sn":"transitionTrigger"}]}; }, $n);
    /*PackshotController end.*/

    /*TimerWarningEffects start.*/
    $m("TimerWarningEffects", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleTimerStopped","t":8,"sn":"HandleTimerStopped","rt":$n[0].Void},{"a":1,"n":"HandleWarningZoneEntered","t":8,"sn":"HandleWarningZoneEntered","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ResetVisuals","t":8,"sn":"ResetVisuals","rt":$n[0].Void},{"a":1,"n":"ColorAId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorAId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ColorBId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorBId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"blinkSpeed","t":4,"rt":$n[0].Single,"sn":"blinkSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0447\u0430\u0441\u043e\u0432 \u2014 \u0440\u0430\u0441\u0442\u0451\u0442 \u0438 \u0442\u0440\u044f\u0441\u0451\u0442\u0441\u044f"),new UnityEngine.TooltipAttribute("\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 child ClockHand'\u0430 (\u041d\u0415 \u0441\u0430\u043c \u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0439 pivot \u0438\u0437 GameTimerUI, \u0438\u043d\u0430\u0447\u0435 \u043f\u043e\u0432\u043e\u0440\u043e\u0442 \u0442\u0430\u0439\u043c\u0435\u0440\u0430 \u0438 \u0442\u0440\u044f\u0441\u043a\u0430 \u0431\u0443\u0434\u0443\u0442 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432\u0430\u0442\u044c \u0437\u0430 localEulerAngles)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockHandVisual","t":4,"rt":$n[1].Transform,"sn":"clockHandVisual"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"growScale","t":4,"rt":$n[0].Single,"sn":"growScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u2014 \u0441\u043c\u0435\u043d\u0430 \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0435"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loaderGradientImages","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"loaderGradientImages"},{"a":1,"n":"loaderMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"loaderMaterials"},{"a":1,"n":"originalColorA","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"originalColorA"},{"a":1,"n":"originalColorB","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"originalColorB"},{"a":1,"n":"originalHandScale","t":4,"rt":$n[1].Vector3,"sn":"originalHandScale"},{"a":1,"n":"originalOutlineColor","t":4,"rt":$n[1].Color,"sn":"originalOutlineColor"},{"at":[new UnityEngine.HeaderAttribute("\u0410\u0443\u0442\u043b\u0430\u0439\u043d \u2014 \u043c\u043e\u0440\u0433\u0430\u0435\u0442 \u0441\u0438\u043d\u0438\u043c"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"outlineGraphic","t":4,"rt":$n[4].Graphic,"sn":"outlineGraphic"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeAmplitudeDegrees","t":4,"rt":$n[0].Single,"sn":"shakeAmplitudeDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeSpeed","t":4,"rt":$n[0].Single,"sn":"shakeSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timer","t":4,"rt":GameTimerUI,"sn":"timer"},{"a":1,"n":"warningActive","t":4,"rt":$n[0].Boolean,"sn":"warningActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningColorA","t":4,"rt":$n[1].Color,"sn":"warningColorA"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningColorB","t":4,"rt":$n[1].Color,"sn":"warningColorB"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"warningOutlineColor","t":4,"rt":$n[1].Color,"sn":"warningOutlineColor"}]}; }, $n);
    /*TimerWarningEffects end.*/

    /*TutorialHandController start.*/
    $m("TutorialHandController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindAvailableTrayStack","t":8,"sn":"FindAvailableTrayStack","rt":$n[1].Transform},{"a":1,"n":"FindNearestEmptyCell","t":8,"pi":[{"n":"source","pt":$n[1].Transform,"ps":0}],"sn":"FindNearestEmptyCell","rt":BoardCell,"p":[$n[1].Transform]},{"a":1,"n":"HandleGrabbed","t":8,"sn":"HandleGrabbed","rt":$n[0].Void},{"a":1,"n":"HandleMoved","t":8,"sn":"HandleMoved","rt":$n[0].Void},{"a":1,"n":"HandleReleased","t":8,"pi":[{"n":"success","pt":$n[0].Boolean,"ps":0}],"sn":"HandleReleased","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"HideHand","t":8,"sn":"HideHand","rt":$n[0].Void},{"a":1,"n":"LoopHandAnimation","t":8,"sn":"LoopHandAnimation","rt":$n[3].IEnumerator},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReshowAfterDelay","t":8,"sn":"ReshowAfterDelay","rt":$n[3].IEnumerator},{"a":1,"n":"ShowHand","t":8,"sn":"ShowHand","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"WorldToCanvasPoint","t":8,"pi":[{"n":"worldPos","pt":$n[1].Vector3,"ps":0}],"sn":"WorldToCanvasPoint","rt":$n[1].Vector2,"p":[$n[1].Vector3]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":BoardManager,"sn":"board"},{"a":1,"n":"finished","t":4,"rt":$n[0].Boolean,"sn":"finished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handRoot","t":4,"rt":$n[1].RectTransform,"sn":"handRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleDelayBeforeReshow","t":4,"rt":$n[0].Single,"sn":"idleDelayBeforeReshow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleRoutine","t":4,"rt":$n[1].Coroutine,"sn":"idleRoutine"},{"a":1,"n":"loopRoutine","t":4,"rt":$n[1].Coroutine,"sn":"loopRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pauseAtEdges","t":4,"rt":$n[0].Single,"sn":"pauseAtEdges","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0412\u0441\u0435 \u0441\u0442\u043e\u043f\u043a\u0438 \u043b\u043e\u0442\u043a\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0443\u0442\u043e\u0440 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0435\u0449\u0451 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u0443\u044e (StackDragHandler.IsInTray == true)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"traySlots","t":4,"rt":System.Array.type(StackDragHandler),"sn":"traySlots"},{"at":[new UnityEngine.TooltipAttribute("\u041a\u0430\u043c\u0435\u0440\u0430, \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u044d\u043a\u0440\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u0443\u043a\u0438."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"worldCamera","t":4,"rt":$n[1].Camera,"sn":"worldCamera"},{"a":2,"n":"OnTutorialFinished","t":2,"ad":{"a":2,"n":"add_OnTutorialFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTutorialFinished","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTutorialFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTutorialFinished","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TutorialHandController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
