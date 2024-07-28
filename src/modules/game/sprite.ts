import type { GameObject } from "./game-object";

type SpriteConfig = {
  src: string;
  animations?: Record<string, number[][]>;
  currentAnimation?: AnimationTypes;
  useShadow?: boolean;
  animationFrameLimit?: number;
}

type AnimationTypes = 'idle-down' | 'idle-right' | 'idle-up' | 'idle-left' | 'walk-down' | 'walk-right' | 'walk-up' | 'walk-left';

export class Sprite {
  gameObject: GameObject;
  isImageLoaded: boolean;
  isShadowLoaded: boolean;
  useShadow: boolean;
  shadowImage: HTMLImageElement;
  animations: Record<string, number[][]>;
  image: HTMLImageElement;
  currentAnimation: AnimationTypes;
  currentAnimationFrame: number;
  animationFrameLimit: number;
  animationFrameProgress: number;

  constructor(gameObject: GameObject, config: SpriteConfig) {
    this.isImageLoaded = false;
    this.isShadowLoaded = false;
    this.useShadow = true;

    this.gameObject = gameObject;

    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isImageLoaded = true;
    };

    this.shadowImage = new Image();

    if (this.useShadow) {
      this.shadowImage.src = '/assets/pizza-legends/characters/shadow.png';
      this.shadowImage.onload = () => {
        this.isShadowLoaded = true;
      };
    }

    this.animations = config.animations || {
      'idle-down':   [[0,0]],
      'idle-right':  [[0,1]],
      'idle-up':     [[0,2]],
      'idle-left':   [[0,3]],
      'walk-down':   [[1,0], [0,0], [3,0], [0,0]],
      'walk-right':  [[1,1], [0,1], [3,1], [0,1]],
      'walk-up':     [[1,2], [0,2], [3,2], [0,2]],
      'walk-left':   [[1,3], [0,3], [3,3], [0,3]],
    };

    this.currentAnimation = config.currentAnimation || 'idle-down';
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress = this.animationFrameLimit;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  resetCounter() {
    this.animationFrameProgress = this.animationFrameLimit;
  }

  setAnimation(key: AnimationTypes) {
    if (this.currentAnimation === key) {
      return;
    }

    this.currentAnimation = key;
    this.currentAnimationFrame = 0;
    this.animationFrameProgress = this.animationFrameLimit;
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress === 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    this.resetCounter();

    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;

    if (this.isShadowLoaded) {
      ctx.drawImage(this.shadowImage, x, y);
    }

    const [frameX, frameY] = this.frame;
    
    const imageWidth = 32;
    const imageHeight = 32;
    
    if (this.isImageLoaded) {
      ctx.drawImage(
        this.image,
        frameX * 32,
        frameY * 32,
        32,
        32,
        x,
        y,
        imageWidth,
        imageHeight
      );
    }

    this.updateAnimationProgress();
  }
}
