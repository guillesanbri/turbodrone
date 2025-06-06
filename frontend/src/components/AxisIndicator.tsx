import React from "react";

interface Props {
  x: number;           // -1 … +1 (left … right)
  y: number;           // -1 … +1 (down … up)   – positive y = up
  size?: number;
  label?: string;
}

export default function AxisIndicator({ x, y, size = 120, label }: Props) {
  // clamp outside callers just in case
  x = Math.max(-1, Math.min(1, x));
  y = Math.max(-1, Math.min(1, y));

  const radius = size * 0.4;            // max travel inside the square

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative border border-slate-400/60 rounded-sm"
        style={{ width: size, height: size }}
      >
        {/* cross-hair */}
        <div className="absolute inset-0 m-auto h-px w-full bg-slate-500/40" />
        <div className="absolute inset-0 m-auto w-px h-full bg-slate-500/40" />
        {/* moving dot */}
        <div
          className="absolute w-4 h-4 rounded-full bg-emerald-400 shadow-lg"
          style={{ 
            left: `calc(50% + ${x * radius}px)`,
            top: `calc(50% + ${-y * radius}px)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      {label && <span className="text-xs tracking-wide opacity-70">{label}</span>}
    </div>
  );
} 