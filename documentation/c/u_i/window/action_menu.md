# ActionMenu

## Functions

:::info char * action_menu_item_get_label(const ActionMenuItem *item)

Getter for the label of a given ActionMenuItem. 

##### Parameters

- **item**: the ActionMenuItem of interest 

##### Returns

a pointer to the string label. NULL if invalid. 

:::

:::info void * action_menu_item_get_action_data(const ActionMenuItem *item)

Getter for the action_data pointer of a given ActionMenuitem. 

##### Parameters

- **item**: the ActionMenuItem of interest 

##### Returns

a pointer to the data. NULL if invalid. 

:::

:::info ActionMenuLevel * action_menu_level_create(uint16_t max_items)

Create a new action menu level with storage allocated for a given number of items. 

##### Parameters

- **max_items**: the max number of items that will be displayed at that level 

:::

:::info void action_menu_level_set_display_mode(ActionMenuLevel *level, ActionMenuLevelDisplayMode display_mode)

Set the action menu display mode. 

##### Parameters

- **level**: The ActionMenuLevel whose display mode you want to change 
- **display_mode**: The display mode for the action menu (3 vs. 1 item per row) 

:::

:::info ActionMenuItem * action_menu_level_add_action(ActionMenuLevel *level, const char *label, ActionMenuPerformActionCb cb, void *action_data)

Add an action to an ActionLevel. 

##### Parameters

- **level**: the level to add the action to 
- **label**: the text to display for the action in the menu 
- **cb**: the callback that will be triggered when this action is actuated 
- **action_data**: data to pass to the callback for this action 

##### Returns

a reference to the new ActionMenuItem on success, NULL if the level is full 

:::

:::info ActionMenuItem * action_menu_level_add_child(ActionMenuLevel *level, ActionMenuLevel *child, const char *label)

Add a child to this ActionMenuLevel. 

##### Parameters

- **level**: the parent level 
- **child**: the child level 
- **label**: the text to display in the action menu for this level 

##### Returns

a reference to the new ActionMenuItem on success, NULL if the level is full 

:::

:::info void action_menu_hierarchy_destroy(const ActionMenuLevel *root, ActionMenuEachItemCb each_cb, void *context)

Destroy a hierarchy of ActionMenuLevels. 

##### Parameters

- **root**: the root level in the hierarchy 
- **each_cb**: a callback to call on every ActionMenuItem in every level 
- **context**: a context pointer to pass to each_cb on invocation 

:::

:::info void * action_menu_get_context(ActionMenu *action_menu)

Get the context pointer this ActionMenu was created with. 

##### Parameters

- **action_menu**: A pointer to an ActionMenu 

##### Returns

the context pointer initially provided in the [ActionMenuConfig](/documentation/c/struct_action_menu_config.md). NULL if none exists. 

:::

:::info ActionMenuLevel * action_menu_get_root_level(ActionMenu *action_menu)

Get the root level of an ActionMenu. 

##### Parameters

- **action_menu**: the ActionMenu you want to know about 

##### Returns

a pointer to the root ActionMenuLevel for the given ActionMenu, NULL if invalid 

:::

:::info ActionMenu * action_menu_open(ActionMenuConfig *config)

Open a new ActionMenu. The ActionMenu acts much like a window. It fills the whole screen and handles clicks. 

##### Parameters

- **config**: the configuration info for this new ActionMenu 

##### Returns

the new ActionMenu 

:::

:::info void action_menu_freeze(ActionMenu *action_menu)

Freeze the ActionMenu. The ActionMenu will no longer respond to user input. 

##### Parameters

- **action_menu**: the ActionMenu 

:::

:::info void action_menu_unfreeze(ActionMenu *action_menu)

Unfreeze the ActionMenu previously frozen with [action_menu_freeze](/documentation/c/group___action_menu.md#function-action-menu-freeze). 

##### Parameters

- **action_menu**: the ActionMenu to unfreeze 

:::

:::info void action_menu_set_result_window(ActionMenu *action_menu, Window *result_window)

Set the result window for an ActionMenu. The result window will be shown when the ActionMenu closes. 

##### Parameters

- **action_menu**: the ActionMenu 
- **result_window**: the window to insert, pass NULL to remove the current result window 

:::

:::info void action_menu_close(ActionMenu *action_menu, bool animated)

Close the ActionMenu, whether it is frozen or not. 

##### Parameters

- **action_menu**: the ActionMenu to close 
- **animated**: whether or not show a close animation 

:::


## Enums

:::info ActionMenuAlign

##### Values

- **ActionMenuAlignTop**: undefined
- **ActionMenuAlignCenter**: undefined

:::

:::info ActionMenuLevelDisplayMode

enum value that controls whether menu items are displayed in a grid (similarly to the emoji replies) or in a single column (reminiscent of [MenuLayer](/documentation/c/group___menu_layer.md)) 

##### Values

- **ActionMenuLevelDisplayModeWide**: Each item gets its own row. 
- **ActionMenuLevelDisplayModeThin**: Grid view: multiple items per row. 

:::

## Typedefs

:::info typedef struct ActionMenuItem ActionMenuItem

:::

:::info typedef struct ActionMenuLevel ActionMenuLevel

:::

:::info typedef struct ActionMenu ActionMenu

:::

:::info typedef void(* ActionMenuDidCloseCb) (ActionMenu *menu, const ActionMenuItem *performed_action, void *context)

Callback executed after the ActionMenu has closed, so memory may be freed. 

##### Parameters

- **root_level**: the root level passed to the ActionMenu 
- **performed_action**: the ActionMenuItem for the action that was performed, NULL if the ActionMenu is closing without an action being selected by the user 
- **context**: the context passed to the ActionMenu 

:::

:::info typedef void(* ActionMenuPerformActionCb) (ActionMenu *action_menu, const ActionMenuItem *action, void *context)

Callback executed when a given action is selected. 

##### Parameters

- **action_menu**: the action menu currently on screen 
- **action**: the action that was triggered 
- **context**: the context passed to the action menu 

:::

:::info typedef void(* ActionMenuEachItemCb) (const ActionMenuItem *item, void *context)

Callback invoked for each item in an action menu hierarchy. 

##### Parameters

- **item**: the current action menu item 
- **a**: caller-provided context callback 

:::

