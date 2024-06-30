<template>
  <div class="playground">
    <PlaygroundCanvas ref="canvas" :height="700" :width="700" />
  </div>
</template>

<script setup lang="ts">
import PlaygroundCanvas from '@/components/PlaygroundCanvas.vue';
import { drawWorld } from '@/modules/world';
import { onMounted, ref } from 'vue';

const canvas = ref();

let frameCount = 0;

function animate() {
  canvas.value.ctx.clearRect(0, 0, canvas.value.canvasWidth, canvas.value.canvasHeight);

  drawWorld({
    ctx: canvas.value.ctx,
    from: { x: 100, y: 100 },
    to: { x: 600, y: 600 },
    control: { x: 500, y: 100 },
    trackWidth: 50,
    carLength: 100,
    carCount: 7,
    carSpacing: 10,
    trainSpeed: 1,
    frameCount,
    colors: {
      car: '#051',
      carContent: '#222',
      connector: '#000',
      locomotive: '#051',
      locomotiveAccent: '#0A8',
      locomotiveWindow: '#6BF',
      track: '#AAA',
    },
  });

  frameCount++;

  requestAnimationFrame(animate);
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
