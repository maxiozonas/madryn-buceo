"use client";

import { DiveSite } from "@/lib/data/ArrayDiveSites";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { motion } from "framer-motion";

interface Props {
  sites: DiveSite[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setSelectedCoords: (coords: [number, number]) => void;
  certificationFilter: string | null;
  openModal: (site: DiveSite) => void;
}

export default function DiveSitesCarousel({
  sites,
  activeIndex,
  setActiveIndex,
  setSelectedCoords,
  certificationFilter,
  openModal,
}: Props) {
  const filteredSites = certificationFilter
    ? sites.filter((site) => site.certification === certificationFilter)
    : sites;

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filteredSites.length > 0 && activeIndex >= filteredSites.length) {
      setActiveIndex(0);
      setSelectedCoords(filteredSites[0].coords);
    }
  }, [filteredSites, activeIndex, setActiveIndex, setSelectedCoords]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: "smooth" }); 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: "smooth" }); 
    }
  };

  if (filteredSites.length === 0) {
    return (
      <div className="text-white text-center">
        No hay sitios disponibles para este filtro.
      </div>
    );
  }

  const getCardImage = (media: { type: "image" | "video"; url: string }[]) => {
    const firstImage = media.find((item) => item.type === "image");
    return firstImage ? firstImage.url : "/images/placeholder.jpg";
  };

  return (
        <motion.section
          className="mt-16 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
    <div className="relative w-full mt-8">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={carouselRef}
        className="w-full overflow-x-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-4 w-max px-2">
          {filteredSites.map((site, index) => (
            <Card
              key={site.name}
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
                  src={getCardImage(site.media)}
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

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
      >
        <ChevronRight size={24} />
      </button>
    </div>
    </motion.section>
  );
}