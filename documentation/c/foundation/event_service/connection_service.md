# ConnectionService

Determine what the Pebble watch is connected to

The ConnectionService allows your app to learn about the apps the Pebble watch is connected to. You can ask the system for this information at a given time or you can register to receive events every time connection or disconnection events occur.

It allows you to determine whether the watch is connected to the Pebble mobile app by subscribing to the pebble_app_connection_handler or by calling the connection_service_peek_pebble_app_connection function. Note that when the Pebble app is connected, you can assume PebbleKit JS apps will also be running correctly.

The service also allows you to determine if the Pebble watch can establish a connection to a PebbleKit companion app by subscribing to the pebblekit_connection_handler or by calling the connection_service_peek_pebblekit_connection function. Today, due to architectural differences between iOS and Android, this will return true for Android anytime a connection with the Pebble mobile app is established (since PebbleKit messages are routed through the Android app). For iOS, this will return true when any PebbleKit companion app has established a connection with the Pebble watch (since companion app messages are routed directly to the watch) 

## Functions

:::info bool connection_service_peek_pebble_app_connection(void)

Query the bluetooth connection service for the current Pebble app connection status. 

##### Returns

true if the Pebble app is connected, false otherwise 

:::

:::info bool connection_service_peek_pebblekit_connection(void)

Query the bluetooth connection service for the current PebbleKit connection status. 

##### Returns

true if a PebbleKit companion app is connected, false otherwise 

:::

:::info void connection_service_subscribe(ConnectionHandlers conn_handlers)

Subscribe to the connection event service. Once subscribed, the appropriate handler gets called based on the type of connection event and user provided handlers. 

##### Parameters

- **[ConnectionHandlers](/documentation/c/struct_connection_handlers.md)**: A struct populated with the handlers to be called when the specified connection event occurs. If a given handler is NULL, no function will be called. 

:::

:::info void connection_service_unsubscribe(void)

Unsubscribe from the bluetooth event service. Once unsubscribed, the previously registered handler will no longer be called. 

:::

:::info bool bluetooth_connection_service_peek(void)

:::

:::info void bluetooth_connection_service_subscribe(ConnectionHandler handler)

:::

:::info void bluetooth_connection_service_unsubscribe(void)

:::


## Typedefs

:::info typedef void(* ConnectionHandler) (bool connected)

:::

:::info typedef ConnectionHandler BluetoothConnectionHandler

:::

:::info typedef void(* ConnectionHandler) (bool connected)

:::

:::info typedef ConnectionHandler BluetoothConnectionHandler

:::

