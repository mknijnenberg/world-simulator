import { Sprite } from "./sprite";

type Direction = 'up' | 'down' | 'left' | 'right';

export type UpdateState = {
  arrow: Direction;
}

export type GameObjectConfig = {
  x: number;
  y: number;
  src: string;
  direction?: Direction;
};

export class GameObject {
  x: number;
  y: number;
  sprite: Sprite;
  direction: Direction;

  constructor(config: GameObjectConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || 'down';
    this.sprite = new Sprite(this, {
      src: config.src,
    });
  }

  update(state: UpdateState) {}
}
