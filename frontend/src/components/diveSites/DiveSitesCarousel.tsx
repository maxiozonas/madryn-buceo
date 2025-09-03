"use client";

import { DiveSite } from "@/lib/data/ArrayDiveSites";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

interface Props {
  sites: DiveSite[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setSelectedCoords: (coords: [number, number]) => void;
  certificationFilter: string | null;
  openModal: (site: DiveSite) => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
      const cardWidth =
        carouselRef.current.querySelector(".card")?.clientWidth || 280;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".card")?.clientWidth || 280;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
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
      className="mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="relative isolate overflow-hidden shadow-md">
        <div className="flex flex-col justify-center h-full min-h-[300px] sm:min-h-[400px]">
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#252422] text-white p-3 rounded-full z-10 hover:bg-[#403d39] sm:p-2 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              ref={carouselRef}
              className="overflow-x-hidden overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              <div className="flex gap-4 w-max px-2">
                {filteredSites.map((site, index) => (
                  <Card
                    key={site.difficulty}
                    onClick={() => {
                      setSelectedCoords(site.coords);
                      setActiveIndex(index);
                      openModal(site);
                    }}
                    className={`card min-w-[280px] bg-negro-secundario text-white border-[#403d39] shadow-lg flex flex-col justify-between hover:scale-95 transition-transform snap-center p-0 cursor-pointer ${
                      activeIndex === index ? "" : ""
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    <div className="relative h-64" style={{ borderRadius: 0 }}>
                      <Image
                        src={getCardImage(site.media)}
                        alt={site.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                        style={{ borderRadius: 0 }}
                        width={280}
                        height={280}
                      />
                    </div>

                    <CardContent className="p-2 text-center w-full mb-4">
                      <h3 className="text-sm font-bold text-white/80">
                        <FormattedMessage id={site.name} />
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#252422] text-white p-3 rounded-full z-10 hover:bg-[#403d39] sm:p-2 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
