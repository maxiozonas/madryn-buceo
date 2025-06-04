"use client";

import React, { useState } from "react";
import { diveSites } from "@/lib/data/ArrayDiveSites";
import DiveSitesMap from "./DiveSitesMap";
import DiveSitesCarousel from "./DiveSitesCarousel";
import DiveSiteModal from "./DiveSiteModal";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import HeroSection from "./HeroSection";
import { FormattedMessage } from "react-intl";

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
        title={<FormattedMessage id ={"diving.spots"}/>}
        heroImage={"https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102583/divesites_nprtbc.webp"}
        miniDescription={<FormattedMessage id ={"diving.des"}/>}
      />
      <div className="container mx-auto px-8">
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