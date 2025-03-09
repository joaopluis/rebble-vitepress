# RotBitmapLayer

A RotBitmapLayer is like a [BitmapLayer](/documentation/c/group___bitmap_layer.md) but has the ability to be rotated (by default, around its center). The amount of rotation is specified using [rot_bitmap_layer_set_angle()](/documentation/c/group___rot_bitmap_layer.md#function-rot-bitmap-layer-set-angle) or [rot_bitmap_layer_increment_angle()](/documentation/c/group___rot_bitmap_layer.md#function-rot-bitmap-layer-increment-angle). The rotation argument to those functions is specified as an amount of clockwise rotation, where the value 0x10000 represents a full 360 degree rotation and 0 represent no rotation, and it scales linearly between those values, just like [sin_lookup](/documentation/c/group___math.md#function-sin-lookup).

The center of rotation in the source bitmap is always placed at the center of the RotBitmapLayer and the size of the RotBitmapLayer is automatically calculated so that the entire Bitmap can fit in at all rotation angles.

For example, if the image is 10px wide and high, the RotBitmapLayer will be 14px wide ( sqrt(10^2+10^2) ).

By default, the center of rotation in the source bitmap is the center of the bitmap but you can call [rot_bitmap_set_src_ic()](/documentation/c/group___rot_bitmap_layer.md#function-rot-bitmap-set-src-ic) to change the center of rotation.

## Functions

:::info RotBitmapLayer * rot_bitmap_layer_create(GBitmap *bitmap)

Creates a new RotBitmapLayer on the heap and initializes it with the default values: 

##### Parameters

- **bitmap**: The bitmap to display in this RotBitmapLayer 

##### Returns

A pointer to the RotBitmapLayer. `NULL` if the RotBitmapLayer could not be created 

:::

:::info void rot_bitmap_layer_destroy(RotBitmapLayer *bitmap)

Destroys a RotBitmapLayer and frees all associated memory. 

##### Parameters

- **bitmap**: The RotBitmapLayer to destroy. 

:::

:::info void rot_bitmap_layer_set_corner_clip_color(RotBitmapLayer *bitmap, GColor color)

Defines what color to use in areas that are not covered by the source bitmap. By default this is GColorClear. 

##### Parameters

- **bitmap**: The RotBitmapLayer on which to change the corner clip color 
- **color**: The corner clip color 

:::

:::info void rot_bitmap_layer_set_angle(RotBitmapLayer *bitmap, int32_t angle)

Sets the rotation angle of this RotBitmapLayer. 

##### Parameters

- **bitmap**: The RotBitmapLayer on which to change the rotation 
- **angle**: Rotation is an integer between 0 (no rotation) and 0x10000 (360 degree rotation). 

:::

:::info void rot_bitmap_layer_increment_angle(RotBitmapLayer *bitmap, int32_t angle_change)

Change the rotation angle of this RotBitmapLayer. 

##### Parameters

- **bitmap**: The RotBitmapLayer on which to change the rotation 
- **angle_change**: The rotation angle change 

:::

:::info void rot_bitmap_set_src_ic(RotBitmapLayer *bitmap, GPoint ic)

Defines the only point that will not be affected by the rotation in the source bitmap. 

##### Parameters

- **bitmap**: The RotBitmapLayer on which to change the rotation 
- **ic**: The only point in the original image that will not be affected by the rotation. 

:::

:::info void rot_bitmap_set_compositing_mode(RotBitmapLayer *bitmap, GCompOp mode)

Sets the compositing mode of how the bitmap image is composited onto what has been drawn beneath the RotBitmapLayer. By default this is [GCompOpAssign](/documentation/c/group___graphics_types.md#enumvalue-gcompopassign). The RotBitmapLayer is automatically marked dirty after this operation. 

##### Parameters

- **bitmap**: The RotBitmapLayer on which to change the rotation 
- **mode**: The compositing mode to set 

:::


## Typedefs

:::info typedef struct RotBitmapLayer RotBitmapLayer

:::

