import Image from "next/image";
import imagen from "../../../public/images/footer/pngwing.com.png";
export default function CursoPorqueSection() {
  return (
    <div className="bg-negro-secundario rounded-xl shadow-lg p-6 border border-[#403d39] text-white">
      <h3 className="text-2xl font-bold mb-4">¿Por qué certificarte con Madryn Buceo?</h3>
      <p className="text-lg mb-6">
        Explora el fascinante mundo submarino en la impresionante Patagonia con nuestros cursos de buceo,
        diseñados para todos los niveles. Como centro de buceo PADI, garantizamos la más alta calidad de
        instrucción y seguridad. Descubre por qué Puerto Madryn es reconocido como la capital nacional del
        buceo, ofreciéndote una experiencia única en las aguas del Golfo Nuevo.
      </p>
      <div className="flex items-center justify-center mt-6">
        <Image
          src={imagen}
          width={70}
          height={50}
          alt="PADI Certification"
        />
        <div className="ml-6">
          <h4 className="font-semibold mb-2">Certificación PADI</h4>
          <p className="text-sm text-white/80">
            PADI es la certificadora de buceo número 1 a nivel mundial, reconocida por su excelencia
            en formación y estándares de seguridad.
          </p>
        </div>
      </div>
    </div>
  );
}