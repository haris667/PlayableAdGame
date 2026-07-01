var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.JointSpring' )
  var i1839 = data
  i1838.spring = i1839[0]
  i1838.damper = i1839[1]
  i1838.targetPosition = i1839[2]
  return i1838
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.JointMotor' )
  var i1841 = data
  i1840.m_TargetVelocity = i1841[0]
  i1840.m_Force = i1841[1]
  i1840.m_FreeSpin = i1841[2]
  return i1840
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.JointLimits' )
  var i1843 = data
  i1842.m_Min = i1843[0]
  i1842.m_Max = i1843[1]
  i1842.m_Bounciness = i1843[2]
  i1842.m_BounceMinVelocity = i1843[3]
  i1842.m_ContactDistance = i1843[4]
  i1842.minBounce = i1843[5]
  i1842.maxBounce = i1843[6]
  return i1842
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.JointDrive' )
  var i1845 = data
  i1844.m_PositionSpring = i1845[0]
  i1844.m_PositionDamper = i1845[1]
  i1844.m_MaximumForce = i1845[2]
  i1844.m_UseAcceleration = i1845[3]
  return i1844
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1847 = data
  i1846.m_Spring = i1847[0]
  i1846.m_Damper = i1847[1]
  return i1846
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1849 = data
  i1848.m_Limit = i1849[0]
  i1848.m_Bounciness = i1849[1]
  i1848.m_ContactDistance = i1849[2]
  return i1848
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1851 = data
  i1850.m_ExtremumSlip = i1851[0]
  i1850.m_ExtremumValue = i1851[1]
  i1850.m_AsymptoteSlip = i1851[2]
  i1850.m_AsymptoteValue = i1851[3]
  i1850.m_Stiffness = i1851[4]
  return i1850
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1853 = data
  i1852.m_LowerAngle = i1853[0]
  i1852.m_UpperAngle = i1853[1]
  return i1852
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1855 = data
  i1854.m_MotorSpeed = i1855[0]
  i1854.m_MaximumMotorTorque = i1855[1]
  return i1854
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1857 = data
  i1856.m_DampingRatio = i1857[0]
  i1856.m_Frequency = i1857[1]
  i1856.m_Angle = i1857[2]
  return i1856
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1859 = data
  i1858.m_LowerTranslation = i1859[0]
  i1858.m_UpperTranslation = i1859[1]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1861 = data
  i1860.name = i1861[0]
  i1860.width = i1861[1]
  i1860.height = i1861[2]
  i1860.mipmapCount = i1861[3]
  i1860.anisoLevel = i1861[4]
  i1860.filterMode = i1861[5]
  i1860.hdr = !!i1861[6]
  i1860.format = i1861[7]
  i1860.wrapMode = i1861[8]
  i1860.alphaIsTransparency = !!i1861[9]
  i1860.alphaSource = i1861[10]
  i1860.graphicsFormat = i1861[11]
  i1860.sRGBTexture = !!i1861[12]
  i1860.desiredColorSpace = i1861[13]
  i1860.wrapU = i1861[14]
  i1860.wrapV = i1861[15]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1862 = root || new pc.UnityMaterial()
  var i1863 = data
  i1862.name = i1863[0]
  request.r(i1863[1], i1863[2], 0, i1862, 'shader')
  i1862.renderQueue = i1863[3]
  i1862.enableInstancing = !!i1863[4]
  var i1865 = i1863[5]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1865[i + 0]) );
  }
  i1862.floatParameters = i1864
  var i1867 = i1863[6]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1867[i + 0]) );
  }
  i1862.colorParameters = i1866
  var i1869 = i1863[7]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1869[i + 0]) );
  }
  i1862.vectorParameters = i1868
  var i1871 = i1863[8]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1871[i + 0]) );
  }
  i1862.textureParameters = i1870
  var i1873 = i1863[9]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1873[i + 0]) );
  }
  i1862.materialFlags = i1872
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.value = i1877[1]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1881 = data
  i1880.name = i1881[0]
  i1880.value = new pc.Color(i1881[1], i1881[2], i1881[3], i1881[4])
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.value = new pc.Vec4( i1885[1], i1885[2], i1885[3], i1885[4] )
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1889 = data
  i1888.name = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'value')
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.enabled = !!i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.halfPrecision = !!i1895[1]
  i1894.useSimplification = !!i1895[2]
  i1894.useUInt32IndexFormat = !!i1895[3]
  i1894.vertexCount = i1895[4]
  i1894.aabb = i1895[5]
  var i1897 = i1895[6]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( !!i1897[i + 0] );
  }
  i1894.streams = i1896
  i1894.vertices = i1895[7]
  var i1899 = i1895[8]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1899[i + 0]) );
  }
  i1894.subMeshes = i1898
  var i1901 = i1895[9]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 16) {
    i1900.push( new pc.Mat4().setData(i1901[i + 0], i1901[i + 1], i1901[i + 2], i1901[i + 3],  i1901[i + 4], i1901[i + 5], i1901[i + 6], i1901[i + 7],  i1901[i + 8], i1901[i + 9], i1901[i + 10], i1901[i + 11],  i1901[i + 12], i1901[i + 13], i1901[i + 14], i1901[i + 15]) );
  }
  i1894.bindposes = i1900
  var i1903 = i1895[10]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1903[i + 0]) );
  }
  i1894.blendShapes = i1902
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1909 = data
  i1908.triangles = i1909[0]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1915 = data
  i1914.name = i1915[0]
  var i1917 = i1915[1]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1917[i + 0]) );
  }
  i1914.frames = i1916
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.atlasId = i1919[1]
  i1918.mipmapCount = i1919[2]
  i1918.hdr = !!i1919[3]
  i1918.size = i1919[4]
  i1918.anisoLevel = i1919[5]
  i1918.filterMode = i1919[6]
  var i1921 = i1919[7]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 4) {
    i1920.push( UnityEngine.Rect.MinMaxRect(i1921[i + 0], i1921[i + 1], i1921[i + 2], i1921[i + 3]) );
  }
  i1918.rects = i1920
  i1918.wrapU = i1919[8]
  i1918.wrapV = i1919[9]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1925 = data
  i1924.name = i1925[0]
  i1924.index = i1925[1]
  i1924.startup = !!i1925[2]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1927 = data
  i1926.aspect = i1927[0]
  i1926.orthographic = !!i1927[1]
  i1926.orthographicSize = i1927[2]
  i1926.backgroundColor = new pc.Color(i1927[3], i1927[4], i1927[5], i1927[6])
  i1926.nearClipPlane = i1927[7]
  i1926.farClipPlane = i1927[8]
  i1926.fieldOfView = i1927[9]
  i1926.depth = i1927[10]
  i1926.clearFlags = i1927[11]
  i1926.cullingMask = i1927[12]
  i1926.rect = i1927[13]
  request.r(i1927[14], i1927[15], 0, i1926, 'targetTexture')
  i1926.usePhysicalProperties = !!i1927[16]
  i1926.focalLength = i1927[17]
  i1926.sensorSize = new pc.Vec2( i1927[18], i1927[19] )
  i1926.lensShift = new pc.Vec2( i1927[20], i1927[21] )
  i1926.gateFit = i1927[22]
  i1926.commandBufferCount = i1927[23]
  i1926.cameraType = i1927[24]
  i1926.enabled = !!i1927[25]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1929 = data
  i1928.name = i1929[0]
  i1928.tagId = i1929[1]
  i1928.enabled = !!i1929[2]
  i1928.isStatic = !!i1929[3]
  i1928.layer = i1929[4]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1931 = data
  i1930.type = i1931[0]
  i1930.color = new pc.Color(i1931[1], i1931[2], i1931[3], i1931[4])
  i1930.cullingMask = i1931[5]
  i1930.intensity = i1931[6]
  i1930.range = i1931[7]
  i1930.spotAngle = i1931[8]
  i1930.shadows = i1931[9]
  i1930.shadowNormalBias = i1931[10]
  i1930.shadowBias = i1931[11]
  i1930.shadowStrength = i1931[12]
  i1930.shadowResolution = i1931[13]
  i1930.lightmapBakeType = i1931[14]
  i1930.renderMode = i1931[15]
  request.r(i1931[16], i1931[17], 0, i1930, 'cookie')
  i1930.cookieSize = i1931[18]
  i1930.shadowNearPlane = i1931[19]
  i1930.occlusionMaskChannel = i1931[20]
  i1930.isBaked = !!i1931[21]
  i1930.mixedLightingMode = i1931[22]
  i1930.enabled = !!i1931[23]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1933 = data
  i1932.pivot = new pc.Vec2( i1933[0], i1933[1] )
  i1932.anchorMin = new pc.Vec2( i1933[2], i1933[3] )
  i1932.anchorMax = new pc.Vec2( i1933[4], i1933[5] )
  i1932.sizeDelta = new pc.Vec2( i1933[6], i1933[7] )
  i1932.anchoredPosition3D = new pc.Vec3( i1933[8], i1933[9], i1933[10] )
  i1932.rotation = new pc.Quat(i1933[11], i1933[12], i1933[13], i1933[14])
  i1932.scale = new pc.Vec3( i1933[15], i1933[16], i1933[17] )
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1935 = data
  i1934.planeDistance = i1935[0]
  i1934.referencePixelsPerUnit = i1935[1]
  i1934.isFallbackOverlay = !!i1935[2]
  i1934.renderMode = i1935[3]
  i1934.renderOrder = i1935[4]
  i1934.sortingLayerName = i1935[5]
  i1934.sortingOrder = i1935[6]
  i1934.scaleFactor = i1935[7]
  request.r(i1935[8], i1935[9], 0, i1934, 'worldCamera')
  i1934.overrideSorting = !!i1935[10]
  i1934.pixelPerfect = !!i1935[11]
  i1934.targetDisplay = i1935[12]
  i1934.overridePixelPerfect = !!i1935[13]
  i1934.enabled = !!i1935[14]
  return i1934
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1937 = data
  i1936.m_UiScaleMode = i1937[0]
  i1936.m_ReferencePixelsPerUnit = i1937[1]
  i1936.m_ScaleFactor = i1937[2]
  i1936.m_ReferenceResolution = new pc.Vec2( i1937[3], i1937[4] )
  i1936.m_ScreenMatchMode = i1937[5]
  i1936.m_MatchWidthOrHeight = i1937[6]
  i1936.m_PhysicalUnit = i1937[7]
  i1936.m_FallbackScreenDPI = i1937[8]
  i1936.m_DefaultSpriteDPI = i1937[9]
  i1936.m_DynamicPixelsPerUnit = i1937[10]
  i1936.m_PresetInfoIsWorld = !!i1937[11]
  return i1936
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1939 = data
  i1938.m_IgnoreReversedGraphics = !!i1939[0]
  i1938.m_BlockingObjects = i1939[1]
  i1938.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1939[2] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1941 = data
  i1940.cullTransparentMesh = !!i1941[0]
  return i1940
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.UI.Image' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'm_Sprite')
  i1942.m_Type = i1943[2]
  i1942.m_PreserveAspect = !!i1943[3]
  i1942.m_FillCenter = !!i1943[4]
  i1942.m_FillMethod = i1943[5]
  i1942.m_FillAmount = i1943[6]
  i1942.m_FillClockwise = !!i1943[7]
  i1942.m_FillOrigin = i1943[8]
  i1942.m_UseSpriteMesh = !!i1943[9]
  i1942.m_PixelsPerUnitMultiplier = i1943[10]
  request.r(i1943[11], i1943[12], 0, i1942, 'm_Material')
  i1942.m_Maskable = !!i1943[13]
  i1942.m_Color = new pc.Color(i1943[14], i1943[15], i1943[16], i1943[17])
  i1942.m_RaycastTarget = !!i1943[18]
  i1942.m_RaycastPadding = new pc.Vec4( i1943[19], i1943[20], i1943[21], i1943[22] )
  return i1942
}

Deserializers["GradientSlicedImage"] = function (request, data, root) {
  var i1944 = root || request.c( 'GradientSlicedImage' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'm_Material')
  request.r(i1945[2], i1945[3], 0, i1944, 'm_Sprite')
  i1944.m_Type = i1945[4]
  i1944.m_PreserveAspect = !!i1945[5]
  i1944.m_FillCenter = !!i1945[6]
  i1944.m_FillMethod = i1945[7]
  i1944.m_FillAmount = i1945[8]
  i1944.m_FillClockwise = !!i1945[9]
  i1944.m_FillOrigin = i1945[10]
  i1944.m_UseSpriteMesh = !!i1945[11]
  i1944.m_PixelsPerUnitMultiplier = i1945[12]
  i1944.m_Maskable = !!i1945[13]
  i1944.m_Color = new pc.Color(i1945[14], i1945[15], i1945[16], i1945[17])
  i1944.m_RaycastTarget = !!i1945[18]
  i1944.m_RaycastPadding = new pc.Vec4( i1945[19], i1945[20], i1945[21], i1945[22] )
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'sharedMesh')
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'additionalVertexStreams')
  i1948.enabled = !!i1949[2]
  request.r(i1949[3], i1949[4], 0, i1948, 'sharedMaterial')
  var i1951 = i1949[5]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 2) {
  request.r(i1951[i + 0], i1951[i + 1], 2, i1950, '')
  }
  i1948.sharedMaterials = i1950
  i1948.receiveShadows = !!i1949[6]
  i1948.shadowCastingMode = i1949[7]
  i1948.sortingLayerID = i1949[8]
  i1948.sortingOrder = i1949[9]
  i1948.lightmapIndex = i1949[10]
  i1948.lightmapSceneIndex = i1949[11]
  i1948.lightmapScaleOffset = new pc.Vec4( i1949[12], i1949[13], i1949[14], i1949[15] )
  i1948.lightProbeUsage = i1949[16]
  i1948.reflectionProbeUsage = i1949[17]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'sharedMesh')
  i1954.convex = !!i1955[2]
  i1954.enabled = !!i1955[3]
  i1954.isTrigger = !!i1955[4]
  request.r(i1955[5], i1955[6], 0, i1954, 'material')
  return i1954
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_FirstSelected')
  i1956.m_sendNavigationEvents = !!i1957[2]
  i1956.m_DragThreshold = i1957[3]
  return i1956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1959 = data
  i1958.m_HorizontalAxis = i1959[0]
  i1958.m_VerticalAxis = i1959[1]
  i1958.m_SubmitButton = i1959[2]
  i1958.m_CancelButton = i1959[3]
  i1958.m_InputActionsPerSecond = i1959[4]
  i1958.m_RepeatDelay = i1959[5]
  i1958.m_ForceModuleActive = !!i1959[6]
  i1958.m_SendPointerHoverToParent = !!i1959[7]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1961 = data
  i1960.ambientIntensity = i1961[0]
  i1960.reflectionIntensity = i1961[1]
  i1960.ambientMode = i1961[2]
  i1960.ambientLight = new pc.Color(i1961[3], i1961[4], i1961[5], i1961[6])
  i1960.ambientSkyColor = new pc.Color(i1961[7], i1961[8], i1961[9], i1961[10])
  i1960.ambientGroundColor = new pc.Color(i1961[11], i1961[12], i1961[13], i1961[14])
  i1960.ambientEquatorColor = new pc.Color(i1961[15], i1961[16], i1961[17], i1961[18])
  i1960.fogColor = new pc.Color(i1961[19], i1961[20], i1961[21], i1961[22])
  i1960.fogEndDistance = i1961[23]
  i1960.fogStartDistance = i1961[24]
  i1960.fogDensity = i1961[25]
  i1960.fog = !!i1961[26]
  request.r(i1961[27], i1961[28], 0, i1960, 'skybox')
  i1960.fogMode = i1961[29]
  var i1963 = i1961[30]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1963[i + 0]) );
  }
  i1960.lightmaps = i1962
  i1960.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1961[31], i1960.lightProbes)
  i1960.lightmapsMode = i1961[32]
  i1960.mixedBakeMode = i1961[33]
  i1960.environmentLightingMode = i1961[34]
  i1960.ambientProbe = new pc.SphericalHarmonicsL2(i1961[35])
  request.r(i1961[36], i1961[37], 0, i1960, 'customReflection')
  request.r(i1961[38], i1961[39], 0, i1960, 'defaultReflection')
  i1960.defaultReflectionMode = i1961[40]
  i1960.defaultReflectionResolution = i1961[41]
  i1960.sunLightObjectId = i1961[42]
  i1960.pixelLightCount = i1961[43]
  i1960.defaultReflectionHDR = !!i1961[44]
  i1960.hasLightDataAsset = !!i1961[45]
  i1960.hasManualGenerate = !!i1961[46]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'lightmapColor')
  request.r(i1967[2], i1967[3], 0, i1966, 'lightmapDirection')
  request.r(i1967[4], i1967[5], 0, i1966, 'shadowMask')
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1968 = root || new UnityEngine.LightProbes()
  var i1969 = data
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1977 = data
  var i1979 = i1977[0]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1979[i + 0]));
  }
  i1976.ShaderCompilationErrors = i1978
  i1976.name = i1977[1]
  i1976.guid = i1977[2]
  var i1981 = i1977[3]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( i1981[i + 0] );
  }
  i1976.shaderDefinedKeywords = i1980
  var i1983 = i1977[4]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1983[i + 0]) );
  }
  i1976.passes = i1982
  var i1985 = i1977[5]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1985[i + 0]) );
  }
  i1976.usePasses = i1984
  var i1987 = i1977[6]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1987[i + 0]) );
  }
  i1976.defaultParameterValues = i1986
  request.r(i1977[7], i1977[8], 0, i1976, 'unityFallbackShader')
  i1976.readDepth = !!i1977[9]
  i1976.hasDepthOnlyPass = !!i1977[10]
  i1976.isCreatedByShaderGraph = !!i1977[11]
  i1976.disableBatching = !!i1977[12]
  i1976.compiled = !!i1977[13]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1991 = data
  i1990.shaderName = i1991[0]
  i1990.errorMessage = i1991[1]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1996 = root || new pc.UnityShaderPass()
  var i1997 = data
  i1996.id = i1997[0]
  i1996.subShaderIndex = i1997[1]
  i1996.name = i1997[2]
  i1996.passType = i1997[3]
  i1996.grabPassTextureName = i1997[4]
  i1996.usePass = !!i1997[5]
  i1996.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[6], i1996.zTest)
  i1996.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[7], i1996.zWrite)
  i1996.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[8], i1996.culling)
  i1996.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1997[9], i1996.blending)
  i1996.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1997[10], i1996.alphaBlending)
  i1996.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[11], i1996.colorWriteMask)
  i1996.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[12], i1996.offsetUnits)
  i1996.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[13], i1996.offsetFactor)
  i1996.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[14], i1996.stencilRef)
  i1996.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[15], i1996.stencilReadMask)
  i1996.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[16], i1996.stencilWriteMask)
  i1996.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[17], i1996.stencilOp)
  i1996.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[18], i1996.stencilOpFront)
  i1996.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[19], i1996.stencilOpBack)
  var i1999 = i1997[20]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1999[i + 0]) );
  }
  i1996.tags = i1998
  var i2001 = i1997[21]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( i2001[i + 0] );
  }
  i1996.passDefinedKeywords = i2000
  var i2003 = i1997[22]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2003[i + 0]) );
  }
  i1996.passDefinedKeywordGroups = i2002
  var i2005 = i1997[23]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2005[i + 0]) );
  }
  i1996.variants = i2004
  var i2007 = i1997[24]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2007[i + 0]) );
  }
  i1996.excludedVariants = i2006
  i1996.hasDepthReader = !!i1997[25]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2009 = data
  i2008.val = i2009[0]
  i2008.name = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2011 = data
  i2010.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[0], i2010.src)
  i2010.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[1], i2010.dst)
  i2010.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[2], i2010.op)
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2013 = data
  i2012.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[0], i2012.pass)
  i2012.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[1], i2012.fail)
  i2012.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[2], i2012.zFail)
  i2012.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[3], i2012.comp)
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2017 = data
  i2016.name = i2017[0]
  i2016.value = i2017[1]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( i2023[i + 0] );
  }
  i2020.keywords = i2022
  i2020.hasDiscard = !!i2021[1]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2027 = data
  i2026.passId = i2027[0]
  i2026.subShaderIndex = i2027[1]
  var i2029 = i2027[2]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( i2029[i + 0] );
  }
  i2026.keywords = i2028
  i2026.vertexProgram = i2027[3]
  i2026.fragmentProgram = i2027[4]
  i2026.exportedForWebGl2 = !!i2027[5]
  i2026.readDepth = !!i2027[6]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'shader')
  i2032.pass = i2033[2]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2037 = data
  i2036.name = i2037[0]
  i2036.type = i2037[1]
  i2036.value = new pc.Vec4( i2037[2], i2037[3], i2037[4], i2037[5] )
  i2036.textureValue = i2037[6]
  i2036.shaderPropertyFlag = i2037[7]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2039 = data
  i2038.name = i2039[0]
  request.r(i2039[1], i2039[2], 0, i2038, 'texture')
  i2038.aabb = i2039[3]
  i2038.vertices = i2039[4]
  i2038.triangles = i2039[5]
  i2038.textureRect = UnityEngine.Rect.MinMaxRect(i2039[6], i2039[7], i2039[8], i2039[9])
  i2038.packedRect = UnityEngine.Rect.MinMaxRect(i2039[10], i2039[11], i2039[12], i2039[13])
  i2038.border = new pc.Vec4( i2039[14], i2039[15], i2039[16], i2039[17] )
  i2038.transparency = i2039[18]
  i2038.bounds = i2039[19]
  i2038.pixelsPerUnit = i2039[20]
  i2038.textureWidth = i2039[21]
  i2038.textureHeight = i2039[22]
  i2038.nativeSize = new pc.Vec2( i2039[23], i2039[24] )
  i2038.pivot = new pc.Vec2( i2039[25], i2039[26] )
  i2038.textureRectOffset = new pc.Vec2( i2039[27], i2039[28] )
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2041 = data
  var i2043 = i2041[0]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2043[i + 0]) );
  }
  i2040.files = i2042
  i2040.componentToPrefabIds = i2041[1]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2047 = data
  i2046.path = i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'unityObject')
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2049 = data
  var i2051 = i2049[0]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2051[i + 0]) );
  }
  i2048.scriptsExecutionOrder = i2050
  var i2053 = i2049[1]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2053[i + 0]) );
  }
  i2048.sortingLayers = i2052
  var i2055 = i2049[2]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2055[i + 0]) );
  }
  i2048.cullingLayers = i2054
  i2048.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2049[3], i2048.timeSettings)
  i2048.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2049[4], i2048.physicsSettings)
  i2048.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2049[5], i2048.physics2DSettings)
  i2048.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2049[6], i2048.qualitySettings)
  i2048.enableRealtimeShadows = !!i2049[7]
  i2048.enableAutoInstancing = !!i2049[8]
  i2048.enableStaticBatching = !!i2049[9]
  i2048.enableDynamicBatching = !!i2049[10]
  i2048.usePreservativeDynamicBatching = !!i2049[11]
  i2048.lightmapEncodingQuality = i2049[12]
  i2048.desiredColorSpace = i2049[13]
  var i2057 = i2049[14]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( i2057[i + 0] );
  }
  i2048.allTags = i2056
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2061 = data
  i2060.name = i2061[0]
  i2060.value = i2061[1]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2065 = data
  i2064.id = i2065[0]
  i2064.name = i2065[1]
  i2064.value = i2065[2]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2069 = data
  i2068.id = i2069[0]
  i2068.name = i2069[1]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2071 = data
  i2070.fixedDeltaTime = i2071[0]
  i2070.maximumDeltaTime = i2071[1]
  i2070.timeScale = i2071[2]
  i2070.maximumParticleTimestep = i2071[3]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2073 = data
  i2072.gravity = new pc.Vec3( i2073[0], i2073[1], i2073[2] )
  i2072.defaultSolverIterations = i2073[3]
  i2072.bounceThreshold = i2073[4]
  i2072.autoSyncTransforms = !!i2073[5]
  i2072.autoSimulation = !!i2073[6]
  var i2075 = i2073[7]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2075[i + 0]) );
  }
  i2072.collisionMatrix = i2074
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.layerId = i2079[1]
  i2078.otherLayerId = i2079[2]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'material')
  i2080.gravity = new pc.Vec2( i2081[2], i2081[3] )
  i2080.positionIterations = i2081[4]
  i2080.velocityIterations = i2081[5]
  i2080.velocityThreshold = i2081[6]
  i2080.maxLinearCorrection = i2081[7]
  i2080.maxAngularCorrection = i2081[8]
  i2080.maxTranslationSpeed = i2081[9]
  i2080.maxRotationSpeed = i2081[10]
  i2080.baumgarteScale = i2081[11]
  i2080.baumgarteTOIScale = i2081[12]
  i2080.timeToSleep = i2081[13]
  i2080.linearSleepTolerance = i2081[14]
  i2080.angularSleepTolerance = i2081[15]
  i2080.defaultContactOffset = i2081[16]
  i2080.autoSimulation = !!i2081[17]
  i2080.queriesHitTriggers = !!i2081[18]
  i2080.queriesStartInColliders = !!i2081[19]
  i2080.callbacksOnDisable = !!i2081[20]
  i2080.reuseCollisionCallbacks = !!i2081[21]
  i2080.autoSyncTransforms = !!i2081[22]
  var i2083 = i2081[23]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2083[i + 0]) );
  }
  i2080.collisionMatrix = i2082
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.layerId = i2087[1]
  i2086.otherLayerId = i2087[2]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2089 = data
  var i2091 = i2089[0]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2091[i + 0]) );
  }
  i2088.qualityLevels = i2090
  var i2093 = i2089[1]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( i2093[i + 0] );
  }
  i2088.names = i2092
  i2088.shadows = i2089[2]
  i2088.anisotropicFiltering = i2089[3]
  i2088.antiAliasing = i2089[4]
  i2088.lodBias = i2089[5]
  i2088.shadowCascades = i2089[6]
  i2088.shadowDistance = i2089[7]
  i2088.shadowmaskMode = i2089[8]
  i2088.shadowProjection = i2089[9]
  i2088.shadowResolution = i2089[10]
  i2088.softParticles = !!i2089[11]
  i2088.softVegetation = !!i2089[12]
  i2088.activeColorSpace = i2089[13]
  i2088.desiredColorSpace = i2089[14]
  i2088.masterTextureLimit = i2089[15]
  i2088.maxQueuedFrames = i2089[16]
  i2088.particleRaycastBudget = i2089[17]
  i2088.pixelLightCount = i2089[18]
  i2088.realtimeReflectionProbes = !!i2089[19]
  i2088.shadowCascade2Split = i2089[20]
  i2088.shadowCascade4Split = new pc.Vec3( i2089[21], i2089[22], i2089[23] )
  i2088.streamingMipmapsActive = !!i2089[24]
  i2088.vSyncCount = i2089[25]
  i2088.asyncUploadBufferSize = i2089[26]
  i2088.asyncUploadTimeSlice = i2089[27]
  i2088.billboardsFaceCameraPosition = !!i2089[28]
  i2088.shadowNearPlaneOffset = i2089[29]
  i2088.streamingMipmapsMemoryBudget = i2089[30]
  i2088.maximumLODLevel = i2089[31]
  i2088.streamingMipmapsAddAllCameras = !!i2089[32]
  i2088.streamingMipmapsMaxLevelReduction = i2089[33]
  i2088.streamingMipmapsRenderersPerFrame = i2089[34]
  i2088.resolutionScalingFixedDPIFactor = i2089[35]
  i2088.streamingMipmapsMaxFileIORequests = i2089[36]
  i2088.currentQualityLevel = i2089[37]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2099 = data
  i2098.weight = i2099[0]
  i2098.vertices = i2099[1]
  i2098.normals = i2099[2]
  i2098.tangents = i2099[3]
  return i2098
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5}}

Deserializers.requiredComponents = {"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[30],"31":[1],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[33],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[41],"49":[41],"50":[41],"51":[41],"52":[41],"53":[41],"54":[1],"55":[16],"56":[57],"58":[57],"5":[4],"12":[9,4],"59":[4],"60":[4],"8":[5],"10":[9,4],"61":[4],"7":[5],"62":[4],"63":[4],"64":[4],"65":[4],"66":[4],"67":[4],"68":[4],"69":[4],"70":[4],"71":[9,4],"72":[4],"73":[4],"74":[4],"75":[4],"76":[9,4],"77":[4],"78":[18],"79":[18],"19":[18],"80":[18],"81":[1],"82":[1],"83":[4],"84":[16,4],"85":[4,9],"86":[4],"87":[9,4],"88":[16],"89":[9,4],"90":[4],"91":[92],"93":[92],"94":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","GradientSlicedImage","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAdGame";

Deserializers.lunaInitializationTime = "06/30/2026 14:26:56";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1814";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3186";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAdGame";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "294e59f6-0b91-41c3-ad45-634460b256cb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

