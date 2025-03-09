# Light

The Light API provides you with functions to turn on Pebble’s backlight or put it back into automatic control. You can trigger the backlight and schedule a timer to automatically disable the backlight after a short delay, which is the preferred method of interacting with the backlight. 

## Functions

:::info void light_enable_interaction(void)

Trigger the backlight and schedule a timer to automatically disable the backlight after a short delay. This is the preferred method of interacting with the backlight. 

:::

:::info void light_enable(bool enable)

Turn the watch's backlight on or put it back into automatic control. Developers should take care when calling this function, keeping Pebble's backlight on for long periods of time will rapidly deplete the battery. 

##### Parameters

- **enable**: Turn the backlight on if `true`, otherwise `false` to put it back into automatic control. 

:::


