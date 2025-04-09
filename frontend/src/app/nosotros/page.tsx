import React from "react";
import { IntroSection } from "@/components/nosotros/IntroSection";
import { HistorySection } from "@/components/nosotros/HistorySection";
import { MuseoSection } from "@/components/nosotros/MuseoSection";
import { LocalSection } from "@/components/nosotros/LocalSection";
import MapWrapper from "@/components/nosotros/MapWrapper";

export default function NosotrosPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto min-h-screen w-full space-y-16">
      <IntroSection />
      <LocalSection />
      <HistorySection />
      <MuseoSection />
      <MapWrapper />
    </main>
  );
}
