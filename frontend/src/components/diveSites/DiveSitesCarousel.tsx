"use client";

import { DiveSite } from "@/lib/data/ArrayDiveSites";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
    <div className="w-full overflow-y-hidden overflow-x-auto mt-8">
      <div className="flex gap-4 w-max px-2">
        {sites.map((site, index) => (
          <Card
            key={index}
            onClick={() => {
              setSelectedCoords(site.coords);
              setActiveIndex(index);
              openModal(site);
            }}
            className={`min-w-[280px] bg-[#252422] text-white border-none shadow-lg flex flex-col justify-between hover:scale-95 transition-transform ${
              activeIndex === index ? "border-2 border-red-600" : ""
            }`}
          >
            <div className="relative h-[200px] w-full">
              <Image
                src={site.images[0]}
                alt={site.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <CardContent className="p-3 justify-center text-center">
              <h3 className="text-lg font-bold text-red-500 mb-1">
                {site.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
