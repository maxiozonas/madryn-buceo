"use client";

import { Anchor, Clock, Compass, Heart, LifeBuoy, Users } from "lucide-react";
import { ReactNode } from "react";

interface DetallesSectionProps {
  details: string[];
}

const getDetailIcon = (index: number): ReactNode => {
  const icons = [
    <Clock key="clock" className="h-5 w-5 text-[#e12222]" />,
    <Users key="users" className="h-5 w-5 text-[#e12222]" />,
    <LifeBuoy key="lifeBuoy" className="h-5 w-5 text-[#e12222]" />,
    <Heart key="heart" className="h-5 w-5 text-[#e12222]" />,
    <Compass key="compass" className="h-5 w-5 text-[#e12222]" />,
  ];
  return icons[index % icons.length];
};

export default function DetallesSection({ details }: DetallesSectionProps) {
  return (
    <div className="bg-[#252422] rounded-xl p-6 shadow-lg border border-[#403d39]">
      <h2 className="text-3xl font-bold mb-6 text-white text-center flex items-center justify-center uppercase font-oceanica">
        <Anchor className="mr-3 h-6 w-6 text-[#e12222]" />
        Detalles
      </h2>
      <div className="flex flex-col gap-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className="bg-[#1a1917] border-l-4 border-[#e12222] p-4 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="flex-shrink-0 p-2 bg-[#e12222]/10 rounded-full text-center lg:text-start">{getDetailIcon(index)}</div>
              <span className="text-white text-sm font-medium text-center lg:text-start">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}