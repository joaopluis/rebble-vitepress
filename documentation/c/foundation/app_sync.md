# AppSync

[AppSync] is a convenience layer that resides on top of [AppMessage](/documentation/c/group___app_message.md), and serves as a UI synchronization layer for AppMessage. In so doing, [AppSync] makes it easier to drive the information displayed in the watchapp UI with messages sent by a phone app.

[AppSync] maintains and updates a Dictionary, and provides your app with a callback ([AppSyncTupleChangedCallback](/documentation/c/group___app_sync.md#typedef-appsynctuplechangedcallback)) routine that is called whenever the Dictionary changes and the app's UI is updated. Note that the app UI is not updated automatically. To update the UI, you need to implement the callback.

Pebble OS provides support for data serialization utilities, like Dictionary, Tuple and [Tuplet] data structures and their accompanying functions. You use Tuplets to create a Dictionary with Tuple structures.

[AppSync] manages the storage and bookkeeping chores of the current Tuple values. [AppSync] copies incoming AppMessage Tuples into this "current" Dictionary, so that the key/values remain available for the UI to use. For example, it is safe to use a C-string value provided by [AppSync] and use it directly in a [text_layer_set_text()](/documentation/c/group___text_layer.md#function-text-layer-set-text) call.

Your app needs to supply the buffer that [AppSync] uses for the "current" Dictionary when initializing [AppSync].

Refer to the [Synchronizing App UI](https://developer.getpebble.com/guides/pebble-apps/communications/appsync/) guide for a conceptual overview and code usage. 

## Functions

:::info void app_sync_init(struct AppSync *s, uint8_t *buffer, const uint16_t buffer_size, const Tuplet *const keys_and_initial_values, const uint8_t count, AppSyncTupleChangedCallback tuple_changed_callback, AppSyncErrorCallback error_callback, void *context)

Initialized an [AppSync] system with specific buffer size and initial keys and values. The `callback.value_changed` callback will be called **asynchronously** with the initial keys and values, as to avoid duplicating code to update your app's UI. 

##### Parameters

- **s**: The [AppSync] context to initialize 
- **buffer**: The buffer that [AppSync] should use 
- **buffer_size**: The size of the backing storage of the "current" dictionary. Use [dict_calc_buffer_size_from_tuplets()](/documentation/c/group___dictionary.md#function-dict-calc-buffer-size-from-tuplets) to estimate the size you need. 
- **keys_and_initial_values**: An array of Tuplets with the initial keys and values. 
- **count**: The number of Tuplets in the `keys_and_initial_values` array. 
- **tuple_changed_callback**: The callback that will handle changed key/value pairs 
- **error_callback**: The callback that will handle errors 
- **context**: Pointer to app specific data that will get passed into calls to the callbacks 

:::

:::info void app_sync_deinit(struct AppSync *s)

Cleans up an [AppSync] system. It frees the buffer allocated by an [app_sync_init()](/documentation/c/group___app_sync.md#function-app-sync-init) call and deregisters itself from the [AppMessage](/documentation/c/group___app_message.md) subsystem. 

##### Parameters

- **s**: The [AppSync] context to deinit. 

:::

:::info AppMessageResult app_sync_set(struct AppSync *s, const Tuplet *const keys_and_values_to_update, const uint8_t count)

Updates key/value pairs using an array of Tuplets. 

##### Parameters

- **s**: The [AppSync] context 
- **keys_and_values_to_update**: An array of Tuplets with the keys and values to update. The data in the Tuplets are copied during the call, so the array can be stack-allocated. 
- **count**: The number of Tuplets in the `keys_and_values_to_update` array. 

##### Returns

The result code from the [AppMessage](/documentation/c/group___app_message.md) subsystem. Can be [APP_MSG_OK](/documentation/c/group___app_message.md#enumvalue-app-msg-ok), [APP_MSG_BUSY](/documentation/c/group___app_message.md#enumvalue-app-msg-busy) or [APP_MSG_INVALID_ARGS](/documentation/c/group___app_message.md#enumvalue-app-msg-invalid-args)

:::

:::info const Tuple * app_sync_get(const struct AppSync *s, const uint32_t key)

Finds and gets a tuple in the "current" dictionary. 

##### Parameters

- **s**: The [AppSync] context 
- **key**: The key for which to find a Tuple 

##### Returns

Pointer to a found Tuple, or NULL if there was no Tuple with the specified key. 

:::


## Typedefs

:::info typedef void(* AppSyncTupleChangedCallback) (const uint32_t key, const Tuple *new_tuple, const Tuple *old_tuple, void *context)

Called whenever a Tuple changes. This does not necessarily mean the value in the Tuple has changed. When the internal "current" dictionary gets updated, existing Tuples might get shuffled around in the backing buffer, even though the values stay the same. In this callback, the client code gets the chance to remove the old reference and start using the new one. In this callback, your application MUST clean up any references to the `old_tuple` of a PREVIOUS call to this callback (and replace it with the `new_tuple` that is passed in with the current call). 

##### Parameters

- **key**: The key for which the Tuple was changed. 
- **new_tuple**: The new tuple. The tuple points to the actual, updated "current" dictionary, as backed by the buffer internal to the [AppSync] struct. Therefore the Tuple can be used after the callback returns, until the [AppSync] is deinited. In case there was an error (e.g. storage shortage), this `new_tuple` can be `NULL_TUPLE`. 
- **old_tuple**: The values that will be replaced with `new_tuple`. The key, value and type will be equal to the previous tuple in the old destination dictionary; however, the `old_tuple` points to a stack-allocated copy of the old data. This value will be `NULL_TUPLE` when the initial values are being set. 
- **context**: Pointer to application specific data, as set using [app_sync_init()](/documentation/c/group___app_sync.md#function-app-sync-init)

:::

:::info typedef void(* AppSyncErrorCallback) (DictionaryResult dict_error, AppMessageResult app_message_error, void *context)

Called whenever there was an error. 

##### Parameters

- **dict_error**: The dictionary result error code, if the error was dictionary related. 
- **app_message_error**: The app_message result error code, if the error was app_message related. 
- **context**: Pointer to application specific data, as set using [app_sync_init()](/documentation/c/group___app_sync.md#function-app-sync-init)

:::

:::info typedef struct AppSync AppSync

:::

