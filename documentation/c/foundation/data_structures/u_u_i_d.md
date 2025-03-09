# UUID

## Functions

:::info bool uuid_equal(const Uuid *uu1, const Uuid *uu2)

Compares two UUIDs. 

##### Returns

True if the two UUIDs are equal, false if they are not. 

:::

:::info void uuid_to_string(const Uuid *uuid, char *buffer)

Writes UUID in a string form into buffer that looks like the following... {12345678-1234-5678-1234-567812345678} or {NULL UUID} if NULL was passed. 

##### Parameters

- **uuid**: The Uuid to write into the buffer as human-readable string 
- **buffer**: Memory to write the string to. Must be at least [UUID_STRING_BUFFER_LENGTH](/documentation/c/group___u_u_i_d.md#define-uuid-string-buffer-length) bytes long. 

:::

:::info struct __attribute__((__packed__))

Data structure for one serialized key/value tuple. 

:::


