using System.Collections;
using UnityEngine;

// Драг-н-дроп стопки из лотка: зажали — потащили по экрану — отпустили над свободной ячейкой поля.
// Если под пальцем/курсором нет свободной ячейки в радиусе snapMaxDistance — стопка плавно
// возвращается на исходное место.
[RequireComponent(typeof(HexStack))]
public class StackDragHandler : MonoBehaviour
{
    [SerializeField] private BoardManager board;
    [SerializeField] private float snapMaxDistance = 0.4f;
    [SerializeField] private float dragHeight = 0.3f;
    [SerializeField] private float minDragDistanceToCountAsMoved = 0.05f;
    [SerializeField] private float returnDuration = 0.2f;

    // Эти статические события слушает TutorialHandController — ему не важно, какую именно
    // из трёх стопок лотка взял игрок, только сам факт.
    public static event System.Action OnAnyStackGrabbed;
    public static event System.Action OnAnyStackMoved;
    public static event System.Action<bool> OnAnyStackReleased; // true = стопка успешно встала на поле

    private Camera cam;
    private HexStack stack;
    private Vector3 originalPosition;
    private Vector3 dragStartPosition;
    private Plane dragPlane;
    private bool dragging;
    private bool hasMoved;

    private void Awake()
    {
        stack = GetComponent<HexStack>();
        cam = Camera.main;
        if (board == null) board = FindFirstObjectByType<BoardManager>();
    }

    public void SetBoard(BoardManager boardManager) => board = boardManager;

    private void OnMouseDown()
    {
        if (board == null || board.IsChainRunning) return;

        dragging = true;
        hasMoved = false;
        originalPosition = transform.position;
        dragStartPosition = transform.position;
        dragPlane = new Plane(Vector3.up, transform.position);

        OnAnyStackGrabbed?.Invoke();
    }

    private void OnMouseDrag()
    {
        if (!dragging) return;

        var ray = cam.ScreenPointToRay(Input.mousePosition);
        if (!dragPlane.Raycast(ray, out float distance)) return;

        var point = ray.GetPoint(distance);
        point.y = originalPosition.y + dragHeight;
        transform.position = point;

        if (!hasMoved && Vector3.Distance(point, dragStartPosition) > minDragDistanceToCountAsMoved)
        {
            hasMoved = true;
            OnAnyStackMoved?.Invoke();
        }
    }

    private void OnMouseUp()
    {
        if (!dragging) return;
        dragging = false;

        // Проверяем близость по XZ, игнорируя dragHeight — иначе визуальный подъём стопки
        // во время драга уменьшал бы эффективный радиус прилипания к ячейке.
        var dropPoint = transform.position;
        dropPoint.y = originalPosition.y;

        var cell = board.GetClosestEmptyCell(dropPoint, snapMaxDistance);
        if (cell != null)
        {
            board.PlaceStack(stack, cell);
            enabled = false; // стопка установлена — больше её двигать нельзя
            OnAnyStackReleased?.Invoke(true);
            return;
        }

        StartCoroutine(ReturnToOrigin());
        OnAnyStackReleased?.Invoke(false);
    }

    private IEnumerator ReturnToOrigin()
    {
        var from = transform.position;
        float t = 0f;
        while (t < returnDuration)
        {
            t += Time.deltaTime;
            transform.position = Vector3.Lerp(from, originalPosition, t / returnDuration);
            yield return null;
        }

        transform.position = originalPosition;
    }
}
