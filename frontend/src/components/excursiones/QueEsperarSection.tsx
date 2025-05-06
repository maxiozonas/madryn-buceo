"use client";

import { Excursion } from "@/lib/data/Excursiones";
import { Card, CardContent } from "../ui/card";
import { Compass, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface QueEsperarSectionProps {
  excursion: Excursion;
}

export default function QueEsperarSection({ excursion }: QueEsperarSectionProps) {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedItem(prev => prev === index ? null : index);
  };

  const isExpanded = (index: number) => expandedItem === index;

  return (
    <Card className="bg-negro-secundario shadow-md mb-8 border-gray-800">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Compass className="h-6 w-6 text-rojo" />
          ¿Qué esperar?
        </h2>
        <div className="space-y-6">
          {excursion.whatToExpect.map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-3 last:border-0 last:pb-0">
              <button 
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left font-bold text-lg text-rojo group hover:text-rojo-claro transition-colors duration-200 cursor-pointer py-2 rounded-sm hover:bg-negro/20"
              >
                <span>{index + 1}. {item.title}</span>
                {isExpanded(index) ? 
                  <ChevronUp className="h-5 w-5 transition-transform duration-300 text-rojo" /> : 
                  <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 text-rojo" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded(index) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-300 pl-5 border-l-2 border-rojo/40 animate-slideDown py-2">
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}