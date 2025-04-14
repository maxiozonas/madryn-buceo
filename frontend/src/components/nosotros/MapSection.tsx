"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import customIcon from "../ui/customIcon";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";

export default function MapSection() {
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDraggable(window.innerWidth >= 768);
    }
  }, []);

  useEffect(() => {
    const mapRoot = document.querySelector(".leaflet-container");
    if (mapRoot) {
      mapRoot.removeAttribute("tabindex");
    }
  }, []);
  

  return (
    <section className="relative isolate z-0 py-1 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "#ff4d4d" }}>
          Dónde Estamos
        </h2>
        <p className="text-white text-lg mb-6">
          Los esperamos todo el año en el balneario Sara, sobre el Mar...
        </p>
        <div
          className="relative isolate w-full h-[300px] rounded-xl overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <MapContainer
            center={[-42.780055, -65.018699]}
            zoom={17}
            scrollWheelZoom={false}
            dragging={isDraggable}
            style={{ width: "100%", height: "100%", zIndex: 0 }}
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
      </div>
    </section>
  );
}
