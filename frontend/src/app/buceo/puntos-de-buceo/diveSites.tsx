"use client";

import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import customIcon from "@/components/ui/customIcon";
import { diveSites } from "@/data/arraydiveSites";
import {
  Activity,
  Ruler,
  BadgeCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function DiveSitesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>(
    diveSites[0].coords
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const newIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, diveSites.length - 1);

    const child = scrollRef.current.children[newIndex] as HTMLElement;

    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      setActiveIndex(newIndex);
      setSelectedCoords(diveSites[newIndex].coords);
    }
  };

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white uppercase tracking-wide shadow-md text-center">
        Puntos de Buceo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[600px]">
        <div className="relative overflow-visible md:max-w-full">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute left-[-45px] top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {diveSites.map((site, index) => (
              <Card
                key={index}
                onMouseEnter={() => {
                  setSelectedCoords(site.coords);
                  setActiveIndex(index);
                }}
                className="min-w-[280px] md:min-w-[97.5%] snap-start bg-[#252422] text-white border-none shadow-lg cursor-pointer hover:scale-[1.01] transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-red-500 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-base text-white/80 mb-3">
                    {site.description}
                  </p>
                  <ul className="text-sm text-white/70 mb-3 space-y-1">
                    <li className="flex items-center gap-2">
                      <Activity size={16} /> <strong>Dificultad:</strong>{" "}
                      {site.difficulty}
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler size={16} /> <strong>Profundidad:</strong>{" "}
                      {site.depth}
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheck size={16} /> <strong>Certificación:</strong>{" "}
                      {site.certification}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} /> <strong>Distancia:</strong>{" "}
                      {site.time}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
      </div>
    </main>
  );
}
