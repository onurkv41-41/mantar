"use client";

import React, { useRef, useState } from "react";
import { cities } from "turkey-map-react/lib/data";

const ACTIVE_NAMES = new Set([
  "İstanbul",
  "Kocaeli",
  "Sakarya",
  "Ankara",
  "Kayseri",
]);

const COLOR_INACTIVE = "#ecdfb5";
const COLOR_INACTIVE_HOVER = "#dccd95";
const COLOR_INACTIVE_STROKE = "#b89860";
const COLOR_ACTIVE_HOVER_TINT = "#c43756";

export default function TurkeyMapClient() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <svg
        viewBox="80 0 1050 585"
        className="w-full h-auto"
        role="img"
        aria-label="Mantar'ın aktif olduğu Türkiye illeri haritası"
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          {/* Mantar-red base + tiled translucent white mascot */}
          <pattern
            id="mantarTile"
            x="0"
            y="0"
            width="34"
            height="42"
            patternUnits="userSpaceOnUse"
          >
            {/* Solid red base */}
            <rect width="34" height="42" fill="#ae2940" />
            {/* Mantar mascot silhouette (white, low alpha) — staggered for honeycomb feel */}
            <g opacity="0.18">
              <MascotGlyph x={3} y={6} size={14} />
              <MascotGlyph x={20} y={22} size={11} />
            </g>
          </pattern>
          {/* Hover variant (slightly brighter) */}
          <pattern
            id="mantarTileHover"
            x="0"
            y="0"
            width="34"
            height="42"
            patternUnits="userSpaceOnUse"
          >
            <rect width="34" height="42" fill={COLOR_ACTIVE_HOVER_TINT} />
            <g opacity="0.22">
              <MascotGlyph x={3} y={6} size={14} />
              <MascotGlyph x={20} y={22} size={11} />
            </g>
          </pattern>
        </defs>

        {cities.map((c) => {
          const isActive = ACTIVE_NAMES.has(c.name);
          const isHover = hover?.name === c.name;
          const fill = isActive
            ? isHover
              ? "url(#mantarTileHover)"
              : "url(#mantarTile)"
            : isHover
              ? COLOR_INACTIVE_HOVER
              : COLOR_INACTIVE;
          return (
            <path
              key={c.id}
              d={c.path}
              fill={fill}
              stroke={isActive ? "#7a1c2e" : COLOR_INACTIVE_STROKE}
              strokeWidth={isActive ? 0.7 : 0.4}
              style={{ cursor: "pointer", transition: "fill 0.15s ease" }}
              onMouseMove={(e) => {
                const rect = wrapperRef.current?.getBoundingClientRect();
                if (!rect) return;
                setHover({
                  name: c.name,
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </svg>

      {hover && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full"
          style={{
            left: hover.x,
            top: hover.y - 10,
          }}
        >
          <div className="inline-flex items-center h-7 px-3 rounded-full bg-mantar-ink text-white text-[12.5px] font-semibold whitespace-nowrap shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]">
            {hover.name}
            {ACTIVE_NAMES.has(hover.name) && (
              <span className="ml-2 inline-flex items-center gap-1 text-[10.5px] text-mantar-gold-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Aktif
              </span>
            )}
          </div>
          <div className="mx-auto h-2 w-2 -mt-1 rotate-45 bg-mantar-ink" />
        </div>
      )}
    </div>
  );
}

/* Simplified white mantar mascot for the pattern */
function MascotGlyph({
  x,
  y,
  size,
}: {
  x: number;
  y: number;
  size: number;
}) {
  // Native viewBox 0..14 wide; scale via group transform
  const s = size / 14;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} fill="#ffffff">
      {/* Cap (top dome) */}
      <path d="M 0,7 C 0,2 3,0 7,0 C 11,0 14,2 14,7 C 14,7.6 13.6,8 13,8 L 1,8 C 0.4,8 0,7.6 0,7 Z" />
      {/* Stem */}
      <path d="M 4.5,8 L 4.5,12 C 4.5,13.2 5.3,13.7 6.1,13.7 L 7.9,13.7 C 8.7,13.7 9.5,13.2 9.5,12 L 9.5,8 Z" />
    </g>
  );
}
