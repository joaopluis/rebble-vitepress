# Fonts

## Functions

:::info GFont fonts_get_system_font(const char *font_key)

Loads a system font corresponding to the specified font key. 

##### Parameters

- **font_key**: The string key of the font to load. See [System Fonts](https://developer.pebble.com/guides/app-resources/system-fonts/) guide for a list of system fonts. 

##### Returns

An opaque pointer to the loaded font, or, a pointer to the default (fallback) font if the specified font cannot be loaded. 

:::

:::info GFont fonts_load_custom_font(ResHandle handle)

Loads a custom font. 

##### Parameters

- **handle**: The resource handle of the font to load. See resource_ids.auto.h for a list of resource IDs, and use [resource_get_handle()](/documentation/c/group___resources.md#function-resource-get-handle) to obtain the resource handle. 

##### Returns

An opaque pointer to the loaded font, or a pointer to the default (fallback) font if the specified font cannot be loaded. 

:::

:::info void fonts_unload_custom_font(GFont font)

Unloads the specified custom font and frees the memory that is occupied by it. 

##### Parameters

- **font**: The font to unload. 

:::


## Typedefs

:::info typedef struct FontInfo FontInfo

:::

:::info typedef FontInfo* GFont

Pointer to opaque font data structure. 

:::

