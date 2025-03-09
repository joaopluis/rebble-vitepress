---
description: Information on the many kinds of files that can be used inside Pebble apps.
guide_group: app-resources
---

# App Resources

<SdkToggle />

The Pebble SDK allows apps to include extra files as app resources. These files
can include images, animated images, vector images, custom fonts, and raw data
files. These resources are stored in flash memory and loaded when required by
the SDK. Apps that use a large number of resources should consider only keeping
in memory those that are immediately required.

:::info
The maximum number of resources an app can include is **256**. In addition, the
maximum size of all resources bundled into a built app is **128 kB** on the
Aplite platform, and **256 kB** on the Basalt and Chalk platforms. These limits
include resources used by included Pebble Packages.
:::

<SdkPlatform>
<template #local>

App resources are included in a project by being listed in the `media` property
of `package.json`, and are converted into suitable firmware-compatible formats
at build time. Examples of this are shown in each type of resource's respective
guide.

</template>
<template #cloudpebble>

App resources are included in a project by clicking the 'Add New' button under
'Resources' and specifying the 'Resource Type' as appropriate. These are then
converted into suitable firmware-compatible formats at build time.

</template>
</SdkPlatform>
