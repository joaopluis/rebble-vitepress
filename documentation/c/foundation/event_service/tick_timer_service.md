# TickTimerService

Handling time components

The TickTimerService allows your app to be called every time one Time component has changed. This is extremely important for watchfaces. Your app can choose on which time component change a tick should occur. Time components are defined by a [TimeUnits](/documentation/c/group___tick_timer_service.md#enum-timeunits) enum bitmask. 

## Functions

:::info void tick_timer_service_subscribe(TimeUnits tick_units, TickHandler handler)

Subscribe to the tick timer event service. Once subscribed, the handler gets called on every requested unit change. Calling this function multiple times will override the units and handler (i.e., only  the last tick_units and handler passed will be used). 

##### Parameters

- **handler**: The callback to be executed on tick events 
- **tick_units**: a bitmask of all the units that have changed 

:::

:::info void tick_timer_service_unsubscribe(void)

Unsubscribe from the tick timer event service. Once unsubscribed, the previously registered handler will no longer be called. 

:::


## Enums

:::info TimeUnits

Time unit flags that can be used to create a bitmask for use in [tick_timer_service_subscribe()](). This will also be passed to [TickHandler](). 

##### Values

- **SECOND_UNIT**: Flag to represent the "seconds" time unit. 
- **MINUTE_UNIT**: Flag to represent the "minutes" time unit. 
- **HOUR_UNIT**: Flag to represent the "hours" time unit. 
- **DAY_UNIT**: Flag to represent the "days" time unit. 
- **MONTH_UNIT**: Flag to represent the "months" time unit. 
- **YEAR_UNIT**: Flag to represent the "years" time unit. 

:::

:::info TimeUnits

Time unit flags that can be used to create a bitmask for use in [tick_timer_service_subscribe()](). This will also be passed to [TickHandler](). 

##### Values

- **SECOND_UNIT**: Flag to represent the "seconds" time unit. 
- **MINUTE_UNIT**: Flag to represent the "minutes" time unit. 
- **HOUR_UNIT**: Flag to represent the "hours" time unit. 
- **DAY_UNIT**: Flag to represent the "days" time unit. 
- **MONTH_UNIT**: Flag to represent the "months" time unit. 
- **YEAR_UNIT**: Flag to represent the "years" time unit. 

:::

## Typedefs

:::info typedef void(* TickHandler) (struct tm *tick_time, TimeUnits units_changed)

Callback type for tick timer events. 

##### Parameters

- **tick_time**: the time at which the tick event was triggered 
- **units_changed**: which unit change triggered this tick event 

:::

:::info typedef void(* TickHandler) (struct tm *tick_time, TimeUnits units_changed)

Callback type for tick timer events. 

##### Parameters

- **tick_time**: the time at which the tick event was triggered 
- **units_changed**: which unit change triggered this tick event 

:::

