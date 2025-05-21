import { notFound } from "next/navigation";
import { allCursos } from "@/lib/data/Cursos";
import DetalleCursoClient from "@/components/detalles-curso/CoursePage";

interface DetallePageCursoPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetalleCursoPage({ params }: DetallePageCursoPageProps) {
  const { slug } = await params;
  const curso = allCursos.find((exc) => exc.slug === slug);

  if (!curso) notFound();

  return <DetalleCursoClient curso={curso} />;
}