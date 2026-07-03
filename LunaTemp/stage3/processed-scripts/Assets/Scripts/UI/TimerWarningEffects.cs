using UnityEngine;
using UnityEngine.UI;

// ЗАГЛУШКА: визуальное предупреждение "осталось меньше трети времени".
// Подписывается на GameTimerUI.OnWarningZoneEntered/OnTimerStopped.
// Пока таймер в зоне предупреждения:
//  - outlineGraphic моргает в синий цвет;
//  - clockHandVisual увеличивается в размере и трясётся;
//  - материалы градиентных Image лоадера (LoaderBG/InnerLoaderBG) перекрашиваются
//    через шейдерные свойства _ColorA/_ColorB (см. LinearGradient.shader) — цвет
//    у них задаётся не через Image.color, а прямо в материале.
public class TimerWarningEffects : MonoBehaviour
{
    [Header("Источник")]
    [SerializeField] private GameTimerUI timer;

    [Header("Аутлайн — моргает синим")]
    [SerializeField] private Graphic outlineGraphic;
    [SerializeField] private Color warningOutlineColor = new Color(0.2f, 0.55f, 1f, 1f);
    [SerializeField] private float blinkSpeed = 4f;

    [Header("Стрелка часов — растёт и трясётся")]
    [Tooltip("Визуальный child ClockHand'а (НЕ сам вращаемый pivot из GameTimerUI, иначе поворот таймера и тряска будут конфликтовать за localEulerAngles).")]
    [SerializeField] private Transform clockHandVisual;
    [SerializeField] private float growScale = 1.2f;
    [SerializeField] private float shakeAmplitudeDegrees = 6f;
    [SerializeField] private float shakeSpeed = 25f;

    [Header("Загрузчик — смена цвета градиента в материале")]
    [SerializeField] private Image[] loaderGradientImages;
    [SerializeField] private Color warningColorA = new Color(0.15f, 0.35f, 1f, 1f);
    [SerializeField] private Color warningColorB = new Color(0.02f, 0.08f, 0.4f, 1f);

    private static readonly int ColorAId = Shader.PropertyToID("_ColorA");
    private static readonly int ColorBId = Shader.PropertyToID("_ColorB");

    private Color originalOutlineColor;
    private Vector3 originalHandScale = Vector3.one;
    private Material[] loaderMaterials;
    private Color[] originalColorA;
    private Color[] originalColorB;
    private bool warningActive;

    private void Awake()
    {
        if (outlineGraphic != null)
            originalOutlineColor = outlineGraphic.color;

        if (clockHandVisual != null)
            originalHandScale = clockHandVisual.localScale;

        if (loaderGradientImages != null && loaderGradientImages.Length > 0)
        {
            loaderMaterials = new Material[loaderGradientImages.Length];
            originalColorA = new Color[loaderGradientImages.Length];
            originalColorB = new Color[loaderGradientImages.Length];

            for (int i = 0; i < loaderGradientImages.Length; i++)
            {
                if (loaderGradientImages[i] == null) continue;

                // .material создаёт индивидуальный инстанс материала для этого Image,
                // чтобы не перекрасить общий ассет для всех остальных пользователей шейдера.
                loaderMaterials[i] = loaderGradientImages[i].material;
                originalColorA[i] = loaderMaterials[i].GetColor(ColorAId);
                originalColorB[i] = loaderMaterials[i].GetColor(ColorBId);
            }
        }
    }

    private void OnEnable()
    {
        if (timer == null) return;
        timer.OnWarningZoneEntered += HandleWarningZoneEntered;
        timer.OnTimerStopped += HandleTimerStopped;
    }

    private void OnDisable()
    {
        if (timer == null) return;
        timer.OnWarningZoneEntered -= HandleWarningZoneEntered;
        timer.OnTimerStopped -= HandleTimerStopped;
    }

    private void HandleWarningZoneEntered() => warningActive = true;

    private void HandleTimerStopped()
    {
        warningActive = false;
        ResetVisuals();
    }

    private void ResetVisuals()
    {
        if (outlineGraphic != null) outlineGraphic.color = originalOutlineColor;
        if (clockHandVisual != null)
        {
            clockHandVisual.localScale = originalHandScale;
            clockHandVisual.localEulerAngles = Vector3.zero;
        }

        if (loaderMaterials == null) return;
        for (int i = 0; i < loaderMaterials.Length; i++)
        {
            if (loaderMaterials[i] == null) continue;
            loaderMaterials[i].SetColor(ColorAId, originalColorA[i]);
            loaderMaterials[i].SetColor(ColorBId, originalColorB[i]);
        }
    }

    // LateUpdate — чтобы тряска/рост стрелки применялись ПОСЛЕ того, как GameTimerUI.Update()
    // выставит базовый поворот на своём (другом) трансформе, без гонки за порядком исполнения.
    private void LateUpdate()
    {
        if (!warningActive) return;

        float blink = (Mathf.Sin(Time.time * blinkSpeed) + 1f) * 0.5f; // 0..1

        if (outlineGraphic != null)
            outlineGraphic.color = Color.Lerp(originalOutlineColor, warningOutlineColor, blink);

        if (clockHandVisual != null)
        {
            float scaleN = Mathf.Lerp(1f, growScale, blink);
            clockHandVisual.localScale = originalHandScale * scaleN;
            clockHandVisual.localEulerAngles = new Vector3(0f, 0f, Mathf.Sin(Time.time * shakeSpeed) * shakeAmplitudeDegrees);
        }

        if (loaderMaterials == null) return;
        for (int i = 0; i < loaderMaterials.Length; i++)
        {
            if (loaderMaterials[i] == null) continue;
            loaderMaterials[i].SetColor(ColorAId, Color.Lerp(originalColorA[i], warningColorA, blink));
            loaderMaterials[i].SetColor(ColorBId, Color.Lerp(originalColorB[i], warningColorB, blink));
        }
    }
}
