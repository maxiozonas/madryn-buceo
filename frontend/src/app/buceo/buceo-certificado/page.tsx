"use client";

import HeroSection from "@/components/buceo-certificado/HeroSection";
import DescriptionSection from "@/components/buceo-certificado/DescriptionSection";
import CardsSection from "@/components/buceo-certificado/CardsSection";

export default function BuceoCapitalPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <HeroSection />
      <DescriptionSection />
      <CardsSection />
    </main>
  );
}
