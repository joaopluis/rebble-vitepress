# Window Stack

In Pebble OS, the window stack serves as the global manager of what window is presented, ensuring that input events are forwarded to the topmost window. The navigation model of Pebble centers on the concept of a vertical “stack” of windows, similar to mobile app interactions.

In working with the Window Stack API, the basic operations include push and pop. When an app wants to display a new window, it pushes a new window onto the stack. This appears like a window sliding in from the right. As an app is closed, the window is popped off the stack and disappears.

For more complicated operations, involving multiple windows, you can determine which windows reside on the stack, using [window_stack_contains_window()](/documentation/c/group___window_stack.md#function-window-stack-contains-window) and remove any specific window, using [window_stack_remove()](/documentation/c/group___window_stack.md#function-window-stack-remove).

Refer to the  (chapter "Window Stack") for a conceptual overview of the window stack and relevant code examples.

Also see the [WindowHandlers](/documentation/c/struct_window_handlers.md) of a [Window](/documentation/c/group___window.md) for the callbacks that can be added to a window in order to act upon window stack transitions. 

## Functions

:::info void window_stack_push(Window *window, bool animated)

Pushes the given window on the window navigation stack, on top of the current topmost window of the app. 

##### Parameters

- **window**: The window to push on top 
- **animated**: Pass in `true` to animate the push using a sliding animation, or `false` to skip the animation. 

:::

:::info Window * window_stack_pop(bool animated)

Pops the topmost window on the navigation stack. 

##### Parameters

- **animated**: See [window_stack_remove()](/documentation/c/group___window_stack.md#function-window-stack-remove)

##### Returns

The window that is popped, or NULL if there are no windows to pop. 

:::

:::info void window_stack_pop_all(const bool animated)

Pops all windows. See [window_stack_remove()]() for a description of the `animated` parameter and notes. 

:::

:::info bool window_stack_remove(Window *window, bool animated)

Removes a given window from the window stack that belongs to the app task. 

##### Parameters

- **window**: The window to remove. If the window is NULL or if it is not on the stack, this function is a no-op. 
- **animated**: Pass in `true` to animate the removal of the window using a side-to-side sliding animation to reveal the next window. This is only used in case the window happens to be on top of the window stack (thus visible). 

##### Returns

True if window was successfully removed, false otherwise. 

:::

:::info Window * window_stack_get_top_window(void)

Gets the topmost window on the stack that belongs to the app. 

##### Returns

The topmost window on the stack that belongs to the app or NULL if no app window could be found. 

:::

:::info bool window_stack_contains_window(Window *window)

Checks if the window is on the window stack. 

##### Parameters

- **window**: The window to look for on the window stack 

##### Returns

true if the window is currently on the window stack. 

:::


