"use client";

import React, { useState } from "react";
import { diveSites } from "@/lib/data/ArrayDiveSites";
import DiveSitesMap from "./DiveSitesMap";
import DiveSitesCarousel from "./DiveSitesCarousel";
import DiveSiteModal from "./DiveSiteModal";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import CertificationFilter from "./CertificationFilter";
import HeroSection from "./HeroSection";

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

  return (
    <>
      <HeroSection
        title={"Puntos de buceo"}
        heroImage={"/images/buceo/divesites.webp"}
        miniDescription={"Conocé los mejores lugares para bucear en la región."}
      />
      <div className="container mx-auto px-8">
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
      </div>
      {selectedSite && (
        <DiveSiteModal
          isOpen={isModalOpen}
          site={selectedSite}
          closeModal={closeModal}
        />
      )}
      </>
  );
}