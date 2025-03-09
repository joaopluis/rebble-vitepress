# PBI File Format

PBIs are uncompressed bitmap images with support for color-mapping palettes. PBIs store images either as raw image pixels (1-bit black and white, or 8-bit ARGB) or as palette-based images with 1, 2, or 4 bits per pixel. For palette-based images the pixel data represents the index into the palette, such that each pixel only needs to be large enough to represent the palette size, so 

* `1-bit` supports up to 2 colors, 
* `2-bit` supports up to 4 colors, 
* `4-bit` supports up to 16 colors.


The metadata describes how long each row of pixels is in the buffer (the stride). The following restrictions on stride are in place for different formats:



* GBitmapFormat1Bit: Each row must be a multiple of 32 pixels (4 bytes). Using the `bounds` field, the area that is actually relevant can be specified. For example, when the image is 29 by 5 pixels (width by height) and the first bit of image data is the pixel at (0, 0), then the bounds.size would be `[GSize(29, 5)](/documentation/c/group___graphics_types.md#define-gsize)` and bounds.origin would be `[GPoint(0, 0)](/documentation/c/group___graphics_types.md#define-gpoint)`. ![gbitmap.png](/documentation/c//gbitmap.png)
 In the illustration each pixel is a representated as a square. The white squares are the bits that are used, the gray squares are the padding bits, because each row of image data has to be a multiple of 4 bytes (32 bits). The numbers in the column in the left are the offsets (in bytes) from the `*addr` field of the GBitmap. Each pixel in a bitmap is represented by 1 bit. If a bit is set (`1` or `true`), it will result in a white pixel, and vice versa, if a bit is cleared (`0` or `false`), it will result in a black pixel. ![pixel_bit_values.png](/documentation/c//pixel_bit_values.png)
* GBitmapFormat8Bit: Each pixel in the bitmap is represented by 1 byte. The color value of that byte correspends to a GColor.argb value. There is no restriction on row_size_bytes / stride.
* GBitmapFormat1BitPalette, GBitmapFormat2BitPalette, GBitmapFormat4BitPalette: Each pixel in the bitmap is represented by the number of bits the format specifies. Pixels must be packed. For example, in GBitmapFormat2BitPalette, each pixel uses 2 bits. This means 4 pixels / byte. Rows need to be byte-aligned, meaning that there can be up to 3 unused pixels at the end of each line. If the image is 5 pixels wide and 4 pixels tall, row_size_bytes = 2, and each row in the bitmap must take 2 bytes, so the bitmap data is 8 bytes in total.

Palettized bitmaps also need to have a palette. The palette must be of the correct size, which is specified by the format. For example, GBitmapFormat4BitPalette uses 4 bits per pixel, meaning that there must be 2^4 = 16 colors in the palette.

The Basalt Platform provides for 2-bits per color channel, so images are optimized by the SDK tooling when loaded as a resource-type "pbi" to the Pebble's 64-colors with 4 levels of transparency. This optimization also handles mapping unsupported colors to the nearest supported color, and reducing the pixel depth to the number of bits required to support the optimized number of colors.

