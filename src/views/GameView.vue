<template>
  <div class="game">
    <div class="game-container">
      <PlaygroundCanvas ref="canvas" :height="198" :width="352" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlaygroundCanvas from '@/components/PlaygroundCanvas.vue';
import { World } from '@/modules/game/world';
import { onMounted, onUnmounted, ref } from 'vue';

// https://www.youtube.com/watch?v=fyi4vfbKEeo&list=PLcjhmZ8oLT0r9dSiIK6RB_PuBWlG1KSq_

const canvas = ref();
const animationFrame = ref();

let game: World;

onMounted(() => {
  game = new World({
    canvas: canvas.value,
    ctx: canvas.value.ctx,
    animationFrame,
  });

  game.init();
});

onUnmounted(() => {
  game.stopGameLoop();
});
</script>

<style>
.playground {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.playground-container {
  min-height: 800px;
  display: flex;
  gap: 2rem;
  align-items: start;
}

.board {
  background-color: var(--color-background);
  margin: 0 auto;
  display: block;
  border: 1px solid black;
  padding: 1rem;
}

.controls {
  background-color: var(--color-background);
  padding: 1rem;
  width: 10rem;
}
</style>
