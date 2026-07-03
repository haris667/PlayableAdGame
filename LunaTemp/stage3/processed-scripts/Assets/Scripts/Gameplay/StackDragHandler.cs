using System;
using System.Collections;
using UnityEngine;

// Драг-н-дроп стопки из лотка: зажали — потащили по экрану — отпустили над свободной ячейкой поля.
// Куда именно ставим — определяется физическим лучом от камеры через палец/курсор: какую
// BoardCell (её SphereCollider) луч встретит первой, туда и пытаемся поставить стопку.
// Если луч не попал ни в одну свободную ячейку — стопка плавно возвращается на исходное место.
//
// Стопка остаётся перетаскиваемой и ПОСЛЕ того, как её уже поставили на поле — игрок может
// подхватить её снова и переставить на другую свободную ячейку; прежняя ячейка при этом
// освобождается (см. OnMouseUp). Исключение — стопка стоит на ячейке с BoardCell.IsClickable
// == false (например, стартовая стопка поля): такую забирать нельзя, см. OnMouseDown.
[RequireComponent(typeof(HexStack))]
public class StackDragHandler : MonoBehaviour
{
    [SerializeField] private BoardManager board;
    [SerializeField] private float dragHeight = 0.3f;
    [SerializeField] private float minDragDistanceToCountAsMoved = 0.05f;
    [SerializeField] private float returnDuration = 0.2f;

    // Стопка ещё ни разу не была поставлена на поле (т.е. лежит в исходном слоте лотка).
    // Используется TutorialHandController-ом, чтобы указывать руку только на непоставленные
    // стопки — в отличие от просто "доступна для драга" (true всегда, даже после установки).
    public bool IsInTray => stack != null && stack.CurrentCell == null;

    // Эти статические события слушает TutorialHandController — ему не важно, какую именно
    // из трёх стопок лотка взял игрок, только сам факт.
    public static event System.Action OnAnyStackGrabbed;
    public static event System.Action OnAnyStackMoved;
    public static event System.Action<bool> OnAnyStackReleased; // true = стопка успешно встала на поле

    private Camera cam;
    private HexStack stack;
    private Collider ownCollider;
    private Vector3 originalPosition;
    private Vector3 dragStartPosition;
    private Vector3 grabOffset;
    private Vector3 pointerWorldPoint;
    private Plane dragPlane;
    private bool dragging;
    private bool hasMoved;

    private void Awake()
    {
        stack = GetComponent<HexStack>();
        ownCollider = GetComponent<Collider>();
        cam = Camera.main;
        if (board == null) board = FindObjectOfType<BoardManager>();
    }

    public void SetBoard(BoardManager boardManager) => board = boardManager;

    private void OnMouseDown()
    {
        if (board == null || board.IsChainRunning) return;

        // Стопка стоит на ячейке, с которой её нельзя забирать (BoardCell.IsClickable == false,
        // например — стартовая стопка поля) — драг вообще не начинаем.
        if (stack.CurrentCell != null && !stack.CurrentCell.IsClickable) return;

        dragging = true;
        hasMoved = false;
        originalPosition = transform.position;
        dragStartPosition = transform.position;
        dragPlane = new Plane(Vector3.up, transform.position);

        // Смещение между точкой, где палец/курсор коснулся плоскости, и текущей позицией стопки —
        // сохраняем его на весь драг, чтобы стопка не прыгала центром под курсор, а двигалась
        // с той же самой относительной точки, за которую её взяли.
        var ray = cam.ScreenPointToRay(Input.mousePosition);
        if (dragPlane.Raycast(ray, out float grabDistance))
        {
            pointerWorldPoint = ray.GetPoint(grabDistance);
            grabOffset = transform.position - pointerWorldPoint;
        }
        else
        {
            pointerWorldPoint = transform.position;
            grabOffset = Vector3.zero;
        }

        OnAnyStackGrabbed?.Invoke();
    }

    private void OnMouseDrag()
    {
        if (!dragging) return;

        var ray = cam.ScreenPointToRay(Input.mousePosition);
        if (!dragPlane.Raycast(ray, out float distance)) return;

        pointerWorldPoint = ray.GetPoint(distance);

        var point = pointerWorldPoint + grabOffset;
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

        var cell = RaycastCellUnderPointer();
        if (cell != null && cell.IsEmpty)
        {
            // Если стопка уже стояла на другой ячейке (игрок переставляет её, а не ставит
            // впервые из лотка) — освобождаем прежнюю ячейку, иначе она навсегда останется
            // занятой ссылкой на стопку, которая физически уже переехала.
            var previousCell = stack.CurrentCell;
            if (previousCell != null && previousCell != cell)
                previousCell.CurrentStack = null;

            board.PlaceStack(stack, cell);
            OnAnyStackReleased?.Invoke(true);
            return;
        }

        StartCoroutine(ReturnToOrigin());
        OnAnyStackReleased?.Invoke(false);
    }

    // Луч от камеры через палец/курсор — первая попавшаяся под него BoardCell и есть цель
    // (независимо от BoardCell.IsClickable — эта галка не про то, можно ли СЮДА поставить
    // стопку, а про то, можно ли ТАЩИТЬ то, что уже стоит на ячейке, см. OnMouseDown).
    // Собственный коллайдер стопки на время луча отключаем: во время драга она сама висит
    // прямо над ячейками (приподнята на dragHeight) и иначе перехватывала бы луч сама на себя.
    // Проверяем все пересечения луча (а не первое встречное), чтобы декоративная геометрия или
    // уже стоящая на ячейке стопка не заслоняли SphereCollider самой ячейки.
    private BoardCell RaycastCellUnderPointer()
    {
        var ray = cam.ScreenPointToRay(Input.mousePosition);

        bool wasEnabled = ownCollider.enabled;
        ownCollider.enabled = false;
        var hits = Physics.RaycastAll(ray);
        ownCollider.enabled = wasEnabled;

        Array.Sort(hits, (a, b) => a.distance.CompareTo(b.distance));

        foreach (var hit in hits)
        {
            var cell = hit.collider.GetComponentInParent<BoardCell>();
            if (cell != null) return cell;
        }

        return null;
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
