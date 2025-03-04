<script setup lang="ts">
import { ref, computed } from 'vue';
import {VPButton} from "vitepress/theme";
import { store } from './store'
import PebbleScreenshot from './PebbleScreenshot.vue';

interface Platform {
  hw: string;
  wrapper: string;
}

const props = defineProps<{
  platforms: Platform[];
  image: string;
  small?: boolean;
}>();

const computedSrc = computed(() => {
  const baseSrc = props.image.split('.png')[0];
  return `${baseSrc}~${selectedPlatform.value.hw}.png`;
});

const selectedPlatform = computed(() => props.platforms.find(p => p.hw === store.platform) || props.platforms[0]);

const selectPlatform = (platform: Platform) => {
  store.platform = platform.hw
};
</script>

<template>
  <div class="screenshot-viewer">
    <div class="screenshot-viewer__platforms">
      <VPButton
          v-for="platform in props.platforms"
          :key="platform.hw"
          @click="selectPlatform(platform)"
          :text="platform.hw"
          :theme="platform.hw === selectedPlatform.hw ? 'brand' : 'alt'"
      />
    </div>
    <PebbleScreenshot :small="small" :src="computedSrc" :wrapper="selectedPlatform.wrapper" />
  </div>
</template>

<style lang="scss">
.screenshot-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &__platforms {
    display: flex;
    gap: 0.5rem;

    button {
      text-transform: capitalize;
    }
  }
}
</style>
