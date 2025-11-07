"use client";
import { useEffect, useRef } from "react";

export default function DrawingCursor({
  color = "34,197,94", // "r,g,b"
  maxPoints = 6,       // keep very small for instant-feel
  minRadius = 1,
  maxRadius = 4,
  lifespan = 300,       // ms each point remains visible (50ms default). Lower = more instant
}) {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const rafRef = useRef(null);

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      // Clear whole canvas each frame (no persistent trails)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const points = pointsRef.current;

      // Draw only very recent points (age < lifespan)
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const age = now - p.t;
        if (age >= lifespan) continue;
        // weight from 1 (new) -> 0 (old)
        const weight = Math.max(0, 1 - age / lifespan);
        // radius and alpha based on weight
        const radius = minRadius + (maxRadius - minRadius) * weight;
        const alpha = Math.pow(weight, 1.0); // linear-ish fade inside lifespan
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      }

      // Remove old points immediately
      pointsRef.current = points.filter((p) => now - p.t < lifespan);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [color, lifespan, minRadius, maxRadius]);

  const pushPoint = (x, y) => {
    const points = pointsRef.current;
    points.push({ x, y, t: Date.now() });
    // keep tiny buffer so movement looks smooth for the short lifespan
    if (points.length > 200) points.splice(0, points.length - 200);
    if (points.length > maxPoints) {
      const remove = points.length - maxPoints;
      points.splice(0, remove);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pushPoint(e.clientX - rect.left, e.clientY - rect.top);
    };
    const onTouch = (e) => {
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        pushPoint(t.clientX - rect.left, t.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [maxPoints, lifespan]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
