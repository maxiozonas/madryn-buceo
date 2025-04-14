"use client";

import React, { useState } from "react";
import { diveSites } from "@/lib/data/arraydiveSites";
import DiveSitesCarousel from "./DiveSitesCarousel";
import DiveSitesMap from "./DiveSitesMap";

export default function DiveSitesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>(
    diveSites[0].coords
  );

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white uppercase tracking-wide shadow-md text-center">
        Puntos de Buceo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[600px]">
        <DiveSitesCarousel
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setSelectedCoords={setSelectedCoords}
        />
        <DiveSitesMap selectedCoords={selectedCoords} />
      </div>
    </main>
  );
}
