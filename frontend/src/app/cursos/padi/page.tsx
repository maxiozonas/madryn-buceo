"use client";

import CursosIntroSection from "@/components/cursos/CursosIntroSection";
import CursoFiltro from "@/components/cursos/CursosFiltro";
import CursoHeroSection from "@/components/cursos/CursoHeroSection";
import OtrosCursosSection from "@/components/cursos/OtrosCursosSection";

export default function CursosPage() {

  return (
    <>
      <CursoHeroSection />
      <div className="container flex flex-col items-center justify-center px-8 mx-auto py-20">

        <CursosIntroSection />
        <CursoFiltro />
      </div>
      <OtrosCursosSection />
    </>
  );
}