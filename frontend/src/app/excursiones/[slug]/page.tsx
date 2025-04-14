
import { notFound } from "next/navigation";
import { excursiones } from "@/lib/data/Excursiones";
import HeroSection from "@/components/excursiones/HeroSection";
import DescripcionSection from "@/components/excursiones/DescripcionSection";
import DetallesSection from "@/components/excursiones/DetallesSection";
import QueEsperarSection from "@/components/excursiones/QueEsperarSection";
import RequerimientosSection from "@/components/excursiones/RequerimientosSection";
import CallToActionSection from "@/components/excursiones/CallToActionSection";
import GaleriaSection from "@/components/excursiones/GaleriaSection";


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
        buttonText={excursion.buttonText}
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-6">
              <DescripcionSection
                title={excursion.title}
                description={excursion.description}
                cardImage={excursion.cardImage}
              />
            </div>
            <div className="lg:col-span-5">
              <DetallesSection details={excursion.details} />
            </div>
          </div>
          <div className="mb-16">
            <QueEsperarSection excursion={excursion} />
          </div>
          <div className="mb-16">
            <RequerimientosSection excursion={excursion} />
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
    </>
  );
}

