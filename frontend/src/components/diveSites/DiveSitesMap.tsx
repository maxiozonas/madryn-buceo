"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import customIcon from "@/components/ui/customIcon";
import "leaflet/dist/leaflet.css";

interface Props {
  selectedCoords: [number, number];
}

export default function DiveSitesMap({ selectedCoords }: Props) {
  return (
    <div className="relative isolate w-full h-[400px] md:h-[490px] rounded-xl overflow-hidden">
      <MapContainer
        center={selectedCoords}
        zoom={12}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
        dragging={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={selectedCoords} icon={customIcon}>
          <Popup>Punto de buceo seleccionado</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
