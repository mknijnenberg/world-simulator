import type { ColorTypes, Coordinates } from "@/types/global.types";
import { drawTrack } from "./track";
import { drawTrain } from "./train";

type DrawWorldOptions = {
  ctx: CanvasRenderingContext2D;
  from: Coordinates;
  to: Coordinates;
  control: Coordinates;
  trackWidth: number;
  carLength: number;
  carCount: number;
  carSpacing: number;
  frameCount: number;
  trainSpeed: number;
  colors: ColorTypes;
}

export function drawWorld(options: DrawWorldOptions) {
  const {
    ctx,
    from,
    to,
    control = options.to,
    trackWidth,
    carLength,
    carCount,
    carSpacing,
    frameCount,
    trainSpeed,
    colors,
  } = options;

  drawTrack({
    ctx: ctx,
    from,
    via: control,
    to,
    width: trackWidth,
    color: colors['track'],
  });

  const offset = frameCount * trainSpeed - carSpacing * carCount - carLength * carCount;

  drawTrain({
    ctx: ctx,
    from,
    to,
    control,
    width: trackWidth * 0.8,
    carLength,
    carCount,
    carSpacing,
    offset,
    colors,
  });
}
