"use client";

import { Calendar, Shield, Thermometer } from "lucide-react";
import { Excursion } from "@/lib/data/Excursiones";
import { ReactNode } from "react";

interface RequerimientosSectionProps {
  excursion: Excursion;
}

const getRequirementIcon = (index: number): ReactNode => {
  const icons = [
    <Calendar key="calendar" className="h-6 w-6 text-rojo" />,
    <Thermometer key="thermometer" className="h-6 w-6 text-rojo" />,
    <Shield key="shield" className="h-6 w-6 text-rojo" />,
  ];
  return icons[index % icons.length];
};

export default function RequirementsSection({ excursion }: RequerimientosSectionProps) {
  return (
    <div className="bg-negro-secundario rounded-xl p-6 border border-[#403d39] shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
        <Shield className="mr-3 h-6 w-6 text-rojo" />
        Requisitos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {excursion.requirements.map((req, index) => (
          <div
            key={index}
            className="bg-negro border-l-4 border-rojo p-5 rounded-lg shadow-md transition-colors duration-300 h-full"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 bg-rojo/10 rounded-full">{getRequirementIcon(index)}</div>
              <div>
                <h3 className="font-semibold text-lg text-white text-center mb-2">{req.title}</h3>
                <p className="text-white/80 text-sm text-center">{req.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}