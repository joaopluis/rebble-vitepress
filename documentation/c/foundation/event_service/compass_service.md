# CompassService

The Compass Service combines information from Pebble's accelerometer and magnetometer to automatically calibrate the compass and transform the raw magnetic field information into a [CompassHeading](/documentation/c/group___compass_service.md#typedef-compassheading), that is an angle to north. It also provides magnetic north and information about its status and accuracy through the [CompassHeadingData](/documentation/c/struct_compass_heading_data.md) structure. The API is designed to also provide true north in a future release.

Note that not all platforms have compasses. To check for the presence of a compass at compile time for the current platform use the `PBL_COMPASS` define.

To learn more about the Compass Service and how to use it, read the [Determining Direction](https://developer.getpebble.com/guides/pebble-apps/sensors/magnetometer/) guide.

For available code samples, see the [feature-compass](https://github.com/pebble-examples/feature-compass) example. 

## Functions

:::info int compass_service_set_heading_filter(CompassHeading filter)

Set the minimum angular change required to generate new compass heading events. The angular distance is measured relative to the last delivered heading event. Use 0 to be notified of all movements. Negative values and values > TRIG_MAX_ANGLE / 2 are not valid. The default value of this property is TRIG_MAX_ANGLE / 360. 

##### Returns

0, success. 

:::

:::info void compass_service_subscribe(CompassHeadingHandler handler)

Subscribe to the compass heading event service. Once subscribed, the handler gets called every time the angular distance relative to the previous value exceeds the configured filter. 

##### Parameters

- **handler**: A callback to be executed on heading events 

:::

:::info void compass_service_unsubscribe(void)

Unsubscribe from the compass heading event service. Once unsubscribed, the previously registered handler will no longer be called. 

:::

:::info int compass_service_peek(CompassHeadingData *data)

Peek at the last recorded reading. 

##### Parameters

- **data**: a pointer to a pre-allocated [CompassHeadingData](/documentation/c/struct_compass_heading_data.md)

##### Returns

Always returns 0 to indicate success. 

:::


## Enums

:::info CompassStatus

Enum describing the current state of the Compass Service. 

##### Values

- **CompassStatusUnavailable**: The Compass Service is unavailable. 
- **CompassStatusDataInvalid**: Compass is calibrating: data is invalid and should not be used Data will become valid once calibration is complete. 
- **CompassStatusCalibrating**: Compass is calibrating: the data is valid but the calibration is still being refined. 
- **CompassStatusCalibrated**: Compass data is valid and the calibration has completed. 

:::

:::info CompassStatus

Enum describing the current state of the Compass Service. 

##### Values

- **CompassStatusUnavailable**: The Compass Service is unavailable. 
- **CompassStatusDataInvalid**: Compass is calibrating: data is invalid and should not be used Data will become valid once calibration is complete. 
- **CompassStatusCalibrating**: Compass is calibrating: the data is valid but the calibration is still being refined. 
- **CompassStatusCalibrated**: Compass data is valid and the calibration has completed. 

:::

## Typedefs

:::info typedef int32_t CompassHeading

Represents an angle relative to get to a reference direction, e.g. (magnetic) north. The angle value is scaled linearly, such that a value of TRIG_MAX_ANGLE corresponds to 360 degrees or 2 PI radians. Thus, if heading towards north, north is 0, west is TRIG_MAX_ANGLE/4, south is TRIG_MAX_ANGLE/2, and so on. 

:::

:::info typedef void(* CompassHeadingHandler) (CompassHeadingData heading)

Callback type for compass heading events. 

##### Parameters

- **heading**: copy of last recorded heading 

:::

:::info typedef int32_t CompassHeading

Represents an angle relative to get to a reference direction, e.g. (magnetic) north. The angle value is scaled linearly, such that a value of TRIG_MAX_ANGLE corresponds to 360 degrees or 2 PI radians. Thus, if heading towards north, north is 0, west is TRIG_MAX_ANGLE/4, south is TRIG_MAX_ANGLE/2, and so on. 

:::

:::info typedef void(* CompassHeadingHandler) (CompassHeadingData heading)

Callback type for compass heading events. 

##### Parameters

- **heading**: copy of last recorded heading 

:::

