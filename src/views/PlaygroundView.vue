<template>
  <div class="playground">
    <PlaygroundCanvas ref="canvas" :height="700" :width="700" />

    <PlaygroundControls
      v-model:trackWidth="trackWidth"
      v-model:carLength="carLength"
      v-model:carCount="carCount"
      v-model:carSpacing="carSpacing"
      v-model:trainSpeed="trainSpeed" />
  </div>
</template>

<script setup lang="ts">
import PlaygroundCanvas from '@/components/PlaygroundCanvas.vue';
import PlaygroundControls from '@/components/PlaygroundControls.vue';
import { drawWorld } from '@/modules/world';
import { onMounted, ref, unref } from 'vue';

const canvas = ref();

let frameCount = 0;
const trackWidth = ref(50);
const carLength = ref(40);
const carCount = ref(7);
const carSpacing = ref(10);
const trainSpeed = ref(1);

function animate() {
  requestAnimationFrame(animate);

  canvas.value.ctx.clearRect(0, 0, canvas.value.canvasWidth, canvas.value.canvasHeight);

  const computedStyleCanvasValue = getComputedStyle(canvas.value.ctx.canvas);

  drawWorld({
    ctx: canvas.value.ctx,
    from: { x: 50, y: 50 },
    to: { x: 650, y: 650 },
    control: { x: 500, y: 100 },
    trackWidth: unref(trackWidth),
    carLength: unref(carLength),
    carCount: unref(carCount),
    carSpacing: unref(carSpacing),
    trainSpeed: unref(trainSpeed),
    frameCount,
    colors: {
      car: computedStyleCanvasValue.getPropertyValue("--world-color-car"),
      carContent: computedStyleCanvasValue.getPropertyValue("--world-color-carContent"),
      connector: computedStyleCanvasValue.getPropertyValue("--world-color-connector"),
      grid: computedStyleCanvasValue.getPropertyValue("--world-color-grid"),
      locomotive: computedStyleCanvasValue.getPropertyValue("--world-color-locomotive"),
      locomotiveAccent: computedStyleCanvasValue.getPropertyValue("--world-color-locomotiveAccent"),
      locomotiveWindow: computedStyleCanvasValue.getPropertyValue("--world-color-locomotiveWindow"),
      track: computedStyleCanvasValue.getPropertyValue("--world-color-track"),
    },
  });

  frameCount++;
};

onMounted(() => {
  animate();
})
</script>

<style>
@media (min-width: 1024px) {
  .playground {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
