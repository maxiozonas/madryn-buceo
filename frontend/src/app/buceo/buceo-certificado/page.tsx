"use client";

import HeroSection from "@/components/buceo-certificado/HeroSection";
import IntroSection from "@/components/buceo-certificado/IntroSection";
import QueEsperarSection from "@/components/buceo-certificado/QueEsperarSection";
import LobosSection from "@/components/buceo-certificado/LobosSection";
import DescriptionSection from "@/components/buceo-certificado/DescriptionSection";
import PricingSection from "@/components/buceo-certificado/PricingSection";

export default function BuceoCapitalPage() {
  return (
    <main>
      <HeroSection title={"BUCEA EN PUERTO MADRYN"} heroImage={"/images/buceo/buceo.webp"} miniDescription={"Capital nacional del buceo"} />
      <IntroSection />
      <DescriptionSection />
      <QueEsperarSection />
      <LobosSection />
      <PricingSection />
    </main>
  );
}