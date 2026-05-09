"use client";

import React from "react";
import TurkeyMap, { type CityType } from "turkey-map-react";

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
const COLOR_ACTIVE = "#ae2940";
const COLOR_ACTIVE_HOVER = "#c43756";
const COLOR_ACTIVE_STROKE = "#7a1c2e";

export default function TurkeyMapClient() {
  return (
    <div className="relative w-full">
      <TurkeyMap
        showTooltip
        hoverable
        cityWrapper={(cityComponent, city) => (
          <CityCell key={city.id} cityComponent={cityComponent} city={city} />
        )}
        customStyle={{
          idleColor: COLOR_INACTIVE,
          hoverColor: COLOR_INACTIVE_HOVER,
        }}
      />
      {/* City colors — applied via cityWrapper className */}
      <style>{`
        .tr-city { transition: fill 0.18s ease; }
        .tr-city.active { fill: ${COLOR_ACTIVE} !important; stroke: ${COLOR_ACTIVE_STROKE}; stroke-width: 0.6; }
        .tr-city.active:hover { fill: ${COLOR_ACTIVE_HOVER} !important; }
        .tr-city.inactive { fill: ${COLOR_INACTIVE} !important; stroke: ${COLOR_INACTIVE_STROKE}; stroke-width: 0.4; }
        .tr-city.inactive:hover { fill: ${COLOR_INACTIVE_HOVER} !important; }
      `}</style>
    </div>
  );
}

function CityCell({
  cityComponent,
  city,
}: {
  cityComponent: React.ReactElement;
  city: CityType;
}) {
  const isActive = ACTIVE_NAMES.has(city.name);
  const className = `tr-city ${isActive ? "active" : "inactive"}`;
  // Inject className/title on the wrapped component (a <path> wrapped in something).
  return React.cloneElement(
    cityComponent as React.ReactElement<Record<string, unknown>>,
    { className }
  );
}
