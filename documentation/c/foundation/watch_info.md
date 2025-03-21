# WatchInfo

Provides information about the watch itself.

This API provides access to information such as the watch model, watch color and watch firmware version. 

## Functions

:::info WatchInfoModel watch_info_get_model(void)

Provides the model of the watch. 

##### Returns

`[WatchInfoModel](/documentation/c/group___watch_info.md#enum-watchinfomodel)` representing the model of the watch. 

:::

:::info WatchInfoVersion watch_info_get_firmware_version(void)

Provides the version of the firmware running on the watch. 

##### Returns

`[WatchInfoVersion](/documentation/c/struct_watch_info_version.md)` representing the version of the firmware running on the watch. 

:::

:::info WatchInfoColor watch_info_get_color(void)

:::


## Enums

:::info WatchInfoModel

The different watch models. 

##### Values

- **WATCH_INFO_MODEL_UNKNOWN**: Unknown model. 
- **WATCH_INFO_MODEL_PEBBLE_ORIGINAL**: Original Pebble. 
- **WATCH_INFO_MODEL_PEBBLE_STEEL**: Pebble Steel. 
- **WATCH_INFO_MODEL_PEBBLE_TIME**: Pebble Time. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_STEEL**: Pebble Time Steel. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_ROUND_14**: Pebble Time Round, 14mm lug size. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_ROUND_20**: Pebble Time Round, 20mm lug size. 
- **WATCH_INFO_MODEL_PEBBLE_2_HR**: Pebble 2 HR. 
- **WATCH_INFO_MODEL_PEBBLE_2_SE**: Pebble 2 SE. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_2**: Pebble Time 2. 
- **WATCH_INFO_MODEL__MAX**: undefined

:::

:::info WatchInfoColor

The different watch colors. 

##### Values

- **WATCH_INFO_COLOR_UNKNOWN**: Unknown color. 
- **WATCH_INFO_COLOR_BLACK**: Black. 
- **WATCH_INFO_COLOR_WHITE**: White. 
- **WATCH_INFO_COLOR_RED**: Red. 
- **WATCH_INFO_COLOR_ORANGE**: Orange. 
- **WATCH_INFO_COLOR_GRAY**: Gray. 
- **WATCH_INFO_COLOR_STAINLESS_STEEL**: Stainless Steel. 
- **WATCH_INFO_COLOR_MATTE_BLACK**: Matte Black. 
- **WATCH_INFO_COLOR_BLUE**: Blue. 
- **WATCH_INFO_COLOR_GREEN**: Green. 
- **WATCH_INFO_COLOR_PINK**: Pink. 
- **WATCH_INFO_COLOR_TIME_WHITE**: Time White. 
- **WATCH_INFO_COLOR_TIME_BLACK**: Time Black. 
- **WATCH_INFO_COLOR_TIME_RED**: Time Red. 
- **WATCH_INFO_COLOR_TIME_STEEL_SILVER**: Time Steel Silver. 
- **WATCH_INFO_COLOR_TIME_STEEL_BLACK**: Time Steel Black. 
- **WATCH_INFO_COLOR_TIME_STEEL_GOLD**: Time Steel Gold. 
- **WATCH_INFO_COLOR_TIME_ROUND_SILVER_14**: Time Round 14mm lug size, Silver. 
- **WATCH_INFO_COLOR_TIME_ROUND_BLACK_14**: Time Round 14mm lug size, Black. 
- **WATCH_INFO_COLOR_TIME_ROUND_SILVER_20**: Time Round 20mm lug size, Silver. 
- **WATCH_INFO_COLOR_TIME_ROUND_BLACK_20**: Time Round 20mm lug size, Black. 
- **WATCH_INFO_COLOR_TIME_ROUND_ROSE_GOLD_14**: Time Round 14mm lug size, Rose Gold. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_BLACK**: Pebble 2 HR, Black / Charcoal. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_LIME**: Pebble 2 HR, Charcoal / Sorbet Green. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_FLAME**: Pebble 2 HR, Charcoal / Red. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_WHITE**: Pebble 2 HR, White / Gray. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_AQUA**: Pebble 2 HR, White / Turquoise. 
- **WATCH_INFO_COLOR_PEBBLE_2_SE_BLACK**: Pebble 2 SE, Black / Charcoal. 
- **WATCH_INFO_COLOR_PEBBLE_2_SE_WHITE**: Pebble 2 SE, White / Gray. 
- **WATCH_INFO_COLOR_PEBBLE_TIME_2_BLACK**: Pebble Time 2, Black. 
- **WATCH_INFO_COLOR_PEBBLE_TIME_2_SILVER**: Pebble Time 2, Silver. 
- **WATCH_INFO_COLOR_PEBBLE_TIME_2_GOLD**: Pebble Time 2, Gold. 
- **WATCH_INFO_COLOR__MAX**: undefined

:::

:::info WatchInfoModel

The different watch models. 

##### Values

- **WATCH_INFO_MODEL_UNKNOWN**: Unknown model. 
- **WATCH_INFO_MODEL_PEBBLE_ORIGINAL**: Original Pebble. 
- **WATCH_INFO_MODEL_PEBBLE_STEEL**: Pebble Steel. 
- **WATCH_INFO_MODEL_PEBBLE_TIME**: Pebble Time. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_STEEL**: Pebble Time Steel. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_ROUND_14**: Pebble Time Round, 14mm lug size. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_ROUND_20**: Pebble Time Round, 20mm lug size. 
- **WATCH_INFO_MODEL_PEBBLE_2_HR**: Pebble 2 HR. 
- **WATCH_INFO_MODEL_PEBBLE_2_SE**: Pebble 2 SE. 
- **WATCH_INFO_MODEL_PEBBLE_TIME_2**: Pebble Time 2. 
- **WATCH_INFO_MODEL__MAX**: undefined

:::

:::info WatchInfoColor

The different watch colors. 

##### Values

- **WATCH_INFO_COLOR_UNKNOWN**: Unknown color. 
- **WATCH_INFO_COLOR_BLACK**: Black. 
- **WATCH_INFO_COLOR_WHITE**: White. 
- **WATCH_INFO_COLOR_RED**: Red. 
- **WATCH_INFO_COLOR_ORANGE**: Orange. 
- **WATCH_INFO_COLOR_GRAY**: Gray. 
- **WATCH_INFO_COLOR_STAINLESS_STEEL**: Stainless Steel. 
- **WATCH_INFO_COLOR_MATTE_BLACK**: Matte Black. 
- **WATCH_INFO_COLOR_BLUE**: Blue. 
- **WATCH_INFO_COLOR_GREEN**: Green. 
- **WATCH_INFO_COLOR_PINK**: Pink. 
- **WATCH_INFO_COLOR_TIME_WHITE**: Time White. 
- **WATCH_INFO_COLOR_TIME_BLACK**: Time Black. 
- **WATCH_INFO_COLOR_TIME_RED**: Time Red. 
- **WATCH_INFO_COLOR_TIME_STEEL_SILVER**: Time Steel Silver. 
- **WATCH_INFO_COLOR_TIME_STEEL_BLACK**: Time Steel Black. 
- **WATCH_INFO_COLOR_TIME_STEEL_GOLD**: Time Steel Gold. 
- **WATCH_INFO_COLOR_TIME_ROUND_SILVER_14**: Time Round 14mm lug size, Silver. 
- **WATCH_INFO_COLOR_TIME_ROUND_BLACK_14**: Time Round 14mm lug size, Black. 
- **WATCH_INFO_COLOR_TIME_ROUND_SILVER_20**: Time Round 20mm lug size, Silver. 
- **WATCH_INFO_COLOR_TIME_ROUND_BLACK_20**: Time Round 20mm lug size, Black. 
- **WATCH_INFO_COLOR_TIME_ROUND_ROSE_GOLD_14**: Time Round 14mm lug size, Rose Gold. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_BLACK**: Pebble 2 HR, Black / Charcoal. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_LIME**: Pebble 2 HR, Charcoal / Sorbet Green. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_FLAME**: Pebble 2 HR, Charcoal / Red. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_WHITE**: Pebble 2 HR, White / Gray. 
- **WATCH_INFO_COLOR_PEBBLE_2_HR_AQUA**: Pebble 2 HR, White / Turquoise. 
- **WATCH_INFO_COLOR_PEBBLE_2_SE_BLACK**: Pebble 2 SE, Black / Charcoal. 
- **WATCH_INFO_COLOR_PEBBLE_2_SE_WHITE**: Pebble 2 SE, White / Gray. 
- **WATCH_INFO_COLOR_PEBBLE_TIME_2_BLACK**: Pebble Time 2, Black. 
- **WATCH_INFO_COLOR_PEBBLE_TIME_2_SILVER**: Pebble Time 2, Silver. 
- **WATCH_INFO_COLOR_PEBBLE_TIME_2_GOLD**: Pebble Time 2, Gold. 
- **WATCH_INFO_COLOR__MAX**: undefined

:::

