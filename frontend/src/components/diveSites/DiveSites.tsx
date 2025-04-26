"use client";

import React, { useState } from "react";
import { diveSites } from "@/lib/data/ArrayDiveSites";
import DiveSitesMap from "./DiveSitesMap";
import DiveSitesCarousel from "./DiveSitesCarousel";
import DiveSiteModal from "./DiveSiteModal";
import { DiveSite } from "@/lib/data/ArrayDiveSites";

export default function DiveSitesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>([
    diveSites[0].coords[0],
    diveSites[0].coords[1],
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<DiveSite | null>(null);

  const openModal = (site: DiveSite) => {
    setSelectedSite(site);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSite(null);
    setIsModalOpen(false);
  };

  return (
    <main className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide shadow-md text-center mb-8">
        Puntos de Buceo
      </h1>

      {/* Mapa */}
      <DiveSitesMap
        selectedCoords={selectedCoords}
        sites={diveSites}
        onMarkerClick={openModal}
      />

      {/* Cards */}
      <DiveSitesCarousel
        sites={diveSites}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setSelectedCoords={setSelectedCoords}
        openModal={openModal}
      />

      {/* Modal */}
      {selectedSite && (
        <DiveSiteModal
          isOpen={isModalOpen}
          site={selectedSite}
          closeModal={closeModal}
        />
      )}
    </main>
  );
}
