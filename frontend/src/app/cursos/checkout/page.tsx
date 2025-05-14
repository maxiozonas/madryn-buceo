"use client";

import HeroSection from "@/components/cursos/checkout/HeroSection";
import DetallesSection from "@/components/cursos/checkout/DetallesSection";
import RequirementosSection from "@/components/cursos/checkout/RequerimentosSection";
import TableSection from "@/components/cursos/checkout/TableSection";

export default function CheckoutPage() {
  return (
    <>
      <HeroSection
        title={"Check-out - Pruebas de Aguas Abiertas"}
        heroImage={"/images/nosotros/terranova2.JPG"}
        miniDescription={
          "Completá tu certificación PADI en la Patagonia. Entrenamiento real, paisajes submarinos únicos y tu credencial digital lista apenas apruebes."
        }
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:col-span-7 space-y-6">
            <TableSection />
          </div>

              <DetallesSection />
              <RequirementosSection />
        </div>
      </section>
    </>
  );
}