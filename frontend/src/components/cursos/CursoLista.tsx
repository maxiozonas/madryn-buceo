import { Curso } from "@/lib/data/Cursos";
import CursoCard from "./CursoCard";

interface CursoListaProps {
  courses: Curso[];
}

export default function CursoLista({ courses }: CursoListaProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.length > 0 ? (
        courses.map((course) => (
          <CursoCard key={course.title} course={course} />
        ))
      ) : (
        <p className="text-white/80 text-center col-span-full">
          No hay cursos disponibles para este filtro.
        </p>
      )}
    </div>
  );
}