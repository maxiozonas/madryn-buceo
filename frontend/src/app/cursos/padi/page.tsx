"use client";

import { useState } from "react";
import { allCursos } from "@/lib/data/Cursos";
import CursosIntroSection from "@/components/cursos/CursosIntroSection";
import CursoFiltro from "@/components/cursos/CursosFiltro";
import CursoLista from "@/components/cursos/CursosLista";

export default function CursosPage() {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? allCursos
      : allCursos.filter((course) => course.level === filter);

  return (
    <div className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
      <CursosIntroSection />
      <CursoFiltro onFilterChange={setFilter} />
      <div className="min-h-screen">
        <CursoLista courses={filteredCourses} />
      </div>
    </div>
  );
}