"use client";

import React, { useState } from "react";
import { diveSites } from "@/lib/data/ArrayDiveSites";
import DiveSitesMap from "./DiveSitesMap";
import DiveSitesCarousel from "./DiveSitesCarousel";
import DiveSiteModal from "./DiveSiteModal";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import CertificationFilter from "./CertificationFilter";
import { motion } from "framer-motion";

export default function DiveSitesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>([
    diveSites[0].coords[0],
    diveSites[0].coords[1],
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<DiveSite | null>(null);
  const [certificationFilter, setCertificationFilter] = useState<string | null>(
    null
  );

  const openModal = (site: DiveSite) => {
    setSelectedSite(site);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSite(null);
    setIsModalOpen(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="mt-16 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <main className="p-6 max-w-7xl mx-auto space-y-8 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide shadow-md text-center mb-8">
          Puntos de Buceo
        </h1>
        <div className="flex justify-center mb-4 block sm:hidden">
          <CertificationFilter
            certificationFilter={certificationFilter}
            setCertificationFilter={setCertificationFilter}
          />
        </div>
        <DiveSitesMap
          selectedCoords={selectedCoords}
          sites={diveSites}
          certificationFilter={certificationFilter}
          setCertificationFilter={setCertificationFilter}
          onMarkerClick={openModal}
        />
        <DiveSitesCarousel
          sites={diveSites}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setSelectedCoords={setSelectedCoords}
          certificationFilter={certificationFilter}
          openModal={openModal}
        />
        {selectedSite && (
          <DiveSiteModal
            isOpen={isModalOpen}
            site={selectedSite}
            closeModal={closeModal}
          />
        )}
      </main>
    </motion.section>
  );
}
