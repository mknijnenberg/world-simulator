import type { WorldMap } from "./data/world-maps";

export class Map {
  gameObjects: WorldMap['gameObjects'];
  lowerImage: HTMLImageElement;
  upperImage: HTMLImageElement;

  constructor(map: WorldMap) {
    this.gameObjects = map.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = map.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = map.upperSrc;
  }

  drawLowerImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}
