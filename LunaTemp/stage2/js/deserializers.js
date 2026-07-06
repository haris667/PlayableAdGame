var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointSpring' )
  var i647 = data
  i646.spring = i647[0]
  i646.damper = i647[1]
  i646.targetPosition = i647[2]
  return i646
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointMotor' )
  var i649 = data
  i648.m_TargetVelocity = i649[0]
  i648.m_Force = i649[1]
  i648.m_FreeSpin = i649[2]
  return i648
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointLimits' )
  var i651 = data
  i650.m_Min = i651[0]
  i650.m_Max = i651[1]
  i650.m_Bounciness = i651[2]
  i650.m_BounceMinVelocity = i651[3]
  i650.m_ContactDistance = i651[4]
  i650.minBounce = i651[5]
  i650.maxBounce = i651[6]
  return i650
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointDrive' )
  var i653 = data
  i652.m_PositionSpring = i653[0]
  i652.m_PositionDamper = i653[1]
  i652.m_MaximumForce = i653[2]
  i652.m_UseAcceleration = i653[3]
  return i652
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i655 = data
  i654.m_Spring = i655[0]
  i654.m_Damper = i655[1]
  return i654
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i657 = data
  i656.m_Limit = i657[0]
  i656.m_Bounciness = i657[1]
  i656.m_ContactDistance = i657[2]
  return i656
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i659 = data
  i658.m_ExtremumSlip = i659[0]
  i658.m_ExtremumValue = i659[1]
  i658.m_AsymptoteSlip = i659[2]
  i658.m_AsymptoteValue = i659[3]
  i658.m_Stiffness = i659[4]
  return i658
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i661 = data
  i660.m_LowerAngle = i661[0]
  i660.m_UpperAngle = i661[1]
  return i660
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i663 = data
  i662.m_MotorSpeed = i663[0]
  i662.m_MaximumMotorTorque = i663[1]
  return i662
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i665 = data
  i664.m_DampingRatio = i665[0]
  i664.m_Frequency = i665[1]
  i664.m_Angle = i665[2]
  return i664
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i667 = data
  i666.m_LowerTranslation = i667[0]
  i666.m_UpperTranslation = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i669 = data
  i668.name = i669[0]
  i668.width = i669[1]
  i668.height = i669[2]
  i668.mipmapCount = i669[3]
  i668.anisoLevel = i669[4]
  i668.filterMode = i669[5]
  i668.hdr = !!i669[6]
  i668.format = i669[7]
  i668.wrapMode = i669[8]
  i668.alphaIsTransparency = !!i669[9]
  i668.alphaSource = i669[10]
  i668.graphicsFormat = i669[11]
  i668.sRGBTexture = !!i669[12]
  i668.desiredColorSpace = i669[13]
  i668.wrapU = i669[14]
  i668.wrapV = i669[15]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i670 = root || new pc.UnityMaterial()
  var i671 = data
  i670.name = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'shader')
  i670.renderQueue = i671[3]
  i670.enableInstancing = !!i671[4]
  var i673 = i671[5]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i673[i + 0]) );
  }
  i670.floatParameters = i672
  var i675 = i671[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i675[i + 0]) );
  }
  i670.colorParameters = i674
  var i677 = i671[7]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i677[i + 0]) );
  }
  i670.vectorParameters = i676
  var i679 = i671[8]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i679[i + 0]) );
  }
  i670.textureParameters = i678
  var i681 = i671[9]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i681[i + 0]) );
  }
  i670.materialFlags = i680
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i685 = data
  i684.name = i685[0]
  i684.value = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i689 = data
  i688.name = i689[0]
  i688.value = new pc.Color(i689[1], i689[2], i689[3], i689[4])
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i693 = data
  i692.name = i693[0]
  i692.value = new pc.Vec4( i693[1], i693[2], i693[3], i693[4] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'value')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i701 = data
  i700.name = i701[0]
  i700.enabled = !!i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i703 = data
  i702.name = i703[0]
  i702.halfPrecision = !!i703[1]
  i702.useSimplification = !!i703[2]
  i702.useUInt32IndexFormat = !!i703[3]
  i702.vertexCount = i703[4]
  i702.aabb = i703[5]
  var i705 = i703[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( !!i705[i + 0] );
  }
  i702.streams = i704
  i702.vertices = i703[7]
  var i707 = i703[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i707[i + 0]) );
  }
  i702.subMeshes = i706
  var i709 = i703[9]
  var i708 = []
  for(var i = 0; i < i709.length; i += 16) {
    i708.push( new pc.Mat4().setData(i709[i + 0], i709[i + 1], i709[i + 2], i709[i + 3],  i709[i + 4], i709[i + 5], i709[i + 6], i709[i + 7],  i709[i + 8], i709[i + 9], i709[i + 10], i709[i + 11],  i709[i + 12], i709[i + 13], i709[i + 14], i709[i + 15]) );
  }
  i702.bindposes = i708
  var i711 = i703[10]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i711[i + 0]) );
  }
  i702.blendShapes = i710
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i717 = data
  i716.triangles = i717[0]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i723 = data
  i722.name = i723[0]
  var i725 = i723[1]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i725[i + 0]) );
  }
  i722.frames = i724
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i727 = data
  i726.position = new pc.Vec3( i727[0], i727[1], i727[2] )
  i726.scale = new pc.Vec3( i727[3], i727[4], i727[5] )
  i726.rotation = new pc.Quat(i727[6], i727[7], i727[8], i727[9])
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'sharedMesh')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'additionalVertexStreams')
  i730.enabled = !!i731[2]
  request.r(i731[3], i731[4], 0, i730, 'sharedMaterial')
  var i733 = i731[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.sharedMaterials = i732
  i730.receiveShadows = !!i731[6]
  i730.shadowCastingMode = i731[7]
  i730.sortingLayerID = i731[8]
  i730.sortingOrder = i731[9]
  i730.lightmapIndex = i731[10]
  i730.lightmapSceneIndex = i731[11]
  i730.lightmapScaleOffset = new pc.Vec4( i731[12], i731[13], i731[14], i731[15] )
  i730.lightProbeUsage = i731[16]
  i730.reflectionProbeUsage = i731[17]
  return i730
}

Deserializers["HexPieceView"] = function (request, data, root) {
  var i736 = root || request.c( 'HexPieceView' )
  var i737 = data
  i736.needsAlwaysOnTopMaterial = !!i737[0]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i739 = data
  i738.name = i739[0]
  i738.tagId = i739[1]
  i738.enabled = !!i739[2]
  i738.isStatic = !!i739[3]
  i738.layer = i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i741 = data
  i740.center = new pc.Vec3( i741[0], i741[1], i741[2] )
  i740.size = new pc.Vec3( i741[3], i741[4], i741[5] )
  i740.enabled = !!i741[6]
  i740.isTrigger = !!i741[7]
  request.r(i741[8], i741[9], 0, i740, 'material')
  return i740
}

Deserializers["HexStack"] = function (request, data, root) {
  var i742 = root || request.c( 'HexStack' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'piecePrefab')
  request.r(i743[2], i743[3], 0, i742, 'palette')
  i742.perPieceOffset = new pc.Vec3( i743[4], i743[5], i743[6] )
  var i745 = i743[7]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(i745[i + 0]);
  }
  i742.initialColors = i744
  return i742
}

Deserializers["StackDragHandler"] = function (request, data, root) {
  var i748 = root || request.c( 'StackDragHandler' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'board')
  i748.dragHeight = i749[2]
  i748.minDragDistanceToCountAsMoved = i749[3]
  i748.returnDuration = i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i751 = data
  i750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i751[0], i750.main)
  i750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i751[1], i750.colorBySpeed)
  i750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i751[2], i750.colorOverLifetime)
  i750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i751[3], i750.emission)
  i750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i751[4], i750.rotationBySpeed)
  i750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i751[5], i750.rotationOverLifetime)
  i750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i751[6], i750.shape)
  i750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i751[7], i750.sizeBySpeed)
  i750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i751[8], i750.sizeOverLifetime)
  i750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i751[9], i750.textureSheetAnimation)
  i750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i751[10], i750.velocityOverLifetime)
  i750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i751[11], i750.noise)
  i750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i751[12], i750.inheritVelocity)
  i750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i751[13], i750.forceOverLifetime)
  i750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i751[14], i750.limitVelocityOverLifetime)
  i750.useAutoRandomSeed = !!i751[15]
  i750.randomSeed = i751[16]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemMain()
  var i753 = data
  i752.duration = i753[0]
  i752.loop = !!i753[1]
  i752.prewarm = !!i753[2]
  i752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.startDelay)
  i752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.startLifetime)
  i752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[5], i752.startSpeed)
  i752.startSize3D = !!i753[6]
  i752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.startSizeX)
  i752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[8], i752.startSizeY)
  i752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.startSizeZ)
  i752.startRotation3D = !!i753[10]
  i752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[11], i752.startRotationX)
  i752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[12], i752.startRotationY)
  i752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[13], i752.startRotationZ)
  i752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[14], i752.startColor)
  i752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[15], i752.gravityModifier)
  i752.simulationSpace = i753[16]
  request.r(i753[17], i753[18], 0, i752, 'customSimulationSpace')
  i752.simulationSpeed = i753[19]
  i752.useUnscaledTime = !!i753[20]
  i752.scalingMode = i753[21]
  i752.playOnAwake = !!i753[22]
  i752.maxParticles = i753[23]
  i752.emitterVelocityMode = i753[24]
  i752.stopAction = i753[25]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i754 = root || new pc.MinMaxCurve()
  var i755 = data
  i754.mode = i755[0]
  i754.curveMin = new pc.AnimationCurve( { keys_flow: i755[1] } )
  i754.curveMax = new pc.AnimationCurve( { keys_flow: i755[2] } )
  i754.curveMultiplier = i755[3]
  i754.constantMin = i755[4]
  i754.constantMax = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i756 = root || new pc.MinMaxGradient()
  var i757 = data
  i756.mode = i757[0]
  i756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i757[1], i756.gradientMin)
  i756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i757[2], i756.gradientMax)
  i756.colorMin = new pc.Color(i757[3], i757[4], i757[5], i757[6])
  i756.colorMax = new pc.Color(i757[7], i757[8], i757[9], i757[10])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i759 = data
  i758.mode = i759[0]
  var i761 = i759[1]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i761[i + 0]) );
  }
  i758.colorKeys = i760
  var i763 = i759[2]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i763[i + 0]) );
  }
  i758.alphaKeys = i762
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemColorBySpeed()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i765[1], i764.color)
  i764.range = new pc.Vec2( i765[2], i765[3] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i769 = data
  i768.color = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.time = i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i773 = data
  i772.alpha = i773[0]
  i772.time = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemColorOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[1], i774.color)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemEmitter()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.rateOverTime)
  i776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.rateOverDistance)
  var i779 = i777[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i779[i + 0]) );
  }
  i776.bursts = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemBurst()
  var i783 = data
  i782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[0], i782.count)
  i782.cycleCount = i783[1]
  i782.minCount = i783[2]
  i782.maxCount = i783[3]
  i782.repeatInterval = i783[4]
  i782.time = i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemRotationBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.separateAxes = !!i785[4]
  i784.range = new pc.Vec2( i785[5], i785[6] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemShape()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.shapeType = i789[1]
  i788.randomDirectionAmount = i789[2]
  i788.sphericalDirectionAmount = i789[3]
  i788.randomPositionAmount = i789[4]
  i788.alignToDirection = !!i789[5]
  i788.radius = i789[6]
  i788.radiusMode = i789[7]
  i788.radiusSpread = i789[8]
  i788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.radiusSpeed)
  i788.radiusThickness = i789[10]
  i788.angle = i789[11]
  i788.length = i789[12]
  i788.boxThickness = new pc.Vec3( i789[13], i789[14], i789[15] )
  i788.meshShapeType = i789[16]
  request.r(i789[17], i789[18], 0, i788, 'mesh')
  request.r(i789[19], i789[20], 0, i788, 'meshRenderer')
  request.r(i789[21], i789[22], 0, i788, 'skinnedMeshRenderer')
  i788.useMeshMaterialIndex = !!i789[23]
  i788.meshMaterialIndex = i789[24]
  i788.useMeshColors = !!i789[25]
  i788.normalOffset = i789[26]
  i788.arc = i789[27]
  i788.arcMode = i789[28]
  i788.arcSpread = i789[29]
  i788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[30], i788.arcSpeed)
  i788.donutRadius = i789[31]
  i788.position = new pc.Vec3( i789[32], i789[33], i789[34] )
  i788.rotation = new pc.Vec3( i789[35], i789[36], i789[37] )
  i788.scale = new pc.Vec3( i789[38], i789[39], i789[40] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemSizeBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.mode = i795[1]
  i794.animation = i795[2]
  i794.numTilesX = i795[3]
  i794.numTilesY = i795[4]
  i794.useRandomRow = !!i795[5]
  i794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[6], i794.frameOverTime)
  i794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[7], i794.startFrame)
  i794.cycleCount = i795[8]
  i794.rowIndex = i795[9]
  i794.flipU = i795[10]
  i794.flipV = i795[11]
  i794.spriteCount = i795[12]
  var i797 = i795[13]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.sprites = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[4], i800.radial)
  i800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[5], i800.speedModifier)
  i800.space = i801[6]
  i800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.orbitalX)
  i800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[8], i800.orbitalY)
  i800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[9], i800.orbitalZ)
  i800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[10], i800.orbitalOffsetX)
  i800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[11], i800.orbitalOffsetY)
  i800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[12], i800.orbitalOffsetZ)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemNoise()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.separateAxes = !!i803[1]
  i802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.strengthX)
  i802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.strengthY)
  i802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.strengthZ)
  i802.frequency = i803[5]
  i802.damping = !!i803[6]
  i802.octaveCount = i803[7]
  i802.octaveMultiplier = i803[8]
  i802.octaveScale = i803[9]
  i802.quality = i803[10]
  i802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.scrollSpeed)
  i802.scrollSpeedMultiplier = i803[12]
  i802.remapEnabled = !!i803[13]
  i802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[14], i802.remapX)
  i802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[15], i802.remapY)
  i802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[16], i802.remapZ)
  i802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[17], i802.positionAmount)
  i802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[18], i802.rotationAmount)
  i802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[19], i802.sizeAmount)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemInheritVelocity()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.curve)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemForceOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.space = i807[4]
  i806.randomized = !!i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.limit)
  i808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.limitX)
  i808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.limitY)
  i808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.limitZ)
  i808.dampen = i809[5]
  i808.separateAxes = !!i809[6]
  i808.space = i809[7]
  i808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.drag)
  i808.multiplyDragByParticleSize = !!i809[9]
  i808.multiplyDragByParticleVelocity = !!i809[10]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'mesh')
  i810.meshCount = i811[2]
  i810.activeVertexStreamsCount = i811[3]
  i810.alignment = i811[4]
  i810.renderMode = i811[5]
  i810.sortMode = i811[6]
  i810.lengthScale = i811[7]
  i810.velocityScale = i811[8]
  i810.cameraVelocityScale = i811[9]
  i810.normalDirection = i811[10]
  i810.sortingFudge = i811[11]
  i810.minParticleSize = i811[12]
  i810.maxParticleSize = i811[13]
  i810.pivot = new pc.Vec3( i811[14], i811[15], i811[16] )
  request.r(i811[17], i811[18], 0, i810, 'trailMaterial')
  i810.applyActiveColorSpace = !!i811[19]
  i810.enabled = !!i811[20]
  request.r(i811[21], i811[22], 0, i810, 'sharedMaterial')
  var i813 = i811[23]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sharedMaterials = i812
  i810.receiveShadows = !!i811[24]
  i810.shadowCastingMode = i811[25]
  i810.sortingLayerID = i811[26]
  i810.sortingOrder = i811[27]
  i810.lightmapIndex = i811[28]
  i810.lightmapSceneIndex = i811[29]
  i810.lightmapScaleOffset = new pc.Vec4( i811[30], i811[31], i811[32], i811[33] )
  i810.lightProbeUsage = i811[34]
  i810.reflectionProbeUsage = i811[35]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i815 = data
  i814.name = i815[0]
  i814.atlasId = i815[1]
  i814.mipmapCount = i815[2]
  i814.hdr = !!i815[3]
  i814.size = i815[4]
  i814.anisoLevel = i815[5]
  i814.filterMode = i815[6]
  var i817 = i815[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 4) {
    i816.push( UnityEngine.Rect.MinMaxRect(i817[i + 0], i817[i + 1], i817[i + 2], i817[i + 3]) );
  }
  i814.rects = i816
  i814.wrapU = i815[8]
  i814.wrapV = i815[9]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i821 = data
  i820.name = i821[0]
  i820.index = i821[1]
  i820.startup = !!i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i823 = data
  i822.type = i823[0]
  i822.color = new pc.Color(i823[1], i823[2], i823[3], i823[4])
  i822.cullingMask = i823[5]
  i822.intensity = i823[6]
  i822.range = i823[7]
  i822.spotAngle = i823[8]
  i822.shadows = i823[9]
  i822.shadowNormalBias = i823[10]
  i822.shadowBias = i823[11]
  i822.shadowStrength = i823[12]
  i822.shadowResolution = i823[13]
  i822.lightmapBakeType = i823[14]
  i822.renderMode = i823[15]
  request.r(i823[16], i823[17], 0, i822, 'cookie')
  i822.cookieSize = i823[18]
  i822.shadowNearPlane = i823[19]
  i822.occlusionMaskChannel = i823[20]
  i822.isBaked = !!i823[21]
  i822.mixedLightingMode = i823[22]
  i822.enabled = !!i823[23]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i825 = data
  i824.aspect = i825[0]
  i824.orthographic = !!i825[1]
  i824.orthographicSize = i825[2]
  i824.backgroundColor = new pc.Color(i825[3], i825[4], i825[5], i825[6])
  i824.nearClipPlane = i825[7]
  i824.farClipPlane = i825[8]
  i824.fieldOfView = i825[9]
  i824.depth = i825[10]
  i824.clearFlags = i825[11]
  i824.cullingMask = i825[12]
  i824.rect = i825[13]
  request.r(i825[14], i825[15], 0, i824, 'targetTexture')
  i824.usePhysicalProperties = !!i825[16]
  i824.focalLength = i825[17]
  i824.sensorSize = new pc.Vec2( i825[18], i825[19] )
  i824.lensShift = new pc.Vec2( i825[20], i825[21] )
  i824.gateFit = i825[22]
  i824.commandBufferCount = i825[23]
  i824.cameraType = i825[24]
  i824.enabled = !!i825[25]
  return i824
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_FirstSelected')
  i826.m_sendNavigationEvents = !!i827[2]
  i826.m_DragThreshold = i827[3]
  return i826
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i829 = data
  i828.m_HorizontalAxis = i829[0]
  i828.m_VerticalAxis = i829[1]
  i828.m_SubmitButton = i829[2]
  i828.m_CancelButton = i829[3]
  i828.m_InputActionsPerSecond = i829[4]
  i828.m_RepeatDelay = i829[5]
  i828.m_ForceModuleActive = !!i829[6]
  i828.m_SendPointerHoverToParent = !!i829[7]
  return i828
}

Deserializers["GameFlowController"] = function (request, data, root) {
  var i830 = root || request.c( 'GameFlowController' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'tutorial')
  request.r(i831[2], i831[3], 0, i830, 'timer')
  request.r(i831[4], i831[5], 0, i830, 'timerSlider')
  request.r(i831[6], i831[7], 0, i830, 'packshot')
  request.r(i831[8], i831[9], 0, i830, 'board')
  var i833 = i831[10]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.dragHandlers = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i837 = data
  i836.pivot = new pc.Vec2( i837[0], i837[1] )
  i836.anchorMin = new pc.Vec2( i837[2], i837[3] )
  i836.anchorMax = new pc.Vec2( i837[4], i837[5] )
  i836.sizeDelta = new pc.Vec2( i837[6], i837[7] )
  i836.anchoredPosition3D = new pc.Vec3( i837[8], i837[9], i837[10] )
  i836.rotation = new pc.Quat(i837[11], i837[12], i837[13], i837[14])
  i836.scale = new pc.Vec3( i837[15], i837[16], i837[17] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i839 = data
  i838.planeDistance = i839[0]
  i838.referencePixelsPerUnit = i839[1]
  i838.isFallbackOverlay = !!i839[2]
  i838.renderMode = i839[3]
  i838.renderOrder = i839[4]
  i838.sortingLayerName = i839[5]
  i838.sortingOrder = i839[6]
  i838.scaleFactor = i839[7]
  request.r(i839[8], i839[9], 0, i838, 'worldCamera')
  i838.overrideSorting = !!i839[10]
  i838.pixelPerfect = !!i839[11]
  i838.targetDisplay = i839[12]
  i838.overridePixelPerfect = !!i839[13]
  i838.enabled = !!i839[14]
  return i838
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i841 = data
  i840.m_UiScaleMode = i841[0]
  i840.m_ReferencePixelsPerUnit = i841[1]
  i840.m_ScaleFactor = i841[2]
  i840.m_ReferenceResolution = new pc.Vec2( i841[3], i841[4] )
  i840.m_ScreenMatchMode = i841[5]
  i840.m_MatchWidthOrHeight = i841[6]
  i840.m_PhysicalUnit = i841[7]
  i840.m_FallbackScreenDPI = i841[8]
  i840.m_DefaultSpriteDPI = i841[9]
  i840.m_DynamicPixelsPerUnit = i841[10]
  i840.m_PresetInfoIsWorld = !!i841[11]
  return i840
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i843 = data
  i842.m_IgnoreReversedGraphics = !!i843[0]
  i842.m_BlockingObjects = i843[1]
  i842.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i843[2] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i845 = data
  i844.cullTransparentMesh = !!i845[0]
  return i844
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Image' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Sprite')
  i846.m_Type = i847[2]
  i846.m_PreserveAspect = !!i847[3]
  i846.m_FillCenter = !!i847[4]
  i846.m_FillMethod = i847[5]
  i846.m_FillAmount = i847[6]
  i846.m_FillClockwise = !!i847[7]
  i846.m_FillOrigin = i847[8]
  i846.m_UseSpriteMesh = !!i847[9]
  i846.m_PixelsPerUnitMultiplier = i847[10]
  request.r(i847[11], i847[12], 0, i846, 'm_Material')
  i846.m_Maskable = !!i847[13]
  i846.m_Color = new pc.Color(i847[14], i847[15], i847[16], i847[17])
  i846.m_RaycastTarget = !!i847[18]
  i846.m_RaycastPadding = new pc.Vec4( i847[19], i847[20], i847[21], i847[22] )
  return i846
}

Deserializers["GameTimerUI"] = function (request, data, root) {
  var i848 = root || request.c( 'GameTimerUI' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'clockHand')
  i848.duration = i849[2]
  i848.startAngleZ = i849[3]
  i848.endAngleZ = i849[4]
  i848.warningRemainingFraction = i849[5]
  return i848
}

Deserializers["TimerSliderUI"] = function (request, data, root) {
  var i850 = root || request.c( 'TimerSliderUI' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'timer')
  request.r(i851[2], i851[3], 0, i850, 'barRect')
  i850.maxRightOffset = i851[4]
  request.r(i851[5], i851[6], 0, i850, 'barImageOutline')
  request.r(i851[7], i851[8], 0, i850, 'barImage')
  i850.startColor = new pc.Color(i851[9], i851[10], i851[11], i851[12])
  i850.midColor = new pc.Color(i851[13], i851[14], i851[15], i851[16])
  i850.endColor = new pc.Color(i851[17], i851[18], i851[19], i851[20])
  request.r(i851[21], i851[22], 0, i850, 'clockIcon')
  i850.pulseScaleMultiplier = i851[23]
  i850.pulseFrequency = i851[24]
  i850.pulseSharpness = i851[25]
  request.r(i851[26], i851[27], 0, i850, 'clockOutlineImage')
  request.r(i851[28], i851[29], 0, i850, 'loaderBackgroundImage')
  i850.pulseColor = new pc.Color(i851[30], i851[31], i851[32], i851[33])
  i850.alarmShakeStartOffset = i851[34]
  i850.alarmShakeDuration = i851[35]
  i850.alarmShakeAmplitudeDegrees = i851[36]
  i850.alarmShakeFrequency = i851[37]
  i850.alarmShakePositionAmplitude = i851[38]
  request.r(i851[39], i851[40], 0, i850, 'popupRoot')
  request.r(i851[41], i851[42], 0, i850, 'popupContent')
  i850.popupAnimDuration = i851[43]
  i850.popupScaleCurve = new pc.AnimationCurve( { keys_flow: i851[44] } )
  i850.popupStartAngleZ = i851[45]
  request.r(i851[46], i851[47], 0, i850, 'popupBackgroundImage')
  i850.popupBackgroundStartColor = new pc.Color(i851[48], i851[49], i851[50], i851[51])
  i850.popupBackgroundEndColor = new pc.Color(i851[52], i851[53], i851[54], i851[55])
  return i850
}

Deserializers["TutorialHandController"] = function (request, data, root) {
  var i852 = root || request.c( 'TutorialHandController' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'handRoot')
  var i855 = i853[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.traySlots = i854
  request.r(i853[3], i853[4], 0, i852, 'board')
  request.r(i853[5], i853[6], 0, i852, 'worldCamera')
  i852.moveDuration = i853[7]
  i852.pauseAtEdges = i853[8]
  i852.idleDelayBeforeReshow = i853[9]
  i852.handArcHeight = i853[10]
  request.r(i853[11], i853[12], 0, i852, 'overrideSourceStack')
  request.r(i853[13], i853[14], 0, i852, 'overrideTargetCell')
  request.r(i853[15], i853[16], 0, i852, 'handAnimator')
  request.r(i853[17], i853[18], 0, i852, 'handShadowAnimator')
  i852.clenchTrigger = i853[19]
  i852.unclenchTrigger = i853[20]
  i852.fingerAnimDuration = i853[21]
  request.r(i853[22], i853[23], 0, i852, 'spotlightOverlay')
  i852.targetCellHighlightColor = new pc.Color(i853[24], i853[25], i853[26], i853[27])
  i852.cellGlowMultiplier = i853[28]
  return i852
}

Deserializers["TutorialSpotlightOverlay"] = function (request, data, root) {
  var i856 = root || request.c( 'TutorialSpotlightOverlay' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'mainCamera')
  request.r(i857[2], i857[3], 0, i856, 'revealCamera')
  request.r(i857[4], i857[5], 0, i856, 'overlayRoot')
  request.r(i857[6], i857[7], 0, i856, 'revealImage')
  request.r(i857[8], i857[9], 0, i856, 'overlayCanvasGroup')
  i856.spotlightLayerName = i857[10]
  i856.fadeDuration = i857[11]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i859 = data
  i858.m_Alpha = i859[0]
  i858.m_Interactable = !!i859[1]
  i858.m_BlocksRaycasts = !!i859[2]
  i858.m_IgnoreParentGroups = !!i859[3]
  i858.enabled = !!i859[4]
  return i858
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_Texture')
  i860.m_UVRect = UnityEngine.Rect.MinMaxRect(i861[2], i861[3], i861[4], i861[5])
  request.r(i861[6], i861[7], 0, i860, 'm_Material')
  i860.m_Maskable = !!i861[8]
  i860.m_Color = new pc.Color(i861[9], i861[10], i861[11], i861[12])
  i860.m_RaycastTarget = !!i861[13]
  i860.m_RaycastPadding = new pc.Vec4( i861[14], i861[15], i861[16], i861[17] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i863 = data
  i862.color = new pc.Color(i863[0], i863[1], i863[2], i863[3])
  request.r(i863[4], i863[5], 0, i862, 'sprite')
  i862.flipX = !!i863[6]
  i862.flipY = !!i863[7]
  i862.drawMode = i863[8]
  i862.size = new pc.Vec2( i863[9], i863[10] )
  i862.tileMode = i863[11]
  i862.adaptiveModeThreshold = i863[12]
  i862.maskInteraction = i863[13]
  i862.spriteSortPoint = i863[14]
  i862.enabled = !!i863[15]
  request.r(i863[16], i863[17], 0, i862, 'sharedMaterial')
  var i865 = i863[18]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.sharedMaterials = i864
  i862.receiveShadows = !!i863[19]
  i862.shadowCastingMode = i863[20]
  i862.sortingLayerID = i863[21]
  i862.sortingOrder = i863[22]
  i862.lightmapIndex = i863[23]
  i862.lightmapSceneIndex = i863[24]
  i862.lightmapScaleOffset = new pc.Vec4( i863[25], i863[26], i863[27], i863[28] )
  i862.lightProbeUsage = i863[29]
  i862.reflectionProbeUsage = i863[30]
  return i862
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_RootBone')
  var i869 = i867[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.m_BoneTransforms = i868
  i866.m_AlwaysUpdate = !!i867[3]
  i866.m_AutoRebind = !!i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animatorController')
  request.r(i873[2], i873[3], 0, i872, 'avatar')
  i872.updateMode = i873[4]
  i872.hasTransformHierarchy = !!i873[5]
  i872.applyRootMotion = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.humanBones = i874
  i872.enabled = !!i873[8]
  return i872
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i876 = root || request.c( 'PackshotController' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'panelRoot')
  request.r(i877[2], i877[3], 0, i876, 'playNowButton')
  request.r(i877[4], i877[5], 0, i876, 'fullscreenTapButton')
  request.r(i877[6], i877[7], 0, i876, 'transitionAnimator')
  i876.transitionTrigger = i877[8]
  request.r(i877[9], i877[10], 0, i876, 'maskRect')
  i876.maskTargetSize = i877[11]
  i876.maskGrowDuration = i877[12]
  i876.maskGrowCurve = new pc.AnimationCurve( { keys_flow: i877[13] } )
  request.r(i877[14], i877[15], 0, i876, 'headerRect')
  request.r(i877[16], i877[17], 0, i876, 'playButtonRect')
  i876.revealPulseDuration = i877[18]
  i876.revealPulseCurve = new pc.AnimationCurve( { keys_flow: i877[19] } )
  return i876
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Mask' )
  var i879 = data
  i878.m_ShowMaskGraphic = !!i879[0]
  return i878
}

Deserializers["CopyRectSize"] = function (request, data, root) {
  var i880 = root || request.c( 'CopyRectSize' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'sourceBG')
  request.r(i881[2], i881[3], 0, i880, 'currentBG')
  return i880
}

Deserializers["FloatingHoverEffect"] = function (request, data, root) {
  var i882 = root || request.c( 'FloatingHoverEffect' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'target')
  i882.amplitude = i883[2]
  i882.frequency = i883[3]
  i882.rotationAmplitudeDegrees = i883[4]
  return i882
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Button' )
  var i885 = data
  i884.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i885[0], i884.m_OnClick)
  i884.m_Navigation = request.d('UnityEngine.UI.Navigation', i885[1], i884.m_Navigation)
  i884.m_Transition = i885[2]
  i884.m_Colors = request.d('UnityEngine.UI.ColorBlock', i885[3], i884.m_Colors)
  i884.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i885[4], i884.m_SpriteState)
  i884.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i885[5], i884.m_AnimationTriggers)
  i884.m_Interactable = !!i885[6]
  request.r(i885[7], i885[8], 0, i884, 'm_TargetGraphic')
  return i884
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i887 = data
  i886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i887[0], i886.m_PersistentCalls)
  return i886
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i889 = data
  var i891 = i889[0]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('UnityEngine.Events.PersistentCall', i891[i + 0]));
  }
  i888.m_Calls = i890
  return i888
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_Target')
  i894.m_TargetAssemblyTypeName = i895[2]
  i894.m_MethodName = i895[3]
  i894.m_Mode = i895[4]
  i894.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i895[5], i894.m_Arguments)
  i894.m_CallState = i895[6]
  return i894
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i897 = data
  i896.m_Mode = i897[0]
  i896.m_WrapAround = !!i897[1]
  request.r(i897[2], i897[3], 0, i896, 'm_SelectOnUp')
  request.r(i897[4], i897[5], 0, i896, 'm_SelectOnDown')
  request.r(i897[6], i897[7], 0, i896, 'm_SelectOnLeft')
  request.r(i897[8], i897[9], 0, i896, 'm_SelectOnRight')
  return i896
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i899 = data
  i898.m_NormalColor = new pc.Color(i899[0], i899[1], i899[2], i899[3])
  i898.m_HighlightedColor = new pc.Color(i899[4], i899[5], i899[6], i899[7])
  i898.m_PressedColor = new pc.Color(i899[8], i899[9], i899[10], i899[11])
  i898.m_SelectedColor = new pc.Color(i899[12], i899[13], i899[14], i899[15])
  i898.m_DisabledColor = new pc.Color(i899[16], i899[17], i899[18], i899[19])
  i898.m_ColorMultiplier = i899[20]
  i898.m_FadeDuration = i899[21]
  return i898
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_HighlightedSprite')
  request.r(i901[2], i901[3], 0, i900, 'm_PressedSprite')
  request.r(i901[4], i901[5], 0, i900, 'm_SelectedSprite')
  request.r(i901[6], i901[7], 0, i900, 'm_DisabledSprite')
  return i900
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i903 = data
  i902.m_NormalTrigger = i903[0]
  i902.m_HighlightedTrigger = i903[1]
  i902.m_PressedTrigger = i903[2]
  i902.m_SelectedTrigger = i903[3]
  i902.m_DisabledTrigger = i903[4]
  return i902
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i905 = data
  i904.m_hasFontAssetChanged = !!i905[0]
  request.r(i905[1], i905[2], 0, i904, 'm_baseMaterial')
  i904.m_maskOffset = new pc.Vec4( i905[3], i905[4], i905[5], i905[6] )
  i904.m_text = i905[7]
  i904.m_isRightToLeft = !!i905[8]
  request.r(i905[9], i905[10], 0, i904, 'm_fontAsset')
  request.r(i905[11], i905[12], 0, i904, 'm_sharedMaterial')
  var i907 = i905[13]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.m_fontSharedMaterials = i906
  request.r(i905[14], i905[15], 0, i904, 'm_fontMaterial')
  var i909 = i905[16]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i904.m_fontMaterials = i908
  i904.m_fontColor32 = UnityEngine.Color32.ConstructColor(i905[17], i905[18], i905[19], i905[20])
  i904.m_fontColor = new pc.Color(i905[21], i905[22], i905[23], i905[24])
  i904.m_enableVertexGradient = !!i905[25]
  i904.m_colorMode = i905[26]
  i904.m_fontColorGradient = request.d('TMPro.VertexGradient', i905[27], i904.m_fontColorGradient)
  request.r(i905[28], i905[29], 0, i904, 'm_fontColorGradientPreset')
  request.r(i905[30], i905[31], 0, i904, 'm_spriteAsset')
  i904.m_tintAllSprites = !!i905[32]
  request.r(i905[33], i905[34], 0, i904, 'm_StyleSheet')
  i904.m_TextStyleHashCode = i905[35]
  i904.m_overrideHtmlColors = !!i905[36]
  i904.m_faceColor = UnityEngine.Color32.ConstructColor(i905[37], i905[38], i905[39], i905[40])
  i904.m_fontSize = i905[41]
  i904.m_fontSizeBase = i905[42]
  i904.m_fontWeight = i905[43]
  i904.m_enableAutoSizing = !!i905[44]
  i904.m_fontSizeMin = i905[45]
  i904.m_fontSizeMax = i905[46]
  i904.m_fontStyle = i905[47]
  i904.m_HorizontalAlignment = i905[48]
  i904.m_VerticalAlignment = i905[49]
  i904.m_textAlignment = i905[50]
  i904.m_characterSpacing = i905[51]
  i904.m_wordSpacing = i905[52]
  i904.m_lineSpacing = i905[53]
  i904.m_lineSpacingMax = i905[54]
  i904.m_paragraphSpacing = i905[55]
  i904.m_charWidthMaxAdj = i905[56]
  i904.m_enableWordWrapping = !!i905[57]
  i904.m_wordWrappingRatios = i905[58]
  i904.m_overflowMode = i905[59]
  request.r(i905[60], i905[61], 0, i904, 'm_linkedTextComponent')
  request.r(i905[62], i905[63], 0, i904, 'parentLinkedComponent')
  i904.m_enableKerning = !!i905[64]
  i904.m_enableExtraPadding = !!i905[65]
  i904.checkPaddingRequired = !!i905[66]
  i904.m_isRichText = !!i905[67]
  i904.m_parseCtrlCharacters = !!i905[68]
  i904.m_isOrthographic = !!i905[69]
  i904.m_isCullingEnabled = !!i905[70]
  i904.m_horizontalMapping = i905[71]
  i904.m_verticalMapping = i905[72]
  i904.m_uvLineOffset = i905[73]
  i904.m_geometrySortingOrder = i905[74]
  i904.m_IsTextObjectScaleStatic = !!i905[75]
  i904.m_VertexBufferAutoSizeReduction = !!i905[76]
  i904.m_useMaxVisibleDescender = !!i905[77]
  i904.m_pageToDisplay = i905[78]
  i904.m_margin = new pc.Vec4( i905[79], i905[80], i905[81], i905[82] )
  i904.m_isUsingLegacyAnimationComponent = !!i905[83]
  i904.m_isVolumetricText = !!i905[84]
  request.r(i905[85], i905[86], 0, i904, 'm_Material')
  i904.m_Maskable = !!i905[87]
  i904.m_Color = new pc.Color(i905[88], i905[89], i905[90], i905[91])
  i904.m_RaycastTarget = !!i905[92]
  i904.m_RaycastPadding = new pc.Vec4( i905[93], i905[94], i905[95], i905[96] )
  return i904
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.VertexGradient' )
  var i911 = data
  i910.topLeft = new pc.Color(i911[0], i911[1], i911[2], i911[3])
  i910.topRight = new pc.Color(i911[4], i911[5], i911[6], i911[7])
  i910.bottomLeft = new pc.Color(i911[8], i911[9], i911[10], i911[11])
  i910.bottomRight = new pc.Color(i911[12], i911[13], i911[14], i911[15])
  return i910
}

Deserializers["ScreenScaler"] = function (request, data, root) {
  var i912 = root || request.c( 'ScreenScaler' )
  var i913 = data
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'sharedMesh')
  i914.convex = !!i915[2]
  i914.enabled = !!i915[3]
  i914.isTrigger = !!i915[4]
  request.r(i915[5], i915[6], 0, i914, 'material')
  return i914
}

Deserializers["TrayRefillManager"] = function (request, data, root) {
  var i916 = root || request.c( 'TrayRefillManager' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'board')
  var i919 = i917[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.trayHandlers = i918
  request.r(i917[3], i917[4], 0, i916, 'timer')
  i916.minPieces = i917[5]
  i916.maxPieces = i917[6]
  i916.spawnAnimDuration = i917[7]
  i916.spawnBounceHeight = i917[8]
  i916.spawnScaleCurve = new pc.AnimationCurve( { keys_flow: i917[9] } )
  return i916
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i920 = root || request.c( 'BoardManager' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'cellsParent')
  var i923 = i921[2]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('BoardCell')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i920.cells = i922
  request.r(i921[3], i921[4], 0, i920, 'cellHighlightConfig')
  i920.neighborMaxDistance = i921[5]
  request.r(i921[6], i921[7], 0, i920, 'stackPrefab')
  request.r(i921[8], i921[9], 0, i920, 'piecePrefab')
  request.r(i921[10], i921[11], 0, i920, 'palette')
  i920.initialStackRotation = new pc.Vec3( i921[12], i921[13], i921[14] )
  i920.baseJumpDuration = i921[15]
  i920.speedMultiplierPerClear = i921[16]
  i920.squashDuration = i921[17]
  i920.sinkDuration = i921[18]
  i920.sinkTargetY = i921[19]
  i920.topPieceSquashScaleYZ = i921[20]
  i920.pieceClipPlaneY = i921[21]
  request.r(i921[22], i921[23], 0, i920, 'destroyStackEffectPrefab')
  i920.destroyEffectOffsetBeforeEnd = i921[24]
  i920.jumpEasing = new pc.AnimationCurve( { keys_flow: i921[25] } )
  i920.jumpStartStagger = i921[26]
  i920.landingSettleDuration = i921[27]
  return i920
}

Deserializers["BoardCell"] = function (request, data, root) {
  var i926 = root || request.c( 'BoardCell' )
  var i927 = data
  i926.autoComputeAxialFromPosition = !!i927[0]
  i926.axialCoord = new pc.Vec2( i927[1], i927[2] )
  var i929 = i927[3]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(i929[i + 0]);
  }
  i926.initialStackColors = i928
  i926.isClickable = !!i927[4]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i931 = data
  i930.center = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.radius = i931[3]
  i930.enabled = !!i931[4]
  i930.isTrigger = !!i931[5]
  request.r(i931[6], i931[7], 0, i930, 'material')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i933 = data
  i932.ambientIntensity = i933[0]
  i932.reflectionIntensity = i933[1]
  i932.ambientMode = i933[2]
  i932.ambientLight = new pc.Color(i933[3], i933[4], i933[5], i933[6])
  i932.ambientSkyColor = new pc.Color(i933[7], i933[8], i933[9], i933[10])
  i932.ambientGroundColor = new pc.Color(i933[11], i933[12], i933[13], i933[14])
  i932.ambientEquatorColor = new pc.Color(i933[15], i933[16], i933[17], i933[18])
  i932.fogColor = new pc.Color(i933[19], i933[20], i933[21], i933[22])
  i932.fogEndDistance = i933[23]
  i932.fogStartDistance = i933[24]
  i932.fogDensity = i933[25]
  i932.fog = !!i933[26]
  request.r(i933[27], i933[28], 0, i932, 'skybox')
  i932.fogMode = i933[29]
  var i935 = i933[30]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i935[i + 0]) );
  }
  i932.lightmaps = i934
  i932.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i933[31], i932.lightProbes)
  i932.lightmapsMode = i933[32]
  i932.mixedBakeMode = i933[33]
  i932.environmentLightingMode = i933[34]
  i932.ambientProbe = new pc.SphericalHarmonicsL2(i933[35])
  request.r(i933[36], i933[37], 0, i932, 'customReflection')
  request.r(i933[38], i933[39], 0, i932, 'defaultReflection')
  i932.defaultReflectionMode = i933[40]
  i932.defaultReflectionResolution = i933[41]
  i932.sunLightObjectId = i933[42]
  i932.pixelLightCount = i933[43]
  i932.defaultReflectionHDR = !!i933[44]
  i932.hasLightDataAsset = !!i933[45]
  i932.hasManualGenerate = !!i933[46]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'lightmapColor')
  request.r(i939[2], i939[3], 0, i938, 'lightmapDirection')
  request.r(i939[4], i939[5], 0, i938, 'shadowMask')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i940 = root || new UnityEngine.LightProbes()
  var i941 = data
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i951[i + 0]));
  }
  i948.ShaderCompilationErrors = i950
  i948.name = i949[1]
  i948.guid = i949[2]
  var i953 = i949[3]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.shaderDefinedKeywords = i952
  var i955 = i949[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i955[i + 0]) );
  }
  i948.passes = i954
  var i957 = i949[5]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i957[i + 0]) );
  }
  i948.usePasses = i956
  var i959 = i949[6]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i959[i + 0]) );
  }
  i948.defaultParameterValues = i958
  request.r(i949[7], i949[8], 0, i948, 'unityFallbackShader')
  i948.readDepth = !!i949[9]
  i948.hasDepthOnlyPass = !!i949[10]
  i948.isCreatedByShaderGraph = !!i949[11]
  i948.disableBatching = !!i949[12]
  i948.compiled = !!i949[13]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i963 = data
  i962.shaderName = i963[0]
  i962.errorMessage = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i968 = root || new pc.UnityShaderPass()
  var i969 = data
  i968.id = i969[0]
  i968.subShaderIndex = i969[1]
  i968.name = i969[2]
  i968.passType = i969[3]
  i968.grabPassTextureName = i969[4]
  i968.usePass = !!i969[5]
  i968.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[6], i968.zTest)
  i968.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[7], i968.zWrite)
  i968.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[8], i968.culling)
  i968.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i969[9], i968.blending)
  i968.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i969[10], i968.alphaBlending)
  i968.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[11], i968.colorWriteMask)
  i968.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[12], i968.offsetUnits)
  i968.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[13], i968.offsetFactor)
  i968.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[14], i968.stencilRef)
  i968.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[15], i968.stencilReadMask)
  i968.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[16], i968.stencilWriteMask)
  i968.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[17], i968.stencilOp)
  i968.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[18], i968.stencilOpFront)
  i968.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[19], i968.stencilOpBack)
  var i971 = i969[20]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i971[i + 0]) );
  }
  i968.tags = i970
  var i973 = i969[21]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i968.passDefinedKeywords = i972
  var i975 = i969[22]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i975[i + 0]) );
  }
  i968.passDefinedKeywordGroups = i974
  var i977 = i969[23]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i968.variants = i976
  var i979 = i969[24]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i979[i + 0]) );
  }
  i968.excludedVariants = i978
  i968.hasDepthReader = !!i969[25]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i981 = data
  i980.val = i981[0]
  i980.name = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i983 = data
  i982.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.src)
  i982.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.dst)
  i982.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.op)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i985 = data
  i984.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[0], i984.pass)
  i984.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[1], i984.fail)
  i984.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[2], i984.zFail)
  i984.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[3], i984.comp)
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i989 = data
  i988.name = i989[0]
  i988.value = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i993 = data
  var i995 = i993[0]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i992.keywords = i994
  i992.hasDiscard = !!i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i999 = data
  i998.passId = i999[0]
  i998.subShaderIndex = i999[1]
  var i1001 = i999[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i998.keywords = i1000
  i998.vertexProgram = i999[3]
  i998.fragmentProgram = i999[4]
  i998.exportedForWebGl2 = !!i999[5]
  i998.readDepth = !!i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'shader')
  i1004.pass = i1005[2]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.type = i1009[1]
  i1008.value = new pc.Vec4( i1009[2], i1009[3], i1009[4], i1009[5] )
  i1008.textureValue = i1009[6]
  i1008.shaderPropertyFlag = i1009[7]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1011 = data
  i1010.name = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'texture')
  i1010.aabb = i1011[3]
  i1010.vertices = i1011[4]
  i1010.triangles = i1011[5]
  i1010.textureRect = UnityEngine.Rect.MinMaxRect(i1011[6], i1011[7], i1011[8], i1011[9])
  i1010.packedRect = UnityEngine.Rect.MinMaxRect(i1011[10], i1011[11], i1011[12], i1011[13])
  i1010.border = new pc.Vec4( i1011[14], i1011[15], i1011[16], i1011[17] )
  i1010.transparency = i1011[18]
  i1010.bounds = i1011[19]
  i1010.pixelsPerUnit = i1011[20]
  i1010.textureWidth = i1011[21]
  i1010.textureHeight = i1011[22]
  i1010.nativeSize = new pc.Vec2( i1011[23], i1011[24] )
  i1010.pivot = new pc.Vec2( i1011[25], i1011[26] )
  i1010.textureRectOffset = new pc.Vec2( i1011[27], i1011[28] )
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.wrapMode = i1013[1]
  i1012.isLooping = !!i1013[2]
  i1012.length = i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1015[i + 0]) );
  }
  i1012.curves = i1014
  var i1017 = i1013[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1017[i + 0]) );
  }
  i1012.events = i1016
  i1012.halfPrecision = !!i1013[6]
  i1012._frameRate = i1013[7]
  i1012.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1013[8], i1012.localBounds)
  i1012.hasMuscleCurves = !!i1013[9]
  var i1019 = i1013[10]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1012.clipMuscleConstant = i1018
  i1012.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1013[11], i1012.clipBindingConstant)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1023 = data
  i1022.path = i1023[0]
  i1022.hash = i1023[1]
  i1022.componentType = i1023[2]
  i1022.property = i1023[3]
  i1022.keys = i1023[4]
  var i1025 = i1023[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1025[i + 0]) );
  }
  i1022.objectReferenceKeys = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1029 = data
  i1028.time = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'value')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1033 = data
  i1032.functionName = i1033[0]
  i1032.floatParameter = i1033[1]
  i1032.intParameter = i1033[2]
  i1032.stringParameter = i1033[3]
  request.r(i1033[4], i1033[5], 0, i1032, 'objectReferenceParameter')
  i1032.time = i1033[6]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1035 = data
  i1034.center = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.extends = new pc.Vec3( i1035[3], i1035[4], i1035[5] )
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.genericBindings = i1040
  var i1043 = i1039[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.pptrCurveMapping = i1042
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.ascent = i1045[1]
  i1044.originalLineHeight = i1045[2]
  i1044.fontSize = i1045[3]
  var i1047 = i1045[4]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1047[i + 0]) );
  }
  i1044.characterInfo = i1046
  request.r(i1045[5], i1045[6], 0, i1044, 'texture')
  i1044.originalFontSize = i1045[7]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1051 = data
  i1050.index = i1051[0]
  i1050.advance = i1051[1]
  i1050.bearing = i1051[2]
  i1050.glyphWidth = i1051[3]
  i1050.glyphHeight = i1051[4]
  i1050.minX = i1051[5]
  i1050.maxX = i1051[6]
  i1050.minY = i1051[7]
  i1050.maxY = i1051[8]
  i1050.uvBottomLeftX = i1051[9]
  i1050.uvBottomLeftY = i1051[10]
  i1050.uvBottomRightX = i1051[11]
  i1050.uvBottomRightY = i1051[12]
  i1050.uvTopLeftX = i1051[13]
  i1050.uvTopLeftY = i1051[14]
  i1050.uvTopRightX = i1051[15]
  i1050.uvTopRightY = i1051[16]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1053 = data
  i1052.name = i1053[0]
  var i1055 = i1053[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1055[i + 0]) );
  }
  i1052.layers = i1054
  var i1057 = i1053[2]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1057[i + 0]) );
  }
  i1052.parameters = i1056
  i1052.animationClips = i1053[3]
  i1052.avatarUnsupported = i1053[4]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.defaultWeight = i1061[1]
  i1060.blendingMode = i1061[2]
  i1060.avatarMask = i1061[3]
  i1060.syncedLayerIndex = i1061[4]
  i1060.syncedLayerAffectsTiming = !!i1061[5]
  i1060.syncedLayers = i1061[6]
  i1060.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1061[7], i1060.stateMachine)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  i1062.path = i1063[2]
  var i1065 = i1063[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1065[i + 0]) );
  }
  i1062.states = i1064
  var i1067 = i1063[4]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1067[i + 0]) );
  }
  i1062.machines = i1066
  var i1069 = i1063[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1069[i + 0]) );
  }
  i1062.entryStateTransitions = i1068
  var i1071 = i1063[6]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1071[i + 0]) );
  }
  i1062.exitStateTransitions = i1070
  var i1073 = i1063[7]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1073[i + 0]) );
  }
  i1062.anyStateTransitions = i1072
  i1062.defaultStateId = i1063[8]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1077 = data
  i1076.id = i1077[0]
  i1076.name = i1077[1]
  i1076.cycleOffset = i1077[2]
  i1076.cycleOffsetParameter = i1077[3]
  i1076.cycleOffsetParameterActive = !!i1077[4]
  i1076.mirror = !!i1077[5]
  i1076.mirrorParameter = i1077[6]
  i1076.mirrorParameterActive = !!i1077[7]
  i1076.motionId = i1077[8]
  i1076.nameHash = i1077[9]
  i1076.fullPathHash = i1077[10]
  i1076.speed = i1077[11]
  i1076.speedParameter = i1077[12]
  i1076.speedParameterActive = !!i1077[13]
  i1076.tag = i1077[14]
  i1076.tagHash = i1077[15]
  i1076.writeDefaultValues = !!i1077[16]
  var i1079 = i1077[17]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1076.behaviours = i1078
  var i1081 = i1077[18]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1081[i + 0]) );
  }
  i1076.transitions = i1080
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1087 = data
  i1086.fullPath = i1087[0]
  i1086.canTransitionToSelf = !!i1087[1]
  i1086.duration = i1087[2]
  i1086.exitTime = i1087[3]
  i1086.hasExitTime = !!i1087[4]
  i1086.hasFixedDuration = !!i1087[5]
  i1086.interruptionSource = i1087[6]
  i1086.offset = i1087[7]
  i1086.orderedInterruption = !!i1087[8]
  i1086.destinationStateId = i1087[9]
  i1086.isExit = !!i1087[10]
  i1086.mute = !!i1087[11]
  i1086.solo = !!i1087[12]
  var i1089 = i1087[13]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1089[i + 0]) );
  }
  i1086.conditions = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1093 = data
  i1092.mode = i1093[0]
  i1092.parameter = i1093[1]
  i1092.threshold = i1093[2]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1099 = data
  i1098.destinationStateId = i1099[0]
  i1098.isExit = !!i1099[1]
  i1098.mute = !!i1099[2]
  i1098.solo = !!i1099[3]
  var i1101 = i1099[4]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1101[i + 0]) );
  }
  i1098.conditions = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1105 = data
  i1104.defaultBool = !!i1105[0]
  i1104.defaultFloat = i1105[1]
  i1104.defaultInt = i1105[2]
  i1104.name = i1105[3]
  i1104.nameHash = i1105[4]
  i1104.type = i1105[5]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.bytes64 = i1107[1]
  i1106.data = i1107[2]
  return i1106
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'atlas')
  i1108.normalStyle = i1109[2]
  i1108.normalSpacingOffset = i1109[3]
  i1108.boldStyle = i1109[4]
  i1108.boldSpacing = i1109[5]
  i1108.italicStyle = i1109[6]
  i1108.tabSize = i1109[7]
  i1108.hashCode = i1109[8]
  request.r(i1109[9], i1109[10], 0, i1108, 'material')
  i1108.materialHashCode = i1109[11]
  i1108.m_Version = i1109[12]
  i1108.m_SourceFontFileGUID = i1109[13]
  request.r(i1109[14], i1109[15], 0, i1108, 'm_SourceFontFile_EditorRef')
  request.r(i1109[16], i1109[17], 0, i1108, 'm_SourceFontFile')
  i1108.m_AtlasPopulationMode = i1109[18]
  i1108.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1109[19], i1108.m_FaceInfo)
  var i1111 = i1109[20]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('UnityEngine.TextCore.Glyph', i1111[i + 0]));
  }
  i1108.m_GlyphTable = i1110
  var i1113 = i1109[21]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('TMPro.TMP_Character', i1113[i + 0]));
  }
  i1108.m_CharacterTable = i1112
  var i1115 = i1109[22]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 2, i1114, '')
  }
  i1108.m_AtlasTextures = i1114
  i1108.m_AtlasTextureIndex = i1109[23]
  i1108.m_IsMultiAtlasTexturesEnabled = !!i1109[24]
  i1108.m_ClearDynamicDataOnBuild = !!i1109[25]
  var i1117 = i1109[26]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('UnityEngine.TextCore.GlyphRect', i1117[i + 0]));
  }
  i1108.m_UsedGlyphRects = i1116
  var i1119 = i1109[27]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('UnityEngine.TextCore.GlyphRect', i1119[i + 0]));
  }
  i1108.m_FreeGlyphRects = i1118
  i1108.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1109[28], i1108.m_fontInfo)
  i1108.m_AtlasWidth = i1109[29]
  i1108.m_AtlasHeight = i1109[30]
  i1108.m_AtlasPadding = i1109[31]
  i1108.m_AtlasRenderMode = i1109[32]
  var i1121 = i1109[33]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_Glyph', i1121[i + 0]));
  }
  i1108.m_glyphInfoList = i1120
  i1108.m_KerningTable = request.d('TMPro.KerningTable', i1109[34], i1108.m_KerningTable)
  i1108.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1109[35], i1108.m_FontFeatureTable)
  var i1123 = i1109[36]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1108.fallbackFontAssets = i1122
  var i1125 = i1109[37]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 1, i1124, '')
  }
  i1108.m_FallbackFontAssetTable = i1124
  i1108.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1109[38], i1108.m_CreationSettings)
  var i1127 = i1109[39]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('TMPro.TMP_FontWeightPair', i1127[i + 0]) );
  }
  i1108.m_FontWeightTable = i1126
  var i1129 = i1109[40]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('TMPro.TMP_FontWeightPair', i1129[i + 0]) );
  }
  i1108.fontWeights = i1128
  return i1108
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1131 = data
  i1130.m_FaceIndex = i1131[0]
  i1130.m_FamilyName = i1131[1]
  i1130.m_StyleName = i1131[2]
  i1130.m_PointSize = i1131[3]
  i1130.m_Scale = i1131[4]
  i1130.m_UnitsPerEM = i1131[5]
  i1130.m_LineHeight = i1131[6]
  i1130.m_AscentLine = i1131[7]
  i1130.m_CapLine = i1131[8]
  i1130.m_MeanLine = i1131[9]
  i1130.m_Baseline = i1131[10]
  i1130.m_DescentLine = i1131[11]
  i1130.m_SuperscriptOffset = i1131[12]
  i1130.m_SuperscriptSize = i1131[13]
  i1130.m_SubscriptOffset = i1131[14]
  i1130.m_SubscriptSize = i1131[15]
  i1130.m_UnderlineOffset = i1131[16]
  i1130.m_UnderlineThickness = i1131[17]
  i1130.m_StrikethroughOffset = i1131[18]
  i1130.m_StrikethroughThickness = i1131[19]
  i1130.m_TabWidth = i1131[20]
  return i1130
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1135 = data
  i1134.m_Index = i1135[0]
  i1134.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1135[1], i1134.m_Metrics)
  i1134.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1135[2], i1134.m_GlyphRect)
  i1134.m_Scale = i1135[3]
  i1134.m_AtlasIndex = i1135[4]
  i1134.m_ClassDefinitionType = i1135[5]
  return i1134
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1137 = data
  i1136.m_Width = i1137[0]
  i1136.m_Height = i1137[1]
  i1136.m_HorizontalBearingX = i1137[2]
  i1136.m_HorizontalBearingY = i1137[3]
  i1136.m_HorizontalAdvance = i1137[4]
  return i1136
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1139 = data
  i1138.m_X = i1139[0]
  i1138.m_Y = i1139[1]
  i1138.m_Width = i1139[2]
  i1138.m_Height = i1139[3]
  return i1138
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_Character' )
  var i1143 = data
  i1142.m_ElementType = i1143[0]
  i1142.m_Unicode = i1143[1]
  i1142.m_GlyphIndex = i1143[2]
  i1142.m_Scale = i1143[3]
  return i1142
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1149 = data
  i1148.Name = i1149[0]
  i1148.PointSize = i1149[1]
  i1148.Scale = i1149[2]
  i1148.CharacterCount = i1149[3]
  i1148.LineHeight = i1149[4]
  i1148.Baseline = i1149[5]
  i1148.Ascender = i1149[6]
  i1148.CapHeight = i1149[7]
  i1148.Descender = i1149[8]
  i1148.CenterLine = i1149[9]
  i1148.SuperscriptOffset = i1149[10]
  i1148.SubscriptOffset = i1149[11]
  i1148.SubSize = i1149[12]
  i1148.Underline = i1149[13]
  i1148.UnderlineThickness = i1149[14]
  i1148.strikethrough = i1149[15]
  i1148.strikethroughThickness = i1149[16]
  i1148.TabWidth = i1149[17]
  i1148.Padding = i1149[18]
  i1148.AtlasWidth = i1149[19]
  i1148.AtlasHeight = i1149[20]
  return i1148
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.x = i1153[1]
  i1152.y = i1153[2]
  i1152.width = i1153[3]
  i1152.height = i1153[4]
  i1152.xOffset = i1153[5]
  i1152.yOffset = i1153[6]
  i1152.xAdvance = i1153[7]
  i1152.scale = i1153[8]
  return i1152
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.KerningTable' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('TMPro.KerningPair', i1157[i + 0]));
  }
  i1154.kerningPairs = i1156
  return i1154
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.KerningPair' )
  var i1161 = data
  i1160.xOffset = i1161[0]
  i1160.m_FirstGlyph = i1161[1]
  i1160.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1161[2], i1160.m_FirstGlyphAdjustments)
  i1160.m_SecondGlyph = i1161[3]
  i1160.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1161[4], i1160.m_SecondGlyphAdjustments)
  i1160.m_IgnoreSpacingAdjustments = !!i1161[5]
  return i1160
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1165[i + 0]));
  }
  i1162.m_GlyphPairAdjustmentRecords = i1164
  return i1162
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1169 = data
  i1168.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1169[0], i1168.m_FirstAdjustmentRecord)
  i1168.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1169[1], i1168.m_SecondAdjustmentRecord)
  i1168.m_FeatureLookupFlags = i1169[2]
  return i1168
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1171 = data
  i1170.m_GlyphIndex = i1171[0]
  i1170.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1171[1], i1170.m_GlyphValueRecord)
  return i1170
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1173 = data
  i1172.m_XPlacement = i1173[0]
  i1172.m_YPlacement = i1173[1]
  i1172.m_XAdvance = i1173[2]
  i1172.m_YAdvance = i1173[3]
  return i1172
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1177 = data
  i1176.sourceFontFileName = i1177[0]
  i1176.sourceFontFileGUID = i1177[1]
  i1176.pointSizeSamplingMode = i1177[2]
  i1176.pointSize = i1177[3]
  i1176.padding = i1177[4]
  i1176.packingMode = i1177[5]
  i1176.atlasWidth = i1177[6]
  i1176.atlasHeight = i1177[7]
  i1176.characterSetSelectionMode = i1177[8]
  i1176.characterSequence = i1177[9]
  i1176.referencedFontAssetGUID = i1177[10]
  i1176.referencedTextAssetGUID = i1177[11]
  i1176.fontStyle = i1177[12]
  i1176.fontStyleModifier = i1177[13]
  i1176.renderMode = i1177[14]
  i1176.includeFontFeatures = !!i1177[15]
  return i1176
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'regularTypeface')
  request.r(i1181[2], i1181[3], 0, i1180, 'italicTypeface')
  return i1180
}

Deserializers["HexColorPalette"] = function (request, data, root) {
  var i1182 = root || request.c( 'HexColorPalette' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('HexColorPalette+Entry', i1185[i + 0]) );
  }
  i1182.entries = i1184
  return i1182
}

Deserializers["HexColorPalette+Entry"] = function (request, data, root) {
  var i1188 = root || request.c( 'HexColorPalette+Entry' )
  var i1189 = data
  i1188.color = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'material')
  return i1188
}

Deserializers["CellHighlightConfig"] = function (request, data, root) {
  var i1190 = root || request.c( 'CellHighlightConfig' )
  var i1191 = data
  i1190.normalColor = new pc.Color(i1191[0], i1191[1], i1191[2], i1191[3])
  i1190.highlightColor = new pc.Color(i1191[4], i1191[5], i1191[6], i1191[7])
  i1190.highlightScaleX = i1191[8]
  i1190.highlightPositionY = i1191[9]
  i1190.transitionDuration = i1191[10]
  return i1190
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_Settings' )
  var i1193 = data
  i1192.m_enableWordWrapping = !!i1193[0]
  i1192.m_enableKerning = !!i1193[1]
  i1192.m_enableExtraPadding = !!i1193[2]
  i1192.m_enableTintAllSprites = !!i1193[3]
  i1192.m_enableParseEscapeCharacters = !!i1193[4]
  i1192.m_EnableRaycastTarget = !!i1193[5]
  i1192.m_GetFontFeaturesAtRuntime = !!i1193[6]
  i1192.m_missingGlyphCharacter = i1193[7]
  i1192.m_warningsDisabled = !!i1193[8]
  request.r(i1193[9], i1193[10], 0, i1192, 'm_defaultFontAsset')
  i1192.m_defaultFontAssetPath = i1193[11]
  i1192.m_defaultFontSize = i1193[12]
  i1192.m_defaultAutoSizeMinRatio = i1193[13]
  i1192.m_defaultAutoSizeMaxRatio = i1193[14]
  i1192.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1193[15], i1193[16] )
  i1192.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1193[17], i1193[18] )
  i1192.m_autoSizeTextContainer = !!i1193[19]
  i1192.m_IsTextObjectScaleStatic = !!i1193[20]
  var i1195 = i1193[21]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1192.m_fallbackFontAssets = i1194
  i1192.m_matchMaterialPreset = !!i1193[22]
  request.r(i1193[23], i1193[24], 0, i1192, 'm_defaultSpriteAsset')
  i1192.m_defaultSpriteAssetPath = i1193[25]
  i1192.m_enableEmojiSupport = !!i1193[26]
  i1192.m_MissingCharacterSpriteUnicode = i1193[27]
  i1192.m_defaultColorGradientPresetsPath = i1193[28]
  request.r(i1193[29], i1193[30], 0, i1192, 'm_defaultStyleSheet')
  i1192.m_StyleSheetsResourcePath = i1193[31]
  request.r(i1193[32], i1193[33], 0, i1192, 'm_leadingCharacters')
  request.r(i1193[34], i1193[35], 0, i1192, 'm_followingCharacters')
  i1192.m_UseModernHangulLineBreakingRules = !!i1193[36]
  return i1192
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'spriteSheet')
  var i1199 = i1197[2]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.TMP_Sprite', i1199[i + 0]));
  }
  i1196.spriteInfoList = i1198
  var i1201 = i1197[3]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1196.fallbackSpriteAssets = i1200
  i1196.hashCode = i1197[4]
  request.r(i1197[5], i1197[6], 0, i1196, 'material')
  i1196.materialHashCode = i1197[7]
  i1196.m_Version = i1197[8]
  i1196.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1197[9], i1196.m_FaceInfo)
  var i1203 = i1197[10]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('TMPro.TMP_SpriteCharacter', i1203[i + 0]));
  }
  i1196.m_SpriteCharacterTable = i1202
  var i1205 = i1197[11]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.TMP_SpriteGlyph', i1205[i + 0]));
  }
  i1196.m_SpriteGlyphTable = i1204
  return i1196
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.hashCode = i1209[1]
  i1208.unicode = i1209[2]
  i1208.pivot = new pc.Vec2( i1209[3], i1209[4] )
  request.r(i1209[5], i1209[6], 0, i1208, 'sprite')
  i1208.id = i1209[7]
  i1208.x = i1209[8]
  i1208.y = i1209[9]
  i1208.width = i1209[10]
  i1208.height = i1209[11]
  i1208.xOffset = i1209[12]
  i1208.yOffset = i1209[13]
  i1208.xAdvance = i1209[14]
  i1208.scale = i1209[15]
  return i1208
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1215 = data
  i1214.m_Name = i1215[0]
  i1214.m_HashCode = i1215[1]
  i1214.m_ElementType = i1215[2]
  i1214.m_Unicode = i1215[3]
  i1214.m_GlyphIndex = i1215[4]
  i1214.m_Scale = i1215[5]
  return i1214
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'sprite')
  i1218.m_Index = i1219[2]
  i1218.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1219[3], i1218.m_Metrics)
  i1218.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1219[4], i1218.m_GlyphRect)
  i1218.m_Scale = i1219[5]
  i1218.m_AtlasIndex = i1219[6]
  i1218.m_ClassDefinitionType = i1219[7]
  return i1218
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_Style', i1223[i + 0]));
  }
  i1220.m_StyleList = i1222
  return i1220
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_Style' )
  var i1227 = data
  i1226.m_Name = i1227[0]
  i1226.m_HashCode = i1227[1]
  i1226.m_OpeningDefinition = i1227[2]
  i1226.m_ClosingDefinition = i1227[3]
  i1226.m_OpeningTagArray = i1227[4]
  i1226.m_ClosingTagArray = i1227[5]
  i1226.m_OpeningTagUnicodeArray = i1227[6]
  i1226.m_ClosingTagUnicodeArray = i1227[7]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1231[i + 0]) );
  }
  i1228.files = i1230
  i1228.componentToPrefabIds = i1229[1]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1235 = data
  i1234.path = i1235[0]
  request.r(i1235[1], i1235[2], 0, i1234, 'unityObject')
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1239[i + 0]) );
  }
  i1236.scriptsExecutionOrder = i1238
  var i1241 = i1237[1]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1241[i + 0]) );
  }
  i1236.sortingLayers = i1240
  var i1243 = i1237[2]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1243[i + 0]) );
  }
  i1236.cullingLayers = i1242
  i1236.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1237[3], i1236.timeSettings)
  i1236.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1237[4], i1236.physicsSettings)
  i1236.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1237[5], i1236.physics2DSettings)
  i1236.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1237[6], i1236.qualitySettings)
  i1236.enableRealtimeShadows = !!i1237[7]
  i1236.enableAutoInstancing = !!i1237[8]
  i1236.enableStaticBatching = !!i1237[9]
  i1236.enableDynamicBatching = !!i1237[10]
  i1236.usePreservativeDynamicBatching = !!i1237[11]
  i1236.lightmapEncodingQuality = i1237[12]
  i1236.desiredColorSpace = i1237[13]
  var i1245 = i1237[14]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1236.allTags = i1244
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1249 = data
  i1248.name = i1249[0]
  i1248.value = i1249[1]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1253 = data
  i1252.id = i1253[0]
  i1252.name = i1253[1]
  i1252.value = i1253[2]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1257 = data
  i1256.id = i1257[0]
  i1256.name = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1259 = data
  i1258.fixedDeltaTime = i1259[0]
  i1258.maximumDeltaTime = i1259[1]
  i1258.timeScale = i1259[2]
  i1258.maximumParticleTimestep = i1259[3]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1261 = data
  i1260.gravity = new pc.Vec3( i1261[0], i1261[1], i1261[2] )
  i1260.defaultSolverIterations = i1261[3]
  i1260.bounceThreshold = i1261[4]
  i1260.autoSyncTransforms = !!i1261[5]
  i1260.autoSimulation = !!i1261[6]
  var i1263 = i1261[7]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1263[i + 0]) );
  }
  i1260.collisionMatrix = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1267 = data
  i1266.enabled = !!i1267[0]
  i1266.layerId = i1267[1]
  i1266.otherLayerId = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'material')
  i1268.gravity = new pc.Vec2( i1269[2], i1269[3] )
  i1268.positionIterations = i1269[4]
  i1268.velocityIterations = i1269[5]
  i1268.velocityThreshold = i1269[6]
  i1268.maxLinearCorrection = i1269[7]
  i1268.maxAngularCorrection = i1269[8]
  i1268.maxTranslationSpeed = i1269[9]
  i1268.maxRotationSpeed = i1269[10]
  i1268.baumgarteScale = i1269[11]
  i1268.baumgarteTOIScale = i1269[12]
  i1268.timeToSleep = i1269[13]
  i1268.linearSleepTolerance = i1269[14]
  i1268.angularSleepTolerance = i1269[15]
  i1268.defaultContactOffset = i1269[16]
  i1268.autoSimulation = !!i1269[17]
  i1268.queriesHitTriggers = !!i1269[18]
  i1268.queriesStartInColliders = !!i1269[19]
  i1268.callbacksOnDisable = !!i1269[20]
  i1268.reuseCollisionCallbacks = !!i1269[21]
  i1268.autoSyncTransforms = !!i1269[22]
  var i1271 = i1269[23]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1271[i + 0]) );
  }
  i1268.collisionMatrix = i1270
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1275 = data
  i1274.enabled = !!i1275[0]
  i1274.layerId = i1275[1]
  i1274.otherLayerId = i1275[2]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1279[i + 0]) );
  }
  i1276.qualityLevels = i1278
  var i1281 = i1277[1]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( i1281[i + 0] );
  }
  i1276.names = i1280
  i1276.shadows = i1277[2]
  i1276.anisotropicFiltering = i1277[3]
  i1276.antiAliasing = i1277[4]
  i1276.lodBias = i1277[5]
  i1276.shadowCascades = i1277[6]
  i1276.shadowDistance = i1277[7]
  i1276.shadowmaskMode = i1277[8]
  i1276.shadowProjection = i1277[9]
  i1276.shadowResolution = i1277[10]
  i1276.softParticles = !!i1277[11]
  i1276.softVegetation = !!i1277[12]
  i1276.activeColorSpace = i1277[13]
  i1276.desiredColorSpace = i1277[14]
  i1276.masterTextureLimit = i1277[15]
  i1276.maxQueuedFrames = i1277[16]
  i1276.particleRaycastBudget = i1277[17]
  i1276.pixelLightCount = i1277[18]
  i1276.realtimeReflectionProbes = !!i1277[19]
  i1276.shadowCascade2Split = i1277[20]
  i1276.shadowCascade4Split = new pc.Vec3( i1277[21], i1277[22], i1277[23] )
  i1276.streamingMipmapsActive = !!i1277[24]
  i1276.vSyncCount = i1277[25]
  i1276.asyncUploadBufferSize = i1277[26]
  i1276.asyncUploadTimeSlice = i1277[27]
  i1276.billboardsFaceCameraPosition = !!i1277[28]
  i1276.shadowNearPlaneOffset = i1277[29]
  i1276.streamingMipmapsMemoryBudget = i1277[30]
  i1276.maximumLODLevel = i1277[31]
  i1276.streamingMipmapsAddAllCameras = !!i1277[32]
  i1276.streamingMipmapsMaxLevelReduction = i1277[33]
  i1276.streamingMipmapsRenderersPerFrame = i1277[34]
  i1276.resolutionScalingFixedDPIFactor = i1277[35]
  i1276.streamingMipmapsMaxFileIORequests = i1277[36]
  i1276.currentQualityLevel = i1277[37]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1287 = data
  i1286.weight = i1287[0]
  i1286.vertices = i1287[1]
  i1286.normals = i1287[2]
  i1286.tangents = i1287[3]
  return i1286
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'm_ObjectArgument')
  i1288.m_ObjectArgumentAssemblyTypeName = i1289[2]
  i1288.m_IntArgument = i1289[3]
  i1288.m_FloatArgument = i1289[4]
  i1288.m_StringArgument = i1289[5]
  i1288.m_BoolArgument = !!i1289[6]
  return i1288
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1291 = data
  i1290.xPlacement = i1291[0]
  i1290.yPlacement = i1291[1]
  i1290.xAdvance = i1291[2]
  i1290.yAdvance = i1291[3]
  return i1290
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[16],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[16],"93":[5],"94":[95],"96":[95],"28":[27],"8":[5],"10":[9],"12":[10],"97":[31,27],"98":[99],"41":[40],"100":[99],"101":[27],"102":[27],"30":[28],"32":[31,27],"103":[27],"29":[28],"104":[27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[27],"110":[27],"44":[27],"111":[27],"38":[31,27],"112":[27],"113":[27],"114":[27],"115":[27],"116":[31,27],"117":[27],"118":[19],"119":[19],"20":[19],"120":[19],"121":[16],"122":[16],"123":[27],"124":[5,27],"47":[27,31],"125":[27],"126":[31,27],"127":[5],"128":[31,27],"129":[27],"130":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","HexPieceView","UnityEngine.BoxCollider","HexStack","HexColorPalette","StackDragHandler","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameFlowController","TutorialHandController","GameTimerUI","TimerSliderUI","PackshotController","BoardManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.GameObject","BoardCell","UnityEngine.Animator","TutorialSpotlightOverlay","UnityEngine.UI.RawImage","UnityEngine.CanvasGroup","UnityEngine.SpriteRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","UnityEngine.UI.Mask","CopyRectSize","FloatingHoverEffect","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","ScreenScaler","UnityEngine.MeshCollider","TrayRefillManager","CellHighlightConfig","UnityEngine.SphereCollider","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","GradientSlicedImage","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAdGame";

Deserializers.lunaInitializationTime = "06/30/2026 14:26:56";

Deserializers.lunaDaysRunning = "5.7";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1588";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4736";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAdGame";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "86869109-e3fa-481e-9c4d-06e4f2f15cba";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

