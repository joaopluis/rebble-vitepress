---
title: Part 5 - Vibrate on Disconnect
description: How to add bluetooth connection alerts to your watchface.
---

# Vibrate on Disconnect

<SdkToggle />

The final popular watchface addition explored in this tutorial series
is the concept of using the Bluetooth connection service to alert the user
when their watch connects or disconnects. This can be useful to know when the
watch is out of range and notifications will not be received, or to let the user
know that they might have walked off somewhere without their phone.

This section continues from
[*Part 4*](/tutorials/watchface-tutorial/part4), so be sure to
re-use your code or start with that finished project.

In a similar manner to both the ``TickTimerService`` and
``BatteryStateService``, the events associated with the Bluetooth connection are
given to developers via subscriptions, which requires an additional callback -
the ``ConnectionHandler``. Create one of these in the format given below:

```c
static void bluetooth_callback(bool connected) {

}
```

The subscription to Bluetooth-related events is added in `init()`:

```c
// Register for Bluetooth connection updates
connection_service_subscribe((ConnectionHandlers) {
  .pebble_app_connection_handler = bluetooth_callback
});
```

The indicator itself will take the form of the following 'Bluetooth
disconnected' icon that will be displayed when the watch is disconnected, and
hidden when reconnected. Save the image below for use in this project:

<img style="background-color: #CCCCCC;" src="./images/intermediate/bt-icon.png" />


<SdkPlatform>
<template #cloudpebble>

Add this icon to your project by clicking 'Add New' under 'Resources' in
the left hand side of the editor. Specify the 'Resource Type' as 'Bitmap Image',
upload the file for the 'File' field. Give it an 'Identifier' such as
`IMAGE_BT_ICON` before clicking 'Save'.

</template>
<template #local>

Add this icon to your project by copying the above icon image to the `resources`
project directory, and adding a new JSON object to the `media` array in
`package.json` such as the following:

```json
{
  "type": "bitmap",
  "name": "IMAGE_BT_ICON",
  "file": "bt-icon.png"
},
```

</template>
</SdkPlatform>

This icon will be loaded into the app as a ``GBitmap`` for display in a
``BitmapLayer`` above the time display. Declare both of these as pointers at the
top of the file, in addition to the existing variables of these types:

```c
static BitmapLayer *s_background_layer, *s_bt_icon_layer;
static GBitmap *s_background_bitmap, *s_bt_icon_bitmap;
```

Allocate both of the new objects in `main_window_load()`, then set the
``BitmapLayer``'s bitmap as the new icon ``GBitmap``:

```c
// Create the Bluetooth icon GBitmap
s_bt_icon_bitmap = gbitmap_create_with_resource(RESOURCE_ID_IMAGE_BT_ICON);

// Create the BitmapLayer to display the GBitmap
s_bt_icon_layer = bitmap_layer_create(GRect(59, 12, 30, 30));
bitmap_layer_set_bitmap(s_bt_icon_layer, s_bt_icon_bitmap);
layer_add_child(window_get_root_layer(window), bitmap_layer_get_layer(s_bt_icon_layer));
```

As usual, ensure that the memory allocated to create these objects is also freed
in `main_window_unload()`:

```c
gbitmap_destroy(s_bt_icon_bitmap);
bitmap_layer_destroy(s_bt_icon_layer);
```

With the UI in place, the implementation of the ``BluetoothConnectionHandler``
can be finished. Depending on the state of the connection when an event takes
place, the indicator icon is hidden or unhidden as required. A distinct
vibration is also triggered if the watch becomes disconnected, to differentiate
the feedback from that of a notification or phone call:

```c
static void bluetooth_callback(bool connected) {
  // Show icon if disconnected
  layer_set_hidden(bitmap_layer_get_layer(s_bt_icon_layer), connected);

  if(!connected) {
    // Issue a vibrating alert
    vibes_double_pulse();
  }
}
```

Upon initialization, the app will display the icon unless a re-connection event
occurs, and the current state is evaluated. Manually call the handler in
`main_window_load()` to display the correct initial state:

```c
// Show the correct state of the BT connection from the start
bluetooth_callback(connection_service_peek_pebble_app_connection());
```

With this last feature in place, running the app and disconnecting the Bluetooth
connection will cause the new indicator to appear, and the watch to vibrate
twice.

<PebbleScreenshot center src="./images/intermediate/bt.png" wrapper="steel-black" />

<SdkPlatform>
<template #cloudpebble>

<RblButton theme="alt" text="Edit in CloudPebble" :href="`${$CLOUDPEBBLE_URL}ide/gist/ddd15cbe8b0986fda407`" />

</template>
<template #local>

<RblButton theme="alt" text="View Source Code" href="https://gist.github.com/pebble-gists/ddd15cbe8b0986fda407" />

</template>
</SdkPlatform>

## What's Next?

Now that you've successfully built a feature rich watchface, it's time to
[publish it](/guides/appstore-publishing/publishing-an-app/)!
