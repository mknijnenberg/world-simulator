<template>
  <div>
    <label>{{ label }}</label>
    <div class="grid">
      <div><button type="button" @click="decreaseValue">-</button></div>
      <div>{{ model }}</div>
      <div><button type="button" @click="increaseValue">+</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();

const model = defineModel({
  required: true,
});

function decreaseValue() {
  model.value--;
}

function increaseValue() {
  model.value++;
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
}
</style>
