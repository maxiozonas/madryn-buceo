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
        heroImage="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/nosotros/terranovaa_lsleg4.webp"
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
