"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import customIcon from "../ui/customIcon";
import React from "react";

export default function MapSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center">
        Dónde Estamos
      </h2>
      <p className=" text-lg text-center mb-6" style={{ color: "#ffffff" }}>
        Los esperamos todo el año en el balneario Sara, sobre el Mar...
      </p>

      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <MapContainer
          center={[-42.780055, -65.018699]}
          zoom={19}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={[-42.780055, -65.018699]} icon={customIcon}>
            <Popup>Balneario Sara - Puerto Madryn</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
