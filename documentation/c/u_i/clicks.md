# Clicks

Each Pebble window handles Pebble's buttons while it is displayed. Raw button down and button up events are transformed into click events that can be transferred to your app:



* Single-click. Detects a single click, that is, a button down event followed by a button up event. It also offers hold-to-repeat functionality (repeated click).
* Multi-click. Detects double-clicking, triple-clicking and other arbitrary click counts. It can fire its event handler on all of the matched clicks, or just the last.
* Long-click. Detects long clicks, that is, press-and-hold.
* Raw. Simply forwards the raw button events. It is provided as a way to use both the higher level "clicks" processing and the raw button events at the same time.

To receive click events when a window is displayed, you must register a [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) for this window with [window_set_click_config_provider()](/documentation/c/group___window.md#function-window-set-click-config-provider). Your [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) will be called every time the window becomes visible with one context argument. By default this context is a pointer to the window but you can change this with [window_set_click_config_provider_with_context()](/documentation/c/group___window.md#function-window-set-click-config-provider-with-context).

In your [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) you call the [window_single_click_subscribe()](/documentation/c/group___window.md#function-window-single-click-subscribe), [window_single_repeating_click_subscribe()](/documentation/c/group___window.md#function-window-single-repeating-click-subscribe), [window_multi_click_subscribe()](/documentation/c/group___window.md#function-window-multi-click-subscribe), [window_long_click_subscribe()](/documentation/c/group___window.md#function-window-long-click-subscribe) and [window_raw_click_subscribe()](/documentation/c/group___window.md#function-window-raw-click-subscribe) functions to register a handler for each event you wish to receive.

For convenience, click handlers are provided with a [ClickRecognizerRef](/documentation/c/group___clicks.md#typedef-clickrecognizerref) and a user-specified context.

The [ClickRecognizerRef](/documentation/c/group___clicks.md#typedef-clickrecognizerref) can be used in combination with [click_number_of_clicks_counted()](/documentation/c/group___clicks.md#function-click-number-of-clicks-counted), [click_recognizer_get_button_id()](/documentation/c/group___clicks.md#function-click-recognizer-get-button-id) and [click_recognizer_is_repeating()](/documentation/c/group___clicks.md#function-click-recognizer-is-repeating) to get more information about the click. This is useful if you want different buttons or event types to share the same handler.

The user-specified context is the context of your [ClickConfigProvider](/documentation/c/group___clicks.md#typedef-clickconfigprovider) (see above). By default it points to the window. You can override it for all handlers with [window_set_click_config_provider_with_context()](/documentation/c/group___window.md#function-window-set-click-config-provider-with-context) or for a specific button with [window_set_click_context()](/documentation/c/group___window.md#function-window-set-click-context).


### User interaction in watchfaces

Watchfaces cannot use the buttons to interact with the user. Instead, you can use the [AccelerometerService](/documentation/c/group___accelerometer_service.md).


### About the Back button

By default, the Back button will always pop to the previous window on the [Window Stack](/documentation/c/group___window_stack.md) (and leave the app if the current window is the only window). You can override the default back button behavior with [window_single_click_subscribe()](/documentation/c/group___window.md#function-window-single-click-subscribe) and [window_multi_click_subscribe()](/documentation/c/group___window.md#function-window-multi-click-subscribe) but you cannot set a repeating, long or raw click handler on the back button because a long press will always terminate the app and return to the main menu.


### Usage example

First associate a click config provider callback with your window: ```c

void app_init(void) {
  ...
  window_set_click_config_provider(&window, (ClickConfigProvider) config_provider);
  ...
}
```

 Then in the callback, you set your desired configuration for each button: ```c

void config_provider(Window *window) {
 // single click / repeat-on-hold config:
  window_single_click_subscribe(BUTTON_ID_DOWN, down_single_click_handler);
  window_single_repeating_click_subscribe(BUTTON_ID_SELECT, 1000, select_single_click_handler);

  // multi click config:
  window_multi_click_subscribe(BUTTON_ID_SELECT, 2, 10, 0, true, select_multi_click_handler);

  // long click config:
  window_long_click_subscribe(BUTTON_ID_SELECT, 700, select_long_click_handler, select_long_click_release_handler);
}
```

 Now you implement the handlers for each click you've subscribed to and set up: ```c

void down_single_click_handler(ClickRecognizerRef recognizer, void *context) {
  ... called on single click ...
  Window *window = (Window *)context;
}
void select_single_click_handler(ClickRecognizerRef recognizer, void *context) {
  ... called on single click, and every 1000ms of being held ...
  Window *window = (Window *)context;
}

void select_multi_click_handler(ClickRecognizerRef recognizer, void *context) {
  ... called for multi-clicks ...
  Window *window = (Window *)context;
  const uint16_t count = click_number_of_clicks_counted(recognizer);
}

void select_long_click_handler(ClickRecognizerRef recognizer, void *context) {
  ... called on long click start ...
  Window *window = (Window *)context;
}

void select_long_click_release_handler(ClickRecognizerRef recognizer, void *context) {
  ... called when long click is released ...
  Window *window = (Window *)context;
}
```


### See also

Refer to the  (chapter "Clicks") for a conceptual overview of clicks and relevant code examples. 

## Functions

:::info uint8_t click_number_of_clicks_counted(ClickRecognizerRef recognizer)

Gets the click count. You can use this inside a click handler implementation to get the click count for multi_click and (repeated) click events. 

##### Parameters

- **recognizer**: The click recognizer for which to get the click count 

##### Returns

The number of consecutive clicks, and for auto-repeating the number of repetitions. 

:::

:::info ButtonId click_recognizer_get_button_id(ClickRecognizerRef recognizer)

Gets the button identifier. You can use this inside a click handler implementation to get the button id for the click event. 

##### Parameters

- **recognizer**: The click recognizer for which to get the button id that caused the click event 

##### Returns

the [ButtonId](/documentation/c/group___clicks.md#enum-buttonid) of the click recognizer 

:::

:::info bool click_recognizer_is_repeating(ClickRecognizerRef recognizer)

Is this a repeating click. You can use this inside a click handler implementation to find out whether this is a repeating click or not. 

##### Parameters

- **recognizer**: The click recognizer for which to find out whether this is a repeating click. 

##### Returns

true if this is a repeating click. 

:::


## Enums

:::info ButtonId

Button ID values. 

##### Values

- **BUTTON_ID_BACK**: Back button. 
- **BUTTON_ID_UP**: Up button. 
- **BUTTON_ID_SELECT**: Select (middle) button. 
- **BUTTON_ID_DOWN**: Down button. 
- **NUM_BUTTONS**: Total number of buttons. 

:::

## Typedefs

:::info typedef void* ClickRecognizerRef

Reference to opaque click recognizer When a [ClickHandler]() callback is called, the recognizer that fired the handler is passed in. 

:::

:::info typedef void(* ClickHandler) (ClickRecognizerRef recognizer, void *context)

Function signature of the callback that handles a recognized click pattern. 

##### Parameters

- **recognizer**: The click recognizer that detected a "click" pattern 
- **context**: Pointer to application specified data (see [window_set_click_config_provider_with_context()](/documentation/c/group___window.md#function-window-set-click-config-provider-with-context) and [window_set_click_context()](/documentation/c/group___window.md#function-window-set-click-context)). This defaults to the window. 

:::

:::info typedef void(* ClickConfigProvider) (void *context)

This callback is called every time the window becomes visible (and when you call [window_set_click_config_provider()]() if the window is already visible). 

##### Parameters

- **context**: Pointer to application specific data (see [window_set_click_config_provider_with_context()](/documentation/c/group___window.md#function-window-set-click-config-provider-with-context)). 

:::

