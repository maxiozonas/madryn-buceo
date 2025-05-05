import CourseDescription from "@/components/detalles-curso/CursoDescripcionSection";
import CourseDetails from "@/components/detalles-curso/CursoDetallesSection";
import CursoIntroSection from "@/components/detalles-curso/CursoIntroSection";
import CursoPorqueSection from "@/components/detalles-curso/CursoPorqueSection";
import { allCursos } from "@/lib/data/Cursos";
import { SeparatorHorizontal } from "lucide-react";
import { notFound } from "next/navigation";


interface DetallePageCursoPageProps {
  params: Promise<{ slug: string }>;
}


export default async function DetalleCursoPage({ params }: DetallePageCursoPageProps) {
  const { slug } = await params;
  const curso = allCursos.find((exc) => exc.slug === slug);
  if (!curso) notFound();


  return (
    <>
      <CursoIntroSection
        title={curso.title}
        shortDescription={curso.shortDescription}
        certification={curso.certification}
        duration={curso.duration}
        depth={curso.depth}
        cardImage={curso.cardImage}
        level={curso.level}
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseDescription
              description={curso.description}
              learningOutcomes={curso.learningOutcomes}
              includes={curso.includes}
              qualifications={curso.qualifications}
            />
            <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />
            <div className="mt-8">
              <CursoPorqueSection />
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-24">
              <CourseDetails
                duration={curso.duration}
                depth={curso.depth}
                certification={curso.certification}
                requirements={curso.requirements} />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}