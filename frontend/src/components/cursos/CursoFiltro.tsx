"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface CursoFIltroProps {
  onFilterChange: (filter: string) => void;
}

export default function CursoFiltro({ onFilterChange }: CursoFIltroProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "Todos", value: "all" },
    { label: "Iniciación", value: "iniciacion" },
    { label: "Avanzados", value: "avanzados" },
    { label: "Profesional", value: "profesional" },
  ];

  const handleFilterClick = (value: string) => {
    setActiveFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="mb-12 flex flex-wrap gap-4">
      <p className="text-xl font-bold text-white font-oceanica uppercase">Filtrar por dificultad: </p>
      {filters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => handleFilterClick(filter.value)}
          className={`px-6 py-3 font-medium text-sm uppercase font-oceanica ${
            activeFilter === filter.value
              ? "bg-rojo text-white shadow-lg cursor-pointer"
              : "bg-negro-secundario text-white/80 cursor-pointer"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}