import React from "react";
import { ContactFormSection } from "@/components/contacto/ContactFormSection";
import { SocialLinksSection } from "@/components/contacto/SocialLinksSection";

export default function ContactPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto space-y-16">
      <ContactFormSection />
      <SocialLinksSection />
    </main>
  );
}
