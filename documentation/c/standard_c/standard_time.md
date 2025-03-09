# Time

Standard system time functions

This module contains standard time functions and formatters for printing. Note that Pebble now supports both local time and UTC time (including timezones and daylight savings time). Most of these functions are part of the C standard library which is documented at [https://sourceware.org/newlib/libc.html#Timefns](https://sourceware.org/newlib/libc.html#Timefns)

## Functions

:::info int strftime(char *s, size_t maxsize, const char *format, const struct tm *tm_p)

Format the time value at tm according to fmt and place the result in a buffer s of size max. 

##### Parameters

- **s**: A preallocation char array of size max 
- **maxsize**: the size of the array s 
- **format**: a formatting string 
- **tm_p**: A pointer to a struct tm containing a broken out time value 

##### Returns

The number of bytes placed in the array s, not including the null byte, 0 if the value does not fit. 

:::

:::info struct tm * localtime(const time_t *timep)

convert the time value pointed at by clock to a struct tm which contains the time adjusted for the local timezone 

##### Parameters

- **timep**: A pointer to an object of type time_t that contains a time value 

##### Returns

A pointer to a struct tm containing the broken out time value adjusted for the local timezone 

:::

:::info struct tm * gmtime(const time_t *timep)

convert the time value pointed at by clock to a struct tm which contains the time expressed in Coordinated Universal Time (UTC) 

##### Parameters

- **timep**: A pointer to an object of type time_t that contains a time value 

##### Returns

A pointer to a struct tm containing Coordinated Universal Time (UTC) 

:::

:::info time_t mktime(struct tm *tb)

convert the broken-down time structure to a timestamp expressed in Coordinated Universal Time (UTC) 

##### Parameters

- **tb**: A pointer to an object of type tm that contains broken-down time 

##### Returns

The number of seconds since epoch, January 1st 1970 

:::

:::info time_t time(time_t *tloc)

Obtain the number of seconds since epoch. Note that the epoch is not adjusted for Timezones and Daylight Savings. 

##### Parameters

- **tloc**: Optionally points to an address of a time_t variable to store the time in. If you only want to use the return value, you may pass NULL into tloc instead 

##### Returns

The number of seconds since epoch, January 1st 1970 

:::

:::info double difftime(time_t end, time_t beginning)

Obtain the number of seconds elapsed between beginning and end represented as a double. 

##### Parameters

- **end**: A time_t variable representing some number of seconds since epoch, January 1st 1970 
- **beginning**: A time_t variable representing some number of seconds since epoch, January 1st 1970. Note that end should be greater than beginning, but this is not enforced. 

##### Returns

The number of seconds elapsed between beginning and end. 

:::

:::info uint16_t time_ms(time_t *t_utc, uint16_t *out_ms)

Obtain the number of seconds and milliseconds part since the epoch. This is a non-standard C function provided for convenience. 

##### Parameters

- **tloc**: Optionally points to an address of a time_t variable to store the time in. You may pass NULL into tloc if you don't need a time_t variable to be set with the seconds since the epoch 
- **out_ms**: Optionally points to an address of a uint16_t variable to store the number of milliseconds since the last second in. If you only want to use the return value, you may pass NULL into out_ms instead 

##### Returns

The number of milliseconds since the last second 

:::

:::info time_t time_start_of_today(void)

Return the UTC time that corresponds to the start of today (midnight). 

##### Returns

the UTC time corresponding to the start of today (midnight) 

:::


