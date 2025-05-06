"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Staff } from "@/lib/data/Staff";

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
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
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
        <Card className="bg-negro-secundario shadow-md border-[#403d39] p-8">
          <div className="flex flex-col justify-center h-full md:min-h-[400px]">
            <h2 className="text-2xl font-bold mb-4 text-white flex justify-center items-center gap-2">
              <Users className="h-6 w-6 text-rojo" />
              Nosotros
            </h2>
            <CardContent className="p-8 relative">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#252422] text-white p-2 rounded-full z-10 hover:bg-[#403d39]"
              >
                <ChevronLeft size={24} />
              </button>

              <div
                ref={carouselRef}
                className="w-full overflow-x-hidden overflow-y-hidden"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="flex gap-4 w-[200px] px-2">
                  {staff.map((member) => (
                    <Card
                      key={member.name}
                      className="min-w-[300px] bg-negro text-white border-none shadow-lg flex flex-col justify-between hover:scale-105 transition-transform"
                    >
                      <div className="relative h-[130px] w-full">
                        <Image
                          src={member.media.url}
                          alt={member.name}
                          fill
                          className="object-cover rounded-t-xl"
                        />
                      </div>
                      <CardContent className="p-2 text-center w-full">
                        <h3 className="text-sm font-bold text-[#e12222] mb-1">
                          {member.name}
                        </h3>
                        <p className="text-white/80 text-xs overflow-hidden text-ellipsis max-h-[3rem] leading-tight">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#252422] text-white p-2 rounded-full z-10 hover:bg-[#403d39]"
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