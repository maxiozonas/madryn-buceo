"use client";

import HeroSection from "@/components/buceo-certificado/HeroSection";
import DescriptionSection from "@/components/buceo-certificado/DescriptionSection";
import QueEsperarSection from "@/components/buceo-certificado/QueEsperarSection";
import LobosSection from "@/components/buceo-certificado/LobosSection";

export default function BuceoCapitalPage() {
  return (
    <main>
      <HeroSection title={"Vení a Puerto Madryn"} heroImage={"/images/buceo/buceo.webp"} miniDescription={"La capital nacional del buceo "} />
      <DescriptionSection />
      <QueEsperarSection />
      <LobosSection />
    </main>
  );
}