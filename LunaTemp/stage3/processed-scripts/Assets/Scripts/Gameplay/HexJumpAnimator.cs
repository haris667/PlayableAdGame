using System.Collections;
using UnityEngine;

// Анимации цепной реакции: фишка перелетает дугой из одной стопки в другую,
// опустевшая/однотонная стопка плавно "схлопывается" и исчезает.
public class HexJumpAnimator : MonoBehaviour
{
    [Header("Дуга перелёта")]
    [SerializeField] private float arcHeight = 0.25f;
    [SerializeField] private AnimationCurve easing = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);

    [Header("Переворот фишки в полёте (ЗАГЛУШКА, для замены на финальный визуал)")]
    [Tooltip("На сколько градусов фишка встаёт на ребро в сторону соседней стопки в верхней точке дуги. " +
             "90 = полностью вертикально в середине пути, затем падает плашмя на новую стопку.")]
    [SerializeField] private float flipPeakDegrees = 90f;

    // ЗАГЛУШКА: фишка летит дугой к соседней стопке и одновременно переворачивается —
    // встаёт на ребро "в сторону" стопки-получателя к середине пути, а затем плашмя
    // падает на неё к концу перелёта. Ось переворота — горизонтальная, перпендикулярная
    // направлению движения, так что переворот всегда "заваливается" по ходу полёта.
    public IEnumerator AnimatePieceTransfer(Transform piece, Vector3 from, Vector3 to, float duration)
    {
        if (piece == null) yield break;

        var startRotation = piece.rotation;
        var flatDirection = to - from;
        flatDirection.y = 0f;
        var flipAxis = flatDirection.sqrMagnitude > 0.0001f
            ? Vector3.Cross(Vector3.up, flatDirection.normalized)
            : Vector3.right;

        float t = 0f;
        while (t < duration)
        {
            t += Time.deltaTime;
            float n = easing.Evaluate(Mathf.Clamp01(t / duration));
            float arcPhase = Mathf.Sin(n * Mathf.PI); // 0 в начале и в конце, 1 в середине пути

            var pos = Vector3.Lerp(from, to, n);
            pos.y += arcPhase * arcHeight;
            piece.position = pos;

            piece.rotation = startRotation * Quaternion.AngleAxis(arcPhase * flipPeakDegrees, flipAxis);

            yield return null;
        }

        piece.position = to;
        piece.rotation = startRotation;
    }

    public IEnumerator AnimateDisappear(Transform stackRoot, float duration)
    {
        if (stackRoot == null) yield break;

        var startScale = stackRoot.localScale;
        float t = 0f;
        while (t < duration)
        {
            t += Time.deltaTime;
            stackRoot.localScale = Vector3.Lerp(startScale, Vector3.zero, Mathf.Clamp01(t / duration));
            yield return null;
        }

        stackRoot.localScale = Vector3.zero;
    }
}
