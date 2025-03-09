# Wakeup

## Functions

:::info void wakeup_service_subscribe(WakeupHandler handler)

Registers a [WakeupHandler](/documentation/c/group___wakeup.md#typedef-wakeuphandler) to be called when wakeup events occur. 

##### Parameters

- **handler**: The callback that gets called when the wakeup event occurs 

:::

:::info WakeupId wakeup_schedule(time_t timestamp, int32_t cookie, bool notify_if_missed)

Registers a wakeup event that triggers a callback at the specified time. Applications may only schedule up to 8 wakeup events. Wakeup events are given a 1 minute duration window, in that no application may schedule a wakeup event with 1 minute of a currently scheduled wakeup event. 

##### Parameters

- **timestamp**: The requested time (UTC) for the wakeup event to occur 
- **cookie**: The application specific reason for the wakeup event 
- **notify_if_missed**: On powering on Pebble, will alert user when notifications were missed due to Pebble being off. 

##### Returns

negative values indicate errors ([StatusCode](/documentation/c/group___storage.md#enum-statuscode)) E_RANGE if the event cannot be scheduled due to another event in that period. E_INVALID_ARGUMENT if the time requested is in the past. E_OUT_OF_RESOURCES if the application has already scheduled all 8 wakeup events. E_INTERNAL if a system error occurred during scheduling. 

:::

:::info void wakeup_cancel(WakeupId wakeup_id)

Cancels a wakeup event. 

##### Parameters

- **wakeup_id**: Wakeup event to cancel 

:::

:::info void wakeup_cancel_all(void)

Cancels all wakeup event for the app. 

:::

:::info bool wakeup_get_launch_event(WakeupId *wakeup_id, int32_t *cookie)

Retrieves the wakeup event info for an app that was launched by a wakeup_event (ie. [launch_reason()](/documentation/c/group___launch_reason.md#function-launch-reason) === APP_LAUNCH_WAKEUP) so that an app may display information regarding the wakeup event. 

##### Parameters

- **wakeup_id**: [WakeupId](/documentation/c/group___wakeup.md#typedef-wakeupid) for the wakeup event that caused the app to wakeup 
- **cookie**: App provided reason for the wakeup event 

##### Returns

True if app was launched due to a wakeup event, false otherwise 

:::

:::info bool wakeup_query(WakeupId wakeup_id, time_t *timestamp)

Checks if the current [WakeupId](/documentation/c/group___wakeup.md#typedef-wakeupid) is still scheduled and therefore valid. 

##### Parameters

- **wakeup_id**: Wakeup event to query for validity and scheduled time 
- **timestamp**: Optionally points to an address of a time_t variable to store the time that the wakeup event is scheduled to occur. (The time is in UTC, but local time when [clock_is_timezone_set](/documentation/c/group___wall_time.md#function-clock-is-timezone-set) returns false). You may pass NULL instead if you do not need it. 

##### Returns

True if [WakeupId](/documentation/c/group___wakeup.md#typedef-wakeupid) is still scheduled, false if it doesn't exist or has already occurred 

:::


## Typedefs

:::info typedef int32_t WakeupId

[WakeupId]() is an identifier for a wakeup event. 

:::

:::info typedef void(* WakeupHandler) (WakeupId wakeup_id, int32_t cookie)

The type of function which can be called when a wakeup event occurs.    The arguments will be the id of the wakeup event that occurred, as well as the scheduled cookie provided to [wakeup_schedule](). 

:::

