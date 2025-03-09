# Memory Management

Utility functions for managing an application's memory.

## Functions

:::info size_t heap_bytes_free(void)

Calculates the number of bytes of heap memory _not_ currently being used by the application. 

##### Returns

The number of bytes on the heap not currently being used. 

:::

:::info size_t heap_bytes_used(void)

Calculates the number of bytes of heap memory currently being used by the application. 

##### Returns

The number of bytes on the heap currently being used. 

:::

:::info void memory_cache_flush(void *start, size_t size)

Flushes the data cache and invalidates the instruction cache for the given region of memory, if necessary. This is only required when your app is loading or modifying code in memory and intends to execute it. On some platforms, code executed may be cached internally to improve performance. After writing to memory, but before executing, this function must be called in order to avoid undefined behavior. On platforms without caching, this performs no operation. 

##### Parameters

- **start**: The beginning of the buffer to flush 
- **size**: How many bytes to flush 

:::


