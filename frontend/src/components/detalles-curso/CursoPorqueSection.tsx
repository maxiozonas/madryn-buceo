import Image from "next/image";
import { FormattedMessage } from "react-intl";
export default function CursoPorqueSection() {

  const logo = "https://drive.google.com/uc?export=view&id=16CG2pJMJm8nXif2CVRnEBzoiZe0BZOK5";

  return (
    <div className="bg-negro-secundario rounded-xl shadow-lg p-6 border border-[#403d39] text-white">
      <h3 className="text-2xl font-bold mb-4">
        <FormattedMessage
          id={"porque.title"}
          defaultMessage={"¿Por qué certificarte con Madryn Buceo?"}
        />
      </h3>
      <p className="text-lg mb-6">
        <FormattedMessage
          id={"porque.texto"}
          defaultMessage={
            "Explora el fascinante mundo submarino en la impresionante Patagonia con nuestros cursos de buceo, diseñados para todos los niveles. Como centro de buceo PADI, garantizamos la más alta calidad de instrucción y seguridad. Descubre por qué Puerto Madryn es reconocido como la capital nacional del buceo, ofreciéndote una experiencia única en las aguas del Golfo Nuevo"
          }
        />
      </p>
      <div className="flex items-center justify-center mt-6">
        <Image
          src={logo}
          width={120}
          height={120}
          alt="PADI Certification"
          className="bg-white rounded-full p-2"
          priority
        />
        <div className="ml-6">
          <h4 className="text-sm font-semibold mb-2">
            {" "}
            <FormattedMessage
              id={"certi.padi"}
              defaultMessage={"Certificación PADI"}
            />
          </h4>
          <p className="text-xs text-white/80">
            <FormattedMessage
              id={"porque.padi"}
              defaultMessage={
                "PADI es la certificadora de buceo número 1 a nivel mundial, reconocida por su excelencia en formación y estándares de seguridad."
              }
            />
          </p>
        </div>
      </div>
    </div>
  );
}
