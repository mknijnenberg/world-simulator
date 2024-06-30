type DrawGridOptions = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  cellSize: number;
  color: string;
}

export function drawGrid(options: DrawGridOptions) {
  const { ctx, width, height, cellSize, color } = options;
 
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;

  for (let x = 0; x <= width; x += cellSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y <= height; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}
