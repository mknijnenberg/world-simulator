<template>
  <canvas ref="canvasRef" :width="width" :height="height" class="canvasBox"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  width: number;
  height: number;
}>();

const canvasRef = ref();
const ctx = ref();

defineExpose({
  el: canvasRef,
  height: props.height,
  width: props.width,
  ctx,
});

onMounted(() => {
  ctx.value = canvasRef.value.getContext('2d');
});
</script>

<style scoped>
.canvasBox {
  border: 1px solid black;
  margin: 0 auto;
  display: block;
}
</style>
