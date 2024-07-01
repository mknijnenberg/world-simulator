<template>
  <div class="control">
    <div class="header">
      <div class="label">{{ label }}</div>

      <div class="value">{{ model }}</div>
    </div>
    
    <div class="control-grid">
      <input type="range" :min="min" :max="max" :step="step" v-model="model" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string;
  min?: number;
  max?: number;
  step?: number;
}>(), {
  min: 0,
  max: 100,
  step: 1,
});

const model = defineModel({
  required: true,
});
</script>

<style scoped>
.control {
  margin-bottom: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
  align-items: center;
}

.label {
  text-align: center;
  font-size: .8rem;
}

.value {
  color: var(vt-c-indigo);
  font-size: .7rem;
}

.control-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
  justify-items: center;
}

button {
  background-color: var(--color-background);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-size: 1rem;
  text-align: center;
}

button:hover {
  cursor: pointer;
  background-color: var(--color-background-mute);
}
</style>
