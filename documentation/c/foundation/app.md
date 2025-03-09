# App

## Functions

:::info void app_event_loop(void)

The event loop for C apps, to be used in app's main(). Will block until the app is ready to exit. 

:::


## Enums

:::info PebbleProcessInfoFlags

Application metadata flags. Flags can be combined using the `|` operator. 

##### Values

- **PROCESS_INFO_STANDARD_APP**: Use to indicate the process is a "standard" app. The system will show the app in the main menu. 
- **PROCESS_INFO_WATCH_FACE**: Use to indicate the process is a watchface. The system will show the process in the watchfaces menu. 
- **PROCESS_INFO_VISIBILITY_HIDDEN**: Use to hide the process. 
- **PROCESS_INFO_VISIBILITY_SHOWN_ON_COMMUNICATION**: Use to hide the process, unless there is ongoing communication with the companion smartphone application. 
- **PROCESS_INFO_ALLOW_JS**: Use to indicate the process allows Javascript API access. 
- **PROCESS_INFO_HAS_WORKER**: Use to indicate the process should have a worker.bin installed as well. 
- **PROCESS_INFO_ROCKY_APP**: True, if process uses RockyJS APIs. 
- **PROCESS_INFO_PLATFORM_MASK**: Bitmask, to store compile time platform. 
- **PROCESS_INFO_PLATFORM_UNKNOWN**: SDK older than 4.2 doesn't store any value. 
- **PROCESS_INFO_PLATFORM_APLITE**: undefined
- **PROCESS_INFO_PLATFORM_BASALT**: Values that are actually added by SDK 4.2+. 
- **PROCESS_INFO_PLATFORM_CHALK**: undefined
- **PROCESS_INFO_PLATFORM_DIORITE**: undefined
- **PROCESS_INFO_PLATFORM_EMERY**: undefined

:::

