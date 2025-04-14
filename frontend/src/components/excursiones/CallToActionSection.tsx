import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CallToActionSectionProps {
  callToAction: string;
  buttonText: string;
}

export default function CallToActionSection({ callToAction, buttonText }: CallToActionSectionProps) {
  return (
    <div
      id="reservar"
      className="bg-[#e12222] border border-[#e12222] rounded-xl p-8 text-center shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-white uppercase font-oceanica">Reserva tu experiencia</h2>
      <p className="text-white font-semibold mb-6 max-w-3xl mx-auto">{callToAction}</p>
      <Button
        asChild
        size="lg"
        className="bg-[#121113] text-white text-lg font-semibold"
      >
        <Link href="/reservar">{buttonText}</Link>
      </Button>
    </div>
  );
}