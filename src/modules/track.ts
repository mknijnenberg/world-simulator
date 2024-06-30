import type { Coordinates } from "@/types/global.types";

type DrawTrackOptions = {
  ctx: CanvasRenderingContext2D;
  from: Coordinates;
  to: Coordinates;
  via: Coordinates;
  width: number;
  color: string;
}

export function drawTrack(options: DrawTrackOptions) {
  const { ctx, from, to, via, width, color = 'gray' } = options;

  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width * 0.8;
  ctx.moveTo(from.x, from.y);
  
  ctx.quadraticCurveTo(via.x, via.y, to.x, to.y);
  ctx.stroke();

  ctx.strokeStyle = 'white';
  ctx.lineWidth = width * 0.6;
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash([width * 0.18, width * 0.4]);
  ctx.stroke();
  ctx.restore();
}
