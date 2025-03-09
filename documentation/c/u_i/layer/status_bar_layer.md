# StatusBarLayer

## Functions

:::info StatusBarLayer * status_bar_layer_create(void)

Creates a new StatusBarLayer on the heap and initializes it with the default values. 

##### Returns

A pointer to the StatusBarLayer, which will be allocated to the heap, `NULL` if the StatusBarLayer could not be created 

:::

:::info void status_bar_layer_destroy(StatusBarLayer *status_bar_layer)

Destroys a StatusBarLayer previously created by status_bar_layer_create. 

##### Parameters

- **status_bar_layer**: The StatusBarLayer to destroy 

:::

:::info Layer * status_bar_layer_get_layer(StatusBarLayer *status_bar_layer)

Gets the "root" Layer of the status bar, which is the parent for the sub- layers used for its implementation. 

##### Parameters

- **status_bar_layer**: Pointer to the StatusBarLayer for which to get the "root" Layer 

##### Returns

The "root" Layer of the status bar. 

:::

:::info GColor status_bar_layer_get_background_color(const StatusBarLayer *status_bar_layer)

Gets background color of StatusBarLayer. 

##### Parameters

- **status_bar_layer**: The StatusBarLayer of which to get the color 

##### Returns

GColor of background color property 

:::

:::info GColor status_bar_layer_get_foreground_color(const StatusBarLayer *status_bar_layer)

Gets foreground color of StatusBarLayer. 

##### Parameters

- **status_bar_layer**: The StatusBarLayer of which to get the color 

##### Returns

GColor of foreground color property 

:::

:::info void status_bar_layer_set_colors(StatusBarLayer *status_bar_layer, GColor background, GColor foreground)

Sets the background and foreground colors of StatusBarLayer. 

##### Parameters

- **status_bar_layer**: The StatusBarLayer of which to set the colors 
- **background**: The new GColor to set for background 
- **foreground**: The new GColor to set for text and other foreground elements 

:::

:::info void status_bar_layer_set_separator_mode(StatusBarLayer *status_bar_layer, StatusBarLayerSeparatorMode mode)

Sets the mode of the StatusBarLayer separator, to help divide it from content. 

##### Parameters

- **status_bar_layer**: The StatusBarLayer of which to set the separator mode 
- **mode**: Determines the separator mode 

:::


## Enums

:::info StatusBarLayerSeparatorMode

Values that are used to indicate the different status bar separator modes. 

##### Values

- **StatusBarLayerSeparatorModeNone**: The default mode. No separator will be shown. 
- **StatusBarLayerSeparatorModeDotted**: A dotted separator at the bottom of the status bar. 

:::

## Typedefs

:::info typedef struct StatusBarLayer StatusBarLayer

:::

