# BatteryStateService

Determines when the battery state changes

The BatteryStateService API lets you know when the battery state changes, that is, its current charge level, whether it is plugged and charging. It uses the [BatteryChargeState](/documentation/c/struct_battery_charge_state.md) structure to describe the current power state of Pebble.

Refer to the [classio-battery-connection](https://github.com/pebble-examples/classio-battery-connection) example, which demonstrates using the battery state service in a watchface. 

## Functions

:::info void battery_state_service_subscribe(BatteryStateHandler handler)

Subscribe to the battery state event service. Once subscribed, the handler gets called on every battery state change. 

##### Parameters

- **handler**: A callback to be executed on battery state change event 

:::

:::info void battery_state_service_unsubscribe(void)

Unsubscribe from the battery state event service. Once unsubscribed, the previously registered handler will no longer be called. 

:::

:::info BatteryChargeState battery_state_service_peek(void)

Peek at the last known battery state. 

##### Returns

a [BatteryChargeState](/documentation/c/struct_battery_charge_state.md) containing the last known data 

:::


## Typedefs

:::info typedef void(* BatteryStateHandler) (BatteryChargeState charge)

Callback type for battery state change events. 

##### Parameters

- **charge**: the state of the battery [BatteryChargeState](/documentation/c/struct_battery_charge_state.md)

:::

:::info typedef void(* BatteryStateHandler) (BatteryChargeState charge)

Callback type for battery state change events. 

##### Parameters

- **charge**: the state of the battery [BatteryChargeState](/documentation/c/struct_battery_charge_state.md)

:::

