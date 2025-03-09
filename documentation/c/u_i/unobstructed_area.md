# UnobstructedArea

## Functions

:::info void unobstructed_area_service_subscribe(UnobstructedAreaHandlers handlers, void *context)

Subscribe to be notified when the app's unobstructed area changes. When an unobstructed area begins changing, the `will_change` handler will be called, and every `will_change` call is always paired with a `did_change` call that occurs when it is done changing given that the `will_change` and `did_change` handlers are set. When subscribing while the unobstructed area is changing, the `will_change` handler will be called after subscription in the next event loop. 

##### Parameters

- **handlers**: The handlers that should be called when the unobstructed area changes. 
- **context**: A user-provided context that will be passed to the callback handlers. 

:::

:::info void unobstructed_area_service_unsubscribe(void)

Unsubscribe from notifications about changes to the app's unobstructed area. 

:::


## Typedefs

:::info typedef void(* UnobstructedAreaWillChangeHandler) (GRect final_unobstructed_screen_area, void *context)

Handler that will be called just before the unobstructed area will begin changing. 

##### Parameters

- **final_unobstructed_screen_area**: The final unobstructed screen area after the unobstructed area has finished changing. 
- **context**: A user-provided context. 

:::

:::info typedef void(* UnobstructedAreaChangeHandler) (AnimationProgress progress, void *context)

Handler that will be called every time the unobstructed area changes. 

##### Parameters

- **progress**: The progress of the animation changing the unobstructed area. 
- **context**: A user-provided context. 

:::

:::info typedef void(* UnobstructedAreaDidChangeHandler) (void *context)

Handler that will be called after the unobstructed area has finished changing. 

##### Parameters

- **context**: A user-provided context. 

:::

:::info typedef struct UnobstructedAreaHandlers UnobstructedAreaHandlers

:::

