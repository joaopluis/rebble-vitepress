# Wall Time

Functions, data structures and other things related to wall clock time.

This module contains utilities to get the current time and create strings with formatted dates and times. 

## Functions

:::info void clock_copy_time_string(char *buffer, uint8_t size)

Copies a time string into the buffer, formatted according to the user's time display preferences (such as 12h/24h time). Example results: "7:30" or "15:00". 

##### Parameters

- **buffer**: A pointer to the buffer to copy the time string into 
- **size**: The maximum size of buffer 

:::

:::info bool clock_is_24h_style(void)

Gets the user's 12/24h clock style preference. 

##### Returns

`true` if the user prefers 24h-style time display or `false` if the user prefers 12h-style time display. 

:::

:::info time_t clock_to_timestamp(WeekDay day, int hour, int minute)

Converts a (day, hour, minute) specification to a UTC timestamp occurring in the future Always returns a timestamp for the next occurring instance, example: specifying TODAY@14:30 when it is 14:40 will return a timestamp for 7 days from now at 14:30. 

##### Parameters

- **day**: [WeekDay](/documentation/c/group___wall_time.md#enum-weekday) day of week including support for specifying TODAY 
- **hour**: hour specified in 24-hour format [0-23] 
- **minute**: minute [0-59] 

:::

:::info bool clock_is_timezone_set(void)

Checks if timezone is currently set, otherwise gmtime == localtime. 

##### Returns

`true` if timezone has been set, false otherwise 

:::

:::info void clock_get_timezone(char *timezone, const size_t buffer_size)

If timezone is set, copies the current timezone long name (e.g. America/Chicago) to user-provided buffer. 

##### Parameters

- **timezone**: A pointer to the buffer to copy the timezone long name into 
- **buffer_size**: Size of the allocated buffer to copy the timezone long name into 

:::


## Enums

:::info WeekDay

Weekday values. 

##### Values

- **TODAY**: Today. 
- **SUNDAY**: Sunday. 
- **MONDAY**: Monday. 
- **TUESDAY**: Tuesday. 
- **WEDNESDAY**: Wednesday. 
- **THURSDAY**: Thursday. 
- **FRIDAY**: Friday. 
- **SATURDAY**: Saturday. 

:::

:::info WeekDay

Weekday values. 

##### Values

- **TODAY**: Today. 
- **SUNDAY**: Sunday. 
- **MONDAY**: Monday. 
- **TUESDAY**: Tuesday. 
- **WEDNESDAY**: Wednesday. 
- **THURSDAY**: Thursday. 
- **FRIDAY**: Friday. 
- **SATURDAY**: Saturday. 

:::

