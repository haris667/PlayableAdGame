// Простой блюр фона под UI-элементом (например, панель-подложка под поп-апом FAIL).
// Работает через GrabPass: перед отрисовкой этого Image Unity "хватает" уже отрисованный кадр
// (всё, что нарисовано ДО этого элемента в порядке отрисовки) в _GrabTexture.
//
// _Passes теперь — РАДИУС ядра в пикселях сетки (radius=1 -> 3x3 = 9 сэмплов, radius=2 -> 5x5 = 25,
// radius=3 -> 7x7 = 49 и т.д.), а не разреженные "кольца" на увеличивающемся расстоянии, как было
// раньше (та версия давала пробелы между кольцами и выглядела как искажение/двоение картинки,
// а не размытие). Веса сэмплов — гауссовы (по расстоянию от центра), а не плоское усреднение —
// это и даёт мягкое, а не "квадратное" размытие. Не настоящие несколько проходов рендера (это
// потребовало бы отдельных RenderTexture/CommandBuffer в C#) — вся плотная сетка считается в одном
// фрагментном проходе; больше _Passes = мягче блюр, но больше сэмплов текстуры за кадр.
//
// ВАЖНО: GrabPass требует, чтобы Canvas был в режиме Screen Space - Camera или World Space
// (с назначенной камерой) — в Screen Space - Overlay сцена рендерится отдельно от UI, и
// _GrabTexture не захватит то, что нужно. Разместите Image с этим материалом в иерархии
// ПОСЛЕ (то есть ниже по порядку отрисовки, визуально "над") того, что должно быть размыто,
// и ПЕРЕД самим поп-апом.
Shader "UI/SimpleBackgroundBlur"
{
    Properties
    {
        _Color ("Tint Color", Color) = (1,1,1,1)
        _Size ("Blur Size", Range(0, 20)) = 4
        _Passes ("Passes (радиус ядра, больше = мягче и дороже)", Range(1, 5)) = 3
    }

    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "PreviewType"="Plane" }

        Cull Off
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha

        GrabPass { "_GrabTexture" }

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 3.0
            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float4 color : COLOR;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                float4 grabPos : TEXCOORD0;
                fixed4 color : COLOR;
            };

            sampler2D _GrabTexture;
            float4 _GrabTexture_TexelSize;
            fixed4 _Color;
            float _Size;
            float _Passes;

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.grabPos = ComputeGrabScreenPos(o.vertex);
                o.color = v.color * _Color;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float2 uv = i.grabPos.xy / i.grabPos.w;
                float2 texel = _GrabTexture_TexelSize.xy * _Size;

                // Плотная сетка (2*radius+1)^2 без пропусков между сэмплами — предыдущая версия
                // сэмплировала только на дискретных "кольцах" (texel*1, texel*2, texel*3...) с
                // большими пустыми промежутками между ними, из-за чего картинка не размывалась,
                // а как бы двоилась/плыла ("камера водки выпила"). Веса — гауссовы по расстоянию
                // от центра (exp(-r^2 / 2*sigma^2)), а не плоское усреднение — это даёт мягкое,
                // естественно затухающее размытие вместо "квадратного" вида box blur.
                int radius = max(1, (int)_Passes);
                float sigma = radius * 0.5;
                float sigmaSqr2 = 2.0 * sigma * sigma;

                fixed4 sum = fixed4(0, 0, 0, 0);
                float weightSum = 0;

                for (int x = -radius; x <= radius; x++)
                {
                    for (int y = -radius; y <= radius; y++)
                    {
                        float weight = exp(-(x * x + y * y) / sigmaSqr2);

                        // tex2Dlod вместо tex2D: GrabTexture без мипмапов, и, что важнее, tex2D
                        // внутри цикла с НЕконстантным числом итераций (_Passes — свойство
                        // материала, не compile-time константа) не может посчитать градиент для
                        // мипмаппинга — компилятор HLSL падает с ошибкой, и Unity показывает
                        // материал розовым. tex2Dlod явно задаёт уровень мипа (0), градиент не нужен.
                        sum += tex2Dlod(_GrabTexture, float4(uv + float2(x, y) * texel, 0, 0)) * weight;
                        weightSum += weight;
                    }
                }

                sum /= weightSum;

                return sum * i.color;
            }
            ENDCG
        }
    }

    FallBack Off
}
