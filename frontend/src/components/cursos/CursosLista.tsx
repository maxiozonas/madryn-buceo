import { Curso } from "@/lib/data/Cursos";
import CursoCard from "./CursosCard";
import { motion } from "framer-motion";

interface CursoListaProps {
  courses: Curso[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CursoLista({ courses }: CursoListaProps) {
  return (
    <motion.section
      className="flex justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
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
    </motion.section>
  );
}