# Drawing Text

See [Graphics Context](/documentation/c/group___graphics_context.md) for more information about the graphics context.

Other drawing functions and related documentation:

* [Drawing Primitives](/documentation/c/group___drawing.md)
* [Drawing Paths](/documentation/c/group___path_drawing.md)
* [Graphics Types](/documentation/c/group___graphics_types.md)

## Functions

:::info GTextAttributes * graphics_text_attributes_create(void)

Creates an instance of GTextAttributes for advanced control when rendering text. 

##### Returns

New instance of GTextAttributes 

:::

:::info void graphics_text_attributes_destroy(GTextAttributes *text_attributes)

Destroys a previously created instance of GTextAttributes. 

:::

:::info void graphics_text_attributes_restore_default_text_flow(GTextAttributes *text_attributes)

Restores text flow to the rectangular default. 

##### Parameters

- **text_attributes**: The attributes for which to disable text flow 

:::

:::info void graphics_text_attributes_enable_screen_text_flow(GTextAttributes *text_attributes, uint8_t inset)

Enables text flow that follows the boundaries of the screen. 

##### Parameters

- **text_attributes**: The attributes for which text flow should be enabled 
- **inset**: Additional amount of pixels to inset to the inside of the screen for text flow calculation. Can be zero. 

:::

:::info void graphics_text_attributes_restore_default_paging(GTextAttributes *text_attributes)

Restores paging and locked content origin to the defaults. 

##### Parameters

- **text_attributes**: The attributes for which to restore paging and locked content origin 

:::

:::info void graphics_text_attributes_enable_paging(GTextAttributes *text_attributes, GPoint content_origin_on_screen, GRect paging_on_screen)

Enables paging and locks the text flow calculation to a fixed point on the screen. 

##### Parameters

- **text_attributes**: Attributes for which to enable paging and locked content origin 
- **content_origin_on_screen**: Absolute coordinate on the screen where the text content starts before an animation or scrolling takes place. Usually the frame's origin of a layer in screen coordinates. 
- **paging_on_screen**: Rectangle in absolute coordinates on the screen that describes where text content pages. Usually the container's absolute frame in screen coordinates. 

:::

:::info void graphics_draw_text(GContext *ctx, const char *text, GFont const font, const GRect box, const GTextOverflowMode overflow_mode, const GTextAlignment alignment, GTextAttributes *text_attributes)

Draw text into the current graphics context, using the context's current text color. The text will be drawn inside a box with the specified dimensions and configuration, with clipping occuring automatically. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **text**: The zero terminated UTF-8 string to draw 
- **font**: The font in which the text should be set 
- **box**: The bounding box in which to draw the text. The first line of text will be drawn against the top of the box. 
- **overflow_mode**: The overflow behavior, in case the text is larger than what fits inside the box. 
- **alignment**: The horizontal alignment of the text 
- **text_attributes**: Optional text attributes to describe the characteristics of the text 

:::

:::info GSize graphics_text_layout_get_content_size(const char *text, GFont const font, const GRect box, const GTextOverflowMode overflow_mode, const GTextAlignment alignment)

Obtain the maximum size that a text with given font, overflow mode and alignment occupies within a given rectangular constraint. 

##### Parameters

- **text**: The zero terminated UTF-8 string for which to calculate the size 
- **font**: The font in which the text should be set while calculating the size 
- **box**: The bounding box in which the text should be constrained 
- **overflow_mode**: The overflow behavior, in case the text is larger than what fits inside the box. 
- **alignment**: The horizontal alignment of the text 

##### Returns

The maximum size occupied by the text 

:::

:::info GSize graphics_text_layout_get_content_size_with_attributes(const char *text, GFont const font, const GRect box, const GTextOverflowMode overflow_mode, const GTextAlignment alignment, GTextAttributes *text_attributes)

Obtain the maximum size that a text with given font, overflow mode and alignment occupies within a given rectangular constraint. 

##### Parameters

- **text**: The zero terminated UTF-8 string for which to calculate the size 
- **font**: The font in which the text should be set while calculating the size 
- **box**: The bounding box in which the text should be constrained 
- **overflow_mode**: The overflow behavior, in case the text is larger than what fits inside the box. 
- **alignment**: The horizontal alignment of the text 
- **text_attributes**: Optional text attributes to describe the characteristics of the text 

##### Returns

The maximum size occupied by the text 

:::


## Enums

:::info GTextOverflowMode

Text overflow mode controls the way text overflows when the string that is drawn does not fit inside the area constraint. 

##### Values

- **GTextOverflowModeWordWrap**: On overflow, wrap words to a new line below the current one. Once vertical space is consumed, the last line may be clipped. 
- **GTextOverflowModeTrailingEllipsis**: On overflow, wrap words to a new line below the current one. Once vertical space is consumed, truncate as needed to fit a trailing ellipsis (...). Clipping may occur if the vertical space cannot accomodate the first line of text. 
- **GTextOverflowModeFill**: Acts like [GTextOverflowModeTrailingEllipsis](/documentation/c/group___text_drawing.md#enumvalue-gtextoverflowmodetrailingellipsis), plus trims leading and trailing newlines, while treating all other newlines as spaces. 

:::

:::info GTextAlignment

Text aligment controls the way the text is aligned inside the box the text is drawn into. 

##### Values

- **GTextAlignmentLeft**: Aligns the text to the left of the drawing box. 
- **GTextAlignmentCenter**: Aligns the text centered inside the drawing box. 
- **GTextAlignmentRight**: Aligns the text to the right of the drawing box. 

:::

## Typedefs

:::info typedef struct GTextAttributes GTextAttributes

:::

