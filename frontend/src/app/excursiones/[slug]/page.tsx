
import { notFound } from "next/navigation";
import { excursiones } from "@/lib/data/Excursiones";
import HeroSection from "@/components/excursiones/HeroSection";
import DescripcionSection from "@/components/excursiones/DescripcionSection";
import DetallesSection from "@/components/excursiones/DetallesSection";
import QueEsperarSection from "@/components/excursiones/QueEsperarSection";
import RequerimientosSection from "@/components/excursiones/RequerimientosSection";
import CallToActionSection from "@/components/excursiones/CallToActionSection";
import GaleriaSection from "@/components/excursiones/GaleriaSection";
import OtrasExcursioesSection from "@/components/excursiones/OtrasExcursioesSection";


interface ExcursionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExcursionPage({ params }: ExcursionPageProps) {
  const { slug } = await params;
  const excursion = excursiones.find((exc) => exc.slug === slug);
  if (!excursion) notFound();

  return (
    <>
      <HeroSection
        title={excursion.title}
        heroImage={excursion.heroImage}
        miniDescription={excursion.miniDescription}
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
          <div className="mb-16">
            <QueEsperarSection excursion={excursion} />
          </div>
          <CallToActionSection
            callToAction={excursion.callToAction}
            buttonText={excursion.buttonText}
          />
          <div className="mb-4 mt-16">
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

