import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCursos } from "@/lib/data/Cursos";
import DetalleCursoClient from "@/components/detalles-curso/CoursePage";

import esLocale from "@/app/locales/es.json";
import enLocale from "@/app/locales/en.json";

type LocaleMessages = Record<string, string>;
function getTranslation(id: string | undefined, locale: string = "es"): string {
  if (!id) return '';
  const messages = locale === "en" ? enLocale as LocaleMessages : esLocale as LocaleMessages;
  return messages[id] || id;
}

interface DetallePageCursoPageProps {
  params: Promise<{ slug: string }>; 
  searchParams?: Promise<{ locale?: string }>;
}

export async function generateMetadata({ params, searchParams }: DetallePageCursoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const awaitedSearchParams = await searchParams;
  const locale = awaitedSearchParams?.locale || "es";
  
  const curso = allCursos.find((c) => c.slug === slug);
  
  if (!curso) {
    return {
      title: locale === "en" ? "Course not found | Madryn Buceo" : "Curso no encontrado | Madryn Buceo",
      icons: {
        icon: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
        apple: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
      },
    };
  }
  
  const translatedTitle = getTranslation(curso.title, locale);
  const translatedDescription = getTranslation(curso.shortDescription, locale);
  
  return {
    title: `${translatedTitle} | Madryn Buceo`,
    description: translatedDescription,
    icons: {
      icon: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
      apple: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
    },
    openGraph: {
      title: `${translatedTitle} | Madryn Buceo`,
      description: translatedDescription,
      url: `https://madrynbuceo.com/cursos/padi/${slug}${locale === 'en' ? '?locale=en' : ''}`,
      siteName: "Madryn Buceo",
      locale: locale === "en" ? "en_US" : "es_AR",
      type: "website",
      images: [
        {
          url: curso.cardImage, 
          width: 1200, 
          height: 630,  
          alt: translatedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${translatedTitle} | Madryn Buceo`,
      description: translatedDescription,
      images: [curso.cardImage], 
    },
  };
}

export default async function DetalleCursoPage({ params }: DetallePageCursoPageProps) {
  const { slug } = await params;
  
  const curso = allCursos.find((c) => c.slug === slug);

  if (!curso) notFound();

  return <DetalleCursoClient curso={curso} />;
}