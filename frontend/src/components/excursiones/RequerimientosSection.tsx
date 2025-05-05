"use client";

import { AlertCircle } from "lucide-react";
import { Excursion } from "@/lib/data/Excursiones";
import { Card, CardContent } from "../ui/card";

interface RequerimientosSectionProps {
  excursion: Excursion;
}

export default function RequirementsSection({ excursion }: RequerimientosSectionProps) {
  return (
    <Card className="bg-negro-secundario shadow-md border-gray-800">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-rojo" />
          Requisitos
        </h2>
        <div className="space-y-4">
          {excursion.requirements.map((req, index) => (
            <div key={index} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
              <h3 className="font-bold text-lg text-rojo">{req.title}</h3>
              <p className="text-gray-300">{req.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}