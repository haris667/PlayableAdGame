using UnityEngine;
using UnityEngine.UI;

/// Extends Image to inject full-rect normalized UVs into uv1 for each vertex.
/// The LinearGradient shader reads uv1 so the gradient spans the whole image
/// instead of restarting per 9-slice quad.
[AddComponentMenu("UI/Gradient Sliced Image")]
public class GradientSlicedImage : Image
{
    protected override void OnPopulateMesh(VertexHelper vh)
    {
        base.OnPopulateMesh(vh);

        Rect rect = rectTransform.rect;

        UIVertex v = new UIVertex();
        for (int i = 0; i < vh.currentVertCount; i++)
        {
            vh.PopulateUIVertex(ref v, i);

            v.uv1 = new Vector2(
                (v.position.x - rect.xMin) / rect.width,
                (v.position.y - rect.yMin) / rect.height
            );

            vh.SetUIVertex(v, i);
        }
    }
}
