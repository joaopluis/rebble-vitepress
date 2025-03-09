# AppMessage

Bi-directional communication between phone apps and Pebble watchapps

AppMessage is a bi-directional messaging subsystem that enables communication between phone apps and Pebble watchapps. This is accomplished by allowing phone and watchapps to exchange arbitrary sets of key/value pairs. The key/value pairs are stored in the form of a Dictionary, the layout of which is left for the application developer to define.

AppMessage implements a push-oriented messaging protocol, enabling your app to call functions and methods to push messages from Pebble to phone and vice versa. The protocol is symmetric: both Pebble and the phone can send messages. All messages are acknowledged. In this context, there is no client-server model, as such.

During the sending phase, one side initiates the communication by transferring a dictionary over the air. The other side then receives this message and is given an opportunity to perform actions on that data. As soon as possible, the other side is expected to reply to the message with a simple acknowledgment that the message was received successfully.

PebbleKit JavaScript provides you with a set of standard JavaScript APIs that let your app receive messages from the watch, make HTTP requests, and send new messages to the watch. AppMessage APIs are used to send and receive data. A Pebble watchapp can use the resources of the connected phone to fetch information from web services, send information to web APIs, or store login credentials. On the JavaScript side, you communicate with Pebble via a Pebble object exposed in the namespace.

Messages always need to get either ACKnowledged or "NACK'ed," that is, not acknowledged. If not, messages will result in a time-out failure. The AppMessage subsystem takes care of this implicitly. In the phone libraries, this step is a bit more explicit.

The Pebble watch interfaces make a distinction between the Inbox and the Outbox calls. The Inbox receives messages from the phone on the watch; the Outbox sends messages from the watch to the phone. These two buffers can be managed separately.


#### Warning

A critical constraint of AppMessage is that messages are limited in size. An ingoing (outgoing) message larger than the inbox (outbox) will not be transmitted and will generate an error. You can choose your inbox and outbox size when you call [app_message_open()](/documentation/c/group___app_message.md#function-app-message-open).

Pebble SDK provides a static minimum guaranteed size (APP_MESSAGE_INBOX_SIZE_MINIMUM and APP_MESSAGE_OUTBOX_SIZE_MINIMUM). Requesting a buffer of the minimum guaranteed size (or smaller) is always guaranteed to succeed on all Pebbles in this SDK version or higher, and with every phone.

In some context, Pebble might be able to provide your application with larger inbox/outbox. You can call [app_message_inbox_size_maximum()](/documentation/c/group___app_message.md#function-app-message-inbox-size-maximum) and [app_message_outbox_size_maximum()](/documentation/c/group___app_message.md#function-app-message-outbox-size-maximum) in your code to get the largest possible value you can use.

To always get the largest buffer available, follow this best practice:

app_message_open([app_message_inbox_size_maximum()](/documentation/c/group___app_message.md#function-app-message-inbox-size-maximum), [app_message_outbox_size_maximum()](/documentation/c/group___app_message.md#function-app-message-outbox-size-maximum))

AppMessage uses your application heap space. That means that the sizes you pick for the AppMessage inbox and outbox buffers are important in optimizing your app’s performance. The more you use for AppMessage, the less space you’ll have for the rest of your app.

To register callbacks, you should call [app_message_register_inbox_received()](/documentation/c/group___app_message.md#function-app-message-register-inbox-received), [app_message_register_inbox_dropped()](/documentation/c/group___app_message.md#function-app-message-register-inbox-dropped), [app_message_register_outbox_sent()](/documentation/c/group___app_message.md#function-app-message-register-outbox-sent), [app_message_register_outbox_failed()](/documentation/c/group___app_message.md#function-app-message-register-outbox-failed).

Pebble recommends that you call them before [app_message_open()](/documentation/c/group___app_message.md#function-app-message-open) to ensure you do not miss a message arriving between starting AppMessage and registering the callback. You can set a context that will be passed to all the callbacks with [app_message_set_context()](/documentation/c/group___app_message.md#function-app-message-set-context).

In circumstances that may not be ideal, when using AppMessage several types of errors may occur. For example:



* The send can’t start because the system state won't allow for a success. Several reasons you're unable to perform a send: A send() is already occurring (only one is possible at a time) or Bluetooth is not enabled or connected.
* The send and receive occur, but the receiver can’t accept the message. For instance, there is no app that receives such a message.
* The send occurs, but the receiver either does not actually receive the message or can’t handle it in a timely fashion.
* In the case of a dropped message, the phone sends a message to the watchapp, while there is still an unprocessed message in the Inbox.

Other errors are possible and described by [AppMessageResult](/documentation/c/group___app_message.md#enum-appmessageresult). A client of the AppMessage interface should use the result codes to be more robust in the face of communication problems either in the field or while debugging.

Refer to the  for a conceptual overview and code usage.

For code examples, refer to the SDK Examples that directly use App Message. These include:

* [pebblekit-js-weather](https://github.com/pebble-examples/pebblekit-js-weather)
* [pebblekit-js-quotes](https://github.com/pebble-examples/pebblekit-js-quotes)

## Functions

:::info AppMessageResult app_message_open(const uint32_t size_inbound, const uint32_t size_outbound)

Open AppMessage to transfers. 

##### Parameters

- **size_inbound**: The required size for the Inbox buffer 
- **size_outbound**: The required size for the Outbox buffer

##### Returns

A result code such as [APP_MSG_OK](/documentation/c/group___app_message.md#enumvalue-app-msg-ok) or [APP_MSG_OUT_OF_MEMORY](/documentation/c/group___app_message.md#enumvalue-app-msg-out-of-memory).

:::

:::info void app_message_deregister_callbacks(void)

Deregisters all callbacks and their context. 

:::

:::info void * app_message_get_context(void)

Gets the context that will be passed to all AppMessage callbacks. 

##### Returns

The current context on record. 

:::

:::info void * app_message_set_context(void *context)

Sets the context that will be passed to all AppMessage callbacks. 

##### Parameters

- **context**: The context that will be passed to all AppMessage callbacks.

##### Returns

The previous context that was on record. 

:::

:::info AppMessageInboxReceived app_message_register_inbox_received(AppMessageInboxReceived received_callback)

Registers a function that will be called after any Inbox message is received successfully. 

##### Parameters

- **received_callback**: The callback that will be called going forward; NULL to not have a callback.

##### Returns

The previous callback (or NULL) that was on record. 

:::

:::info AppMessageInboxDropped app_message_register_inbox_dropped(AppMessageInboxDropped dropped_callback)

Registers a function that will be called after any Inbox message is received but dropped by the system. 

##### Parameters

- **dropped_callback**: The callback that will be called going forward; NULL to not have a callback.

##### Returns

The previous callback (or NULL) that was on record. 

:::

:::info AppMessageOutboxSent app_message_register_outbox_sent(AppMessageOutboxSent sent_callback)

Registers a function that will be called after any Outbox message is sent and an ACK reply occurs in a timely fashion. 

##### Parameters

- **sent_callback**: The callback that will be called going forward; NULL to not have a callback.

##### Returns

The previous callback (or NULL) that was on record. 

:::

:::info AppMessageOutboxFailed app_message_register_outbox_failed(AppMessageOutboxFailed failed_callback)

Registers a function that will be called after any Outbox message is not sent with a timely ACK reply. The call to [app_message_outbox_send()]() must have succeeded. 

##### Parameters

- **failed_callback**: The callback that will be called going forward; NULL to not have a callback.

##### Returns

The previous callback (or NULL) that was on record. 

:::

:::info uint32_t app_message_inbox_size_maximum(void)

Programatically determine the inbox size maximum in the current configuration. 

##### Returns

The inbox size maximum on this firmware.

:::

:::info uint32_t app_message_outbox_size_maximum(void)

Programatically determine the outbox size maximum in the current configuration. 

##### Returns

The outbox size maximum on this firmware.

:::

:::info AppMessageResult app_message_outbox_begin(DictionaryIterator **iterator)

Begin writing to the Outbox's Dictionary buffer. 

##### Parameters

- **iterator**: Location to write the [DictionaryIterator](/documentation/c/struct_dictionary_iterator.md) pointer. This will be NULL on failure.

##### Returns

A result code, including but not limited to [APP_MSG_OK](/documentation/c/group___app_message.md#enumvalue-app-msg-ok), [APP_MSG_INVALID_ARGS](/documentation/c/group___app_message.md#enumvalue-app-msg-invalid-args) or [APP_MSG_BUSY](/documentation/c/group___app_message.md#enumvalue-app-msg-busy).

:::

:::info AppMessageResult app_message_outbox_send(void)

Sends the outbound dictionary. 

##### Returns

A result code, including but not limited to [APP_MSG_OK](/documentation/c/group___app_message.md#enumvalue-app-msg-ok) or [APP_MSG_BUSY](/documentation/c/group___app_message.md#enumvalue-app-msg-busy). The APP_MSG_OK code does not mean that the message was sent successfully, but only that the start of processing was successful. Since this call is asynchronous, callbacks provide the final result instead.

:::


## Enums

:::info AppMessageResult

AppMessage result codes. 

##### Values

- **APP_MSG_OK**: (0) All good, operation was successful. 
- **APP_MSG_SEND_TIMEOUT**: (2) The other end did not confirm receiving the sent data with an (n)ack in time. 
- **APP_MSG_SEND_REJECTED**: (4) The other end rejected the sent data, with a "nack" reply. 
- **APP_MSG_NOT_CONNECTED**: (8) The other end was not connected. 
- **APP_MSG_APP_NOT_RUNNING**: (16) The local application was not running. 
- **APP_MSG_INVALID_ARGS**: (32) The function was called with invalid arguments. 
- **APP_MSG_BUSY**: (64) There are pending (in or outbound) messages that need to be processed first before new ones can be received or sent. 
- **APP_MSG_BUFFER_OVERFLOW**: (128) The buffer was too small to contain the incoming message. 
- **APP_MSG_ALREADY_RELEASED**: (512) The resource had already been released. 
- **APP_MSG_CALLBACK_ALREADY_REGISTERED**: (1024) The callback was already registered. 
- **APP_MSG_CALLBACK_NOT_REGISTERED**: (2048) The callback could not be deregistered, because it had not been registered before. 
- **APP_MSG_OUT_OF_MEMORY**: (4096) The system did not have sufficient application memory to perform the requested operation. 
- **APP_MSG_CLOSED**: (8192) App message was closed. 
- **APP_MSG_INTERNAL_ERROR**: (16384) An internal OS error prevented AppMessage from completing an operation. 
- **APP_MSG_INVALID_STATE**: (32768) The function was called while App Message was not in the appropriate state. 

:::

## Typedefs

:::info typedef void(* AppMessageInboxReceived) (DictionaryIterator *iterator, void *context)

Called after an incoming message is received. 

##### Parameters

- **iterator**: The dictionary iterator to the received message. Never NULL. Note that the iterator cannot be modified or saved off. The library may need to re-use the buffered space where this message is supplied. Returning from the callback indicates to the library that the received message contents are no longer needed or have already been externalized outside its buffering space and iterator.
- **context**: Pointer to application data as specified when registering the callback. 

:::

:::info typedef void(* AppMessageInboxDropped) (AppMessageResult reason, void *context)

Called after an incoming message is dropped. 

##### Parameters

- **result**: The reason why the message was dropped. Some possibilities include [APP_MSG_BUSY](/documentation/c/group___app_message.md#enumvalue-app-msg-busy) and [APP_MSG_BUFFER_OVERFLOW](/documentation/c/group___app_message.md#enumvalue-app-msg-buffer-overflow).
- **context**: Pointer to application data as specified when registering the callback.

:::

:::info typedef void(* AppMessageOutboxSent) (DictionaryIterator *iterator, void *context)

Called after an outbound message has been sent and the reply has been received. 

##### Parameters

- **iterator**: The dictionary iterator to the sent message. The iterator will be in the final state that was sent. Note that the iterator cannot be modified or saved off as the library will re-open the dictionary with dict_begin() after this callback returns.
- **context**: Pointer to application data as specified when registering the callback. 

:::

:::info typedef void(* AppMessageOutboxFailed) (DictionaryIterator *iterator, AppMessageResult reason, void *context)

Called after an outbound message has not been sent successfully. 

##### Parameters

- **iterator**: The dictionary iterator to the sent message. The iterator will be in the final state that was sent. Note that the iterator cannot be modified or saved off as the library will re-open the dictionary with dict_begin() after this callback returns.
- **result**: The result of the operation. Some possibilities for the value include [APP_MSG_SEND_TIMEOUT](/documentation/c/group___app_message.md#enumvalue-app-msg-send-timeout), [APP_MSG_SEND_REJECTED](/documentation/c/group___app_message.md#enumvalue-app-msg-send-rejected), [APP_MSG_NOT_CONNECTED](/documentation/c/group___app_message.md#enumvalue-app-msg-not-connected), [APP_MSG_APP_NOT_RUNNING](/documentation/c/group___app_message.md#enumvalue-app-msg-app-not-running), and the combination `(APP_MSG_NOT_CONNECTED | APP_MSG_APP_NOT_RUNNING)`.
- **context**: Pointer to application data as specified when registering the callback.

:::

