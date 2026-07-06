var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.JointSpring' )
  var i1939 = data
  i1938.spring = i1939[0]
  i1938.damper = i1939[1]
  i1938.targetPosition = i1939[2]
  return i1938
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.JointMotor' )
  var i1941 = data
  i1940.m_TargetVelocity = i1941[0]
  i1940.m_Force = i1941[1]
  i1940.m_FreeSpin = i1941[2]
  return i1940
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.JointLimits' )
  var i1943 = data
  i1942.m_Min = i1943[0]
  i1942.m_Max = i1943[1]
  i1942.m_Bounciness = i1943[2]
  i1942.m_BounceMinVelocity = i1943[3]
  i1942.m_ContactDistance = i1943[4]
  i1942.minBounce = i1943[5]
  i1942.maxBounce = i1943[6]
  return i1942
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.JointDrive' )
  var i1945 = data
  i1944.m_PositionSpring = i1945[0]
  i1944.m_PositionDamper = i1945[1]
  i1944.m_MaximumForce = i1945[2]
  i1944.m_UseAcceleration = i1945[3]
  return i1944
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1947 = data
  i1946.m_Spring = i1947[0]
  i1946.m_Damper = i1947[1]
  return i1946
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1949 = data
  i1948.m_Limit = i1949[0]
  i1948.m_Bounciness = i1949[1]
  i1948.m_ContactDistance = i1949[2]
  return i1948
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1951 = data
  i1950.m_ExtremumSlip = i1951[0]
  i1950.m_ExtremumValue = i1951[1]
  i1950.m_AsymptoteSlip = i1951[2]
  i1950.m_AsymptoteValue = i1951[3]
  i1950.m_Stiffness = i1951[4]
  return i1950
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1953 = data
  i1952.m_LowerAngle = i1953[0]
  i1952.m_UpperAngle = i1953[1]
  return i1952
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1955 = data
  i1954.m_MotorSpeed = i1955[0]
  i1954.m_MaximumMotorTorque = i1955[1]
  return i1954
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1957 = data
  i1956.m_DampingRatio = i1957[0]
  i1956.m_Frequency = i1957[1]
  i1956.m_Angle = i1957[2]
  return i1956
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1959 = data
  i1958.m_LowerTranslation = i1959[0]
  i1958.m_UpperTranslation = i1959[1]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.width = i1961[1]
  i1960.height = i1961[2]
  i1960.mipmapCount = i1961[3]
  i1960.anisoLevel = i1961[4]
  i1960.filterMode = i1961[5]
  i1960.hdr = !!i1961[6]
  i1960.format = i1961[7]
  i1960.wrapMode = i1961[8]
  i1960.alphaIsTransparency = !!i1961[9]
  i1960.alphaSource = i1961[10]
  i1960.graphicsFormat = i1961[11]
  i1960.sRGBTexture = !!i1961[12]
  i1960.desiredColorSpace = i1961[13]
  i1960.wrapU = i1961[14]
  i1960.wrapV = i1961[15]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1962 = root || new pc.UnityMaterial()
  var i1963 = data
  i1962.name = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'shader')
  i1962.renderQueue = i1963[3]
  i1962.enableInstancing = !!i1963[4]
  var i1965 = i1963[5]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1965[i + 0]) );
  }
  i1962.floatParameters = i1964
  var i1967 = i1963[6]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1967[i + 0]) );
  }
  i1962.colorParameters = i1966
  var i1969 = i1963[7]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1969[i + 0]) );
  }
  i1962.vectorParameters = i1968
  var i1971 = i1963[8]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1971[i + 0]) );
  }
  i1962.textureParameters = i1970
  var i1973 = i1963[9]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1973[i + 0]) );
  }
  i1962.materialFlags = i1972
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.value = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.value = new pc.Color(i1981[1], i1981[2], i1981[3], i1981[4])
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.value = new pc.Vec4( i1985[1], i1985[2], i1985[3], i1985[4] )
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1989 = data
  i1988.name = i1989[0]
  request.r(i1989[1], i1989[2], 0, i1988, 'value')
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.enabled = !!i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.halfPrecision = !!i1995[1]
  i1994.useSimplification = !!i1995[2]
  i1994.useUInt32IndexFormat = !!i1995[3]
  i1994.vertexCount = i1995[4]
  i1994.aabb = i1995[5]
  var i1997 = i1995[6]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( !!i1997[i + 0] );
  }
  i1994.streams = i1996
  i1994.vertices = i1995[7]
  var i1999 = i1995[8]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1999[i + 0]) );
  }
  i1994.subMeshes = i1998
  var i2001 = i1995[9]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 16) {
    i2000.push( new pc.Mat4().setData(i2001[i + 0], i2001[i + 1], i2001[i + 2], i2001[i + 3],  i2001[i + 4], i2001[i + 5], i2001[i + 6], i2001[i + 7],  i2001[i + 8], i2001[i + 9], i2001[i + 10], i2001[i + 11],  i2001[i + 12], i2001[i + 13], i2001[i + 14], i2001[i + 15]) );
  }
  i1994.bindposes = i2000
  var i2003 = i1995[10]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2003[i + 0]) );
  }
  i1994.blendShapes = i2002
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2009 = data
  i2008.triangles = i2009[0]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2015 = data
  i2014.name = i2015[0]
  var i2017 = i2015[1]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2017[i + 0]) );
  }
  i2014.frames = i2016
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2019 = data
  i2018.position = new pc.Vec3( i2019[0], i2019[1], i2019[2] )
  i2018.scale = new pc.Vec3( i2019[3], i2019[4], i2019[5] )
  i2018.rotation = new pc.Quat(i2019[6], i2019[7], i2019[8], i2019[9])
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'sharedMesh')
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'additionalVertexStreams')
  i2022.enabled = !!i2023[2]
  request.r(i2023[3], i2023[4], 0, i2022, 'sharedMaterial')
  var i2025 = i2023[5]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 2) {
  request.r(i2025[i + 0], i2025[i + 1], 2, i2024, '')
  }
  i2022.sharedMaterials = i2024
  i2022.receiveShadows = !!i2023[6]
  i2022.shadowCastingMode = i2023[7]
  i2022.sortingLayerID = i2023[8]
  i2022.sortingOrder = i2023[9]
  i2022.lightmapIndex = i2023[10]
  i2022.lightmapSceneIndex = i2023[11]
  i2022.lightmapScaleOffset = new pc.Vec4( i2023[12], i2023[13], i2023[14], i2023[15] )
  i2022.lightProbeUsage = i2023[16]
  i2022.reflectionProbeUsage = i2023[17]
  return i2022
}

Deserializers["HexPieceView"] = function (request, data, root) {
  var i2028 = root || request.c( 'HexPieceView' )
  var i2029 = data
  i2028.needsAlwaysOnTopMaterial = !!i2029[0]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2031 = data
  i2030.name = i2031[0]
  i2030.tagId = i2031[1]
  i2030.enabled = !!i2031[2]
  i2030.isStatic = !!i2031[3]
  i2030.layer = i2031[4]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2033 = data
  i2032.center = new pc.Vec3( i2033[0], i2033[1], i2033[2] )
  i2032.size = new pc.Vec3( i2033[3], i2033[4], i2033[5] )
  i2032.enabled = !!i2033[6]
  i2032.isTrigger = !!i2033[7]
  request.r(i2033[8], i2033[9], 0, i2032, 'material')
  return i2032
}

Deserializers["HexStack"] = function (request, data, root) {
  var i2034 = root || request.c( 'HexStack' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'piecePrefab')
  request.r(i2035[2], i2035[3], 0, i2034, 'palette')
  i2034.perPieceOffset = new pc.Vec3( i2035[4], i2035[5], i2035[6] )
  var i2037 = i2035[7]
  var i2036 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.add(i2037[i + 0]);
  }
  i2034.initialColors = i2036
  return i2034
}

Deserializers["StackDragHandler"] = function (request, data, root) {
  var i2040 = root || request.c( 'StackDragHandler' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'board')
  i2040.dragHeight = i2041[2]
  i2040.minDragDistanceToCountAsMoved = i2041[3]
  i2040.returnDuration = i2041[4]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2043 = data
  i2042.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2043[0], i2042.main)
  i2042.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2043[1], i2042.colorBySpeed)
  i2042.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2043[2], i2042.colorOverLifetime)
  i2042.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2043[3], i2042.emission)
  i2042.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2043[4], i2042.rotationBySpeed)
  i2042.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2043[5], i2042.rotationOverLifetime)
  i2042.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2043[6], i2042.shape)
  i2042.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2043[7], i2042.sizeBySpeed)
  i2042.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2043[8], i2042.sizeOverLifetime)
  i2042.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2043[9], i2042.textureSheetAnimation)
  i2042.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2043[10], i2042.velocityOverLifetime)
  i2042.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2043[11], i2042.noise)
  i2042.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2043[12], i2042.inheritVelocity)
  i2042.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2043[13], i2042.forceOverLifetime)
  i2042.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2043[14], i2042.limitVelocityOverLifetime)
  i2042.useAutoRandomSeed = !!i2043[15]
  i2042.randomSeed = i2043[16]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2044 = root || new pc.ParticleSystemMain()
  var i2045 = data
  i2044.duration = i2045[0]
  i2044.loop = !!i2045[1]
  i2044.prewarm = !!i2045[2]
  i2044.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[3], i2044.startDelay)
  i2044.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[4], i2044.startLifetime)
  i2044.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[5], i2044.startSpeed)
  i2044.startSize3D = !!i2045[6]
  i2044.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[7], i2044.startSizeX)
  i2044.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[8], i2044.startSizeY)
  i2044.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[9], i2044.startSizeZ)
  i2044.startRotation3D = !!i2045[10]
  i2044.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[11], i2044.startRotationX)
  i2044.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[12], i2044.startRotationY)
  i2044.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[13], i2044.startRotationZ)
  i2044.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2045[14], i2044.startColor)
  i2044.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[15], i2044.gravityModifier)
  i2044.simulationSpace = i2045[16]
  request.r(i2045[17], i2045[18], 0, i2044, 'customSimulationSpace')
  i2044.simulationSpeed = i2045[19]
  i2044.useUnscaledTime = !!i2045[20]
  i2044.scalingMode = i2045[21]
  i2044.playOnAwake = !!i2045[22]
  i2044.maxParticles = i2045[23]
  i2044.emitterVelocityMode = i2045[24]
  i2044.stopAction = i2045[25]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2046 = root || new pc.MinMaxCurve()
  var i2047 = data
  i2046.mode = i2047[0]
  i2046.curveMin = new pc.AnimationCurve( { keys_flow: i2047[1] } )
  i2046.curveMax = new pc.AnimationCurve( { keys_flow: i2047[2] } )
  i2046.curveMultiplier = i2047[3]
  i2046.constantMin = i2047[4]
  i2046.constantMax = i2047[5]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2048 = root || new pc.MinMaxGradient()
  var i2049 = data
  i2048.mode = i2049[0]
  i2048.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2049[1], i2048.gradientMin)
  i2048.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2049[2], i2048.gradientMax)
  i2048.colorMin = new pc.Color(i2049[3], i2049[4], i2049[5], i2049[6])
  i2048.colorMax = new pc.Color(i2049[7], i2049[8], i2049[9], i2049[10])
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2051 = data
  i2050.mode = i2051[0]
  var i2053 = i2051[1]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2053[i + 0]) );
  }
  i2050.colorKeys = i2052
  var i2055 = i2051[2]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2055[i + 0]) );
  }
  i2050.alphaKeys = i2054
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemColorBySpeed()
  var i2057 = data
  i2056.enabled = !!i2057[0]
  i2056.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2057[1], i2056.color)
  i2056.range = new pc.Vec2( i2057[2], i2057[3] )
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2061 = data
  i2060.color = new pc.Color(i2061[0], i2061[1], i2061[2], i2061[3])
  i2060.time = i2061[4]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2065 = data
  i2064.alpha = i2065[0]
  i2064.time = i2065[1]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemColorOverLifetime()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2067[1], i2066.color)
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2068 = root || new pc.ParticleSystemEmitter()
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[1], i2068.rateOverTime)
  i2068.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[2], i2068.rateOverDistance)
  var i2071 = i2069[3]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2071[i + 0]) );
  }
  i2068.bursts = i2070
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemBurst()
  var i2075 = data
  i2074.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[0], i2074.count)
  i2074.cycleCount = i2075[1]
  i2074.minCount = i2075[2]
  i2074.maxCount = i2075[3]
  i2074.repeatInterval = i2075[4]
  i2074.time = i2075[5]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemRotationBySpeed()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[1], i2076.x)
  i2076.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.y)
  i2076.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[3], i2076.z)
  i2076.separateAxes = !!i2077[4]
  i2076.range = new pc.Vec2( i2077[5], i2077[6] )
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[1], i2078.x)
  i2078.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.y)
  i2078.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[3], i2078.z)
  i2078.separateAxes = !!i2079[4]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemShape()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.shapeType = i2081[1]
  i2080.randomDirectionAmount = i2081[2]
  i2080.sphericalDirectionAmount = i2081[3]
  i2080.randomPositionAmount = i2081[4]
  i2080.alignToDirection = !!i2081[5]
  i2080.radius = i2081[6]
  i2080.radiusMode = i2081[7]
  i2080.radiusSpread = i2081[8]
  i2080.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[9], i2080.radiusSpeed)
  i2080.radiusThickness = i2081[10]
  i2080.angle = i2081[11]
  i2080.length = i2081[12]
  i2080.boxThickness = new pc.Vec3( i2081[13], i2081[14], i2081[15] )
  i2080.meshShapeType = i2081[16]
  request.r(i2081[17], i2081[18], 0, i2080, 'mesh')
  request.r(i2081[19], i2081[20], 0, i2080, 'meshRenderer')
  request.r(i2081[21], i2081[22], 0, i2080, 'skinnedMeshRenderer')
  i2080.useMeshMaterialIndex = !!i2081[23]
  i2080.meshMaterialIndex = i2081[24]
  i2080.useMeshColors = !!i2081[25]
  i2080.normalOffset = i2081[26]
  i2080.arc = i2081[27]
  i2080.arcMode = i2081[28]
  i2080.arcSpread = i2081[29]
  i2080.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[30], i2080.arcSpeed)
  i2080.donutRadius = i2081[31]
  i2080.position = new pc.Vec3( i2081[32], i2081[33], i2081[34] )
  i2080.rotation = new pc.Vec3( i2081[35], i2081[36], i2081[37] )
  i2080.scale = new pc.Vec3( i2081[38], i2081[39], i2081[40] )
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemSizeBySpeed()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.x)
  i2082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.y)
  i2082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.z)
  i2082.separateAxes = !!i2083[4]
  i2082.range = new pc.Vec2( i2083[5], i2083[6] )
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[1], i2084.x)
  i2084.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[2], i2084.y)
  i2084.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[3], i2084.z)
  i2084.separateAxes = !!i2085[4]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2086 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.mode = i2087[1]
  i2086.animation = i2087[2]
  i2086.numTilesX = i2087[3]
  i2086.numTilesY = i2087[4]
  i2086.useRandomRow = !!i2087[5]
  i2086.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[6], i2086.frameOverTime)
  i2086.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[7], i2086.startFrame)
  i2086.cycleCount = i2087[8]
  i2086.rowIndex = i2087[9]
  i2086.flipU = i2087[10]
  i2086.flipV = i2087[11]
  i2086.spriteCount = i2087[12]
  var i2089 = i2087[13]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2086.sprites = i2088
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[1], i2092.x)
  i2092.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[2], i2092.y)
  i2092.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[3], i2092.z)
  i2092.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[4], i2092.radial)
  i2092.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[5], i2092.speedModifier)
  i2092.space = i2093[6]
  i2092.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[7], i2092.orbitalX)
  i2092.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[8], i2092.orbitalY)
  i2092.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[9], i2092.orbitalZ)
  i2092.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[10], i2092.orbitalOffsetX)
  i2092.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[11], i2092.orbitalOffsetY)
  i2092.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[12], i2092.orbitalOffsetZ)
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemNoise()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.separateAxes = !!i2095[1]
  i2094.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[2], i2094.strengthX)
  i2094.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[3], i2094.strengthY)
  i2094.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[4], i2094.strengthZ)
  i2094.frequency = i2095[5]
  i2094.damping = !!i2095[6]
  i2094.octaveCount = i2095[7]
  i2094.octaveMultiplier = i2095[8]
  i2094.octaveScale = i2095[9]
  i2094.quality = i2095[10]
  i2094.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[11], i2094.scrollSpeed)
  i2094.scrollSpeedMultiplier = i2095[12]
  i2094.remapEnabled = !!i2095[13]
  i2094.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[14], i2094.remapX)
  i2094.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[15], i2094.remapY)
  i2094.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[16], i2094.remapZ)
  i2094.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[17], i2094.positionAmount)
  i2094.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[18], i2094.rotationAmount)
  i2094.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[19], i2094.sizeAmount)
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemInheritVelocity()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.mode = i2097[1]
  i2096.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.curve)
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2098 = root || new pc.ParticleSystemForceOverLifetime()
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[1], i2098.x)
  i2098.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[2], i2098.y)
  i2098.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[3], i2098.z)
  i2098.space = i2099[4]
  i2098.randomized = !!i2099[5]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2100 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2101 = data
  i2100.enabled = !!i2101[0]
  i2100.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[1], i2100.limit)
  i2100.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[2], i2100.limitX)
  i2100.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[3], i2100.limitY)
  i2100.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[4], i2100.limitZ)
  i2100.dampen = i2101[5]
  i2100.separateAxes = !!i2101[6]
  i2100.space = i2101[7]
  i2100.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[8], i2100.drag)
  i2100.multiplyDragByParticleSize = !!i2101[9]
  i2100.multiplyDragByParticleVelocity = !!i2101[10]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'mesh')
  i2102.meshCount = i2103[2]
  i2102.activeVertexStreamsCount = i2103[3]
  i2102.alignment = i2103[4]
  i2102.renderMode = i2103[5]
  i2102.sortMode = i2103[6]
  i2102.lengthScale = i2103[7]
  i2102.velocityScale = i2103[8]
  i2102.cameraVelocityScale = i2103[9]
  i2102.normalDirection = i2103[10]
  i2102.sortingFudge = i2103[11]
  i2102.minParticleSize = i2103[12]
  i2102.maxParticleSize = i2103[13]
  i2102.pivot = new pc.Vec3( i2103[14], i2103[15], i2103[16] )
  request.r(i2103[17], i2103[18], 0, i2102, 'trailMaterial')
  i2102.applyActiveColorSpace = !!i2103[19]
  i2102.enabled = !!i2103[20]
  request.r(i2103[21], i2103[22], 0, i2102, 'sharedMaterial')
  var i2105 = i2103[23]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 2, i2104, '')
  }
  i2102.sharedMaterials = i2104
  i2102.receiveShadows = !!i2103[24]
  i2102.shadowCastingMode = i2103[25]
  i2102.sortingLayerID = i2103[26]
  i2102.sortingOrder = i2103[27]
  i2102.lightmapIndex = i2103[28]
  i2102.lightmapSceneIndex = i2103[29]
  i2102.lightmapScaleOffset = new pc.Vec4( i2103[30], i2103[31], i2103[32], i2103[33] )
  i2102.lightProbeUsage = i2103[34]
  i2102.reflectionProbeUsage = i2103[35]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.atlasId = i2107[1]
  i2106.mipmapCount = i2107[2]
  i2106.hdr = !!i2107[3]
  i2106.size = i2107[4]
  i2106.anisoLevel = i2107[5]
  i2106.filterMode = i2107[6]
  var i2109 = i2107[7]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 4) {
    i2108.push( UnityEngine.Rect.MinMaxRect(i2109[i + 0], i2109[i + 1], i2109[i + 2], i2109[i + 3]) );
  }
  i2106.rects = i2108
  i2106.wrapU = i2107[8]
  i2106.wrapV = i2107[9]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2113 = data
  i2112.name = i2113[0]
  i2112.index = i2113[1]
  i2112.startup = !!i2113[2]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2115 = data
  i2114.type = i2115[0]
  i2114.color = new pc.Color(i2115[1], i2115[2], i2115[3], i2115[4])
  i2114.cullingMask = i2115[5]
  i2114.intensity = i2115[6]
  i2114.range = i2115[7]
  i2114.spotAngle = i2115[8]
  i2114.shadows = i2115[9]
  i2114.shadowNormalBias = i2115[10]
  i2114.shadowBias = i2115[11]
  i2114.shadowStrength = i2115[12]
  i2114.shadowResolution = i2115[13]
  i2114.lightmapBakeType = i2115[14]
  i2114.renderMode = i2115[15]
  request.r(i2115[16], i2115[17], 0, i2114, 'cookie')
  i2114.cookieSize = i2115[18]
  i2114.shadowNearPlane = i2115[19]
  i2114.occlusionMaskChannel = i2115[20]
  i2114.isBaked = !!i2115[21]
  i2114.mixedLightingMode = i2115[22]
  i2114.enabled = !!i2115[23]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2117 = data
  i2116.aspect = i2117[0]
  i2116.orthographic = !!i2117[1]
  i2116.orthographicSize = i2117[2]
  i2116.backgroundColor = new pc.Color(i2117[3], i2117[4], i2117[5], i2117[6])
  i2116.nearClipPlane = i2117[7]
  i2116.farClipPlane = i2117[8]
  i2116.fieldOfView = i2117[9]
  i2116.depth = i2117[10]
  i2116.clearFlags = i2117[11]
  i2116.cullingMask = i2117[12]
  i2116.rect = i2117[13]
  request.r(i2117[14], i2117[15], 0, i2116, 'targetTexture')
  i2116.usePhysicalProperties = !!i2117[16]
  i2116.focalLength = i2117[17]
  i2116.sensorSize = new pc.Vec2( i2117[18], i2117[19] )
  i2116.lensShift = new pc.Vec2( i2117[20], i2117[21] )
  i2116.gateFit = i2117[22]
  i2116.commandBufferCount = i2117[23]
  i2116.cameraType = i2117[24]
  i2116.enabled = !!i2117[25]
  return i2116
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_FirstSelected')
  i2118.m_sendNavigationEvents = !!i2119[2]
  i2118.m_DragThreshold = i2119[3]
  return i2118
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2121 = data
  i2120.m_HorizontalAxis = i2121[0]
  i2120.m_VerticalAxis = i2121[1]
  i2120.m_SubmitButton = i2121[2]
  i2120.m_CancelButton = i2121[3]
  i2120.m_InputActionsPerSecond = i2121[4]
  i2120.m_RepeatDelay = i2121[5]
  i2120.m_ForceModuleActive = !!i2121[6]
  i2120.m_SendPointerHoverToParent = !!i2121[7]
  return i2120
}

Deserializers["GameFlowController"] = function (request, data, root) {
  var i2122 = root || request.c( 'GameFlowController' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'tutorial')
  request.r(i2123[2], i2123[3], 0, i2122, 'timer')
  request.r(i2123[4], i2123[5], 0, i2122, 'timerSlider')
  request.r(i2123[6], i2123[7], 0, i2122, 'packshot')
  request.r(i2123[8], i2123[9], 0, i2122, 'board')
  var i2125 = i2123[10]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 2) {
  request.r(i2125[i + 0], i2125[i + 1], 2, i2124, '')
  }
  i2122.dragHandlers = i2124
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2129 = data
  i2128.pivot = new pc.Vec2( i2129[0], i2129[1] )
  i2128.anchorMin = new pc.Vec2( i2129[2], i2129[3] )
  i2128.anchorMax = new pc.Vec2( i2129[4], i2129[5] )
  i2128.sizeDelta = new pc.Vec2( i2129[6], i2129[7] )
  i2128.anchoredPosition3D = new pc.Vec3( i2129[8], i2129[9], i2129[10] )
  i2128.rotation = new pc.Quat(i2129[11], i2129[12], i2129[13], i2129[14])
  i2128.scale = new pc.Vec3( i2129[15], i2129[16], i2129[17] )
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2131 = data
  i2130.planeDistance = i2131[0]
  i2130.referencePixelsPerUnit = i2131[1]
  i2130.isFallbackOverlay = !!i2131[2]
  i2130.renderMode = i2131[3]
  i2130.renderOrder = i2131[4]
  i2130.sortingLayerName = i2131[5]
  i2130.sortingOrder = i2131[6]
  i2130.scaleFactor = i2131[7]
  request.r(i2131[8], i2131[9], 0, i2130, 'worldCamera')
  i2130.overrideSorting = !!i2131[10]
  i2130.pixelPerfect = !!i2131[11]
  i2130.targetDisplay = i2131[12]
  i2130.overridePixelPerfect = !!i2131[13]
  i2130.enabled = !!i2131[14]
  return i2130
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2133 = data
  i2132.m_UiScaleMode = i2133[0]
  i2132.m_ReferencePixelsPerUnit = i2133[1]
  i2132.m_ScaleFactor = i2133[2]
  i2132.m_ReferenceResolution = new pc.Vec2( i2133[3], i2133[4] )
  i2132.m_ScreenMatchMode = i2133[5]
  i2132.m_MatchWidthOrHeight = i2133[6]
  i2132.m_PhysicalUnit = i2133[7]
  i2132.m_FallbackScreenDPI = i2133[8]
  i2132.m_DefaultSpriteDPI = i2133[9]
  i2132.m_DynamicPixelsPerUnit = i2133[10]
  i2132.m_PresetInfoIsWorld = !!i2133[11]
  return i2132
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2135 = data
  i2134.m_IgnoreReversedGraphics = !!i2135[0]
  i2134.m_BlockingObjects = i2135[1]
  i2134.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2135[2] )
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2137 = data
  i2136.cullTransparentMesh = !!i2137[0]
  return i2136
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.Image' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'm_Sprite')
  i2138.m_Type = i2139[2]
  i2138.m_PreserveAspect = !!i2139[3]
  i2138.m_FillCenter = !!i2139[4]
  i2138.m_FillMethod = i2139[5]
  i2138.m_FillAmount = i2139[6]
  i2138.m_FillClockwise = !!i2139[7]
  i2138.m_FillOrigin = i2139[8]
  i2138.m_UseSpriteMesh = !!i2139[9]
  i2138.m_PixelsPerUnitMultiplier = i2139[10]
  request.r(i2139[11], i2139[12], 0, i2138, 'm_Material')
  i2138.m_Maskable = !!i2139[13]
  i2138.m_Color = new pc.Color(i2139[14], i2139[15], i2139[16], i2139[17])
  i2138.m_RaycastTarget = !!i2139[18]
  i2138.m_RaycastPadding = new pc.Vec4( i2139[19], i2139[20], i2139[21], i2139[22] )
  return i2138
}

Deserializers["GameTimerUI"] = function (request, data, root) {
  var i2140 = root || request.c( 'GameTimerUI' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'clockHand')
  i2140.duration = i2141[2]
  i2140.startAngleZ = i2141[3]
  i2140.endAngleZ = i2141[4]
  i2140.warningRemainingFraction = i2141[5]
  return i2140
}

Deserializers["TimerSliderUI"] = function (request, data, root) {
  var i2142 = root || request.c( 'TimerSliderUI' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'timer')
  request.r(i2143[2], i2143[3], 0, i2142, 'barRect')
  i2142.maxRightOffset = i2143[4]
  request.r(i2143[5], i2143[6], 0, i2142, 'barImageOutline')
  request.r(i2143[7], i2143[8], 0, i2142, 'barImage')
  i2142.startColor = new pc.Color(i2143[9], i2143[10], i2143[11], i2143[12])
  i2142.midColor = new pc.Color(i2143[13], i2143[14], i2143[15], i2143[16])
  i2142.endColor = new pc.Color(i2143[17], i2143[18], i2143[19], i2143[20])
  request.r(i2143[21], i2143[22], 0, i2142, 'clockIcon')
  i2142.pulseScaleMultiplier = i2143[23]
  i2142.pulseFrequency = i2143[24]
  i2142.pulseSharpness = i2143[25]
  request.r(i2143[26], i2143[27], 0, i2142, 'clockOutlineImage')
  request.r(i2143[28], i2143[29], 0, i2142, 'loaderBackgroundImage')
  i2142.pulseColor = new pc.Color(i2143[30], i2143[31], i2143[32], i2143[33])
  i2142.alarmShakeStartOffset = i2143[34]
  i2142.alarmShakeDuration = i2143[35]
  i2142.alarmShakeAmplitudeDegrees = i2143[36]
  i2142.alarmShakeFrequency = i2143[37]
  i2142.alarmShakePositionAmplitude = i2143[38]
  request.r(i2143[39], i2143[40], 0, i2142, 'popupRoot')
  request.r(i2143[41], i2143[42], 0, i2142, 'popupContent')
  i2142.popupAnimDuration = i2143[43]
  i2142.popupScaleCurve = new pc.AnimationCurve( { keys_flow: i2143[44] } )
  i2142.popupStartAngleZ = i2143[45]
  request.r(i2143[46], i2143[47], 0, i2142, 'popupBackgroundImage')
  i2142.popupBackgroundStartColor = new pc.Color(i2143[48], i2143[49], i2143[50], i2143[51])
  i2142.popupBackgroundEndColor = new pc.Color(i2143[52], i2143[53], i2143[54], i2143[55])
  return i2142
}

Deserializers["TutorialHandController"] = function (request, data, root) {
  var i2144 = root || request.c( 'TutorialHandController' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'handRoot')
  var i2147 = i2145[2]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2144.traySlots = i2146
  request.r(i2145[3], i2145[4], 0, i2144, 'board')
  request.r(i2145[5], i2145[6], 0, i2144, 'worldCamera')
  i2144.moveDuration = i2145[7]
  i2144.pauseAtEdges = i2145[8]
  i2144.idleDelayBeforeReshow = i2145[9]
  i2144.handArcHeight = i2145[10]
  request.r(i2145[11], i2145[12], 0, i2144, 'overrideSourceStack')
  request.r(i2145[13], i2145[14], 0, i2144, 'overrideTargetCell')
  request.r(i2145[15], i2145[16], 0, i2144, 'handAnimator')
  request.r(i2145[17], i2145[18], 0, i2144, 'handShadowAnimator')
  i2144.clenchTrigger = i2145[19]
  i2144.unclenchTrigger = i2145[20]
  i2144.fingerAnimDuration = i2145[21]
  request.r(i2145[22], i2145[23], 0, i2144, 'spotlightOverlay')
  i2144.targetCellHighlightColor = new pc.Color(i2145[24], i2145[25], i2145[26], i2145[27])
  i2144.cellGlowMultiplier = i2145[28]
  return i2144
}

Deserializers["TutorialSpotlightOverlay"] = function (request, data, root) {
  var i2148 = root || request.c( 'TutorialSpotlightOverlay' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'mainCamera')
  request.r(i2149[2], i2149[3], 0, i2148, 'revealCamera')
  request.r(i2149[4], i2149[5], 0, i2148, 'overlayRoot')
  request.r(i2149[6], i2149[7], 0, i2148, 'revealImage')
  request.r(i2149[8], i2149[9], 0, i2148, 'overlayCanvasGroup')
  i2148.spotlightLayerName = i2149[10]
  i2148.fadeDuration = i2149[11]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2151 = data
  i2150.m_Alpha = i2151[0]
  i2150.m_Interactable = !!i2151[1]
  i2150.m_BlocksRaycasts = !!i2151[2]
  i2150.m_IgnoreParentGroups = !!i2151[3]
  i2150.enabled = !!i2151[4]
  return i2150
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'm_Texture')
  i2152.m_UVRect = UnityEngine.Rect.MinMaxRect(i2153[2], i2153[3], i2153[4], i2153[5])
  request.r(i2153[6], i2153[7], 0, i2152, 'm_Material')
  i2152.m_Maskable = !!i2153[8]
  i2152.m_Color = new pc.Color(i2153[9], i2153[10], i2153[11], i2153[12])
  i2152.m_RaycastTarget = !!i2153[13]
  i2152.m_RaycastPadding = new pc.Vec4( i2153[14], i2153[15], i2153[16], i2153[17] )
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2155 = data
  i2154.color = new pc.Color(i2155[0], i2155[1], i2155[2], i2155[3])
  request.r(i2155[4], i2155[5], 0, i2154, 'sprite')
  i2154.flipX = !!i2155[6]
  i2154.flipY = !!i2155[7]
  i2154.drawMode = i2155[8]
  i2154.size = new pc.Vec2( i2155[9], i2155[10] )
  i2154.tileMode = i2155[11]
  i2154.adaptiveModeThreshold = i2155[12]
  i2154.maskInteraction = i2155[13]
  i2154.spriteSortPoint = i2155[14]
  i2154.enabled = !!i2155[15]
  request.r(i2155[16], i2155[17], 0, i2154, 'sharedMaterial')
  var i2157 = i2155[18]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 2, i2156, '')
  }
  i2154.sharedMaterials = i2156
  i2154.receiveShadows = !!i2155[19]
  i2154.shadowCastingMode = i2155[20]
  i2154.sortingLayerID = i2155[21]
  i2154.sortingOrder = i2155[22]
  i2154.lightmapIndex = i2155[23]
  i2154.lightmapSceneIndex = i2155[24]
  i2154.lightmapScaleOffset = new pc.Vec4( i2155[25], i2155[26], i2155[27], i2155[28] )
  i2154.lightProbeUsage = i2155[29]
  i2154.reflectionProbeUsage = i2155[30]
  return i2154
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'm_RootBone')
  var i2161 = i2159[2]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 2, i2160, '')
  }
  i2158.m_BoneTransforms = i2160
  i2158.m_AlwaysUpdate = !!i2159[3]
  i2158.m_AutoRebind = !!i2159[4]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'animatorController')
  request.r(i2165[2], i2165[3], 0, i2164, 'avatar')
  i2164.updateMode = i2165[4]
  i2164.hasTransformHierarchy = !!i2165[5]
  i2164.applyRootMotion = !!i2165[6]
  var i2167 = i2165[7]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 2) {
  request.r(i2167[i + 0], i2167[i + 1], 2, i2166, '')
  }
  i2164.humanBones = i2166
  i2164.enabled = !!i2165[8]
  return i2164
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i2168 = root || request.c( 'PackshotController' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, 'panelRoot')
  request.r(i2169[2], i2169[3], 0, i2168, 'playNowButton')
  request.r(i2169[4], i2169[5], 0, i2168, 'fullscreenTapButton')
  request.r(i2169[6], i2169[7], 0, i2168, 'transitionAnimator')
  i2168.transitionTrigger = i2169[8]
  request.r(i2169[9], i2169[10], 0, i2168, 'maskRect')
  i2168.maskTargetSize = i2169[11]
  i2168.maskGrowDuration = i2169[12]
  i2168.maskGrowCurve = new pc.AnimationCurve( { keys_flow: i2169[13] } )
  request.r(i2169[14], i2169[15], 0, i2168, 'headerRect')
  request.r(i2169[16], i2169[17], 0, i2168, 'playButtonRect')
  i2168.revealPulseDuration = i2169[18]
  i2168.revealPulseCurve = new pc.AnimationCurve( { keys_flow: i2169[19] } )
  return i2168
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2171 = data
  i2170.m_ShowMaskGraphic = !!i2171[0]
  return i2170
}

Deserializers["CopyRectSize"] = function (request, data, root) {
  var i2172 = root || request.c( 'CopyRectSize' )
  var i2173 = data
  request.r(i2173[0], i2173[1], 0, i2172, 'sourceBG')
  request.r(i2173[2], i2173[3], 0, i2172, 'currentBG')
  return i2172
}

Deserializers["FloatingHoverEffect"] = function (request, data, root) {
  var i2174 = root || request.c( 'FloatingHoverEffect' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'target')
  i2174.amplitude = i2175[2]
  i2174.frequency = i2175[3]
  i2174.rotationAmplitudeDegrees = i2175[4]
  return i2174
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.UI.Button' )
  var i2177 = data
  i2176.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2177[0], i2176.m_OnClick)
  i2176.m_Navigation = request.d('UnityEngine.UI.Navigation', i2177[1], i2176.m_Navigation)
  i2176.m_Transition = i2177[2]
  i2176.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2177[3], i2176.m_Colors)
  i2176.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2177[4], i2176.m_SpriteState)
  i2176.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2177[5], i2176.m_AnimationTriggers)
  i2176.m_Interactable = !!i2177[6]
  request.r(i2177[7], i2177[8], 0, i2176, 'm_TargetGraphic')
  return i2176
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2179 = data
  i2178.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2179[0], i2178.m_PersistentCalls)
  return i2178
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(request.d('UnityEngine.Events.PersistentCall', i2183[i + 0]));
  }
  i2180.m_Calls = i2182
  return i2180
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'm_Target')
  i2186.m_TargetAssemblyTypeName = i2187[2]
  i2186.m_MethodName = i2187[3]
  i2186.m_Mode = i2187[4]
  i2186.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2187[5], i2186.m_Arguments)
  i2186.m_CallState = i2187[6]
  return i2186
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2189 = data
  i2188.m_Mode = i2189[0]
  i2188.m_WrapAround = !!i2189[1]
  request.r(i2189[2], i2189[3], 0, i2188, 'm_SelectOnUp')
  request.r(i2189[4], i2189[5], 0, i2188, 'm_SelectOnDown')
  request.r(i2189[6], i2189[7], 0, i2188, 'm_SelectOnLeft')
  request.r(i2189[8], i2189[9], 0, i2188, 'm_SelectOnRight')
  return i2188
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2191 = data
  i2190.m_NormalColor = new pc.Color(i2191[0], i2191[1], i2191[2], i2191[3])
  i2190.m_HighlightedColor = new pc.Color(i2191[4], i2191[5], i2191[6], i2191[7])
  i2190.m_PressedColor = new pc.Color(i2191[8], i2191[9], i2191[10], i2191[11])
  i2190.m_SelectedColor = new pc.Color(i2191[12], i2191[13], i2191[14], i2191[15])
  i2190.m_DisabledColor = new pc.Color(i2191[16], i2191[17], i2191[18], i2191[19])
  i2190.m_ColorMultiplier = i2191[20]
  i2190.m_FadeDuration = i2191[21]
  return i2190
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'm_HighlightedSprite')
  request.r(i2193[2], i2193[3], 0, i2192, 'm_PressedSprite')
  request.r(i2193[4], i2193[5], 0, i2192, 'm_SelectedSprite')
  request.r(i2193[6], i2193[7], 0, i2192, 'm_DisabledSprite')
  return i2192
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2195 = data
  i2194.m_NormalTrigger = i2195[0]
  i2194.m_HighlightedTrigger = i2195[1]
  i2194.m_PressedTrigger = i2195[2]
  i2194.m_SelectedTrigger = i2195[3]
  i2194.m_DisabledTrigger = i2195[4]
  return i2194
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2196 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2197 = data
  i2196.m_hasFontAssetChanged = !!i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'm_baseMaterial')
  i2196.m_maskOffset = new pc.Vec4( i2197[3], i2197[4], i2197[5], i2197[6] )
  i2196.m_text = i2197[7]
  i2196.m_isRightToLeft = !!i2197[8]
  request.r(i2197[9], i2197[10], 0, i2196, 'm_fontAsset')
  request.r(i2197[11], i2197[12], 0, i2196, 'm_sharedMaterial')
  var i2199 = i2197[13]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2196.m_fontSharedMaterials = i2198
  request.r(i2197[14], i2197[15], 0, i2196, 'm_fontMaterial')
  var i2201 = i2197[16]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2196.m_fontMaterials = i2200
  i2196.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2197[17], i2197[18], i2197[19], i2197[20])
  i2196.m_fontColor = new pc.Color(i2197[21], i2197[22], i2197[23], i2197[24])
  i2196.m_enableVertexGradient = !!i2197[25]
  i2196.m_colorMode = i2197[26]
  i2196.m_fontColorGradient = request.d('TMPro.VertexGradient', i2197[27], i2196.m_fontColorGradient)
  request.r(i2197[28], i2197[29], 0, i2196, 'm_fontColorGradientPreset')
  request.r(i2197[30], i2197[31], 0, i2196, 'm_spriteAsset')
  i2196.m_tintAllSprites = !!i2197[32]
  request.r(i2197[33], i2197[34], 0, i2196, 'm_StyleSheet')
  i2196.m_TextStyleHashCode = i2197[35]
  i2196.m_overrideHtmlColors = !!i2197[36]
  i2196.m_faceColor = UnityEngine.Color32.ConstructColor(i2197[37], i2197[38], i2197[39], i2197[40])
  i2196.m_fontSize = i2197[41]
  i2196.m_fontSizeBase = i2197[42]
  i2196.m_fontWeight = i2197[43]
  i2196.m_enableAutoSizing = !!i2197[44]
  i2196.m_fontSizeMin = i2197[45]
  i2196.m_fontSizeMax = i2197[46]
  i2196.m_fontStyle = i2197[47]
  i2196.m_HorizontalAlignment = i2197[48]
  i2196.m_VerticalAlignment = i2197[49]
  i2196.m_textAlignment = i2197[50]
  i2196.m_characterSpacing = i2197[51]
  i2196.m_wordSpacing = i2197[52]
  i2196.m_lineSpacing = i2197[53]
  i2196.m_lineSpacingMax = i2197[54]
  i2196.m_paragraphSpacing = i2197[55]
  i2196.m_charWidthMaxAdj = i2197[56]
  i2196.m_enableWordWrapping = !!i2197[57]
  i2196.m_wordWrappingRatios = i2197[58]
  i2196.m_overflowMode = i2197[59]
  request.r(i2197[60], i2197[61], 0, i2196, 'm_linkedTextComponent')
  request.r(i2197[62], i2197[63], 0, i2196, 'parentLinkedComponent')
  i2196.m_enableKerning = !!i2197[64]
  i2196.m_enableExtraPadding = !!i2197[65]
  i2196.checkPaddingRequired = !!i2197[66]
  i2196.m_isRichText = !!i2197[67]
  i2196.m_parseCtrlCharacters = !!i2197[68]
  i2196.m_isOrthographic = !!i2197[69]
  i2196.m_isCullingEnabled = !!i2197[70]
  i2196.m_horizontalMapping = i2197[71]
  i2196.m_verticalMapping = i2197[72]
  i2196.m_uvLineOffset = i2197[73]
  i2196.m_geometrySortingOrder = i2197[74]
  i2196.m_IsTextObjectScaleStatic = !!i2197[75]
  i2196.m_VertexBufferAutoSizeReduction = !!i2197[76]
  i2196.m_useMaxVisibleDescender = !!i2197[77]
  i2196.m_pageToDisplay = i2197[78]
  i2196.m_margin = new pc.Vec4( i2197[79], i2197[80], i2197[81], i2197[82] )
  i2196.m_isUsingLegacyAnimationComponent = !!i2197[83]
  i2196.m_isVolumetricText = !!i2197[84]
  request.r(i2197[85], i2197[86], 0, i2196, 'm_Material')
  i2196.m_Maskable = !!i2197[87]
  i2196.m_Color = new pc.Color(i2197[88], i2197[89], i2197[90], i2197[91])
  i2196.m_RaycastTarget = !!i2197[92]
  i2196.m_RaycastPadding = new pc.Vec4( i2197[93], i2197[94], i2197[95], i2197[96] )
  return i2196
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2202 = root || request.c( 'TMPro.VertexGradient' )
  var i2203 = data
  i2202.topLeft = new pc.Color(i2203[0], i2203[1], i2203[2], i2203[3])
  i2202.topRight = new pc.Color(i2203[4], i2203[5], i2203[6], i2203[7])
  i2202.bottomLeft = new pc.Color(i2203[8], i2203[9], i2203[10], i2203[11])
  i2202.bottomRight = new pc.Color(i2203[12], i2203[13], i2203[14], i2203[15])
  return i2202
}

Deserializers["ScreenScaler"] = function (request, data, root) {
  var i2204 = root || request.c( 'ScreenScaler' )
  var i2205 = data
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'sharedMesh')
  i2206.convex = !!i2207[2]
  i2206.enabled = !!i2207[3]
  i2206.isTrigger = !!i2207[4]
  request.r(i2207[5], i2207[6], 0, i2206, 'material')
  return i2206
}

Deserializers["TrayRefillManager"] = function (request, data, root) {
  var i2208 = root || request.c( 'TrayRefillManager' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'board')
  var i2211 = i2209[2]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 2, i2210, '')
  }
  i2208.trayHandlers = i2210
  request.r(i2209[3], i2209[4], 0, i2208, 'timer')
  i2208.minPieces = i2209[5]
  i2208.maxPieces = i2209[6]
  i2208.spawnAnimDuration = i2209[7]
  i2208.spawnBounceHeight = i2209[8]
  i2208.spawnScaleCurve = new pc.AnimationCurve( { keys_flow: i2209[9] } )
  return i2208
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i2212 = root || request.c( 'BoardManager' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'cellsParent')
  var i2215 = i2213[2]
  var i2214 = new (System.Collections.Generic.List$1(Bridge.ns('BoardCell')))
  for(var i = 0; i < i2215.length; i += 2) {
  request.r(i2215[i + 0], i2215[i + 1], 1, i2214, '')
  }
  i2212.cells = i2214
  request.r(i2213[3], i2213[4], 0, i2212, 'cellHighlightConfig')
  i2212.neighborMaxDistance = i2213[5]
  request.r(i2213[6], i2213[7], 0, i2212, 'stackPrefab')
  request.r(i2213[8], i2213[9], 0, i2212, 'piecePrefab')
  request.r(i2213[10], i2213[11], 0, i2212, 'palette')
  i2212.initialStackRotation = new pc.Vec3( i2213[12], i2213[13], i2213[14] )
  i2212.baseJumpDuration = i2213[15]
  i2212.speedMultiplierPerClear = i2213[16]
  i2212.squashDuration = i2213[17]
  i2212.sinkDuration = i2213[18]
  i2212.sinkTargetY = i2213[19]
  i2212.topPieceSquashScaleYZ = i2213[20]
  i2212.pieceClipPlaneY = i2213[21]
  request.r(i2213[22], i2213[23], 0, i2212, 'destroyStackEffectPrefab')
  i2212.destroyEffectOffsetBeforeEnd = i2213[24]
  i2212.jumpEasing = new pc.AnimationCurve( { keys_flow: i2213[25] } )
  i2212.jumpStartStagger = i2213[26]
  i2212.landingSettleDuration = i2213[27]
  return i2212
}

Deserializers["BoardCell"] = function (request, data, root) {
  var i2218 = root || request.c( 'BoardCell' )
  var i2219 = data
  i2218.autoComputeAxialFromPosition = !!i2219[0]
  i2218.axialCoord = new pc.Vec2( i2219[1], i2219[2] )
  var i2221 = i2219[3]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('HexColor')))
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.add(i2221[i + 0]);
  }
  i2218.initialStackColors = i2220
  i2218.isClickable = !!i2219[4]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2223 = data
  i2222.center = new pc.Vec3( i2223[0], i2223[1], i2223[2] )
  i2222.radius = i2223[3]
  i2222.enabled = !!i2223[4]
  i2222.isTrigger = !!i2223[5]
  request.r(i2223[6], i2223[7], 0, i2222, 'material')
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2225 = data
  i2224.ambientIntensity = i2225[0]
  i2224.reflectionIntensity = i2225[1]
  i2224.ambientMode = i2225[2]
  i2224.ambientLight = new pc.Color(i2225[3], i2225[4], i2225[5], i2225[6])
  i2224.ambientSkyColor = new pc.Color(i2225[7], i2225[8], i2225[9], i2225[10])
  i2224.ambientGroundColor = new pc.Color(i2225[11], i2225[12], i2225[13], i2225[14])
  i2224.ambientEquatorColor = new pc.Color(i2225[15], i2225[16], i2225[17], i2225[18])
  i2224.fogColor = new pc.Color(i2225[19], i2225[20], i2225[21], i2225[22])
  i2224.fogEndDistance = i2225[23]
  i2224.fogStartDistance = i2225[24]
  i2224.fogDensity = i2225[25]
  i2224.fog = !!i2225[26]
  request.r(i2225[27], i2225[28], 0, i2224, 'skybox')
  i2224.fogMode = i2225[29]
  var i2227 = i2225[30]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2227[i + 0]) );
  }
  i2224.lightmaps = i2226
  i2224.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2225[31], i2224.lightProbes)
  i2224.lightmapsMode = i2225[32]
  i2224.mixedBakeMode = i2225[33]
  i2224.environmentLightingMode = i2225[34]
  i2224.ambientProbe = new pc.SphericalHarmonicsL2(i2225[35])
  request.r(i2225[36], i2225[37], 0, i2224, 'customReflection')
  request.r(i2225[38], i2225[39], 0, i2224, 'defaultReflection')
  i2224.defaultReflectionMode = i2225[40]
  i2224.defaultReflectionResolution = i2225[41]
  i2224.sunLightObjectId = i2225[42]
  i2224.pixelLightCount = i2225[43]
  i2224.defaultReflectionHDR = !!i2225[44]
  i2224.hasLightDataAsset = !!i2225[45]
  i2224.hasManualGenerate = !!i2225[46]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'lightmapColor')
  request.r(i2231[2], i2231[3], 0, i2230, 'lightmapDirection')
  request.r(i2231[4], i2231[5], 0, i2230, 'shadowMask')
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2232 = root || new UnityEngine.LightProbes()
  var i2233 = data
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2241 = data
  var i2243 = i2241[0]
  var i2242 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2243[i + 0]));
  }
  i2240.ShaderCompilationErrors = i2242
  i2240.name = i2241[1]
  i2240.guid = i2241[2]
  var i2245 = i2241[3]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( i2245[i + 0] );
  }
  i2240.shaderDefinedKeywords = i2244
  var i2247 = i2241[4]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2247[i + 0]) );
  }
  i2240.passes = i2246
  var i2249 = i2241[5]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2249[i + 0]) );
  }
  i2240.usePasses = i2248
  var i2251 = i2241[6]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2251[i + 0]) );
  }
  i2240.defaultParameterValues = i2250
  request.r(i2241[7], i2241[8], 0, i2240, 'unityFallbackShader')
  i2240.readDepth = !!i2241[9]
  i2240.hasDepthOnlyPass = !!i2241[10]
  i2240.isCreatedByShaderGraph = !!i2241[11]
  i2240.disableBatching = !!i2241[12]
  i2240.compiled = !!i2241[13]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2255 = data
  i2254.shaderName = i2255[0]
  i2254.errorMessage = i2255[1]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2260 = root || new pc.UnityShaderPass()
  var i2261 = data
  i2260.id = i2261[0]
  i2260.subShaderIndex = i2261[1]
  i2260.name = i2261[2]
  i2260.passType = i2261[3]
  i2260.grabPassTextureName = i2261[4]
  i2260.usePass = !!i2261[5]
  i2260.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[6], i2260.zTest)
  i2260.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[7], i2260.zWrite)
  i2260.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[8], i2260.culling)
  i2260.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2261[9], i2260.blending)
  i2260.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2261[10], i2260.alphaBlending)
  i2260.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[11], i2260.colorWriteMask)
  i2260.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[12], i2260.offsetUnits)
  i2260.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[13], i2260.offsetFactor)
  i2260.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[14], i2260.stencilRef)
  i2260.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[15], i2260.stencilReadMask)
  i2260.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[16], i2260.stencilWriteMask)
  i2260.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2261[17], i2260.stencilOp)
  i2260.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2261[18], i2260.stencilOpFront)
  i2260.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2261[19], i2260.stencilOpBack)
  var i2263 = i2261[20]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2263[i + 0]) );
  }
  i2260.tags = i2262
  var i2265 = i2261[21]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( i2265[i + 0] );
  }
  i2260.passDefinedKeywords = i2264
  var i2267 = i2261[22]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2267[i + 0]) );
  }
  i2260.passDefinedKeywordGroups = i2266
  var i2269 = i2261[23]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2269[i + 0]) );
  }
  i2260.variants = i2268
  var i2271 = i2261[24]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2271[i + 0]) );
  }
  i2260.excludedVariants = i2270
  i2260.hasDepthReader = !!i2261[25]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2273 = data
  i2272.val = i2273[0]
  i2272.name = i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2275 = data
  i2274.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2275[0], i2274.src)
  i2274.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2275[1], i2274.dst)
  i2274.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2275[2], i2274.op)
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2277 = data
  i2276.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[0], i2276.pass)
  i2276.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[1], i2276.fail)
  i2276.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[2], i2276.zFail)
  i2276.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[3], i2276.comp)
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.value = i2281[1]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2285 = data
  var i2287 = i2285[0]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( i2287[i + 0] );
  }
  i2284.keywords = i2286
  i2284.hasDiscard = !!i2285[1]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2291 = data
  i2290.passId = i2291[0]
  i2290.subShaderIndex = i2291[1]
  var i2293 = i2291[2]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( i2293[i + 0] );
  }
  i2290.keywords = i2292
  i2290.vertexProgram = i2291[3]
  i2290.fragmentProgram = i2291[4]
  i2290.exportedForWebGl2 = !!i2291[5]
  i2290.readDepth = !!i2291[6]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'shader')
  i2296.pass = i2297[2]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2301 = data
  i2300.name = i2301[0]
  i2300.type = i2301[1]
  i2300.value = new pc.Vec4( i2301[2], i2301[3], i2301[4], i2301[5] )
  i2300.textureValue = i2301[6]
  i2300.shaderPropertyFlag = i2301[7]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2303 = data
  i2302.name = i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'texture')
  i2302.aabb = i2303[3]
  i2302.vertices = i2303[4]
  i2302.triangles = i2303[5]
  i2302.textureRect = UnityEngine.Rect.MinMaxRect(i2303[6], i2303[7], i2303[8], i2303[9])
  i2302.packedRect = UnityEngine.Rect.MinMaxRect(i2303[10], i2303[11], i2303[12], i2303[13])
  i2302.border = new pc.Vec4( i2303[14], i2303[15], i2303[16], i2303[17] )
  i2302.transparency = i2303[18]
  i2302.bounds = i2303[19]
  i2302.pixelsPerUnit = i2303[20]
  i2302.textureWidth = i2303[21]
  i2302.textureHeight = i2303[22]
  i2302.nativeSize = new pc.Vec2( i2303[23], i2303[24] )
  i2302.pivot = new pc.Vec2( i2303[25], i2303[26] )
  i2302.textureRectOffset = new pc.Vec2( i2303[27], i2303[28] )
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2305 = data
  i2304.name = i2305[0]
  i2304.wrapMode = i2305[1]
  i2304.isLooping = !!i2305[2]
  i2304.length = i2305[3]
  var i2307 = i2305[4]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2307[i + 0]) );
  }
  i2304.curves = i2306
  var i2309 = i2305[5]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2309[i + 0]) );
  }
  i2304.events = i2308
  i2304.halfPrecision = !!i2305[6]
  i2304._frameRate = i2305[7]
  i2304.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2305[8], i2304.localBounds)
  i2304.hasMuscleCurves = !!i2305[9]
  var i2311 = i2305[10]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2304.clipMuscleConstant = i2310
  i2304.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2305[11], i2304.clipBindingConstant)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2315 = data
  i2314.path = i2315[0]
  i2314.hash = i2315[1]
  i2314.componentType = i2315[2]
  i2314.property = i2315[3]
  i2314.keys = i2315[4]
  var i2317 = i2315[5]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2317[i + 0]) );
  }
  i2314.objectReferenceKeys = i2316
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2321 = data
  i2320.time = i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'value')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2325 = data
  i2324.functionName = i2325[0]
  i2324.floatParameter = i2325[1]
  i2324.intParameter = i2325[2]
  i2324.stringParameter = i2325[3]
  request.r(i2325[4], i2325[5], 0, i2324, 'objectReferenceParameter')
  i2324.time = i2325[6]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2327 = data
  i2326.center = new pc.Vec3( i2327[0], i2327[1], i2327[2] )
  i2326.extends = new pc.Vec3( i2327[3], i2327[4], i2327[5] )
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2331 = data
  var i2333 = i2331[0]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( i2333[i + 0] );
  }
  i2330.genericBindings = i2332
  var i2335 = i2331[1]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( i2335[i + 0] );
  }
  i2330.pptrCurveMapping = i2334
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.ascent = i2337[1]
  i2336.originalLineHeight = i2337[2]
  i2336.fontSize = i2337[3]
  var i2339 = i2337[4]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2339[i + 0]) );
  }
  i2336.characterInfo = i2338
  request.r(i2337[5], i2337[6], 0, i2336, 'texture')
  i2336.originalFontSize = i2337[7]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2343 = data
  i2342.index = i2343[0]
  i2342.advance = i2343[1]
  i2342.bearing = i2343[2]
  i2342.glyphWidth = i2343[3]
  i2342.glyphHeight = i2343[4]
  i2342.minX = i2343[5]
  i2342.maxX = i2343[6]
  i2342.minY = i2343[7]
  i2342.maxY = i2343[8]
  i2342.uvBottomLeftX = i2343[9]
  i2342.uvBottomLeftY = i2343[10]
  i2342.uvBottomRightX = i2343[11]
  i2342.uvBottomRightY = i2343[12]
  i2342.uvTopLeftX = i2343[13]
  i2342.uvTopLeftY = i2343[14]
  i2342.uvTopRightX = i2343[15]
  i2342.uvTopRightY = i2343[16]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2345 = data
  i2344.name = i2345[0]
  var i2347 = i2345[1]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2347[i + 0]) );
  }
  i2344.layers = i2346
  var i2349 = i2345[2]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2349[i + 0]) );
  }
  i2344.parameters = i2348
  i2344.animationClips = i2345[3]
  i2344.avatarUnsupported = i2345[4]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2353 = data
  i2352.name = i2353[0]
  i2352.defaultWeight = i2353[1]
  i2352.blendingMode = i2353[2]
  i2352.avatarMask = i2353[3]
  i2352.syncedLayerIndex = i2353[4]
  i2352.syncedLayerAffectsTiming = !!i2353[5]
  i2352.syncedLayers = i2353[6]
  i2352.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2353[7], i2352.stateMachine)
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2355 = data
  i2354.id = i2355[0]
  i2354.name = i2355[1]
  i2354.path = i2355[2]
  var i2357 = i2355[3]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2357[i + 0]) );
  }
  i2354.states = i2356
  var i2359 = i2355[4]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2359[i + 0]) );
  }
  i2354.machines = i2358
  var i2361 = i2355[5]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2361[i + 0]) );
  }
  i2354.entryStateTransitions = i2360
  var i2363 = i2355[6]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2363[i + 0]) );
  }
  i2354.exitStateTransitions = i2362
  var i2365 = i2355[7]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2365[i + 0]) );
  }
  i2354.anyStateTransitions = i2364
  i2354.defaultStateId = i2355[8]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2369 = data
  i2368.id = i2369[0]
  i2368.name = i2369[1]
  i2368.cycleOffset = i2369[2]
  i2368.cycleOffsetParameter = i2369[3]
  i2368.cycleOffsetParameterActive = !!i2369[4]
  i2368.mirror = !!i2369[5]
  i2368.mirrorParameter = i2369[6]
  i2368.mirrorParameterActive = !!i2369[7]
  i2368.motionId = i2369[8]
  i2368.nameHash = i2369[9]
  i2368.fullPathHash = i2369[10]
  i2368.speed = i2369[11]
  i2368.speedParameter = i2369[12]
  i2368.speedParameterActive = !!i2369[13]
  i2368.tag = i2369[14]
  i2368.tagHash = i2369[15]
  i2368.writeDefaultValues = !!i2369[16]
  var i2371 = i2369[17]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 2, i2370, '')
  }
  i2368.behaviours = i2370
  var i2373 = i2369[18]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2373[i + 0]) );
  }
  i2368.transitions = i2372
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2379 = data
  i2378.fullPath = i2379[0]
  i2378.canTransitionToSelf = !!i2379[1]
  i2378.duration = i2379[2]
  i2378.exitTime = i2379[3]
  i2378.hasExitTime = !!i2379[4]
  i2378.hasFixedDuration = !!i2379[5]
  i2378.interruptionSource = i2379[6]
  i2378.offset = i2379[7]
  i2378.orderedInterruption = !!i2379[8]
  i2378.destinationStateId = i2379[9]
  i2378.isExit = !!i2379[10]
  i2378.mute = !!i2379[11]
  i2378.solo = !!i2379[12]
  var i2381 = i2379[13]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2381[i + 0]) );
  }
  i2378.conditions = i2380
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2385 = data
  i2384.mode = i2385[0]
  i2384.parameter = i2385[1]
  i2384.threshold = i2385[2]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2391 = data
  i2390.destinationStateId = i2391[0]
  i2390.isExit = !!i2391[1]
  i2390.mute = !!i2391[2]
  i2390.solo = !!i2391[3]
  var i2393 = i2391[4]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2393[i + 0]) );
  }
  i2390.conditions = i2392
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2397 = data
  i2396.defaultBool = !!i2397[0]
  i2396.defaultFloat = i2397[1]
  i2396.defaultInt = i2397[2]
  i2396.name = i2397[3]
  i2396.nameHash = i2397[4]
  i2396.type = i2397[5]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2399 = data
  i2398.name = i2399[0]
  i2398.bytes64 = i2399[1]
  i2398.data = i2399[2]
  return i2398
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2400 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'atlas')
  i2400.normalStyle = i2401[2]
  i2400.normalSpacingOffset = i2401[3]
  i2400.boldStyle = i2401[4]
  i2400.boldSpacing = i2401[5]
  i2400.italicStyle = i2401[6]
  i2400.tabSize = i2401[7]
  i2400.hashCode = i2401[8]
  request.r(i2401[9], i2401[10], 0, i2400, 'material')
  i2400.materialHashCode = i2401[11]
  i2400.m_Version = i2401[12]
  i2400.m_SourceFontFileGUID = i2401[13]
  request.r(i2401[14], i2401[15], 0, i2400, 'm_SourceFontFile_EditorRef')
  request.r(i2401[16], i2401[17], 0, i2400, 'm_SourceFontFile')
  i2400.m_AtlasPopulationMode = i2401[18]
  i2400.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2401[19], i2400.m_FaceInfo)
  var i2403 = i2401[20]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.add(request.d('UnityEngine.TextCore.Glyph', i2403[i + 0]));
  }
  i2400.m_GlyphTable = i2402
  var i2405 = i2401[21]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('TMPro.TMP_Character', i2405[i + 0]));
  }
  i2400.m_CharacterTable = i2404
  var i2407 = i2401[22]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2400.m_AtlasTextures = i2406
  i2400.m_AtlasTextureIndex = i2401[23]
  i2400.m_IsMultiAtlasTexturesEnabled = !!i2401[24]
  i2400.m_ClearDynamicDataOnBuild = !!i2401[25]
  var i2409 = i2401[26]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(request.d('UnityEngine.TextCore.GlyphRect', i2409[i + 0]));
  }
  i2400.m_UsedGlyphRects = i2408
  var i2411 = i2401[27]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.add(request.d('UnityEngine.TextCore.GlyphRect', i2411[i + 0]));
  }
  i2400.m_FreeGlyphRects = i2410
  i2400.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2401[28], i2400.m_fontInfo)
  i2400.m_AtlasWidth = i2401[29]
  i2400.m_AtlasHeight = i2401[30]
  i2400.m_AtlasPadding = i2401[31]
  i2400.m_AtlasRenderMode = i2401[32]
  var i2413 = i2401[33]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(request.d('TMPro.TMP_Glyph', i2413[i + 0]));
  }
  i2400.m_glyphInfoList = i2412
  i2400.m_KerningTable = request.d('TMPro.KerningTable', i2401[34], i2400.m_KerningTable)
  i2400.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2401[35], i2400.m_FontFeatureTable)
  var i2415 = i2401[36]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 1, i2414, '')
  }
  i2400.fallbackFontAssets = i2414
  var i2417 = i2401[37]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 1, i2416, '')
  }
  i2400.m_FallbackFontAssetTable = i2416
  i2400.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2401[38], i2400.m_CreationSettings)
  var i2419 = i2401[39]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('TMPro.TMP_FontWeightPair', i2419[i + 0]) );
  }
  i2400.m_FontWeightTable = i2418
  var i2421 = i2401[40]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('TMPro.TMP_FontWeightPair', i2421[i + 0]) );
  }
  i2400.fontWeights = i2420
  return i2400
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2423 = data
  i2422.m_FaceIndex = i2423[0]
  i2422.m_FamilyName = i2423[1]
  i2422.m_StyleName = i2423[2]
  i2422.m_PointSize = i2423[3]
  i2422.m_Scale = i2423[4]
  i2422.m_UnitsPerEM = i2423[5]
  i2422.m_LineHeight = i2423[6]
  i2422.m_AscentLine = i2423[7]
  i2422.m_CapLine = i2423[8]
  i2422.m_MeanLine = i2423[9]
  i2422.m_Baseline = i2423[10]
  i2422.m_DescentLine = i2423[11]
  i2422.m_SuperscriptOffset = i2423[12]
  i2422.m_SuperscriptSize = i2423[13]
  i2422.m_SubscriptOffset = i2423[14]
  i2422.m_SubscriptSize = i2423[15]
  i2422.m_UnderlineOffset = i2423[16]
  i2422.m_UnderlineThickness = i2423[17]
  i2422.m_StrikethroughOffset = i2423[18]
  i2422.m_StrikethroughThickness = i2423[19]
  i2422.m_TabWidth = i2423[20]
  return i2422
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2427 = data
  i2426.m_Index = i2427[0]
  i2426.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2427[1], i2426.m_Metrics)
  i2426.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2427[2], i2426.m_GlyphRect)
  i2426.m_Scale = i2427[3]
  i2426.m_AtlasIndex = i2427[4]
  i2426.m_ClassDefinitionType = i2427[5]
  return i2426
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2429 = data
  i2428.m_Width = i2429[0]
  i2428.m_Height = i2429[1]
  i2428.m_HorizontalBearingX = i2429[2]
  i2428.m_HorizontalBearingY = i2429[3]
  i2428.m_HorizontalAdvance = i2429[4]
  return i2428
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2431 = data
  i2430.m_X = i2431[0]
  i2430.m_Y = i2431[1]
  i2430.m_Width = i2431[2]
  i2430.m_Height = i2431[3]
  return i2430
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2434 = root || request.c( 'TMPro.TMP_Character' )
  var i2435 = data
  i2434.m_ElementType = i2435[0]
  i2434.m_Unicode = i2435[1]
  i2434.m_GlyphIndex = i2435[2]
  i2434.m_Scale = i2435[3]
  return i2434
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2440 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2441 = data
  i2440.Name = i2441[0]
  i2440.PointSize = i2441[1]
  i2440.Scale = i2441[2]
  i2440.CharacterCount = i2441[3]
  i2440.LineHeight = i2441[4]
  i2440.Baseline = i2441[5]
  i2440.Ascender = i2441[6]
  i2440.CapHeight = i2441[7]
  i2440.Descender = i2441[8]
  i2440.CenterLine = i2441[9]
  i2440.SuperscriptOffset = i2441[10]
  i2440.SubscriptOffset = i2441[11]
  i2440.SubSize = i2441[12]
  i2440.Underline = i2441[13]
  i2440.UnderlineThickness = i2441[14]
  i2440.strikethrough = i2441[15]
  i2440.strikethroughThickness = i2441[16]
  i2440.TabWidth = i2441[17]
  i2440.Padding = i2441[18]
  i2440.AtlasWidth = i2441[19]
  i2440.AtlasHeight = i2441[20]
  return i2440
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2445 = data
  i2444.id = i2445[0]
  i2444.x = i2445[1]
  i2444.y = i2445[2]
  i2444.width = i2445[3]
  i2444.height = i2445[4]
  i2444.xOffset = i2445[5]
  i2444.yOffset = i2445[6]
  i2444.xAdvance = i2445[7]
  i2444.scale = i2445[8]
  return i2444
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.KerningTable' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.add(request.d('TMPro.KerningPair', i2449[i + 0]));
  }
  i2446.kerningPairs = i2448
  return i2446
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2452 = root || request.c( 'TMPro.KerningPair' )
  var i2453 = data
  i2452.xOffset = i2453[0]
  i2452.m_FirstGlyph = i2453[1]
  i2452.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2453[2], i2452.m_FirstGlyphAdjustments)
  i2452.m_SecondGlyph = i2453[3]
  i2452.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2453[4], i2452.m_SecondGlyphAdjustments)
  i2452.m_IgnoreSpacingAdjustments = !!i2453[5]
  return i2452
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2454 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2455 = data
  var i2457 = i2455[0]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2457[i + 0]));
  }
  i2454.m_GlyphPairAdjustmentRecords = i2456
  return i2454
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2460 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2461 = data
  i2460.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2461[0], i2460.m_FirstAdjustmentRecord)
  i2460.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2461[1], i2460.m_SecondAdjustmentRecord)
  i2460.m_FeatureLookupFlags = i2461[2]
  return i2460
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2463 = data
  i2462.m_GlyphIndex = i2463[0]
  i2462.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2463[1], i2462.m_GlyphValueRecord)
  return i2462
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2464 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2465 = data
  i2464.m_XPlacement = i2465[0]
  i2464.m_YPlacement = i2465[1]
  i2464.m_XAdvance = i2465[2]
  i2464.m_YAdvance = i2465[3]
  return i2464
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2469 = data
  i2468.sourceFontFileName = i2469[0]
  i2468.sourceFontFileGUID = i2469[1]
  i2468.pointSizeSamplingMode = i2469[2]
  i2468.pointSize = i2469[3]
  i2468.padding = i2469[4]
  i2468.packingMode = i2469[5]
  i2468.atlasWidth = i2469[6]
  i2468.atlasHeight = i2469[7]
  i2468.characterSetSelectionMode = i2469[8]
  i2468.characterSequence = i2469[9]
  i2468.referencedFontAssetGUID = i2469[10]
  i2468.referencedTextAssetGUID = i2469[11]
  i2468.fontStyle = i2469[12]
  i2468.fontStyleModifier = i2469[13]
  i2468.renderMode = i2469[14]
  i2468.includeFontFeatures = !!i2469[15]
  return i2468
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2472 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'regularTypeface')
  request.r(i2473[2], i2473[3], 0, i2472, 'italicTypeface')
  return i2472
}

Deserializers["HexColorPalette"] = function (request, data, root) {
  var i2474 = root || request.c( 'HexColorPalette' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('HexColorPalette+Entry', i2477[i + 0]) );
  }
  i2474.entries = i2476
  return i2474
}

Deserializers["HexColorPalette+Entry"] = function (request, data, root) {
  var i2480 = root || request.c( 'HexColorPalette+Entry' )
  var i2481 = data
  i2480.color = i2481[0]
  request.r(i2481[1], i2481[2], 0, i2480, 'material')
  return i2480
}

Deserializers["CellHighlightConfig"] = function (request, data, root) {
  var i2482 = root || request.c( 'CellHighlightConfig' )
  var i2483 = data
  i2482.normalColor = new pc.Color(i2483[0], i2483[1], i2483[2], i2483[3])
  i2482.highlightColor = new pc.Color(i2483[4], i2483[5], i2483[6], i2483[7])
  i2482.highlightScaleX = i2483[8]
  i2482.highlightPositionY = i2483[9]
  i2482.transitionDuration = i2483[10]
  return i2482
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.TMP_Settings' )
  var i2485 = data
  i2484.m_enableWordWrapping = !!i2485[0]
  i2484.m_enableKerning = !!i2485[1]
  i2484.m_enableExtraPadding = !!i2485[2]
  i2484.m_enableTintAllSprites = !!i2485[3]
  i2484.m_enableParseEscapeCharacters = !!i2485[4]
  i2484.m_EnableRaycastTarget = !!i2485[5]
  i2484.m_GetFontFeaturesAtRuntime = !!i2485[6]
  i2484.m_missingGlyphCharacter = i2485[7]
  i2484.m_warningsDisabled = !!i2485[8]
  request.r(i2485[9], i2485[10], 0, i2484, 'm_defaultFontAsset')
  i2484.m_defaultFontAssetPath = i2485[11]
  i2484.m_defaultFontSize = i2485[12]
  i2484.m_defaultAutoSizeMinRatio = i2485[13]
  i2484.m_defaultAutoSizeMaxRatio = i2485[14]
  i2484.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2485[15], i2485[16] )
  i2484.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2485[17], i2485[18] )
  i2484.m_autoSizeTextContainer = !!i2485[19]
  i2484.m_IsTextObjectScaleStatic = !!i2485[20]
  var i2487 = i2485[21]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 1, i2486, '')
  }
  i2484.m_fallbackFontAssets = i2486
  i2484.m_matchMaterialPreset = !!i2485[22]
  request.r(i2485[23], i2485[24], 0, i2484, 'm_defaultSpriteAsset')
  i2484.m_defaultSpriteAssetPath = i2485[25]
  i2484.m_enableEmojiSupport = !!i2485[26]
  i2484.m_MissingCharacterSpriteUnicode = i2485[27]
  i2484.m_defaultColorGradientPresetsPath = i2485[28]
  request.r(i2485[29], i2485[30], 0, i2484, 'm_defaultStyleSheet')
  i2484.m_StyleSheetsResourcePath = i2485[31]
  request.r(i2485[32], i2485[33], 0, i2484, 'm_leadingCharacters')
  request.r(i2485[34], i2485[35], 0, i2484, 'm_followingCharacters')
  i2484.m_UseModernHangulLineBreakingRules = !!i2485[36]
  return i2484
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2488 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'spriteSheet')
  var i2491 = i2489[2]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('TMPro.TMP_Sprite', i2491[i + 0]));
  }
  i2488.spriteInfoList = i2490
  var i2493 = i2489[3]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 1, i2492, '')
  }
  i2488.fallbackSpriteAssets = i2492
  i2488.hashCode = i2489[4]
  request.r(i2489[5], i2489[6], 0, i2488, 'material')
  i2488.materialHashCode = i2489[7]
  i2488.m_Version = i2489[8]
  i2488.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2489[9], i2488.m_FaceInfo)
  var i2495 = i2489[10]
  var i2494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.add(request.d('TMPro.TMP_SpriteCharacter', i2495[i + 0]));
  }
  i2488.m_SpriteCharacterTable = i2494
  var i2497 = i2489[11]
  var i2496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.add(request.d('TMPro.TMP_SpriteGlyph', i2497[i + 0]));
  }
  i2488.m_SpriteGlyphTable = i2496
  return i2488
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2500 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.hashCode = i2501[1]
  i2500.unicode = i2501[2]
  i2500.pivot = new pc.Vec2( i2501[3], i2501[4] )
  request.r(i2501[5], i2501[6], 0, i2500, 'sprite')
  i2500.id = i2501[7]
  i2500.x = i2501[8]
  i2500.y = i2501[9]
  i2500.width = i2501[10]
  i2500.height = i2501[11]
  i2500.xOffset = i2501[12]
  i2500.yOffset = i2501[13]
  i2500.xAdvance = i2501[14]
  i2500.scale = i2501[15]
  return i2500
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2507 = data
  i2506.m_Name = i2507[0]
  i2506.m_HashCode = i2507[1]
  i2506.m_ElementType = i2507[2]
  i2506.m_Unicode = i2507[3]
  i2506.m_GlyphIndex = i2507[4]
  i2506.m_Scale = i2507[5]
  return i2506
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'sprite')
  i2510.m_Index = i2511[2]
  i2510.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2511[3], i2510.m_Metrics)
  i2510.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2511[4], i2510.m_GlyphRect)
  i2510.m_Scale = i2511[5]
  i2510.m_AtlasIndex = i2511[6]
  i2510.m_ClassDefinitionType = i2511[7]
  return i2510
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2512 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2513 = data
  var i2515 = i2513[0]
  var i2514 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.add(request.d('TMPro.TMP_Style', i2515[i + 0]));
  }
  i2512.m_StyleList = i2514
  return i2512
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2518 = root || request.c( 'TMPro.TMP_Style' )
  var i2519 = data
  i2518.m_Name = i2519[0]
  i2518.m_HashCode = i2519[1]
  i2518.m_OpeningDefinition = i2519[2]
  i2518.m_ClosingDefinition = i2519[3]
  i2518.m_OpeningTagArray = i2519[4]
  i2518.m_ClosingTagArray = i2519[5]
  i2518.m_OpeningTagUnicodeArray = i2519[6]
  i2518.m_ClosingTagUnicodeArray = i2519[7]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2523[i + 0]) );
  }
  i2520.files = i2522
  i2520.componentToPrefabIds = i2521[1]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2527 = data
  i2526.path = i2527[0]
  request.r(i2527[1], i2527[2], 0, i2526, 'unityObject')
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2529 = data
  var i2531 = i2529[0]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2531[i + 0]) );
  }
  i2528.scriptsExecutionOrder = i2530
  var i2533 = i2529[1]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2533[i + 0]) );
  }
  i2528.sortingLayers = i2532
  var i2535 = i2529[2]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2535[i + 0]) );
  }
  i2528.cullingLayers = i2534
  i2528.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2529[3], i2528.timeSettings)
  i2528.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2529[4], i2528.physicsSettings)
  i2528.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2529[5], i2528.physics2DSettings)
  i2528.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2529[6], i2528.qualitySettings)
  i2528.enableRealtimeShadows = !!i2529[7]
  i2528.enableAutoInstancing = !!i2529[8]
  i2528.enableStaticBatching = !!i2529[9]
  i2528.enableDynamicBatching = !!i2529[10]
  i2528.usePreservativeDynamicBatching = !!i2529[11]
  i2528.lightmapEncodingQuality = i2529[12]
  i2528.desiredColorSpace = i2529[13]
  var i2537 = i2529[14]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( i2537[i + 0] );
  }
  i2528.allTags = i2536
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2541 = data
  i2540.name = i2541[0]
  i2540.value = i2541[1]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2545 = data
  i2544.id = i2545[0]
  i2544.name = i2545[1]
  i2544.value = i2545[2]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2549 = data
  i2548.id = i2549[0]
  i2548.name = i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2551 = data
  i2550.fixedDeltaTime = i2551[0]
  i2550.maximumDeltaTime = i2551[1]
  i2550.timeScale = i2551[2]
  i2550.maximumParticleTimestep = i2551[3]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2553 = data
  i2552.gravity = new pc.Vec3( i2553[0], i2553[1], i2553[2] )
  i2552.defaultSolverIterations = i2553[3]
  i2552.bounceThreshold = i2553[4]
  i2552.autoSyncTransforms = !!i2553[5]
  i2552.autoSimulation = !!i2553[6]
  var i2555 = i2553[7]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2555[i + 0]) );
  }
  i2552.collisionMatrix = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.layerId = i2559[1]
  i2558.otherLayerId = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'material')
  i2560.gravity = new pc.Vec2( i2561[2], i2561[3] )
  i2560.positionIterations = i2561[4]
  i2560.velocityIterations = i2561[5]
  i2560.velocityThreshold = i2561[6]
  i2560.maxLinearCorrection = i2561[7]
  i2560.maxAngularCorrection = i2561[8]
  i2560.maxTranslationSpeed = i2561[9]
  i2560.maxRotationSpeed = i2561[10]
  i2560.baumgarteScale = i2561[11]
  i2560.baumgarteTOIScale = i2561[12]
  i2560.timeToSleep = i2561[13]
  i2560.linearSleepTolerance = i2561[14]
  i2560.angularSleepTolerance = i2561[15]
  i2560.defaultContactOffset = i2561[16]
  i2560.autoSimulation = !!i2561[17]
  i2560.queriesHitTriggers = !!i2561[18]
  i2560.queriesStartInColliders = !!i2561[19]
  i2560.callbacksOnDisable = !!i2561[20]
  i2560.reuseCollisionCallbacks = !!i2561[21]
  i2560.autoSyncTransforms = !!i2561[22]
  var i2563 = i2561[23]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2563[i + 0]) );
  }
  i2560.collisionMatrix = i2562
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2567 = data
  i2566.enabled = !!i2567[0]
  i2566.layerId = i2567[1]
  i2566.otherLayerId = i2567[2]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2569 = data
  var i2571 = i2569[0]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2571[i + 0]) );
  }
  i2568.qualityLevels = i2570
  var i2573 = i2569[1]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( i2573[i + 0] );
  }
  i2568.names = i2572
  i2568.shadows = i2569[2]
  i2568.anisotropicFiltering = i2569[3]
  i2568.antiAliasing = i2569[4]
  i2568.lodBias = i2569[5]
  i2568.shadowCascades = i2569[6]
  i2568.shadowDistance = i2569[7]
  i2568.shadowmaskMode = i2569[8]
  i2568.shadowProjection = i2569[9]
  i2568.shadowResolution = i2569[10]
  i2568.softParticles = !!i2569[11]
  i2568.softVegetation = !!i2569[12]
  i2568.activeColorSpace = i2569[13]
  i2568.desiredColorSpace = i2569[14]
  i2568.masterTextureLimit = i2569[15]
  i2568.maxQueuedFrames = i2569[16]
  i2568.particleRaycastBudget = i2569[17]
  i2568.pixelLightCount = i2569[18]
  i2568.realtimeReflectionProbes = !!i2569[19]
  i2568.shadowCascade2Split = i2569[20]
  i2568.shadowCascade4Split = new pc.Vec3( i2569[21], i2569[22], i2569[23] )
  i2568.streamingMipmapsActive = !!i2569[24]
  i2568.vSyncCount = i2569[25]
  i2568.asyncUploadBufferSize = i2569[26]
  i2568.asyncUploadTimeSlice = i2569[27]
  i2568.billboardsFaceCameraPosition = !!i2569[28]
  i2568.shadowNearPlaneOffset = i2569[29]
  i2568.streamingMipmapsMemoryBudget = i2569[30]
  i2568.maximumLODLevel = i2569[31]
  i2568.streamingMipmapsAddAllCameras = !!i2569[32]
  i2568.streamingMipmapsMaxLevelReduction = i2569[33]
  i2568.streamingMipmapsRenderersPerFrame = i2569[34]
  i2568.resolutionScalingFixedDPIFactor = i2569[35]
  i2568.streamingMipmapsMaxFileIORequests = i2569[36]
  i2568.currentQualityLevel = i2569[37]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2579 = data
  i2578.weight = i2579[0]
  i2578.vertices = i2579[1]
  i2578.normals = i2579[2]
  i2578.tangents = i2579[3]
  return i2578
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'm_ObjectArgument')
  i2580.m_ObjectArgumentAssemblyTypeName = i2581[2]
  i2580.m_IntArgument = i2581[3]
  i2580.m_FloatArgument = i2581[4]
  i2580.m_StringArgument = i2581[5]
  i2580.m_BoolArgument = !!i2581[6]
  return i2580
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2583 = data
  i2582.xPlacement = i2583[0]
  i2582.yPlacement = i2583[1]
  i2582.xAdvance = i2583[2]
  i2582.yAdvance = i2583[3]
  return i2582
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

Deserializers.creativeName = "TestConcept";

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

Deserializers.buildID = "8e75b9f3-e25e-493b-85a5-17ee23b49a0c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

