"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
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
  const groupRef = useRef<SVGGElement | null>(null);
  const [viewBox, setViewBox] = useState<string>("80 0 1050 585");
  const [hover, setHover] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  // Compute the real bounding box of all rendered city paths and use that
  // as the viewBox so the map is perfectly centered with consistent padding.
  useLayoutEffect(() => {
    if (!groupRef.current) return;
    try {
      const bbox = groupRef.current.getBBox();
      const padX = bbox.width * 0.04;
      const padY = bbox.height * 0.06;
      setViewBox(
        `${bbox.x - padX} ${bbox.y - padY} ${bbox.width + padX * 2} ${bbox.height + padY * 2}`
      );
    } catch {
      // If getBBox fails (e.g. SVG not yet attached), keep fallback viewBox.
    }
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        role="img"
        aria-label="Mantar'ın aktif olduğu Türkiye illeri haritası"
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          {/* Mantar-red base + tiled translucent real Mantar mascot */}
          <pattern
            id="mantarTile"
            x="0"
            y="0"
            width="22"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <rect width="22" height="30" fill="#ae2940" />
            <MantarSilhouette
              x={3}
              y={2}
              scale={0.27}
              opacity={0.22}
            />
          </pattern>
          {/* Hover variant (slightly brighter red, slightly more visible mascot) */}
          <pattern
            id="mantarTileHover"
            x="0"
            y="0"
            width="22"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <rect width="22" height="30" fill={COLOR_ACTIVE_HOVER_TINT} />
            <MantarSilhouette
              x={3}
              y={2}
              scale={0.27}
              opacity={0.28}
            />
          </pattern>
        </defs>

        <g ref={groupRef}>
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
        </g>
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

/* Real Mantar mascot silhouette (white, translucent) — taken from
   public/mantar-mascot-cap.svg cls-3 paths. Native viewBox 0 0 42.04 65.91. */
function MantarSilhouette({
  x,
  y,
  scale,
  opacity,
}: {
  x: number;
  y: number;
  scale: number;
  opacity: number;
}) {
  return (
    <g
      transform={`translate(${x},${y}) scale(${scale})`}
      fill="#ffffff"
      opacity={opacity}
    >
      {/* Cap top */}
      <path d="M1.75,16.07C2.18,7.36,9.75,1,18.18.14c9-.87,16.92,2.49,20.47,8.21a10.83,10.83,0,0,1,1.74,7.21l0,.32a160,160,0,0,0-22-1.15C10.85,14.81,4.42,15.27,1.75,16.07Z" />
      {/* Stem */}
      <path d="M18,14.06h6.45c-.15,9.12-.3,19,.58,26.4.74,5.9,2.5,9,5.14,11A17.34,17.34,0,0,0,38,54.27h0v2.27c-4.55,1.21-11.29,1.34-17,1.34-5.87,0-12.46-.13-17-1.34V54.27a16.79,16.79,0,0,0,7.77-2.82c2.64-2,4.4-5.09,5.13-11C17.73,33.09,17.88,23.18,18,14.06Z" />
      {/* Base */}
      <path d="M4,54.58a91.36,91.36,0,0,0,34,0v5.15c0,1.23-1.47,1.9-3.38,2.35a69.91,69.91,0,0,1-27.27,0C5.42,61.63,4,61,4,59.73Z" />
    </g>
  );
}
