# Layers

Layers are objects that can be displayed on a Pebble watchapp window, enabling users to see visual objects, like text or images. Each layer stores the information about its state necessary to draw or redraw the object that it represents and uses graphics routines along with this state to draw itself when asked. Layers can be used to display various graphics.

Layers are the basic building blocks for your application UI. Layers can be nested inside each other. Every window has a root layer which is always the topmost layer. You provide a function that is called to draw the content of the layer when needed; or you can use standard layers that are provided by the system, such as text layer, image layer, menu layer, action bar layer, and so on.

The Pebble layer hierarchy is the list of things that need to be drawn to the screen. Multiple layers can be arranged into a hierarchy. This enables ordering (front to back), layout and hierarchy. Through relative positioning, visual objects that are grouped together by adding them into the same layer can be moved all at once. This means that the child layers will move accordingly. If a parent layer has clipping enabled, all the children will be clipped to the frame of the parent.

Pebble OS provides convenience layers with built-in logic for displaying different graphic components, like text and bitmap layers.

Refer to the  (chapter "Layers") for a conceptual overview of Layers and relevant code examples.

The Modules listed here contain what can be thought of conceptually as subclasses of Layer. The listed types can be safely type-casted to `Layer` (or `Layer *` in case of a pointer). The `layer_...` functions can then be used with the data structures of these subclasses. 

For example, the following is legal: ```c

TextLayer *text_layer;
...
layer_set_hidden((Layer *)text_layer, true);
```

## Groups

- [ActionBarLayer](./action_bar_layer)
- [BitmapLayer](./bitmap_layer)
- [MenuLayer](./menu_layer)
- [RotBitmapLayer](./rot_bitmap_layer)
- [ScrollLayer](./scroll_layer)
- [SimpleMenuLayer](./simple_menu_layer)
- [StatusBarLayer](./status_bar_layer)
- [TextLayer](./text_layer)

