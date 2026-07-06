using UnityEngine;

public class CopyRectSize : MonoBehaviour
{
    [SerializeField] private RectTransform sourceBG;
    [SerializeField] private RectTransform currentBG;

    private void OnEnable()
    {
        if (sourceBG == null || currentBG == null) return;   
        var sourceSize = sourceBG.rect.size;
        currentBG.sizeDelta = sourceSize;
    }
}
