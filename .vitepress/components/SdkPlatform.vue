<script setup>
import { store } from './store'
</script>

<template>
<slot name="cloudpebble" v-if="store.sdkPlatform === 'cloudpebble'"></slot>
<slot name="local" v-else></slot>
</template>
