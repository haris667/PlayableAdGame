using UnityEngine;
using UnityEngine.Rendering;

// Висит на каждом заспавненном экземпляре OctagonModel — это одна физическая фишка внутри стопки.
[RequireComponent(typeof(MeshRenderer))]
public class HexPieceView : MonoBehaviour
{
    // "Поверх всего" (ZTest Always + очередь выше 2500, чтобы сортировка шла сзади-наперёд и
    // порядок отрисовки сам гарантировал верную видимость независимо от реальной глубины — см.
    // шейдер) включается ТОЛЬКО на время активного драга: очередь выше 2500 полностью исключает
    // объект из depth-texture, по которой строятся принимаемые тени, так что держать этот режим
    // постоянно значило бы, что фишки никогда не принимают тени друг от друга. В состоянии покоя —
    // обычный LEqual и обычная очередь (Geometry), тени работают как на стандартном материале.
    private static readonly int ZTestPropertyId = Shader.PropertyToID("_ZTest");
    private const int AlwaysOnTopRenderQueue = 5000;
    private const int NormalRenderQueue = (int)RenderQueue.Geometry;

    // Личная копия материала нужна только фишкам, которые вообще могут когда-нибудь попасть в
    // SetAlwaysOnTop (стопки лотка, которые реально таскают) — стартовым неподвижным стопкам поля
    // она не нужна вообще. По умолчанию false (для процедурно создаваемых стопок поля); стопки
    // лотка выставляют true сами при спавне своих фишек, см. HexStack.piecesNeedAlwaysOnTopMaterial.
    [SerializeField] private bool needsAlwaysOnTopMaterial = false;

    private MeshRenderer meshRenderer;

    public HexColor Color { get; private set; }

    public void SetNeedsAlwaysOnTopMaterial(bool value) => needsAlwaysOnTopMaterial = value;

    public void SetColor(HexColor color, HexColorPalette palette)
    {
        Color = color;

        if (meshRenderer == null)
            meshRenderer = GetComponent<MeshRenderer>();

        var sourceMaterial = palette.GetMaterial(color);
        if (sourceMaterial == null) return;

        if (!needsAlwaysOnTopMaterial)
        {
            meshRenderer.sharedMaterial = sourceMaterial;
            return;
        }

        // Личная копия материала — иначе все фишки одного цвета делили бы один и тот же ассет
        // из палитры, и смена renderQueue на одной стопке во время драга задела бы заодно все
        // остальные стопки того же цвета. Имя явно переименовываем — new Material(...), в отличие
        // от геттера Renderer.material, сам по себе суффикс "(Instance)" не добавляет, так что
        // в инспекторе копия иначе выглядела бы неотличимо от общего ассета из палитры.
        var instance = new Material(sourceMaterial) { name = sourceMaterial.name + " (Piece Instance)" };
        meshRenderer.material = instance;
    }

    // См. StackDragHandler — включается на время активного драга, выключается перед тем, как
    // стопка встанет на финальную позицию. Меняет renderQueue и _ZTest прямо на личной копии
    // материала этой фишки (см. SetColor), так что другие фишки того же цвета не задеваются.
    public void SetAlwaysOnTop(bool alwaysOnTop)
    {
        // Нет личной копии материала — либо переключать нечего, либо (что хуже) мы бы задели
        // общий ассет из палитры, попытавшись отредактировать его напрямую.
        if (!needsAlwaysOnTopMaterial) return;

        if (meshRenderer == null) meshRenderer = GetComponent<MeshRenderer>();

        var material = meshRenderer.material;
        material.renderQueue = alwaysOnTop ? AlwaysOnTopRenderQueue : NormalRenderQueue;
        material.SetInt(ZTestPropertyId, (int)(alwaysOnTop ? CompareFunction.Always : CompareFunction.LessEqual));
    }
}
