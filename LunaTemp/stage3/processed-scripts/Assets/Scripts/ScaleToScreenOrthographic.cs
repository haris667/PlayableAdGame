using UnityEngine;

[ExecuteInEditMode]
public class ScreenScaler : MonoBehaviour
{
    private Camera mainCamera;

    void Start()
    {
        mainCamera = Camera.main;
        Resize();
    }

    void LateUpdate()
    {
        // В редакторе обновляем постоянно, в игре — только если изменилось разрешение
        #if UNITY_EDITOR
        Resize();
        #else
        if (transform.hasChanged) 
        {
            Resize();
            transform.hasChanged = false;
        }
        #endif
    }

    public void Resize()
    {
        if (mainCamera == null) mainCamera = Camera.main;
        if (mainCamera == null) return;

        float height = 0f;
        float width = 0f;

        if (mainCamera.orthographic)
        {
            // Расчет для ортографической камеры
            height = mainCamera.orthographicSize * 2f;
            width = height * mainCamera.aspect;
        }
        else
        {
            // Расчет для перспективной камеры
            // Находим чистую дистанцию по прямой оси от камеры до плоскости
            float distance = Vector3.Dot(transform.position - mainCamera.transform.position, mainCamera.transform.forward);
            
            if (distance <= 0) return; // Защита, если объект оказался сзади камеры

            height = 2.0f * distance * Mathf.Tan(mainCamera.fieldOfView * 0.5f * Mathf.Deg2Rad);
            width = height * mainCamera.aspect;
        }

        // ВАЖНО: Стандартный Plane в Unity лежит горизонтально (по осям X и Z).
        // Чтобы он смотрел на камеру как экран, его Scale нужно крутить по X и Z, а не по Y.
        transform.localScale = new Vector3(width / 10f, 1f, height / 10f);
    }
}