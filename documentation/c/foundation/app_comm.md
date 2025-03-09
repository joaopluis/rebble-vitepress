# App Communication

## Functions

:::info void app_comm_set_sniff_interval(const SniffInterval interval)

Set the Bluetooth module's sniff interval. The sniff interval will be restored to normal by the OS after the app's de-init handler is called. Set the sniff interval to normal whenever possible. 

:::

:::info SniffInterval app_comm_get_sniff_interval(void)

Get the Bluetooth module's sniff interval. 

##### Returns

The [SniffInterval](/documentation/c/group___app_comm.md#enum-sniffinterval) value corresponding to the current interval 

:::


## Enums

:::info SniffInterval

Intervals during which the Bluetooth module may enter a low power mode. The sniff interval defines the period during which the Bluetooth module may not exchange (ACL) packets. The longer the sniff interval, the more time the Bluetooth module may spend in a low power mode. It may be necessary to reduce the sniff interval if an app requires reduced latency when sending messages. 

##### Values

- **SNIFF_INTERVAL_NORMAL**: Set the sniff interval to normal (power-saving) mode. 
- **SNIFF_INTERVAL_REDUCED**: Reduce the sniff interval to increase the responsiveness of the radio at the expense of increasing Bluetooth energy consumption by a multiple of 2-5 (very significant) 

:::

