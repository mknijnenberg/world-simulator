<template>
  <div>
    <PlaygroundControl label="trackWidth" v-model="trackWidth" />
    
    <PlaygroundControl label="carLength" v-model="carLength" />
    
    <PlaygroundControl label="carCount" v-model="carCount" />
    
    <PlaygroundControl label="carSpacing" v-model="carSpacing" />

    <PlaygroundControl label="trainSpeed" v-model="trainSpeed" />
  </div>
</template>

<script setup lang="ts">
import PlaygroundControl from '@/components/PlaygroundControl.vue';

const trackWidth = defineModel('trackWidth', { required: true });
const carLength = defineModel('carLength', { required: true });
const carCount = defineModel('carCount', { required: true });
const carSpacing = defineModel('carSpacing', { required: true });
const trainSpeed = defineModel('trainSpeed', { required: true });
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
}
</style>
