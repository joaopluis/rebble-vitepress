---
description: |
  How to include different resources for different platforms, as well as how to
  include a resource only on a particular platform.
order: 6
---

# Platform-specific Resources

You may want to use different versions of a resource on one or more of the
Aplite, Basalt or Chalk platforms. To enable this, it is now possible to
"tag" resource files with the attributes that make them relevant to a given
platform.

The follows tags exist for each platform:

| Aplite  | Basalt     | Chalk      | Diorite | Emery      |
|---------|------------|------------|---------|------------|
| rect    | rect       | round      | rect    | rect       |
| bw      | color      | color      | bw      | color      |
| aplite  | basalt     | chalk      | diroite | emery      |
| 144w    | 144w       | 180w       | 144w    | 220w       |
| 168h    | 168h       | 180h       | 168h    | 228h       |
| compass | compass    | compass    |         | compass    |
|         | mic        | mic        | mic     | mic        |
|         | strap      | strap      | strap   | strap      |
|         | strappower | strappower |         | strappower |
|         | health     | health     | health  | health     |


To tag a resource, add the tags after the file's using tildes (`~`) — for
instance, `example-image~color.png` to use the resource on only color platforms,
or `example-image~color~round.png` to use the resource on only platforms with
round, color displays. All tags must match for the file to be used. If no file
matches for a platform, a compilation error will occur.

If the correct file for a platform is ambiguous, an error will occur at
compile time. You cannot, for instance, have both `example~color.png` and
`example~round.png`, because it is unclear which image to use when building
for Chalk. Instead, use `example~color~rect.png` and `example~round.png`. If
multiple images could match, the one with the most tags wins.

We recommend avoiding the platform specific tags (aplite, basalt etc). When we
release new platforms in the future, you will need to create new files for that
platform. However, if you use the descriptive tags we will automatically use
them as appropriate. It is also worth noting that the platform tags are _not_
special: if you have `example~basalt.png` and `example~rect.png`, that is
ambiguous (they both match Basalt) and will cause a compilation error.

An example file structure is shown below.

```text
my-project/
  resources/
    images/
      example-image~bw.png
      example-image~color~rect.png
      example-image~color~round.png
  src/
    main.c
  package.json
  wscript
```

This resource will appear in `package.json` as shown below.

```json
"resources": {
  "media": [
    {
      "type": "bitmap",
      "name": "EXAMPLE_IMAGE",
      "file": "images/example-image.png"
    }
  ]
}
```

**Single-platform Resources**

If you want to only include a resource on a **specific** platform, you can add a
`targetPlatforms` field to the resource's entry in the `media` array in
`package.json`. For example, the resource shown below will only be included for
the Basalt build.

```json
"resources": {
  "media": [
    {
      "type": "bitmap",
      "name": "BACKGROUND_IMAGE",
      "file": "images/background.png",
      "targetPlatforms": [
        "basalt"
      ]
    }
  ]
}
```
