
import ButtonNegro from "../ui/button-negro";

interface CallToActionSectionProps {
  callToAction: string;
  buttonText: string;
}

export default function CallToActionSection({ callToAction, buttonText }: CallToActionSectionProps) {
  return (
    <div
      id="reservar"
      className="bg-rojo border border-rojo rounded-xl p-8 text-center shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-white uppercase font-oceanica">Reserva tu experiencia</h2>
      <p className="text-white font-semibold mb-6 max-w-3xl mx-auto">{callToAction}</p>
      <ButtonNegro texto={buttonText || "Reservar ahora"} href="/reservar" />
    </div>
  );
}