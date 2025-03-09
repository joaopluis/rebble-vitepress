# App Glance

## Functions

:::info AppGlanceResult app_glance_add_slice(AppGlanceReloadSession *session, AppGlanceSlice slice)

Add a slice to the app's glance. This function will only succeed if called with a valid AppGlanceReloadSession that is provided in an [AppGlanceReloadCallback](/documentation/c/group___app_glance.md#typedef-appglancereloadcallback). 

##### Parameters

- **session**: The session variable provided in an [AppGlanceReloadCallback](/documentation/c/group___app_glance.md#typedef-appglancereloadcallback)
- **slice**: The slice to add to the app's glance 

##### Returns

The result of trying to add the slice to the app's glance 

:::

:::info void app_glance_reload(AppGlanceReloadCallback callback, void *context)

Clear any existing slices in the app's glance and trigger a reload via the provided callback. 

##### Parameters

- **callback**: A function that will be called to add new slices to the app's glance; even if the provided callback is NULL, any existing slices will still be cleared from the app's glance 
- **context**: User-provided context that will be passed to the callback 

:::


## Enums

:::info AppGlanceResult

Bitfield enum describing the result of trying to add an [AppGlanceSlice](/documentation/c/struct_app_glance_slice.md) to an app's glance. 

##### Values

- **APP_GLANCE_RESULT_SUCCESS**: The slice was successfully added to the app's glance. 
- **APP_GLANCE_RESULT_INVALID_TEMPLATE_STRING**: The subtitle_template_string provided in the slice was invalid. 
- **APP_GLANCE_RESULT_TEMPLATE_STRING_TOO_LONG**: The subtitle_template_string provided in the slice was longer than 150 bytes. 
- **APP_GLANCE_RESULT_INVALID_ICON**: The icon provided in the slice was invalid. 
- **APP_GLANCE_RESULT_SLICE_CAPACITY_EXCEEDED**: The provided slice would exceed the app glance's slice capacity. 
- **APP_GLANCE_RESULT_EXPIRES_IN_THE_PAST**: The expiration_time provided in the slice expires in the past. 
- **APP_GLANCE_RESULT_INVALID_SESSION**: The AppGlanceReloadSession provided was invalid. 

:::

## Typedefs

:::info typedef uint32_t PublishedId

The ID of a published app resource defined within the publishedMedia section of package.json. 

:::

:::info typedef struct AppGlanceSlice AppGlanceSlice

An app's glance can change over time as defined by zero or more app glance slices that each describe the state of the app glance at a particular point in time. Slices are displayed in the order they are added, and they are removed at the specified expiration time. 

:::

:::info typedef enum AppGlanceResult AppGlanceResult

Bitfield enum describing the result of trying to add an [AppGlanceSlice](/documentation/c/struct_app_glance_slice.md) to an app's glance. 

:::

:::info typedef struct AppGlanceReloadSession AppGlanceReloadSession

:::

:::info typedef void(* AppGlanceReloadCallback) (AppGlanceReloadSession *session, size_t limit, void *context)

User-provided callback for reloading the slices in the app's glance. 

##### Parameters

- **session**: A session variable that must be passed to [app_glance_add_slice](/documentation/c/group___app_glance.md#function-app-glance-add-slice) when adding slices to the app's glance; it becomes invalid when the [AppGlanceReloadCallback](/documentation/c/group___app_glance.md#typedef-appglancereloadcallback) returns 
- **limit**: The number of entries that can be added to the app's glance 
- **context**: User-provided context provided when calling [app_glance_reload()](/documentation/c/group___app_glance.md#function-app-glance-reload)

:::

