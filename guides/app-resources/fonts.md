---
description: |
  How to use built-in system fonts, or add your own font resources to a project.
order: 3
---

# Fonts

<SdkToggle />

## Using Fonts

Text drawn in a Pebble app can be drawn using a variety of built-in fonts or a
custom font specified as a project resource.

Custom font resources must be in the `.ttf` (TrueType font) format. When the app
is built, the font file is processed by the SDK according to the `compatibility`
(See [*Font Compatibility*](#font-compatibility)) and `characterRegex`
fields (see [*Choosing Font Characters*](#choosing-font-characters)), the latter
of which is a standard Python regex describing the character set of the
resulting font.


## System Fonts

All of the built-in system fonts are available to use with
``fonts_get_system_font()``. See {% guide_link app-resources/system-fonts %} for
a complete list with sample images. Examples of using a built-in system font in
code are [shown below](#using-a-system-font).


### Limitations

There are limitations to the Bitham, Roboto, Droid and LECO fonts, owing to the
memory space available on Pebble, which only contain a subset of the default
character set.

* Roboto 49 Bold Subset - contains digits and a colon.
* Bitham 34/42 Medium Numbers - contain digits and a colon.
* Bitham 18/34 Light Subset - only contains a few characters and is not suitable
  for displaying general text.
* LECO Number sets - suitable for number-only usage.


## Using a System Font

Using a system font is the easiest choice when displaying simple text. For more
advanced cases, a custom font may be advantageous. A system font can be obtained
at any time, and the developer is not responsible for destroying it when they
are done with it. Fonts can be used in two modes:

```c
// Use a system font in a TextLayer
text_layer_set_font(s_text_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24));
```

```c
// Use a system font when drawing text manually
graphics_draw_text(ctx, text, fonts_get_system_font(FONT_KEY_GOTHIC_24), bounds,
                     GTextOverflowModeWordWrap, GTextAlignmentCenter, NULL);
```


## Adding a Custom Font

<SdkPlatform>
<template #local>

After placing the font file in the project's `resources` directory, the custom
font can be added to a project as `font` `type` item in the `media` array in
`package.json`. The `name` field's contents will be made available at compile
time with `RESOURCE_ID_` at the front, and must end with the desired font size.
For example:

```json
"resources": {
  "media": [
    {
      "type": "font",
      "name": "EXAMPLE_FONT_20",
      "file": "example_font.ttf"
    }
  ]
}
```

</template>
<template #cloudpebble>

To add a custom font file to your project, click 'Add New' in the Resources
section of the sidebar. Set the 'Resource Type' to 'TrueType font', and upload
the file using the 'Choose file' button. Choose an 'Identifier', which will be
made available at compile time with `RESOURCE_ID_` at the front. This must end
with the desired font size ("EXAMPLE_FONT_20", for example).

Configure the other options as appropriate, then hit 'Save' to save the
resource.

</template>
</SdkPlatform>

:::info
The maximum recommended font size is 48.
:::

## Using a Custom Font

Unlike a system font, a custom font must be loaded and unloaded by the
developer. Once this has been done, the font can easily be used in a similar
manner.

When the app initializes, load the font from resources using the generated
`RESOURCE_ID`:

```c
// Declare a file-scope variable
static GFont s_font;
```

```c
// Load the custom font
s_font = fonts_load_custom_font(
                          resource_get_handle(RESOURCE_ID_EXAMPLE_FONT_20));
```

The font can now be used in two modes - with a ``TextLayer``, or when drawing
text manually in a ``LayerUpdateProc``:

```c
// Use a custom font in a TextLayer
text_layer_set_font(s_text_layer, s_font);
```

```c
// Use a custom font when drawing text manually
graphics_draw_text(ctx, text, s_font, bounds, GTextOverflowModeWordWrap,
                                                  GTextAlignmentCenter, NULL);
```


## Font Compatibility

The font rendering process was improved in SDK 2.8. However, in some cases this
may cause the appearance of custom fonts to change slightly. To revert to the
old rendering process, add `"compatibility": "2.7"` to your font's object in the
`media` array (shown above) in `package.json` or set the 'Compatibility'
property in the font's resource view in CloudPebble to '2.7 and earlier'.


## Choosing Font Characters

By default, the maximum number of supported characters is generated for a font
resource. In most cases this will be far too many, and can bloat the size of the
app. To optimize the size of your font resources you can use a standard regular
expression (or 'regex') string to limit the number of characters to only those
you require.

The table below outlines some example regular expressions to use for limiting
font character sets in common watchapp scenarios:

| Expression | Result |
|------------|--------|
| `[ -~]` | ASCII characters only. |
| `[0-9]` | Numbers only. |
| `[0-9 ]` | Numbers and spaces only. |
| `[a-zA-Z]` | Letters only. |
| `[a-zA-Z ]` | Letters and spaces only. |
| `[0-9:APM ]` | Time strings only (e.g.: "12:45 AM"). |
| `[0-9:A-Za-z ]` | Time and date strings (e.g.: "12:43 AM Wednesday 3rd March 2015". |
| `[0-9:A-Za-z° ]` | Time, date, and degree symbol for temperature gauges. |
| `[0-9°CF ]` | Numbers and degree symbol with 'C' and 'F' for temperature gauges. |


<SdkPlatform>
<template #cloudpebble>

Open the font's configuration screen under 'Resources', then enter the desired
regex in the 'Characters' field. Check the preview of the new set of characters,
then choose 'Save'.

</template>
<template #local>

Add the `characterRegex` key to any font objects in `package.json`'s
`media` array.

```json
"media": [
  {
    "characterRegex": "[:0-9]",
    "type": "font",
    "name": "EXAMPLE_FONT",
    "file": "example_font.ttf"
  }
]
```

</template>
</SdkPlatform>

Check out
[regular-expressions.info](http://www.regular-expressions.info/tutorial.html)
to learn more about how to use regular expressions.
