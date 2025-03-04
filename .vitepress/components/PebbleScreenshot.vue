<script setup lang="ts">
import { withBase } from "vitepress";

defineProps<{
  wrapper: string;
  src: string;
  small?: boolean;
  center?: boolean;
}>()
</script>

<template>
<img :src="withBase(src)" :class="['pebble-screenshot', `pebble-screenshot--${wrapper}`, {'pebble-screenshot--small': small}, {'pebble-screenshot--center': center}]" />
</template>

<style scoped lang="scss">
.pebble-screenshot {
  background-repeat: no-repeat;
  display: inline-block;
  height: 407px;
  padding: 112px 49px 127px;
  text-align: left;
  width: 242px;
  background-size: contain;
}

.pebble-screenshot--steel-black,
.pebble-screenshot--steel-stainless {
  height: 424px;
  padding: 113px 50px 143px;
  width: 244px;
}

.pebble-screenshot--time-black,
.pebble-screenshot--time-white,
.pebble-screenshot--time-red {
  height: 350px;
  padding-top: 91px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 91px;
  width: 244px;
}

.pebble-screenshot--time-round-black-20,
.pebble-screenshot--time-round-silver-20 {
  height: 390px;
  padding-top: 110px;
  padding-left: 55px;
  padding-right: 54px;
  padding-bottom: 100px;
  width: 289px;
}

.pebble-screenshot--time-round-red-14,
.pebble-screenshot--time-round-rosegold-14,
.pebble-screenshot--time-round-silver-14 {
  height: 390px;
  padding-top: 107px;
  padding-left: 58px;
  padding-right: 56px;
  padding-bottom: 103px;
  width: 294px;
}

.pebble-screenshot--pebble2-black,
.pebble-screenshot--pebble2-black-lime,
.pebble-screenshot--pebble2-black-red,
.pebble-screenshot--pebble2-white,
.pebble-screenshot--pebble2-white-teal {
  height: 390px;
  padding-top: 103px;
  padding-left: 48px;
  padding-right: 86px;
  padding-bottom: 100px;
  width: 294px;
}

.pebble-screenshot--steel-black {
  background-image: url('/pebbles/steel_black.png');
}

.pebble-screenshot--steel-stainless {
  background-image: url('/pebbles/steel_stainless.png');
}

.pebble-screenshot--time-black {
  background-image: url('/pebbles/snowy-black.png');
}

.pebble-screenshot--time-red {
  background-image: url('/pebbles/snowy-red.png');
}

.pebble-screenshot--time-white {
  background-image: url('/pebbles/snowy-white.png');
}

.pebble-screenshot--red {
  background-image: url('/pebbles/red.png');
}

.pebble-screenshot--black {
  background-image: url('/pebbles/black.png');
}

.pebble-screenshot--orange {
  background-image: url('/pebbles/orange.png');
}

.pebble-screenshot--white {
  background-image: url('/pebbles/white.png');
}

.pebble-screenshot--grey {
  background-image: url('/pebbles/grey.png');
}

.pebble-screenshot--white-black {
  background-image: url('/pebbles/white_black.png');
}

.pebble-screenshot--time-round-black-20,
.pebble-screenshot--time-round-silver-20 {
  background-image: url('/pebbles/time-round-black-20.png');
}

.pebble-screenshot--time-round-red-14,
.pebble-screenshot--time-round-rosegold-14,
.pebble-screenshot--time-round-silver-14 {
  background-image: url('/pebbles/time-round-red-14.png');
}

.pebble-screenshot--pebble2-black {
  background-image: url('/pebbles/device_pebble2_black.png');
}

.pebble-screenshot--pebble2-black-lime {
  background-image: url('/pebbles/device_pebble2_blacklime.png');
}

.pebble-screenshot--pebble2-black-red {
  background-image: url('/pebbles/device_pebble2_blackred.png');
}

.pebble-screenshot--pebble2-white {
  background-image: url('/pebbles/device_pebble2_white.png');
}

.pebble-screenshot--pebble2-white-teal {
  background-image: url('/pebbles/device_pebble2_whiteteal.png');
}

.pebble-screenshot--strapless {
  background-position: 0 -34px;
  height: 339px;
  padding-bottom: 93px;
  padding-top: 78px;

  &.pebble-screenshot--steel-black,
  &.pebble-screenshot--steel-stainless {
    background-position: 0 -50px;
    height: 324px;
    padding-top: 63px;
  }
}

.pebble-screenshot--smaller {

  &.pebble-screenshot--steel-black,
  &.pebble-screenshot--steel-stainless {
    height: 212px;
    padding: 56px 25px 72px;
    width: 122px;
  }

  &.pebble-screenshot--time-black,
  &.pebble-screenshot--time-white,
  &.pebble-screenshot--time-red {
    height: 175px;
    padding-top: 45px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 45px;
    width: 122px;
  }

  &.pebble-screenshot--time-round-black-20,
  &.pebble-screenshot--time-round-red-14,
  &.pebble-screenshot--time-round-rosegold-14,
  &.pebble-screenshot--time-round-silver-14,
  &.pebble-screenshot--time-round-silver-20 {
    height: 175px;
    padding-top: 41px;
    padding-left: 17px;
    padding-right: 19px;
    padding-bottom: 42px;
    width: 128px;
  }
}

.pebble-screenshot--small {

  &.pebble-screenshot--steel-black,
  &.pebble-screenshot--steel-stainless {
    height: 318px;
    padding: 82px 38px 107px 37px;
    width: 183px;
  }

  &.pebble-screenshot--time-black,
  &.pebble-screenshot--time-white,
  &.pebble-screenshot--time-red {
    height: 263px;
    padding-top: 68px;
    padding-left: 37px;
    padding-right: 38px;
    padding-bottom: 68px;
    width: 183px;
  }

  &.pebble-screenshot--time-round-black-20,
  &.pebble-screenshot--time-round-red-14,
  &.pebble-screenshot--time-round-rosegold-14,
  &.pebble-screenshot--time-round-silver-14,
  &.pebble-screenshot--time-round-silver-20 {
    height: 263px;
    padding-top: 62px;
    padding-left: 26px;
    padding-right: 25px;
    padding-bottom: 64px;
    width: 188px;
  }
}

.pebble-screenshot--center {
  display: block;
  margin: 0 auto;
}

</style>
