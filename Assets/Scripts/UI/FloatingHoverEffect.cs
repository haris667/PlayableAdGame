using UnityEngine;

// Лёгкое парение по Y с небольшим покачиванием по Z — для декоративных UI-элементов пэкшота
// (например, "OctGuys" — шестиугольник с человечками внутри маски). Обычный LateUpdate, а не
// корутина: Time.time тут считается штатно (в корутинах в билде Luna он не тикает, см. память
// про Luna-транспайлер), плюс эффект должен идти постоянно, а не завершаться, как обычная корутина.
public class FloatingHoverEffect : MonoBehaviour
{
    [Tooltip("Если не задано — используется RectTransform самого объекта, на котором висит скрипт.")]
    [SerializeField] private RectTransform target;
    [Tooltip("Амплитуда парения по Y, в единицах RectTransform.")]
    [SerializeField] private float amplitude = 20f;
    [Tooltip("Частота парения — сколько полных циклов вверх-вниз в секунду.")]
    [SerializeField] private float frequency = 0.5f;
    [Tooltip("Амплитуда лёгкого покачивания по Z (в градусах) — идёт вдвое медленнее самого парения, " +
             "чтобы не совпадать с ним в такт и выглядеть более органично.")]
    [SerializeField] private float rotationAmplitudeDegrees = 3f;

    private Vector2 basePosition;
    private float baseRotationZ;

    private void Awake()
    {
        if (target == null) target = transform as RectTransform;
        basePosition = target.anchoredPosition;
        baseRotationZ = target.localEulerAngles.z;
    }

    private void LateUpdate()
    {
        if (target == null) return;

        float phase = Time.time * frequency * Mathf.PI * 2f;
        target.anchoredPosition = basePosition + Vector2.up * (Mathf.Sin(phase) * amplitude);
        target.localEulerAngles = new Vector3(0f, 0f, baseRotationZ + Mathf.Sin(phase * 0.5f) * rotationAmplitudeDegrees);
    }
}
