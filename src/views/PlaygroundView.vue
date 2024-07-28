<template>
  <div class="playground">
    <div class="playground-container">
      <div class="board">
        <PlaygroundCanvas ref="canvas" :height="700" :width="700" />
      </div>

      <div class="controls">
        <PlaygroundControls />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlaygroundCanvas from '@/components/PlaygroundCanvas.vue'
import PlaygroundControls from '@/components/PlaygroundControls.vue'
import { drawWorld } from '@/modules/playground/world'
import { useWorldStore } from '@/stores/world'
import { onMounted, onUnmounted, ref, unref } from 'vue'

const { trackWidth, carLength, carCount, carSpacing, trainSpeed, loopAnimation } = useWorldStore()

// https://www.youtube.com/watch?v=pTJ_Ue5F_8s

const canvas = ref()

let frameCount = 0

const animationFrame = ref()

function animate() {
  const computedStyleCanvasValue = getComputedStyle(canvas.value.ctx.canvas)

  canvas.value.ctx.clearRect(0, 0, canvas.value.canvasWidth, canvas.value.canvasHeight)

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
      car: computedStyleCanvasValue.getPropertyValue('--world-color-car'),
      carContent: computedStyleCanvasValue.getPropertyValue('--world-color-carContent'),
      connector: computedStyleCanvasValue.getPropertyValue('--world-color-connector'),
      grid: computedStyleCanvasValue.getPropertyValue('--world-color-grid'),
      locomotive: computedStyleCanvasValue.getPropertyValue('--world-color-locomotive'),
      locomotiveAccent: computedStyleCanvasValue.getPropertyValue('--world-color-locomotiveAccent'),
      locomotiveWindow: computedStyleCanvasValue.getPropertyValue('--world-color-locomotiveWindow'),
      track: computedStyleCanvasValue.getPropertyValue('--world-color-track')
    }
  })

  frameCount++

  animationFrame.value = requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame.value)
})
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
