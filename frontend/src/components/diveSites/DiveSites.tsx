"use client";

import React, { useState } from "react";
import { diveSites } from "@/lib/data/ArrayDiveSites";
import DiveSitesMap from "./DiveSitesMap";
import DiveSitesCarousel from "./DiveSitesCarousel";
import DiveSiteModal from "./DiveSiteModal";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import CertificationFilter from "./CertificationFilter";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
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
  const router = useRouter();

  const openModal = (site: DiveSite) => {
    setSelectedSite(site);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSite(null);
    setIsModalOpen(false);
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
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
      <button
        onClick={handleGoBack}
        className="absolute top-5 left-5 bg-[#252422] text-white border border-red-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#403d39] transition z-[1000]"
        aria-label="Volver"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#e12222]" />
      </button>
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
