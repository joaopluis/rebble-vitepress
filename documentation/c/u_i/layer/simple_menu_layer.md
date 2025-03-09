# SimpleMenuLayer

## Functions

:::info SimpleMenuLayer * simple_menu_layer_create(GRect frame, Window *window, const SimpleMenuSection *sections, int32_t num_sections, void *callback_context)

Creates a new SimpleMenuLayer on the heap and initializes it. It also sets the internal click configuration provider onto given window. 

##### Parameters

- **frame**: The frame at which to initialize the menu 
- **window**: The window onto which to set the click configuration provider 
- **sections**: Array with sections that need to be displayed in the menu 
- **num_sections**: The number of sections in the `sections` array. 
- **callback_context**: Pointer to application specific data, that is passed into the callbacks. 

##### Returns

A pointer to the SimpleMenuLayer. `NULL` if the SimpleMenuLayer could not be created 

:::

:::info void simple_menu_layer_destroy(SimpleMenuLayer *menu_layer)

Destroys a SimpleMenuLayer previously created by simple_menu_layer_create. 

:::

:::info Layer * simple_menu_layer_get_layer(const SimpleMenuLayer *simple_menu)

Gets the "root" Layer of the simple menu layer, which is the parent for the sub-layers used for its implementation. 

##### Parameters

- **simple_menu**: Pointer to the SimpleMenuLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the menu layer. 

:::

:::info int simple_menu_layer_get_selected_index(const SimpleMenuLayer *simple_menu)

Gets the row index of the currently selection menu item. 

##### Parameters

- **simple_menu**: The SimpleMenuLayer for which to get the current selected row index. 

:::

:::info void simple_menu_layer_set_selected_index(SimpleMenuLayer *simple_menu, int32_t index, bool animated)

Selects the item in the first section at given row index. 

##### Parameters

- **simple_menu**: The SimpleMenuLayer for which to change the selection 
- **index**: The row index of the item to select 
- **animated**: Supply `true` to animate changing the selection, or `false` to change the selection instantly. 

:::

:::info MenuLayer * simple_menu_layer_get_menu_layer(SimpleMenuLayer *simple_menu)

##### Parameters

- **simple_menu**: The [SimpleMenuLayer](/documentation/c/group___simple_menu_layer.md) to get the [MenuLayer](/documentation/c/group___menu_layer.md) from. 

##### Returns

The [MenuLayer](/documentation/c/group___menu_layer.md). 

:::


## Typedefs

:::info typedef struct SimpleMenuLayer SimpleMenuLayer

:::

:::info typedef void(* SimpleMenuLayerSelectCallback) (int index, void *context)

Function signature for the callback to handle the event that a user hits the SELECT button. 

##### Parameters

- **index**: The row index of the item 
- **context**: The callback context 

:::

