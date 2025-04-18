"use client";

import { Anchor, Compass, Heart, LifeBuoy, Ship, Waves } from "lucide-react";
import { Excursion } from "@/lib/data/Excursiones";
import { ReactNode } from "react";

interface QueEsperarSectionProps {
  excursion: Excursion;
}

const getExpectIcon = (index: number): ReactNode => {
  const icons = [
    <LifeBuoy key="lifeBuoy" className="h-6 w-6 text-rojo" />,
    <Compass key="compass" className="h-6 w-6 text-rojo" />,
    <Ship key="ship" className="h-6 w-6 text-rojo" />,
    <Waves key="waves" className="h-6 w-6 text-rojo" />,
    <Heart key="heart" className="h-6 w-6 text-rojo" />,
    <Anchor key="anchor" className="h-6 w-6 text-rojo" />,
  ];
  return icons[index % icons.length];
};

export default function QueEsperarSection({ excursion }: QueEsperarSectionProps) {
  return (
    <div className="bg-negro-secundario rounded-xl p-6 border border-[#403d39] shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
        <Compass className="mr-3 h-6 w-6 text-rojo" />
        ¿Qué Esperar?
      </h2>
      <div className="space-y-4">
        {excursion.whatToExpect.map((item, index) => (
          <div
            key={index}
            className="bg-negro border-l-4 border-rojo p-5 rounded-lg shadow-md transition-colors duration-300 h-full"
          >
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-shrink-0 p-3 bg-rojo/10 rounded-full">{getExpectIcon(index)}</div>
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