using System.Collections;
using UnityEngine;
using UnityEngine.UI;

// Полноэкранная "подсветка" тутора: затемняет буквально всё (панель уже выше всех остальных
// канвасов в иерархии, так что перекрывает и 3D-сцену, и весь остальной UI сама по себе — это
// не задача этого скрипта). Задача именно этого скрипта — заставить стопку-источник и
// ячейку-цель ТЕКУЩЕЙ подсказки быть видимыми ПОВЕРХ этой панели, пиксель-в-пиксель точно.
//
// Render Queue/ZTest-трюки (как у HexPieceView.SetAlwaysOnTop для драга) тут не помогут: они
// работают только ВНУТРИ рендера одной камеры, а Canvas в режиме Screen Space - Overlay
// компонуется отдельным проходом ПОСЛЕ вообще всех камер — 3D-объект никаким ZTest/Queue не
// пробьётся "сквозь" уже готовый Overlay-кадр.
//
// Поэтому вместо этого — отдельная камера-подсветка, которая видит ТОЛЬКО подсвеченные объекты
// (слой TutorialSpotlight, назначается через HexStack.SetLayer/BoardCell.SetLayer из
// TutorialHandController) и рендерит их в RenderTexture с прозрачным фоном; эта текстура
// показывается через RawImage на ЭТОМ ЖЕ Canvas'е, поверх затемняющей панели (позже по порядку
// в иерархии — рисуется после неё). Сама рука тутора рисуется ещё выше — см.
// TutorialHandController.Start, который поднимает sortingOrder своего канваса выше этого.
//
// Окончательно отказались от depth-препасса (доп. камера + подмена материалов через
// Camera.onPreRender/onPostRender, чтобы подсвеченный объект перекрывался более близкими
// затемнёнными соседями) — не заработал на платформе экспорта (Luna Playworks) так же, как до
// этого не заработали Camera.SetReplacementShader (CS1061 на компиляции) и CommandBuffer
// (заблокирован в рантайме). Подсвеченный объект теперь всегда показывается целиком поверх
// затемнения, даже если в реальной сцене он частично закрыт другим объектом — сознательно принятое
// ограничение этой платформы.
public class TutorialSpotlightOverlay : MonoBehaviour
{
    [Header("Существующие объекты сцены")]
    [SerializeField] private Camera mainCamera;
    [Tooltip("Камера-подсветка — видит ТОЛЬКО слой TutorialSpotlight, рендерит в RenderTexture.")]
    [SerializeField] private Camera revealCamera;
    [Tooltip("Корневой GameObject Canvas'а подсветки — Show/Hide включают/выключают именно его.")]
    [SerializeField] private GameObject overlayRoot;
    [Tooltip("RawImage, показывающий RenderTexture камеры-подсветки — должен идти ПОЗЖЕ " +
             "затемняющей Image в иерархии этого Canvas'а (то есть рисоваться поверх неё).")]
    [SerializeField] private RawImage revealImage;
    [Tooltip("CanvasGroup на корневом объекте панели — через её Alpha плавно проигрывается Show/Hide.")]
    [SerializeField] private CanvasGroup overlayCanvasGroup;

    [Header("Настройки")]
    [Tooltip("Слой, который видит камера-подсветка — должен существовать в Project Settings > Tags and Layers.")]
    [SerializeField] private string spotlightLayerName = "TutorialSpotlight";
    [SerializeField] private float fadeDuration = 0.3f;

    public int SpotlightLayer { get; private set; } = -1;
    public Canvas OverlayCanvas { get; private set; }

    private RenderTexture revealTexture;
    private Coroutine fadeRoutine;

    private void Awake()
    {
        SpotlightLayer = LayerMask.NameToLayer(spotlightLayerName);
        if (SpotlightLayer < 0)
        {
            Debug.LogError($"TutorialSpotlightOverlay: слой '{spotlightLayerName}' не найден в " +
                            "Project Settings > Tags and Layers — добавьте его вручную.", this);
            enabled = false;
            return;
        }

        if (mainCamera == null) mainCamera = Camera.main;
        if (overlayRoot != null) OverlayCanvas = overlayRoot.GetComponent<Canvas>();

        SetupRevealCamera();
        HideImmediate();
    }

    private void SetupRevealCamera()
    {
        if (revealCamera == null) return;

        // Оптика (FOV/клиппинг/ортографичность и т.д.) копируется с основной камеры, чтобы
        // картинка совпадала пиксель-в-пиксель — позицию/поворот/родителя настраиваете сами
        // в сцене (обычно — как дочерний объект основной камеры с нулевым локальным смещением).
        if (mainCamera != null) revealCamera.CopyFrom(mainCamera);

        // Прозрачный фон — то, что реально нарисовано (подсвеченные объекты), выйдет с альфой 1
        // поверх него, и именно по альфе RawImage "просвечивает" только эти пиксели.
        revealCamera.clearFlags = CameraClearFlags.SolidColor;
        revealCamera.backgroundColor = new Color(0f, 0f, 0f, 0f);
        revealCamera.cullingMask = 1 << SpotlightLayer;
        revealCamera.depth = -1;

        revealTexture = new RenderTexture(Mathf.Max(Screen.width, 1), Mathf.Max(Screen.height, 1), 24, RenderTextureFormat.ARGB32);
        revealCamera.targetTexture = revealTexture;

        if (revealImage != null) revealImage.texture = revealTexture;
    }

    // Камера с targetTexture рендерит КАЖДЫЙ кадр независимо от того, показывается ли где-то её
    // RenderTexture — Camera.enabled нужно выключать явно, иначе она продолжала бы работать все
    // оставшееся время ролика уже после того, как тутор закончился и панель скрыта навсегда.
    // Включается СРАЗУ (нужен живой кадр к моменту, когда альфа начнёт расти) и выключается
    // только ПОСЛЕ того, как альфа полностью дойдёт до 0 (см. FadeTo) — иначе в момент
    // прозрачности показывался бы замороженный старый кадр.
    public void Show()
    {
        if (fadeRoutine != null) StopCoroutine(fadeRoutine);
        if (overlayRoot != null) overlayRoot.SetActive(true);
        if (revealCamera != null) revealCamera.enabled = true;
        fadeRoutine = StartCoroutine(FadeTo(1f, disableAtEnd: false));
    }

    public void Hide()
    {
        if (fadeRoutine != null) StopCoroutine(fadeRoutine);
        fadeRoutine = StartCoroutine(FadeTo(0f, disableAtEnd: true));
    }

    // Мгновенное скрытие без анимации — только для самой первой инициализации в Awake, чтобы
    // на первом кадре ролика не мелькнула на миг видимая, ещё не притушенная панель.
    private void HideImmediate()
    {
        if (fadeRoutine != null) StopCoroutine(fadeRoutine);
        if (overlayCanvasGroup != null) overlayCanvasGroup.alpha = 0f;
        if (overlayRoot != null) overlayRoot.SetActive(false);
        if (revealCamera != null) revealCamera.enabled = false;
    }

    private IEnumerator FadeTo(float targetAlpha, bool disableAtEnd)
    {
        if (overlayCanvasGroup == null)
        {
            if (disableAtEnd) DisableOverlay();
            yield break;
        }

        float startAlpha = overlayCanvasGroup.alpha;
        float t = 0f;
        while (t < fadeDuration)
        {
            t += Time.deltaTime;
            float n = fadeDuration > 0f ? t / fadeDuration : 1f;
            overlayCanvasGroup.alpha = Mathf.Lerp(startAlpha, targetAlpha, n);
            yield return null;
        }

        overlayCanvasGroup.alpha = targetAlpha;
        if (disableAtEnd) DisableOverlay();
    }

    private void DisableOverlay()
    {
        if (overlayRoot != null) overlayRoot.SetActive(false);
        if (revealCamera != null) revealCamera.enabled = false;
    }
}
