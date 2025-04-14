"use client";

import { useState } from "react";

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
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilterClick(filter.value)}
          className={`px-6 py-3 rounded-full font-medium text-sm uppercase font-oceanica transition-all duration-300 ${
            activeFilter === filter.value
              ? "bg-[#e12222] text-white shadow-lg cursor-pointer"
              : "bg-[#1a1917] text-white/80 cursor-pointer border border-[#403d39] hover:bg-[#252422] hover:text-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}