"use client";

import { Anchor, Clock, Compass, Heart, LifeBuoy, Users } from "lucide-react";
import { ReactNode } from "react";

interface DetallesSectionProps {
  details: string[];
}

const getDetailIcon = (index: number): ReactNode => {
  const icons = [
    <Clock key="clock" className="h-5 w-5 text-rojo" />,
    <Users key="users" className="h-5 w-5 text-rojo" />,
    <LifeBuoy key="lifeBuoy" className="h-5 w-5 text-rojo" />,
    <Heart key="heart" className="h-5 w-5 text-rojo" />,
    <Compass key="compass" className="h-5 w-5 text-rojo" />,
  ];
  return icons[index % icons.length];
};

export default function DetallesSection({ details }: DetallesSectionProps) {
  return (
    <div className="bg-negro-secundario rounded-xl p-6 shadow-lg border border-[#403d39]">
      <h2 className="text-3xl font-bold mb-6 text-white text-center flex items-center justify-center uppercase font-oceanica">
        <Anchor className="mr-3 h-6 w-6 text-rojo" />
        Detalles
      </h2>
      <div className="flex flex-col gap-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className="bg-negro border-l-4 border-rojo p-4 rounded-lg shadow-md transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="flex-shrink-0 p-2 bg-rojo/10 rounded-full text-center lg:text-start">{getDetailIcon(index)}</div>
              <span className="text-white text-sm font-medium text-center lg:text-start">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}