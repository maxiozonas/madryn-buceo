"use client";

import { Card, CardContent } from "../ui/card";
import { ClipboardList, ChevronRight } from "lucide-react";

interface DetallesSectionProps {
  details: string[];
}

export default function DetallesSection({ details }: DetallesSectionProps) {
  return (
    <Card className="bg-negro-secundario shadow-md border-gray-800">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-rojo" />
          Detalles
        </h2>
        <ul className="flex flex-col justify-between h-full">
          {details.map((detail, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-rojo mr-2 font-bold"><ChevronRight /></span>
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}