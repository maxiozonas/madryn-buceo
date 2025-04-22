import React, { useState } from "react";
import DiveSitesCarousel from "./DiveSitesCarousel";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CertificationFilter from "./CertificationFilter";
import customIcon from "@/components/ui/customIcon";
import DiveSiteModal from "./DiveSiteModal";
import "leaflet/dist/leaflet.css";
import { diveSites } from "@/lib/data/ArrayDiveSites";

interface Props {
  selectedCoords: [number, number];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setSelectedCoords: (coords: [number, number]) => void;
}

const DiveSitesMap: React.FC<Props> = ({
  selectedCoords,
  activeIndex,
  setActiveIndex,
  setSelectedCoords,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<DiveSite | null>(null);
  const [certificationFilter, setCertificationFilter] = useState<string | null>(
    null
  );

  const filteredSites = certificationFilter
    ? diveSites.filter((site) => site.certification === certificationFilter)
    : diveSites;

  const openModal = (site: DiveSite) => {
    setSelectedSite(site);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSite(null);
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:h-[800px] rounded-xl overflow-hidden relative z-0">
      <CertificationFilter
        certificationFilter={certificationFilter}
        setCertificationFilter={setCertificationFilter}
      />

      <div className="w-full md:w-[60%] h-[400px] md:h-full md:min-h-[600px] sm:h-[50vh] z-0">
        <MapContainer
          center={selectedCoords}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
          dragging={true}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
          />
          {filteredSites.map((site) => (
            <Marker
              key={site.name}
              position={site.coords}
              icon={customIcon}
              eventHandlers={{
                click: () => openModal(site),
              }}
            >
              <Popup>{site.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="w-full md:w-[40%] bg-black/90 md:h-full mt-4 md:mt-0 z-10">
        <DiveSitesCarousel
          sites={filteredSites}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setSelectedCoords={setSelectedCoords}
          openModal={openModal}
        />
      </div>

      <DiveSiteModal
        isOpen={isModalOpen}
        site={selectedSite}
        closeModal={closeModal}
      />
    </div>
  );
};

export default DiveSitesMap;
