"use client";

import React from "react";
import HeroSection from "@/components/nosotros/HeroSection";
import MapWrapper from "@/components/nosotros/MapWrapper";
import { AboutCardsSection } from "@/components/nosotros/AboutCardsSection";
import StaffCarousel from "@/components/nosotros/StaffCardCarousel";
import { staff } from "@/lib/data/Staff";
import { FormattedMessage } from "react-intl";

export default function NosotrosPage() {
  return (
    <main>
      <HeroSection
        title={<FormattedMessage id="about.us" defaultMessage="About Us" />}
        heroImage="/images/nosotros/intro.webp"
        miniDescription={
          <FormattedMessage id="about.us2" defaultMessage="Our Story" />
        }
      />
      <AboutCardsSection />
      <MapWrapper />
      <StaffCarousel staff={staff} />
    </main>
  );
}
