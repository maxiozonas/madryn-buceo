import { Metadata } from "next";
import { notFound } from "next/navigation";
import { excursiones } from "@/lib/data/Excursiones";
import HeroSection from "@/components/excursiones/HeroSection";
import DescripcionSection from "@/components/excursiones/DescripcionSection";
import DetallesSection from "@/components/excursiones/DetallesSection";
import QueEsperarSection from "@/components/excursiones/QueEsperarSection";
import RequerimientosSection from "@/components/excursiones/RequerimientosSection";
import CallToActionSection from "@/components/excursiones/CallToActionSection";
import GaleriaSection from "@/components/excursiones/GaleriaSection";
import OtrasExcursioesSection from "@/components/excursiones/OtrasExcursionesSection";

import esLocale from "@/app/locales/es.json";
import enLocale from "@/app/locales/en.json";

type LocaleMessages = Record<string, string>;
function getTranslation(id: string, locale: string = "es") {
  const messages = locale === "en" ? enLocale as LocaleMessages : esLocale as LocaleMessages;
  return messages[id] || id;
}

interface ExcursionPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: { locale?: string };
}

export async function generateMetadata({ params, searchParams }: ExcursionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = searchParams?.locale || "es";
  
  const excursion = excursiones.find((exc) => exc.slug === slug);
  
  if (!excursion) {
    return {
      title: locale === "en" ? "Excursion not found | Madryn Buceo" : "Excursión no encontrada | Madryn Buceo",
      icons: {
        icon: "/images/inicio/logo.png",
        apple: "/images/inicio/logo.png",
      },
    };
  }
  
  const translatedTitle = getTranslation(excursion.title, locale);
  const translatedDescription = getTranslation(excursion.miniDescription, locale);
  
  return {
    title: `${translatedTitle} | Madryn Buceo`,
    description: translatedDescription,
    icons: {
      icon: "/images/inicio/logo.png",
      apple: "/images/inicio/logo.png",
    },
    openGraph: {
      title: `${translatedTitle} | Madryn Buceo`,
      description: translatedDescription,
      url: `https://madrynbuceo.com/excursiones/${slug}`,
      siteName: "Madryn Buceo",
      locale: locale === "en" ? "en_US" : "es_AR",
      type: "website",
      images: [
        {
          url: excursion.heroImage,
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
      images: [excursion.heroImage],
    },
  };
}

export default async function ExcursionPage({ params, searchParams }: ExcursionPageProps) {
  const { slug } = await params;
  const excursion = excursiones.find((exc) => exc.slug === slug);
  if (!excursion) notFound();

  return (
    <>
<HeroSection
        title={excursion.title}
        heroImage={excursion.heroImage}
        miniDescription={excursion.miniDescription}
        callToAction={excursion.callToAction[0]}
        altText={`${excursion.title}`}
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:col-span-7 space-y-6">
            <DescripcionSection
              slug={excursion.slug}
              description={excursion.description}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <DetallesSection details={excursion.details} />
            <RequerimientosSection excursion={excursion} />
          </div>

          <div className="mb-12 mt-12">
            <QueEsperarSection excursion={excursion} />
          </div>

          <div className="mb-12 mt-12">
            <CallToActionSection
              callToAction={excursion.callToAction[0]}
              buttonText={excursion.buttonText}
            />
          </div>

          <div className="mb-12 mt-12">
            <GaleriaSection
              galleryImages={excursion.galleryImages}
              title={excursion.title}
            />
          </div>
        </div>
      </section>

      <OtrasExcursioesSection excursion={excursion} />

    </>
  );
}

