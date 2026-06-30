var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i222 = root || request.c( 'UnityEngine.JointSpring' )
  var i223 = data
  i222.spring = i223[0]
  i222.damper = i223[1]
  i222.targetPosition = i223[2]
  return i222
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i224 = root || request.c( 'UnityEngine.JointMotor' )
  var i225 = data
  i224.m_TargetVelocity = i225[0]
  i224.m_Force = i225[1]
  i224.m_FreeSpin = i225[2]
  return i224
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i226 = root || request.c( 'UnityEngine.JointLimits' )
  var i227 = data
  i226.m_Min = i227[0]
  i226.m_Max = i227[1]
  i226.m_Bounciness = i227[2]
  i226.m_BounceMinVelocity = i227[3]
  i226.m_ContactDistance = i227[4]
  i226.minBounce = i227[5]
  i226.maxBounce = i227[6]
  return i226
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i228 = root || request.c( 'UnityEngine.JointDrive' )
  var i229 = data
  i228.m_PositionSpring = i229[0]
  i228.m_PositionDamper = i229[1]
  i228.m_MaximumForce = i229[2]
  i228.m_UseAcceleration = i229[3]
  return i228
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i230 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i231 = data
  i230.m_Spring = i231[0]
  i230.m_Damper = i231[1]
  return i230
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i232 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i233 = data
  i232.m_Limit = i233[0]
  i232.m_Bounciness = i233[1]
  i232.m_ContactDistance = i233[2]
  return i232
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i234 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i235 = data
  i234.m_ExtremumSlip = i235[0]
  i234.m_ExtremumValue = i235[1]
  i234.m_AsymptoteSlip = i235[2]
  i234.m_AsymptoteValue = i235[3]
  i234.m_Stiffness = i235[4]
  return i234
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i236 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i237 = data
  i236.m_LowerAngle = i237[0]
  i236.m_UpperAngle = i237[1]
  return i236
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i238 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i239 = data
  i238.m_MotorSpeed = i239[0]
  i238.m_MaximumMotorTorque = i239[1]
  return i238
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i240 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i241 = data
  i240.m_DampingRatio = i241[0]
  i240.m_Frequency = i241[1]
  i240.m_Angle = i241[2]
  return i240
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i243 = data
  i242.m_LowerTranslation = i243[0]
  i242.m_UpperTranslation = i243[1]
  return i242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i245 = data
  i244.name = i245[0]
  i244.width = i245[1]
  i244.height = i245[2]
  i244.mipmapCount = i245[3]
  i244.anisoLevel = i245[4]
  i244.filterMode = i245[5]
  i244.hdr = !!i245[6]
  i244.format = i245[7]
  i244.wrapMode = i245[8]
  i244.alphaIsTransparency = !!i245[9]
  i244.alphaSource = i245[10]
  i244.graphicsFormat = i245[11]
  i244.sRGBTexture = !!i245[12]
  i244.desiredColorSpace = i245[13]
  i244.wrapU = i245[14]
  i244.wrapV = i245[15]
  return i244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i246 = root || new pc.UnityMaterial()
  var i247 = data
  i246.name = i247[0]
  request.r(i247[1], i247[2], 0, i246, 'shader')
  i246.renderQueue = i247[3]
  i246.enableInstancing = !!i247[4]
  var i249 = i247[5]
  var i248 = []
  for(var i = 0; i < i249.length; i += 1) {
    i248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i249[i + 0]) );
  }
  i246.floatParameters = i248
  var i251 = i247[6]
  var i250 = []
  for(var i = 0; i < i251.length; i += 1) {
    i250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i251[i + 0]) );
  }
  i246.colorParameters = i250
  var i253 = i247[7]
  var i252 = []
  for(var i = 0; i < i253.length; i += 1) {
    i252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i253[i + 0]) );
  }
  i246.vectorParameters = i252
  var i255 = i247[8]
  var i254 = []
  for(var i = 0; i < i255.length; i += 1) {
    i254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i255[i + 0]) );
  }
  i246.textureParameters = i254
  var i257 = i247[9]
  var i256 = []
  for(var i = 0; i < i257.length; i += 1) {
    i256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i257[i + 0]) );
  }
  i246.materialFlags = i256
  return i246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i261 = data
  i260.name = i261[0]
  i260.value = i261[1]
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i265 = data
  i264.name = i265[0]
  i264.value = new pc.Color(i265[1], i265[2], i265[3], i265[4])
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i269 = data
  i268.name = i269[0]
  i268.value = new pc.Vec4( i269[1], i269[2], i269[3], i269[4] )
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i273 = data
  i272.name = i273[0]
  request.r(i273[1], i273[2], 0, i272, 'value')
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i277 = data
  i276.name = i277[0]
  i276.enabled = !!i277[1]
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i279 = data
  i278.name = i279[0]
  i278.atlasId = i279[1]
  i278.mipmapCount = i279[2]
  i278.hdr = !!i279[3]
  i278.size = i279[4]
  i278.anisoLevel = i279[5]
  i278.filterMode = i279[6]
  var i281 = i279[7]
  var i280 = []
  for(var i = 0; i < i281.length; i += 4) {
    i280.push( UnityEngine.Rect.MinMaxRect(i281[i + 0], i281[i + 1], i281[i + 2], i281[i + 3]) );
  }
  i278.rects = i280
  i278.wrapU = i279[8]
  i278.wrapV = i279[9]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i285 = data
  i284.name = i285[0]
  i284.index = i285[1]
  i284.startup = !!i285[2]
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i287 = data
  i286.aspect = i287[0]
  i286.orthographic = !!i287[1]
  i286.orthographicSize = i287[2]
  i286.backgroundColor = new pc.Color(i287[3], i287[4], i287[5], i287[6])
  i286.nearClipPlane = i287[7]
  i286.farClipPlane = i287[8]
  i286.fieldOfView = i287[9]
  i286.depth = i287[10]
  i286.clearFlags = i287[11]
  i286.cullingMask = i287[12]
  i286.rect = i287[13]
  request.r(i287[14], i287[15], 0, i286, 'targetTexture')
  i286.usePhysicalProperties = !!i287[16]
  i286.focalLength = i287[17]
  i286.sensorSize = new pc.Vec2( i287[18], i287[19] )
  i286.lensShift = new pc.Vec2( i287[20], i287[21] )
  i286.gateFit = i287[22]
  i286.commandBufferCount = i287[23]
  i286.cameraType = i287[24]
  i286.enabled = !!i287[25]
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i289 = data
  i288.name = i289[0]
  i288.tagId = i289[1]
  i288.enabled = !!i289[2]
  i288.isStatic = !!i289[3]
  i288.layer = i289[4]
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i291 = data
  i290.type = i291[0]
  i290.color = new pc.Color(i291[1], i291[2], i291[3], i291[4])
  i290.cullingMask = i291[5]
  i290.intensity = i291[6]
  i290.range = i291[7]
  i290.spotAngle = i291[8]
  i290.shadows = i291[9]
  i290.shadowNormalBias = i291[10]
  i290.shadowBias = i291[11]
  i290.shadowStrength = i291[12]
  i290.shadowResolution = i291[13]
  i290.lightmapBakeType = i291[14]
  i290.renderMode = i291[15]
  request.r(i291[16], i291[17], 0, i290, 'cookie')
  i290.cookieSize = i291[18]
  i290.shadowNearPlane = i291[19]
  i290.occlusionMaskChannel = i291[20]
  i290.isBaked = !!i291[21]
  i290.mixedLightingMode = i291[22]
  i290.enabled = !!i291[23]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i293 = data
  i292.pivot = new pc.Vec2( i293[0], i293[1] )
  i292.anchorMin = new pc.Vec2( i293[2], i293[3] )
  i292.anchorMax = new pc.Vec2( i293[4], i293[5] )
  i292.sizeDelta = new pc.Vec2( i293[6], i293[7] )
  i292.anchoredPosition3D = new pc.Vec3( i293[8], i293[9], i293[10] )
  i292.rotation = new pc.Quat(i293[11], i293[12], i293[13], i293[14])
  i292.scale = new pc.Vec3( i293[15], i293[16], i293[17] )
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i295 = data
  i294.planeDistance = i295[0]
  i294.referencePixelsPerUnit = i295[1]
  i294.isFallbackOverlay = !!i295[2]
  i294.renderMode = i295[3]
  i294.renderOrder = i295[4]
  i294.sortingLayerName = i295[5]
  i294.sortingOrder = i295[6]
  i294.scaleFactor = i295[7]
  request.r(i295[8], i295[9], 0, i294, 'worldCamera')
  i294.overrideSorting = !!i295[10]
  i294.pixelPerfect = !!i295[11]
  i294.targetDisplay = i295[12]
  i294.overridePixelPerfect = !!i295[13]
  i294.enabled = !!i295[14]
  return i294
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i297 = data
  i296.m_UiScaleMode = i297[0]
  i296.m_ReferencePixelsPerUnit = i297[1]
  i296.m_ScaleFactor = i297[2]
  i296.m_ReferenceResolution = new pc.Vec2( i297[3], i297[4] )
  i296.m_ScreenMatchMode = i297[5]
  i296.m_MatchWidthOrHeight = i297[6]
  i296.m_PhysicalUnit = i297[7]
  i296.m_FallbackScreenDPI = i297[8]
  i296.m_DefaultSpriteDPI = i297[9]
  i296.m_DynamicPixelsPerUnit = i297[10]
  i296.m_PresetInfoIsWorld = !!i297[11]
  return i296
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i298 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i299 = data
  i298.m_IgnoreReversedGraphics = !!i299[0]
  i298.m_BlockingObjects = i299[1]
  i298.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i299[2] )
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i301 = data
  i300.cullTransparentMesh = !!i301[0]
  return i300
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i302 = root || request.c( 'UnityEngine.UI.Image' )
  var i303 = data
  request.r(i303[0], i303[1], 0, i302, 'm_Sprite')
  i302.m_Type = i303[2]
  i302.m_PreserveAspect = !!i303[3]
  i302.m_FillCenter = !!i303[4]
  i302.m_FillMethod = i303[5]
  i302.m_FillAmount = i303[6]
  i302.m_FillClockwise = !!i303[7]
  i302.m_FillOrigin = i303[8]
  i302.m_UseSpriteMesh = !!i303[9]
  i302.m_PixelsPerUnitMultiplier = i303[10]
  request.r(i303[11], i303[12], 0, i302, 'm_Material')
  i302.m_Maskable = !!i303[13]
  i302.m_Color = new pc.Color(i303[14], i303[15], i303[16], i303[17])
  i302.m_RaycastTarget = !!i303[18]
  i302.m_RaycastPadding = new pc.Vec4( i303[19], i303[20], i303[21], i303[22] )
  return i302
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i305 = data
  request.r(i305[0], i305[1], 0, i304, 'm_FirstSelected')
  i304.m_sendNavigationEvents = !!i305[2]
  i304.m_DragThreshold = i305[3]
  return i304
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i306 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i307 = data
  i306.m_HorizontalAxis = i307[0]
  i306.m_VerticalAxis = i307[1]
  i306.m_SubmitButton = i307[2]
  i306.m_CancelButton = i307[3]
  i306.m_InputActionsPerSecond = i307[4]
  i306.m_RepeatDelay = i307[5]
  i306.m_ForceModuleActive = !!i307[6]
  i306.m_SendPointerHoverToParent = !!i307[7]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i309 = data
  i308.ambientIntensity = i309[0]
  i308.reflectionIntensity = i309[1]
  i308.ambientMode = i309[2]
  i308.ambientLight = new pc.Color(i309[3], i309[4], i309[5], i309[6])
  i308.ambientSkyColor = new pc.Color(i309[7], i309[8], i309[9], i309[10])
  i308.ambientGroundColor = new pc.Color(i309[11], i309[12], i309[13], i309[14])
  i308.ambientEquatorColor = new pc.Color(i309[15], i309[16], i309[17], i309[18])
  i308.fogColor = new pc.Color(i309[19], i309[20], i309[21], i309[22])
  i308.fogEndDistance = i309[23]
  i308.fogStartDistance = i309[24]
  i308.fogDensity = i309[25]
  i308.fog = !!i309[26]
  request.r(i309[27], i309[28], 0, i308, 'skybox')
  i308.fogMode = i309[29]
  var i311 = i309[30]
  var i310 = []
  for(var i = 0; i < i311.length; i += 1) {
    i310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i311[i + 0]) );
  }
  i308.lightmaps = i310
  i308.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i309[31], i308.lightProbes)
  i308.lightmapsMode = i309[32]
  i308.mixedBakeMode = i309[33]
  i308.environmentLightingMode = i309[34]
  i308.ambientProbe = new pc.SphericalHarmonicsL2(i309[35])
  request.r(i309[36], i309[37], 0, i308, 'customReflection')
  request.r(i309[38], i309[39], 0, i308, 'defaultReflection')
  i308.defaultReflectionMode = i309[40]
  i308.defaultReflectionResolution = i309[41]
  i308.sunLightObjectId = i309[42]
  i308.pixelLightCount = i309[43]
  i308.defaultReflectionHDR = !!i309[44]
  i308.hasLightDataAsset = !!i309[45]
  i308.hasManualGenerate = !!i309[46]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i315 = data
  request.r(i315[0], i315[1], 0, i314, 'lightmapColor')
  request.r(i315[2], i315[3], 0, i314, 'lightmapDirection')
  request.r(i315[4], i315[5], 0, i314, 'shadowMask')
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i316 = root || new UnityEngine.LightProbes()
  var i317 = data
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i325 = data
  var i327 = i325[0]
  var i326 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i327.length; i += 1) {
    i326.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i327[i + 0]));
  }
  i324.ShaderCompilationErrors = i326
  i324.name = i325[1]
  i324.guid = i325[2]
  var i329 = i325[3]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( i329[i + 0] );
  }
  i324.shaderDefinedKeywords = i328
  var i331 = i325[4]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i331[i + 0]) );
  }
  i324.passes = i330
  var i333 = i325[5]
  var i332 = []
  for(var i = 0; i < i333.length; i += 1) {
    i332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i333[i + 0]) );
  }
  i324.usePasses = i332
  var i335 = i325[6]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i335[i + 0]) );
  }
  i324.defaultParameterValues = i334
  request.r(i325[7], i325[8], 0, i324, 'unityFallbackShader')
  i324.readDepth = !!i325[9]
  i324.hasDepthOnlyPass = !!i325[10]
  i324.isCreatedByShaderGraph = !!i325[11]
  i324.disableBatching = !!i325[12]
  i324.compiled = !!i325[13]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i339 = data
  i338.shaderName = i339[0]
  i338.errorMessage = i339[1]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i344 = root || new pc.UnityShaderPass()
  var i345 = data
  i344.id = i345[0]
  i344.subShaderIndex = i345[1]
  i344.name = i345[2]
  i344.passType = i345[3]
  i344.grabPassTextureName = i345[4]
  i344.usePass = !!i345[5]
  i344.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[6], i344.zTest)
  i344.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[7], i344.zWrite)
  i344.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[8], i344.culling)
  i344.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i345[9], i344.blending)
  i344.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i345[10], i344.alphaBlending)
  i344.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[11], i344.colorWriteMask)
  i344.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[12], i344.offsetUnits)
  i344.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[13], i344.offsetFactor)
  i344.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[14], i344.stencilRef)
  i344.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[15], i344.stencilReadMask)
  i344.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i345[16], i344.stencilWriteMask)
  i344.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i345[17], i344.stencilOp)
  i344.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i345[18], i344.stencilOpFront)
  i344.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i345[19], i344.stencilOpBack)
  var i347 = i345[20]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i347[i + 0]) );
  }
  i344.tags = i346
  var i349 = i345[21]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( i349[i + 0] );
  }
  i344.passDefinedKeywords = i348
  var i351 = i345[22]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i351[i + 0]) );
  }
  i344.passDefinedKeywordGroups = i350
  var i353 = i345[23]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i353[i + 0]) );
  }
  i344.variants = i352
  var i355 = i345[24]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i355[i + 0]) );
  }
  i344.excludedVariants = i354
  i344.hasDepthReader = !!i345[25]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i357 = data
  i356.val = i357[0]
  i356.name = i357[1]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i359 = data
  i358.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i359[0], i358.src)
  i358.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i359[1], i358.dst)
  i358.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i359[2], i358.op)
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i361 = data
  i360.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[0], i360.pass)
  i360.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[1], i360.fail)
  i360.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[2], i360.zFail)
  i360.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[3], i360.comp)
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i365 = data
  i364.name = i365[0]
  i364.value = i365[1]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i369 = data
  var i371 = i369[0]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( i371[i + 0] );
  }
  i368.keywords = i370
  i368.hasDiscard = !!i369[1]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i375 = data
  i374.passId = i375[0]
  i374.subShaderIndex = i375[1]
  var i377 = i375[2]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( i377[i + 0] );
  }
  i374.keywords = i376
  i374.vertexProgram = i375[3]
  i374.fragmentProgram = i375[4]
  i374.exportedForWebGl2 = !!i375[5]
  i374.readDepth = !!i375[6]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i381 = data
  request.r(i381[0], i381[1], 0, i380, 'shader')
  i380.pass = i381[2]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i385 = data
  i384.name = i385[0]
  i384.type = i385[1]
  i384.value = new pc.Vec4( i385[2], i385[3], i385[4], i385[5] )
  i384.textureValue = i385[6]
  i384.shaderPropertyFlag = i385[7]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i387 = data
  i386.name = i387[0]
  request.r(i387[1], i387[2], 0, i386, 'texture')
  i386.aabb = i387[3]
  i386.vertices = i387[4]
  i386.triangles = i387[5]
  i386.textureRect = UnityEngine.Rect.MinMaxRect(i387[6], i387[7], i387[8], i387[9])
  i386.packedRect = UnityEngine.Rect.MinMaxRect(i387[10], i387[11], i387[12], i387[13])
  i386.border = new pc.Vec4( i387[14], i387[15], i387[16], i387[17] )
  i386.transparency = i387[18]
  i386.bounds = i387[19]
  i386.pixelsPerUnit = i387[20]
  i386.textureWidth = i387[21]
  i386.textureHeight = i387[22]
  i386.nativeSize = new pc.Vec2( i387[23], i387[24] )
  i386.pivot = new pc.Vec2( i387[25], i387[26] )
  i386.textureRectOffset = new pc.Vec2( i387[27], i387[28] )
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i389 = data
  var i391 = i389[0]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i391[i + 0]) );
  }
  i388.files = i390
  i388.componentToPrefabIds = i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i395 = data
  i394.path = i395[0]
  request.r(i395[1], i395[2], 0, i394, 'unityObject')
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i397 = data
  var i399 = i397[0]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i399[i + 0]) );
  }
  i396.scriptsExecutionOrder = i398
  var i401 = i397[1]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i401[i + 0]) );
  }
  i396.sortingLayers = i400
  var i403 = i397[2]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i403[i + 0]) );
  }
  i396.cullingLayers = i402
  i396.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i397[3], i396.timeSettings)
  i396.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i397[4], i396.physicsSettings)
  i396.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i397[5], i396.physics2DSettings)
  i396.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i397[6], i396.qualitySettings)
  i396.enableRealtimeShadows = !!i397[7]
  i396.enableAutoInstancing = !!i397[8]
  i396.enableStaticBatching = !!i397[9]
  i396.enableDynamicBatching = !!i397[10]
  i396.usePreservativeDynamicBatching = !!i397[11]
  i396.lightmapEncodingQuality = i397[12]
  i396.desiredColorSpace = i397[13]
  var i405 = i397[14]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( i405[i + 0] );
  }
  i396.allTags = i404
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i409 = data
  i408.name = i409[0]
  i408.value = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i413 = data
  i412.id = i413[0]
  i412.name = i413[1]
  i412.value = i413[2]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i417 = data
  i416.id = i417[0]
  i416.name = i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i419 = data
  i418.fixedDeltaTime = i419[0]
  i418.maximumDeltaTime = i419[1]
  i418.timeScale = i419[2]
  i418.maximumParticleTimestep = i419[3]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i421 = data
  i420.gravity = new pc.Vec3( i421[0], i421[1], i421[2] )
  i420.defaultSolverIterations = i421[3]
  i420.bounceThreshold = i421[4]
  i420.autoSyncTransforms = !!i421[5]
  i420.autoSimulation = !!i421[6]
  var i423 = i421[7]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i423[i + 0]) );
  }
  i420.collisionMatrix = i422
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i427 = data
  i426.enabled = !!i427[0]
  i426.layerId = i427[1]
  i426.otherLayerId = i427[2]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'material')
  i428.gravity = new pc.Vec2( i429[2], i429[3] )
  i428.positionIterations = i429[4]
  i428.velocityIterations = i429[5]
  i428.velocityThreshold = i429[6]
  i428.maxLinearCorrection = i429[7]
  i428.maxAngularCorrection = i429[8]
  i428.maxTranslationSpeed = i429[9]
  i428.maxRotationSpeed = i429[10]
  i428.baumgarteScale = i429[11]
  i428.baumgarteTOIScale = i429[12]
  i428.timeToSleep = i429[13]
  i428.linearSleepTolerance = i429[14]
  i428.angularSleepTolerance = i429[15]
  i428.defaultContactOffset = i429[16]
  i428.autoSimulation = !!i429[17]
  i428.queriesHitTriggers = !!i429[18]
  i428.queriesStartInColliders = !!i429[19]
  i428.callbacksOnDisable = !!i429[20]
  i428.reuseCollisionCallbacks = !!i429[21]
  i428.autoSyncTransforms = !!i429[22]
  var i431 = i429[23]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i431[i + 0]) );
  }
  i428.collisionMatrix = i430
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i435 = data
  i434.enabled = !!i435[0]
  i434.layerId = i435[1]
  i434.otherLayerId = i435[2]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i437 = data
  var i439 = i437[0]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i439[i + 0]) );
  }
  i436.qualityLevels = i438
  var i441 = i437[1]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( i441[i + 0] );
  }
  i436.names = i440
  i436.shadows = i437[2]
  i436.anisotropicFiltering = i437[3]
  i436.antiAliasing = i437[4]
  i436.lodBias = i437[5]
  i436.shadowCascades = i437[6]
  i436.shadowDistance = i437[7]
  i436.shadowmaskMode = i437[8]
  i436.shadowProjection = i437[9]
  i436.shadowResolution = i437[10]
  i436.softParticles = !!i437[11]
  i436.softVegetation = !!i437[12]
  i436.activeColorSpace = i437[13]
  i436.desiredColorSpace = i437[14]
  i436.masterTextureLimit = i437[15]
  i436.maxQueuedFrames = i437[16]
  i436.particleRaycastBudget = i437[17]
  i436.pixelLightCount = i437[18]
  i436.realtimeReflectionProbes = !!i437[19]
  i436.shadowCascade2Split = i437[20]
  i436.shadowCascade4Split = new pc.Vec3( i437[21], i437[22], i437[23] )
  i436.streamingMipmapsActive = !!i437[24]
  i436.vSyncCount = i437[25]
  i436.asyncUploadBufferSize = i437[26]
  i436.asyncUploadTimeSlice = i437[27]
  i436.billboardsFaceCameraPosition = !!i437[28]
  i436.shadowNearPlaneOffset = i437[29]
  i436.streamingMipmapsMemoryBudget = i437[30]
  i436.maximumLODLevel = i437[31]
  i436.streamingMipmapsAddAllCameras = !!i437[32]
  i436.streamingMipmapsMaxLevelReduction = i437[33]
  i436.streamingMipmapsRenderersPerFrame = i437[34]
  i436.resolutionScalingFixedDPIFactor = i437[35]
  i436.streamingMipmapsMaxFileIORequests = i437[36]
  i436.currentQualityLevel = i437[37]
  return i436
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[25],"26":[1],"27":[28],"29":[28],"30":[28],"31":[28],"32":[28],"33":[28],"34":[28],"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[36],"43":[36],"44":[36],"45":[36],"46":[36],"47":[36],"48":[36],"49":[1],"50":[51],"52":[53],"54":[53],"5":[4],"55":[4],"56":[4],"8":[5],"10":[9,4],"57":[4],"7":[5],"58":[4],"59":[4],"60":[4],"61":[4],"62":[4],"63":[4],"64":[4],"65":[4],"66":[4],"67":[9,4],"68":[4],"69":[4],"70":[4],"71":[4],"72":[9,4],"73":[4],"74":[12],"75":[12],"13":[12],"76":[12],"77":[1],"78":[1],"79":[4],"80":[51,4],"81":[4,9],"82":[4],"83":[9,4],"84":[51],"85":[9,4],"86":[4],"87":[88],"89":[88],"90":[88]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAdGame";

Deserializers.lunaInitializationTime = "06/30/2026 14:26:56";

Deserializers.lunaDaysRunning = "0.2";

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

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1814";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3186";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAdGame";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5b314b8b-4a80-48f8-9047-636cfbf63e3c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

