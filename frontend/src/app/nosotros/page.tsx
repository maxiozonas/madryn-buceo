import React from "react";
import HeroSection from "@/components/nosotros/HeroSection";
import MapWrapper from "@/components/nosotros/MapWrapper";
import { AboutCardsSection } from "@/components/nosotros/AboutCardsSection";
import { SocialLinksSection } from "@/components/contacto/SocialLinksSection";
import StaffCarousel from "@/components/nosotros/StaffCardCarousel";
import { staff } from "@/lib/data/Staff";

export default function NosotrosPage() {
  return (
    <main>
      <HeroSection
        title={"Sobre Nosotros"}
        heroImage={"/images/nosotros/intro.webp"}
        miniDescription={`Somos una operadora con más de 30 años, ofreciendo verdaderas experiencias de buceo y snorkel.`}
      />
      <AboutCardsSection />
      <MapWrapper />
      <StaffCarousel staff={staff} />
      <SocialLinksSection />
    </main>
  );
}