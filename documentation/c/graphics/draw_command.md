# Draw Commands

These draw commands can be loaded from resources, manipulated in place and drawn to the current graphics context. Each [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) can be an arbitrary path or a circle with optional fill or stroke. The stroke width and color of the stroke and fill are also encoded within the [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand). Paths can can be drawn open or closed.

All aspects of a draw command can be modified, except for the number of points in a path (a circle only has one point, the center).

Draw commands are grouped into a [GDrawCommandList](/documentation/c/group___draw_command.md#typedef-gdrawcommandlist), which can be drawn all at once. Each individual [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) can be accessed from a [GDrawCommandList](/documentation/c/group___draw_command.md#typedef-gdrawcommandlist) for modification.

A [GDrawCommandList](/documentation/c/group___draw_command.md#typedef-gdrawcommandlist) forms the basis for [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) and [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) objects. A [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) represents a static image and can be represented by the PDC file format and can be loaded as a resource.

Once you have a [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) loaded in memory you can draw it on the screen in a [LayerUpdateProc](/documentation/c/group___layer.md#typedef-layerupdateproc) with the [gdraw_command_image_draw()](/documentation/c/group___draw_command.md#function-gdraw-command-image-draw).

A [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) represents a single frame of an animated sequence, with multiple frames making up a single [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence), which can also be stored as a PDC and loaded as a resource.

To draw a [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence), use the [gdraw_command_sequence_get_frame_by_elapsed()](/documentation/c/group___draw_command.md#function-gdraw-command-sequence-get-frame-by-elapsed) to obtain the current [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) and [gdraw_command_frame_draw()](/documentation/c/group___draw_command.md#function-gdraw-command-frame-draw) to draw it.

Draw commands also allow access to drawing with sub-pixel precision. The points are treated as Fixed point types in the format 13.3, so that 1/8th of a pixel precision is possible. Only the points in draw commands of the type GDrawCommandTypePrecisePath will be treated as higher precision. 

## Functions

:::info void gdraw_command_draw(GContext *ctx, GDrawCommand *command)

Draw a command. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) to draw 

:::

:::info GDrawCommandType gdraw_command_get_type(GDrawCommand *command)

Get the command type. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the type 

##### Returns

The type of the given [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand)

:::

:::info void gdraw_command_set_fill_color(GDrawCommand *command, GColor fill_color)

Set the fill color of a command. 

##### Parameters

- **command**: ref DrawCommand for which to set the fill color 
- **fill_color**: GColor to set for the fill 

:::

:::info GColor gdraw_command_get_fill_color(GDrawCommand *command)

Get the fill color of a command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the fill color 

##### Returns

fill color of the given [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand)

:::

:::info void gdraw_command_set_stroke_color(GDrawCommand *command, GColor stroke_color)

Set the stroke color of a command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) for which to set the stroke color 
- **stroke_color**: GColor to set for the stroke 

:::

:::info GColor gdraw_command_get_stroke_color(GDrawCommand *command)

Get the stroke color of a command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the stroke color 

##### Returns

The stroke color of the given [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand)

:::

:::info void gdraw_command_set_stroke_width(GDrawCommand *command, uint8_t stroke_width)

Set the stroke width of a command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) for which to set the stroke width 
- **stroke_width**: stroke width to set for the command 

:::

:::info uint8_t gdraw_command_get_stroke_width(GDrawCommand *command)

Get the stroke width of a command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the stroke width 

##### Returns

The stroke width of the given [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand)

:::

:::info uint16_t gdraw_command_get_num_points(GDrawCommand *command)

Get the number of points in a command. 

:::

:::info void gdraw_command_set_point(GDrawCommand *command, uint16_t point_idx, GPoint point)

Set the value of the point in a command at the specified index. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) for which to set the value of a point 
- **point_idx**: Index of the point to set the value for 
- **point**: new point value to set 

:::

:::info GPoint gdraw_command_get_point(GDrawCommand *command, uint16_t point_idx)

Get the value of a point in a command from the specified index. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get a point 
- **point_idx**: The index to get the point for 

##### Returns

The point in the [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) specified by point_idx 

:::

:::info void gdraw_command_set_radius(GDrawCommand *command, uint16_t radius)

Set the radius of a circle command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to set the circle radius 
- **radius**: The radius to set for the circle. 

:::

:::info uint16_t gdraw_command_get_radius(GDrawCommand *command)

Get the radius of a circle command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the circle radius 

##### Returns

The radius in pixels if command is of type GDrawCommandCircle 

:::

:::info void gdraw_command_set_path_open(GDrawCommand *command, bool path_open)

Set the path of a stroke command to be open. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) for which to set the path open status 
- **path_open**: true if path should be hidden 

:::

:::info bool gdraw_command_get_path_open(GDrawCommand *command)

Return whether a stroke command path is open. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the path open status 

##### Returns

true if the path is open 

:::

:::info void gdraw_command_set_hidden(GDrawCommand *command, bool hidden)

Set a command as hidden. This command will not be drawn when [gdraw_command_draw](/documentation/c/group___draw_command.md#function-gdraw-command-draw) is called with this command. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) for which to set the hidden status 
- **hidden**: true if command should be hidden 

:::

:::info bool gdraw_command_get_hidden(GDrawCommand *command)

Return whether a command is hidden. 

##### Parameters

- **command**: [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) from which to get the hidden status 

##### Returns

true if command is hidden 

:::

:::info void gdraw_command_frame_draw(GContext *ctx, GDrawCommandSequence *sequence, GDrawCommandFrame *frame, GPoint offset)

Draw a frame. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **sequence**: The sequence from which the frame comes from (this is required) 
- **frame**: Frame to draw 
- **offset**: Offset from draw context origin to draw the frame 

:::

:::info void gdraw_command_frame_set_duration(GDrawCommandFrame *frame, uint32_t duration)

Set the duration of the frame. 

##### Parameters

- **frame**: [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) for which to set the duration 
- **duration**: duration of the frame in milliseconds 

:::

:::info uint32_t gdraw_command_frame_get_duration(GDrawCommandFrame *frame)

Get the duration of the frame. 

##### Parameters

- **frame**: [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) from which to get the duration 

##### Returns

duration of the frame in milliseconds 

:::

:::info GDrawCommandImage * gdraw_command_image_create_with_resource(uint32_t resource_id)

Creates a [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) from the specified resource (PDC file) 

##### Parameters

- **resource_id**: Resource containing data to load and create [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) from. 

##### Returns

[GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) pointer if the resource was loaded, NULL otherwise 

:::

:::info GDrawCommandImage * gdraw_command_image_clone(GDrawCommandImage *image)

Creates a [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) as a copy from a given image. 

##### Parameters

- **image**: Image to copy. 

##### Returns

cloned image or NULL if the operation failed 

:::

:::info void gdraw_command_image_destroy(GDrawCommandImage *image)

Deletes the [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) structure and frees associated data. 

##### Parameters

- **image**: Pointer to the image to free (delete) 

:::

:::info void gdraw_command_image_draw(GContext *ctx, GDrawCommandImage *image, GPoint offset)

Draw an image. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **image**: Image to draw 
- **offset**: Offset from draw context origin to draw the image 

:::

:::info GSize gdraw_command_image_get_bounds_size(GDrawCommandImage *image)

Get size of the bounding box surrounding all draw commands in the image. This bounding box can be used to set the graphics context or layer bounds when drawing the image. 

##### Parameters

- **image**: [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) from which to get the bounding box size 

##### Returns

bounding box size 

:::

:::info void gdraw_command_image_set_bounds_size(GDrawCommandImage *image, GSize size)

Set size of the bounding box surrounding all draw commands in the image. This bounding box can be used to set the graphics context or layer bounds when drawing the image. 

##### Parameters

- **image**: [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) for which to set the bounding box size 
- **size**: bounding box size 

:::

:::info GDrawCommandList * gdraw_command_image_get_command_list(GDrawCommandImage *image)

Get the command list of the image. 

##### Parameters

- **image**: [GDrawCommandImage](/documentation/c/group___draw_command.md#typedef-gdrawcommandimage) from which to get the command list 

##### Returns

command list 

:::

:::info void gdraw_command_list_iterate(GDrawCommandList *command_list, GDrawCommandListIteratorCb handle_command, void *callback_context)

Iterate over all commands in a command list. 

##### Parameters

- **command_list**: [GDrawCommandList](/documentation/c/group___draw_command.md#typedef-gdrawcommandlist) over which to iterate 
- **handle_command**: iterator callback 
- **callback_context**: context pointer to be passed into the iterator callback 

:::

:::info void gdraw_command_list_draw(GContext *ctx, GDrawCommandList *command_list)

Draw all commands in a command list. 

##### Parameters

- **ctx**: The destination graphics context in which to draw 
- **command_list**: list of commands to draw 

:::

:::info GDrawCommand * gdraw_command_list_get_command(GDrawCommandList *command_list, uint16_t command_idx)

Get the command at the specified index. 

##### Parameters

- **command_list**: [GDrawCommandList](/documentation/c/group___draw_command.md#typedef-gdrawcommandlist) from which to get a command 
- **command_idx**: index of the command to get 

##### Returns

pointer to [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) at the specified index 

:::

:::info uint32_t gdraw_command_list_get_num_commands(GDrawCommandList *command_list)

Get the number of commands in the list. 

##### Parameters

- **command_list**: [GDrawCommandList](/documentation/c/group___draw_command.md#typedef-gdrawcommandlist) from which to get the number of commands 

##### Returns

number of commands in command list 

:::

:::info GDrawCommandSequence * gdraw_command_sequence_create_with_resource(uint32_t resource_id)

Creates a [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from the specified resource (PDC file) 

##### Parameters

- **resource_id**: Resource containing data to load and create [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from. 

##### Returns

[GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) pointer if the resource was loaded, NULL otherwise 

:::

:::info GDrawCommandSequence * gdraw_command_sequence_clone(GDrawCommandSequence *sequence)

Creates a [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) as a copy from a given sequence. 

##### Parameters

- **sequence**: Sequence to copy 

##### Returns

cloned sequence or NULL if the operation failed 

:::

:::info void gdraw_command_sequence_destroy(GDrawCommandSequence *sequence)

Deletes the [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) structure and frees associated data. 

##### Parameters

- **image**: Pointer to the sequence to destroy 

:::

:::info GDrawCommandFrame * gdraw_command_sequence_get_frame_by_elapsed(GDrawCommandSequence *sequence, uint32_t elapsed_ms)

Get the frame that should be shown after the specified amount of elapsed time The last frame will be returned if the elapsed time exceeds the total time. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from which to get the frame 
- **elapsed_ms**: elapsed time in milliseconds 

##### Returns

pointer to [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) that should be displayed at the elapsed time 

:::

:::info GDrawCommandFrame * gdraw_command_sequence_get_frame_by_index(GDrawCommandSequence *sequence, uint32_t index)

Get the frame at the specified index. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from which to get the frame 
- **index**: Index of frame to get 

##### Returns

pointer to [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) at the specified index 

:::

:::info GSize gdraw_command_sequence_get_bounds_size(GDrawCommandSequence *sequence)

Get the size of the bounding box surrounding all draw commands in the sequence. This bounding box can be used to set the graphics context or layer bounds when drawing the frames in the sequence. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from which to get the bounds 

##### Returns

bounding box size 

:::

:::info void gdraw_command_sequence_set_bounds_size(GDrawCommandSequence *sequence, GSize size)

Set size of the bounding box surrounding all draw commands in the sequence. This bounding box can be used to set the graphics context or layer bounds when drawing the frames in the sequence. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) for which to set the bounds 
- **size**: bounding box size 

:::

:::info uint32_t gdraw_command_sequence_get_play_count(GDrawCommandSequence *sequence)

Get the play count of the sequence. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from which to get the play count 

##### Returns

play count of sequence 

:::

:::info void gdraw_command_sequence_set_play_count(GDrawCommandSequence *sequence, uint32_t play_count)

Set the play count of the sequence. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) for which to set the play count 
- **play_count**: play count 

:::

:::info uint32_t gdraw_command_sequence_get_total_duration(GDrawCommandSequence *sequence)

Get the total duration of the sequence. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from which to get the total duration 

##### Returns

total duration of the sequence in milliseconds 

:::

:::info uint32_t gdraw_command_sequence_get_num_frames(GDrawCommandSequence *sequence)

Get the number of frames in the sequence. 

##### Parameters

- **sequence**: [GDrawCommandSequence](/documentation/c/group___draw_command.md#typedef-gdrawcommandsequence) from which to get the number of frames 

##### Returns

number of frames in the sequence 

:::

:::info GDrawCommandList * gdraw_command_frame_get_command_list(GDrawCommandFrame *frame)

Get the command list of the frame. 

##### Parameters

- **frame**: [GDrawCommandFrame](/documentation/c/group___draw_command.md#typedef-gdrawcommandframe) from which to get the command list 

##### Returns

command list 

:::


## Enums

:::info GDrawCommandType

##### Values

- **GDrawCommandTypeInvalid**: Invalid draw command type. 
- **GDrawCommandTypePath**: Arbitrary path draw command type. 
- **GDrawCommandTypeCircle**: Circle draw command type. 
- **GDrawCommandTypePrecisePath**: Arbitrary path drawn with sub-pixel precision (1/8th precision) 

:::

## Typedefs

:::info typedef struct GDrawCommand GDrawCommand

Draw commands are the basic building block of the draw command system, encoding the type of command to draw, the stroke width and color, fill color, and points that define the path (or center of a circle. 

:::

:::info typedef struct GDrawCommandFrame GDrawCommandFrame

Draw command frames contain a list of commands to draw for that frame and a duration, indicating the length of time for which the frame should be drawn in an animation sequence. Frames form the building blocks of a [GDrawCommandSequence](), which consists of multiple frames. 

:::

:::info typedef struct GDrawCommandImage GDrawCommandImage

Draw command images contain a list of commands that can be drawn. An image can be loaded from PDC file data. 

:::

:::info typedef struct GDrawCommandList GDrawCommandList

Draw command lists contain a list of commands that can be iterated over and drawn all at once. 

:::

:::info typedef bool(* GDrawCommandListIteratorCb) (GDrawCommand *command, uint32_t index, void *context)

Callback for iterating over draw command list. 

##### Parameters

- **command**: current [GDrawCommand](/documentation/c/group___draw_command.md#typedef-gdrawcommand) in iteration 
- **index**: index of the current command in the list 
- **context**: context pointer for the iteration operation 

##### Returns

true if the iteration should continue after this command is processed 

:::

:::info typedef struct GDrawCommandSequence GDrawCommandSequence

Draw command sequences allow the animation of frames over time. Each sequence has a list of frames that can be accessed by the elapsed duration of the animation (not maintained internally) or by index. Sequences can be loaded from PDC file data. 

:::

