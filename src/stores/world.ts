import { defineStore } from 'pinia';
import { useStorage } from "@vueuse/core";

export const useWorldStore = defineStore('world', () => {
  const trackWidth = useStorage('world.trackWidth', 50);
  const carLength = useStorage('world.carLength', 40);
  const carCount = useStorage('world.carCount', 7);
  const carSpacing = useStorage('world.carSpacing', 10);
  const trainSpeed = useStorage('world.trainSpeed', 1);
  const loopAnimation = useStorage('world.loopAnimation', false);

  return {
    trackWidth,
    carLength,
    carCount,
    carSpacing,
    trainSpeed,
    loopAnimation,
  }
})
