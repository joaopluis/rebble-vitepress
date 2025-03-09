# NumberWindow

![number_window.png](/documentation/c//number_window.png)

## Functions

:::info NumberWindow * number_window_create(const char *label, NumberWindowCallbacks callbacks, void *callback_context)

Creates a new NumberWindow on the heap and initalizes it with the default values. 

##### Parameters

- **label**: The title or prompt to display in the NumberWindow. Must be long-lived and cannot be stack-allocated. 
- **callbacks**: The callbacks 
- **callback_context**: Pointer to application specific data that is passed 

##### Returns

A pointer to the NumberWindow. `NULL` if the NumberWindow could not be created 

:::

:::info void number_window_destroy(NumberWindow *number_window)

Destroys a NumberWindow previously created by number_window_create. 

:::

:::info void number_window_set_label(NumberWindow *numberwindow, const char *label)

Sets the text of the title or prompt label. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to set the label text 
- **label**: The new label text. Must be long-lived and cannot be stack-allocated. 

:::

:::info void number_window_set_max(NumberWindow *numberwindow, int32_t max)

Sets the maximum value this field can hold. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to set the maximum value 
- **max**: The maximum value 

:::

:::info void number_window_set_min(NumberWindow *numberwindow, int32_t min)

Sets the minimum value this field can hold. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to set the minimum value 
- **min**: The minimum value 

:::

:::info void number_window_set_value(NumberWindow *numberwindow, int32_t value)

Sets the current value of the field. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to set the current value 
- **value**: The new current value 

:::

:::info void number_window_set_step_size(NumberWindow *numberwindow, int32_t step)

Sets the amount by which to increment/decrement by on a button click. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to set the step increment 
- **step**: The new step increment 

:::

:::info int32_t number_window_get_value(const NumberWindow *numberwindow)

Gets the current value. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to get the current value 

##### Returns

The current value 

:::

:::info Window * number_window_get_window(NumberWindow *numberwindow)

Gets the "root" Window of the number window. 

##### Parameters

- **numberwindow**: Pointer to the NumberWindow for which to get the "root" Window 

##### Returns

The "root" Window of the number window. 

:::


## Typedefs

:::info typedef struct NumberWindow NumberWindow

:::

:::info typedef void(* NumberWindowCallback) (struct NumberWindow *number_window, void *context)

Function signature for NumberWindow callbacks. 

:::

