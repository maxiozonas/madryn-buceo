"use client";

import React, { useState } from "react";
import DiveSitesMap from "./DiveSitesMap";

export default function DiveSitesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>([
    -42.758831653388214, -64.97829731579868,
  ]);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white uppercase tracking-wide shadow-md text-center">
        Puntos de Buceo
      </h1>
      <DiveSitesMap
        selectedCoords={selectedCoords}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setSelectedCoords={setSelectedCoords}
      />
    </main>
  );
}
