"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DiveSite } from "@/lib/data/ArrayDiveSites";

interface Props {
  sites: DiveSite[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setSelectedCoords: (coords: [number, number]) => void;
  openModal: (site: DiveSite) => void;
}

export default function DiveSitesCarousel({
  sites,
  activeIndex,
  setActiveIndex,
  setSelectedCoords,
  openModal,
}: Props) {
  return (
    <div>
      <div className="flex md:hidden flex-row gap-4 overflow-x-auto p-4">
        {sites.map((site, index) => (
          <Card
            key={index}
            onClick={() => {
              setSelectedCoords(site.coords);
              setActiveIndex(index);
              openModal(site);
            }}
            className="min-w-[200px] bg-[#252422] text-white border-none shadow-md"
          >
            <div className="relative w-full h-32">
              <Image
                src={site.images[0]}
                alt={site.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <CardContent className="p-2">
              <h3 className="text-sm font-bold text-red-500">{site.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-4 overflow-y-auto h-full max-h-[800px] p-4 pr-2 scroll-smooth">
        {sites.map((site, index) => (
          <Card
            key={index}
            onClick={() => {
              setSelectedCoords(site.coords);
              setActiveIndex(index);
              openModal(site);
            }}
            className={`bg-[#252422] text-white border-none shadow-lg cursor-pointer hover:scale-[1.01] transition ${
              activeIndex === index ? "border border-red-500" : ""
            }`}
          >
            <div className="relative h-40 w-full">
              <Image
                src={site.images[0]}
                alt={site.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-red-500 mb-2">
                {site.name}
              </h3>
              <p className="text-base text-white/80 mb-3">{site.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
