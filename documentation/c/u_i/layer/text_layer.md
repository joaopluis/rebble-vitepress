# TextLayer

![text_layer.png](/documentation/c//text_layer.png)
 The geometric information (bounds, frame) of the Layer is used as the "box" in which the text is drawn. The [TextLayer](/documentation/c/group___text_layer.md) also has a number of other properties that influence how the text is drawn. Most important of these properties are: a pointer to the string to draw itself, the font, the text color, the background color of the layer, the overflow mode and alignment of the text inside the layer. 

## Functions

:::info TextLayer * text_layer_create(GRect frame)

Creates a new TextLayer on the heap and initializes it with the default values. 

##### Parameters

- **frame**: The frame with which to initialze the TextLayer 

##### Returns

A pointer to the TextLayer. `NULL` if the TextLayer could not be created 

:::

:::info void text_layer_destroy(TextLayer *text_layer)

Destroys a TextLayer previously created by text_layer_create. 

:::

:::info Layer * text_layer_get_layer(TextLayer *text_layer)

Gets the "root" Layer of the text layer, which is the parent for the sub- layers used for its implementation. 

##### Parameters

- **text_layer**: Pointer to the TextLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the text layer. 

:::

:::info void text_layer_set_text(TextLayer *text_layer, const char *text)

Sets the pointer to the string where the TextLayer is supposed to find the text at a later point in time, when it needs to draw itself. 

##### Parameters

- **text_layer**: The TextLayer of which to set the text 
- **text**: The new text to set onto the TextLayer. This must be a null-terminated and valid UTF-8 string! 

:::

:::info const char * text_layer_get_text(TextLayer *text_layer)

Gets the pointer to the string that the TextLayer is using. 

##### Parameters

- **text_layer**: The TextLayer for which to get the text 

:::

:::info void text_layer_set_background_color(TextLayer *text_layer, GColor color)

Sets the background color of the bounding box that will be drawn behind the text. 

##### Parameters

- **text_layer**: The TextLayer of which to set the background color 
- **color**: The new GColor to set the background to 

:::

:::info void text_layer_set_text_color(TextLayer *text_layer, GColor color)

Sets the color of text that will be drawn. 

##### Parameters

- **text_layer**: The TextLayer of which to set the text color 
- **color**: The new GColor to set the text color to 

:::

:::info void text_layer_set_overflow_mode(TextLayer *text_layer, GTextOverflowMode line_mode)

Sets the line break mode of the TextLayer. 

##### Parameters

- **text_layer**: The TextLayer of which to set the overflow mode 
- **line_mode**: The new [GTextOverflowMode](/documentation/c/group___text_drawing.md#enum-gtextoverflowmode) to set 

:::

:::info void text_layer_set_font(TextLayer *text_layer, GFont font)

Sets the font of the TextLayer. 

##### Parameters

- **text_layer**: The TextLayer of which to set the font 
- **font**: The new [GFont](/documentation/c/group___fonts.md#typedef-gfont) for the TextLayer 

:::

:::info void text_layer_set_text_alignment(TextLayer *text_layer, GTextAlignment text_alignment)

Sets the alignment of the TextLayer. 

##### Parameters

- **text_layer**: The TextLayer of which to set the alignment 
- **text_alignment**: The new text alignment for the TextLayer 

:::

:::info void text_layer_enable_screen_text_flow_and_paging(TextLayer *text_layer, uint8_t inset)

Enables text flow following the boundaries of the screen and pagination that introduces extra line spacing at page breaks to avoid partially clipped lines for the TextLayer. If the TextLayer is part of a [ScrollLayer](/documentation/c/group___scroll_layer.md) the ScrollLayer's frame will be used to configure paging. 

##### Parameters

- **text_layer**: The TextLayer for which to enable text flow and paging 
- **inset**: Additional amount of pixels to inset to the inside of the screen for text flow 

:::

:::info void text_layer_restore_default_text_flow_and_paging(TextLayer *text_layer)

Restores text flow and paging for the TextLayer to the rectangular defaults. 

##### Parameters

- **text_layer**: The TextLayer for which to restore text flow and paging 

:::

:::info GSize text_layer_get_content_size(TextLayer *text_layer)

Calculates the size occupied by the current text of the TextLayer. 

##### Parameters

- **text_layer**: the TextLayer for which to calculate the text's size 

##### Returns

The size occupied by the current text of the TextLayer 

:::

:::info void text_layer_set_size(TextLayer *text_layer, const GSize max_size)

Update the size of the text layer This is a convenience function to update the frame of the TextLayer. 

##### Parameters

- **text_layer**: The TextLayer of which to set the size 
- **max_size**: The new size for the TextLayer 

:::


## Typedefs

:::info typedef struct TextLayer TextLayer

:::

