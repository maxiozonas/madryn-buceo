import CursoIntroSection from "@/components/detalles-curso/CursoIntroSection";
import DescripcionSection from "@/components/detalles-curso/DescriptionSection";
import DetallesSection from "@/components/detalles-curso/DetallesSection";
import { allCursos } from "@/lib/data/Cursos";
import { notFound } from "next/navigation";


interface DetallePageCursoPageProps {
  params: Promise<{ slug: string }>;
}


export default async function DetalleCursoPage({ params }: DetallePageCursoPageProps) {
  const { slug } = await params;
  console.log(slug)
  const curso = allCursos.find((exc) => exc.slug === slug);
  if (!curso) notFound();

  console.log(curso)

  return (
    <>
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <CursoIntroSection
          title={curso.title}
          shortDescription={curso.shortDescription}
          cardImage={curso.cardImage}
          level={curso.level}
        />
        <DescripcionSection description={curso.description} />
        <DetallesSection details={curso.details} />
      </section>

    </>

  )
}