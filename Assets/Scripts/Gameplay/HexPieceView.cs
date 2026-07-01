using UnityEngine;

// Висит на каждом заспавненном экземпляре OctagonModel — это одна физическая фишка внутри стопки.
[RequireComponent(typeof(MeshRenderer))]
public class HexPieceView : MonoBehaviour
{
    private MeshRenderer meshRenderer;

    public HexColor Color { get; private set; }

    public void SetColor(HexColor color, HexColorPalette palette)
    {
        Color = color;

        if (meshRenderer == null)
            meshRenderer = GetComponent<MeshRenderer>();

        var material = palette.GetMaterial(color);
        if (material != null)
            meshRenderer.sharedMaterial = material;
    }
}
