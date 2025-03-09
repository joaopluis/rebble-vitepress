# DataLogging

Enables logging data asynchronously to a mobile app

In Pebble OS, data logging is a data storage and transfer subsystem that allows watchapps to save data on non-volatile storage devices when the phone is not available to process it. The API provides your watchapp with a mechanism for short-term data buffering for asynchronous data transmission to a mobile app.

Using this API, your Pebble watchapp can create an arbitrary number of logs, but you’re limited in the amount of storage space you can use. Note that approximately 640K is available for data logging, which is shared among all watchapps that use it. This value is subject to change in the future. When the data spool is full, an app will start overwriting its own data. An app cannot overwrite another apps's data. However, the other app might have 0 bytes for data logging.

Your app can log data to a session. Every new block of data is appended to the session. The data is then sent to the associated phone application at the earliest convenience. If a phone is available, the data is sent directly to the phone. Otherwise, it is saved to the watch storage until the watch is connected to a phone.

For example:

To create a data logging session for 4-byte unsigned integers with a tag of 0x1234, you would do this: ```c

DataLoggingSessionRef logging_session = data_logging_create(0x1234, DATA_LOGGING_UINT, 4,
                                                            false);

// Fake creating some data and logging it to the session.
uint32_t data[] = { 1, 2, 3};
data_logging_log(logging_session, &data, 3);

// Fake creating more data and logging that as well.
uint32_t data2[] = { 1, 2 };
data_logging_log(logging_session, &data, 2);

// When we don't need to log anything else, we can close off the session.
data_logging_finish(logging_session);
```

## Functions

:::info DataLoggingSessionRef data_logging_create(uint32_t tag, DataLoggingItemType item_type, uint16_t item_length, bool resume)

Create a new data logging session. 

##### Parameters

- **tag**: A tag associated with the logging session. 
- **item_type**: The type of data stored in this logging session 
- **item_length**: The size of a single data item in bytes 
- **resume**: True if we want to look for a logging session of the same tag and resume logging to it. If this is false and a session with the specified tag exists, that session will be closed and a new session will be opened. 

##### Returns

An opaque reference to the data logging session 

:::

:::info void data_logging_finish(DataLoggingSessionRef logging_session)

Finish up a data logging_session. Logging data is kept until it has successfully been transferred over to the phone, but no data may be added to the session after this function is called. 

##### Parameters

- **logging_session**: a reference to the data logging session previously allocated using data_logging_create 

:::

:::info DataLoggingResult data_logging_log(DataLoggingSessionRef logging_session, const void *data, uint32_t num_items)

Add data to the data logging session. If a phone is available, the data is sent directly to the phone. Otherwise, it is saved to the watch storage until the watch is connected to a phone. 

##### Parameters

- **logging_session**: a reference to the data logging session you want to add the data to 
- **data**: a pointer to the data buffer that contains multiple items 
- **num_items**: the number of items to log. This means data must be at least (num_items * item_length) long in bytes 

##### Returns

DATA_LOGGING_SUCCESS on success

:::


## Enums

:::info DataLoggingItemType

The different types of session data that Pebble supports. This type describes the type of a singular item in the data session. Every item in a given session is the same type and size. 

##### Values

- **DATA_LOGGING_BYTE_ARRAY**: Array of bytes. Remember that this is the type of a single item in the logging session, so using this type means you'll be logging multiple byte arrays (each a fixed length described by item_length) for the duration of the session. 
- **DATA_LOGGING_UINT**: Unsigned integer. This may be a 1, 2, or 4 byte integer depending on the item_length parameter. 
- **DATA_LOGGING_INT**: Signed integer. This may be a 1, 2, or 4 byte integer depending on the item_length parameter. 

:::

:::info DataLoggingResult

Enumerated values describing the possible outcomes of data logging operations. 

##### Values

- **DATA_LOGGING_SUCCESS**: Successful operation. 
- **DATA_LOGGING_BUSY**: Someone else is writing to this logging session. 
- **DATA_LOGGING_FULL**: No more space to save data. 
- **DATA_LOGGING_NOT_FOUND**: The logging session does not exist. 
- **DATA_LOGGING_CLOSED**: The logging session was made inactive. 
- **DATA_LOGGING_INVALID_PARAMS**: An invalid parameter was passed to one of the functions. 
- **DATA_LOGGING_INTERNAL_ERR**: An internal error occurred. 

:::

:::info DataLoggingItemType

The different types of session data that Pebble supports. This type describes the type of a singular item in the data session. Every item in a given session is the same type and size. 

##### Values

- **DATA_LOGGING_BYTE_ARRAY**: Array of bytes. Remember that this is the type of a single item in the logging session, so using this type means you'll be logging multiple byte arrays (each a fixed length described by item_length) for the duration of the session. 
- **DATA_LOGGING_UINT**: Unsigned integer. This may be a 1, 2, or 4 byte integer depending on the item_length parameter. 
- **DATA_LOGGING_INT**: Signed integer. This may be a 1, 2, or 4 byte integer depending on the item_length parameter. 

:::

:::info DataLoggingResult

Enumerated values describing the possible outcomes of data logging operations. 

##### Values

- **DATA_LOGGING_SUCCESS**: Successful operation. 
- **DATA_LOGGING_BUSY**: Someone else is writing to this logging session. 
- **DATA_LOGGING_FULL**: No more space to save data. 
- **DATA_LOGGING_NOT_FOUND**: The logging session does not exist. 
- **DATA_LOGGING_CLOSED**: The logging session was made inactive. 
- **DATA_LOGGING_INVALID_PARAMS**: An invalid parameter was passed to one of the functions. 
- **DATA_LOGGING_INTERNAL_ERR**: An internal error occurred. 

:::

## Typedefs

:::info typedef void* DataLoggingSessionRef

:::

:::info typedef void* DataLoggingSessionRef

:::

