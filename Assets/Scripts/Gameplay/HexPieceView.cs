using UnityEngine;

// Висит на каждом заспавненном экземпляре OctagonModel — это одна физическая фишка внутри стопки.
[RequireComponent(typeof(MeshRenderer))]
public class HexPieceView : MonoBehaviour
{
    // Шейдер Game/AlwaysOnTop держит ZTest Always зафиксированным навсегда — "поверх всего"
    // управляется только через renderQueue: 4000 — обычное состояние, 5000 — во время активного
    // драга (гарантированно рисуется позже вообще всех объектов на 4000, см. сам шейдер).
    private const int AlwaysOnTopRenderQueue = 5000;
    private const int NormalRenderQueue = 4000;

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
    // стопка встанет на финальную позицию. Меняет renderQueue прямо на личной копии материала
    // этой фишки (см. SetColor), так что другие фишки того же цвета не задеваются.
    public void SetAlwaysOnTop(bool alwaysOnTop)
    {
        // Нет личной копии материала — либо переключать нечего, либо (что хуже) мы бы задели
        // общий ассет из палитры, попытавшись отредактировать его напрямую.
        if (!needsAlwaysOnTopMaterial) return;

        if (meshRenderer == null) meshRenderer = GetComponent<MeshRenderer>();

        meshRenderer.material.renderQueue = alwaysOnTop ? AlwaysOnTopRenderQueue : NormalRenderQueue;
    }
}
