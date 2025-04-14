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
    <div className="container mx-auto px-8 py-20">
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center uppercase font-oceanica">
          Cursos PADI en Puerto Madryn
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 mb-6 leading-relaxed">
            Explora el fascinante mundo submarino en la impresionante Patagonia con nuestros cursos de buceo, diseñados para todos los niveles. Como centro de buceo PADI, garantizamos la más alta calidad de instrucción y seguridad. Descubre por qué Puerto Madryn es reconocido como la capital nacional del buceo, ofreciéndote una experiencia única en las aguas del Golfo Nuevo. Desde iniciarte en el buceo hasta convertirte en un experto, nuestros instructores certificados te guiarán en cada paso del camino. Encuentra el curso perfecto para ti y comienza tu aventura subacuática con nosotros.
          </p>
          <p className="text-white/90 text-sm font-medium">
            PADI es la certificadora de buceo número 1 a nivel mundial, reconocida por su excelencia en formación y estándares de seguridad. Como centro PADI oficial, ofrecemos certificaciones válidas en todo el mundo.
          </p>
        </div>
      </section>
      <CursosIntroSection />
      <CursoFiltro onFilterChange={setFilter} />
      <CursoLista courses={filteredCourses} />
    </div>
  );
}