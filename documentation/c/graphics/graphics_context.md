# Graphics Context

The Pebble OS graphics engine, inspired by several notable graphics systems, including Apple’s Quartz 2D and its predecessor QuickDraw, provides your app with a canvas into which to draw, namely, the graphics context. A graphics context is the target into which graphics functions can paint, using Pebble drawing routines (see [Drawing Primitives](/documentation/c/group___drawing.md), [Drawing Paths](/documentation/c/group___path_drawing.md) and [Drawing Text](/documentation/c/group___text_drawing.md)).

A graphics context holds a reference to the bitmap into which to paint. It also holds the current drawing state, like the current fill color, stroke color, clipping box, drawing box, compositing mode, and so on. The GContext struct is the type representing the graphics context.

For drawing in your Pebble watchface or watchapp, you won't need to create a GContext yourself. In most cases, it is provided by Pebble OS as an argument passed into a render callback (the .update_proc of a Layer).

Your app can’t call drawing functions at any given point in time: Pebble OS will request your app to render. Typically, your app will be calling out to graphics functions in the .update_proc callback of a Layer. 

## Functions

:::info void graphics_context_set_stroke_color(GContext *ctx, GColor color)

Sets the current stroke color of the graphics context. 

##### Parameters

- **ctx**: The graphics context onto which to set the stroke color 
- **color**: The new stroke color 

:::

:::info void graphics_context_set_fill_color(GContext *ctx, GColor color)

Sets the current fill color of the graphics context. 

##### Parameters

- **ctx**: The graphics context onto which to set the fill color 
- **color**: The new fill color 

:::

:::info void graphics_context_set_text_color(GContext *ctx, GColor color)

Sets the current text color of the graphics context. 

##### Parameters

- **ctx**: The graphics context onto which to set the text color 
- **color**: The new text color 

:::

:::info void graphics_context_set_compositing_mode(GContext *ctx, GCompOp mode)

Sets the current bitmap compositing mode of the graphics context. 

##### Parameters

- **ctx**: The graphics context onto which to set the compositing mode 
- **mode**: The new compositing mode 

:::

:::info void graphics_context_set_antialiased(GContext *ctx, bool enable)

Sets whether antialiasing is applied to stroke drawing. 

##### Parameters

- **ctx**: The graphics context onto which to set the antialiasing 
- **enable**: True = antialiasing enabled, False = antialiasing disabled 

:::

:::info void graphics_context_set_stroke_width(GContext *ctx, uint8_t stroke_width)

Sets the width of the stroke for drawing routines. 

##### Parameters

- **ctx**: The graphics context onto which to set the stroke width 
- **stroke_width**: Width in pixels of the stroke. 

:::


