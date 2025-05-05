import React from "react";
import IntroSection from "@/components/nosotros/IntroSection";
import MapWrapper from "@/components/nosotros/MapWrapper";
import { AboutCardsSection } from "@/components/nosotros/AboutCardsSection";
import { SocialLinksSection } from "@/components/contacto/SocialLinksSection";

export default function NosotrosPage() {
  return (
    <main>
      <IntroSection
        title={"Sobre Nosotros"}
        heroImage={"/images/nosotros/intro.webp"}
        miniDescription={`Somos una operadora con más de 30 años, ofreciendo verdaderas experiencias de buceo y snorkel. Dos generaciones trabajando a la par, con Certificaciones Nacionales e Internacionales, tanto en buceo como en náutica.`}
      />
      <AboutCardsSection />
      <MapWrapper />
      <SocialLinksSection />
    </main>
  );
}
