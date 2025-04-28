"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import customIcon from "@/components/ui/customIcon";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import CertificationFilter from "./CertificationFilter";
import "leaflet/dist/leaflet.css";

interface Props {
  selectedCoords: [number, number];
  sites: DiveSite[];
  certificationFilter: string | null;
  setCertificationFilter: (filter: string | null) => void;
  onMarkerClick: (site: DiveSite) => void;
}

const DiveSitesMap: React.FC<Props> = ({
  selectedCoords,
  sites,
  certificationFilter,
  setCertificationFilter,
  onMarkerClick,
}) => {
  const filteredSites = certificationFilter
    ? sites.filter((site) => site.certification === certificationFilter)
    : sites;

  return (
    <div className="relative isolate w-full h-[280px] md:h-[420px] rounded-xl overflow-hidden shadow-md border border-[#403d39] z-0">
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
              click: () => onMarkerClick(site),
            }}
          >
            <Popup>{site.name}</Popup>
            <Tooltip
              direction="top"
              offset={[0, -20]}
              opacity={1}
              permanent={false}
              className="leaflet-tooltip-custom"
            >
              <div
                className="px-2 py-1 bg-[#252422] text-white text-xs font-semibold rounded-md shadow-md"
                style={{ backgroundColor: "#252422", boxShadow: "none" }}
              >
                {site.name}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-[1000] hidden sm:block">
        <CertificationFilter
          certificationFilter={certificationFilter}
          setCertificationFilter={setCertificationFilter}
        />
      </div>
    </div>
  );
};

export default DiveSitesMap;
