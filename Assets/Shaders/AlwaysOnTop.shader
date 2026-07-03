// Та же PBR-модель освещения, что и у встроенного Standard (metallic workflow: Color/Glossiness/
// Metallic/EmissionColor — см. Assets/Art/Materials/OctagonMaterials). Этот материал предполагается
// назначенным на ВСЕ фишки сразу.
//
// _ZTest снова переключаемое свойство (управляется из HexPieceView.SetAlwaysOnTop), а НЕ жёстко
// Always — потому что "поверх всего" (ZTest Always + очередь >2500, чтобы порядок отрисовки
// сортировался сзади-наперёд и правильно перекрывал соседей — см. ниже) реально нужен ТОЛЬКО пока
// стопку активно тащат. Очередь >2500 полностью исключает объект из depth-texture, по которой
// строятся принимаемые тени (screen-space shadows в Built-in RP) — если держать этот режим
// постоянно, фишки никогда не принимают тени друг от друга. В состоянии покоя (не во время драга)
// используется обычный ZTest LEqual и обычная очередь (Geometry, ~2000) — тени работают как на
// стандартном материале, а "поверх всего" включается лишь на время самого драга, когда рассинхрон
// теней на бросающейся в глаза стопке куда менее заметен, чем постоянно отсутствующие тени.
Shader "Game/AlwaysOnTop"
{
    Properties
    {
        _Color ("Color", Color) = (1,1,1,1)
        _Glossiness ("Smoothness", Range(0,1)) = 0.5
        _Metallic ("Metallic", Range(0,1)) = 0.0
        _EmissionColor ("Emission Color", Color) = (0,0,0,1)
        [Enum(UnityEngine.Rendering.CompareFunction)] _ZTest ("Z Test (переключается из кода)", Float) = 4
    }

    SubShader
    {
        Tags { "Queue"="Geometry" "IgnoreProjector"="True" "RenderType"="Opaque" }
        LOD 200

        // Явный ShadowCaster нужен, чтобы отбрасывание тени НЕ зависело от переключаемого _ZTest
        // основного прохода (в частности, оставалось нормальным LEqual даже пока стопку тащат и
        // основной проход временно стоит на Always) — без этого Surface Shader сам сгенерировал бы
        // ShadowCaster, унаследовав текущее значение _ZTest, и карта теней строилась бы неверно.
        Pass
        {
            Name "ShadowCaster"
            Tags { "LightMode"="ShadowCaster" }
            Cull Back

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_shadowcaster
            #include "UnityCG.cginc"

            // Тот же уровень отсечки, что и в основном проходе (см. _ClipY ниже) — иначе фишка,
            // уже провалившаяся под доску и невидимая, продолжала бы отбрасывать фантомную тень.
            float _ClipY;

            struct v2f
            {
                float3 worldPos : TEXCOORD1;
                V2F_SHADOW_CASTER;
            };

            v2f vert(appdata_base v)
            {
                v2f o;
                o.worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
                TRANSFER_SHADOW_CASTER_NORMALOFFSET(o)
                return o;
            }

            float4 frag(v2f i) : SV_Target
            {
                clip(i.worldPos.y - _ClipY);
                SHADOW_CASTER_FRAGMENT(i)
            }
            ENDCG
        }

        ZTest [_ZTest]
        ZWrite On
        Cull Back

        CGPROGRAM
        #pragma surface surf Standard fullforwardshadows
        #pragma target 3.0

        struct Input
        {
            float2 uv_MainTex;
            float3 worldPos;
        };

        half _Glossiness;
        half _Metallic;
        fixed4 _Color;
        fixed4 _EmissionColor;

        // Глобальный уровень "пола" по мировому Y — задаётся один раз из BoardManager
        // (Shader.SetGlobalFloat("_ClipY", ...)), общий сразу для всех фишек на этом шейдере.
        // Фишка, проваливаясь под доску (см. BoardManager.AnimateDisappear), опускается ниже этого
        // уровня и здесь просто перестаёт рисоваться — чистая маска вместо ручного включения/
        // выключения Renderer по какой-то оси.
        float _ClipY;

        void surf (Input IN, inout SurfaceOutputStandard o)
        {
            clip(IN.worldPos.y - _ClipY);

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
