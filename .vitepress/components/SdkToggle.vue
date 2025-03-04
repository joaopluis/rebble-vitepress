<script setup>
import {VPButton} from "vitepress/theme";
import {store} from './store'
</script>

<template>
  <div class="info custom-block">
    <p v-if="store.sdkPlatform === 'local'">Showing instructions for the SDK. <a
        @click="store.sdkPlatform = 'cloudpebble'">Using CloudPebble?</a></p>
    <p v-else-if="store.sdkPlatform === 'cloudpebble'">Showing instructions for CloudPebble. <a
        @click="store.sdkPlatform = 'local'">Using the SDK?</a></p>
    <template v-else>
      <p>This page contains some instructions that are different if you're using CloudPebble or if you're using the SDK
        locally on your computer.</p>
      <p>Select whether you're using CloudPebble or the SDK below to show the relevant instructions!</p>
      <p>
        <VPButton text="CloudPebble" theme="alt" @click="store.sdkPlatform = 'cloudpebble'"/>
        &nbsp;
        <VPButton text="SDK" theme="alt" @click="store.sdkPlatform = 'local'"/>
      </p>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
