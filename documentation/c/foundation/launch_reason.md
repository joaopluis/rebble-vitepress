# Launch Reason

This includes the system, launch by user interaction (User selects the application from the launcher menu), launch by the mobile or a mobile companion application, or launch by a scheduled wakeup event for the specified application. 

## Functions

:::info AppLaunchReason launch_reason(void)

Provides the method used to launch the current application. 

##### Returns

The method or reason the current application was launched 

:::

:::info uint32_t launch_get_args(void)

Get the argument passed to the app when it was launched. 

##### Returns

The argument passed to the app, or 0 if the app wasn't launched from a Launch App action 

:::


## Enums

:::info AppLaunchReason

[AppLaunchReason]() is used to inform the application about how it was launched. 

##### Values

- **APP_LAUNCH_SYSTEM**: App launched by the system. 
- **APP_LAUNCH_USER**: App launched by user selection in launcher menu. 
- **APP_LAUNCH_PHONE**: App launched by mobile or companion app. 
- **APP_LAUNCH_WAKEUP**: App launched by wakeup event. 
- **APP_LAUNCH_WORKER**: App launched by worker calling [worker_launch_app()]()
- **APP_LAUNCH_QUICK_LAUNCH**: App launched by user using quick launch. 
- **APP_LAUNCH_TIMELINE_ACTION**: App launched by user opening it from a pin. 
- **APP_LAUNCH_SMARTSTRAP**: App launched by a smartstrap. 

:::

