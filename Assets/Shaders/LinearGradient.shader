Shader "Custom/LinearGradient"
{
    Properties
    {
        // Required by Unity UI — holds the sprite texture
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}

        _ColorA    ("Color A (Start)",      Color)        = (1, 0, 0, 1)
        _ColorB    ("Color B (End)",        Color)        = (0, 0, 1, 1)
        _Angle     ("Angle (degrees)",      Range(0, 360)) = 0
        _Midpoint  ("Midpoint",             Range(0.01, 0.99)) = 0.5
        _Hardness  ("Hardness",             Range(0, 1)) = 0

        // Required for UI Mask / Scroll Rect support
        _StencilComp      ("Stencil Comparison", Float) = 8
        _Stencil          ("Stencil ID",         Float) = 0
        _StencilOp        ("Stencil Operation",  Float) = 0
        _StencilWriteMask ("Stencil Write Mask", Float) = 255
        _StencilReadMask  ("Stencil Read Mask",  Float) = 255
        _ColorMask        ("Color Mask",         Float) = 15
    }

    SubShader
    {
        Tags
        {
            "Queue"             = "Transparent"
            "IgnoreProjector"   = "True"
            "RenderType"        = "Transparent"
            "PreviewType"       = "Plane"
            "CanUseSpriteAtlas" = "True"
        }

        Stencil
        {
            Ref       [_Stencil]
            Comp      [_StencilComp]
            Pass      [_StencilOp]
            ReadMask  [_StencilReadMask]
            WriteMask [_StencilWriteMask]
        }

        Cull      Off
        Lighting  Off
        ZWrite    Off
        ZTest     [unity_GUIZTestMode]
        Blend     SrcAlpha OneMinusSrcAlpha
        ColorMask [_ColorMask]

        Pass
        {
            CGPROGRAM
            #pragma vertex   vert
            #pragma fragment frag
            #pragma target 2.0

            #include "UnityCG.cginc"
            #include "UnityUI.cginc"

            sampler2D _MainTex;
            fixed4    _ColorA;
            fixed4    _ColorB;
            float     _Angle;
            float     _Midpoint;
            float     _Hardness;
            float4    _ClipRect;

            struct appdata
            {
                float4 vertex : POSITION;
                float4 color  : COLOR;
                float2 uv0    : TEXCOORD0;
                // uv1 is filled by GradientSlicedImage with full-rect 0-1 position
                float2 uv1    : TEXCOORD1;
            };

            struct v2f
            {
                float4 pos      : SV_POSITION;
                fixed4 color    : COLOR;
                float2 uv0      : TEXCOORD0;
                float2 uv1      : TEXCOORD1;
                float4 worldPos : TEXCOORD2;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.pos      = UnityObjectToClipPos(v.vertex);
                o.worldPos = mul(unity_ObjectToWorld, v.vertex);
                o.color    = v.color;
                o.uv0      = v.uv0;
                o.uv1      = v.uv1;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                // Sprite alpha — preserves sliced corners/borders shape
                fixed4 sprite = tex2D(_MainTex, i.uv0);

                // Gradient computed over the FULL image rect via uv1
                float  rad      = _Angle * (3.14159265 / 180.0);
                float2 dir      = float2(cos(rad), sin(rad));
                float2 centered = i.uv1 - 0.5;
                float  proj     = dot(centered, dir);
                float  range    = abs(dir.x) * 0.5 + abs(dir.y) * 0.5;
                float  t        = saturate(proj / (2.0 * range) + 0.5);

                // Remap t through midpoint: piecewise-linear so the 50% blend
                // point sits at _Midpoint instead of always at 0.5.
                float tLo  = t / _Midpoint * 0.5;
                float tHi  = 0.5 + (t - _Midpoint) / (1.0 - _Midpoint) * 0.5;
                float tMid = t < _Midpoint ? tLo : tHi;

                // Hardness: сжимает зону перехода вокруг midpoint.
                // 0 = плавный на всю длину, 1 = мгновенный перепад.
                float halfWidth = (1.0 - _Hardness) * 0.5;
                float tFinal    = saturate((tMid - (0.5 - halfWidth)) / max(2.0 * halfWidth, 0.0001));

                fixed4 grad = lerp(_ColorA, _ColorB, tFinal);

                // Sprite alpha cuts out the shape; vertex color carries Image.color tint
                fixed4 col  = fixed4(grad.rgb, grad.a * sprite.a) * i.color;

                // Respect UI clipping (Mask, ScrollRect, etc.)
                col.a *= UnityGet2DClipping(i.worldPos.xy, _ClipRect);

                return col;
            }
            ENDCG
        }
    }

    FallBack "UI/Default"
}
