Shader "Custom/LinearGradient"
{
    Properties
    {
        _ColorA ("Color A (Start)", Color) = (1, 0, 0, 1)
        _ColorB ("Color B (End)", Color) = (0, 0, 1, 1)
        _Angle ("Angle (degrees)", Range(0, 360)) = 0
    }

    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue"="Transparent" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Off

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            fixed4 _ColorA;
            fixed4 _ColorB;
            float  _Angle;

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv     : TEXCOORD0;
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
                float2 uv  : TEXCOORD0;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv  = v.uv;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                float rad = _Angle * (3.14159265 / 180.0);
                float2 dir = float2(cos(rad), sin(rad));

                // Project UV (centered at 0.5) onto gradient direction.
                // Remap [-0.707, 0.707] → [0, 1] so the full gradient
                // always fills the quad regardless of angle.
                float2 centered = i.uv - 0.5;
                float  proj = dot(centered, dir);

                float halfRange = abs(dir.x) * 0.5 + abs(dir.y) * 0.5;
                float  t = saturate(proj / (2.0 * halfRange) + 0.5);

                return lerp(_ColorA, _ColorB, t);
            }
            ENDCG
        }
    }

    FallBack Off
}
