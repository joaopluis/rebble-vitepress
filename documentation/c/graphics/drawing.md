# Drawing Primitives

Use these drawing functions inside a Layer's `.update_proc` drawing callback. A `GContext` is passed into this callback as an argument. This `GContext` can then be used with all of the drawing functions which are documented below. See [Graphics Context](/documentation/c/group___graphics_context.md) for more information about the graphics context.

Refer to  (chapter "Layers" and "Graphics") for a conceptual overview of the drawing system, Layers and relevant code examples.

Other drawing functions and related documentation:

* [Drawing Text](/documentation/c/group___text_drawing.md)
* [Drawing Paths](/documentation/c/group___path_drawing.md)
* [Graphics Types](/documentation/c/group___graphics_types.md)

## Functions

:::info void graphics_draw_pixel(GContext *ctx, GPoint point)

Draws a pixel at given point in the current stroke color. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **point**: The point at which to draw the pixel 

:::

:::info void graphics_draw_line(GContext *ctx, GPoint p0, GPoint p1)

Draws line in the current stroke color, current stroke width and AA flag. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **p0**: The starting point of the line 
- **p1**: The ending point of the line 

:::

:::info void graphics_draw_rect(GContext *ctx, GRect rect)

Draws a 1-pixel wide rectangle outline in the current stroke color. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **rect**: The rectangle for which to draw the outline 

:::

:::info void graphics_fill_rect(GContext *ctx, GRect rect, uint16_t corner_radius, GCornerMask corner_mask)

Fills a rectangle with the current fill color, optionally rounding all or a selection of its corners. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **rect**: The rectangle to fill 
- **corner_radius**: The rounding radius of the corners in pixels (maximum is 8 pixels) 
- **corner_mask**: Bitmask of the corners that need to be rounded. 

:::

:::info void graphics_draw_circle(GContext *ctx, GPoint p, uint16_t radius)

Draws the outline of a circle in the current stroke color. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **p**: The center point of the circle 
- **radius**: The radius in pixels 

:::

:::info void graphics_fill_circle(GContext *ctx, GPoint p, uint16_t radius)

Fills a circle in the current fill color. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **p**: The center point of the circle 
- **radius**: The radius in pixels 

:::

:::info void graphics_draw_round_rect(GContext *ctx, GRect rect, uint16_t radius)

Draws the outline of a rounded rectangle in the current stroke color. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **rect**: The rectangle defining the dimensions of the rounded rectangle to draw 
- **radius**: The corner radius in pixels 

:::

:::info void graphics_draw_bitmap_in_rect(GContext *ctx, const GBitmap *bitmap, GRect rect)

Draws a bitmap into the graphics context, inside the specified rectangle. 

##### Parameters

- **ctx**: The destination graphics context in which to draw the bitmap 
- **bitmap**: The bitmap to draw 
- **rect**: The rectangle in which to draw the bitmap 

:::

:::info GBitmap * graphics_capture_frame_buffer(GContext *ctx)

A shortcut to capture the framebuffer in the native format of the watch. 

:::

:::info GBitmap * graphics_capture_frame_buffer_format(GContext *ctx, GBitmapFormat format)

Captures the frame buffer for direct access, using the given format. Graphics functions will not affect the frame buffer while it is captured. The frame buffer is released when `[graphics_release_frame_buffer]()` is called. The frame buffer must be released before the end of a layer's `.update_proc` for the layer to be drawn properly. 

##### Parameters

- **ctx**: The graphics context providing the frame buffer 
- **format**: The format in which the framebuffer should be captured. Supported formats are GBitmapFormat1Bit and GBitmapFormat8Bit. 

##### Returns

A pointer to the frame buffer. `NULL` if failed. 

:::

:::info bool graphics_release_frame_buffer(GContext *ctx, GBitmap *buffer)

Releases the frame buffer. Must be called before the end of a layer's `.update_proc` for the layer to be drawn properly. 

##### Parameters

- **ctx**: The graphics context providing the frame buffer 
- **buffer**: The pointer to frame buffer 

##### Returns

True if the frame buffer was released successfully 

:::

:::info bool graphics_frame_buffer_is_captured(GContext *ctx)

Whether or not the frame buffer has been captured by `[graphics_capture_frame_buffer](/documentation/c/group___drawing.md#function-graphics-capture-frame-buffer)`. Graphics functions will not affect the frame buffer until it has been released by `[graphics_release_frame_buffer](/documentation/c/group___drawing.md#function-graphics-release-frame-buffer)`. 

##### Parameters

- **ctx**: The graphics context providing the frame buffer 

##### Returns

True if the frame buffer has been captured 

:::

:::info void graphics_draw_rotated_bitmap(GContext *ctx, GBitmap *src, GPoint src_ic, int rotation, GPoint dest_ic)

Draws a rotated bitmap with a memory-sensitive 2x anti-aliasing technique (using ray-finding instead of super-sampling), which is thresholded into a b/w bitmap for 1-bit and color blended for 8-bit. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **src**: The source bitmap to draw 
- **src_ic**: Instance center (single point unaffected by rotation) relative to source bitmap 
- **rotation**: Angle of rotation. Rotation is an integer between 0 (no rotation) and TRIG_MAX_ANGLE (360 degree rotation). Use [DEG_TO_TRIGANGLE](/documentation/c/group___math.md#define-deg-to-trigangle) to easily convert degrees to the appropriate value. 
- **dest_ic**: Where to draw the instance center of the rotated bitmap in the context. 

:::

:::info void graphics_draw_arc(GContext *ctx, GRect rect, GOvalScaleMode scale_mode, int32_t angle_start, int32_t angle_end)

Draws a line arc clockwise between `angle_start` and `angle_end`, where 0° is the top of the circle. If the difference between `angle_start` and `angle_end` is greater than 360°, a full circle will be drawn. 

##### Parameters

- **ctx**: The destination graphics context in which to draw using the current stroke color and antialiasing setting. 
- **rect**: The reference rectangle to derive the center point and radius (see scale_mode). 
- **scale_mode**: Determines how rect will be used to derive the center point and radius. 
- **angle_start**: Radial starting angle. Use [DEG_TO_TRIGANGLE](/documentation/c/group___math.md#define-deg-to-trigangle) to easily convert degrees to the appropriate value. 
- **angle_end**: Radial finishing angle. If smaller than `angle_start`, nothing will be drawn. 

:::

:::info void graphics_fill_radial(GContext *ctx, GRect rect, GOvalScaleMode scale_mode, uint16_t inset_thickness, int32_t angle_start, int32_t angle_end)

Fills a circle clockwise between `angle_start` and `angle_end`, where 0° is the top of the circle. If the difference between `angle_start` and `angle_end` is greater than 360°, a full circle will be drawn and filled. If `angle_start` is greater than `angle_end` nothing will be drawn. 

##### Parameters

- **ctx**: The destination graphics context in which to draw using the current fill color and antialiasing setting. 
- **rect**: The reference rectangle to derive the center point and radius (see scale). 
- **scale_mode**: Determines how rect will be used to derive the center point and radius. 
- **inset_thickness**: Describes how thick in pixels the radial will be drawn towards its center measured from the outside. 
- **angle_start**: Radial starting angle. Use [DEG_TO_TRIGANGLE](/documentation/c/group___math.md#define-deg-to-trigangle) to easily convert degrees to the appropriate value. 
- **angle_end**: Radial finishing angle. If smaller than `angle_start`, nothing will be drawn. 

:::

:::info GPoint gpoint_from_polar(GRect rect, GOvalScaleMode scale_mode, int32_t angle)

Calculates a [GPoint](/documentation/c/struct_g_point.md) located at the angle provided on the perimeter of a circle defined by the provided [GRect](/documentation/c/struct_g_rect.md). 

##### Parameters

- **rect**: The reference rectangle to derive the center point and radius (see scale_mode). 
- **scale_mode**: Determines how rect will be used to derive the center point and radius. 
- **angle**: The angle at which the point on the circle's perimeter should be calculated. Use [DEG_TO_TRIGANGLE](/documentation/c/group___math.md#define-deg-to-trigangle) to easily convert degrees to the appropriate value. 

##### Returns

The point on the circle's perimeter. 

:::

:::info GRect grect_centered_from_polar(GRect rect, GOvalScaleMode scale_mode, int32_t angle, GSize size)

Calculates a rectangle centered on the perimeter of a circle at a given angle. Use this to construct rectangles that follow the perimeter of a circle as an input for graphics_fill_radial_internal or graphics_draw_arc_internal, e.g. to draw circles every 30 degrees on a watchface. 

##### Parameters

- **rect**: The reference rectangle to derive the circle's center point and radius (see scale_mode). 
- **scale_mode**: Determines how rect will be used to derive the circle's center point and radius. 
- **angle**: The angle at which the point on the circle's perimeter should be calculated. Use [DEG_TO_TRIGANGLE](/documentation/c/group___math.md#define-deg-to-trigangle) to easily convert degrees to the appropriate value. 
- **size**: Width and height of the desired rectangle. 

##### Returns

The rectangle centered on the circle's perimeter. 

:::


## Enums

:::info GCornerMask

Bit mask values to specify the corners of a rectangle. The values can be combines using binary OR (`|`), For example: the mask to indicate top left and bottom right corners can: be created as follows: `(GCornerTopLeft | GCornerBottomRight)`

##### Values

- **GCornerNone**: No corners. 
- **GCornerTopLeft**: Top-Left corner. 
- **GCornerTopRight**: Top-Right corner. 
- **GCornerBottomLeft**: Bottom-Left corner. 
- **GCornerBottomRight**: Bottom-Right corner. 
- **GCornersAll**: All corners. 
- **GCornersTop**: Top corners. 
- **GCornersBottom**: Bottom corners. 
- **GCornersLeft**: Left corners. 
- **GCornersRight**: Right corners. 

:::

:::info GOvalScaleMode

Values to specify how a given rectangle should be used to derive an oval shape. 

##### Values

- **GOvalScaleModeFitCircle**: Places the largest possible fully visible circle in the center of a rectangle. 
- **GOvalScaleModeFillCircle**: Places the smallest possible circle in the center of a rectangle so that the rectangle is fully inside the circle. 

:::

