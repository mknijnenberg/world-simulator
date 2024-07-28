export class DirectionInput {
  heldDirections: string[];
  map: Record<string, string>;

  constructor() {
    this.heldDirections = [];

    this.map = {
      'ArrowUp': 'up',
      'ArrowDown': 'down',
      'ArrowLeft': 'left',
      'ArrowRight': 'right',
      'KeyW': 'up',
      'KeyS': 'down',
      'KeyA': 'left',
      'KeyD': 'right',
    };
  }

  get direction() {
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event: KeyboardEvent) {
    const direction = this.map[event.code];

    if (direction && this.heldDirections.indexOf(direction) === -1) {
      this.heldDirections.unshift(direction);
    }
  }

  onKeyUp(event: KeyboardEvent) {
    const direction = this.map[event.code];
    const index = this.heldDirections.indexOf(direction);

    if (index > -1) {
      this.heldDirections.splice(index, 1);
    }
  }
}
