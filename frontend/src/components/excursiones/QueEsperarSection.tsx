"use client";

import { Excursion } from "@/lib/data/Excursiones";
import { Card, CardContent } from "../ui/card";
import { Compass } from "lucide-react";

interface QueEsperarSectionProps {
  excursion: Excursion;
}

export default function QueEsperarSection({ excursion }: QueEsperarSectionProps) {
  return (
    <Card className="bg-negro-secundario shadow-md mb-8 border-gray-800">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Compass className="h-6 w-6 text-rojo" />
          ¿Qué esperar?
        </h2>
        <div className="space-y-6">
          {excursion.whatToExpect.map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
              <h3 className="font-bold text-lg text-rojo mb-2">
                {index + 1}. {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}