# PropertyAnimation


### Animating a Layer's frame property

Currently there is only one specific type of property animation offered off-the-shelf, namely one to change the frame (property) of a layer (subject), see [property_animation_create_layer_frame()](/documentation/c/group___property_animation.md#function-property-animation-create-layer-frame).


### Implementing a custom PropertyAnimation

It is fairly simple to create your own variant of a PropertyAnimation.

Please refer to  (chapter "Property Animations") for a conceptual overview of the animation framework and make sure you understand the underlying [Animation](/documentation/c/group___animation.md), in case you are not familiar with it, before trying to implement a variation on PropertyAnimation.

To implement a custom property animation, use [property_animation_create()](/documentation/c/group___property_animation.md#function-property-animation-create) and provide a function pointers to the accessors (getter and setter) and setup, update and teardown callbacks in the implementation argument. Note that the type of property to animate with [PropertyAnimation](/documentation/c/group___property_animation.md) is limited to int16_t, [GPoint](/documentation/c/struct_g_point.md) or [GRect](/documentation/c/struct_g_rect.md).

For each of these types, there are implementations provided for the necessary `.update` handler of the animation: see [property_animation_update_int16()](/documentation/c/group___property_animation.md#function-property-animation-update-int16), [property_animation_update_gpoint()](/documentation/c/group___property_animation.md#function-property-animation-update-gpoint) and [property_animation_update_grect()](/documentation/c/group___property_animation.md#function-property-animation-update-grect). These update functions expect the `.accessors` to conform to the following interface: Any getter needs to have the following function signature: `__type__ getter(void *subject);` Any setter needs to have to following function signature: `void setter(void *subject,
__type__ value);` See [Int16Getter](/documentation/c/group___property_animation.md#typedef-int16getter), [Int16Setter](/documentation/c/group___property_animation.md#typedef-int16setter), [GPointGetter](/documentation/c/group___property_animation.md#typedef-gpointgetter), [GPointSetter](/documentation/c/group___property_animation.md#typedef-gpointsetter), [GRectGetter](/documentation/c/group___property_animation.md#typedef-grectgetter), [GRectSetter](/documentation/c/group___property_animation.md#typedef-grectsetter) for the typedefs that accompany the update fuctions.

```c

static const PropertyAnimationImplementation my_implementation = {
  .base = {
    // using the "stock" update callback:
    .update = (AnimationUpdateImplementation) property_animation_update_gpoint,
  },
  .accessors = {
    // my accessors that get/set a GPoint from/onto my subject:
    .setter = { .gpoint = my_layer_set_corner_point, },
    .getter = { .gpoint = (const GPointGetter) my_layer_get_corner_point, },
  },
};
static PropertyAnimation* s_my_animation_ptr = NULL;
static GPoint s_to_point = GPointZero;
...
// Use NULL as 'from' value, this will make the animation framework call the getter
// to get the current value of the property and use that as the 'from' value:
s_my_animation_ptr = property_animation_create(&my_implementation, my_layer, NULL, &s_to_point);
animation_schedule(property_animation_get_animation(s_my_animation_ptr));
```

## Functions

:::info PropertyAnimation * property_animation_create_layer_frame(struct Layer *layer, GRect *from_frame, GRect *to_frame)

Convenience function to create and initialize a property animation that animates the frame of a Layer. It sets up the PropertyAnimation to use [layer_set_frame()]() and [layer_get_frame()]() as accessors and uses the `layer` parameter as the subject for the animation. The same defaults are used as with [animation_create()](/documentation/c/group___animation.md#function-animation-create). 

##### Parameters

- **layer**: the layer that will be animated 
- **from_frame**: the frame that the layer should animate from 
- **to_frame**: the frame that the layer should animate to 

##### Returns

A handle to the property animation. `NULL` if animation could not be created 

:::

:::info PropertyAnimation * property_animation_create_bounds_origin(struct Layer *layer, GPoint *from, GPoint *to)

Convenience function to create and initialize a property animation that animates the bound's origin of a Layer. It sets up the PropertyAnimation to use [layer_set_bounds()]() and [layer_get_bounds()]() as accessors and uses the `layer` parameter as the subject for the animation. The same defaults are used as with [animation_create()](/documentation/c/group___animation.md#function-animation-create). 

##### Parameters

- **layer**: the layer that will be animated 
- **from_origin**: the origin that the bounds should animate from 
- **to_origin**: the origin that the layer should animate to 

##### Returns

A handle to the property animation. `NULL` if animation could not be created 

:::

:::info PropertyAnimation * property_animation_create(const PropertyAnimationImplementation *implementation, void *subject, void *from_value, void *to_value)

Creates a new PropertyAnimation on the heap and and initializes it with the specified values. The same defaults are used as with [animation_create()](/documentation/c/group___animation.md#function-animation-create). If the `from_value` or the `to_value` is `NULL`, the getter accessor will be called to get the current value of the property and be used instead. 

##### Parameters

- **implementation**: Pointer to the implementation of the animation. In most cases, it makes sense to pass in a `static const` struct pointer. 
- **subject**: Pointer to the "subject" being animated. This will be passed in when the getter/ setter accessors are called, see [PropertyAnimationAccessors](/documentation/c/struct_property_animation_accessors.md), [GPointSetter](/documentation/c/group___property_animation.md#typedef-gpointsetter), and friends. The value of this pointer will be copied into the `.subject` field of the PropertyAnimation struct. 
- **from_value**: Pointer to the value that the subject should animate from 
- **to_value**: Pointer to the value that the subject should animate to 

##### Returns

A handle to the property animation. `NULL` if animation could not be created 

:::

:::info void property_animation_destroy(PropertyAnimation *property_animation)

Destroy a property animation allocated by [property_animation_create()](/documentation/c/group___property_animation.md#function-property-animation-create) or relatives. 

##### Parameters

- **property_animation**: the return value from property_animation_create 

:::

:::info void property_animation_update_int16(PropertyAnimation *property_animation, const uint32_t distance_normalized)

Default update callback for a property animations to update a property of type int16_t. Assign this function to the `.base.update` callback field of your [PropertyAnimationImplementation](/documentation/c/struct_property_animation_implementation.md), in combination with a `.getter` and `.setter` accessors of types [Int16Getter](/documentation/c/group___property_animation.md#typedef-int16getter) and [Int16Setter](/documentation/c/group___property_animation.md#typedef-int16setter). The implementation of this function will calculate the next value of the animation and call the setter to set the new value upon the subject. 

##### Parameters

- **property_animation**: The property animation for which the update is requested. 
- **distance_normalized**: The current normalized distance. See [AnimationUpdateImplementation](/documentation/c/group___animation.md#typedef-animationupdateimplementation)

:::

:::info void property_animation_update_uint32(PropertyAnimation *property_animation, const uint32_t distance_normalized)

Default update callback for a property animations to update a property of type uint32_t. Assign this function to the `.base.update` callback field of your [PropertyAnimationImplementation](/documentation/c/struct_property_animation_implementation.md), in combination with a `.getter` and `.setter` accessors of types [UInt32Getter](/documentation/c/group___property_animation.md#typedef-uint32getter) and [UInt32Setter](/documentation/c/group___property_animation.md#typedef-uint32setter). The implementation of this function will calculate the next value of the animation and call the setter to set the new value upon the subject. 

##### Parameters

- **property_animation**: The property animation for which the update is requested. 
- **distance_normalized**: The current normalized distance. See [AnimationUpdateImplementation](/documentation/c/group___animation.md#typedef-animationupdateimplementation)

:::

:::info void property_animation_update_gpoint(PropertyAnimation *property_animation, const uint32_t distance_normalized)

Default update callback for a property animations to update a property of type [GPoint](/documentation/c/struct_g_point.md). Assign this function to the `.base.update` callback field of your [PropertyAnimationImplementation](/documentation/c/struct_property_animation_implementation.md), in combination with a `.getter` and `.setter` accessors of types [GPointGetter](/documentation/c/group___property_animation.md#typedef-gpointgetter) and [GPointSetter](/documentation/c/group___property_animation.md#typedef-gpointsetter). The implementation of this function will calculate the next point of the animation and call the setter to set the new point upon the subject. 

##### Parameters

- **property_animation**: The property animation for which the update is requested. 
- **distance_normalized**: The current normalized distance. See [AnimationUpdateImplementation](/documentation/c/group___animation.md#typedef-animationupdateimplementation)

:::

:::info void property_animation_update_grect(PropertyAnimation *property_animation, const uint32_t distance_normalized)

Default update callback for a property animations to update a property of type [GRect](/documentation/c/struct_g_rect.md). Assign this function to the `.base.update` callback field of your [PropertyAnimationImplementation](/documentation/c/struct_property_animation_implementation.md), in combination with a `.getter` and `.setter` accessors of types [GRectGetter](/documentation/c/group___property_animation.md#typedef-grectgetter) and [GRectSetter](/documentation/c/group___property_animation.md#typedef-grectsetter). The implementation of this function will calculate the next rectangle of the animation and call the setter to set the new rectangle upon the subject. 

##### Parameters

- **property_animation**: The property animation for which the update is requested. 
- **distance_normalized**: The current normalized distance. See [AnimationUpdateImplementation](/documentation/c/group___animation.md#typedef-animationupdateimplementation)

:::

:::info void property_animation_update_gcolor8(PropertyAnimation *property_animation, const uint32_t distance_normalized)

Default update callback for a property animations to update a property of type [GColor8]. Assign this function to the `.base.update` callback field of your [PropertyAnimationImplementation](/documentation/c/struct_property_animation_implementation.md), in combination with a `.getter` and `.setter` accessors of types [GColor8Getter](/documentation/c/group___property_animation.md#typedef-gcolor8getter) and [GColor8Setter](/documentation/c/group___property_animation.md#typedef-gcolor8setter). The implementation of this function will calculate the next rectangle of the animation and call the setter to set the new value upon the subject. 

##### Parameters

- **property_animation**: The property animation for which the update is requested. 
- **distance_normalized**: The current normalized distance. See [AnimationUpdateImplementation](/documentation/c/group___animation.md#typedef-animationupdateimplementation)

:::

:::info Animation * property_animation_get_animation(PropertyAnimation *property_animation)

Convenience function to retrieve an animation instance from a property animation instance. 

##### Parameters

- **property_animation**: The property animation 

##### Returns

The [Animation](/documentation/c/group___animation.md) within this PropertyAnimation 

:::

:::info bool property_animation_subject(PropertyAnimation *property_animation, void **subject, bool set)

Helper function used by the property_animation_get|set_subject macros. 

##### Parameters

- **property_animation**: Handle to the property animation 
- **subject**: The subject to get or set. 
- **set**: true to set new subject, false to retrieve existing value 

##### Returns

true if successful, false on failure (usually a bad animation_h) 

:::

:::info bool property_animation_from(PropertyAnimation *property_animation, void *from, size_t size, bool set)

Helper function used by the property_animation_get|set_from_.* macros. 

##### Parameters

- **property_animation**: Handle to the property animation 
- **from**: Pointer to the value 
- **size**: Size of the from value 
- **set**: true to set new value, false to retrieve existing one 

##### Returns

true if successful, false on failure (usually a bad animation_h) 

:::

:::info bool property_animation_to(PropertyAnimation *property_animation, void *to, size_t size, bool set)

Helper function used by the property_animation_get|set_to_.* macros. 

##### Parameters

- **property_animation**: handle to the property animation 
- **to**: Pointer to the value 
- **size**: Size of the to value 
- **set**: true to set new value, false to retrieve existing one 

##### Returns

true if successful, false on failure (usually a bad animation_h) 

:::


## Typedefs

:::info typedef struct PropertyAnimationAccessors PropertyAnimationAccessors

Data structure containing the setter and getter function pointers that the property animation should use. The specified setter function will be used by the animation's update callback.    Based on the type of the property (int16_t, [GPoint](/documentation/c/struct_g_point.md) or [GRect](/documentation/c/struct_g_rect.md)), the accompanying update callback should be used, see [property_animation_update_int16()](), [property_animation_update_gpoint()]() and [property_animation_update_grect()]().    The getter function is used when the animation is initialized, to assign the current value of the subject's property as "from" or "to" value, see [property_animation_create()](). 

:::

:::info typedef struct PropertyAnimationImplementation PropertyAnimationImplementation

Data structure containing a collection of function pointers that form the implementation of the property animation. See the code example at the top ([PropertyAnimation](/documentation/c/group___property_animation.md)). 

:::

:::info typedef struct PropertyAnimation PropertyAnimation

:::

:::info typedef GPoint GPointReturn

Work-around for function pointer return type [GPoint](/documentation/c/struct_g_point.md) to avoid tripping the pre-processor to use the equally named [GPoint](/documentation/c/struct_g_point.md) define. 

:::

:::info typedef GRect GRectReturn

Work-around for function pointer return type [GRect](/documentation/c/struct_g_rect.md) to avoid tripping the pre-processor to use the equally named [GRect](/documentation/c/struct_g_rect.md) define. 

:::

:::info typedef void(* Int16Setter) (void *subject, int16_t int16)

Function signature of a setter function to set a property of type int16_t onto the subject. 

:::

:::info typedef int16_t(* Int16Getter) (void *subject)

Function signature of a getter function to get the current property of type int16_t of the subject. 

:::

:::info typedef void(* UInt32Setter) (void *subject, uint32_t uint32)

Function signature of a setter function to set a property of type uint32_t onto the subject. 

:::

:::info typedef uint32_t(* UInt32Getter) (void *subject)

Function signature of a getter function to get the current property of type uint32_t of the subject. 

:::

:::info typedef void(* GPointSetter) (void *subject, GPoint gpoint)

Function signature of a setter function to set a property of type [GPoint](/documentation/c/struct_g_point.md) onto the subject. 

:::

:::info typedef GPointReturn(* GPointGetter) (void *subject)

Function signature of a getter function to get the current property of type [GPoint](/documentation/c/struct_g_point.md) of the subject. 

:::

:::info typedef void(* GRectSetter) (void *subject, GRect grect)

Function signature of a setter function to set a property of type [GRect](/documentation/c/struct_g_rect.md) onto the subject. 

:::

:::info typedef GRectReturn(* GRectGetter) (void *subject)

Function signature of a getter function to get the current property of type [GRect](/documentation/c/struct_g_rect.md) of the subject. 

:::

:::info typedef void(* GColor8Setter) (void *subject, GColor8 gcolor)

Function signature of a setter function to set a property of type [GColor8] onto the subject. 

:::

:::info typedef GColor8(* GColor8Getter) (void *subject)

Function signature of a getter function to get the current property of type [GColor8] of the subject. 

:::

