"use client";

import { useState } from "react";
import { cursos, allCursos, type Curso } from "@/lib/data/Cursos"
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import ButtonRojo from "../ui/button-rojo";

export default function CursoFiltro() {
  const [activeFilter, setActiveFilter] = useState<string>("todos")
  const [filteredCursos, setFilteredCursos] = useState<Curso[]>(allCursos)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)

    if (filter === "todos") {
      setFilteredCursos(allCursos)
    } else {
      setFilteredCursos(cursos[filter as keyof typeof cursos] || [])
    }
  }

  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">Nuestros Cursos</h2>
      <p className="text-center text-gray-300 mb-12 text-base">Elige el curso que más te interese</p>
      <div className="container">

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterChange("todos")}
            className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${activeFilter === "todos" ? "bg-rojo text-white" : "bg-negro-secundario text-gray-300 hover:bg-gray-800"
              }`}
          >
            Todos
          </button>
          <button
            onClick={() => handleFilterChange("programa")}
            className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${activeFilter === "programa"
                ? "bg-rojo text-white"
                : "bg-negro-secundario text-gray-300 hover:bg-gray-800"
              }`}
          >
            Programas
          </button>
          <button
            onClick={() => handleFilterChange("iniciacion")}
            className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${activeFilter === "iniciacion"
                ? "bg-rojo text-white"
                : "bg-negro-secundario text-gray-300 hover:bg-gray-800"
              }`}
          >
            Iniciación
          </button>
          <button
            onClick={() => handleFilterChange("avanzados")}
            className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${activeFilter === "avanzados"
                ? "bg-rojo text-white"
                : "bg-negro-secundario text-gray-300 hover:bg-gray-800"
              }`}
          >
            Avanzados
          </button>
          <button
            onClick={() => handleFilterChange("profesional")}
            className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${activeFilter === "profesional"
                ? "bg-rojo text-white"
                : "bg-negro-secundario text-gray-300 hover:bg-gray-800"
              }`}
          >
            Profesional
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCursos.map((curso) => (
            <Card key={curso.slug} className="group border-gray-800 bg-negro-secundario pt-0 rounded-none">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={curso.cardImage || "/placeholder.svg?height=400&width=600"}
                  alt={curso.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-rojo text-white px-3 py-1 text-sm font-medium rounded-l-md">
                  {curso.level === "programa" && "Programa"}
                  {curso.level === "iniciacion" && "Iniciación"}
                  {curso.level === "avanzados" && "Avanzado"}
                  {curso.level === "profesional" && "Profesional"}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{curso.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{curso.shortDescription}</p>
                <ButtonRojo href={`/cursos/padi/${curso.slug}`} texto="Ver detalles" fullWidth={true}/>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}