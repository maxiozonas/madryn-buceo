import React from "react";
import { IntroSection } from "@/components/nosotros/IntroSection";
import MapWrapper from "@/components/nosotros/MapWrapper";
import { AboutCardsSection } from "@/components/nosotros/AboutCardsSection";
import { SocialLinksSection } from "@/components/contacto/SocialLinksSection";

export default function NosotrosPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto min-h-screen w-full space-y-10">
      <IntroSection />
      <AboutCardsSection/>
      <MapWrapper />
      <SocialLinksSection />
    </main>
  );
}
