// Та же PBR-модель освещения, что и у встроенного Standard (metallic workflow: Color/Glossiness/
// Metallic/EmissionColor — см. Assets/Art/Materials/OctagonMaterials). Этот материал предполагается
// назначенным на ВСЕ фишки сразу.
//
// ZTest Always зафиксирован навсегда — не переключается. "Поверх всего" целиком управляется
// через material.renderQueue (см. HexPieceView.SetAlwaysOnTop: 4000 обычное состояние, 5000 —
// во время активного драга). Очередь 4000 (Overlay) — намеренно выше порога 2500, где Unity
// начинает сортировать объекты СЗАДИ НАПЕРЁД (как прозрачные), а не спереди назад (как обычные
// непрозрачные): при таком порядке отрисовки более БЛИЗКИЙ к камере объект той же очереди рисуется
// ПОСЛЕДНИМ и, раз ZTest всегда проходит, корректно перекрывает более дальний — то есть при
// одинаковой очереди обычная (казалось бы) видимость "ближний поверх дальнего" получается сама
// собой за счёт порядка отрисовки, без реальной проверки буфера глубины. А очередь 5000 у
// перетаскиваемой стопки гарантированно рисуется позже вообще всех объектов на очереди 4000,
// независимо от расстояния до камеры.
Shader "Game/AlwaysOnTop"
{
    Properties
    {
        _Color ("Color", Color) = (1,1,1,1)
        _Glossiness ("Smoothness", Range(0,1)) = 0.5
        _Metallic ("Metallic", Range(0,1)) = 0.0
        _EmissionColor ("Emission Color", Color) = (0,0,0,1)
    }

    SubShader
    {
        Tags { "Queue"="Overlay" "IgnoreProjector"="True" "RenderType"="Opaque" }
        LOD 200

        ZTest Always
        ZWrite On
        Cull Back

        CGPROGRAM
        #pragma surface surf Standard fullforwardshadows
        #pragma target 3.0

        struct Input
        {
            float2 uv_MainTex;
        };

        half _Glossiness;
        half _Metallic;
        fixed4 _Color;
        fixed4 _EmissionColor;

        void surf (Input IN, inout SurfaceOutputStandard o)
        {
            o.Albedo = _Color.rgb;
            o.Metallic = _Metallic;
            o.Smoothness = _Glossiness;
            o.Emission = _EmissionColor.rgb;
            o.Alpha = _Color.a;

            // Без карты occlusion Unity сама структура зануляет это поле (Occlusion = 0), что
            // обнуляет весь непрямой/ambient свет — в оригинальном Standard-материале при
            // отсутствии _OcclusionMap непрямой свет не режется (Occlusion = 1). Без этой строки
            // объект на этом шейдере выглядит заметно темнее оригинала при том же _Color.
            o.Occlusion = 1;
        }
        ENDCG
    }

    FallBack "Diffuse"
}
