"use client";

import HeroSection from "@/components/buceo-certificado/HeroSection";
import IntroSection from "@/components/buceo-certificado/IntroSection";
import QueEsperarSection from "@/components/buceo-certificado/QueEsperarSection";
import RequerimientosSection from "@/components/buceo-certificado/RequerimientosSection";
import LobosSection from "@/components/buceo-certificado/LobosSection";
import DescriptionSection from "@/components/buceo-certificado/DescriptionSection";
import PricingSection from "@/components/buceo-certificado/PricingSection";

export default function BuceoCapitalPage() {
  return (
    <main>
      <HeroSection title={"BUCEA EN PUERTO MADRYN"} heroImage={"https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/buceo/G0123167_ui3btj.jpg"} miniDescription={"Capital nacional del buceo"} />
      <IntroSection />
      <DescriptionSection />
      <div className="container mx-auto px-8">
        <QueEsperarSection />
        <RequerimientosSection />
      </div>
      <LobosSection />
      <PricingSection />
    </main>
  );
}