"use client";

import { useState } from "react";
import { allCursos } from "@/lib/data/Cursos";
import CursosIntroSection from "@/components/cursos/CursosIntroSection";
import CursoFiltro from "@/components/cursos/CursoFiltro";
import CursoLista from "@/components/cursos/CursoLista";

export default function CursosPage() {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? allCursos
      : allCursos.filter((course) => course.level === filter);

  return (
    <div className="container mx-auto px-8 py-20 text-white">
      <h1 className="text-center text-4xl md:text-6xl font-bold uppercase font-oceanica mb-20">Nuestros cursos</h1>
      <CursosIntroSection />
      <CursoFiltro onFilterChange={setFilter} />
      <div className="min-h-screen">
        <CursoLista courses={filteredCourses} />
      </div>
    </div>
  );
}