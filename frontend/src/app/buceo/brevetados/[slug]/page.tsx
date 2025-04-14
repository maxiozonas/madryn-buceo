
import { notFound } from "next/navigation";
import { buceos } from "@/lib/data/brevetados";
import HeroSection from "@/components/buceos/HeroSection";
import DescripcionSection from "@/components/buceos/DescripcionSection";
import DetallesSection from "@/components/buceos/DetallesSection";
import QueEsperarSection from "@/components/buceos/QueEsperarSection";
import RequerimientosSection from "@/components/buceos/RequerimientosSection";
import CallToActionSection from "@/components/buceos/CallToActionSection";
import GaleriaSection from "@/components/buceos/GaleriaSection";


interface BuceoPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BuceoPage({ params }: BuceoPageProps) {
  const { slug } = await params;
  const buceo = buceos.find((exc) => exc.slug === slug);
  if (!buceo) notFound();

  return (
    <>
      <HeroSection
        title={buceo.title}
        heroImage={buceo.heroImage}
        buttonText={buceo.buttonText}
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-6">
              <DescripcionSection
                title={buceo.title}
                description={buceo.description}
                cardImage={buceo.cardImage}
              />
            </div>
            <div className="lg:col-span-5">
              <DetallesSection details={buceo.details} slug={slug}/>
            </div>
          </div>
          <div className="mb-16">
            <QueEsperarSection buceo={buceo} />
          </div>
          <div className="mb-16">
            <RequerimientosSection buceo={buceo} />
          </div>
          <CallToActionSection
            callToAction={buceo.callToAction}
            buttonText={buceo.buttonText}
          />
          <div className="mb-4 mt-16">
            <GaleriaSection
              galleryImages={buceo.galleryImages}
              title={buceo.title}
            />
          </div>
        </div>
      </section>
    </>
  );
}
