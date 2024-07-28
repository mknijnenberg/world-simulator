import type { Coordinates } from "@/types/global.types";

type DrawBlockOptions = {
  ctx: CanvasRenderingContext2D;
  from: Coordinates;
  to: Coordinates;
  control: Coordinates;
  width: number;
  carLength: number;
  carCount: number;
  carSpacing: number;
  offset: number;
  color: string;
  roundCap?: boolean;
  name: string;
}

export function drawBlock(options: DrawBlockOptions) {
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
    color,
    roundCap = false,
  } = options;

  ctx.save();

  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash([carLength, 10_000]);
  ctx.lineDashOffset = -offset;
  ctx.lineCap = roundCap ? 'round' : 'butt';

  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.quadraticCurveTo(control.x, control.y, to.x, to.y);
  ctx.stroke();
  
  for(let i = 0; i < carCount; i++) {
    ctx.lineDashOffset -= carLength
    ctx.lineDashOffset -= carSpacing;
    ctx.stroke();
  }

  ctx.restore();
}
