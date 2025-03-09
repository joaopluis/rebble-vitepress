# Window

Windows are the top-level elements in the UI hierarchy and the basic building blocks for a Pebble UI. A single window is always displayed at a time on Pebble, with the exception of when animating from one window to the other, which, in that case, is managed by the window stack. You can stack windows on top of each other, but only the topmost window will be visible.

Users wearing a Pebble typically interact with the content and media displayed in a window, clicking and pressing buttons on the watch, depending on what they see and wish to respond to in a window.

Windows serve to display a hierarchy of layers on the screen and handle user input. When a window is visible, its root Layer (and all its child layers) are drawn onto the screen automatically.

You need a window, which always fills the entire screen, to display images, text, and graphics in your Pebble app. A layer by itself doesn’t display on Pebble; it must be in the current window’s layer hierarchy to be visible.

The Window Stack serves as the global manager of what window is presented and makes sure that input events are forwarded to the topmost window.

Refer to the  (chapter "Window") for a conceptual overview of Window, the Window Stack and relevant code examples. 

## Groups

- [ActionMenu](./action_menu)
- [NumberWindow](./number_window)

