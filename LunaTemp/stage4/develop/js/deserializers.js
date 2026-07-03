var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.JointSpring' )
  var i1405 = data
  i1404.spring = i1405[0]
  i1404.damper = i1405[1]
  i1404.targetPosition = i1405[2]
  return i1404
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.JointMotor' )
  var i1407 = data
  i1406.m_TargetVelocity = i1407[0]
  i1406.m_Force = i1407[1]
  i1406.m_FreeSpin = i1407[2]
  return i1406
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.JointLimits' )
  var i1409 = data
  i1408.m_Min = i1409[0]
  i1408.m_Max = i1409[1]
  i1408.m_Bounciness = i1409[2]
  i1408.m_BounceMinVelocity = i1409[3]
  i1408.m_ContactDistance = i1409[4]
  i1408.minBounce = i1409[5]
  i1408.maxBounce = i1409[6]
  return i1408
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.JointDrive' )
  var i1411 = data
  i1410.m_PositionSpring = i1411[0]
  i1410.m_PositionDamper = i1411[1]
  i1410.m_MaximumForce = i1411[2]
  i1410.m_UseAcceleration = i1411[3]
  return i1410
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1413 = data
  i1412.m_Spring = i1413[0]
  i1412.m_Damper = i1413[1]
  return i1412
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1415 = data
  i1414.m_Limit = i1415[0]
  i1414.m_Bounciness = i1415[1]
  i1414.m_ContactDistance = i1415[2]
  return i1414
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1417 = data
  i1416.m_ExtremumSlip = i1417[0]
  i1416.m_ExtremumValue = i1417[1]
  i1416.m_AsymptoteSlip = i1417[2]
  i1416.m_AsymptoteValue = i1417[3]
  i1416.m_Stiffness = i1417[4]
  return i1416
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1419 = data
  i1418.m_LowerAngle = i1419[0]
  i1418.m_UpperAngle = i1419[1]
  return i1418
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1421 = data
  i1420.m_MotorSpeed = i1421[0]
  i1420.m_MaximumMotorTorque = i1421[1]
  return i1420
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1423 = data
  i1422.m_DampingRatio = i1423[0]
  i1422.m_Frequency = i1423[1]
  i1422.m_Angle = i1423[2]
  return i1422
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1425 = data
  i1424.m_LowerTranslation = i1425[0]
  i1424.m_UpperTranslation = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1427 = data
  i1426.name = i1427[0]
  i1426.width = i1427[1]
  i1426.height = i1427[2]
  i1426.mipmapCount = i1427[3]
  i1426.anisoLevel = i1427[4]
  i1426.filterMode = i1427[5]
  i1426.hdr = !!i1427[6]
  i1426.format = i1427[7]
  i1426.wrapMode = i1427[8]
  i1426.alphaIsTransparency = !!i1427[9]
  i1426.alphaSource = i1427[10]
  i1426.graphicsFormat = i1427[11]
  i1426.sRGBTexture = !!i1427[12]
  i1426.desiredColorSpace = i1427[13]
  i1426.wrapU = i1427[14]
  i1426.wrapV = i1427[15]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1428 = root || new pc.UnityMaterial()
  var i1429 = data
  i1428.name = i1429[0]
  request.r(i1429[1], i1429[2], 0, i1428, 'shader')
  i1428.renderQueue = i1429[3]
  i1428.enableInstancing = !!i1429[4]
  var i1431 = i1429[5]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1431[i + 0]) );
  }
  i1428.floatParameters = i1430
  var i1433 = i1429[6]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1433[i + 0]) );
  }
  i1428.colorParameters = i1432
  var i1435 = i1429[7]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1435[i + 0]) );
  }
  i1428.vectorParameters = i1434
  var i1437 = i1429[8]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1437[i + 0]) );
  }
  i1428.textureParameters = i1436
  var i1439 = i1429[9]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1439[i + 0]) );
  }
  i1428.materialFlags = i1438
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1443 = data
  i1442.name = i1443[0]
  i1442.value = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1447 = data
  i1446.name = i1447[0]
  i1446.value = new pc.Color(i1447[1], i1447[2], i1447[3], i1447[4])
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1451 = data
  i1450.name = i1451[0]
  i1450.value = new pc.Vec4( i1451[1], i1451[2], i1451[3], i1451[4] )
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1455 = data
  i1454.name = i1455[0]
  request.r(i1455[1], i1455[2], 0, i1454, 'value')
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.enabled = !!i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.halfPrecision = !!i1461[1]
  i1460.useSimplification = !!i1461[2]
  i1460.useUInt32IndexFormat = !!i1461[3]
  i1460.vertexCount = i1461[4]
  i1460.aabb = i1461[5]
  var i1463 = i1461[6]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( !!i1463[i + 0] );
  }
  i1460.streams = i1462
  i1460.vertices = i1461[7]
  var i1465 = i1461[8]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1465[i + 0]) );
  }
  i1460.subMeshes = i1464
  var i1467 = i1461[9]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 16) {
    i1466.push( new pc.Mat4().setData(i1467[i + 0], i1467[i + 1], i1467[i + 2], i1467[i + 3],  i1467[i + 4], i1467[i + 5], i1467[i + 6], i1467[i + 7],  i1467[i + 8], i1467[i + 9], i1467[i + 10], i1467[i + 11],  i1467[i + 12], i1467[i + 13], i1467[i + 14], i1467[i + 15]) );
  }
  i1460.bindposes = i1466
  var i1469 = i1461[10]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1469[i + 0]) );
  }
  i1460.blendShapes = i1468
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1475 = data
  i1474.triangles = i1475[0]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1481 = data
  i1480.name = i1481[0]
  var i1483 = i1481[1]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1483[i + 0]) );
  }
  i1480.frames = i1482
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1485 = data
  i1484.position = new pc.Vec3( i1485[0], i1485[1], i1485[2] )
  i1484.scale = new pc.Vec3( i1485[3], i1485[4], i1485[5] )
  i1484.rotation = new pc.Quat(i1485[6], i1485[7], i1485[8], i1485[9])
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'sharedMesh')
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'additionalVertexStreams')
  i1488.enabled = !!i1489[2]
  request.r(i1489[3], i1489[4], 0, i1488, 'sharedMaterial')
  var i1491 = i1489[5]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 2) {
  request.r(i1491[i + 0], i1491[i + 1], 2, i1490, '')
  }
  i1488.sharedMaterials = i1490
  i1488.receiveShadows = !!i1489[6]
  i1488.shadowCastingMode = i1489[7]
  i1488.sortingLayerID = i1489[8]
  i1488.sortingOrder = i1489[9]
  i1488.lightmapIndex = i1489[10]
  i1488.lightmapSceneIndex = i1489[11]
  i1488.lightmapScaleOffset = new pc.Vec4( i1489[12], i1489[13], i1489[14], i1489[15] )
  i1488.lightProbeUsage = i1489[16]
  i1488.reflectionProbeUsage = i1489[17]
  return i1488
}

Deserializers["HexPieceView"] = function (request, data, root) {
  var i1494 = root || request.c( 'HexPieceView' )
  var i1495 = data
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.tagId = i1497[1]
  i1496.enabled = !!i1497[2]
  i1496.isStatic = !!i1497[3]
  i1496.layer = i1497[4]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1499 = data
  i1498.center = new pc.Vec3( i1499[0], i1499[1], i1499[2] )
  i1498.size = new pc.Vec3( i1499[3], i1499[4], i1499[5] )
  i1498.enabled = !!i1499[6]
  i1498.isTrigger = !!i1499[7]
  request.r(i1499[8], i1499[9], 0, i1498, 'material')
  return i1498
}

Deserializers["HexStack"] = function (request, data, root) {
  var i1500 = root || request.c( 'HexStack' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'piecePrefab')
  request.r(i1501[2], i1501[3], 0, i1500, 'palette')
  i1500.perPieceOffset = new pc.Vec3( i1501[4], i1501[5], i1501[6] )
  var i1503 = i1501[7]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.add(i1503[i + 0]);
  }
  i1500.initialColors = i1502
  return i1500
}

Deserializers["StackDragHandler"] = function (request, data, root) {
  var i1506 = root || request.c( 'StackDragHandler' )
  var i1507 = data
  request.r(i1507[0], i1507[1], 0, i1506, 'board')
  i1506.dragHeight = i1507[2]
  i1506.minDragDistanceToCountAsMoved = i1507[3]
  i1506.returnDuration = i1507[4]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1509 = data
  i1508.name = i1509[0]
  i1508.atlasId = i1509[1]
  i1508.mipmapCount = i1509[2]
  i1508.hdr = !!i1509[3]
  i1508.size = i1509[4]
  i1508.anisoLevel = i1509[5]
  i1508.filterMode = i1509[6]
  var i1511 = i1509[7]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 4) {
    i1510.push( UnityEngine.Rect.MinMaxRect(i1511[i + 0], i1511[i + 1], i1511[i + 2], i1511[i + 3]) );
  }
  i1508.rects = i1510
  i1508.wrapU = i1509[8]
  i1508.wrapV = i1509[9]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.index = i1515[1]
  i1514.startup = !!i1515[2]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1517 = data
  i1516.aspect = i1517[0]
  i1516.orthographic = !!i1517[1]
  i1516.orthographicSize = i1517[2]
  i1516.backgroundColor = new pc.Color(i1517[3], i1517[4], i1517[5], i1517[6])
  i1516.nearClipPlane = i1517[7]
  i1516.farClipPlane = i1517[8]
  i1516.fieldOfView = i1517[9]
  i1516.depth = i1517[10]
  i1516.clearFlags = i1517[11]
  i1516.cullingMask = i1517[12]
  i1516.rect = i1517[13]
  request.r(i1517[14], i1517[15], 0, i1516, 'targetTexture')
  i1516.usePhysicalProperties = !!i1517[16]
  i1516.focalLength = i1517[17]
  i1516.sensorSize = new pc.Vec2( i1517[18], i1517[19] )
  i1516.lensShift = new pc.Vec2( i1517[20], i1517[21] )
  i1516.gateFit = i1517[22]
  i1516.commandBufferCount = i1517[23]
  i1516.cameraType = i1517[24]
  i1516.enabled = !!i1517[25]
  return i1516
}

Deserializers["GameFlowController"] = function (request, data, root) {
  var i1518 = root || request.c( 'GameFlowController' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'tutorial')
  request.r(i1519[2], i1519[3], 0, i1518, 'timer')
  request.r(i1519[4], i1519[5], 0, i1518, 'packshot')
  request.r(i1519[6], i1519[7], 0, i1518, 'board')
  var i1521 = i1519[8]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 2, i1520, '')
  }
  i1518.dragHandlers = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1525 = data
  i1524.type = i1525[0]
  i1524.color = new pc.Color(i1525[1], i1525[2], i1525[3], i1525[4])
  i1524.cullingMask = i1525[5]
  i1524.intensity = i1525[6]
  i1524.range = i1525[7]
  i1524.spotAngle = i1525[8]
  i1524.shadows = i1525[9]
  i1524.shadowNormalBias = i1525[10]
  i1524.shadowBias = i1525[11]
  i1524.shadowStrength = i1525[12]
  i1524.shadowResolution = i1525[13]
  i1524.lightmapBakeType = i1525[14]
  i1524.renderMode = i1525[15]
  request.r(i1525[16], i1525[17], 0, i1524, 'cookie')
  i1524.cookieSize = i1525[18]
  i1524.shadowNearPlane = i1525[19]
  i1524.occlusionMaskChannel = i1525[20]
  i1524.isBaked = !!i1525[21]
  i1524.mixedLightingMode = i1525[22]
  i1524.enabled = !!i1525[23]
  return i1524
}

Deserializers["ScreenScaler"] = function (request, data, root) {
  var i1526 = root || request.c( 'ScreenScaler' )
  var i1527 = data
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'sharedMesh')
  i1528.convex = !!i1529[2]
  i1528.enabled = !!i1529[3]
  i1528.isTrigger = !!i1529[4]
  request.r(i1529[5], i1529[6], 0, i1528, 'material')
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1531 = data
  i1530.pivot = new pc.Vec2( i1531[0], i1531[1] )
  i1530.anchorMin = new pc.Vec2( i1531[2], i1531[3] )
  i1530.anchorMax = new pc.Vec2( i1531[4], i1531[5] )
  i1530.sizeDelta = new pc.Vec2( i1531[6], i1531[7] )
  i1530.anchoredPosition3D = new pc.Vec3( i1531[8], i1531[9], i1531[10] )
  i1530.rotation = new pc.Quat(i1531[11], i1531[12], i1531[13], i1531[14])
  i1530.scale = new pc.Vec3( i1531[15], i1531[16], i1531[17] )
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1533 = data
  i1532.planeDistance = i1533[0]
  i1532.referencePixelsPerUnit = i1533[1]
  i1532.isFallbackOverlay = !!i1533[2]
  i1532.renderMode = i1533[3]
  i1532.renderOrder = i1533[4]
  i1532.sortingLayerName = i1533[5]
  i1532.sortingOrder = i1533[6]
  i1532.scaleFactor = i1533[7]
  request.r(i1533[8], i1533[9], 0, i1532, 'worldCamera')
  i1532.overrideSorting = !!i1533[10]
  i1532.pixelPerfect = !!i1533[11]
  i1532.targetDisplay = i1533[12]
  i1532.overridePixelPerfect = !!i1533[13]
  i1532.enabled = !!i1533[14]
  return i1532
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1535 = data
  i1534.m_UiScaleMode = i1535[0]
  i1534.m_ReferencePixelsPerUnit = i1535[1]
  i1534.m_ScaleFactor = i1535[2]
  i1534.m_ReferenceResolution = new pc.Vec2( i1535[3], i1535[4] )
  i1534.m_ScreenMatchMode = i1535[5]
  i1534.m_MatchWidthOrHeight = i1535[6]
  i1534.m_PhysicalUnit = i1535[7]
  i1534.m_FallbackScreenDPI = i1535[8]
  i1534.m_DefaultSpriteDPI = i1535[9]
  i1534.m_DynamicPixelsPerUnit = i1535[10]
  i1534.m_PresetInfoIsWorld = !!i1535[11]
  return i1534
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1537 = data
  i1536.m_IgnoreReversedGraphics = !!i1537[0]
  i1536.m_BlockingObjects = i1537[1]
  i1536.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1537[2] )
  return i1536
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i1538 = root || request.c( 'PackshotController' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'panelRoot')
  request.r(i1539[2], i1539[3], 0, i1538, 'playNowButton')
  request.r(i1539[4], i1539[5], 0, i1538, 'fullscreenTapButton')
  request.r(i1539[6], i1539[7], 0, i1538, 'transitionAnimator')
  i1538.transitionTrigger = i1539[8]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1541 = data
  i1540.cullTransparentMesh = !!i1541[0]
  return i1540
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.Image' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'm_Sprite')
  i1542.m_Type = i1543[2]
  i1542.m_PreserveAspect = !!i1543[3]
  i1542.m_FillCenter = !!i1543[4]
  i1542.m_FillMethod = i1543[5]
  i1542.m_FillAmount = i1543[6]
  i1542.m_FillClockwise = !!i1543[7]
  i1542.m_FillOrigin = i1543[8]
  i1542.m_UseSpriteMesh = !!i1543[9]
  i1542.m_PixelsPerUnitMultiplier = i1543[10]
  request.r(i1543[11], i1543[12], 0, i1542, 'm_Material')
  i1542.m_Maskable = !!i1543[13]
  i1542.m_Color = new pc.Color(i1543[14], i1543[15], i1543[16], i1543[17])
  i1542.m_RaycastTarget = !!i1543[18]
  i1542.m_RaycastPadding = new pc.Vec4( i1543[19], i1543[20], i1543[21], i1543[22] )
  return i1542
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.Button' )
  var i1545 = data
  i1544.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1545[0], i1544.m_OnClick)
  i1544.m_Navigation = request.d('UnityEngine.UI.Navigation', i1545[1], i1544.m_Navigation)
  i1544.m_Transition = i1545[2]
  i1544.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1545[3], i1544.m_Colors)
  i1544.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1545[4], i1544.m_SpriteState)
  i1544.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1545[5], i1544.m_AnimationTriggers)
  i1544.m_Interactable = !!i1545[6]
  request.r(i1545[7], i1545[8], 0, i1544, 'm_TargetGraphic')
  return i1544
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1547 = data
  i1546.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1547[0], i1546.m_PersistentCalls)
  return i1546
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1549 = data
  var i1551 = i1549[0]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.add(request.d('UnityEngine.Events.PersistentCall', i1551[i + 0]));
  }
  i1548.m_Calls = i1550
  return i1548
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'm_Target')
  i1554.m_TargetAssemblyTypeName = i1555[2]
  i1554.m_MethodName = i1555[3]
  i1554.m_Mode = i1555[4]
  i1554.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1555[5], i1554.m_Arguments)
  i1554.m_CallState = i1555[6]
  return i1554
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1557 = data
  i1556.m_Mode = i1557[0]
  i1556.m_WrapAround = !!i1557[1]
  request.r(i1557[2], i1557[3], 0, i1556, 'm_SelectOnUp')
  request.r(i1557[4], i1557[5], 0, i1556, 'm_SelectOnDown')
  request.r(i1557[6], i1557[7], 0, i1556, 'm_SelectOnLeft')
  request.r(i1557[8], i1557[9], 0, i1556, 'm_SelectOnRight')
  return i1556
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1559 = data
  i1558.m_NormalColor = new pc.Color(i1559[0], i1559[1], i1559[2], i1559[3])
  i1558.m_HighlightedColor = new pc.Color(i1559[4], i1559[5], i1559[6], i1559[7])
  i1558.m_PressedColor = new pc.Color(i1559[8], i1559[9], i1559[10], i1559[11])
  i1558.m_SelectedColor = new pc.Color(i1559[12], i1559[13], i1559[14], i1559[15])
  i1558.m_DisabledColor = new pc.Color(i1559[16], i1559[17], i1559[18], i1559[19])
  i1558.m_ColorMultiplier = i1559[20]
  i1558.m_FadeDuration = i1559[21]
  return i1558
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'm_HighlightedSprite')
  request.r(i1561[2], i1561[3], 0, i1560, 'm_PressedSprite')
  request.r(i1561[4], i1561[5], 0, i1560, 'm_SelectedSprite')
  request.r(i1561[6], i1561[7], 0, i1560, 'm_DisabledSprite')
  return i1560
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1563 = data
  i1562.m_NormalTrigger = i1563[0]
  i1562.m_HighlightedTrigger = i1563[1]
  i1562.m_PressedTrigger = i1563[2]
  i1562.m_SelectedTrigger = i1563[3]
  i1562.m_DisabledTrigger = i1563[4]
  return i1562
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1564 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1565 = data
  i1564.m_hasFontAssetChanged = !!i1565[0]
  request.r(i1565[1], i1565[2], 0, i1564, 'm_baseMaterial')
  i1564.m_maskOffset = new pc.Vec4( i1565[3], i1565[4], i1565[5], i1565[6] )
  i1564.m_text = i1565[7]
  i1564.m_isRightToLeft = !!i1565[8]
  request.r(i1565[9], i1565[10], 0, i1564, 'm_fontAsset')
  request.r(i1565[11], i1565[12], 0, i1564, 'm_sharedMaterial')
  var i1567 = i1565[13]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1564.m_fontSharedMaterials = i1566
  request.r(i1565[14], i1565[15], 0, i1564, 'm_fontMaterial')
  var i1569 = i1565[16]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1564.m_fontMaterials = i1568
  i1564.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1565[17], i1565[18], i1565[19], i1565[20])
  i1564.m_fontColor = new pc.Color(i1565[21], i1565[22], i1565[23], i1565[24])
  i1564.m_enableVertexGradient = !!i1565[25]
  i1564.m_colorMode = i1565[26]
  i1564.m_fontColorGradient = request.d('TMPro.VertexGradient', i1565[27], i1564.m_fontColorGradient)
  request.r(i1565[28], i1565[29], 0, i1564, 'm_fontColorGradientPreset')
  request.r(i1565[30], i1565[31], 0, i1564, 'm_spriteAsset')
  i1564.m_tintAllSprites = !!i1565[32]
  request.r(i1565[33], i1565[34], 0, i1564, 'm_StyleSheet')
  i1564.m_TextStyleHashCode = i1565[35]
  i1564.m_overrideHtmlColors = !!i1565[36]
  i1564.m_faceColor = UnityEngine.Color32.ConstructColor(i1565[37], i1565[38], i1565[39], i1565[40])
  i1564.m_fontSize = i1565[41]
  i1564.m_fontSizeBase = i1565[42]
  i1564.m_fontWeight = i1565[43]
  i1564.m_enableAutoSizing = !!i1565[44]
  i1564.m_fontSizeMin = i1565[45]
  i1564.m_fontSizeMax = i1565[46]
  i1564.m_fontStyle = i1565[47]
  i1564.m_HorizontalAlignment = i1565[48]
  i1564.m_VerticalAlignment = i1565[49]
  i1564.m_textAlignment = i1565[50]
  i1564.m_characterSpacing = i1565[51]
  i1564.m_wordSpacing = i1565[52]
  i1564.m_lineSpacing = i1565[53]
  i1564.m_lineSpacingMax = i1565[54]
  i1564.m_paragraphSpacing = i1565[55]
  i1564.m_charWidthMaxAdj = i1565[56]
  i1564.m_enableWordWrapping = !!i1565[57]
  i1564.m_wordWrappingRatios = i1565[58]
  i1564.m_overflowMode = i1565[59]
  request.r(i1565[60], i1565[61], 0, i1564, 'm_linkedTextComponent')
  request.r(i1565[62], i1565[63], 0, i1564, 'parentLinkedComponent')
  i1564.m_enableKerning = !!i1565[64]
  i1564.m_enableExtraPadding = !!i1565[65]
  i1564.checkPaddingRequired = !!i1565[66]
  i1564.m_isRichText = !!i1565[67]
  i1564.m_parseCtrlCharacters = !!i1565[68]
  i1564.m_isOrthographic = !!i1565[69]
  i1564.m_isCullingEnabled = !!i1565[70]
  i1564.m_horizontalMapping = i1565[71]
  i1564.m_verticalMapping = i1565[72]
  i1564.m_uvLineOffset = i1565[73]
  i1564.m_geometrySortingOrder = i1565[74]
  i1564.m_IsTextObjectScaleStatic = !!i1565[75]
  i1564.m_VertexBufferAutoSizeReduction = !!i1565[76]
  i1564.m_useMaxVisibleDescender = !!i1565[77]
  i1564.m_pageToDisplay = i1565[78]
  i1564.m_margin = new pc.Vec4( i1565[79], i1565[80], i1565[81], i1565[82] )
  i1564.m_isUsingLegacyAnimationComponent = !!i1565[83]
  i1564.m_isVolumetricText = !!i1565[84]
  request.r(i1565[85], i1565[86], 0, i1564, 'm_Material')
  i1564.m_Maskable = !!i1565[87]
  i1564.m_Color = new pc.Color(i1565[88], i1565[89], i1565[90], i1565[91])
  i1564.m_RaycastTarget = !!i1565[92]
  i1564.m_RaycastPadding = new pc.Vec4( i1565[93], i1565[94], i1565[95], i1565[96] )
  return i1564
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.VertexGradient' )
  var i1571 = data
  i1570.topLeft = new pc.Color(i1571[0], i1571[1], i1571[2], i1571[3])
  i1570.topRight = new pc.Color(i1571[4], i1571[5], i1571[6], i1571[7])
  i1570.bottomLeft = new pc.Color(i1571[8], i1571[9], i1571[10], i1571[11])
  i1570.bottomRight = new pc.Color(i1571[12], i1571[13], i1571[14], i1571[15])
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1573 = data
  i1572.color = new pc.Color(i1573[0], i1573[1], i1573[2], i1573[3])
  request.r(i1573[4], i1573[5], 0, i1572, 'sprite')
  i1572.flipX = !!i1573[6]
  i1572.flipY = !!i1573[7]
  i1572.drawMode = i1573[8]
  i1572.size = new pc.Vec2( i1573[9], i1573[10] )
  i1572.tileMode = i1573[11]
  i1572.adaptiveModeThreshold = i1573[12]
  i1572.maskInteraction = i1573[13]
  i1572.spriteSortPoint = i1573[14]
  i1572.enabled = !!i1573[15]
  request.r(i1573[16], i1573[17], 0, i1572, 'sharedMaterial')
  var i1575 = i1573[18]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 2, i1574, '')
  }
  i1572.sharedMaterials = i1574
  i1572.receiveShadows = !!i1573[19]
  i1572.shadowCastingMode = i1573[20]
  i1572.sortingLayerID = i1573[21]
  i1572.sortingOrder = i1573[22]
  i1572.lightmapIndex = i1573[23]
  i1572.lightmapSceneIndex = i1573[24]
  i1572.lightmapScaleOffset = new pc.Vec4( i1573[25], i1573[26], i1573[27], i1573[28] )
  i1572.lightProbeUsage = i1573[29]
  i1572.reflectionProbeUsage = i1573[30]
  return i1572
}

Deserializers["TutorialHandController"] = function (request, data, root) {
  var i1576 = root || request.c( 'TutorialHandController' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'handRoot')
  var i1579 = i1577[2]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.traySlots = i1578
  request.r(i1577[3], i1577[4], 0, i1576, 'board')
  request.r(i1577[5], i1577[6], 0, i1576, 'worldCamera')
  i1576.moveDuration = i1577[7]
  i1576.pauseAtEdges = i1577[8]
  i1576.idleDelayBeforeReshow = i1577[9]
  return i1576
}

Deserializers["GameTimerUI"] = function (request, data, root) {
  var i1580 = root || request.c( 'GameTimerUI' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'clockHand')
  i1580.duration = i1581[2]
  i1580.startAngleZ = i1581[3]
  i1580.endAngleZ = i1581[4]
  i1580.warningRemainingFraction = i1581[5]
  return i1580
}

Deserializers["GradientSlicedImage"] = function (request, data, root) {
  var i1582 = root || request.c( 'GradientSlicedImage' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'm_Material')
  request.r(i1583[2], i1583[3], 0, i1582, 'm_Sprite')
  i1582.m_Type = i1583[4]
  i1582.m_PreserveAspect = !!i1583[5]
  i1582.m_FillCenter = !!i1583[6]
  i1582.m_FillMethod = i1583[7]
  i1582.m_FillAmount = i1583[8]
  i1582.m_FillClockwise = !!i1583[9]
  i1582.m_FillOrigin = i1583[10]
  i1582.m_UseSpriteMesh = !!i1583[11]
  i1582.m_PixelsPerUnitMultiplier = i1583[12]
  i1582.m_Maskable = !!i1583[13]
  i1582.m_Color = new pc.Color(i1583[14], i1583[15], i1583[16], i1583[17])
  i1582.m_RaycastTarget = !!i1583[18]
  i1582.m_RaycastPadding = new pc.Vec4( i1583[19], i1583[20], i1583[21], i1583[22] )
  return i1582
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'm_FirstSelected')
  i1584.m_sendNavigationEvents = !!i1585[2]
  i1584.m_DragThreshold = i1585[3]
  return i1584
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1587 = data
  i1586.m_HorizontalAxis = i1587[0]
  i1586.m_VerticalAxis = i1587[1]
  i1586.m_SubmitButton = i1587[2]
  i1586.m_CancelButton = i1587[3]
  i1586.m_InputActionsPerSecond = i1587[4]
  i1586.m_RepeatDelay = i1587[5]
  i1586.m_ForceModuleActive = !!i1587[6]
  i1586.m_SendPointerHoverToParent = !!i1587[7]
  return i1586
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i1588 = root || request.c( 'BoardManager' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'cellsParent')
  var i1591 = i1589[2]
  var i1590 = new (System.Collections.Generic.List$1(Bridge.ns('BoardCell')))
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 1, i1590, '')
  }
  i1588.cells = i1590
  request.r(i1589[3], i1589[4], 0, i1588, 'gridOrigin')
  i1588.columnSpacing = i1589[5]
  i1588.rowSpacing = i1589[6]
  request.r(i1589[7], i1589[8], 0, i1588, 'stackPrefab')
  request.r(i1589[9], i1589[10], 0, i1588, 'piecePrefab')
  request.r(i1589[11], i1589[12], 0, i1588, 'palette')
  i1588.initialStackRotation = new pc.Vec3( i1589[13], i1589[14], i1589[15] )
  i1588.baseJumpDuration = i1589[16]
  i1588.baseClearDuration = i1589[17]
  i1588.speedMultiplierPerClear = i1589[18]
  request.r(i1589[19], i1589[20], 0, i1588, 'jumpAnimator')
  return i1588
}

Deserializers["BoardCell"] = function (request, data, root) {
  var i1594 = root || request.c( 'BoardCell' )
  var i1595 = data
  i1594.autoComputeAxialFromPosition = !!i1595[0]
  i1594.axialCoord = new pc.Vec2( i1595[1], i1595[2] )
  var i1597 = i1595[3]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(i1597[i + 0]);
  }
  i1594.initialStackColors = i1596
  i1594.isClickable = !!i1595[4]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1599 = data
  i1598.center = new pc.Vec3( i1599[0], i1599[1], i1599[2] )
  i1598.radius = i1599[3]
  i1598.enabled = !!i1599[4]
  i1598.isTrigger = !!i1599[5]
  request.r(i1599[6], i1599[7], 0, i1598, 'material')
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1601 = data
  i1600.ambientIntensity = i1601[0]
  i1600.reflectionIntensity = i1601[1]
  i1600.ambientMode = i1601[2]
  i1600.ambientLight = new pc.Color(i1601[3], i1601[4], i1601[5], i1601[6])
  i1600.ambientSkyColor = new pc.Color(i1601[7], i1601[8], i1601[9], i1601[10])
  i1600.ambientGroundColor = new pc.Color(i1601[11], i1601[12], i1601[13], i1601[14])
  i1600.ambientEquatorColor = new pc.Color(i1601[15], i1601[16], i1601[17], i1601[18])
  i1600.fogColor = new pc.Color(i1601[19], i1601[20], i1601[21], i1601[22])
  i1600.fogEndDistance = i1601[23]
  i1600.fogStartDistance = i1601[24]
  i1600.fogDensity = i1601[25]
  i1600.fog = !!i1601[26]
  request.r(i1601[27], i1601[28], 0, i1600, 'skybox')
  i1600.fogMode = i1601[29]
  var i1603 = i1601[30]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1603[i + 0]) );
  }
  i1600.lightmaps = i1602
  i1600.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1601[31], i1600.lightProbes)
  i1600.lightmapsMode = i1601[32]
  i1600.mixedBakeMode = i1601[33]
  i1600.environmentLightingMode = i1601[34]
  i1600.ambientProbe = new pc.SphericalHarmonicsL2(i1601[35])
  request.r(i1601[36], i1601[37], 0, i1600, 'customReflection')
  request.r(i1601[38], i1601[39], 0, i1600, 'defaultReflection')
  i1600.defaultReflectionMode = i1601[40]
  i1600.defaultReflectionResolution = i1601[41]
  i1600.sunLightObjectId = i1601[42]
  i1600.pixelLightCount = i1601[43]
  i1600.defaultReflectionHDR = !!i1601[44]
  i1600.hasLightDataAsset = !!i1601[45]
  i1600.hasManualGenerate = !!i1601[46]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'lightmapColor')
  request.r(i1607[2], i1607[3], 0, i1606, 'lightmapDirection')
  request.r(i1607[4], i1607[5], 0, i1606, 'shadowMask')
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1608 = root || new UnityEngine.LightProbes()
  var i1609 = data
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1617 = data
  var i1619 = i1617[0]
  var i1618 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1619[i + 0]));
  }
  i1616.ShaderCompilationErrors = i1618
  i1616.name = i1617[1]
  i1616.guid = i1617[2]
  var i1621 = i1617[3]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( i1621[i + 0] );
  }
  i1616.shaderDefinedKeywords = i1620
  var i1623 = i1617[4]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1623[i + 0]) );
  }
  i1616.passes = i1622
  var i1625 = i1617[5]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1625[i + 0]) );
  }
  i1616.usePasses = i1624
  var i1627 = i1617[6]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1627[i + 0]) );
  }
  i1616.defaultParameterValues = i1626
  request.r(i1617[7], i1617[8], 0, i1616, 'unityFallbackShader')
  i1616.readDepth = !!i1617[9]
  i1616.hasDepthOnlyPass = !!i1617[10]
  i1616.isCreatedByShaderGraph = !!i1617[11]
  i1616.disableBatching = !!i1617[12]
  i1616.compiled = !!i1617[13]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1631 = data
  i1630.shaderName = i1631[0]
  i1630.errorMessage = i1631[1]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1636 = root || new pc.UnityShaderPass()
  var i1637 = data
  i1636.id = i1637[0]
  i1636.subShaderIndex = i1637[1]
  i1636.name = i1637[2]
  i1636.passType = i1637[3]
  i1636.grabPassTextureName = i1637[4]
  i1636.usePass = !!i1637[5]
  i1636.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[6], i1636.zTest)
  i1636.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[7], i1636.zWrite)
  i1636.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[8], i1636.culling)
  i1636.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1637[9], i1636.blending)
  i1636.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1637[10], i1636.alphaBlending)
  i1636.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[11], i1636.colorWriteMask)
  i1636.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[12], i1636.offsetUnits)
  i1636.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[13], i1636.offsetFactor)
  i1636.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[14], i1636.stencilRef)
  i1636.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[15], i1636.stencilReadMask)
  i1636.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[16], i1636.stencilWriteMask)
  i1636.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1637[17], i1636.stencilOp)
  i1636.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1637[18], i1636.stencilOpFront)
  i1636.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1637[19], i1636.stencilOpBack)
  var i1639 = i1637[20]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1639[i + 0]) );
  }
  i1636.tags = i1638
  var i1641 = i1637[21]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( i1641[i + 0] );
  }
  i1636.passDefinedKeywords = i1640
  var i1643 = i1637[22]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1643[i + 0]) );
  }
  i1636.passDefinedKeywordGroups = i1642
  var i1645 = i1637[23]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1645[i + 0]) );
  }
  i1636.variants = i1644
  var i1647 = i1637[24]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1647[i + 0]) );
  }
  i1636.excludedVariants = i1646
  i1636.hasDepthReader = !!i1637[25]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1649 = data
  i1648.val = i1649[0]
  i1648.name = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1651 = data
  i1650.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1651[0], i1650.src)
  i1650.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1651[1], i1650.dst)
  i1650.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1651[2], i1650.op)
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1653 = data
  i1652.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[0], i1652.pass)
  i1652.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[1], i1652.fail)
  i1652.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[2], i1652.zFail)
  i1652.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[3], i1652.comp)
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.value = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1661 = data
  var i1663 = i1661[0]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( i1663[i + 0] );
  }
  i1660.keywords = i1662
  i1660.hasDiscard = !!i1661[1]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1667 = data
  i1666.passId = i1667[0]
  i1666.subShaderIndex = i1667[1]
  var i1669 = i1667[2]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1666.keywords = i1668
  i1666.vertexProgram = i1667[3]
  i1666.fragmentProgram = i1667[4]
  i1666.exportedForWebGl2 = !!i1667[5]
  i1666.readDepth = !!i1667[6]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'shader')
  i1672.pass = i1673[2]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.type = i1677[1]
  i1676.value = new pc.Vec4( i1677[2], i1677[3], i1677[4], i1677[5] )
  i1676.textureValue = i1677[6]
  i1676.shaderPropertyFlag = i1677[7]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1679 = data
  i1678.name = i1679[0]
  request.r(i1679[1], i1679[2], 0, i1678, 'texture')
  i1678.aabb = i1679[3]
  i1678.vertices = i1679[4]
  i1678.triangles = i1679[5]
  i1678.textureRect = UnityEngine.Rect.MinMaxRect(i1679[6], i1679[7], i1679[8], i1679[9])
  i1678.packedRect = UnityEngine.Rect.MinMaxRect(i1679[10], i1679[11], i1679[12], i1679[13])
  i1678.border = new pc.Vec4( i1679[14], i1679[15], i1679[16], i1679[17] )
  i1678.transparency = i1679[18]
  i1678.bounds = i1679[19]
  i1678.pixelsPerUnit = i1679[20]
  i1678.textureWidth = i1679[21]
  i1678.textureHeight = i1679[22]
  i1678.nativeSize = new pc.Vec2( i1679[23], i1679[24] )
  i1678.pivot = new pc.Vec2( i1679[25], i1679[26] )
  i1678.textureRectOffset = new pc.Vec2( i1679[27], i1679[28] )
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.ascent = i1681[1]
  i1680.originalLineHeight = i1681[2]
  i1680.fontSize = i1681[3]
  var i1683 = i1681[4]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1683[i + 0]) );
  }
  i1680.characterInfo = i1682
  request.r(i1681[5], i1681[6], 0, i1680, 'texture')
  i1680.originalFontSize = i1681[7]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1687 = data
  i1686.index = i1687[0]
  i1686.advance = i1687[1]
  i1686.bearing = i1687[2]
  i1686.glyphWidth = i1687[3]
  i1686.glyphHeight = i1687[4]
  i1686.minX = i1687[5]
  i1686.maxX = i1687[6]
  i1686.minY = i1687[7]
  i1686.maxY = i1687[8]
  i1686.uvBottomLeftX = i1687[9]
  i1686.uvBottomLeftY = i1687[10]
  i1686.uvBottomRightX = i1687[11]
  i1686.uvBottomRightY = i1687[12]
  i1686.uvTopLeftX = i1687[13]
  i1686.uvTopLeftY = i1687[14]
  i1686.uvTopRightX = i1687[15]
  i1686.uvTopRightY = i1687[16]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.bytes64 = i1689[1]
  i1688.data = i1689[2]
  return i1688
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1690 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'atlas')
  i1690.normalStyle = i1691[2]
  i1690.normalSpacingOffset = i1691[3]
  i1690.boldStyle = i1691[4]
  i1690.boldSpacing = i1691[5]
  i1690.italicStyle = i1691[6]
  i1690.tabSize = i1691[7]
  i1690.hashCode = i1691[8]
  request.r(i1691[9], i1691[10], 0, i1690, 'material')
  i1690.materialHashCode = i1691[11]
  i1690.m_Version = i1691[12]
  i1690.m_SourceFontFileGUID = i1691[13]
  request.r(i1691[14], i1691[15], 0, i1690, 'm_SourceFontFile_EditorRef')
  request.r(i1691[16], i1691[17], 0, i1690, 'm_SourceFontFile')
  i1690.m_AtlasPopulationMode = i1691[18]
  i1690.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1691[19], i1690.m_FaceInfo)
  var i1693 = i1691[20]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('UnityEngine.TextCore.Glyph', i1693[i + 0]));
  }
  i1690.m_GlyphTable = i1692
  var i1695 = i1691[21]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.add(request.d('TMPro.TMP_Character', i1695[i + 0]));
  }
  i1690.m_CharacterTable = i1694
  var i1697 = i1691[22]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 2, i1696, '')
  }
  i1690.m_AtlasTextures = i1696
  i1690.m_AtlasTextureIndex = i1691[23]
  i1690.m_IsMultiAtlasTexturesEnabled = !!i1691[24]
  i1690.m_ClearDynamicDataOnBuild = !!i1691[25]
  var i1699 = i1691[26]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('UnityEngine.TextCore.GlyphRect', i1699[i + 0]));
  }
  i1690.m_UsedGlyphRects = i1698
  var i1701 = i1691[27]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('UnityEngine.TextCore.GlyphRect', i1701[i + 0]));
  }
  i1690.m_FreeGlyphRects = i1700
  i1690.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1691[28], i1690.m_fontInfo)
  i1690.m_AtlasWidth = i1691[29]
  i1690.m_AtlasHeight = i1691[30]
  i1690.m_AtlasPadding = i1691[31]
  i1690.m_AtlasRenderMode = i1691[32]
  var i1703 = i1691[33]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.add(request.d('TMPro.TMP_Glyph', i1703[i + 0]));
  }
  i1690.m_glyphInfoList = i1702
  i1690.m_KerningTable = request.d('TMPro.KerningTable', i1691[34], i1690.m_KerningTable)
  i1690.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1691[35], i1690.m_FontFeatureTable)
  var i1705 = i1691[36]
  var i1704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 1, i1704, '')
  }
  i1690.fallbackFontAssets = i1704
  var i1707 = i1691[37]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 1, i1706, '')
  }
  i1690.m_FallbackFontAssetTable = i1706
  i1690.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1691[38], i1690.m_CreationSettings)
  var i1709 = i1691[39]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('TMPro.TMP_FontWeightPair', i1709[i + 0]) );
  }
  i1690.m_FontWeightTable = i1708
  var i1711 = i1691[40]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('TMPro.TMP_FontWeightPair', i1711[i + 0]) );
  }
  i1690.fontWeights = i1710
  return i1690
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1713 = data
  i1712.m_FaceIndex = i1713[0]
  i1712.m_FamilyName = i1713[1]
  i1712.m_StyleName = i1713[2]
  i1712.m_PointSize = i1713[3]
  i1712.m_Scale = i1713[4]
  i1712.m_UnitsPerEM = i1713[5]
  i1712.m_LineHeight = i1713[6]
  i1712.m_AscentLine = i1713[7]
  i1712.m_CapLine = i1713[8]
  i1712.m_MeanLine = i1713[9]
  i1712.m_Baseline = i1713[10]
  i1712.m_DescentLine = i1713[11]
  i1712.m_SuperscriptOffset = i1713[12]
  i1712.m_SuperscriptSize = i1713[13]
  i1712.m_SubscriptOffset = i1713[14]
  i1712.m_SubscriptSize = i1713[15]
  i1712.m_UnderlineOffset = i1713[16]
  i1712.m_UnderlineThickness = i1713[17]
  i1712.m_StrikethroughOffset = i1713[18]
  i1712.m_StrikethroughThickness = i1713[19]
  i1712.m_TabWidth = i1713[20]
  return i1712
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1717 = data
  i1716.m_Index = i1717[0]
  i1716.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1717[1], i1716.m_Metrics)
  i1716.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1717[2], i1716.m_GlyphRect)
  i1716.m_Scale = i1717[3]
  i1716.m_AtlasIndex = i1717[4]
  i1716.m_ClassDefinitionType = i1717[5]
  return i1716
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1719 = data
  i1718.m_Width = i1719[0]
  i1718.m_Height = i1719[1]
  i1718.m_HorizontalBearingX = i1719[2]
  i1718.m_HorizontalBearingY = i1719[3]
  i1718.m_HorizontalAdvance = i1719[4]
  return i1718
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1721 = data
  i1720.m_X = i1721[0]
  i1720.m_Y = i1721[1]
  i1720.m_Width = i1721[2]
  i1720.m_Height = i1721[3]
  return i1720
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1724 = root || request.c( 'TMPro.TMP_Character' )
  var i1725 = data
  i1724.m_ElementType = i1725[0]
  i1724.m_Unicode = i1725[1]
  i1724.m_GlyphIndex = i1725[2]
  i1724.m_Scale = i1725[3]
  return i1724
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1730 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1731 = data
  i1730.Name = i1731[0]
  i1730.PointSize = i1731[1]
  i1730.Scale = i1731[2]
  i1730.CharacterCount = i1731[3]
  i1730.LineHeight = i1731[4]
  i1730.Baseline = i1731[5]
  i1730.Ascender = i1731[6]
  i1730.CapHeight = i1731[7]
  i1730.Descender = i1731[8]
  i1730.CenterLine = i1731[9]
  i1730.SuperscriptOffset = i1731[10]
  i1730.SubscriptOffset = i1731[11]
  i1730.SubSize = i1731[12]
  i1730.Underline = i1731[13]
  i1730.UnderlineThickness = i1731[14]
  i1730.strikethrough = i1731[15]
  i1730.strikethroughThickness = i1731[16]
  i1730.TabWidth = i1731[17]
  i1730.Padding = i1731[18]
  i1730.AtlasWidth = i1731[19]
  i1730.AtlasHeight = i1731[20]
  return i1730
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1734 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1735 = data
  i1734.id = i1735[0]
  i1734.x = i1735[1]
  i1734.y = i1735[2]
  i1734.width = i1735[3]
  i1734.height = i1735[4]
  i1734.xOffset = i1735[5]
  i1734.yOffset = i1735[6]
  i1734.xAdvance = i1735[7]
  i1734.scale = i1735[8]
  return i1734
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1736 = root || request.c( 'TMPro.KerningTable' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('TMPro.KerningPair', i1739[i + 0]));
  }
  i1736.kerningPairs = i1738
  return i1736
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.KerningPair' )
  var i1743 = data
  i1742.xOffset = i1743[0]
  i1742.m_FirstGlyph = i1743[1]
  i1742.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1743[2], i1742.m_FirstGlyphAdjustments)
  i1742.m_SecondGlyph = i1743[3]
  i1742.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1743[4], i1742.m_SecondGlyphAdjustments)
  i1742.m_IgnoreSpacingAdjustments = !!i1743[5]
  return i1742
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1744 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1745 = data
  var i1747 = i1745[0]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1747[i + 0]));
  }
  i1744.m_GlyphPairAdjustmentRecords = i1746
  return i1744
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1751 = data
  i1750.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1751[0], i1750.m_FirstAdjustmentRecord)
  i1750.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1751[1], i1750.m_SecondAdjustmentRecord)
  i1750.m_FeatureLookupFlags = i1751[2]
  return i1750
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1753 = data
  i1752.m_GlyphIndex = i1753[0]
  i1752.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1753[1], i1752.m_GlyphValueRecord)
  return i1752
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1755 = data
  i1754.m_XPlacement = i1755[0]
  i1754.m_YPlacement = i1755[1]
  i1754.m_XAdvance = i1755[2]
  i1754.m_YAdvance = i1755[3]
  return i1754
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1759 = data
  i1758.sourceFontFileName = i1759[0]
  i1758.sourceFontFileGUID = i1759[1]
  i1758.pointSizeSamplingMode = i1759[2]
  i1758.pointSize = i1759[3]
  i1758.padding = i1759[4]
  i1758.packingMode = i1759[5]
  i1758.atlasWidth = i1759[6]
  i1758.atlasHeight = i1759[7]
  i1758.characterSetSelectionMode = i1759[8]
  i1758.characterSequence = i1759[9]
  i1758.referencedFontAssetGUID = i1759[10]
  i1758.referencedTextAssetGUID = i1759[11]
  i1758.fontStyle = i1759[12]
  i1758.fontStyleModifier = i1759[13]
  i1758.renderMode = i1759[14]
  i1758.includeFontFeatures = !!i1759[15]
  return i1758
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'regularTypeface')
  request.r(i1763[2], i1763[3], 0, i1762, 'italicTypeface')
  return i1762
}

Deserializers["HexColorPalette"] = function (request, data, root) {
  var i1764 = root || request.c( 'HexColorPalette' )
  var i1765 = data
  var i1767 = i1765[0]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('HexColorPalette+Entry', i1767[i + 0]) );
  }
  i1764.entries = i1766
  return i1764
}

Deserializers["HexColorPalette+Entry"] = function (request, data, root) {
  var i1770 = root || request.c( 'HexColorPalette+Entry' )
  var i1771 = data
  i1770.color = i1771[0]
  request.r(i1771[1], i1771[2], 0, i1770, 'material')
  return i1770
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.TMP_Settings' )
  var i1773 = data
  i1772.m_enableWordWrapping = !!i1773[0]
  i1772.m_enableKerning = !!i1773[1]
  i1772.m_enableExtraPadding = !!i1773[2]
  i1772.m_enableTintAllSprites = !!i1773[3]
  i1772.m_enableParseEscapeCharacters = !!i1773[4]
  i1772.m_EnableRaycastTarget = !!i1773[5]
  i1772.m_GetFontFeaturesAtRuntime = !!i1773[6]
  i1772.m_missingGlyphCharacter = i1773[7]
  i1772.m_warningsDisabled = !!i1773[8]
  request.r(i1773[9], i1773[10], 0, i1772, 'm_defaultFontAsset')
  i1772.m_defaultFontAssetPath = i1773[11]
  i1772.m_defaultFontSize = i1773[12]
  i1772.m_defaultAutoSizeMinRatio = i1773[13]
  i1772.m_defaultAutoSizeMaxRatio = i1773[14]
  i1772.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1773[15], i1773[16] )
  i1772.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1773[17], i1773[18] )
  i1772.m_autoSizeTextContainer = !!i1773[19]
  i1772.m_IsTextObjectScaleStatic = !!i1773[20]
  var i1775 = i1773[21]
  var i1774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1775.length; i += 2) {
  request.r(i1775[i + 0], i1775[i + 1], 1, i1774, '')
  }
  i1772.m_fallbackFontAssets = i1774
  i1772.m_matchMaterialPreset = !!i1773[22]
  request.r(i1773[23], i1773[24], 0, i1772, 'm_defaultSpriteAsset')
  i1772.m_defaultSpriteAssetPath = i1773[25]
  i1772.m_enableEmojiSupport = !!i1773[26]
  i1772.m_MissingCharacterSpriteUnicode = i1773[27]
  i1772.m_defaultColorGradientPresetsPath = i1773[28]
  request.r(i1773[29], i1773[30], 0, i1772, 'm_defaultStyleSheet')
  i1772.m_StyleSheetsResourcePath = i1773[31]
  request.r(i1773[32], i1773[33], 0, i1772, 'm_leadingCharacters')
  request.r(i1773[34], i1773[35], 0, i1772, 'm_followingCharacters')
  i1772.m_UseModernHangulLineBreakingRules = !!i1773[36]
  return i1772
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'spriteSheet')
  var i1779 = i1777[2]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('TMPro.TMP_Sprite', i1779[i + 0]));
  }
  i1776.spriteInfoList = i1778
  var i1781 = i1777[3]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1781.length; i += 2) {
  request.r(i1781[i + 0], i1781[i + 1], 1, i1780, '')
  }
  i1776.fallbackSpriteAssets = i1780
  i1776.hashCode = i1777[4]
  request.r(i1777[5], i1777[6], 0, i1776, 'material')
  i1776.materialHashCode = i1777[7]
  i1776.m_Version = i1777[8]
  i1776.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1777[9], i1776.m_FaceInfo)
  var i1783 = i1777[10]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.add(request.d('TMPro.TMP_SpriteCharacter', i1783[i + 0]));
  }
  i1776.m_SpriteCharacterTable = i1782
  var i1785 = i1777[11]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.add(request.d('TMPro.TMP_SpriteGlyph', i1785[i + 0]));
  }
  i1776.m_SpriteGlyphTable = i1784
  return i1776
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1789 = data
  i1788.name = i1789[0]
  i1788.hashCode = i1789[1]
  i1788.unicode = i1789[2]
  i1788.pivot = new pc.Vec2( i1789[3], i1789[4] )
  request.r(i1789[5], i1789[6], 0, i1788, 'sprite')
  i1788.id = i1789[7]
  i1788.x = i1789[8]
  i1788.y = i1789[9]
  i1788.width = i1789[10]
  i1788.height = i1789[11]
  i1788.xOffset = i1789[12]
  i1788.yOffset = i1789[13]
  i1788.xAdvance = i1789[14]
  i1788.scale = i1789[15]
  return i1788
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1794 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1795 = data
  i1794.m_Name = i1795[0]
  i1794.m_HashCode = i1795[1]
  i1794.m_ElementType = i1795[2]
  i1794.m_Unicode = i1795[3]
  i1794.m_GlyphIndex = i1795[4]
  i1794.m_Scale = i1795[5]
  return i1794
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'sprite')
  i1798.m_Index = i1799[2]
  i1798.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1799[3], i1798.m_Metrics)
  i1798.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1799[4], i1798.m_GlyphRect)
  i1798.m_Scale = i1799[5]
  i1798.m_AtlasIndex = i1799[6]
  i1798.m_ClassDefinitionType = i1799[7]
  return i1798
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1800 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1801 = data
  var i1803 = i1801[0]
  var i1802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.add(request.d('TMPro.TMP_Style', i1803[i + 0]));
  }
  i1800.m_StyleList = i1802
  return i1800
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_Style' )
  var i1807 = data
  i1806.m_Name = i1807[0]
  i1806.m_HashCode = i1807[1]
  i1806.m_OpeningDefinition = i1807[2]
  i1806.m_ClosingDefinition = i1807[3]
  i1806.m_OpeningTagArray = i1807[4]
  i1806.m_ClosingTagArray = i1807[5]
  i1806.m_OpeningTagUnicodeArray = i1807[6]
  i1806.m_ClosingTagUnicodeArray = i1807[7]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1811[i + 0]) );
  }
  i1808.files = i1810
  i1808.componentToPrefabIds = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1815 = data
  i1814.path = i1815[0]
  request.r(i1815[1], i1815[2], 0, i1814, 'unityObject')
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1817 = data
  var i1819 = i1817[0]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1819[i + 0]) );
  }
  i1816.scriptsExecutionOrder = i1818
  var i1821 = i1817[1]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1821[i + 0]) );
  }
  i1816.sortingLayers = i1820
  var i1823 = i1817[2]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1823[i + 0]) );
  }
  i1816.cullingLayers = i1822
  i1816.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1817[3], i1816.timeSettings)
  i1816.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1817[4], i1816.physicsSettings)
  i1816.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1817[5], i1816.physics2DSettings)
  i1816.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1817[6], i1816.qualitySettings)
  i1816.enableRealtimeShadows = !!i1817[7]
  i1816.enableAutoInstancing = !!i1817[8]
  i1816.enableStaticBatching = !!i1817[9]
  i1816.enableDynamicBatching = !!i1817[10]
  i1816.usePreservativeDynamicBatching = !!i1817[11]
  i1816.lightmapEncodingQuality = i1817[12]
  i1816.desiredColorSpace = i1817[13]
  var i1825 = i1817[14]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( i1825[i + 0] );
  }
  i1816.allTags = i1824
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.value = i1829[1]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1833 = data
  i1832.id = i1833[0]
  i1832.name = i1833[1]
  i1832.value = i1833[2]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1837 = data
  i1836.id = i1837[0]
  i1836.name = i1837[1]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1839 = data
  i1838.fixedDeltaTime = i1839[0]
  i1838.maximumDeltaTime = i1839[1]
  i1838.timeScale = i1839[2]
  i1838.maximumParticleTimestep = i1839[3]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1841 = data
  i1840.gravity = new pc.Vec3( i1841[0], i1841[1], i1841[2] )
  i1840.defaultSolverIterations = i1841[3]
  i1840.bounceThreshold = i1841[4]
  i1840.autoSyncTransforms = !!i1841[5]
  i1840.autoSimulation = !!i1841[6]
  var i1843 = i1841[7]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1843[i + 0]) );
  }
  i1840.collisionMatrix = i1842
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1847 = data
  i1846.enabled = !!i1847[0]
  i1846.layerId = i1847[1]
  i1846.otherLayerId = i1847[2]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'material')
  i1848.gravity = new pc.Vec2( i1849[2], i1849[3] )
  i1848.positionIterations = i1849[4]
  i1848.velocityIterations = i1849[5]
  i1848.velocityThreshold = i1849[6]
  i1848.maxLinearCorrection = i1849[7]
  i1848.maxAngularCorrection = i1849[8]
  i1848.maxTranslationSpeed = i1849[9]
  i1848.maxRotationSpeed = i1849[10]
  i1848.baumgarteScale = i1849[11]
  i1848.baumgarteTOIScale = i1849[12]
  i1848.timeToSleep = i1849[13]
  i1848.linearSleepTolerance = i1849[14]
  i1848.angularSleepTolerance = i1849[15]
  i1848.defaultContactOffset = i1849[16]
  i1848.autoSimulation = !!i1849[17]
  i1848.queriesHitTriggers = !!i1849[18]
  i1848.queriesStartInColliders = !!i1849[19]
  i1848.callbacksOnDisable = !!i1849[20]
  i1848.reuseCollisionCallbacks = !!i1849[21]
  i1848.autoSyncTransforms = !!i1849[22]
  var i1851 = i1849[23]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1851[i + 0]) );
  }
  i1848.collisionMatrix = i1850
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1855 = data
  i1854.enabled = !!i1855[0]
  i1854.layerId = i1855[1]
  i1854.otherLayerId = i1855[2]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1857 = data
  var i1859 = i1857[0]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1859[i + 0]) );
  }
  i1856.qualityLevels = i1858
  var i1861 = i1857[1]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( i1861[i + 0] );
  }
  i1856.names = i1860
  i1856.shadows = i1857[2]
  i1856.anisotropicFiltering = i1857[3]
  i1856.antiAliasing = i1857[4]
  i1856.lodBias = i1857[5]
  i1856.shadowCascades = i1857[6]
  i1856.shadowDistance = i1857[7]
  i1856.shadowmaskMode = i1857[8]
  i1856.shadowProjection = i1857[9]
  i1856.shadowResolution = i1857[10]
  i1856.softParticles = !!i1857[11]
  i1856.softVegetation = !!i1857[12]
  i1856.activeColorSpace = i1857[13]
  i1856.desiredColorSpace = i1857[14]
  i1856.masterTextureLimit = i1857[15]
  i1856.maxQueuedFrames = i1857[16]
  i1856.particleRaycastBudget = i1857[17]
  i1856.pixelLightCount = i1857[18]
  i1856.realtimeReflectionProbes = !!i1857[19]
  i1856.shadowCascade2Split = i1857[20]
  i1856.shadowCascade4Split = new pc.Vec3( i1857[21], i1857[22], i1857[23] )
  i1856.streamingMipmapsActive = !!i1857[24]
  i1856.vSyncCount = i1857[25]
  i1856.asyncUploadBufferSize = i1857[26]
  i1856.asyncUploadTimeSlice = i1857[27]
  i1856.billboardsFaceCameraPosition = !!i1857[28]
  i1856.shadowNearPlaneOffset = i1857[29]
  i1856.streamingMipmapsMemoryBudget = i1857[30]
  i1856.maximumLODLevel = i1857[31]
  i1856.streamingMipmapsAddAllCameras = !!i1857[32]
  i1856.streamingMipmapsMaxLevelReduction = i1857[33]
  i1856.streamingMipmapsRenderersPerFrame = i1857[34]
  i1856.resolutionScalingFixedDPIFactor = i1857[35]
  i1856.streamingMipmapsMaxFileIORequests = i1857[36]
  i1856.currentQualityLevel = i1857[37]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1867 = data
  i1866.weight = i1867[0]
  i1866.vertices = i1867[1]
  i1866.normals = i1867[2]
  i1866.tangents = i1867[3]
  return i1866
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_ObjectArgument')
  i1868.m_ObjectArgumentAssemblyTypeName = i1869[2]
  i1868.m_IntArgument = i1869[3]
  i1868.m_FloatArgument = i1869[4]
  i1868.m_StringArgument = i1869[5]
  i1868.m_BoolArgument = !!i1869[6]
  return i1868
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1870 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1871 = data
  i1870.xPlacement = i1871[0]
  i1870.yPlacement = i1871[1]
  i1870.xAdvance = i1871[2]
  i1870.yAdvance = i1871[3]
  return i1870
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[13],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[13],"80":[5],"81":[82],"83":[82],"24":[23],"8":[5],"10":[9],"12":[10],"36":[30,23],"84":[23],"85":[23],"27":[24],"31":[30,23],"86":[23],"26":[24],"87":[23],"88":[23],"89":[23],"90":[23],"91":[23],"92":[23],"93":[23],"94":[23],"95":[23],"96":[30,23],"97":[23],"98":[23],"99":[23],"100":[23],"101":[30,23],"102":[23],"103":[37],"104":[37],"38":[37],"105":[37],"106":[13],"107":[13],"108":[23],"109":[5,23],"33":[23,30],"110":[23],"111":[30,23],"112":[5],"113":[30,23],"114":[23],"115":[116],"117":[116],"118":[116]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","HexPieceView","UnityEngine.BoxCollider","HexStack","HexColorPalette","StackDragHandler","UnityEngine.Camera","UnityEngine.AudioListener","GameFlowController","TutorialHandController","GameTimerUI","PackshotController","BoardManager","UnityEngine.Light","ScreenScaler","UnityEngine.MeshCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.SpriteRenderer","GradientSlicedImage","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BoardCell","UnityEngine.SphereCollider","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAdGame";

Deserializers.lunaInitializationTime = "06/30/2026 14:26:56";

Deserializers.lunaDaysRunning = "2.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "40957";

Deserializers.projectId = "ad403f79cfcc0934eb35c8a941402c62";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1706";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3704";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAdGame";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "34151094-3a46-4570-8c2f-b636df58405b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

