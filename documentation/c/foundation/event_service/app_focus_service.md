# AppFocusService

Handling app focus The AppFocusService allows developers to be notified when their apps become visible on the screen. Common reasons your app may be running but not be on screen are: it's still in the middle of launching and being revealed by a system animation, or it is being covered by a system window such as a notification. This service is useful for apps that require a high degree of user interactivity, like a game where you'll want to pause when a notification covers your app window. It can be also used for apps that want to sync up an intro animation to the end of the system animation that occurs before your app is visible. 

## Functions

:::info void app_focus_service_subscribe_handlers(AppFocusHandlers handlers)

Subscribe to the focus event service. Once subscribed, the handlers get called every time the app gains or loses focus. 

##### Parameters

- **handler**: Handlers which will be called on will-focus and did-focus events. 

:::

:::info void app_focus_service_subscribe(AppFocusHandler handler)

Subscribe to the focus event service. Once subscribed, the handler gets called every time the app focus changes. 

##### Parameters

- **handler**: A callback to be called on will-focus events. 

:::

:::info void app_focus_service_unsubscribe(void)

Unsubscribe from the focus event service. Once unsubscribed, the previously registered handlers will no longer be called. 

:::


## Typedefs

:::info typedef void(* AppFocusHandler) (bool in_focus)

Callback type for focus events. 

##### Parameters

- **in_focus**: True if the app is gaining focus, false otherwise. 

:::

