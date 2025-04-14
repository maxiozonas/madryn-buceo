"use client";

import { Anchor, Compass, Heart, LifeBuoy, Ship, Waves } from "lucide-react";
import { Excursion } from "@/lib/data/Excursiones";
import { ReactNode } from "react";

interface QueEsperarSectionProps {
  excursion: Excursion;
}

const getExpectIcon = (index: number): ReactNode => {
  const icons = [
    <LifeBuoy key="lifeBuoy" className="h-6 w-6 text-[#e12222]" />,
    <Compass key="compass" className="h-6 w-6 text-[#e12222]" />,
    <Ship key="ship" className="h-6 w-6 text-[#e12222]" />,
    <Waves key="waves" className="h-6 w-6 text-[#e12222]" />,
    <Heart key="heart" className="h-6 w-6 text-[#e12222]" />,
    <Anchor key="anchor" className="h-6 w-6 text-[#e12222]" />,
  ];
  return icons[index % icons.length];
};

export default function QueEsperarSection({ excursion }: QueEsperarSectionProps) {
  return (
    <div className="bg-[#252422] rounded-xl p-6 border border-[#403d39] shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
        <Compass className="mr-3 h-6 w-6 text-[#e12222]" />
        ¿Qué Esperar?
      </h2>
      <div className="space-y-4">
        {excursion.whatToExpect.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300 h-full"
          >
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">{getExpectIcon(index)}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm text-center lg:text-start">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}