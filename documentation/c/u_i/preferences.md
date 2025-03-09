# Preferences

Values recommended by the system 

## Functions

:::info uint32_t preferred_result_display_duration(void)

Get the recommended amount of milliseconds a result window should be visible before it should automatically close. 

##### Returns

The recommended result window timeout duration in milliseconds 

:::

:::info PreferredContentSize preferred_content_size(void)

Returns the user's preferred content size representing the scale of all the app's UI components should use for display. 

##### Returns

The user's [PreferredContentSize](/documentation/c/group___preferences.md#enum-preferredcontentsize) setting. 

:::

:::info bool quiet_time_is_active(void)

Users can toggle Quiet Time manually or on schedule. Watchfaces and apps should respect this choice and avoid disturbing actions such as vibration if quiet time is active. 

##### Returns

True, if Quiet Time is currently active. 

:::


## Enums

:::info PreferredContentSize

[PreferredContentSize]() represents the display scale of all the app's UI components. The enum contains all sizes that all platforms as a whole are capable of displaying, but each individual platform may not be able to display all sizes. 

##### Values

- **PreferredContentSizeSmall**: undefined
- **PreferredContentSizeMedium**: undefined
- **PreferredContentSizeLarge**: undefined
- **PreferredContentSizeExtraLarge**: undefined
- **NumPreferredContentSizes**: undefined

:::

## Typedefs

:::info typedef enum PreferredContentSize PreferredContentSize

[PreferredContentSize](/documentation/c/group___preferences.md#enum-preferredcontentsize) represents the display scale of all the app's UI components. The enum contains all sizes that all platforms as a whole are capable of displaying, but each individual platform may not be able to display all sizes. 

:::

