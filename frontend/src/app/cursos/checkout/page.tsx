"use client";

import HeroSection from "@/components/cursos/checkout/HeroSection";
import DetallesSection from "@/components/cursos/checkout/DetallesSection";
import RequirementosSection from "@/components/cursos/checkout/RequerimentosSection";
import TableSection from "@/components/cursos/checkout/TableSection";
import { FormattedMessage } from "react-intl";

export default function CheckoutPage() {
  return (
    <>
      <HeroSection
        title={"Checkout"}
        heroImage={"/images/nosotros/terranova2.JPG"}
        miniDescription={<FormattedMessage id="checkout.subtitulo" />}
      />
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:col-span-7 space-y-6">
            <TableSection />
          </div>

          <DetallesSection />
          <RequirementosSection />
        </div>
      </section>
    </>
  );
}
