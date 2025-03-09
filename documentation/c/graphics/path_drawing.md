# Drawing Paths

Code example:

```c

static GPath *s_my_path_ptr = NULL;

static const GPathInfo BOLT_PATH_INFO = {
  .num_points = 6,
  .points = (GPoint []) {{21, 0}, {14, 26}, {28, 26}, {7, 60}, {14, 34}, {0, 34}}
};

// .update_proc of my_layer:
void my_layer_update_proc(Layer *my_layer, GContext* ctx) {
  // Fill the path:
  graphics_context_set_fill_color(ctx, GColorWhite);
  gpath_draw_filled(ctx, s_my_path_ptr);
  // Stroke the path:
  graphics_context_set_stroke_color(ctx, GColorBlack);
  gpath_draw_outline(ctx, s_my_path_ptr);
}

void setup_my_path(void) {
  s_my_path_ptr = gpath_create(&BOLT_PATH_INFO);
  // Rotate 15 degrees:
  gpath_rotate_to(s_my_path_ptr, TRIG_MAX_ANGLE / 360 * 15);
  // Translate by (5, 5):
  gpath_move_to(s_my_path_ptr, GPoint(5, 5));
}

// For brevity, the setup of my_layer is not written out...
```

## Functions

:::info GPath * gpath_create(const GPathInfo *init)

Creates a new [GPath](/documentation/c/struct_g_path.md) on the heap based on a series of points described by a [GPathInfo](/documentation/c/struct_g_path_info.md). 

:::

:::info void gpath_destroy(GPath *gpath)

Free a dynamically allocated gpath created with [gpath_create()](/documentation/c/group___path_drawing.md#function-gpath-create)

:::

:::info void gpath_draw_filled(GContext *ctx, GPath *path)

Draws the fill of a path into a graphics context, using the current fill color, relative to the drawing area as set up by the layering system. 

##### Parameters

- **ctx**: The graphics context to draw into 
- **path**: The path to fill 

:::

:::info void gpath_draw_outline(GContext *ctx, GPath *path)

Draws the outline of a path into a graphics context, using the current stroke color and width, relative to the drawing area as set up by the layering system. The first and last points in the path do have a line between them. 

##### Parameters

- **ctx**: The graphics context to draw into 
- **path**: The path to draw 

:::

:::info void gpath_rotate_to(GPath *path, int32_t angle)

Sets the absolute rotation of the path. The current rotation will be replaced by the specified angle. 

##### Parameters

- **path**: The path onto which to set the rotation 
- **angle**: The absolute angle of the rotation. The angle is represented in the same way that is used with [sin_lookup()](/documentation/c/group___math.md#function-sin-lookup). See [TRIG_MAX_ANGLE](/documentation/c/group___math.md#define-trig-max-angle) for more information. 

:::

:::info void gpath_move_to(GPath *path, GPoint point)

Sets the absolute offset of the path. The current translation will be replaced by the specified offset. 

##### Parameters

- **path**: The path onto which to set the translation 
- **point**: The point which is used as the vector for the translation. 

:::

:::info void gpath_draw_outline_open(GContext *ctx, GPath *path)

Draws an open outline of a path into a graphics context, using the current stroke color and width, relative to the drawing area as set up by the layering system. The first and last points in the path do not have a line between them. 

##### Parameters

- **ctx**: The graphics context to draw into 
- **path**: The path to draw 

:::


## Typedefs

:::info typedef struct GPathInfo GPathInfo

Data structure describing a naked path. 

:::

:::info typedef struct GPath GPath

Data structure describing a path, plus its rotation and translation. 

:::

