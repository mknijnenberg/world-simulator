import { GameObject, type GameObjectConfig, type UpdateState } from "@/modules/game/game-object";

type PersonConfig = GameObjectConfig & {
  isPlayerControlled?: boolean;
}

type DirectionUpdate = {
  'up': ['y', number]
  'down': ['y', number]
  'left': ['x', number]
  'right': ['x', number]
}

export class Person extends GameObject {
  movingProgressRemaing: number;
  directionUpdate: DirectionUpdate;
  isPlayerControlled: boolean;

  constructor(config: PersonConfig) {
    super(config);
    this.movingProgressRemaing = 0;
    this.isPlayerControlled = config.isPlayerControlled || false;
    this.directionUpdate = {
      'up': ['y', -1],
      'down': ['y', 1],
      'left': ['x', -1],
      'right': ['x', 1],
    }
  }

  update(state: UpdateState) {
    this.updatePosition();
    this.updateSprite(state);

    if (!this.isPlayerControlled) {
      return;
    }

    if (this.movingProgressRemaing === 0 && state.arrow) {
      this.direction = state.arrow;
      this.movingProgressRemaing = 16;
    }
  }

  updatePosition() {
    if (this.movingProgressRemaing > 0) {
      const [property, value] = this.directionUpdate[this.direction];
      this[property] += value;
      this.movingProgressRemaing -= 1;
    }
  }

  updateSprite(state: UpdateState) {
    this.sprite.setAnimation(`idle-${this.direction}`);
  }
}
