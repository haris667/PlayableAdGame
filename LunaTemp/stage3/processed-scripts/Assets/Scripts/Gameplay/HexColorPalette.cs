using System;
using UnityEngine;

// Ассет-палитра: связывает HexColor с конкретным материалом из OctagonMaterials.
// Создаётся через меню Assets > Create > Game > Hex Color Palette,
// затем в инспекторе нужно один раз перетащить все 8 материалов напротив соответствующих цветов.
[CreateAssetMenu(fileName = "HexColorPalette", menuName = "Game/Hex Color Palette")]
public class HexColorPalette : ScriptableObject
{
    [Serializable]
    public struct Entry
    {
        public HexColor color;
        public Material material;
    }

    [SerializeField] private Entry[] entries;

    public Material GetMaterial(HexColor color)
    {
        foreach (var entry in entries)
        {
            if (entry.color == color)
                return entry.material;
        }

        Debug.LogError($"HexColorPalette: материал для цвета {color} не назначен в ассете {name}.");
        return null;
    }
}
