# Dictionary

Data serialization utilities

Data residing in different parts of Pebble memory (RAM) may need to be gathered and assembled into a single continuous block for transport over the network via Bluetooth. The process of gathering and assembling this continuous block of data is called serialization.

You use data serialization utilities, like Dictionary, Tuple and [Tuplet] data structures and accompanying functions, to accomplish this task. No transformations are performed on the actual data, however. These Pebble utilities simply help assemble the data into one continuous buffer according to a specific format.

[AppMessage](/documentation/c/group___app_message.md) uses these utilities&ndash;in particular, Dictionary&ndash;to send information between mobile and Pebble watchapps.


### Writing key/value pairs

To write two key/value pairs, without using Tuplets, you would do this: ```c

// Byte array + key:
static const uint32_t SOME_DATA_KEY = 0xb00bf00b;
static const uint8_t data[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

// CString + key:
static const uint32_t SOME_STRING_KEY = 0xabbababe;
static const char *string = "Hello World";

// Calculate the buffer size that is needed for the final Dictionary:
const uint8_t key_count = 2;
const uint32_t size = dict_calc_buffer_size(key_count, sizeof(data),
                                            strlen(string) + 1);

// Stack-allocated buffer in which to create the Dictionary:
uint8_t buffer[size];

// Iterator variable, keeps the state of the creation serialization process:
DictionaryIterator iter;

// Begin:
dict_write_begin(&iter, buffer, sizeof(buffer));
// Write the Data:
dict_write_data(&iter, SOME_DATA_KEY, data, sizeof(data));
// Write the CString:
dict_write_cstring(&iter, SOME_STRING_KEY, string);
// End:
const uint32_t final_size = dict_write_end(&iter);

// buffer now contains the serialized information
```


### Reading key/value pairs

To iterate over the key/value pairs in the dictionary that was created in the previous example code, you would do this:

```c

Tuple *tuple = dict_read_begin_from_buffer(&iter, buffer, final_size);
while (tuple) {
  switch (tuple->key) {
    case SOME_DATA_KEY:
      foo(tuple->value->data, tuple->length);
      break;
    case SOME_STRING_KEY:
      bar(tuple->value->cstring);
      break;
  }
  tuple = dict_read_next(&iter);
}
```


### Tuple and [Tuplet] data structures

To understand the difference between Tuple and [Tuplet] data structures: Tuple is the header for a serialized key/value pair, while [Tuplet] is a helper data structure that references the value you want to serialize. This data structure exists to make the creation of a Dictionary easier to write. Use this mnemonic to remember the difference: TupleT(emplate), the [Tuplet] being a template to create a Dictionary with Tuple structures.

For example: ```c

Tuplet pairs[] = {
  TupletInteger(WEATHER_ICON_KEY, (uint8_t) 1),
  TupletCString(WEATHER_TEMPERATURE_KEY, "1234 Fahrenheit"),
};
uint8_t buffer[256];
uint32_t size = sizeof(buffer);
dict_serialize_tuplets_to_buffer(pairs, ARRAY_LENGTH(pairs), buffer, &size);

// buffer now contains the serialized information
```

## Functions

:::info uint32_t dict_calc_buffer_size(const uint8_t tuple_count,...)

Calculates the number of bytes that a dictionary will occupy, given one or more value lengths that need to be stored in the dictionary. 

##### Parameters

- **tuple_count**: The total number of key/value pairs in the dictionary. 
- **...**: The sizes of each of the values that need to be stored in the dictionary. 

##### Returns

The total number of bytes of storage needed. 

:::

:::info uint32_t dict_size(DictionaryIterator *iter)

Calculates the size of data that has been written to the dictionary. AKA, the "dictionary size". Note that this is most likely different than the size of the backing storage/backing buffer. 

##### Parameters

- **iter**: The dictionary iterator 

##### Returns

The total number of bytes which have been written to the dictionary. 

:::

:::info DictionaryResult dict_write_begin(DictionaryIterator *iter, uint8_t *const buffer, const uint16_t size)

Initializes the dictionary iterator with a given buffer and size, resets and empties it, in preparation of writing key/value tuples. 

##### Parameters

- **iter**: The dictionary iterator 
- **buffer**: The storage of the dictionary 
- **size**: The storage size of the dictionary 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_write_data(DictionaryIterator *iter, const uint32_t key, const uint8_t *const data, const uint16_t size)

Adds a key with a byte array value pair to the dictionary. 

##### Parameters

- **iter**: The dictionary iterator 
- **key**: The key 
- **data**: Pointer to the byte array 
- **size**: Length of the byte array 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_write_cstring(DictionaryIterator *iter, const uint32_t key, const char *const cstring)

Adds a key with a C string value pair to the dictionary. 

##### Parameters

- **iter**: The dictionary iterator 
- **key**: The key 
- **cstring**: Pointer to the zero-terminated C string 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_write_int(DictionaryIterator *iter, const uint32_t key, const void *integer, const uint8_t width_bytes, const bool is_signed)

Adds a key with an integer value pair to the dictionary. 

##### Parameters

- **iter**: The dictionary iterator 
- **key**: The key 
- **integer**: Pointer to the integer value 
- **width_bytes**: The width of the integer value 
- **is_signed**: Whether the integer's type is signed or not 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_write_uint8(DictionaryIterator *iter, const uint32_t key, const uint8_t value)

Adds a key with an unsigned, 8-bit integer value pair to the dictionary. 

##### Parameters

- **iter**: The dictionary iterator 
- **key**: The key 
- **value**: The unsigned, 8-bit integer value 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_write_uint16(DictionaryIterator *iter, const uint32_t key, const uint16_t value)

:::

:::info DictionaryResult dict_write_uint32(DictionaryIterator *iter, const uint32_t key, const uint32_t value)

:::

:::info DictionaryResult dict_write_int8(DictionaryIterator *iter, const uint32_t key, const int8_t value)

:::

:::info DictionaryResult dict_write_int16(DictionaryIterator *iter, const uint32_t key, const int16_t value)

:::

:::info DictionaryResult dict_write_int32(DictionaryIterator *iter, const uint32_t key, const int32_t value)

:::

:::info uint32_t dict_write_end(DictionaryIterator *iter)

End a series of writing operations to a dictionary. This must be called before reading back from the dictionary. 

##### Parameters

- **iter**: The dictionary iterator 

##### Returns

The size in bytes of the finalized dictionary, or 0 if the parameters were invalid. 

:::

:::info Tuple * dict_read_begin_from_buffer(DictionaryIterator *iter, const uint8_t *const buffer, const uint16_t size)

Initializes the dictionary iterator with a given buffer and size, in preparation of reading key/value tuples. 

##### Parameters

- **iter**: The dictionary iterator 
- **buffer**: The storage of the dictionary 
- **size**: The storage size of the dictionary 

##### Returns

The first tuple in the dictionary, or NULL in case the dictionary was empty or if there was a parsing error. 

:::

:::info Tuple * dict_read_next(DictionaryIterator *iter)

Progresses the iterator to the next key/value pair. 

##### Parameters

- **iter**: The dictionary iterator 

##### Returns

The next tuple in the dictionary, or NULL in case the end has been reached or if there was a parsing error. 

:::

:::info Tuple * dict_read_first(DictionaryIterator *iter)

Resets the iterator back to the same state as a call to [dict_read_begin_from_buffer()](/documentation/c/group___dictionary.md#function-dict-read-begin-from-buffer) would do. 

##### Parameters

- **iter**: The dictionary iterator 

##### Returns

The first tuple in the dictionary, or NULL in case the dictionary was empty or if there was a parsing error. 

:::

:::info DictionaryResult dict_serialize_tuplets(DictionarySerializeCallback callback, void *context, const Tuplet *const tuplets, const uint8_t tuplets_count)

Utility function that takes a list of Tuplets from which a dictionary will be serialized, ready to transmit or store. 

##### Parameters

- **callback**: The callback that will be called with the serialized data of the generated dictionary. 
- **context**: Pointer to any application specific data that gets passed into the callback. 
- **tuplets**: An array of Tuplets that need to be serialized into the dictionary. 
- **tuplets_count**: The number of tuplets that follow. 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_serialize_tuplets_to_buffer(const Tuplet *const tuplets, const uint8_t tuplets_count, uint8_t *buffer, uint32_t *size_in_out)

Utility function that takes an array of Tuplets and serializes them into a dictionary with a given buffer and size. 

##### Parameters

- **tuplets**: The array of tuplets 
- **tuplets_count**: The number of tuplets in the array 
- **buffer**: The buffer in which to write the serialized dictionary 
- **size_in_out**: The available buffer size in bytes 
- **size_in_out**: The number of bytes written 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_serialize_tuplets_to_buffer_with_iter(DictionaryIterator *iter, const Tuplet *const tuplets, const uint8_t tuplets_count, uint8_t *buffer, uint32_t *size_in_out)

Serializes an array of Tuplets into a dictionary with a given buffer and size. 

##### Parameters

- **iter**: The dictionary iterator 
- **tuplets**: The array of tuplets 
- **tuplets_count**: The number of tuplets in the array 
- **buffer**: The buffer in which to write the serialized dictionary 
- **size_in_out**: The available buffer size in bytes 
- **size_in_out**: The number of bytes written 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info DictionaryResult dict_write_tuplet(DictionaryIterator *iter, const Tuplet *const tuplet)

Serializes a [Tuplet] and writes the resulting Tuple into a dictionary. 

##### Parameters

- **iter**: The dictionary iterator 
- **tuplet**: The [Tuplet] describing the key/value pair to write 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage) or [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args)

:::

:::info uint32_t dict_calc_buffer_size_from_tuplets(const Tuplet *const tuplets, const uint8_t tuplets_count)

Calculates the number of bytes that a dictionary will occupy, given one or more Tuplets that need to be stored in the dictionary. 

##### Parameters

- **tuplets**: An array of Tuplets that need to be stored in the dictionary. 
- **tuplets_count**: The total number of Tuplets that follow. 

##### Returns

The total number of bytes of storage needed. 

:::

:::info DictionaryResult dict_merge(DictionaryIterator *dest, uint32_t *dest_max_size_in_out, DictionaryIterator *source, const bool update_existing_keys_only, const DictionaryKeyUpdatedCallback key_callback, void *context)

Merges entries from another "source" dictionary into a "destination" dictionary. All Tuples from the source are written into the destination dictionary, while updating the exsting Tuples with matching keys. 

##### Parameters

- **dest**: The destination dictionary to update 
- **dest_max_size_in_out**: In: the maximum size of buffer backing `dest`. Out: the final size of the updated dictionary. 
- **source**: The source dictionary of which its Tuples will be used to update dest. 
- **update_existing_keys_only**: Specify True if only the existing keys in `dest` should be updated. 
- **key_callback**: The callback that will be called for each Tuple in the merged destination dictionary. 
- **context**: Pointer to app specific data that will get passed in when `update_key_callback` is called. 

##### Returns

[DICT_OK](/documentation/c/group___dictionary.md#enumvalue-dict-ok), [DICT_INVALID_ARGS](/documentation/c/group___dictionary.md#enumvalue-dict-invalid-args), [DICT_NOT_ENOUGH_STORAGE](/documentation/c/group___dictionary.md#enumvalue-dict-not-enough-storage)

:::

:::info Tuple * dict_find(const DictionaryIterator *iter, const uint32_t key)

Tries to find a Tuple with specified key in a dictionary. 

##### Parameters

- **iter**: Iterator to the dictionary to search in. 
- **key**: The key for which to find a Tuple 

##### Returns

Pointer to a found Tuple, or NULL if there was no Tuple with the specified key. 

:::

:::info struct __attribute__((__packed__))

Data structure for one serialized key/value tuple. 

:::


## Enums

:::info DictionaryResult

Return values for dictionary write/conversion functions. 

##### Values

- **DICT_OK**: The operation returned successfully. 
- **DICT_NOT_ENOUGH_STORAGE**: There was not enough backing storage to complete the operation. 
- **DICT_INVALID_ARGS**: One or more arguments were invalid or uninitialized. 
- **DICT_INTERNAL_INCONSISTENCY**: The lengths and/or count of the dictionary its tuples are inconsistent. 
- **DICT_MALLOC_FAILED**: A requested operation required additional memory to be allocated, but the allocation failed, likely due to insufficient remaining heap memory. 

:::

:::info TupleType

Values representing the type of data that the `value` field of a Tuple contains. 

##### Values

- **TUPLE_BYTE_ARRAY**: The value is an array of bytes. 
- **TUPLE_CSTRING**: The value is a zero-terminated, UTF-8 C-string. 
- **TUPLE_UINT**: The value is an unsigned integer. The tuple's `.length` field is used to determine the size of the integer (1, 2, or 4 bytes). 
- **TUPLE_INT**: The value is a signed integer. The tuple's `.length` field is used to determine the size of the integer (1, 2, or 4 bytes). 

:::

:::info DictionaryResult

Return values for dictionary write/conversion functions. 

##### Values

- **DICT_OK**: The operation returned successfully. 
- **DICT_NOT_ENOUGH_STORAGE**: There was not enough backing storage to complete the operation. 
- **DICT_INVALID_ARGS**: One or more arguments were invalid or uninitialized. 
- **DICT_INTERNAL_INCONSISTENCY**: The lengths and/or count of the dictionary its tuples are inconsistent. 
- **DICT_MALLOC_FAILED**: A requested operation required additional memory to be allocated, but the allocation failed, likely due to insufficient remaining heap memory. 

:::

:::info TupleType

Values representing the type of data that the `value` field of a Tuple contains. 

##### Values

- **TUPLE_BYTE_ARRAY**: The value is an array of bytes. 
- **TUPLE_CSTRING**: The value is a zero-terminated, UTF-8 C-string. 
- **TUPLE_UINT**: The value is an unsigned integer. The tuple's `.length` field is used to determine the size of the integer (1, 2, or 4 bytes). 
- **TUPLE_INT**: The value is a signed integer. The tuple's `.length` field is used to determine the size of the integer (1, 2, or 4 bytes). 

:::

## Typedefs

:::info typedef struct Dictionary Dictionary

:::

:::info typedef struct Tuplet Tuplet

Non-serialized, template data structure for a key/value pair. For strings and byte arrays, it only has a pointer to the actual data. For integers, it provides storage for integers up to 32-bits wide. The [Tuplet] data structure is useful when creating dictionaries from values that are already stored in arbitrary buffers. See also Tuple, with is the header of a serialized key/value pair. 

:::

:::info typedef void(* DictionarySerializeCallback) (const uint8_t *const data, const uint16_t size, void *context)

Callback for [dict_serialize_tuplets()]() utility. 

##### Parameters

- **data**: The data of the serialized dictionary 
- **size**: The size of data 
- **context**: The context pointer as passed in to [dict_serialize_tuplets()](/documentation/c/group___dictionary.md#function-dict-serialize-tuplets)

:::

:::info typedef void(* DictionaryKeyUpdatedCallback) (const uint32_t key, const Tuple *new_tuple, const Tuple *old_tuple, void *context)

Type of the callback used in [dict_merge()]()

##### Parameters

- **key**: The key that is being updated. 
- **new_tuple**: The new tuple. The tuple points to the actual, updated destination dictionary or NULL_TUPLE in case there was an error (e.g. backing buffer was too small). Therefore the Tuple can be used after the callback returns, until the destination dictionary storage is free'd (by the application itself). 
- **old_tuple**: The values that will be replaced with `new_tuple`. The key, value and type will be equal to the previous tuple in the old destination dictionary, however the `old_tuple points to a stack-allocated copy of the old data. @param context Pointer to application specific data The storage backing`old_tuple` can only be used during the callback and will no longer be valid after the callback returns. 

:::

:::info typedef struct Dictionary Dictionary

:::

:::info typedef struct Tuplet Tuplet

Non-serialized, template data structure for a key/value pair. For strings and byte arrays, it only has a pointer to the actual data. For integers, it provides storage for integers up to 32-bits wide. The [Tuplet] data structure is useful when creating dictionaries from values that are already stored in arbitrary buffers. See also Tuple, with is the header of a serialized key/value pair. 

:::

:::info typedef void(* DictionarySerializeCallback) (const uint8_t *const data, const uint16_t size, void *context)

Callback for [dict_serialize_tuplets()]() utility. 

##### Parameters

- **data**: The data of the serialized dictionary 
- **size**: The size of data 
- **context**: The context pointer as passed in to [dict_serialize_tuplets()](/documentation/c/group___dictionary.md#function-dict-serialize-tuplets)

:::

:::info typedef void(* DictionaryKeyUpdatedCallback) (const uint32_t key, const Tuple *new_tuple, const Tuple *old_tuple, void *context)

Type of the callback used in [dict_merge()]()

##### Parameters

- **key**: The key that is being updated. 
- **new_tuple**: The new tuple. The tuple points to the actual, updated destination dictionary or NULL_TUPLE in case there was an error (e.g. backing buffer was too small). Therefore the Tuple can be used after the callback returns, until the destination dictionary storage is free'd (by the application itself). 
- **old_tuple**: The values that will be replaced with `new_tuple`. The key, value and type will be equal to the previous tuple in the old destination dictionary, however the `old_tuple points to a stack-allocated copy of the old data. @param context Pointer to application specific data The storage backing`old_tuple` can only be used during the callback and will no longer be valid after the callback returns. 

:::

