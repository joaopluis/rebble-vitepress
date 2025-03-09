# Vibes

The Vibes API provides calls that let you control Pebble’s vibration motor.

The vibration motor can be used as a visceral mechanism for giving immediate feedback to the user. You can use it to highlight important moments in games, or to draw the attention of the user. However, you should use the vibration feature sparingly, because sustained use will rapidly deplete Pebble’s battery, and vibrating Pebble too much and too often can become annoying for users. 

## Functions

:::info void vibes_cancel(void)

Cancel any in-flight vibe patterns; this is a no-op if there is no on-going vibe. 

:::

:::info void vibes_short_pulse(void)

Makes the watch emit one short vibration. 

:::

:::info void vibes_long_pulse(void)

Makes the watch emit one long vibration. 

:::

:::info void vibes_double_pulse(void)

Makes the watch emit two brief vibrations. 

:::

:::info void vibes_enqueue_custom_pattern(VibePattern pattern)

Makes the watch emit a ‘custom’ vibration pattern. 

##### Parameters

- **pattern**: An arbitrary vibration pattern 

:::


