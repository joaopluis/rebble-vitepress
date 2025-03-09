# Timer

Can be used to execute some code at some point in the future.

## Functions

:::info void psleep(int millis)

Waits for a certain amount of milliseconds. 

##### Parameters

- **millis**: The number of milliseconds to wait for 

:::

:::info AppTimer * app_timer_register(uint32_t timeout_ms, AppTimerCallback callback, void *callback_data)

Registers a timer that ends up in callback being called some specified time in the future. 

##### Parameters

- **timeout_ms**: The expiry time in milliseconds from the current time 
- **callback**: The callback that gets called at expiry time 
- **callback_data**: The data that will be passed to callback 

##### Returns

A pointer to an `AppTimer` that can be used to later reschedule or cancel this timer 

:::

:::info bool app_timer_reschedule(AppTimer *timer_handle, uint32_t new_timeout_ms)

Reschedules an already running timer for some point in the future. 

##### Parameters

- **timer_handle**: The timer to reschedule 
- **new_timeout_ms**: The new expiry time in milliseconds from the current time 

##### Returns

true if the timer was rescheduled, false if the timer has already elapsed 

:::

:::info void app_timer_cancel(AppTimer *timer_handle)

Cancels an already registered timer. Once cancelled the handle may no longer be used for any purpose. 

:::


## Typedefs

:::info typedef struct AppTimer AppTimer

:::

:::info typedef void(* AppTimerCallback) (void *data)

The type of function which can be called when a timer fires. The argument will be the `callback_data` passed to [app_timer_register()](). 

:::

:::info typedef struct AppTimer AppTimer

:::

:::info typedef void(* AppTimerCallback) (void *data)

The type of function which can be called when a timer fires. The argument will be the `callback_data` passed to [app_timer_register()](). 

:::

