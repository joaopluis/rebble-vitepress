# HealthService

Get access to health information like step count, sleep totals, etc.

The HealthService provides your app access to the step count and sleep activity of the user. 

## Functions

:::info HealthValue health_service_sum(HealthMetric metric, time_t time_start, time_t time_end)

Return the sum of a [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric)'s values over a time range. The `time_start` and `time_end` parameters define the range of time you want the sum for. 

##### Parameters

- **metric**: The metric to query for data. 
- **time_start**: UTC time of the earliest data item to incorporate into the sum. 
- **time_end**: UTC time of the most recent data item to incorporate into the sum. 

##### Returns

The sum of that metric over the given time range, if available. 

:::

:::info HealthValue health_service_sum_today(HealthMetric metric)

Convenience wrapper for [health_service_sum()](/documentation/c/group___health_service.md#function-health-service-sum) that returns the sum for today. 

##### Parameters

- **metric**: The metric to query. 

##### Returns

The sum of that metric's data for today, if available. 

:::

:::info HealthValue health_service_peek_current_value(HealthMetric metric)

Convenience function for peeking at the current value of a metric. This is useful for metrics like [HealthMetricHeartRateBPM](/documentation/c/group___health_service.md#enumvalue-healthmetricheartratebpm) that represent instantaneous values. It is NOT applicable for metrics like [HealthMetricStepCount](/documentation/c/group___health_service.md#enumvalue-healthmetricstepcount) that must be accumulated over time (it will return 0 if passed that type of metric). This call is equivalent to calling `health_service_aggregate_averaged(metric, time(NULL), time(NULL), HealthAggregationAvg, HealthServiceTimeScopeOnce)`

##### Parameters

- **metric**: The metric to query. 

##### Returns

The current value of that metric, if available. 

:::

:::info HealthValue health_service_sum_averaged(HealthMetric metric, time_t time_start, time_t time_end, HealthServiceTimeScope scope)

Return the value of a metric's sum over a given time range between `time_start` and `time_end`. Using this call you can specify the time range that you are interested in getting the average for, as well as a `scope` specifier on how to compute an average of the sum. For example, if you want to get the average number of steps taken from 12 AM (midnight) to 9 AM across all days you would specify: `time_t time_start = [time_start_of_today()]();``time_t time_end = time_start + (9 * SECONDS_PER_HOUR);``[HealthValue](/documentation/c/group___health_service.md#typedef-healthvalue) value = health_service_sum_averaged(HealthMetricStepCount, time_start,    time_end, HealthServiceTimeScopeDaily);`

##### Parameters

- **metric**: Which [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) to query. 
- **time_start**: UTC time of the start of the query interval. 
- **time_end**: UTC time of the end of the query interval. 
- **scope**: [HealthServiceTimeScope](/documentation/c/group___health_service.md#enum-healthservicetimescope) value describing how the average should be computed. 

##### Returns

The average of the sum of the given metric over the given time range, if available. 

:::

:::info HealthValue health_service_aggregate_averaged(HealthMetric metric, time_t time_start, time_t time_end, HealthAggregation aggregation, HealthServiceTimeScope scope)

Return the value of an aggregated metric over a given time range. This call is more flexible than health_service_sum_averaged because it lets you specify which aggregation function to perform. 

##### Parameters

- **metric**: Which [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) to query. 
- **time_start**: UTC time of the start of the query interval. 
- **time_end**: UTC time of the end of the query interval. 
- **aggregation**: the aggregation function to perform on the metric. This operation is performed across the passed in time range `time_start` to `time_end`. 
- **scope**: [HealthServiceTimeScope](/documentation/c/group___health_service.md#enum-healthservicetimescope) value describing how the average should be computed. Use `HealthServiceTimeScopeOnce` to not compute an average. 

##### Returns

The average of the aggregation performed on the given metric over the given time range, if available. 

:::

:::info HealthActivityMask health_service_peek_current_activities(void)

Return a [HealthActivityMask](/documentation/c/group___health_service.md#typedef-healthactivitymask) containing a set of bits, one set for each activity that is currently active. 

##### Returns

A bitmask with zero or more [HealthActivityMask](/documentation/c/group___health_service.md#typedef-healthactivitymask) bits set as appropriate. 

:::

:::info void health_service_activities_iterate(HealthActivityMask activity_mask, time_t time_start, time_t time_end, HealthIterationDirection direction, HealthActivityIteratorCB callback, void *context)

Iterates backwards or forward within a given time span to list all recorded activities. For example, this can be used to find the last recorded sleep phase or all deep sleep phases in a given time range. Any activity that overlaps with `time_start` and `time_end` will be included, even if the start time starts before `time_start` or end time ends after `time_end`. 

##### Parameters

- **activity_mask**: A bitmask containing set of activities you are interested in. 
- **time_start**: UTC time of the earliest time you are interested in. 
- **time_end**: UTC time of the latest time you are interested in. 
- **direction**: The direction in which to iterate. 
- **callback**: Developer-supplied callback that is called for each activity iterated over. 
- **context**: Developer-supplied context pointer that is passed to the callback. 

:::

:::info HealthServiceAccessibilityMask health_service_metric_accessible(HealthMetric metric, time_t time_start, time_t time_end)

Check if a certain combination of metric and time span is accessible using [health_service_sum](/documentation/c/group___health_service.md#function-health-service-sum) by returning a value of [HealthServiceAccessibilityMask](/documentation/c/group___health_service.md#enum-healthserviceaccessibilitymask). Developers should check if the return value is [HealthServiceAccessibilityMaskAvailable](/documentation/c/group___health_service.md#enumvalue-healthserviceaccessibilitymaskavailable) before calling [health_service_sum](/documentation/c/group___health_service.md#function-health-service-sum). 

##### Parameters

- **metric**: The metric to query for data. 
- **time_start**: Earliest UTC time you are interested in. 
- **time_end**: Latest UTC time you are interested in. 

##### Returns

A [HealthServiceAccessibilityMask](/documentation/c/group___health_service.md#enum-healthserviceaccessibilitymask) representing the accessible metrics in this time range. 

:::

:::info HealthServiceAccessibilityMask health_service_metric_averaged_accessible(HealthMetric metric, time_t time_start, time_t time_end, HealthServiceTimeScope scope)

Check if a certain combination of metric, time span, and scope is accessible for calculating summed, averaged data by returning a value of [HealthServiceAccessibilityMask](/documentation/c/group___health_service.md#enum-healthserviceaccessibilitymask). Developers should check if the return value is [HealthServiceAccessibilityMaskAvailable](/documentation/c/group___health_service.md#enumvalue-healthserviceaccessibilitymaskavailable) before calling [health_service_sum_averaged](/documentation/c/group___health_service.md#function-health-service-sum-averaged). 

##### Parameters

- **metric**: The metric to query for averaged data. 
- **time_start**: Earliest UTC time you are interested in. 
- **time_end**: Latest UTC time you are interested in. 
- **scope**: [HealthServiceTimeScope](/documentation/c/group___health_service.md#enum-healthservicetimescope) value describing how the average should be computed. 

##### Returns

A \HealthServiceAccessibilityMask value decribing whether averaged data is available. 

:::

:::info HealthServiceAccessibilityMask health_service_metric_aggregate_averaged_accessible(HealthMetric metric, time_t time_start, time_t time_end, HealthAggregation aggregation, HealthServiceTimeScope scope)

Check if a certain combination of metric, time span, aggregation operation, and scope is accessible for calculating aggregated, averaged data by returning a value of [HealthServiceAccessibilityMask](/documentation/c/group___health_service.md#enum-healthserviceaccessibilitymask). Developers should check if the return value is [HealthServiceAccessibilityMaskAvailable](/documentation/c/group___health_service.md#enumvalue-healthserviceaccessibilitymaskavailable) before calling [health_service_aggregate_averaged](/documentation/c/group___health_service.md#function-health-service-aggregate-averaged). 

##### Parameters

- **metric**: The metric to query for averaged data. 
- **time_start**: Earliest UTC time you are interested in. 
- **time_end**: Latest UTC time you are interested in. 
- **aggregation**: The aggregation to perform 
- **scope**: [HealthServiceTimeScope](/documentation/c/group___health_service.md#enum-healthservicetimescope) value describing how the average should be computed. 

##### Returns

A \HealthServiceAccessibilityMask value decribing whether averaged data is available. 

:::

:::info HealthServiceAccessibilityMask health_service_any_activity_accessible(HealthActivityMask activity_mask, time_t time_start, time_t time_end)

Check if a certain combination of metric, [HealthActivityMask](/documentation/c/group___health_service.md#typedef-healthactivitymask) and time span is accessible. Developers should check if the return value is [HealthServiceAccessibilityMaskAvailable](/documentation/c/group___health_service.md#enumvalue-healthserviceaccessibilitymaskavailable) before calling any other HealthService APIs that involve the given activities. 

##### Parameters

- **activity_mask**: A bitmask of activities you are interested in. 
- **time_start**: Earliest UTC time you are interested in. 
- **time_end**: Latest UTC time you are interested in. 

##### Returns

A [HealthServiceAccessibilityMask](/documentation/c/group___health_service.md#enum-healthserviceaccessibilitymask) representing which of the passed [HealthActivityMask](/documentation/c/group___health_service.md#typedef-healthactivitymask) values are available under the given constraints. 

:::

:::info bool health_service_events_subscribe(HealthEventHandler handler, void *context)

Subscribe to HealthService events. This allocates a cache on the application's heap of up to 2048 bytes that will be de-allocated if you call [health_service_events_unsubscribe()](). If there's not enough heap available, this function will return `false` and will not subscribe to any events. 

##### Parameters

- **handler**: Developer-supplied event handler function. 
- **context**: Developer-supplied context pointer. 

##### Returns

`true` on success, `false` on failure. 

:::

:::info bool health_service_events_unsubscribe(void)

Unsubscribe from HealthService events. 

##### Returns

`true` on success, `false` on failure. 

:::

:::info bool health_service_set_heart_rate_sample_period(uint16_t interval_sec)

Set the desired sampling period for heart rate readings. Normally, the system will sample the heart rate using a sampling period that is automatically chosen to provide useful information without undue battery drain (it automatically samples more often during periods of intense activity, and less often when the user is idle). If desired though, an application can request a specific sampling period using this call. The system will use this as a suggestion, but does not guarantee that the requested period will be used. The actual sampling period may be greater or less due to system needs or heart rate sensor reading quality issues. Each time a new heart rate reading becomes available, a `HealthEventHeartRateUpdate` event will be sent to the application's `[HealthEventHandler](/documentation/c/group___health_service.md#typedef-healtheventhandler)`. The sample period request will remain in effect the entire time the app is running unless it is explicitly cancelled (by calling this method again with 0 as the desired interval). If the app exits without first cancelling the request, it will remain in effect even for a limited time afterwards. To determine how long it will remain active after the app exits, use `health_service_get_heart_rate_sample_period_expiration_sec`. Unless the app explicitly needs to access to historical high-resolution heart rate data, it is best practice to always cancel the sample period request before exiting in order to maximize battery life. Historical heart rate data can be accessed using the `health_service_get_minute_history` call. 

##### Parameters

- **interval_sec**: desired interval between heart rate reading updates. Pass 0 to go back to automatically chosen intervals. 

##### Returns

`true` on success, `false` on failure 

:::

:::info uint16_t health_service_get_heart_rate_sample_period_expiration_sec(void)

Return how long a heart rate sample period request (sent via `health_service_set_heart_rate_sample_period`) will remain active after the app exits. If there is no current request by this app, this call will return 0. 

##### Returns

The number of seconds the heart rate sample period request will remain active after the app exits, or 0 if there is no active request by this app. 

:::

:::info HealthMetricAlert * health_service_register_metric_alert(HealthMetric metric, HealthValue threshold)

Register for an alert when a metric crosses the given threshold. When the metric crosses this threshold (either goes above or below it), a [HealthEventMetricAlert](/documentation/c/group___health_service.md#enumvalue-healtheventmetricalert) event will be generated. To cancel this registration, pass the returned [HealthMetricAlert](/documentation/c/group___health_service.md#typedef-healthmetricalert) value to [health_service_cancel_metric_alert](). The only metric currently supported by this call is [HealthMetricHeartRateBPM](/documentation/c/group___health_service.md#enumvalue-healthmetricheartratebpm), but future versions may support additional metrics. To see if a specific metric is supported by this call, use: `time_t now = time(NULL); [HealthServiceAccessibilityMask](/documentation/c/group___health_service.md#enum-healthserviceaccessibilitymask) accessible = health_service_metric_aggregate_averaged_accessible(metric, now, now, HealthAggregationAvg,     HealthServiceTimeScopeOnce); bool alert_supported = (accessible & HealthServiceAccessibilityMaskAvailable);` In the current implementation, only one alert per metric can be registered at a time. Future implementations may support two or more simulataneous alert registrations per metric. To change the alert threshold in the current implementation, cancel the original registration using `health_service_cancel_metric_alert` before registering the new threshold. 

##### Parameters

- **threshold**: the threshold value 

##### Returns

handle to the alert registration on success, NULL on failure 

:::

:::info bool health_service_cancel_metric_alert(HealthMetricAlert *alert)

Cancel an metric alert previously created with [health_service_register_metric_alert](/documentation/c/group___health_service.md#function-health-service-register-metric-alert). 

##### Parameters

- **alert**: the [HealthMetricAlert](/documentation/c/group___health_service.md#typedef-healthmetricalert) previously returned by [health_service_register_metric_alert](/documentation/c/group___health_service.md#function-health-service-register-metric-alert)

##### Returns

`true` on success, `false` on failure 

:::

:::info uint32_t health_service_get_minute_history(HealthMinuteData *minute_data, uint32_t max_records, time_t *time_start, time_t *time_end)

Return historical minute data records. This fills in the `minute_data` array parameter with minute by minute statistics of the user's steps, average watch orientation, etc. The data is returned in time order, with the oldest minute data returned at `minute_data[0]`. 

##### Parameters

- **minute_data**: Pointer to an array of [HealthMinuteData](/documentation/c/struct_health_minute_data.md) records that will be filled in with the historical minute data. 
- **max_records**: The maximum number of records the `minute_data` array can hold. 
- **time_start**: On entry, the UTC time of the first requested record. On exit, the UTC time of the first second of the first record actually returned. If `time_start` on entry is somewhere in the middle of a minute interval, this function behaves as if the caller passed in the start of that minute. 
- **time_end**: On entry, the UTC time of the end of the requested range of records. On exit, the UTC time of the end of the last record actually returned (i.e. start time of last record + 60). If `time_end` on entry is somewhere in the middle of a minute interval, this function behaves as if the caller passed in the end of that minute. 

##### Returns

Actual number of records returned. May be less then the maximum requested. 

:::

:::info MeasurementSystem health_service_get_measurement_system_for_display(HealthMetric metric)

Get the preferred measurement system for a given [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric), if the user has chosen a preferred system and it is applicable to that metric. 

##### Parameters

- **metric**: A metric value chosen from [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric). 

##### Returns

A value from [MeasurementSystem](/documentation/c/group___health_service.md#enum-measurementsystem) if applicable, else [MeasurementSystemUnknown](/documentation/c/group___health_service.md#enumvalue-measurementsystemunknown). 

:::


## Enums

:::info HealthMetric

Health metric values used to retrieve health data. For example, using [health_service_sum()](). 

##### Values

- **HealthMetricStepCount**: The number of steps counted. 
- **HealthMetricActiveSeconds**: The number of seconds spent active (i.e. not resting). 
- **HealthMetricWalkedDistanceMeters**: The distance walked, in meters. 
- **HealthMetricSleepSeconds**: The number of seconds spent sleeping. 
- **HealthMetricSleepRestfulSeconds**: The number of sleep seconds in the 'restful' or deep sleep state. 
- **HealthMetricRestingKCalories**: The number of kcal (Calories) burned while resting due to resting metabolism. 
- **HealthMetricActiveKCalories**: The number of kcal (Calories) burned while active. 
- **HealthMetricHeartRateBPM**: The heart rate, in beats per minute. This is a filtered value that is at most 15 minutes old. 
- **HealthMetricHeartRateRawBPM**: The raw heart rate value of the most recent sample, in beats per minute. 

:::

:::info HealthServiceTimeScope

Used by [health_service_sum_averaged()]() to specify how the average is computed. 

##### Values

- **HealthServiceTimeScopeOnce**: No average computed. The result is the same as calling [health_service_sum()](). 
- **HealthServiceTimeScopeWeekly**: Compute average using the same day from each week. For example, every Monday if the passed in time range falls on a Monday. 
- **HealthServiceTimeScopeDailyWeekdayOrWeekend**: Compute average using either weekdays (Monday to Friday) or weekends (Saturday and Sunday), depending on which day the passed in time range falls. 
- **HealthServiceTimeScopeDaily**: Compute average across all days of the week. 

:::

:::info HealthAggregation

Used by [health_service_aggregate_averaged()]() to specify what type of aggregation to perform. This aggregation is applied to the metric before the average is computed. 

##### Values

- **HealthAggregationSum**: Sum the metric. The result is the same as calling [health_service_sum_averaged()](). This operation is only applicable for metrics that accumulate, like HealthMetricStepCount, HealthMetricActiveSeconds, etc. 
- **HealthAggregationAvg**: Use the average of the metric. This is only applicable for metrics that measure instantaneous values, like HealthMetricHeartRateBPM. 
- **HealthAggregationMin**: Use the minimum value of the metric. This is only applicable for metrics that measure instantaneous values, like HealthMetricHeartRateBPM. 
- **HealthAggregationMax**: Use the maximum value of the metric. This is only applicable for metrics that measure instantaneous values, like HealthMetricHeartRateBPM. 

:::

:::info HealthActivity

Health-related activities that can be accessed using. 

##### Values

- **HealthActivityNone**: No special activity. 
- **HealthActivitySleep**: The 'sleeping' activity. 
- **HealthActivityRestfulSleep**: The 'restful sleeping' activity. 
- **HealthActivityWalk**: The 'walk' activity. 
- **HealthActivityRun**: The 'run' activity. 
- **HealthActivityOpenWorkout**: The 'generic' activity. 

:::

:::info HealthIterationDirection

Iteration direction, passed to [health_service_activities_iterate()](). When iterating backwards (`HealthIterationDirectionPast`), activities that have a greater value for `time_end` come first. When iterating forward (`HealthIterationDirectionFuture`), activities that have a smaller value for `time_start` come first. 

##### Values

- **HealthIterationDirectionPast**: Iterate into the past. 
- **HealthIterationDirectionFuture**: Iterate into the future. 

:::

:::info HealthServiceAccessibilityMask

Possible values returned by [health_service_metric_accessible()](). The values are used in combination as a bitmask. For example, to check if any data is available for a given request use: bool any_data_available = value & HealthServiceAccessibilityMaskAvailable;. 

##### Values

- **HealthServiceAccessibilityMaskAvailable**: Return values are available and represent the collected health information. 
- **HealthServiceAccessibilityMaskNoPermission**: The user hasn't granted permission. 
- **HealthServiceAccessibilityMaskNotSupported**: The queried combination of time span and [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) or [HealthActivityMask]() is currently unsupported. 
- **HealthServiceAccessibilityMaskNotAvailable**: No samples were recorded for the given time span. 

:::

:::info HealthEventType

Health event enum. Passed into the [HealthEventHandler](). 

##### Values

- **HealthEventSignificantUpdate**: All data is considered as outdated and apps should re-read all health data. This happens after an app is subscribed via [health_service_events_subscribe()](), on a change of the day, or in other cases that significantly change the underlying data. 
- **HealthEventMovementUpdate**: Recent values around [HealthMetricStepCount](/documentation/c/group___health_service.md#enumvalue-healthmetricstepcount), [HealthMetricActiveSeconds](/documentation/c/group___health_service.md#enumvalue-healthmetricactiveseconds), or [HealthMetricWalkedDistanceMeters](/documentation/c/group___health_service.md#enumvalue-healthmetricwalkeddistancemeters) have changed. 
- **HealthEventSleepUpdate**: Recent values around [HealthMetricSleepSeconds](/documentation/c/group___health_service.md#enumvalue-healthmetricsleepseconds), [HealthMetricSleepRestfulSeconds](/documentation/c/group___health_service.md#enumvalue-healthmetricsleeprestfulseconds), [HealthActivitySleep](/documentation/c/group___health_service.md#enumvalue-healthactivitysleep), and [HealthActivityRestfulSleep](/documentation/c/group___health_service.md#enumvalue-healthactivityrestfulsleep) changed. 
- **HealthEventMetricAlert**: A metric has crossed the threshold set by [health_service_register_metric_alert](). 
- **HealthEventHeartRateUpdate**: Value of [HealthMetricHeartRateBPM](/documentation/c/group___health_service.md#enumvalue-healthmetricheartratebpm) or [HealthMetricHeartRateRawBPM](/documentation/c/group___health_service.md#enumvalue-healthmetricheartraterawbpm) has changed. 

:::

:::info AmbientLightLevel

Light level enum. 

##### Values

- **AmbientLightLevelUnknown**: undefined
- **AmbientLightLevelVeryDark**: undefined
- **AmbientLightLevelDark**: undefined
- **AmbientLightLevelLight**: undefined
- **AmbientLightLevelVeryLight**: undefined

:::

:::info MeasurementSystem

Types of measurement system a [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) may be measured in. 

##### Values

- **MeasurementSystemUnknown**: The measurement system is unknown, or does not apply to the chosen metric. 
- **MeasurementSystemMetric**: The metric measurement system. 
- **MeasurementSystemImperial**: The imperial measurement system. 

:::

:::info HealthMetric

Health metric values used to retrieve health data. For example, using [health_service_sum()](). 

##### Values

- **HealthMetricStepCount**: The number of steps counted. 
- **HealthMetricActiveSeconds**: The number of seconds spent active (i.e. not resting). 
- **HealthMetricWalkedDistanceMeters**: The distance walked, in meters. 
- **HealthMetricSleepSeconds**: The number of seconds spent sleeping. 
- **HealthMetricSleepRestfulSeconds**: The number of sleep seconds in the 'restful' or deep sleep state. 
- **HealthMetricRestingKCalories**: The number of kcal (Calories) burned while resting due to resting metabolism. 
- **HealthMetricActiveKCalories**: The number of kcal (Calories) burned while active. 
- **HealthMetricHeartRateBPM**: The heart rate, in beats per minute. This is a filtered value that is at most 15 minutes old. 
- **HealthMetricHeartRateRawBPM**: The raw heart rate value of the most recent sample, in beats per minute. 

:::

:::info HealthServiceTimeScope

Used by [health_service_sum_averaged()]() to specify how the average is computed. 

##### Values

- **HealthServiceTimeScopeOnce**: No average computed. The result is the same as calling [health_service_sum()](). 
- **HealthServiceTimeScopeWeekly**: Compute average using the same day from each week. For example, every Monday if the passed in time range falls on a Monday. 
- **HealthServiceTimeScopeDailyWeekdayOrWeekend**: Compute average using either weekdays (Monday to Friday) or weekends (Saturday and Sunday), depending on which day the passed in time range falls. 
- **HealthServiceTimeScopeDaily**: Compute average across all days of the week. 

:::

:::info HealthAggregation

Used by [health_service_aggregate_averaged()]() to specify what type of aggregation to perform. This aggregation is applied to the metric before the average is computed. 

##### Values

- **HealthAggregationSum**: Sum the metric. The result is the same as calling [health_service_sum_averaged()](). This operation is only applicable for metrics that accumulate, like HealthMetricStepCount, HealthMetricActiveSeconds, etc. 
- **HealthAggregationAvg**: Use the average of the metric. This is only applicable for metrics that measure instantaneous values, like HealthMetricHeartRateBPM. 
- **HealthAggregationMin**: Use the minimum value of the metric. This is only applicable for metrics that measure instantaneous values, like HealthMetricHeartRateBPM. 
- **HealthAggregationMax**: Use the maximum value of the metric. This is only applicable for metrics that measure instantaneous values, like HealthMetricHeartRateBPM. 

:::

:::info HealthActivity

Health-related activities that can be accessed using. 

##### Values

- **HealthActivityNone**: No special activity. 
- **HealthActivitySleep**: The 'sleeping' activity. 
- **HealthActivityRestfulSleep**: The 'restful sleeping' activity. 
- **HealthActivityWalk**: The 'walk' activity. 
- **HealthActivityRun**: The 'run' activity. 
- **HealthActivityOpenWorkout**: The 'generic' activity. 

:::

:::info HealthIterationDirection

Iteration direction, passed to [health_service_activities_iterate()](). When iterating backwards (`HealthIterationDirectionPast`), activities that have a greater value for `time_end` come first. When iterating forward (`HealthIterationDirectionFuture`), activities that have a smaller value for `time_start` come first. 

##### Values

- **HealthIterationDirectionPast**: Iterate into the past. 
- **HealthIterationDirectionFuture**: Iterate into the future. 

:::

:::info HealthServiceAccessibilityMask

Possible values returned by [health_service_metric_accessible()](). The values are used in combination as a bitmask. For example, to check if any data is available for a given request use: bool any_data_available = value & HealthServiceAccessibilityMaskAvailable;. 

##### Values

- **HealthServiceAccessibilityMaskAvailable**: Return values are available and represent the collected health information. 
- **HealthServiceAccessibilityMaskNoPermission**: The user hasn't granted permission. 
- **HealthServiceAccessibilityMaskNotSupported**: The queried combination of time span and [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) or [HealthActivityMask]() is currently unsupported. 
- **HealthServiceAccessibilityMaskNotAvailable**: No samples were recorded for the given time span. 

:::

:::info HealthEventType

Health event enum. Passed into the [HealthEventHandler](). 

##### Values

- **HealthEventSignificantUpdate**: All data is considered as outdated and apps should re-read all health data. This happens after an app is subscribed via [health_service_events_subscribe()](), on a change of the day, or in other cases that significantly change the underlying data. 
- **HealthEventMovementUpdate**: Recent values around [HealthMetricStepCount](/documentation/c/group___health_service.md#enumvalue-healthmetricstepcount), [HealthMetricActiveSeconds](/documentation/c/group___health_service.md#enumvalue-healthmetricactiveseconds), or [HealthMetricWalkedDistanceMeters](/documentation/c/group___health_service.md#enumvalue-healthmetricwalkeddistancemeters) have changed. 
- **HealthEventSleepUpdate**: Recent values around [HealthMetricSleepSeconds](/documentation/c/group___health_service.md#enumvalue-healthmetricsleepseconds), [HealthMetricSleepRestfulSeconds](/documentation/c/group___health_service.md#enumvalue-healthmetricsleeprestfulseconds), [HealthActivitySleep](/documentation/c/group___health_service.md#enumvalue-healthactivitysleep), and [HealthActivityRestfulSleep](/documentation/c/group___health_service.md#enumvalue-healthactivityrestfulsleep) changed. 
- **HealthEventMetricAlert**: A metric has crossed the threshold set by [health_service_register_metric_alert](). 
- **HealthEventHeartRateUpdate**: Value of [HealthMetricHeartRateBPM](/documentation/c/group___health_service.md#enumvalue-healthmetricheartratebpm) or [HealthMetricHeartRateRawBPM](/documentation/c/group___health_service.md#enumvalue-healthmetricheartraterawbpm) has changed. 

:::

:::info AmbientLightLevel

Light level enum. 

##### Values

- **AmbientLightLevelUnknown**: undefined
- **AmbientLightLevelVeryDark**: undefined
- **AmbientLightLevelDark**: undefined
- **AmbientLightLevelLight**: undefined
- **AmbientLightLevelVeryLight**: undefined

:::

:::info MeasurementSystem

Types of measurement system a [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) may be measured in. 

##### Values

- **MeasurementSystemUnknown**: The measurement system is unknown, or does not apply to the chosen metric. 
- **MeasurementSystemMetric**: The metric measurement system. 
- **MeasurementSystemImperial**: The imperial measurement system. 

:::

## Typedefs

:::info typedef int32_t HealthValue

Type used to represent [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) values. 

:::

:::info typedef struct HealthMetricAlert HealthMetricAlert

Type used as a handle to a registered metric alert (returned by [health_service_register_metric_alert]()) 

:::

:::info typedef uint32_t HealthActivityMask

Expresses a set of [HealthActivity](/documentation/c/group___health_service.md#enum-healthactivity) values as a bitmask. 

:::

:::info typedef bool(* HealthActivityIteratorCB) (HealthActivity activity, time_t time_start, time_t time_end, void *context)

Callback used by [health_service_activities_iterate()](). 

##### Parameters

- **activity**: Which activity the caller is being informed about. 
- **time_start**: Start UTC time of the activity. 
- **time_end**: End UTC time of the activity. 
- **context**: The `context` parameter initially passed to [health_service_activities_iterate()](/documentation/c/group___health_service.md#function-health-service-activities-iterate). 

##### Returns

`true` if you are interested in more activities, or `false` to stop iterating. 

:::

:::info typedef void(* HealthEventHandler) (HealthEventType event, void *context)

Developer-supplied event handler, called when a health-related event occurs after subscribing via [health_service_events_subscribe()]();. 

##### Parameters

- **event**: The type of health-related event that occured. 
- **context**: The developer-supplied context pointer. 

:::

:::info typedef enum AmbientLightLevel AmbientLightLevel

Light level enum. 

:::

:::info typedef int32_t HealthValue

Type used to represent [HealthMetric](/documentation/c/group___health_service.md#enum-healthmetric) values. 

:::

:::info typedef struct HealthMetricAlert HealthMetricAlert

Type used as a handle to a registered metric alert (returned by [health_service_register_metric_alert]()) 

:::

:::info typedef uint32_t HealthActivityMask

Expresses a set of [HealthActivity](/documentation/c/group___health_service.md#enum-healthactivity) values as a bitmask. 

:::

:::info typedef bool(* HealthActivityIteratorCB) (HealthActivity activity, time_t time_start, time_t time_end, void *context)

Callback used by [health_service_activities_iterate()](). 

##### Parameters

- **activity**: Which activity the caller is being informed about. 
- **time_start**: Start UTC time of the activity. 
- **time_end**: End UTC time of the activity. 
- **context**: The `context` parameter initially passed to [health_service_activities_iterate()](/documentation/c/group___health_service.md#function-health-service-activities-iterate). 

##### Returns

`true` if you are interested in more activities, or `false` to stop iterating. 

:::

:::info typedef void(* HealthEventHandler) (HealthEventType event, void *context)

Developer-supplied event handler, called when a health-related event occurs after subscribing via [health_service_events_subscribe()]();. 

##### Parameters

- **event**: The type of health-related event that occured. 
- **context**: The developer-supplied context pointer. 

:::

:::info typedef enum AmbientLightLevel AmbientLightLevel

Light level enum. 

:::

