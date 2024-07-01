<template>
  <div>
    <PlaygroundRangeInput :min="10" :max="60" :step="10" label="track width" v-model="trackWidth" />
    
    <PlaygroundRangeInput :min="15" :max="60" :step="5" label="car length" v-model="carLength" />
    
    <PlaygroundRangeInput :min="0" :max="10" :step="1" label="car count" v-model="carCount" />
    
    <PlaygroundRangeInput :min="0" :max="10" :step="1" label="train speed" v-model="trainSpeed" />
    
    <PlaygroundToggleInput label="Loop animation" v-model="loopAnimation" />
  </div>
</template>

<script setup lang="ts">
import PlaygroundRangeInput from '@/components/controls/PlaygroundRangeInput.vue';
import PlaygroundToggleInput from '@/components/controls/PlaygroundToggleInput.vue';
import { useWorldStore } from '@/stores/world';
import { storeToRefs } from 'pinia';

const {
  trackWidth,
  carLength,
  carCount,
  trainSpeed,
  loopAnimation,
} = storeToRefs(useWorldStore());
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
}
</style>
