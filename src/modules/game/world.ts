import type { Ref } from 'vue';
import worldMaps, { type WorldMap } from './data/world-maps';
import { Map } from './map';
import { DirectionInput } from './DirectionInput';

type WorldConfig = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  animationFrame: Ref<number>;
};

export class World {
  map: Map | null;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  animationFrame: Ref<number>;
  directionInput: DirectionInput;

  constructor(config: WorldConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.map = null;
    
    this.animationFrame = config.animationFrame;
    this.directionInput = new DirectionInput();
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.map?.drawLowerImage(this.ctx);

      if (this.map?.gameObjects) {
        Object.values(this.map?.gameObjects).forEach((object) => {
          object.update({
            arrow: this.directionInput.direction,
          });

          object.sprite.draw(this.ctx);
        });
      }
      
      this.map?.drawUpperImage(this.ctx);

      this.animationFrame.value = requestAnimationFrame(() => step());
    }

    step();
  }

  stopGameLoop() {
    cancelAnimationFrame(this.animationFrame.value);
  }

  init() {
    this.map = new Map(worldMaps.DemoRoom);

    this.directionInput.init();
    
    this.startGameLoop();
  }
}
