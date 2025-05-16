"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Staff } from "@/lib/data/Staff";
import { FormattedMessage } from "react-intl";

interface Props {
  staff: Staff[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StaffCarousel({ staff }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".card")?.clientWidth || 250;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".card")?.clientWidth || 250;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="mt-8 mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-8">
        <Card
          className="bg-negro-secundario shadow-md border-[#403d39] p-4 sm:p-8"
        >
          <div className="flex flex-col justify-center h-full min-h-[300px] sm:min-h-[400px]">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white flex justify-center items-center gap-2">
              <Users className="h-6 w-6 text-rojo" />
              <FormattedMessage id="our.team" defaultMessage="About Us" />
            </h2>
            <CardContent className="p-4 sm:p-8 relative">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#252422] text-white p-3 rounded-full z-10 hover:bg-[#403d39] sm:p-2"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>

              <div
                ref={carouselRef}
                className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide overflow-x-hidden snap-x snap-mandatory"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="flex gap-4 w-max px-2">
                  {staff.map((member) => (
                    <Card
                      key={member.name}
                      className="card min-w-[250px] sm:min-w-[280px] bg-negro text-white border-[#403d39] shadow-lg flex flex-col hover:scale-95 transition-transform snap-center p-0"
                      style={{ borderRadius: 0 }}
                    >
                      <div
                        className="relative h-64"
                        style={{ borderRadius: 0 }}
                      >
                        <Image
                          src={member.media.url}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300"
                          style={{ borderRadius: 0 }}
                        />
                      </div>
                      <CardContent className="p-2 text-center w-full">
                        <div className="h-2 flex items-center justify-center">
                          <h3 className="text-sm sm:text-sm font-bold text-[#e12222]">
                            {member.name}
                          </h3>
                        </div>
                        <div className="w-[245px] mt-2">
                          <p className="text-white/80 text-xs leading-tight max-h-[8.7em]  overflow-hidden flex-grow mb-2">
                            <FormattedMessage id={member.description} defaultMessage="About Us" />
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#252422] text-white p-3 rounded-full z-10 hover:bg-[#403d39] sm:p-2"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </CardContent>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}