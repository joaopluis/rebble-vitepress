# Math

## Functions

:::info int32_t sin_lookup(int32_t angle)

Look-up the sine of the given angle from a pre-computed table. 

##### Parameters

- **angle**: The angle for which to compute the cosine. The angle value is scaled linearly, such that a value of 0x10000 corresponds to 360 degrees or 2 PI radians. 

:::

:::info int32_t cos_lookup(int32_t angle)

Look-up the cosine of the given angle from a pre-computed table. This is equivalent to calling `sin_lookup(angle + TRIG_MAX_ANGLE / 4)`. 

##### Parameters

- **angle**: The angle for which to compute the cosine. The angle value is scaled linearly, such that a value of 0x10000 corresponds to 360 degrees or 2 PI radians. 

:::

:::info int32_t atan2_lookup(int16_t y, int16_t x)

Look-up the arctangent of a given x, y pair The angle value is scaled linearly, such that a value of 0x10000 corresponds to 360 degrees or 2 PI radians. 

:::


