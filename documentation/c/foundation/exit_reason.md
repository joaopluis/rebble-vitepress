# Exit Reason

If the application has not specified an exit reason before it exits, then the exit reason will default to APP_EXIT_NOT_SPECIFIED.

Only an application can set its exit reason. The system will not modify it. 

## Functions

:::info void exit_reason_set(AppExitReason exit_reason)

Set the app exit reason to a new reason. 

##### Parameters

- **reason**: The new app exit reason 

:::


## Enums

:::info AppExitReason

[AppExitReason]() is used to notify the system of the reason of an application exiting, which may affect the part of the system UI that is presented after the application terminates. 

##### Values

- **APP_EXIT_NOT_SPECIFIED**: Exit reason not specified. 
- **APP_EXIT_ACTION_PERFORMED_SUCCESSFULLY**: Application performed an action when it exited. 
- **NUM_EXIT_REASONS**: Number of [AppExitReason](/documentation/c/group___exit_reason.md#enum-appexitreason) options. 

:::

## Typedefs

:::info typedef enum AppExitReason AppExitReason

[AppExitReason](/documentation/c/group___exit_reason.md#enum-appexitreason) is used to notify the system of the reason of an application exiting, which may affect the part of the system UI that is presented after the application terminates. 

:::

