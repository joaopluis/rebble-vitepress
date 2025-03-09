# Storage

A mechanism to store persistent application data and state

The Persistent Storage API provides you with a mechanism for performing a variety of tasks, like saving user settings, caching data from the phone app, or counting high scores for Pebble watchapp games.

In Pebble OS, storage is defined by a collection of fields that you can create, modify or delete. In the API, a field is specified as a key with a corresponding value.

Using the Storage API, every app is able to get its own persistent storage space. Each value in that space is associated with a uint32_t key.

Storage supports saving integers, strings and byte arrays. The maximum size of byte arrays and strings is defined by PERSIST_DATA_MAX_LENGTH (currently set to 256 bytes). You call the function persist_exists(key), which returns a boolean indicating if the key exists or not. The Storage API enables your app to save its state, and when compared to using [AppMessage](/documentation/c/group___app_message.md) to retrieve values from the phone, it provides you with a much faster way to restore state. In addition, it draws less power from the battery.

Note that the size of all persisted values cannot exceed 4K per app. 

## Functions

:::info bool persist_exists(const uint32_t key)

Checks whether a value has been set for a given key in persistent storage. 

##### Parameters

- **key**: The key of the field to check. 

##### Returns

true if a value exists, otherwise false. 

:::

:::info int persist_get_size(const uint32_t key)

Gets the size of a value for a given key in persistent storage. 

##### Parameters

- **key**: The key of the field to lookup the data size. 

##### Returns

The size of the value in bytes or [E_DOES_NOT_EXIST](/documentation/c/group___storage.md#enumvalue-e-does-not-exist) if there is no field matching the given key. 

:::

:::info bool persist_read_bool(const uint32_t key)

Reads a bool value for a given key from persistent storage. If the value has not yet been set, this will return false. 

##### Parameters

- **key**: The key of the field to read from. 

##### Returns

The bool value of the key to read from. 

:::

:::info int32_t persist_read_int(const uint32_t key)

Reads an int value for a given key from persistent storage. 

##### Parameters

- **key**: The key of the field to read from. 

##### Returns

The int value of the key to read from. 

:::

:::info int persist_read_data(const uint32_t key, void *buffer, const size_t buffer_size)

Reads a blob of data for a given key from persistent storage into a given buffer. If the value has not yet been set, the given buffer is left unchanged. 

##### Parameters

- **key**: The key of the field to read from. 
- **buffer**: The pointer to a buffer to be written to. 
- **buffer_size**: The maximum size of the given buffer. 

##### Returns

The number of bytes written into the buffer or [E_DOES_NOT_EXIST](/documentation/c/group___storage.md#enumvalue-e-does-not-exist) if there is no field matching the given key. 

:::

:::info int persist_read_string(const uint32_t key, char *buffer, const size_t buffer_size)

Reads a string for a given key from persistent storage into a given buffer. The string will be null terminated. If the value has not yet been set, the given buffer is left unchanged. 

##### Parameters

- **key**: The key of the field to read from. 
- **buffer**: The pointer to a buffer to be written to. 
- **buffer_size**: The maximum size of the given buffer. This includes the null character. 

##### Returns

The number of bytes written into the buffer or [E_DOES_NOT_EXIST](/documentation/c/group___storage.md#enumvalue-e-does-not-exist) if there is no field matching the given key. 

:::

:::info status_t persist_write_bool(const uint32_t key, const bool value)

Writes a bool value flag for a given key into persistent storage. 

##### Parameters

- **key**: The key of the field to write to. 
- **value**: The boolean value to write. 

##### Returns

The number of bytes written if successful, a value from [StatusCode](/documentation/c/group___storage.md#enum-statuscode) otherwise. 

:::

:::info status_t persist_write_int(const uint32_t key, const int32_t value)

Writes an int value for a given key into persistent storage. 

##### Parameters

- **key**: The key of the field to write to. 
- **value**: The int value to write. 

##### Returns

The number of bytes written if successful, a value from [StatusCode](/documentation/c/group___storage.md#enum-statuscode) otherwise. 

:::

:::info int persist_write_data(const uint32_t key, const void *data, const size_t size)

Writes a blob of data of a specified size in bytes for a given key into persistent storage. The maximum size is [PERSIST_DATA_MAX_LENGTH](). 

##### Parameters

- **key**: The key of the field to write to. 
- **data**: The pointer to the blob of data. 
- **size**: The size in bytes. 

##### Returns

The number of bytes written if successful, a value from [StatusCode](/documentation/c/group___storage.md#enum-statuscode) otherwise. 

:::

:::info int persist_write_string(const uint32_t key, const char *cstring)

Writes a string a given key into persistent storage. The maximum size is [PERSIST_STRING_MAX_LENGTH]() including the null terminator. 

##### Parameters

- **key**: The key of the field to write to. 
- **cstring**: The pointer to null terminated string. 

##### Returns

The number of bytes written if successful, a value from [StatusCode](/documentation/c/group___storage.md#enum-statuscode) otherwise. 

:::

:::info status_t persist_delete(const uint32_t key)

Deletes the value of a key from persistent storage. 

##### Parameters

- **key**: The key of the field to delete from. 

:::


## Enums

:::info StatusCode

Status codes. See [status_t](). 

##### Values

- **S_SUCCESS**: Operation completed successfully. 
- **E_ERROR**: An error occurred (no description). 
- **E_UNKNOWN**: No idea what went wrong. 
- **E_INTERNAL**: There was a generic internal logic error. 
- **E_INVALID_ARGUMENT**: The function was not called correctly. 
- **E_OUT_OF_MEMORY**: Insufficient allocatable memory available. 
- **E_OUT_OF_STORAGE**: Insufficient long-term storage available. 
- **E_OUT_OF_RESOURCES**: Insufficient resources available. 
- **E_RANGE**: Argument out of range (may be dynamic). 
- **E_DOES_NOT_EXIST**: Target of operation does not exist. 
- **E_INVALID_OPERATION**: Operation not allowed (may depend on state). 
- **E_BUSY**: Another operation prevented this one. 
- **E_AGAIN**: Operation not completed; try again. 
- **S_TRUE**: Equivalent of boolean true. 
- **S_FALSE**: Equivalent of boolean false. 
- **S_NO_MORE_ITEMS**: For list-style requests. At end of list. 
- **S_NO_ACTION_REQUIRED**: No action was taken as none was required. 

:::

:::info StatusCode

Status codes. See [status_t](). 

##### Values

- **S_SUCCESS**: Operation completed successfully. 
- **E_ERROR**: An error occurred (no description). 
- **E_UNKNOWN**: No idea what went wrong. 
- **E_INTERNAL**: There was a generic internal logic error. 
- **E_INVALID_ARGUMENT**: The function was not called correctly. 
- **E_OUT_OF_MEMORY**: Insufficient allocatable memory available. 
- **E_OUT_OF_STORAGE**: Insufficient long-term storage available. 
- **E_OUT_OF_RESOURCES**: Insufficient resources available. 
- **E_RANGE**: Argument out of range (may be dynamic). 
- **E_DOES_NOT_EXIST**: Target of operation does not exist. 
- **E_INVALID_OPERATION**: Operation not allowed (may depend on state). 
- **E_BUSY**: Another operation prevented this one. 
- **E_AGAIN**: Operation not completed; try again. 
- **S_TRUE**: Equivalent of boolean true. 
- **S_FALSE**: Equivalent of boolean false. 
- **S_NO_MORE_ITEMS**: For list-style requests. At end of list. 
- **S_NO_ACTION_REQUIRED**: No action was taken as none was required. 

:::

## Typedefs

:::info typedef enum StatusCode StatusCode

Status codes. See [status_t](). 

:::

:::info typedef int32_t status_t

Return value for system operations. See [StatusCode](/documentation/c/group___storage.md#enum-statuscode) for possible values. 

:::

:::info typedef enum StatusCode StatusCode

Status codes. See [status_t](/documentation/c/group___storage.md#typedef-status-t). 

:::

:::info typedef int32_t status_t

Return value for system operations. See [StatusCode](/documentation/c/group___storage.md#enum-statuscode) for possible values. 

:::

