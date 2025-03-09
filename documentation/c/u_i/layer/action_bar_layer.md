# ActionBarLayer

![action_bar_layer.png](/documentation/c//action_bar_layer.png)
 ActionBarLayer is a Layer that displays a bar on the right edge of the window. The bar can contain up to 3 icons, each corresponding with one of the buttons on the right side of the watch. The purpose of each icon is to provide a hint (feed-forward) to what action a click on the respective button will cause.

The action bar is useful when there are a few (up to 3) main actions that are desirable to be able to take quickly, literally with one press of a button.


### More actions

If there are more than 3 actions the user might want to take:

* Try assigning the top and bottom icons of the action bar to the two most immediate actions and use the middle icon to push a Window with a MenuLayer with less immediate actions.
* Secondary actions that are not vital, can be "hidden" under a long click. Try to group similar actions to one button. For example, in a Music app, a single click on the top button is tied to the action to jump to the previous track. Holding that same button means seek backwards.


### Directionality mapping

When the top and bottom buttons are used to control navigating through a (potentially virtual, non-visible) list of items, follow this guideline:

* Tie the top button to the action that goes to the _previous_ item in the list, for example "jump to previous track" in a Music app.
* Tie the bottom button to the action that goes to the _next_ item in the list, for example "jump to next track" in a Music app.


### Geometry



* The action bar is 30 pixels wide. Use the [ACTION_BAR_WIDTH](/documentation/c/group___action_bar_layer.md#define-action-bar-width) define.
* Icons should not be wider than 28 pixels, or taller than 18 pixels. It is recommended to use a size of around 15 x 15 pixels for the "visual core" of the icon, and extending or contracting where needed. 
### Example Code

The code example below shows how to do the initial setup of the action bar in a window's `.load` handler. Configuring the button actions is similar to the process when using [window_set_click_config_provider()](/documentation/c/group___window.md#function-window-set-click-config-provider). See [Clicks](/documentation/c/group___clicks.md) for more information.

```c

ActionBarLayer *action_bar;

// The implementation of my_next_click_handler and my_previous_click_handler
// is omitted for the sake of brevity. See the Clicks reference docs.

void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_DOWN, (ClickHandler) my_next_click_handler);
  window_single_click_subscribe(BUTTON_ID_UP, (ClickHandler) my_previous_click_handler);
}

void window_load(Window *window) {
  ...
  // Initialize the action bar:
  action_bar = action_bar_layer_create();
  // Associate the action bar with the window:
  action_bar_layer_add_to_window(action_bar, window);
  // Set the click config provider:
  action_bar_layer_set_click_config_provider(action_bar,
                                             click_config_provider);

  // Set the icons:
  // The loading of the icons is omitted for brevity... See gbitmap_create_with_resource()
  action_bar_layer_set_icon_animated(action_bar, BUTTON_ID_UP, my_icon_previous, true);
  action_bar_layer_set_icon_animated(action_bar, BUTTON_ID_DOWN, my_icon_next, true);
}
```

## Functions

:::info ActionBarLayer * action_bar_layer_create(void)

Creates a new ActionBarLayer on the heap and initalizes it with the default values. 

:::

:::info void action_bar_layer_destroy(ActionBarLayer *action_bar_layer)

Destroys a ActionBarLayer previously created by action_bar_layer_create. 

:::

:::info Layer * action_bar_layer_get_layer(ActionBarLayer *action_bar_layer)

Gets the "root" Layer of the action bar layer, which is the parent for the sub- layers used for its implementation. 

##### Parameters

- **action_bar_layer**: Pointer to the ActionBarLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the action bar layer. 

:::

:::info void action_bar_layer_set_context(ActionBarLayer *action_bar, void *context)

Sets the context parameter, which will be passed in to [ClickHandler](/documentation/c/group___clicks.md#typedef-clickhandler) callbacks and the [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) callback of the action bar. 

##### Parameters

- **action_bar**: The action bar for which to assign the new context 
- **context**: The new context 

:::

:::info void action_bar_layer_set_click_config_provider(ActionBarLayer *action_bar, ClickConfigProvider click_config_provider)

Sets the click configuration provider callback of the action bar. In this callback your application can associate handlers to the different types of click events for each of the buttons, see [Clicks](/documentation/c/group___clicks.md). 

##### Parameters

- **action_bar**: The action bar for which to assign a new click configuration provider 
- **click_config_provider**: The new click configuration provider 

:::

:::info void action_bar_layer_set_icon(ActionBarLayer *action_bar, ButtonId button_id, const GBitmap *icon)

Sets an action bar icon onto one of the 3 slots as identified by `button_id`. Only [BUTTON_ID_UP](/documentation/c/group___clicks.md#enumvalue-button-id-up), [BUTTON_ID_SELECT](/documentation/c/group___clicks.md#enumvalue-button-id-select) and [BUTTON_ID_DOWN](/documentation/c/group___clicks.md#enumvalue-button-id-down) can be used. The transition will not be animated. Whenever an icon is set, the click configuration provider will be called, to give the application the opportunity to reconfigure the button interaction. 

##### Parameters

- **action_bar**: The action bar for which to set the new icon 
- **button_id**: The identifier of the button for which to set the icon 
- **icon**: Pointer to the GBitmap icon 

:::

:::info void action_bar_layer_clear_icon(ActionBarLayer *action_bar, ButtonId button_id)

Convenience function to clear out an existing icon. All it does is call `action_bar_layer_set_icon(action_bar, button_id, NULL)`

##### Parameters

- **action_bar**: The action bar for which to clear an icon 
- **button_id**: The identifier of the button for which to clear the icon 

:::

:::info void action_bar_layer_add_to_window(ActionBarLayer *action_bar, struct Window *window)

Adds the action bar's layer on top of the window's root layer. It also adjusts the layout of the action bar to match the geometry of the window it gets added to. Lastly, it calls [window_set_click_config_provider_with_context()]() on the window to set it up to work with the internal callback and raw click handlers of the action bar, to enable the highlighting of the section of the action bar when the user presses a button. 

##### Parameters

- **action_bar**: The action bar to associate with the window 
- **window**: The window with which the action bar is to be associated 

:::

:::info void action_bar_layer_remove_from_window(ActionBarLayer *action_bar)

Removes the action bar from the window and unconfigures the window's click configuration provider. `NULL` is set as the window's new click config provider and also as its callback context. If it has not been added to a window before, this function is a no-op. 

##### Parameters

- **action_bar**: The action bar to de-associate from its current window 

:::

:::info void action_bar_layer_set_background_color(ActionBarLayer *action_bar, GColor background_color)

Sets the background color of the action bar. Defaults to [GColorBlack](/documentation/c/group___color_definitions.md#define-gcolorblack). The action bar's layer is automatically marked dirty. 

##### Parameters

- **action_bar**: The action bar of which to set the background color 
- **background_color**: The new background color 

:::

:::info void action_bar_layer_set_icon_animated(ActionBarLayer *action_bar, ButtonId button_id, const GBitmap *icon, bool animated)

Sets an action bar icon onto one of the 3 slots as identified by `button_id`. Only [BUTTON_ID_UP](/documentation/c/group___clicks.md#enumvalue-button-id-up), [BUTTON_ID_SELECT](/documentation/c/group___clicks.md#enumvalue-button-id-select) and [BUTTON_ID_DOWN](/documentation/c/group___clicks.md#enumvalue-button-id-down) can be used. Optionally, if `animated` is `true`, the transition will be animated. Whenever an icon is set, the click configuration provider will be called, to give the application the opportunity to reconfigure the button interaction. 

##### Parameters

- **action_bar**: The action bar for which to set the new icon 
- **button_id**: The identifier of the button for which to set the icon 
- **icon**: Pointer to the GBitmap icon 
- **animated**: True = animate the transition, False = do not animate the transition 

:::

:::info void action_bar_layer_set_icon_press_animation(ActionBarLayer *action_bar, ButtonId button_id, ActionBarLayerIconPressAnimation animation)

Sets the animation to use while a button is pressed on an ActionBarLayer. By default we use ActionBarLayerIconPressAnimationMoveLeft. 

##### Parameters

- **action_bar**: The action bar for which to set the press animation 
- **button_id**: The button for which to set the press animation 
- **animation**: The animation to use. 

:::


## Enums

:::info ActionBarLayerIconPressAnimation

##### Values

- **ActionBarLayerIconPressAnimationNone**: undefined
- **ActionBarLayerIconPressAnimationMoveLeft**: undefined
- **ActionBarLayerIconPressAnimationMoveUp**: undefined
- **ActionBarLayerIconPressAnimationMoveRight**: undefined
- **ActionBarLayerIconPressAnimationMoveDown**: undefined

:::

## Typedefs

:::info typedef struct ActionBarLayer ActionBarLayer

:::

