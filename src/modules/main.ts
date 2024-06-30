import { drawWorld } from "./world";

function init() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  let frameCount = 0;

  function animate() {    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawWorld({
      ctx,
      from: { x: 100, y: 100 },
      to: { x: 600, y: 600 },
      control: { x: 500, y: 100 },
      trackWidth: 50,
      carLength: 100,
      carCount: 7,
      carSpacing: 10,
      trainSpeed: 1,
      frameCount,
      colors: {
        car: '#051',
        carContent: '#222',
        connector: '#000',
        locomotive: '#051',
        locomotiveAccent: '#0A8',
        locomotiveWindow: '#6BF',
        track: '#AAA',
      },
    });

    frameCount++;

    requestAnimationFrame(animate);
  };

  animate();
}

init();
