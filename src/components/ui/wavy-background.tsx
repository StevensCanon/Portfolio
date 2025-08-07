'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise';
import { useTheme } from 'next-themes';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  waveWidth,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  waveWidth?: number;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme(); // 👈 detecta el tema actual
  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  let ctx: CanvasRenderingContext2D | null, animationId: number;

  const getSpeed = () => (speed === 'fast' ? 0.002 : 0.001);

  const darkModeColors = ['#430545', '#CE81F8', '#c084fc', '#E8E8E8', '#9622EE'];
  const lightModeColors = ['#B07CFF', '#925BFF', '#A78BFA', '#EDE9FE', '#CABFFD'];

  const waveColors = isDark ? darkModeColors : lightModeColors;
  const backgroundFill = isDark ? '#000000' : '#ffffff';

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    ctx = canvas.getContext('2d');

    const drawWave = (n: number, w: number, h: number, nt: number) => {
      if (!ctx) {
        return;
      }
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = (nt: number, w: number, h: number) => {
      if (!ctx) {
        return;
      }
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5, w, h, nt);
    };

    const resizeCanvas = () => {
      if (!canvas || !container || !ctx) {
        return;
      }
      const w = (canvas.width = container.offsetWidth);
      const h = (canvas.height = container.offsetHeight);
      ctx.filter = `blur(${blur}px)`;

      let nt = 0;
      const animate = () => {
        nt += getSpeed();
        render(nt, w, h);
        animationId = requestAnimationFrame(animate);
      };

      cancelAnimationFrame(animationId);
      animate();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [blur, waveOpacity, waveWidth, speed, isDark, waveColors, backgroundFill]);

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'w-full mx-auto px-4 h-60 flex flex-col items-center justify-center overflow-x-hidden relative',
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      />
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
