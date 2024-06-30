import { drawBlock } from "./block";
import type { ColorTypes, Coordinates } from "@/types/global.types";

type DrawTrainOptions = {
  ctx: CanvasRenderingContext2D;
  from: Coordinates;
  to: Coordinates;
  control: Coordinates;
  width: number;
  carLength: number;
  carCount: number;
  carSpacing: number;
  offset: number;
  colors: ColorTypes;
}

export function drawTrain(options: DrawTrainOptions) {
  const {
    ctx,
    from,
    to,
    control,
    width,
    carLength,
    carCount,
    carSpacing,
    offset,
    colors,
  } = options;

  // Car
  drawBlock({
    ctx: ctx,
    from,
    to,
    control,
    width,
    name: 'car',
    carLength,
    carCount,
    carSpacing,
    offset,
    color: colors['car'],
  });

  const carThicknessFactor = 0.15;
  const inverseCarThicknessFactor = 1 - carThicknessFactor;

  // Car content
  drawBlock({
    ctx: ctx,
    from,
    to,
    control,
    name: 'carContent',
    width: width * inverseCarThicknessFactor - (carLength * carThicknessFactor) / 2,
    carLength: carLength * inverseCarThicknessFactor,
    carCount,
    carSpacing: carSpacing + carLength * carThicknessFactor,
    offset: offset + carSpacing * inverseCarThicknessFactor,
    color: colors['carContent'],
  });

  // Car connectors
  drawBlock({
    ctx: ctx,
    from,
    to,
    name: 'connectors',
    control,
    width: carSpacing,
    carLength: carSpacing,
    carCount: carCount - 1,
    carSpacing: carLength,
    offset: offset + carLength,
    color: colors['connector'],
  });

  // Locomotive
  drawBlock({
    ctx: ctx,
    from,
    to,
    name: 'locomotive',
    control,
    width,
    carLength,
    carCount: 1,
    carSpacing,
    offset,
    // offset: offset + (carLength + carSpacing) * (carCount - 1),
    color: colors['locomotive'],
  });

  drawBlock({
    ctx: ctx,
    from,
    to,
    control,
    width: width * inverseCarThicknessFactor * 1.1 - (carLength * carThicknessFactor) / 2,
    carLength: carLength * inverseCarThicknessFactor * 0.1,
    carCount: 1,
    carSpacing: carSpacing + carLength * carThicknessFactor,
    offset: offset + carLength * carCount + carSpacing * (carCount - 1),
    color: 'blue',
    roundCap: true,
  });
}
