import { useEffect, useRef, useState } from "react";
import "./SnakeGame.css";

type Point = { x: number; y: number };
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";

const OPPOSITE: Record<Dir, Dir> = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT",
};

const KEY_TO_DIR: Record<string, Dir> = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  w: "UP",
  s: "DOWN",
  a: "LEFT",
  d: "RIGHT",
};

export default function SnakeGame({
  cols = 20,
  rows = 20,
  cellSize = 20,
  initialLength = 3,
  speed = 120, // ms per tick (lower -> faster)
}: {
  cols?: number;
  rows?: number;
  cellSize?: number;
  initialLength?: number;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // refs to avoid stale closures
  const snakeRef = useRef<Point[]>([]);
  const dirRef = useRef<Dir>("RIGHT");
  const nextDirRef = useRef<Dir | null>(null);
  const foodRef = useRef<Point | null>(null);
  const runningRef = useRef(false);
  const tickRef = useRef<number | null>(null);

  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // touch handling for swipe
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // initialize snake and food
  const resetGame = () => {
    const startX = Math.floor(cols / 2);
    const startY = Math.floor(rows / 2);
    const snake: Point[] = [];
    for (let i = 0; i < initialLength; i++) {
      snake.unshift({ x: startX - i, y: startY });
    }
    snakeRef.current = snake;
    dirRef.current = "RIGHT";
    nextDirRef.current = null;
    spawnFood();
    setScore(0);
    setGameOver(false);
    draw(); // initial render
  };

  const spawnFood = () => {
    const snake = snakeRef.current;
    let tries = 0;
    let pos: Point;
    do {
      pos = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
      tries++;
      if (tries > 1000) break;
    } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
    foodRef.current = pos;
  };

  // move snake one step, return whether ate food
  const step = (): boolean => {
    const snake = snakeRef.current;
    const dir = dirRef.current;
    let head = snake[snake.length - 1];
    // compute next head
    let nx = head.x;
    let ny = head.y;
    if (dir === "UP") ny -= 1;
    if (dir === "DOWN") ny += 1;
    if (dir === "LEFT") nx -= 1;
    if (dir === "RIGHT") nx += 1;

    // check wall collision (walls kill)
    if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) {
      return false; // signal death
    }

    // check self collision
    if (snake.some((s) => s.x === nx && s.y === ny)) {
      return false;
    }

    const ate = foodRef.current && nx === foodRef.current.x && ny === foodRef.current.y;

    if (ate) {
      // grow: push new head, don't shift tail
      snake.push({ x: nx, y: ny });
      spawnFood();
      setScore((s) => s + 1);
    } else {
      // move: push new head, remove tail
      snake.push({ x: nx, y: ny });
      snake.shift();
    }
    return true;
  };

  // main loop
  useEffect(() => {
    resetGame();
    // keyboard
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      const dir = KEY_TO_DIR[k] || null;
      if (!dir) return;
      e.preventDefault();
      // prevent reversing
      if (OPPOSITE[dir] === dirRef.current) return;
      nextDirRef.current = dir;
    };
    window.addEventListener("keydown", onKey);

    // touch handlers
    const canvas = canvasRef.current;
    if (canvas) {
      const onTouchStart = (e: TouchEvent) => {
        const t = e.touches[0];
        touchStartRef.current = { x: t.clientX, y: t.clientY };
      };
      const onTouchEnd = (e: TouchEvent) => {
        if (!touchStartRef.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStartRef.current.x;
        const dy = t.clientY - touchStartRef.current.y;
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);
        const TH = 20; // threshold
        if (absX < TH && absY < TH) return;
        let dir: Dir | null = null;
        if (absX > absY) {
          dir = dx > 0 ? "RIGHT" : "LEFT";
        } else {
          dir = dy > 0 ? "DOWN" : "UP";
        }
        if (dir && OPPOSITE[dir] !== dirRef.current) {
          nextDirRef.current = dir;
        }
        touchStartRef.current = null;
      };
      canvas.addEventListener("touchstart", onTouchStart, { passive: true });
      canvas.addEventListener("touchend", onTouchEnd);
      return () => {
        window.removeEventListener("keydown", onKey);
        canvas.removeEventListener("touchstart", onTouchStart);
        canvas.removeEventListener("touchend", onTouchEnd);
      };
    }

    return () => {
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // game tick interval
  useEffect(() => {
    if (!running) {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
        tickRef.current = null;
      }
      runningRef.current = false;
      return;
    }

    runningRef.current = true;
    // clear any existing
    if (tickRef.current) window.clearInterval(tickRef.current);

    tickRef.current = window.setInterval(() => {
      // apply pending direction
      const next = nextDirRef.current;
      if (next) {
        if (OPPOSITE[next] !== dirRef.current) {
          dirRef.current = next;
        }
        nextDirRef.current = null;
      }

      const alive = step();
      if (!alive) {
        // stop
        setRunning(false);
        runningRef.current = false;
        setGameOver(true);
        if (tickRef.current) {
          window.clearInterval(tickRef.current);
          tickRef.current = null;
        }
      }
      draw();
    }, speed);

    return () => {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
        tickRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, speed]);

  // drawing
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // scale canvas
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    // background (transparent so page bg shows through)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // grid optional (light)
    ctx.strokeStyle = "rgba(0,0,0,0.04)";
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * cellSize + 0.5, 0);
      ctx.lineTo(c * cellSize + 0.5, canvas.height);
      ctx.stroke();
    }
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * cellSize + 0.5);
      ctx.lineTo(canvas.width, r * cellSize + 0.5);
      ctx.stroke();
    }

    // draw food
    const food = foodRef.current;
    if (food) {
      ctx.fillStyle = "#ff4d4f";
      roundRectFill(ctx, food.x * cellSize + 2, food.y * cellSize + 2, cellSize - 4, cellSize - 4, 4);
    }

    // draw snake
    const snake = snakeRef.current;
    for (let i = 0; i < snake.length; i++) {
      const s = snake[i];
      // head styling
      if (i === snake.length - 1) {
        ctx.fillStyle = "#0b8457";
        roundRectFill(ctx, s.x * cellSize + 1, s.y * cellSize + 1, cellSize - 2, cellSize - 2, 4);
        // eye
        drawEye(ctx, s.x, s.y, dirRef.current, cellSize);
      } else {
        ctx.fillStyle = "#19a974";
        roundRectFill(ctx, s.x * cellSize + 2, s.y * cellSize + 2, cellSize - 4, cellSize - 4, 3);
      }
    }
  };

  // helper draw functions
  const roundRectFill = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
  };

  const drawEye = (ctx: CanvasRenderingContext2D, gridX: number, gridY: number, dir: Dir, cell: number) => {
    const cx = gridX * cell + cell / 2;
    const cy = gridY * cell + cell / 2;
    const eyeOffset = cell / 5;
    let ex = cx;
    let ey = cy;
    if (dir === "UP") ey -= eyeOffset;
    if (dir === "DOWN") ey += eyeOffset;
    if (dir === "LEFT") ex -= eyeOffset;
    if (dir === "RIGHT") ex += eyeOffset;
    ctx.fillStyle = "#042";
    ctx.beginPath();
    ctx.arc(ex, ey, Math.max(1, cell / 10), 0, Math.PI * 2);
    ctx.fill();
  };

  // UI handlers
  const handleStart = () => {
    if (gameOver) {
      resetGame();
    }
    setRunning(true);
    setGameOver(false);
  };
  const handlePause = () => setRunning(false);
  const handleRestart = () => {
    resetGame();
    setRunning(true);
    setGameOver(false);
  };

  // initial draw effect
  useEffect(() => {
    draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="snake-wrap">
      <div className="snake-info">
        <div className="score">Score: {score}</div>
        <div className="controls">
          {!running && !gameOver && <button onClick={handleStart}>Start</button>}
          {running && <button onClick={handlePause}>Pause</button>}
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>

      <div className="canvas-wrap">
        <canvas ref={canvasRef} className="snake-canvas" />
      </div>

      <div className="mobile-helpers">
        <div className="dpad">
          <button onClick={() => (nextDirRef.current = "UP")}>↑</button>
          <div className="dpad-row">
            <button onClick={() => (nextDirRef.current = "LEFT")}>←</button>
            <button onClick={() => (nextDirRef.current = "RIGHT")}>→</button>
          </div>
          <button onClick={() => (nextDirRef.current = "DOWN")}>↓</button>
        </div>
        {gameOver && <div className="game-over">Game Over</div>}
      </div>
    </div>
  );
}
