var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointSpring' )
  var i643 = data
  i642.spring = i643[0]
  i642.damper = i643[1]
  i642.targetPosition = i643[2]
  return i642
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor' )
  var i645 = data
  i644.m_TargetVelocity = i645[0]
  i644.m_Force = i645[1]
  i644.m_FreeSpin = i645[2]
  return i644
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointLimits' )
  var i647 = data
  i646.m_Min = i647[0]
  i646.m_Max = i647[1]
  i646.m_Bounciness = i647[2]
  i646.m_BounceMinVelocity = i647[3]
  i646.m_ContactDistance = i647[4]
  i646.minBounce = i647[5]
  i646.maxBounce = i647[6]
  return i646
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointDrive' )
  var i649 = data
  i648.m_PositionSpring = i649[0]
  i648.m_PositionDamper = i649[1]
  i648.m_MaximumForce = i649[2]
  i648.m_UseAcceleration = i649[3]
  return i648
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i651 = data
  i650.m_Spring = i651[0]
  i650.m_Damper = i651[1]
  return i650
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i653 = data
  i652.m_Limit = i653[0]
  i652.m_Bounciness = i653[1]
  i652.m_ContactDistance = i653[2]
  return i652
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i655 = data
  i654.m_ExtremumSlip = i655[0]
  i654.m_ExtremumValue = i655[1]
  i654.m_AsymptoteSlip = i655[2]
  i654.m_AsymptoteValue = i655[3]
  i654.m_Stiffness = i655[4]
  return i654
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i657 = data
  i656.m_LowerAngle = i657[0]
  i656.m_UpperAngle = i657[1]
  return i656
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i659 = data
  i658.m_MotorSpeed = i659[0]
  i658.m_MaximumMotorTorque = i659[1]
  return i658
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i661 = data
  i660.m_DampingRatio = i661[0]
  i660.m_Frequency = i661[1]
  i660.m_Angle = i661[2]
  return i660
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i663 = data
  i662.m_LowerTranslation = i663[0]
  i662.m_UpperTranslation = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i665 = data
  i664.name = i665[0]
  i664.width = i665[1]
  i664.height = i665[2]
  i664.mipmapCount = i665[3]
  i664.anisoLevel = i665[4]
  i664.filterMode = i665[5]
  i664.hdr = !!i665[6]
  i664.format = i665[7]
  i664.wrapMode = i665[8]
  i664.alphaIsTransparency = !!i665[9]
  i664.alphaSource = i665[10]
  i664.graphicsFormat = i665[11]
  i664.sRGBTexture = !!i665[12]
  i664.desiredColorSpace = i665[13]
  i664.wrapU = i665[14]
  i664.wrapV = i665[15]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i666 = root || new pc.UnityMaterial()
  var i667 = data
  i666.name = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'shader')
  i666.renderQueue = i667[3]
  i666.enableInstancing = !!i667[4]
  var i669 = i667[5]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i669[i + 0]) );
  }
  i666.floatParameters = i668
  var i671 = i667[6]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i671[i + 0]) );
  }
  i666.colorParameters = i670
  var i673 = i667[7]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i673[i + 0]) );
  }
  i666.vectorParameters = i672
  var i675 = i667[8]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i675[i + 0]) );
  }
  i666.textureParameters = i674
  var i677 = i667[9]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i677[i + 0]) );
  }
  i666.materialFlags = i676
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i681 = data
  i680.name = i681[0]
  i680.value = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i685 = data
  i684.name = i685[0]
  i684.value = new pc.Color(i685[1], i685[2], i685[3], i685[4])
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i689 = data
  i688.name = i689[0]
  i688.value = new pc.Vec4( i689[1], i689[2], i689[3], i689[4] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i693 = data
  i692.name = i693[0]
  request.r(i693[1], i693[2], 0, i692, 'value')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i697 = data
  i696.name = i697[0]
  i696.enabled = !!i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i699 = data
  i698.name = i699[0]
  i698.halfPrecision = !!i699[1]
  i698.useSimplification = !!i699[2]
  i698.useUInt32IndexFormat = !!i699[3]
  i698.vertexCount = i699[4]
  i698.aabb = i699[5]
  var i701 = i699[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( !!i701[i + 0] );
  }
  i698.streams = i700
  i698.vertices = i699[7]
  var i703 = i699[8]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i703[i + 0]) );
  }
  i698.subMeshes = i702
  var i705 = i699[9]
  var i704 = []
  for(var i = 0; i < i705.length; i += 16) {
    i704.push( new pc.Mat4().setData(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3],  i705[i + 4], i705[i + 5], i705[i + 6], i705[i + 7],  i705[i + 8], i705[i + 9], i705[i + 10], i705[i + 11],  i705[i + 12], i705[i + 13], i705[i + 14], i705[i + 15]) );
  }
  i698.bindposes = i704
  var i707 = i699[10]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i707[i + 0]) );
  }
  i698.blendShapes = i706
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i713 = data
  i712.triangles = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i719 = data
  i718.name = i719[0]
  var i721 = i719[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i721[i + 0]) );
  }
  i718.frames = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i723 = data
  i722.position = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.scale = new pc.Vec3( i723[3], i723[4], i723[5] )
  i722.rotation = new pc.Quat(i723[6], i723[7], i723[8], i723[9])
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'sharedMesh')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'additionalVertexStreams')
  i726.enabled = !!i727[2]
  request.r(i727[3], i727[4], 0, i726, 'sharedMaterial')
  var i729 = i727[5]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.sharedMaterials = i728
  i726.receiveShadows = !!i727[6]
  i726.shadowCastingMode = i727[7]
  i726.sortingLayerID = i727[8]
  i726.sortingOrder = i727[9]
  i726.lightmapIndex = i727[10]
  i726.lightmapSceneIndex = i727[11]
  i726.lightmapScaleOffset = new pc.Vec4( i727[12], i727[13], i727[14], i727[15] )
  i726.lightProbeUsage = i727[16]
  i726.reflectionProbeUsage = i727[17]
  return i726
}

Deserializers["HexPieceView"] = function (request, data, root) {
  var i732 = root || request.c( 'HexPieceView' )
  var i733 = data
  i732.needsAlwaysOnTopMaterial = !!i733[0]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i735 = data
  i734.name = i735[0]
  i734.tagId = i735[1]
  i734.enabled = !!i735[2]
  i734.isStatic = !!i735[3]
  i734.layer = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i737 = data
  i736.center = new pc.Vec3( i737[0], i737[1], i737[2] )
  i736.size = new pc.Vec3( i737[3], i737[4], i737[5] )
  i736.enabled = !!i737[6]
  i736.isTrigger = !!i737[7]
  request.r(i737[8], i737[9], 0, i736, 'material')
  return i736
}

Deserializers["HexStack"] = function (request, data, root) {
  var i738 = root || request.c( 'HexStack' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'piecePrefab')
  request.r(i739[2], i739[3], 0, i738, 'palette')
  i738.perPieceOffset = new pc.Vec3( i739[4], i739[5], i739[6] )
  var i741 = i739[7]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(i741[i + 0]);
  }
  i738.initialColors = i740
  return i738
}

Deserializers["StackDragHandler"] = function (request, data, root) {
  var i744 = root || request.c( 'StackDragHandler' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'board')
  i744.dragHeight = i745[2]
  i744.minDragDistanceToCountAsMoved = i745[3]
  i744.returnDuration = i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i747 = data
  i746.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i747[0], i746.main)
  i746.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i747[1], i746.colorBySpeed)
  i746.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i747[2], i746.colorOverLifetime)
  i746.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i747[3], i746.emission)
  i746.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i747[4], i746.rotationBySpeed)
  i746.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i747[5], i746.rotationOverLifetime)
  i746.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i747[6], i746.shape)
  i746.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i747[7], i746.sizeBySpeed)
  i746.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i747[8], i746.sizeOverLifetime)
  i746.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i747[9], i746.textureSheetAnimation)
  i746.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i747[10], i746.velocityOverLifetime)
  i746.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i747[11], i746.noise)
  i746.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i747[12], i746.inheritVelocity)
  i746.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i747[13], i746.forceOverLifetime)
  i746.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i747[14], i746.limitVelocityOverLifetime)
  i746.useAutoRandomSeed = !!i747[15]
  i746.randomSeed = i747[16]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemMain()
  var i749 = data
  i748.duration = i749[0]
  i748.loop = !!i749[1]
  i748.prewarm = !!i749[2]
  i748.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.startDelay)
  i748.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[4], i748.startLifetime)
  i748.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[5], i748.startSpeed)
  i748.startSize3D = !!i749[6]
  i748.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[7], i748.startSizeX)
  i748.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[8], i748.startSizeY)
  i748.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[9], i748.startSizeZ)
  i748.startRotation3D = !!i749[10]
  i748.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[11], i748.startRotationX)
  i748.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[12], i748.startRotationY)
  i748.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[13], i748.startRotationZ)
  i748.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i749[14], i748.startColor)
  i748.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[15], i748.gravityModifier)
  i748.simulationSpace = i749[16]
  request.r(i749[17], i749[18], 0, i748, 'customSimulationSpace')
  i748.simulationSpeed = i749[19]
  i748.useUnscaledTime = !!i749[20]
  i748.scalingMode = i749[21]
  i748.playOnAwake = !!i749[22]
  i748.maxParticles = i749[23]
  i748.emitterVelocityMode = i749[24]
  i748.stopAction = i749[25]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i750 = root || new pc.MinMaxCurve()
  var i751 = data
  i750.mode = i751[0]
  i750.curveMin = new pc.AnimationCurve( { keys_flow: i751[1] } )
  i750.curveMax = new pc.AnimationCurve( { keys_flow: i751[2] } )
  i750.curveMultiplier = i751[3]
  i750.constantMin = i751[4]
  i750.constantMax = i751[5]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i752 = root || new pc.MinMaxGradient()
  var i753 = data
  i752.mode = i753[0]
  i752.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i753[1], i752.gradientMin)
  i752.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i753[2], i752.gradientMax)
  i752.colorMin = new pc.Color(i753[3], i753[4], i753[5], i753[6])
  i752.colorMax = new pc.Color(i753[7], i753[8], i753[9], i753[10])
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i755 = data
  i754.mode = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i757[i + 0]) );
  }
  i754.colorKeys = i756
  var i759 = i755[2]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i759[i + 0]) );
  }
  i754.alphaKeys = i758
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemColorBySpeed()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i761[1], i760.color)
  i760.range = new pc.Vec2( i761[2], i761[3] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i765 = data
  i764.color = new pc.Color(i765[0], i765[1], i765[2], i765[3])
  i764.time = i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i769 = data
  i768.alpha = i769[0]
  i768.time = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemEmitter()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.rateOverTime)
  i772.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.rateOverDistance)
  var i775 = i773[3]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i775[i + 0]) );
  }
  i772.bursts = i774
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemBurst()
  var i779 = data
  i778.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[0], i778.count)
  i778.cycleCount = i779[1]
  i778.minCount = i779[2]
  i778.maxCount = i779[3]
  i778.repeatInterval = i779[4]
  i778.time = i779[5]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemRotationBySpeed()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.separateAxes = !!i781[4]
  i780.range = new pc.Vec2( i781[5], i781[6] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemRotationOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.separateAxes = !!i783[4]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemShape()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.shapeType = i785[1]
  i784.randomDirectionAmount = i785[2]
  i784.sphericalDirectionAmount = i785[3]
  i784.randomPositionAmount = i785[4]
  i784.alignToDirection = !!i785[5]
  i784.radius = i785[6]
  i784.radiusMode = i785[7]
  i784.radiusSpread = i785[8]
  i784.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[9], i784.radiusSpeed)
  i784.radiusThickness = i785[10]
  i784.angle = i785[11]
  i784.length = i785[12]
  i784.boxThickness = new pc.Vec3( i785[13], i785[14], i785[15] )
  i784.meshShapeType = i785[16]
  request.r(i785[17], i785[18], 0, i784, 'mesh')
  request.r(i785[19], i785[20], 0, i784, 'meshRenderer')
  request.r(i785[21], i785[22], 0, i784, 'skinnedMeshRenderer')
  i784.useMeshMaterialIndex = !!i785[23]
  i784.meshMaterialIndex = i785[24]
  i784.useMeshColors = !!i785[25]
  i784.normalOffset = i785[26]
  i784.arc = i785[27]
  i784.arcMode = i785[28]
  i784.arcSpread = i785[29]
  i784.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[30], i784.arcSpeed)
  i784.donutRadius = i785[31]
  i784.position = new pc.Vec3( i785[32], i785[33], i785[34] )
  i784.rotation = new pc.Vec3( i785[35], i785[36], i785[37] )
  i784.scale = new pc.Vec3( i785[38], i785[39], i785[40] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemSizeBySpeed()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  i786.range = new pc.Vec2( i787[5], i787[6] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemSizeOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.mode = i791[1]
  i790.animation = i791[2]
  i790.numTilesX = i791[3]
  i790.numTilesY = i791[4]
  i790.useRandomRow = !!i791[5]
  i790.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[6], i790.frameOverTime)
  i790.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[7], i790.startFrame)
  i790.cycleCount = i791[8]
  i790.rowIndex = i791[9]
  i790.flipU = i791[10]
  i790.flipV = i791[11]
  i790.spriteCount = i791[12]
  var i793 = i791[13]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.sprites = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.radial)
  i796.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[5], i796.speedModifier)
  i796.space = i797[6]
  i796.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[7], i796.orbitalX)
  i796.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[8], i796.orbitalY)
  i796.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[9], i796.orbitalZ)
  i796.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[10], i796.orbitalOffsetX)
  i796.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[11], i796.orbitalOffsetY)
  i796.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[12], i796.orbitalOffsetZ)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemNoise()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.separateAxes = !!i799[1]
  i798.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.strengthX)
  i798.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.strengthY)
  i798.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[4], i798.strengthZ)
  i798.frequency = i799[5]
  i798.damping = !!i799[6]
  i798.octaveCount = i799[7]
  i798.octaveMultiplier = i799[8]
  i798.octaveScale = i799[9]
  i798.quality = i799[10]
  i798.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[11], i798.scrollSpeed)
  i798.scrollSpeedMultiplier = i799[12]
  i798.remapEnabled = !!i799[13]
  i798.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[14], i798.remapX)
  i798.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[15], i798.remapY)
  i798.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[16], i798.remapZ)
  i798.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[17], i798.positionAmount)
  i798.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[18], i798.rotationAmount)
  i798.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[19], i798.sizeAmount)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemInheritVelocity()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.curve)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemForceOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.space = i803[4]
  i802.randomized = !!i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.limit)
  i804.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.limitX)
  i804.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.limitY)
  i804.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.limitZ)
  i804.dampen = i805[5]
  i804.separateAxes = !!i805[6]
  i804.space = i805[7]
  i804.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[8], i804.drag)
  i804.multiplyDragByParticleSize = !!i805[9]
  i804.multiplyDragByParticleVelocity = !!i805[10]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'mesh')
  i806.meshCount = i807[2]
  i806.activeVertexStreamsCount = i807[3]
  i806.alignment = i807[4]
  i806.renderMode = i807[5]
  i806.sortMode = i807[6]
  i806.lengthScale = i807[7]
  i806.velocityScale = i807[8]
  i806.cameraVelocityScale = i807[9]
  i806.normalDirection = i807[10]
  i806.sortingFudge = i807[11]
  i806.minParticleSize = i807[12]
  i806.maxParticleSize = i807[13]
  i806.pivot = new pc.Vec3( i807[14], i807[15], i807[16] )
  request.r(i807[17], i807[18], 0, i806, 'trailMaterial')
  i806.applyActiveColorSpace = !!i807[19]
  i806.enabled = !!i807[20]
  request.r(i807[21], i807[22], 0, i806, 'sharedMaterial')
  var i809 = i807[23]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.sharedMaterials = i808
  i806.receiveShadows = !!i807[24]
  i806.shadowCastingMode = i807[25]
  i806.sortingLayerID = i807[26]
  i806.sortingOrder = i807[27]
  i806.lightmapIndex = i807[28]
  i806.lightmapSceneIndex = i807[29]
  i806.lightmapScaleOffset = new pc.Vec4( i807[30], i807[31], i807[32], i807[33] )
  i806.lightProbeUsage = i807[34]
  i806.reflectionProbeUsage = i807[35]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i811 = data
  i810.name = i811[0]
  i810.atlasId = i811[1]
  i810.mipmapCount = i811[2]
  i810.hdr = !!i811[3]
  i810.size = i811[4]
  i810.anisoLevel = i811[5]
  i810.filterMode = i811[6]
  var i813 = i811[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 4) {
    i812.push( UnityEngine.Rect.MinMaxRect(i813[i + 0], i813[i + 1], i813[i + 2], i813[i + 3]) );
  }
  i810.rects = i812
  i810.wrapU = i811[8]
  i810.wrapV = i811[9]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i817 = data
  i816.name = i817[0]
  i816.index = i817[1]
  i816.startup = !!i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i819 = data
  i818.type = i819[0]
  i818.color = new pc.Color(i819[1], i819[2], i819[3], i819[4])
  i818.cullingMask = i819[5]
  i818.intensity = i819[6]
  i818.range = i819[7]
  i818.spotAngle = i819[8]
  i818.shadows = i819[9]
  i818.shadowNormalBias = i819[10]
  i818.shadowBias = i819[11]
  i818.shadowStrength = i819[12]
  i818.shadowResolution = i819[13]
  i818.lightmapBakeType = i819[14]
  i818.renderMode = i819[15]
  request.r(i819[16], i819[17], 0, i818, 'cookie')
  i818.cookieSize = i819[18]
  i818.shadowNearPlane = i819[19]
  i818.occlusionMaskChannel = i819[20]
  i818.isBaked = !!i819[21]
  i818.mixedLightingMode = i819[22]
  i818.enabled = !!i819[23]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i821 = data
  i820.aspect = i821[0]
  i820.orthographic = !!i821[1]
  i820.orthographicSize = i821[2]
  i820.backgroundColor = new pc.Color(i821[3], i821[4], i821[5], i821[6])
  i820.nearClipPlane = i821[7]
  i820.farClipPlane = i821[8]
  i820.fieldOfView = i821[9]
  i820.depth = i821[10]
  i820.clearFlags = i821[11]
  i820.cullingMask = i821[12]
  i820.rect = i821[13]
  request.r(i821[14], i821[15], 0, i820, 'targetTexture')
  i820.usePhysicalProperties = !!i821[16]
  i820.focalLength = i821[17]
  i820.sensorSize = new pc.Vec2( i821[18], i821[19] )
  i820.lensShift = new pc.Vec2( i821[20], i821[21] )
  i820.gateFit = i821[22]
  i820.commandBufferCount = i821[23]
  i820.cameraType = i821[24]
  i820.enabled = !!i821[25]
  return i820
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_FirstSelected')
  i822.m_sendNavigationEvents = !!i823[2]
  i822.m_DragThreshold = i823[3]
  return i822
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i825 = data
  i824.m_HorizontalAxis = i825[0]
  i824.m_VerticalAxis = i825[1]
  i824.m_SubmitButton = i825[2]
  i824.m_CancelButton = i825[3]
  i824.m_InputActionsPerSecond = i825[4]
  i824.m_RepeatDelay = i825[5]
  i824.m_ForceModuleActive = !!i825[6]
  i824.m_SendPointerHoverToParent = !!i825[7]
  return i824
}

Deserializers["GameFlowController"] = function (request, data, root) {
  var i826 = root || request.c( 'GameFlowController' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'tutorial')
  request.r(i827[2], i827[3], 0, i826, 'timer')
  request.r(i827[4], i827[5], 0, i826, 'packshot')
  request.r(i827[6], i827[7], 0, i826, 'board')
  var i829 = i827[8]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.dragHandlers = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i833 = data
  i832.pivot = new pc.Vec2( i833[0], i833[1] )
  i832.anchorMin = new pc.Vec2( i833[2], i833[3] )
  i832.anchorMax = new pc.Vec2( i833[4], i833[5] )
  i832.sizeDelta = new pc.Vec2( i833[6], i833[7] )
  i832.anchoredPosition3D = new pc.Vec3( i833[8], i833[9], i833[10] )
  i832.rotation = new pc.Quat(i833[11], i833[12], i833[13], i833[14])
  i832.scale = new pc.Vec3( i833[15], i833[16], i833[17] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i835 = data
  i834.planeDistance = i835[0]
  i834.referencePixelsPerUnit = i835[1]
  i834.isFallbackOverlay = !!i835[2]
  i834.renderMode = i835[3]
  i834.renderOrder = i835[4]
  i834.sortingLayerName = i835[5]
  i834.sortingOrder = i835[6]
  i834.scaleFactor = i835[7]
  request.r(i835[8], i835[9], 0, i834, 'worldCamera')
  i834.overrideSorting = !!i835[10]
  i834.pixelPerfect = !!i835[11]
  i834.targetDisplay = i835[12]
  i834.overridePixelPerfect = !!i835[13]
  i834.enabled = !!i835[14]
  return i834
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i837 = data
  i836.m_UiScaleMode = i837[0]
  i836.m_ReferencePixelsPerUnit = i837[1]
  i836.m_ScaleFactor = i837[2]
  i836.m_ReferenceResolution = new pc.Vec2( i837[3], i837[4] )
  i836.m_ScreenMatchMode = i837[5]
  i836.m_MatchWidthOrHeight = i837[6]
  i836.m_PhysicalUnit = i837[7]
  i836.m_FallbackScreenDPI = i837[8]
  i836.m_DefaultSpriteDPI = i837[9]
  i836.m_DynamicPixelsPerUnit = i837[10]
  i836.m_PresetInfoIsWorld = !!i837[11]
  return i836
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i839 = data
  i838.m_IgnoreReversedGraphics = !!i839[0]
  i838.m_BlockingObjects = i839[1]
  i838.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i839[2] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i841 = data
  i840.cullTransparentMesh = !!i841[0]
  return i840
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Image' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Sprite')
  i842.m_Type = i843[2]
  i842.m_PreserveAspect = !!i843[3]
  i842.m_FillCenter = !!i843[4]
  i842.m_FillMethod = i843[5]
  i842.m_FillAmount = i843[6]
  i842.m_FillClockwise = !!i843[7]
  i842.m_FillOrigin = i843[8]
  i842.m_UseSpriteMesh = !!i843[9]
  i842.m_PixelsPerUnitMultiplier = i843[10]
  request.r(i843[11], i843[12], 0, i842, 'm_Material')
  i842.m_Maskable = !!i843[13]
  i842.m_Color = new pc.Color(i843[14], i843[15], i843[16], i843[17])
  i842.m_RaycastTarget = !!i843[18]
  i842.m_RaycastPadding = new pc.Vec4( i843[19], i843[20], i843[21], i843[22] )
  return i842
}

Deserializers["GameTimerUI"] = function (request, data, root) {
  var i844 = root || request.c( 'GameTimerUI' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'clockHand')
  i844.duration = i845[2]
  i844.startAngleZ = i845[3]
  i844.endAngleZ = i845[4]
  i844.warningRemainingFraction = i845[5]
  return i844
}

Deserializers["GradientSlicedImage"] = function (request, data, root) {
  var i846 = root || request.c( 'GradientSlicedImage' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Material')
  request.r(i847[2], i847[3], 0, i846, 'm_Sprite')
  i846.m_Type = i847[4]
  i846.m_PreserveAspect = !!i847[5]
  i846.m_FillCenter = !!i847[6]
  i846.m_FillMethod = i847[7]
  i846.m_FillAmount = i847[8]
  i846.m_FillClockwise = !!i847[9]
  i846.m_FillOrigin = i847[10]
  i846.m_UseSpriteMesh = !!i847[11]
  i846.m_PixelsPerUnitMultiplier = i847[12]
  i846.m_Maskable = !!i847[13]
  i846.m_Color = new pc.Color(i847[14], i847[15], i847[16], i847[17])
  i846.m_RaycastTarget = !!i847[18]
  i846.m_RaycastPadding = new pc.Vec4( i847[19], i847[20], i847[21], i847[22] )
  return i846
}

Deserializers["TimerSliderUI"] = function (request, data, root) {
  var i848 = root || request.c( 'TimerSliderUI' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'timer')
  request.r(i849[2], i849[3], 0, i848, 'barRect')
  i848.maxRightOffset = i849[4]
  request.r(i849[5], i849[6], 0, i848, 'barImageOutline')
  request.r(i849[7], i849[8], 0, i848, 'barImage')
  i848.startColor = new pc.Color(i849[9], i849[10], i849[11], i849[12])
  i848.midColor = new pc.Color(i849[13], i849[14], i849[15], i849[16])
  i848.endColor = new pc.Color(i849[17], i849[18], i849[19], i849[20])
  request.r(i849[21], i849[22], 0, i848, 'clockIcon')
  i848.pulseScaleMultiplier = i849[23]
  i848.pulseFrequency = i849[24]
  i848.pulseSharpness = i849[25]
  request.r(i849[26], i849[27], 0, i848, 'clockOutlineImage')
  request.r(i849[28], i849[29], 0, i848, 'loaderBackgroundImage')
  i848.pulseColor = new pc.Color(i849[30], i849[31], i849[32], i849[33])
  i848.alarmShakeStartOffset = i849[34]
  i848.alarmShakeDuration = i849[35]
  i848.alarmShakeAmplitudeDegrees = i849[36]
  i848.alarmShakeFrequency = i849[37]
  i848.alarmShakePositionAmplitude = i849[38]
  request.r(i849[39], i849[40], 0, i848, 'popupRoot')
  request.r(i849[41], i849[42], 0, i848, 'popupContent')
  i848.popupAnimDuration = i849[43]
  i848.popupScaleCurve = new pc.AnimationCurve( { keys_flow: i849[44] } )
  i848.popupStartAngleZ = i849[45]
  request.r(i849[46], i849[47], 0, i848, 'popupBackgroundImage')
  i848.popupBackgroundStartColor = new pc.Color(i849[48], i849[49], i849[50], i849[51])
  i848.popupBackgroundEndColor = new pc.Color(i849[52], i849[53], i849[54], i849[55])
  request.r(i849[56], i849[57], 0, i848, 'blurMaterial')
  i848.blurStartSize = i849[58]
  i848.blurEndSize = i849[59]
  return i848
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i850 = root || request.c( 'PackshotController' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'panelRoot')
  request.r(i851[2], i851[3], 0, i850, 'playNowButton')
  request.r(i851[4], i851[5], 0, i850, 'fullscreenTapButton')
  request.r(i851[6], i851[7], 0, i850, 'transitionAnimator')
  i850.transitionTrigger = i851[8]
  return i850
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Button' )
  var i853 = data
  i852.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i853[0], i852.m_OnClick)
  i852.m_Navigation = request.d('UnityEngine.UI.Navigation', i853[1], i852.m_Navigation)
  i852.m_Transition = i853[2]
  i852.m_Colors = request.d('UnityEngine.UI.ColorBlock', i853[3], i852.m_Colors)
  i852.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i853[4], i852.m_SpriteState)
  i852.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i853[5], i852.m_AnimationTriggers)
  i852.m_Interactable = !!i853[6]
  request.r(i853[7], i853[8], 0, i852, 'm_TargetGraphic')
  return i852
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i855 = data
  i854.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i855[0], i854.m_PersistentCalls)
  return i854
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('UnityEngine.Events.PersistentCall', i859[i + 0]));
  }
  i856.m_Calls = i858
  return i856
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Target')
  i862.m_TargetAssemblyTypeName = i863[2]
  i862.m_MethodName = i863[3]
  i862.m_Mode = i863[4]
  i862.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i863[5], i862.m_Arguments)
  i862.m_CallState = i863[6]
  return i862
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i865 = data
  i864.m_Mode = i865[0]
  i864.m_WrapAround = !!i865[1]
  request.r(i865[2], i865[3], 0, i864, 'm_SelectOnUp')
  request.r(i865[4], i865[5], 0, i864, 'm_SelectOnDown')
  request.r(i865[6], i865[7], 0, i864, 'm_SelectOnLeft')
  request.r(i865[8], i865[9], 0, i864, 'm_SelectOnRight')
  return i864
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i867 = data
  i866.m_NormalColor = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.m_HighlightedColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.m_PressedColor = new pc.Color(i867[8], i867[9], i867[10], i867[11])
  i866.m_SelectedColor = new pc.Color(i867[12], i867[13], i867[14], i867[15])
  i866.m_DisabledColor = new pc.Color(i867[16], i867[17], i867[18], i867[19])
  i866.m_ColorMultiplier = i867[20]
  i866.m_FadeDuration = i867[21]
  return i866
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_HighlightedSprite')
  request.r(i869[2], i869[3], 0, i868, 'm_PressedSprite')
  request.r(i869[4], i869[5], 0, i868, 'm_SelectedSprite')
  request.r(i869[6], i869[7], 0, i868, 'm_DisabledSprite')
  return i868
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i871 = data
  i870.m_NormalTrigger = i871[0]
  i870.m_HighlightedTrigger = i871[1]
  i870.m_PressedTrigger = i871[2]
  i870.m_SelectedTrigger = i871[3]
  i870.m_DisabledTrigger = i871[4]
  return i870
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i873 = data
  i872.m_hasFontAssetChanged = !!i873[0]
  request.r(i873[1], i873[2], 0, i872, 'm_baseMaterial')
  i872.m_maskOffset = new pc.Vec4( i873[3], i873[4], i873[5], i873[6] )
  i872.m_text = i873[7]
  i872.m_isRightToLeft = !!i873[8]
  request.r(i873[9], i873[10], 0, i872, 'm_fontAsset')
  request.r(i873[11], i873[12], 0, i872, 'm_sharedMaterial')
  var i875 = i873[13]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.m_fontSharedMaterials = i874
  request.r(i873[14], i873[15], 0, i872, 'm_fontMaterial')
  var i877 = i873[16]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.m_fontMaterials = i876
  i872.m_fontColor32 = UnityEngine.Color32.ConstructColor(i873[17], i873[18], i873[19], i873[20])
  i872.m_fontColor = new pc.Color(i873[21], i873[22], i873[23], i873[24])
  i872.m_enableVertexGradient = !!i873[25]
  i872.m_colorMode = i873[26]
  i872.m_fontColorGradient = request.d('TMPro.VertexGradient', i873[27], i872.m_fontColorGradient)
  request.r(i873[28], i873[29], 0, i872, 'm_fontColorGradientPreset')
  request.r(i873[30], i873[31], 0, i872, 'm_spriteAsset')
  i872.m_tintAllSprites = !!i873[32]
  request.r(i873[33], i873[34], 0, i872, 'm_StyleSheet')
  i872.m_TextStyleHashCode = i873[35]
  i872.m_overrideHtmlColors = !!i873[36]
  i872.m_faceColor = UnityEngine.Color32.ConstructColor(i873[37], i873[38], i873[39], i873[40])
  i872.m_fontSize = i873[41]
  i872.m_fontSizeBase = i873[42]
  i872.m_fontWeight = i873[43]
  i872.m_enableAutoSizing = !!i873[44]
  i872.m_fontSizeMin = i873[45]
  i872.m_fontSizeMax = i873[46]
  i872.m_fontStyle = i873[47]
  i872.m_HorizontalAlignment = i873[48]
  i872.m_VerticalAlignment = i873[49]
  i872.m_textAlignment = i873[50]
  i872.m_characterSpacing = i873[51]
  i872.m_wordSpacing = i873[52]
  i872.m_lineSpacing = i873[53]
  i872.m_lineSpacingMax = i873[54]
  i872.m_paragraphSpacing = i873[55]
  i872.m_charWidthMaxAdj = i873[56]
  i872.m_enableWordWrapping = !!i873[57]
  i872.m_wordWrappingRatios = i873[58]
  i872.m_overflowMode = i873[59]
  request.r(i873[60], i873[61], 0, i872, 'm_linkedTextComponent')
  request.r(i873[62], i873[63], 0, i872, 'parentLinkedComponent')
  i872.m_enableKerning = !!i873[64]
  i872.m_enableExtraPadding = !!i873[65]
  i872.checkPaddingRequired = !!i873[66]
  i872.m_isRichText = !!i873[67]
  i872.m_parseCtrlCharacters = !!i873[68]
  i872.m_isOrthographic = !!i873[69]
  i872.m_isCullingEnabled = !!i873[70]
  i872.m_horizontalMapping = i873[71]
  i872.m_verticalMapping = i873[72]
  i872.m_uvLineOffset = i873[73]
  i872.m_geometrySortingOrder = i873[74]
  i872.m_IsTextObjectScaleStatic = !!i873[75]
  i872.m_VertexBufferAutoSizeReduction = !!i873[76]
  i872.m_useMaxVisibleDescender = !!i873[77]
  i872.m_pageToDisplay = i873[78]
  i872.m_margin = new pc.Vec4( i873[79], i873[80], i873[81], i873[82] )
  i872.m_isUsingLegacyAnimationComponent = !!i873[83]
  i872.m_isVolumetricText = !!i873[84]
  request.r(i873[85], i873[86], 0, i872, 'm_Material')
  i872.m_Maskable = !!i873[87]
  i872.m_Color = new pc.Color(i873[88], i873[89], i873[90], i873[91])
  i872.m_RaycastTarget = !!i873[92]
  i872.m_RaycastPadding = new pc.Vec4( i873[93], i873[94], i873[95], i873[96] )
  return i872
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.VertexGradient' )
  var i879 = data
  i878.topLeft = new pc.Color(i879[0], i879[1], i879[2], i879[3])
  i878.topRight = new pc.Color(i879[4], i879[5], i879[6], i879[7])
  i878.bottomLeft = new pc.Color(i879[8], i879[9], i879[10], i879[11])
  i878.bottomRight = new pc.Color(i879[12], i879[13], i879[14], i879[15])
  return i878
}

Deserializers["TutorialHandController"] = function (request, data, root) {
  var i880 = root || request.c( 'TutorialHandController' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'handRoot')
  var i883 = i881[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.traySlots = i882
  request.r(i881[3], i881[4], 0, i880, 'board')
  request.r(i881[5], i881[6], 0, i880, 'worldCamera')
  i880.moveDuration = i881[7]
  i880.pauseAtEdges = i881[8]
  i880.idleDelayBeforeReshow = i881[9]
  i880.handArcHeight = i881[10]
  request.r(i881[11], i881[12], 0, i880, 'overrideSourceStack')
  request.r(i881[13], i881[14], 0, i880, 'overrideTargetCell')
  request.r(i881[15], i881[16], 0, i880, 'handAnimator')
  request.r(i881[17], i881[18], 0, i880, 'handShadowAnimator')
  i880.clenchTrigger = i881[19]
  i880.unclenchTrigger = i881[20]
  i880.fingerAnimDuration = i881[21]
  request.r(i881[22], i881[23], 0, i880, 'spotlightOverlay')
  i880.targetCellHighlightColor = new pc.Color(i881[24], i881[25], i881[26], i881[27])
  i880.cellGlowMultiplier = i881[28]
  return i880
}

Deserializers["TutorialSpotlightOverlay"] = function (request, data, root) {
  var i884 = root || request.c( 'TutorialSpotlightOverlay' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'mainCamera')
  request.r(i885[2], i885[3], 0, i884, 'revealCamera')
  request.r(i885[4], i885[5], 0, i884, 'overlayRoot')
  request.r(i885[6], i885[7], 0, i884, 'revealImage')
  request.r(i885[8], i885[9], 0, i884, 'overlayCanvasGroup')
  i884.spotlightLayerName = i885[10]
  i884.fadeDuration = i885[11]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i887 = data
  i886.m_Alpha = i887[0]
  i886.m_Interactable = !!i887[1]
  i886.m_BlocksRaycasts = !!i887[2]
  i886.m_IgnoreParentGroups = !!i887[3]
  i886.enabled = !!i887[4]
  return i886
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_Texture')
  i888.m_UVRect = UnityEngine.Rect.MinMaxRect(i889[2], i889[3], i889[4], i889[5])
  request.r(i889[6], i889[7], 0, i888, 'm_Material')
  i888.m_Maskable = !!i889[8]
  i888.m_Color = new pc.Color(i889[9], i889[10], i889[11], i889[12])
  i888.m_RaycastTarget = !!i889[13]
  i888.m_RaycastPadding = new pc.Vec4( i889[14], i889[15], i889[16], i889[17] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i891 = data
  i890.color = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  request.r(i891[4], i891[5], 0, i890, 'sprite')
  i890.flipX = !!i891[6]
  i890.flipY = !!i891[7]
  i890.drawMode = i891[8]
  i890.size = new pc.Vec2( i891[9], i891[10] )
  i890.tileMode = i891[11]
  i890.adaptiveModeThreshold = i891[12]
  i890.maskInteraction = i891[13]
  i890.spriteSortPoint = i891[14]
  i890.enabled = !!i891[15]
  request.r(i891[16], i891[17], 0, i890, 'sharedMaterial')
  var i893 = i891[18]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.sharedMaterials = i892
  i890.receiveShadows = !!i891[19]
  i890.shadowCastingMode = i891[20]
  i890.sortingLayerID = i891[21]
  i890.sortingOrder = i891[22]
  i890.lightmapIndex = i891[23]
  i890.lightmapSceneIndex = i891[24]
  i890.lightmapScaleOffset = new pc.Vec4( i891[25], i891[26], i891[27], i891[28] )
  i890.lightProbeUsage = i891[29]
  i890.reflectionProbeUsage = i891[30]
  return i890
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_RootBone')
  var i897 = i895[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.m_BoneTransforms = i896
  i894.m_AlwaysUpdate = !!i895[3]
  i894.m_AutoRebind = !!i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'animatorController')
  request.r(i901[2], i901[3], 0, i900, 'avatar')
  i900.updateMode = i901[4]
  i900.hasTransformHierarchy = !!i901[5]
  i900.applyRootMotion = !!i901[6]
  var i903 = i901[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.humanBones = i902
  i900.enabled = !!i901[8]
  return i900
}

Deserializers["ScreenScaler"] = function (request, data, root) {
  var i904 = root || request.c( 'ScreenScaler' )
  var i905 = data
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'sharedMesh')
  i906.convex = !!i907[2]
  i906.enabled = !!i907[3]
  i906.isTrigger = !!i907[4]
  request.r(i907[5], i907[6], 0, i906, 'material')
  return i906
}

Deserializers["TrayRefillManager"] = function (request, data, root) {
  var i908 = root || request.c( 'TrayRefillManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'board')
  var i911 = i909[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.trayHandlers = i910
  request.r(i909[3], i909[4], 0, i908, 'timer')
  i908.minPieces = i909[5]
  i908.maxPieces = i909[6]
  i908.spawnAnimDuration = i909[7]
  i908.spawnBounceHeight = i909[8]
  i908.spawnScaleCurve = new pc.AnimationCurve( { keys_flow: i909[9] } )
  return i908
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i912 = root || request.c( 'BoardManager' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'cellsParent')
  var i915 = i913[2]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('BoardCell')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i912.cells = i914
  request.r(i913[3], i913[4], 0, i912, 'cellHighlightConfig')
  i912.neighborMaxDistance = i913[5]
  request.r(i913[6], i913[7], 0, i912, 'stackPrefab')
  request.r(i913[8], i913[9], 0, i912, 'piecePrefab')
  request.r(i913[10], i913[11], 0, i912, 'palette')
  i912.initialStackRotation = new pc.Vec3( i913[12], i913[13], i913[14] )
  i912.baseJumpDuration = i913[15]
  i912.speedMultiplierPerClear = i913[16]
  i912.squashDuration = i913[17]
  i912.sinkDuration = i913[18]
  i912.sinkTargetY = i913[19]
  i912.topPieceSquashScaleYZ = i913[20]
  i912.pieceClipPlaneY = i913[21]
  request.r(i913[22], i913[23], 0, i912, 'destroyStackEffectPrefab')
  i912.destroyEffectOffsetBeforeEnd = i913[24]
  i912.jumpEasing = new pc.AnimationCurve( { keys_flow: i913[25] } )
  i912.jumpStartStagger = i913[26]
  i912.landingSettleDuration = i913[27]
  return i912
}

Deserializers["BoardCell"] = function (request, data, root) {
  var i918 = root || request.c( 'BoardCell' )
  var i919 = data
  i918.autoComputeAxialFromPosition = !!i919[0]
  i918.axialCoord = new pc.Vec2( i919[1], i919[2] )
  var i921 = i919[3]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(i921[i + 0]);
  }
  i918.initialStackColors = i920
  i918.isClickable = !!i919[4]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i923 = data
  i922.center = new pc.Vec3( i923[0], i923[1], i923[2] )
  i922.radius = i923[3]
  i922.enabled = !!i923[4]
  i922.isTrigger = !!i923[5]
  request.r(i923[6], i923[7], 0, i922, 'material')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i925 = data
  i924.ambientIntensity = i925[0]
  i924.reflectionIntensity = i925[1]
  i924.ambientMode = i925[2]
  i924.ambientLight = new pc.Color(i925[3], i925[4], i925[5], i925[6])
  i924.ambientSkyColor = new pc.Color(i925[7], i925[8], i925[9], i925[10])
  i924.ambientGroundColor = new pc.Color(i925[11], i925[12], i925[13], i925[14])
  i924.ambientEquatorColor = new pc.Color(i925[15], i925[16], i925[17], i925[18])
  i924.fogColor = new pc.Color(i925[19], i925[20], i925[21], i925[22])
  i924.fogEndDistance = i925[23]
  i924.fogStartDistance = i925[24]
  i924.fogDensity = i925[25]
  i924.fog = !!i925[26]
  request.r(i925[27], i925[28], 0, i924, 'skybox')
  i924.fogMode = i925[29]
  var i927 = i925[30]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i927[i + 0]) );
  }
  i924.lightmaps = i926
  i924.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i925[31], i924.lightProbes)
  i924.lightmapsMode = i925[32]
  i924.mixedBakeMode = i925[33]
  i924.environmentLightingMode = i925[34]
  i924.ambientProbe = new pc.SphericalHarmonicsL2(i925[35])
  request.r(i925[36], i925[37], 0, i924, 'customReflection')
  request.r(i925[38], i925[39], 0, i924, 'defaultReflection')
  i924.defaultReflectionMode = i925[40]
  i924.defaultReflectionResolution = i925[41]
  i924.sunLightObjectId = i925[42]
  i924.pixelLightCount = i925[43]
  i924.defaultReflectionHDR = !!i925[44]
  i924.hasLightDataAsset = !!i925[45]
  i924.hasManualGenerate = !!i925[46]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'lightmapColor')
  request.r(i931[2], i931[3], 0, i930, 'lightmapDirection')
  request.r(i931[4], i931[5], 0, i930, 'shadowMask')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i932 = root || new UnityEngine.LightProbes()
  var i933 = data
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i943[i + 0]));
  }
  i940.ShaderCompilationErrors = i942
  i940.name = i941[1]
  i940.guid = i941[2]
  var i945 = i941[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i940.shaderDefinedKeywords = i944
  var i947 = i941[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i947[i + 0]) );
  }
  i940.passes = i946
  var i949 = i941[5]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i949[i + 0]) );
  }
  i940.usePasses = i948
  var i951 = i941[6]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i951[i + 0]) );
  }
  i940.defaultParameterValues = i950
  request.r(i941[7], i941[8], 0, i940, 'unityFallbackShader')
  i940.readDepth = !!i941[9]
  i940.hasDepthOnlyPass = !!i941[10]
  i940.isCreatedByShaderGraph = !!i941[11]
  i940.disableBatching = !!i941[12]
  i940.compiled = !!i941[13]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i955 = data
  i954.shaderName = i955[0]
  i954.errorMessage = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i960 = root || new pc.UnityShaderPass()
  var i961 = data
  i960.id = i961[0]
  i960.subShaderIndex = i961[1]
  i960.name = i961[2]
  i960.passType = i961[3]
  i960.grabPassTextureName = i961[4]
  i960.usePass = !!i961[5]
  i960.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[6], i960.zTest)
  i960.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[7], i960.zWrite)
  i960.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[8], i960.culling)
  i960.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i961[9], i960.blending)
  i960.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i961[10], i960.alphaBlending)
  i960.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[11], i960.colorWriteMask)
  i960.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[12], i960.offsetUnits)
  i960.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[13], i960.offsetFactor)
  i960.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[14], i960.stencilRef)
  i960.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[15], i960.stencilReadMask)
  i960.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[16], i960.stencilWriteMask)
  i960.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[17], i960.stencilOp)
  i960.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[18], i960.stencilOpFront)
  i960.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[19], i960.stencilOpBack)
  var i963 = i961[20]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i963[i + 0]) );
  }
  i960.tags = i962
  var i965 = i961[21]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.passDefinedKeywords = i964
  var i967 = i961[22]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i967[i + 0]) );
  }
  i960.passDefinedKeywordGroups = i966
  var i969 = i961[23]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i969[i + 0]) );
  }
  i960.variants = i968
  var i971 = i961[24]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i971[i + 0]) );
  }
  i960.excludedVariants = i970
  i960.hasDepthReader = !!i961[25]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i973 = data
  i972.val = i973[0]
  i972.name = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i975 = data
  i974.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[0], i974.src)
  i974.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[1], i974.dst)
  i974.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[2], i974.op)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i977 = data
  i976.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[0], i976.pass)
  i976.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[1], i976.fail)
  i976.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[2], i976.zFail)
  i976.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[3], i976.comp)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i981 = data
  i980.name = i981[0]
  i980.value = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.keywords = i986
  i984.hasDiscard = !!i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i991 = data
  i990.passId = i991[0]
  i990.subShaderIndex = i991[1]
  var i993 = i991[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.vertexProgram = i991[3]
  i990.fragmentProgram = i991[4]
  i990.exportedForWebGl2 = !!i991[5]
  i990.readDepth = !!i991[6]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'shader')
  i996.pass = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.type = i1001[1]
  i1000.value = new pc.Vec4( i1001[2], i1001[3], i1001[4], i1001[5] )
  i1000.textureValue = i1001[6]
  i1000.shaderPropertyFlag = i1001[7]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1003 = data
  i1002.name = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'texture')
  i1002.aabb = i1003[3]
  i1002.vertices = i1003[4]
  i1002.triangles = i1003[5]
  i1002.textureRect = UnityEngine.Rect.MinMaxRect(i1003[6], i1003[7], i1003[8], i1003[9])
  i1002.packedRect = UnityEngine.Rect.MinMaxRect(i1003[10], i1003[11], i1003[12], i1003[13])
  i1002.border = new pc.Vec4( i1003[14], i1003[15], i1003[16], i1003[17] )
  i1002.transparency = i1003[18]
  i1002.bounds = i1003[19]
  i1002.pixelsPerUnit = i1003[20]
  i1002.textureWidth = i1003[21]
  i1002.textureHeight = i1003[22]
  i1002.nativeSize = new pc.Vec2( i1003[23], i1003[24] )
  i1002.pivot = new pc.Vec2( i1003[25], i1003[26] )
  i1002.textureRectOffset = new pc.Vec2( i1003[27], i1003[28] )
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.wrapMode = i1005[1]
  i1004.isLooping = !!i1005[2]
  i1004.length = i1005[3]
  var i1007 = i1005[4]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1007[i + 0]) );
  }
  i1004.curves = i1006
  var i1009 = i1005[5]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1009[i + 0]) );
  }
  i1004.events = i1008
  i1004.halfPrecision = !!i1005[6]
  i1004._frameRate = i1005[7]
  i1004.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1005[8], i1004.localBounds)
  i1004.hasMuscleCurves = !!i1005[9]
  var i1011 = i1005[10]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1004.clipMuscleConstant = i1010
  i1004.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1005[11], i1004.clipBindingConstant)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1015 = data
  i1014.path = i1015[0]
  i1014.hash = i1015[1]
  i1014.componentType = i1015[2]
  i1014.property = i1015[3]
  i1014.keys = i1015[4]
  var i1017 = i1015[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1017[i + 0]) );
  }
  i1014.objectReferenceKeys = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1021 = data
  i1020.time = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'value')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1025 = data
  i1024.functionName = i1025[0]
  i1024.floatParameter = i1025[1]
  i1024.intParameter = i1025[2]
  i1024.stringParameter = i1025[3]
  request.r(i1025[4], i1025[5], 0, i1024, 'objectReferenceParameter')
  i1024.time = i1025[6]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1027 = data
  i1026.center = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.extends = new pc.Vec3( i1027[3], i1027[4], i1027[5] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1030.genericBindings = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.pptrCurveMapping = i1034
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.ascent = i1037[1]
  i1036.originalLineHeight = i1037[2]
  i1036.fontSize = i1037[3]
  var i1039 = i1037[4]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1039[i + 0]) );
  }
  i1036.characterInfo = i1038
  request.r(i1037[5], i1037[6], 0, i1036, 'texture')
  i1036.originalFontSize = i1037[7]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1043 = data
  i1042.index = i1043[0]
  i1042.advance = i1043[1]
  i1042.bearing = i1043[2]
  i1042.glyphWidth = i1043[3]
  i1042.glyphHeight = i1043[4]
  i1042.minX = i1043[5]
  i1042.maxX = i1043[6]
  i1042.minY = i1043[7]
  i1042.maxY = i1043[8]
  i1042.uvBottomLeftX = i1043[9]
  i1042.uvBottomLeftY = i1043[10]
  i1042.uvBottomRightX = i1043[11]
  i1042.uvBottomRightY = i1043[12]
  i1042.uvTopLeftX = i1043[13]
  i1042.uvTopLeftY = i1043[14]
  i1042.uvTopRightX = i1043[15]
  i1042.uvTopRightY = i1043[16]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1045 = data
  i1044.name = i1045[0]
  var i1047 = i1045[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1047[i + 0]) );
  }
  i1044.layers = i1046
  var i1049 = i1045[2]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1049[i + 0]) );
  }
  i1044.parameters = i1048
  i1044.animationClips = i1045[3]
  i1044.avatarUnsupported = i1045[4]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.defaultWeight = i1053[1]
  i1052.blendingMode = i1053[2]
  i1052.avatarMask = i1053[3]
  i1052.syncedLayerIndex = i1053[4]
  i1052.syncedLayerAffectsTiming = !!i1053[5]
  i1052.syncedLayers = i1053[6]
  i1052.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1053[7], i1052.stateMachine)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.name = i1055[1]
  i1054.path = i1055[2]
  var i1057 = i1055[3]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1057[i + 0]) );
  }
  i1054.states = i1056
  var i1059 = i1055[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1059[i + 0]) );
  }
  i1054.machines = i1058
  var i1061 = i1055[5]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1061[i + 0]) );
  }
  i1054.entryStateTransitions = i1060
  var i1063 = i1055[6]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1063[i + 0]) );
  }
  i1054.exitStateTransitions = i1062
  var i1065 = i1055[7]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1065[i + 0]) );
  }
  i1054.anyStateTransitions = i1064
  i1054.defaultStateId = i1055[8]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1069 = data
  i1068.id = i1069[0]
  i1068.name = i1069[1]
  i1068.cycleOffset = i1069[2]
  i1068.cycleOffsetParameter = i1069[3]
  i1068.cycleOffsetParameterActive = !!i1069[4]
  i1068.mirror = !!i1069[5]
  i1068.mirrorParameter = i1069[6]
  i1068.mirrorParameterActive = !!i1069[7]
  i1068.motionId = i1069[8]
  i1068.nameHash = i1069[9]
  i1068.fullPathHash = i1069[10]
  i1068.speed = i1069[11]
  i1068.speedParameter = i1069[12]
  i1068.speedParameterActive = !!i1069[13]
  i1068.tag = i1069[14]
  i1068.tagHash = i1069[15]
  i1068.writeDefaultValues = !!i1069[16]
  var i1071 = i1069[17]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 2, i1070, '')
  }
  i1068.behaviours = i1070
  var i1073 = i1069[18]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1073[i + 0]) );
  }
  i1068.transitions = i1072
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1079 = data
  i1078.fullPath = i1079[0]
  i1078.canTransitionToSelf = !!i1079[1]
  i1078.duration = i1079[2]
  i1078.exitTime = i1079[3]
  i1078.hasExitTime = !!i1079[4]
  i1078.hasFixedDuration = !!i1079[5]
  i1078.interruptionSource = i1079[6]
  i1078.offset = i1079[7]
  i1078.orderedInterruption = !!i1079[8]
  i1078.destinationStateId = i1079[9]
  i1078.isExit = !!i1079[10]
  i1078.mute = !!i1079[11]
  i1078.solo = !!i1079[12]
  var i1081 = i1079[13]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1081[i + 0]) );
  }
  i1078.conditions = i1080
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1085 = data
  i1084.mode = i1085[0]
  i1084.parameter = i1085[1]
  i1084.threshold = i1085[2]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1091 = data
  i1090.destinationStateId = i1091[0]
  i1090.isExit = !!i1091[1]
  i1090.mute = !!i1091[2]
  i1090.solo = !!i1091[3]
  var i1093 = i1091[4]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1093[i + 0]) );
  }
  i1090.conditions = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1097 = data
  i1096.defaultBool = !!i1097[0]
  i1096.defaultFloat = i1097[1]
  i1096.defaultInt = i1097[2]
  i1096.name = i1097[3]
  i1096.nameHash = i1097[4]
  i1096.type = i1097[5]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.bytes64 = i1099[1]
  i1098.data = i1099[2]
  return i1098
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'atlas')
  i1100.normalStyle = i1101[2]
  i1100.normalSpacingOffset = i1101[3]
  i1100.boldStyle = i1101[4]
  i1100.boldSpacing = i1101[5]
  i1100.italicStyle = i1101[6]
  i1100.tabSize = i1101[7]
  i1100.hashCode = i1101[8]
  request.r(i1101[9], i1101[10], 0, i1100, 'material')
  i1100.materialHashCode = i1101[11]
  i1100.m_Version = i1101[12]
  i1100.m_SourceFontFileGUID = i1101[13]
  request.r(i1101[14], i1101[15], 0, i1100, 'm_SourceFontFile_EditorRef')
  request.r(i1101[16], i1101[17], 0, i1100, 'm_SourceFontFile')
  i1100.m_AtlasPopulationMode = i1101[18]
  i1100.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1101[19], i1100.m_FaceInfo)
  var i1103 = i1101[20]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('UnityEngine.TextCore.Glyph', i1103[i + 0]));
  }
  i1100.m_GlyphTable = i1102
  var i1105 = i1101[21]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('TMPro.TMP_Character', i1105[i + 0]));
  }
  i1100.m_CharacterTable = i1104
  var i1107 = i1101[22]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1100.m_AtlasTextures = i1106
  i1100.m_AtlasTextureIndex = i1101[23]
  i1100.m_IsMultiAtlasTexturesEnabled = !!i1101[24]
  i1100.m_ClearDynamicDataOnBuild = !!i1101[25]
  var i1109 = i1101[26]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('UnityEngine.TextCore.GlyphRect', i1109[i + 0]));
  }
  i1100.m_UsedGlyphRects = i1108
  var i1111 = i1101[27]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('UnityEngine.TextCore.GlyphRect', i1111[i + 0]));
  }
  i1100.m_FreeGlyphRects = i1110
  i1100.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1101[28], i1100.m_fontInfo)
  i1100.m_AtlasWidth = i1101[29]
  i1100.m_AtlasHeight = i1101[30]
  i1100.m_AtlasPadding = i1101[31]
  i1100.m_AtlasRenderMode = i1101[32]
  var i1113 = i1101[33]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('TMPro.TMP_Glyph', i1113[i + 0]));
  }
  i1100.m_glyphInfoList = i1112
  i1100.m_KerningTable = request.d('TMPro.KerningTable', i1101[34], i1100.m_KerningTable)
  i1100.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1101[35], i1100.m_FontFeatureTable)
  var i1115 = i1101[36]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 1, i1114, '')
  }
  i1100.fallbackFontAssets = i1114
  var i1117 = i1101[37]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1100.m_FallbackFontAssetTable = i1116
  i1100.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1101[38], i1100.m_CreationSettings)
  var i1119 = i1101[39]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('TMPro.TMP_FontWeightPair', i1119[i + 0]) );
  }
  i1100.m_FontWeightTable = i1118
  var i1121 = i1101[40]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('TMPro.TMP_FontWeightPair', i1121[i + 0]) );
  }
  i1100.fontWeights = i1120
  return i1100
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1123 = data
  i1122.m_FaceIndex = i1123[0]
  i1122.m_FamilyName = i1123[1]
  i1122.m_StyleName = i1123[2]
  i1122.m_PointSize = i1123[3]
  i1122.m_Scale = i1123[4]
  i1122.m_UnitsPerEM = i1123[5]
  i1122.m_LineHeight = i1123[6]
  i1122.m_AscentLine = i1123[7]
  i1122.m_CapLine = i1123[8]
  i1122.m_MeanLine = i1123[9]
  i1122.m_Baseline = i1123[10]
  i1122.m_DescentLine = i1123[11]
  i1122.m_SuperscriptOffset = i1123[12]
  i1122.m_SuperscriptSize = i1123[13]
  i1122.m_SubscriptOffset = i1123[14]
  i1122.m_SubscriptSize = i1123[15]
  i1122.m_UnderlineOffset = i1123[16]
  i1122.m_UnderlineThickness = i1123[17]
  i1122.m_StrikethroughOffset = i1123[18]
  i1122.m_StrikethroughThickness = i1123[19]
  i1122.m_TabWidth = i1123[20]
  return i1122
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1127 = data
  i1126.m_Index = i1127[0]
  i1126.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1127[1], i1126.m_Metrics)
  i1126.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1127[2], i1126.m_GlyphRect)
  i1126.m_Scale = i1127[3]
  i1126.m_AtlasIndex = i1127[4]
  i1126.m_ClassDefinitionType = i1127[5]
  return i1126
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1129 = data
  i1128.m_Width = i1129[0]
  i1128.m_Height = i1129[1]
  i1128.m_HorizontalBearingX = i1129[2]
  i1128.m_HorizontalBearingY = i1129[3]
  i1128.m_HorizontalAdvance = i1129[4]
  return i1128
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1131 = data
  i1130.m_X = i1131[0]
  i1130.m_Y = i1131[1]
  i1130.m_Width = i1131[2]
  i1130.m_Height = i1131[3]
  return i1130
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_Character' )
  var i1135 = data
  i1134.m_ElementType = i1135[0]
  i1134.m_Unicode = i1135[1]
  i1134.m_GlyphIndex = i1135[2]
  i1134.m_Scale = i1135[3]
  return i1134
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1141 = data
  i1140.Name = i1141[0]
  i1140.PointSize = i1141[1]
  i1140.Scale = i1141[2]
  i1140.CharacterCount = i1141[3]
  i1140.LineHeight = i1141[4]
  i1140.Baseline = i1141[5]
  i1140.Ascender = i1141[6]
  i1140.CapHeight = i1141[7]
  i1140.Descender = i1141[8]
  i1140.CenterLine = i1141[9]
  i1140.SuperscriptOffset = i1141[10]
  i1140.SubscriptOffset = i1141[11]
  i1140.SubSize = i1141[12]
  i1140.Underline = i1141[13]
  i1140.UnderlineThickness = i1141[14]
  i1140.strikethrough = i1141[15]
  i1140.strikethroughThickness = i1141[16]
  i1140.TabWidth = i1141[17]
  i1140.Padding = i1141[18]
  i1140.AtlasWidth = i1141[19]
  i1140.AtlasHeight = i1141[20]
  return i1140
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.x = i1145[1]
  i1144.y = i1145[2]
  i1144.width = i1145[3]
  i1144.height = i1145[4]
  i1144.xOffset = i1145[5]
  i1144.yOffset = i1145[6]
  i1144.xAdvance = i1145[7]
  i1144.scale = i1145[8]
  return i1144
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.KerningTable' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.KerningPair', i1149[i + 0]));
  }
  i1146.kerningPairs = i1148
  return i1146
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.KerningPair' )
  var i1153 = data
  i1152.xOffset = i1153[0]
  i1152.m_FirstGlyph = i1153[1]
  i1152.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1153[2], i1152.m_FirstGlyphAdjustments)
  i1152.m_SecondGlyph = i1153[3]
  i1152.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1153[4], i1152.m_SecondGlyphAdjustments)
  i1152.m_IgnoreSpacingAdjustments = !!i1153[5]
  return i1152
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1157[i + 0]));
  }
  i1154.m_GlyphPairAdjustmentRecords = i1156
  return i1154
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1161 = data
  i1160.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1161[0], i1160.m_FirstAdjustmentRecord)
  i1160.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1161[1], i1160.m_SecondAdjustmentRecord)
  i1160.m_FeatureLookupFlags = i1161[2]
  return i1160
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1163 = data
  i1162.m_GlyphIndex = i1163[0]
  i1162.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1163[1], i1162.m_GlyphValueRecord)
  return i1162
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1165 = data
  i1164.m_XPlacement = i1165[0]
  i1164.m_YPlacement = i1165[1]
  i1164.m_XAdvance = i1165[2]
  i1164.m_YAdvance = i1165[3]
  return i1164
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1169 = data
  i1168.sourceFontFileName = i1169[0]
  i1168.sourceFontFileGUID = i1169[1]
  i1168.pointSizeSamplingMode = i1169[2]
  i1168.pointSize = i1169[3]
  i1168.padding = i1169[4]
  i1168.packingMode = i1169[5]
  i1168.atlasWidth = i1169[6]
  i1168.atlasHeight = i1169[7]
  i1168.characterSetSelectionMode = i1169[8]
  i1168.characterSequence = i1169[9]
  i1168.referencedFontAssetGUID = i1169[10]
  i1168.referencedTextAssetGUID = i1169[11]
  i1168.fontStyle = i1169[12]
  i1168.fontStyleModifier = i1169[13]
  i1168.renderMode = i1169[14]
  i1168.includeFontFeatures = !!i1169[15]
  return i1168
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'regularTypeface')
  request.r(i1173[2], i1173[3], 0, i1172, 'italicTypeface')
  return i1172
}

Deserializers["HexColorPalette"] = function (request, data, root) {
  var i1174 = root || request.c( 'HexColorPalette' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('HexColorPalette+Entry', i1177[i + 0]) );
  }
  i1174.entries = i1176
  return i1174
}

Deserializers["HexColorPalette+Entry"] = function (request, data, root) {
  var i1180 = root || request.c( 'HexColorPalette+Entry' )
  var i1181 = data
  i1180.color = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'material')
  return i1180
}

Deserializers["CellHighlightConfig"] = function (request, data, root) {
  var i1182 = root || request.c( 'CellHighlightConfig' )
  var i1183 = data
  i1182.normalColor = new pc.Color(i1183[0], i1183[1], i1183[2], i1183[3])
  i1182.highlightColor = new pc.Color(i1183[4], i1183[5], i1183[6], i1183[7])
  i1182.highlightScaleX = i1183[8]
  i1182.highlightPositionY = i1183[9]
  i1182.transitionDuration = i1183[10]
  return i1182
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_Settings' )
  var i1185 = data
  i1184.m_enableWordWrapping = !!i1185[0]
  i1184.m_enableKerning = !!i1185[1]
  i1184.m_enableExtraPadding = !!i1185[2]
  i1184.m_enableTintAllSprites = !!i1185[3]
  i1184.m_enableParseEscapeCharacters = !!i1185[4]
  i1184.m_EnableRaycastTarget = !!i1185[5]
  i1184.m_GetFontFeaturesAtRuntime = !!i1185[6]
  i1184.m_missingGlyphCharacter = i1185[7]
  i1184.m_warningsDisabled = !!i1185[8]
  request.r(i1185[9], i1185[10], 0, i1184, 'm_defaultFontAsset')
  i1184.m_defaultFontAssetPath = i1185[11]
  i1184.m_defaultFontSize = i1185[12]
  i1184.m_defaultAutoSizeMinRatio = i1185[13]
  i1184.m_defaultAutoSizeMaxRatio = i1185[14]
  i1184.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1185[15], i1185[16] )
  i1184.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1185[17], i1185[18] )
  i1184.m_autoSizeTextContainer = !!i1185[19]
  i1184.m_IsTextObjectScaleStatic = !!i1185[20]
  var i1187 = i1185[21]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 1, i1186, '')
  }
  i1184.m_fallbackFontAssets = i1186
  i1184.m_matchMaterialPreset = !!i1185[22]
  request.r(i1185[23], i1185[24], 0, i1184, 'm_defaultSpriteAsset')
  i1184.m_defaultSpriteAssetPath = i1185[25]
  i1184.m_enableEmojiSupport = !!i1185[26]
  i1184.m_MissingCharacterSpriteUnicode = i1185[27]
  i1184.m_defaultColorGradientPresetsPath = i1185[28]
  request.r(i1185[29], i1185[30], 0, i1184, 'm_defaultStyleSheet')
  i1184.m_StyleSheetsResourcePath = i1185[31]
  request.r(i1185[32], i1185[33], 0, i1184, 'm_leadingCharacters')
  request.r(i1185[34], i1185[35], 0, i1184, 'm_followingCharacters')
  i1184.m_UseModernHangulLineBreakingRules = !!i1185[36]
  return i1184
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'spriteSheet')
  var i1191 = i1189[2]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.TMP_Sprite', i1191[i + 0]));
  }
  i1188.spriteInfoList = i1190
  var i1193 = i1189[3]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1188.fallbackSpriteAssets = i1192
  i1188.hashCode = i1189[4]
  request.r(i1189[5], i1189[6], 0, i1188, 'material')
  i1188.materialHashCode = i1189[7]
  i1188.m_Version = i1189[8]
  i1188.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1189[9], i1188.m_FaceInfo)
  var i1195 = i1189[10]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_SpriteCharacter', i1195[i + 0]));
  }
  i1188.m_SpriteCharacterTable = i1194
  var i1197 = i1189[11]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.TMP_SpriteGlyph', i1197[i + 0]));
  }
  i1188.m_SpriteGlyphTable = i1196
  return i1188
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.hashCode = i1201[1]
  i1200.unicode = i1201[2]
  i1200.pivot = new pc.Vec2( i1201[3], i1201[4] )
  request.r(i1201[5], i1201[6], 0, i1200, 'sprite')
  i1200.id = i1201[7]
  i1200.x = i1201[8]
  i1200.y = i1201[9]
  i1200.width = i1201[10]
  i1200.height = i1201[11]
  i1200.xOffset = i1201[12]
  i1200.yOffset = i1201[13]
  i1200.xAdvance = i1201[14]
  i1200.scale = i1201[15]
  return i1200
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1207 = data
  i1206.m_Name = i1207[0]
  i1206.m_HashCode = i1207[1]
  i1206.m_ElementType = i1207[2]
  i1206.m_Unicode = i1207[3]
  i1206.m_GlyphIndex = i1207[4]
  i1206.m_Scale = i1207[5]
  return i1206
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'sprite')
  i1210.m_Index = i1211[2]
  i1210.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1211[3], i1210.m_Metrics)
  i1210.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1211[4], i1210.m_GlyphRect)
  i1210.m_Scale = i1211[5]
  i1210.m_AtlasIndex = i1211[6]
  i1210.m_ClassDefinitionType = i1211[7]
  return i1210
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_Style', i1215[i + 0]));
  }
  i1212.m_StyleList = i1214
  return i1212
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Style' )
  var i1219 = data
  i1218.m_Name = i1219[0]
  i1218.m_HashCode = i1219[1]
  i1218.m_OpeningDefinition = i1219[2]
  i1218.m_ClosingDefinition = i1219[3]
  i1218.m_OpeningTagArray = i1219[4]
  i1218.m_ClosingTagArray = i1219[5]
  i1218.m_OpeningTagUnicodeArray = i1219[6]
  i1218.m_ClosingTagUnicodeArray = i1219[7]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1223[i + 0]) );
  }
  i1220.files = i1222
  i1220.componentToPrefabIds = i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1227 = data
  i1226.path = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'unityObject')
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1231[i + 0]) );
  }
  i1228.scriptsExecutionOrder = i1230
  var i1233 = i1229[1]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1233[i + 0]) );
  }
  i1228.sortingLayers = i1232
  var i1235 = i1229[2]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1235[i + 0]) );
  }
  i1228.cullingLayers = i1234
  i1228.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1229[3], i1228.timeSettings)
  i1228.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1229[4], i1228.physicsSettings)
  i1228.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1229[5], i1228.physics2DSettings)
  i1228.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1229[6], i1228.qualitySettings)
  i1228.enableRealtimeShadows = !!i1229[7]
  i1228.enableAutoInstancing = !!i1229[8]
  i1228.enableStaticBatching = !!i1229[9]
  i1228.enableDynamicBatching = !!i1229[10]
  i1228.usePreservativeDynamicBatching = !!i1229[11]
  i1228.lightmapEncodingQuality = i1229[12]
  i1228.desiredColorSpace = i1229[13]
  var i1237 = i1229[14]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1228.allTags = i1236
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.value = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1245 = data
  i1244.id = i1245[0]
  i1244.name = i1245[1]
  i1244.value = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1249 = data
  i1248.id = i1249[0]
  i1248.name = i1249[1]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1251 = data
  i1250.fixedDeltaTime = i1251[0]
  i1250.maximumDeltaTime = i1251[1]
  i1250.timeScale = i1251[2]
  i1250.maximumParticleTimestep = i1251[3]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1253 = data
  i1252.gravity = new pc.Vec3( i1253[0], i1253[1], i1253[2] )
  i1252.defaultSolverIterations = i1253[3]
  i1252.bounceThreshold = i1253[4]
  i1252.autoSyncTransforms = !!i1253[5]
  i1252.autoSimulation = !!i1253[6]
  var i1255 = i1253[7]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1255[i + 0]) );
  }
  i1252.collisionMatrix = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.layerId = i1259[1]
  i1258.otherLayerId = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1261 = data
  request.r(i1261[0], i1261[1], 0, i1260, 'material')
  i1260.gravity = new pc.Vec2( i1261[2], i1261[3] )
  i1260.positionIterations = i1261[4]
  i1260.velocityIterations = i1261[5]
  i1260.velocityThreshold = i1261[6]
  i1260.maxLinearCorrection = i1261[7]
  i1260.maxAngularCorrection = i1261[8]
  i1260.maxTranslationSpeed = i1261[9]
  i1260.maxRotationSpeed = i1261[10]
  i1260.baumgarteScale = i1261[11]
  i1260.baumgarteTOIScale = i1261[12]
  i1260.timeToSleep = i1261[13]
  i1260.linearSleepTolerance = i1261[14]
  i1260.angularSleepTolerance = i1261[15]
  i1260.defaultContactOffset = i1261[16]
  i1260.autoSimulation = !!i1261[17]
  i1260.queriesHitTriggers = !!i1261[18]
  i1260.queriesStartInColliders = !!i1261[19]
  i1260.callbacksOnDisable = !!i1261[20]
  i1260.reuseCollisionCallbacks = !!i1261[21]
  i1260.autoSyncTransforms = !!i1261[22]
  var i1263 = i1261[23]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1263[i + 0]) );
  }
  i1260.collisionMatrix = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1267 = data
  i1266.enabled = !!i1267[0]
  i1266.layerId = i1267[1]
  i1266.otherLayerId = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1271[i + 0]) );
  }
  i1268.qualityLevels = i1270
  var i1273 = i1269[1]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1268.names = i1272
  i1268.shadows = i1269[2]
  i1268.anisotropicFiltering = i1269[3]
  i1268.antiAliasing = i1269[4]
  i1268.lodBias = i1269[5]
  i1268.shadowCascades = i1269[6]
  i1268.shadowDistance = i1269[7]
  i1268.shadowmaskMode = i1269[8]
  i1268.shadowProjection = i1269[9]
  i1268.shadowResolution = i1269[10]
  i1268.softParticles = !!i1269[11]
  i1268.softVegetation = !!i1269[12]
  i1268.activeColorSpace = i1269[13]
  i1268.desiredColorSpace = i1269[14]
  i1268.masterTextureLimit = i1269[15]
  i1268.maxQueuedFrames = i1269[16]
  i1268.particleRaycastBudget = i1269[17]
  i1268.pixelLightCount = i1269[18]
  i1268.realtimeReflectionProbes = !!i1269[19]
  i1268.shadowCascade2Split = i1269[20]
  i1268.shadowCascade4Split = new pc.Vec3( i1269[21], i1269[22], i1269[23] )
  i1268.streamingMipmapsActive = !!i1269[24]
  i1268.vSyncCount = i1269[25]
  i1268.asyncUploadBufferSize = i1269[26]
  i1268.asyncUploadTimeSlice = i1269[27]
  i1268.billboardsFaceCameraPosition = !!i1269[28]
  i1268.shadowNearPlaneOffset = i1269[29]
  i1268.streamingMipmapsMemoryBudget = i1269[30]
  i1268.maximumLODLevel = i1269[31]
  i1268.streamingMipmapsAddAllCameras = !!i1269[32]
  i1268.streamingMipmapsMaxLevelReduction = i1269[33]
  i1268.streamingMipmapsRenderersPerFrame = i1269[34]
  i1268.resolutionScalingFixedDPIFactor = i1269[35]
  i1268.streamingMipmapsMaxFileIORequests = i1269[36]
  i1268.currentQualityLevel = i1269[37]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1279 = data
  i1278.weight = i1279[0]
  i1278.vertices = i1279[1]
  i1278.normals = i1279[2]
  i1278.tangents = i1279[3]
  return i1278
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'm_ObjectArgument')
  i1280.m_ObjectArgumentAssemblyTypeName = i1281[2]
  i1280.m_IntArgument = i1281[3]
  i1280.m_FloatArgument = i1281[4]
  i1280.m_StringArgument = i1281[5]
  i1280.m_BoolArgument = !!i1281[6]
  return i1280
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1283 = data
  i1282.xPlacement = i1283[0]
  i1282.yPlacement = i1283[1]
  i1282.xAdvance = i1283[2]
  i1282.yAdvance = i1283[3]
  return i1282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[16],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[16],"91":[5],"92":[93],"94":[93],"27":[26],"8":[5],"10":[9],"12":[10],"33":[30,26],"95":[96],"45":[44],"97":[96],"98":[26],"99":[26],"29":[27],"31":[30,26],"100":[26],"28":[27],"101":[26],"102":[26],"103":[26],"104":[26],"105":[26],"106":[26],"107":[26],"108":[26],"109":[26],"42":[30,26],"110":[26],"111":[26],"112":[26],"113":[26],"114":[30,26],"115":[26],"116":[19],"117":[19],"20":[19],"118":[19],"119":[16],"120":[16],"121":[26],"122":[5,26],"37":[26,30],"123":[26],"124":[30,26],"125":[5],"126":[30,26],"127":[26],"128":[96]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","HexPieceView","UnityEngine.BoxCollider","HexStack","HexColorPalette","StackDragHandler","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameFlowController","TutorialHandController","GameTimerUI","PackshotController","BoardManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","GradientSlicedImage","TimerSliderUI","UnityEngine.GameObject","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","BoardCell","UnityEngine.Animator","TutorialSpotlightOverlay","UnityEngine.UI.RawImage","UnityEngine.CanvasGroup","UnityEngine.SpriteRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEditor.Animations.AnimatorController","ScreenScaler","UnityEngine.MeshCollider","TrayRefillManager","CellHighlightConfig","UnityEngine.SphereCollider","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAdGame";

Deserializers.lunaInitializationTime = "06/30/2026 14:26:56";

Deserializers.lunaDaysRunning = "4.4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1594";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4799";

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

Deserializers.buildID = "1ad0c539-e021-4ec6-92d8-7e90a9f84a94";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

