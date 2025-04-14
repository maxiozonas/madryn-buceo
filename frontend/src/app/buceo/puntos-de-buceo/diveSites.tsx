"use client";

import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

    child?.scrollIntoView({ behavior: "auto", inline: "start", block: "nearest" });

    setActiveIndex(newIndex);
    setSelectedCoords(diveSites[newIndex].coords);
  };

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white uppercase tracking-wide shadow-md text-center">
        Puntos de Buceo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[600px]">
        <div className="relative overflow-x-auto md:overflow-visible">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scroll("left");
            }}
            onMouseDown={(e) => e.preventDefault()}
            className="hidden md:flex items-center justify-center absolute left-[-56px] top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scroll("right");
            }}
            onMouseDown={(e) => e.preventDefault()}
            className="hidden md:flex items-center justify-center absolute right-[-24px] top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-row gap-4 overflow-x-auto pb-4 md:pb-0 md:pr-10 snap-x snap-mandatory scroll-smooth"
          >
            {diveSites.map((site, index) => (
              <Card
                key={index}
                onMouseEnter={() => {
                  setSelectedCoords(site.coords);
                  setActiveIndex(index);
                }}
                className="min-w-[280px] snap-start md:min-w-full bg-[#252422] text-white border-none shadow-lg cursor-pointer hover:scale-[1.01] transition"
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
                  <h3 className="text-lg font-bold text-red-500 mb-1">
                    {site.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-2">
                    {site.description}
                  </p>
                  <ul className="text-xs text-white/70 mb-3 space-y-1">
                    <li className="flex items-center gap-2">
                      <Activity size={14} /> <strong>Dificultad:</strong>{" "}
                      {site.difficulty}
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler size={14} /> <strong>Profundidad:</strong>{" "}
                      {site.depth}
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheck size={14} /> <strong>Certificación:</strong>{" "}
                      {site.certification}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={14} /> <strong>Distancia:</strong>{" "}
                      {site.time}
                    </li>
                  </ul>

                  <Button className="bg-red-600 hover:bg-red-700 w-full text-white">
                    Ver más
                  </Button>
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
