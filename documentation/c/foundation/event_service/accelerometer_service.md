# AccelerometerService

Using the Pebble accelerometer

The AccelerometerService enables the Pebble accelerometer to detect taps, perform measures at a given frequency, and transmit samples in batches to save CPU time and processing.

For available code samples, see the [feature-accel-discs](https://github.com/pebble-examples/feature-accel-discs/) example app. 

## Functions

:::info struct __attribute__((__packed__)) AccelData

A single accelerometer sample for all three axes including timestamp and vibration rumble status. 

:::

:::info int accel_service_peek(AccelData *data)

Peek at the last recorded reading. 

##### Parameters

- **data**: a pointer to a pre-allocated AccelData item 

##### Returns

-1 if the accel is not running 

:::

:::info int accel_service_set_sampling_rate(AccelSamplingRate rate)

Change the accelerometer sampling rate. 

##### Parameters

- **rate**: The sampling rate in Hz (10Hz, 25Hz, 50Hz, and 100Hz possible) 

:::

:::info int accel_service_set_samples_per_update(uint32_t num_samples)

Change the number of samples buffered between each accelerometer data event. 

##### Parameters

- **num_samples**: the number of samples to buffer, between 0 and 25. 

:::

:::info void accel_data_service_subscribe(uint32_t samples_per_update, AccelDataHandler handler)

Subscribe to the accelerometer data event service. Once subscribed, the handler gets called every time there are new accelerometer samples available. 

##### Parameters

- **handler**: A callback to be executed on accelerometer data events 
- **samples_per_update**: the number of samples to buffer, between 0 and 25. 

:::

:::info void accel_data_service_unsubscribe(void)

Unsubscribe from the accelerometer data event service. Once unsubscribed, the previously registered handler will no longer be called. 

:::

:::info void accel_tap_service_subscribe(AccelTapHandler handler)

Subscribe to the accelerometer tap event service. Once subscribed, the handler gets called on every tap event emitted by the accelerometer. 

##### Parameters

- **handler**: A callback to be executed on tap event 

:::

:::info void accel_tap_service_unsubscribe(void)

Unsubscribe from the accelerometer tap event service. Once unsubscribed, the previously registered handler will no longer be called. 

:::

:::info void accel_raw_data_service_subscribe(uint32_t samples_per_update, AccelRawDataHandler handler)

Subscribe to the accelerometer raw data event service. Once subscribed, the handler gets called every time there are new accelerometer samples available. 

##### Parameters

- **handler**: A callback to be executed on accelerometer data events 
- **samples_per_update**: the number of samples to buffer, between 0 and 25. 

:::


## Enums

:::info AccelAxisType

Enumerated values defining the three accelerometer axes. 

##### Values

- **ACCEL_AXIS_X**: Accelerometer's X axis. The positive direction along the X axis goes toward the right of the watch. 
- **ACCEL_AXIS_Y**: Accelerometer's Y axis. The positive direction along the Y axis goes toward the top of the watch. 
- **ACCEL_AXIS_Z**: Accelerometer's Z axis. The positive direction along the Z axis goes vertically out of the watchface. 

:::

:::info AccelSamplingRate

Valid accelerometer sampling rates, in Hz. 

##### Values

- **ACCEL_SAMPLING_10HZ**: 10 HZ sampling rate 
- **ACCEL_SAMPLING_25HZ**: 25 HZ sampling rate [Default] 
- **ACCEL_SAMPLING_50HZ**: 50 HZ sampling rate 
- **ACCEL_SAMPLING_100HZ**: 100 HZ sampling rate 

:::

:::info AccelAxisType

Enumerated values defining the three accelerometer axes. 

##### Values

- **ACCEL_AXIS_X**: Accelerometer's X axis. The positive direction along the X axis goes toward the right of the watch. 
- **ACCEL_AXIS_Y**: Accelerometer's Y axis. The positive direction along the Y axis goes toward the top of the watch. 
- **ACCEL_AXIS_Z**: Accelerometer's Z axis. The positive direction along the Z axis goes vertically out of the watchface. 

:::

:::info AccelSamplingRate

Valid accelerometer sampling rates, in Hz. 

##### Values

- **ACCEL_SAMPLING_10HZ**: 10 HZ sampling rate 
- **ACCEL_SAMPLING_25HZ**: 25 HZ sampling rate [Default] 
- **ACCEL_SAMPLING_50HZ**: 50 HZ sampling rate 
- **ACCEL_SAMPLING_100HZ**: 100 HZ sampling rate 

:::

## Typedefs

:::info typedef void(* AccelDataHandler) (AccelData *data, uint32_t num_samples)

Callback type for accelerometer data events. 

##### Parameters

- **data**: Pointer to the collected accelerometer samples. 
- **num_samples**: the number of samples stored in data. 

:::

:::info typedef void(* AccelRawDataHandler) (AccelRawData *data, uint32_t num_samples, uint64_t timestamp)

Callback type for accelerometer raw data events. 

##### Parameters

- **data**: Pointer to the collected accelerometer samples. 
- **num_samples**: the number of samples stored in data. 
- **timestamp**: the timestamp, in ms, of the first sample. 

:::

:::info typedef void(* AccelTapHandler) (AccelAxisType axis, int32_t direction)

Callback type for accelerometer tap events. 

##### Parameters

- **axis**: the axis on which a tap was registered (x, y, or z) 
- **direction**: the direction (-1 or +1) of the tap 

:::

:::info typedef void(* AccelDataHandler) (AccelData *data, uint32_t num_samples)

Callback type for accelerometer data events. 

##### Parameters

- **data**: Pointer to the collected accelerometer samples. 
- **num_samples**: the number of samples stored in data. 

:::

:::info typedef void(* AccelRawDataHandler) (AccelRawData *data, uint32_t num_samples, uint64_t timestamp)

Callback type for accelerometer raw data events. 

##### Parameters

- **data**: Pointer to the collected accelerometer samples. 
- **num_samples**: the number of samples stored in data. 
- **timestamp**: the timestamp, in ms, of the first sample. 

:::

:::info typedef void(* AccelTapHandler) (AccelAxisType axis, int32_t direction)

Callback type for accelerometer tap events. 

##### Parameters

- **axis**: the axis on which a tap was registered (x, y, or z) 
- **direction**: the direction (-1 or +1) of the tap 

:::

