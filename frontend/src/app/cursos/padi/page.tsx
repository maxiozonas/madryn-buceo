"use client";

import { useState } from "react";
import { allCursos } from "@/lib/data/Cursos";
import CursosIntroSection from "@/components/cursos/CursosIntroSection";
import CursoFiltro from "@/components/cursos/CursosFiltro";
import CursoLista from "@/components/cursos/CursosLista";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

export default function CursosPage() {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? allCursos
      : allCursos.filter((course) => course.level === filter);

  return (
    <div className="container mx-auto px-8 py-20 text-white">
      <div className="text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Nuestros cursos
        </motion.h1>
        <motion.p
          className="text-base md:text-2xl mb-20 font-oceanica"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Obtené tu certificado de buceo PADI en Madryn Buceo
        </motion.p>
      </div>

      <CursosIntroSection />
      <CursoFiltro onFilterChange={setFilter} />
      <div className="min-h-screen">
        <CursoLista courses={filteredCourses} />
      </div>
    </div>
  );
}