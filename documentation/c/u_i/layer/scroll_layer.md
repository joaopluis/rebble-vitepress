# ScrollLayer

### Key Points



* Facilitates vertical scrolling of a layer sub-hierarchy zero or more arbitrary layers. The example image shows a scroll layer containing one large TextLayer.
* Shadows to indicate that there is more content are automatically drawn on top of the content. When the end of the scroll layer is reached, the shadow will automatically be retracted.
* Scrolling from one offset to another is animated implicitly by default.
* The scroll layer contains a "content" sub-layer, which is the layer that is actually moved up an down. Any layer that is a child of this "content" sub-layer, will be moved as well. Effectively, an entire layout of layers can be scrolled this way. Use the convenience function [scroll_layer_add_child()](/documentation/c/group___scroll_layer.md#function-scroll-layer-add-child) to add child layers to the "content" sub-layer.
* The scroll layer needs to be informed of the total size of the contents, in order to calculate from and to what point it should be able to scroll. Use [scroll_layer_set_content_size()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-content-size) to set the size of the contents.
* The button behavior is set up, using the convenience function [scroll_layer_set_click_config_onto_window()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-click-config-onto-window). This will associate the UP and DOWN buttons with scrolling up and down.
* The SELECT button can be configured by installing a click configuration provider using [scroll_layer_set_callbacks()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-callbacks).
* To scroll programatically to a certain offset, use [scroll_layer_set_content_offset()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-content-offset).
* It is possible to get called back for each scrolling increment, by installing the `.content_offset_changed_handler` callback using [scroll_layer_set_callbacks()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-callbacks).
* Only vertical scrolling is supported at the moment. 

## Functions

:::info ScrollLayer * scroll_layer_create(GRect frame)

Creates a new ScrollLayer on the heap and initalizes it with the default values: 

:::

:::info void scroll_layer_destroy(ScrollLayer *scroll_layer)

Destroys a ScrollLayer previously created by scroll_layer_create. 

:::

:::info Layer * scroll_layer_get_layer(const ScrollLayer *scroll_layer)

Gets the "root" Layer of the scroll layer, which is the parent for the sub- layers used for its implementation. 

##### Parameters

- **scroll_layer**: Pointer to the ScrollLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the scroll layer. 

:::

:::info void scroll_layer_add_child(ScrollLayer *scroll_layer, Layer *child)

Adds the child layer to the content sub-layer of the ScrollLayer. This will make the child layer part of the scrollable contents. The content sub-layer of the ScrollLayer will become the parent of the child layer. 

##### Parameters

- **scroll_layer**: The ScrollLayer to which to add the child layer. 
- **child**: The Layer to add to the content sub-layer of the ScrollLayer. 

:::

:::info void scroll_layer_set_click_config_onto_window(ScrollLayer *scroll_layer, struct Window *window)

Convenience function to set the [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) callback on the given window to scroll layer's internal click config provider. This internal click configuration provider, will set up the default UP & DOWN scrolling behavior. This function calls [window_set_click_config_provider_with_context]() to accomplish this. 

##### Parameters

- **scroll_layer**: The ScrollLayer that needs to receive click events. 
- **window**: The window for which to set the click configuration. 

:::

:::info void scroll_layer_set_callbacks(ScrollLayer *scroll_layer, ScrollLayerCallbacks callbacks)

Sets the callbacks that the scroll layer exposes. The `context` as set by [scroll_layer_set_context()]() is passed into each of the callbacks. See [ScrollLayerCallbacks](/documentation/c/struct_scroll_layer_callbacks.md) for the different callbacks. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to assign new callbacks. 
- **callbacks**: The new callbacks. 

:::

:::info void scroll_layer_set_context(ScrollLayer *scroll_layer, void *context)

Sets a new callback context. This context is passed into the scroll layer's callbacks and also the [ClickHandler](/documentation/c/group___clicks.md#typedef-clickhandler) for the SELECT button. If `NULL` or not set, the context defaults to a pointer to the ScrollLayer itself. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to assign the new callback context. 
- **context**: The new callback context. 

:::

:::info void scroll_layer_set_content_offset(ScrollLayer *scroll_layer, GPoint offset, bool animated)

Scrolls to the given offset, optionally animated. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to set the content offset 
- **offset**: The final content offset 
- **animated**: Pass in `true` to animate to the new content offset, or `false` to set the new content offset without animating. 

:::

:::info GPoint scroll_layer_get_content_offset(ScrollLayer *scroll_layer)

Gets the point by which the contents are offset. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to get the content offset 

:::

:::info void scroll_layer_set_content_size(ScrollLayer *scroll_layer, GSize size)

Sets the size of the contents layer. This determines the area that is scrollable. At the moment, this needs to be set "manually" and is not derived from the geometry of the contents layers. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to set the content size. 
- **size**: The new content size. 

:::

:::info GSize scroll_layer_get_content_size(const ScrollLayer *scroll_layer)

Gets the size of the contents layer. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to get the content size 

:::

:::info void scroll_layer_set_frame(ScrollLayer *scroll_layer, GRect frame)

Set the frame of the scroll layer and adjusts the internal layers' geometry accordingly. The scroll layer is marked dirty automatically. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to set the frame 
- **frame**: The new frame 

:::

:::info void scroll_layer_scroll_up_click_handler(ClickRecognizerRef recognizer, void *context)

The click handlers for the UP button that the scroll layer will install as part of [scroll_layer_set_click_config_onto_window()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-click-config-onto-window). 

##### Parameters

- **recognizer**: The click recognizer for which the handler is called 
- **context**: A void pointer to the ScrollLayer that is the context of the click event 

:::

:::info void scroll_layer_scroll_down_click_handler(ClickRecognizerRef recognizer, void *context)

The click handlers for the DOWN button that the scroll layer will install as part of [scroll_layer_set_click_config_onto_window()](/documentation/c/group___scroll_layer.md#function-scroll-layer-set-click-config-onto-window). 

##### Parameters

- **recognizer**: The click recognizer for which the handler is called 
- **context**: A void pointer to the ScrollLayer that is the context of the click event 

:::

:::info void scroll_layer_set_shadow_hidden(ScrollLayer *scroll_layer, bool hidden)

Sets the visibility of the scroll layer shadow. If the visibility has changed, [layer_mark_dirty()](/documentation/c/group___layer.md#function-layer-mark-dirty) will be called automatically on the scroll layer. 

##### Parameters

- **scroll_layer**: The scroll layer for which to set the shadow visibility 
- **hidden**: Supply `true` to make the shadow hidden, or `false` to make it non-hidden. 

:::

:::info bool scroll_layer_get_shadow_hidden(const ScrollLayer *scroll_layer)

Gets the visibility of the scroll layer shadow. 

##### Parameters

- **scroll_layer**: The scroll layer for which to get the visibility 

##### Returns

True if the shadow is hidden, false if it is not hidden. 

:::

:::info void scroll_layer_set_paging(ScrollLayer *scroll_layer, bool paging_enabled)

Enables or disables paging of the ScrollLayer (default: disabled). When enabled, every button press will change the scroll offset by the frame's height. 

##### Parameters

- **scroll_layer**: The scroll layer for which to enable or disable paging 
- **paging_enabled**: True, if paging should be enabled. False to enable. 

:::

:::info bool scroll_layer_get_paging(ScrollLayer *scroll_layer)

Check whether or not the ScrollLayer uses paging when pressing buttons. 

##### Parameters

- **scroll_layer**: The scroll layer for which to get the paging behavior. 

##### Returns

True, if paging is enabled; false otherwise. 

:::

:::info ContentIndicator * scroll_layer_get_content_indicator(ScrollLayer *scroll_layer)

Gets the ContentIndicator for a ScrollLayer. 

##### Parameters

- **scroll_layer**: The ScrollLayer for which to get the ContentIndicator 

##### Returns

A pointer to the ContentIndicator, or `NULL` upon failure. 

:::

:::info ContentIndicator * content_indicator_create(void)

Creates a ContentIndicator on the heap. 

##### Returns

A pointer to the ContentIndicator. `NULL` if the ContentIndicator could not be created. 

:::

:::info void content_indicator_destroy(ContentIndicator *content_indicator)

Destroys a ContentIndicator previously created using [content_indicator_create()](/documentation/c/group___scroll_layer.md#function-content-indicator-create). 

##### Parameters

- **content_indicator**: The ContentIndicator to destroy. 

:::

:::info bool content_indicator_configure_direction(ContentIndicator *content_indicator, ContentIndicatorDirection direction, const ContentIndicatorConfig *config)

Configures a ContentIndicator for the given direction. 

##### Parameters

- **content_indicator**: The ContentIndicator to configure. 
- **direction**: The direction for which to configure the ContentIndicator. 
- **config**: The configuration to use to configure the ContentIndicator. If NULL, the data for the specified direction will be reset. 

##### Returns

True if the ContentIndicator was successfully configured for the given direction, false otherwise. 

:::

:::info bool content_indicator_get_content_available(ContentIndicator *content_indicator, ContentIndicatorDirection direction)

Retrieves the availability status of content in the given direction. 

##### Parameters

- **content_indicator**: The ContentIndicator for which to get the content availability. 
- **direction**: The direction for which to get the content availability. 

##### Returns

True if content is available in the given direction, false otherwise. 

:::

:::info void content_indicator_set_content_available(ContentIndicator *content_indicator, ContentIndicatorDirection direction, bool available)

Sets the availability status of content in the given direction. 

##### Parameters

- **content_indicator**: The ContentIndicator for which to set the content availability. 
- **direction**: The direction for which to set the content availability. 
- **available**: Whether or not content is available. 

:::


## Enums

:::info ContentIndicatorDirection

Value to describe directions for ContentIndicator. 

##### Values

- **ContentIndicatorDirectionUp**: The up direction. 
- **ContentIndicatorDirectionDown**: The down direction. 
- **NumContentIndicatorDirections**: The number of supported directions. 

:::

## Typedefs

:::info typedef struct ScrollLayer ScrollLayer

:::

:::info typedef void(* ScrollLayerCallback) (struct ScrollLayer *scroll_layer, void *context)

Function signature for the `.content_offset_changed_handler` callback. 

:::

:::info typedef struct ScrollLayerCallbacks ScrollLayerCallbacks

All the callbacks that the ScrollLayer exposes for use by applications. 

:::

:::info typedef struct ContentIndicator ContentIndicator

:::

