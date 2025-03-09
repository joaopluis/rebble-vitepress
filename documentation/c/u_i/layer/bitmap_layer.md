# BitmapLayer

 BitmapLayer is a Layer subtype that draws a GBitmap within its frame. It uses an alignment property to specify how to position the bitmap image within its frame. Optionally, when the background color is not GColorClear, it draws a solid background color behind the bitmap image, filling areas of the frame that are not covered by the bitmap image. Lastly, using the compositing mode property of the BitmapLayer, determines the way the bitmap image is drawn on top of what is underneath it (either the background color, or the layers beneath it).


### Inside the Implementation

The implementation of BitmapLayer is fairly straightforward and relies heavily on the functionality as exposed by the core drawing functions (see [Drawing Primitives](/documentation/c/group___drawing.md)). [BitmapLayer](/documentation/c/group___bitmap_layer.md)'s drawing callback uses [graphics_draw_bitmap_in_rect()](/documentation/c/group___drawing.md#function-graphics-draw-bitmap-in-rect) to perform the actual drawing of the GBitmap. It uses [grect_align()](/documentation/c/group___graphics_types.md#function-grect-align) to perform the layout of the image and it uses [graphics_fill_rect()](/documentation/c/group___drawing.md#function-graphics-fill-rect) to draw the background plane. 

## Functions

:::info BitmapLayer * bitmap_layer_create(GRect frame)

Creates a new bitmap layer on the heap and initalizes it the default values. 

:::

:::info void bitmap_layer_destroy(BitmapLayer *bitmap_layer)

Destroys a window previously created by bitmap_layer_create. 

:::

:::info Layer * bitmap_layer_get_layer(const BitmapLayer *bitmap_layer)

Gets the "root" Layer of the bitmap layer, which is the parent for the sub- layers used for its implementation. 

##### Parameters

- **bitmap_layer**: Pointer to the BitmapLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the bitmap layer. 

:::

:::info const GBitmap * bitmap_layer_get_bitmap(BitmapLayer *bitmap_layer)

Gets the pointer to the bitmap image that the BitmapLayer is using. 

##### Parameters

- **bitmap_layer**: The BitmapLayer for which to get the bitmap image 

##### Returns

A pointer to the bitmap image that the BitmapLayer is using 

:::

:::info void bitmap_layer_set_bitmap(BitmapLayer *bitmap_layer, const GBitmap *bitmap)

Sets the bitmap onto the BitmapLayer. The bitmap is set by reference (no deep copy), thus the caller of this function has to make sure the bitmap is kept in memory. 

##### Parameters

- **bitmap_layer**: The BitmapLayer for which to set the bitmap image 
- **bitmap**: The new GBitmap to set onto the BitmapLayer 

:::

:::info void bitmap_layer_set_alignment(BitmapLayer *bitmap_layer, GAlign alignment)

Sets the alignment of the image to draw with in frame of the BitmapLayer. The aligment parameter specifies which edges of the bitmap should overlap with the frame of the BitmapLayer. If the bitmap is smaller than the frame of the BitmapLayer, the background is filled with the background color. 

##### Parameters

- **bitmap_layer**: The BitmapLayer for which to set the aligment 
- **alignment**: The new alignment for the image inside the BitmapLayer 

:::

:::info void bitmap_layer_set_background_color(BitmapLayer *bitmap_layer, GColor color)

Sets the background color of bounding box that will be drawn behind the image of the BitmapLayer. 

##### Parameters

- **bitmap_layer**: The BitmapLayer for which to set the background color 
- **color**: The new GColor to set the background to 

:::

:::info void bitmap_layer_set_compositing_mode(BitmapLayer *bitmap_layer, GCompOp mode)

Sets the compositing mode of how the bitmap image is composited onto the BitmapLayer's background plane, or how it is composited onto what has been drawn beneath the BitmapLayer. 

##### Parameters

- **bitmap_layer**: The BitmapLayer for which to set the compositing mode 
- **mode**: The compositing mode to set 

:::


## Typedefs

:::info typedef struct BitmapLayer BitmapLayer

:::

