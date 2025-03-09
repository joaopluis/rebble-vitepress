# MenuLayer

### Key Points



* The familiar list-style menu widget, as used throughout the Pebble user interface.
* Built on top of [ScrollLayer](/documentation/c/group___scroll_layer.md), inheriting all its goodness like animated scrolling, automatic "more content" shadow indicators, etc.
* All data needed to render the menu is requested on-demand via callbacks, to avoid the need to keep a lot of data in memory.
* Support for "sections". A section is a group of items, visually separated by a header with the name at the top of the section.
* Variable heights: each menu item cell and each section header can have its own height. The heights are provided by callbacks.
* Deviation from the Layer system for cell drawing: Each menu item does _not_ have its own Layer (to minimize memory usage). Instead, a drawing callback is set onto the [MenuLayer](/documentation/c/group___menu_layer.md) that is responsible for drawing each menu item. The [MenuLayer](/documentation/c/group___menu_layer.md) will call this callback for each menu item that is visible and needs to be rendered.
* Cell and header drawing can be customized by implementing a custom drawing callback.
* A few "canned" menu cell drawing functions are provided for convenience, which support the default menu cell layout with a title, optional subtitle and icon.

For short, static list menus, consider using [SimpleMenuLayer](/documentation/c/group___simple_menu_layer.md). 

## Functions

:::info void menu_cell_basic_draw(GContext *ctx, const Layer *cell_layer, const char *title, const char *subtitle, GBitmap *icon)

Section drawing function to draw a basic section cell with the title, subtitle, and icon of the section. Call this function inside the `.draw_row` callback implementation, see [MenuLayerCallbacks](/documentation/c/struct_menu_layer_callbacks.md). Note that if the size of `cell_layer` is too small to fit all of the cell items specified, not all of them may be drawn. 

##### Parameters

- **ctx**: The destination graphics context 
- **cell_layer**: The layer of the cell to draw 
- **title**: If non-null, draws a title in larger text (24 points, bold Raster Gothic system font). 
- **subtitle**: If non-null, draws a subtitle in smaller text (18 points, Raster Gothic system font). If `NULL`, the title will be centered vertically inside the menu cell. 
- **icon**: If non-null, draws an icon to the left of the text. If `NULL`, the icon will be omitted and the leftover space is used for the title and subtitle. 

:::

:::info void menu_cell_title_draw(GContext *ctx, const Layer *cell_layer, const char *title)

Cell drawing function to draw a basic menu cell layout with title, subtitle Cell drawing function to draw a menu cell layout with only one big title. Call this function inside the `.draw_row` callback implementation, see [MenuLayerCallbacks](/documentation/c/struct_menu_layer_callbacks.md). 

##### Parameters

- **ctx**: The destination graphics context 
- **cell_layer**: The layer of the cell to draw 
- **title**: If non-null, draws a title in larger text (28 points, bold Raster Gothic system font). 

:::

:::info void menu_cell_basic_header_draw(GContext *ctx, const Layer *cell_layer, const char *title)

Section header drawing function to draw a basic section header cell layout with the title of the section. Call this function inside the `.draw_header` callback implementation, see [MenuLayerCallbacks](/documentation/c/struct_menu_layer_callbacks.md). 

##### Parameters

- **ctx**: The destination graphics context 
- **cell_layer**: The layer of the cell to draw 
- **title**: If non-null, draws the title in small text (14 points, bold Raster Gothic system font). 

:::

:::info int16_t menu_index_compare(const MenuIndex *a, const MenuIndex *b)

Comparator function to determine the order of two [MenuIndex](/documentation/c/struct_menu_index.md) values. 

##### Parameters

- **a**: Pointer to the menu index of the first item 
- **b**: Pointer to the menu index of the second item 

##### Returns

0 if A and B are equal, 1 if A has a higher section & row combination than B or else -1 

:::

:::info MenuLayer * menu_layer_create(GRect frame)

Creates a new [MenuLayer](/documentation/c/group___menu_layer.md) on the heap and initalizes it with the default values. 

:::

:::info void menu_layer_destroy(MenuLayer *menu_layer)

Destroys a [MenuLayer](/documentation/c/group___menu_layer.md) previously created by menu_layer_create. 

:::

:::info Layer * menu_layer_get_layer(const MenuLayer *menu_layer)

Gets the "root" Layer of the [MenuLayer](/documentation/c/group___menu_layer.md), which is the parent for the sub- layers used for its implementation. 

##### Parameters

- **menu_layer**: Pointer to the MenuLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the [MenuLayer](/documentation/c/group___menu_layer.md). 

:::

:::info ScrollLayer * menu_layer_get_scroll_layer(const MenuLayer *menu_layer)

Gets the ScrollLayer of the [MenuLayer](/documentation/c/group___menu_layer.md), which is the layer responsible for the scrolling of the [MenuLayer](/documentation/c/group___menu_layer.md). 

##### Parameters

- **menu_layer**: Pointer to the [MenuLayer](/documentation/c/group___menu_layer.md) for which to get the ScrollLayer 

##### Returns

The ScrollLayer of the [MenuLayer](/documentation/c/group___menu_layer.md). 

:::

:::info void menu_layer_set_callbacks(MenuLayer *menu_layer, void *callback_context, MenuLayerCallbacks callbacks)

Sets the callbacks for the MenuLayer. 

##### Parameters

- **menu_layer**: Pointer to the [MenuLayer](/documentation/c/group___menu_layer.md) for which to set the callbacks and callback context. 
- **callback_context**: The new callback context. This is passed into each of the callbacks and can be set to point to application provided data. 
- **callbacks**: The new callbacks for the [MenuLayer](/documentation/c/group___menu_layer.md). The storage for this data structure must be long lived. Therefore, it cannot be stack-allocated. 

:::

:::info void menu_layer_set_click_config_onto_window(MenuLayer *menu_layer, struct Window *window)

Convenience function to set the [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) callback on the given window to the [MenuLayer](/documentation/c/group___menu_layer.md) internal click config provider. This internal click configuration provider, will set up the default UP & DOWN scrolling / menu item selection behavior. This function calls [scroll_layer_set_click_config_onto_window]() to accomplish this. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) that needs to receive click events. 
- **window**: The window for which to set the click configuration. 

:::

:::info void menu_layer_set_selected_next(MenuLayer *menu_layer, bool up, MenuRowAlign scroll_align, bool animated)

Selects the next or previous item, relative to the current selection. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which to select the next item 
- **up**: Supply `false` to select the next item in the list (downwards), or `true` to select the previous item in the list (upwards). 
- **scroll_align**: The alignment of the new selection 
- **animated**: Supply `true` to animate changing the selection, or `false` to change the selection instantly. 

:::

:::info void menu_layer_set_selected_index(MenuLayer *menu_layer, MenuIndex index, MenuRowAlign scroll_align, bool animated)

Selects the item with given [MenuIndex](/documentation/c/struct_menu_index.md). 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which to change the selection 
- **index**: The index of the item to select 
- **scroll_align**: The alignment of the new selection 
- **animated**: Supply `true` to animate changing the selection, or `false` to change the selection instantly. 

:::

:::info MenuIndex menu_layer_get_selected_index(const MenuLayer *menu_layer)

Gets the [MenuIndex](/documentation/c/struct_menu_index.md) of the currently selected menu item. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which to get the current selected index. 

:::

:::info void menu_layer_reload_data(MenuLayer *menu_layer)

Reloads the data of the menu. This causes the menu to re-request the menu item data, by calling the relevant callbacks. The current selection and scroll position will not be changed. See the note with [menu_layer_set_selected_index()](/documentation/c/group___menu_layer.md#function-menu-layer-set-selected-index) for the behavior if the old selection is no longer valid. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which to reload the data. 

:::

:::info bool menu_cell_layer_is_highlighted(const Layer *cell_layer)

Returns whether or not the given cell layer is highlighted. Using this for determining highlight behaviour is preferable to using [menu_layer_get_selected_index](/documentation/c/group___menu_layer.md#function-menu-layer-get-selected-index). Row drawing callbacks may be invoked multiple times with a different highlight status on the same cell in order to handle partially highlighted cells during animation. 

##### Parameters

- **cell_layer**: The [Layers](/documentation/c/group___layer.md) for the cell to check highlight status. 

##### Returns

true if the given cell layer is highlighted in the menu. 

:::

:::info void menu_layer_set_normal_colors(MenuLayer *menu_layer, GColor background, GColor foreground)

Set the default colors to be used for cells when it is in a normal state (not highlighted). The GContext's text and fill colors will be set appropriately prior to calling the `.draw_row` callback. If this function is not explicitly called on a [MenuLayer](/documentation/c/group___menu_layer.md), it will default to white background with black foreground. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which to set the colors. 
- **background**: The color to be used for the background of the cell. 
- **foreground**: The color to be used for the foreground and text of the cell. 

:::

:::info void menu_layer_set_highlight_colors(MenuLayer *menu_layer, GColor background, GColor foreground)

Set the default colors to be used for cells when it is in a highlighted state. The GContext's text and fill colors will be set appropriately prior to calling the `.draw_row` callback. If this function is not explicitly called on a [MenuLayer](/documentation/c/group___menu_layer.md), it will default to black background with white foreground. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which to set the colors. 
- **background**: The color to be used for the background of the cell. 
- **foreground**: The color to be used for the foreground and text of the cell. 

:::

:::info void menu_layer_pad_bottom_enable(MenuLayer *menu_layer, bool enable)

This enables or disables padding at the bottom of the [MenuLayer](/documentation/c/group___menu_layer.md). Padding at the bottom of the layer keeps the bottom item from being at the very bottom of the screen. Padding is turned on by default for all MenuLayers. The color of the padded area will be the background color set using [menu_layer_set_normal_colors()](/documentation/c/group___menu_layer.md#function-menu-layer-set-normal-colors). To color the padding a different color, use [MenuLayerDrawBackgroundCallback](/documentation/c/group___menu_layer.md#typedef-menulayerdrawbackgroundcallback). 

##### Parameters

- **menu_layer**: The menu layer for which to enable or disable the padding. 
- **enable**: True = enable padding, False = disable padding. 

:::

:::info bool menu_layer_get_center_focused(MenuLayer *menu_layer)

True, if the [MenuLayer](/documentation/c/group___menu_layer.md) generally scrolls such that the selected row is in the center. 

:::

:::info void menu_layer_set_center_focused(MenuLayer *menu_layer, bool center_focused)

Controls if the [MenuLayer](/documentation/c/group___menu_layer.md) generally scrolls such that the selected row is in the center. For platforms with a round display (PBL_ROUND) the default is true, otherwise false is the default. 

##### Parameters

- **menu_layer**: The menu layer for which to enable or disable the behavior. 
- **center_focused**: true = enable the mode, false = disable it. 

:::

:::info bool menu_layer_is_index_selected(const MenuLayer *menu_layer, MenuIndex *index)

Returns whether or not the specified cell index is currently selected. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) to use when determining if the index is selected. 
- **index**: The [MenuIndex](/documentation/c/struct_menu_index.md) of the cell to check for selection. 

:::


## Enums

:::info MenuRowAlign

Values to specify how a (selected) row should be aligned relative to the visible area of the [MenuLayer](/documentation/c/group___menu_layer.md). 

##### Values

- **MenuRowAlignNone**: Don't align or update the scroll offset of the [MenuLayer](/documentation/c/group___menu_layer.md). 
- **MenuRowAlignCenter**: Scroll the contents of the [MenuLayer](/documentation/c/group___menu_layer.md) in such way that the selected row is centered relative to the visible area. 
- **MenuRowAlignTop**: Scroll the contents of the [MenuLayer](/documentation/c/group___menu_layer.md) in such way that the selected row is at the top of the visible area. 
- **MenuRowAlignBottom**: Scroll the contents of the [MenuLayer](/documentation/c/group___menu_layer.md) in such way that the selected row is at the bottom of the visible area. 

:::

## Typedefs

:::info typedef struct MenuIndex MenuIndex

Data structure to represent an menu item's position in a menu, by specifying the section index and the row index within that section. 

:::

:::info typedef struct MenuCellSpan MenuCellSpan

:::

:::info typedef struct MenuLayer MenuLayer

:::

:::info typedef uint16_t(* MenuLayerGetNumberOfSectionsCallback) (struct MenuLayer *menu_layer, void *callback_context)

Function signature for the callback to get the number of sections in a menu. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the data is requested 
- **callback_context**: The callback context 

##### Returns

The number of sections in the menu 

:::

:::info typedef uint16_t(* MenuLayerGetNumberOfRowsInSectionsCallback) (struct MenuLayer *menu_layer, uint16_t section_index, void *callback_context)

Function signature for the callback to get the number of rows in a given section in a menu. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the data is requested 
- **section_index**: The index of the section of the menu for which the number of items it contains is requested 
- **callback_context**: The callback context 

##### Returns

The number of rows in the given section in the menu 

:::

:::info typedef int16_t(* MenuLayerGetCellHeightCallback) (struct MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context)

Function signature for the callback to get the height of the menu cell at a given index. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the data is requested 
- **cell_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) for which the cell height is requested 
- **callback_context**: The callback context 

##### Returns

The height of the cell at the given [MenuIndex](/documentation/c/struct_menu_index.md)

:::

:::info typedef int16_t(* MenuLayerGetHeaderHeightCallback) (struct MenuLayer *menu_layer, uint16_t section_index, void *callback_context)

Function signature for the callback to get the height of the section header at a given section index. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the data is requested 
- **section_index**: The index of the section for which the header height is requested 
- **callback_context**: The callback context 

##### Returns

The height of the section header at the given section index 

:::

:::info typedef int16_t(* MenuLayerGetSeparatorHeightCallback) (struct MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context)

Function signature for the callback to get the height of the separator at a given index. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the data is requested 
- **cell_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) for which the cell height is requested 
- **callback_context**: The callback context 

##### Returns

The height of the separator at the given [MenuIndex](/documentation/c/struct_menu_index.md)

:::

:::info typedef void(* MenuLayerDrawRowCallback) (GContext *ctx, const Layer *cell_layer, MenuIndex *cell_index, void *callback_context)

Function signature for the callback to render the menu cell at a given [MenuIndex](/documentation/c/struct_menu_index.md). 

##### Parameters

- **ctx**: The destination graphics context to draw into 
- **cell_layer**: The cell's layer, containing the geometry of the cell 
- **cell_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) of the cell that needs to be drawn 
- **callback_context**: The callback context 

:::

:::info typedef void(* MenuLayerDrawHeaderCallback) (GContext *ctx, const Layer *cell_layer, uint16_t section_index, void *callback_context)

Function signature for the callback to render the section header at a given section index. 

##### Parameters

- **ctx**: The destination graphics context to draw into 
- **cell_layer**: The header cell's layer, containing the geometry of the header cell 
- **section_index**: The section index of the section header that needs to be drawn 
- **callback_context**: The callback context 

:::

:::info typedef void(* MenuLayerDrawSeparatorCallback) (GContext *ctx, const Layer *cell_layer, MenuIndex *cell_index, void *callback_context)

Function signature for the callback to render the separator at a given [MenuIndex](/documentation/c/struct_menu_index.md). 

##### Parameters

- **ctx**: The destination graphics context to draw into 
- **cell_layer**: The cell's layer, containing the geometry of the cell 
- **cell_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) of the separator that needs to be drawn 
- **callback_context**: The callback context 

:::

:::info typedef void(* MenuLayerSelectCallback) (struct MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context)

Function signature for the callback to handle the event that a user hits the SELECT button. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the selection event occured 
- **cell_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) of the cell that is selected 
- **callback_context**: The callback context 

:::

:::info typedef void(* MenuLayerSelectionChangedCallback) (struct MenuLayer *menu_layer, MenuIndex new_index, MenuIndex old_index, void *callback_context)

Function signature for the callback to handle a change in the current selected item in the menu. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the selection event occured 
- **new_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) of the new item that is selected now 
- **old_index**: The [MenuIndex](/documentation/c/struct_menu_index.md) of the old item that was selected before 
- **callback_context**: The callback context 

:::

:::info typedef void(* MenuLayerSelectionWillChangeCallback) (struct MenuLayer *menu_layer, MenuIndex *new_index, MenuIndex old_index, void *callback_context)

Function signature for the callback which allows or changes selection behavior of the menu. In order to change the cell that should be selected, modify the passed in new_index. Preventing the selection from changing, new_index can be assigned the value of old_index. 

##### Parameters

- **menu_layer**: The [MenuLayer](/documentation/c/group___menu_layer.md) for which the selection event that occured 
- **new_index**: Pointer to the index that the MenuLayer is going to change selection to. 
- **old_index**: The index that is being unselected. 
- **callback_context**: The callback context 

:::

:::info typedef void(* MenuLayerDrawBackgroundCallback) (GContext *ctx, const Layer *bg_layer, bool highlight, void *callback_context)

Function signature for the callback which draws the menu's background. The background is underneath the cells of the menu, and is visible in the padding below the bottom cell, or if a cell's background color is set to GColorClear. 

##### Parameters

- **ctx**: The destination graphics context to draw into. 
- **bg_layer**: The background's layer, containing the geometry of the background. 
- **highlight**: Whether this should be rendered as highlighted or not. Highlight style should match the highlight style of cells, since this color can be used for animating selection. 

:::

:::info typedef struct MenuLayerCallbacks MenuLayerCallbacks

Data structure containing all the callbacks of a [MenuLayer](/documentation/c/group___menu_layer.md). 

:::

