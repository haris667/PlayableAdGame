Shader "Custom/ShadowCatcher"
{
    Properties
    {
        _Color ("Shadow Color", Color) = (0, 0, 0, 0.6)
    }

    // Shared vertex/fragment code for both forward passes
    CGINCLUDE
    #include "UnityCG.cginc"
    #include "AutoLight.cginc"

    half4 _Color;

    struct v2f_shadow
    {
        float4 pos : SV_POSITION;
        LIGHTING_COORDS(0, 1)
    };

    v2f_shadow vert_shadow(appdata_full v)
    {
        v2f_shadow o;
        o.pos = UnityObjectToClipPos(v.vertex);
        TRANSFER_VERTEX_TO_FRAGMENT(o);
        return o;
    }

    half4 frag_shadow(v2f_shadow i) : SV_Target
    {
        half atten = LIGHT_ATTENUATION(i);
        // atten=1 (свет) → alpha=0 (прозрачно), atten=0 (тень) → alpha=_Color.a
        return half4(_Color.rgb, lerp(_Color.a, 0, atten));
    }
    ENDCG

    // ── Desktop / GLES3+ ─────────────────────────────────────────────────
    SubShader
    {
        // AlphaTest+49: рендерится в opaque-фазе, квад попадает в depth
        // prepass камеры ДО сбора screen-space теней.
        Tags { "Queue"="AlphaTest+49" "RenderType"="TransparentCutout" "IgnoreProjector"="True" }

        // Pass 1 — только запись глубины (цвет не выводим).
        // Именно этот пасс позволяет LIGHT_ATTENUATION получить корректное
        // значение тени на квад'е: без него shadow map не знает о его позиции.
        Pass
        {
            ColorMask 0
            ZWrite On
            #pragma exclude_renderers gles

            CGPROGRAM
            #pragma vertex   vert
            #pragma fragment frag
            #pragma target 2.0
            #include "UnityCG.cginc"

            float4 vert(appdata_full v) : SV_POSITION
            { return UnityObjectToClipPos(v.vertex); }

            half4 frag() : SV_Target { return (half4)0; }
            ENDCG
        }

        // Pass 2 — основной направленный свет
        Pass
        {
            Tags { "LightMode"="ForwardBase" }
            Blend SrcAlpha OneMinusSrcAlpha
            ZWrite Off

            CGPROGRAM
            #pragma vertex   vert_shadow
            #pragma fragment frag_shadow
            #pragma multi_compile_fwdbase
            #pragma target 3.0
            #pragma exclude_renderers gles
            ENDCG
        }

        // Pass 3 — дополнительные источники света (точечные, прожекторы)
        Pass
        {
            Tags { "LightMode"="ForwardAdd" }
            Blend SrcAlpha OneMinusSrcAlpha
            ZWrite Off

            CGPROGRAM
            #pragma vertex   vert_shadow
            #pragma fragment frag_shadow
            #pragma multi_compile_fwdadd_fullshadows
            #pragma target 3.0
            #pragma exclude_renderers gles
            ENDCG
        }
    }

    // ── WebGL1 / GLES2 — прозрачный no-op ────────────────────────────────
    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" "IgnoreProjector"="True" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Off

        Pass
        {
            CGPROGRAM
            #pragma vertex   vert
            #pragma fragment frag
            #pragma target 2.0
            #include "UnityCG.cginc"

            struct v2f { float4 pos : SV_POSITION; };
            v2f vert(appdata_base v) { v2f o; o.pos = UnityObjectToClipPos(v.vertex); return o; }
            fixed4 frag(v2f i) : SV_Target { return fixed4(0, 0, 0, 0); }
            ENDCG
        }
    }

    FallBack "Mobile/VertexLit"
}
