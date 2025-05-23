"use client";

import { FormattedMessage } from "react-intl";
import CourseDescription from "@/components/detalles-curso/CursoDescripcionSection";
import CourseDetails from "@/components/detalles-curso/CursoDetallesSection";
import CursoIntroSection from "@/components/detalles-curso/CursoIntroSection";
import CursoPorqueSection from "@/components/detalles-curso/CursoPorqueSection";
import { SeparatorHorizontal } from "lucide-react";
import { Curso } from "@/lib/data/Cursos";

interface DetalleCursoClientProps {
  curso: Curso;
}

export default function DetalleCursoClient({ curso }: DetalleCursoClientProps) {
  return (
    <>
      <CursoIntroSection
        title={<FormattedMessage id={curso.title} />}
        shortDescription={<FormattedMessage id={curso.shortDescription} />}
        certification={curso.certification ? <FormattedMessage id={curso.certification} /> : undefined}
        duration={curso.duration ? <FormattedMessage id={curso.duration} /> : undefined}
        depth={curso.depth ? <FormattedMessage id={curso.depth} /> : undefined}
        cardImage={curso.cardImage}
        level={<FormattedMessage id={curso.level} />}
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseDescription
              description={<FormattedMessage id={curso.description} />}
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
                requirements={curso.requirements}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}