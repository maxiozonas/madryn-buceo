"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  Clock,
  Calendar,
  Compass,
  Speech,
  LifeBuoy,
  Shield,
  Ship,
  Thermometer,
  BadgeCheck,
  HeartPulse,
} from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      className="mt-5 mb-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="bg-[#252422] rounded-xl p-3 lg:p-4 border border-[#403d39] shadow-lg box-border flex flex-col max-w-full mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-xl font-bold text-white font-oceanica mb-4 focus:outline-none hover:text-[#e12222] transition-colors"
        >
          <div className="flex items-center">
            {icon}
            <span className="ml-3 text-2xl">{title}</span>
          </div>
          <span className="text-[#e12222] text-2xl">{isOpen ? "−" : "+"}</span>
        </button>
        <div
          className={`space-y-4 transition-all duration-300 ease-in-out ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default function ExpectationsAndRequirements() {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col w-full">
          <CollapsibleSection
            title="¿Qué Esperar?"
            icon={<Compass className="h-6 w-6 text-[#e12222]" />}
          >
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                  <LifeBuoy className="h-6 w-6 text-[#e12222]" />
                </div>
                <div className="flex-1">
                <h2 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
                    Equipamiento
                  </h2>
                  <p className="text-white/80 text-sm text-center lg:text-start">
                    Te proporcionaremos todo el equipo necesario, incluyendo
                    traje de neopreno, máscara, aletas, chaleco compensador,
                    regulador y 1 tanque por cada buceo.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                  <Speech className="h-6 w-6 text-[#e12222]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                    Breve Introducción y Orientación
                  </h3>
                  <p className="text-white/80 text-sm text-center lg:text-start">
                    Comenzamos con una breve explicación de los aspectos básicos
                    del buceo y los protocolos de seguridad específicos para
                    cada punto de buceo.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                  <Ship className="h-6 w-6 text-[#e12222]" />
                </div>
                <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                    Paseo Náutico
                  </h3>
                  <p className="text-white/80 text-sm text-center lg:text-start">
                    Nuestros capitanes experimentados te llevarán al punto de
                    buceo y en el camino está la posibilidad de poder avistar
                    una increíble variedad de fauna marina, como pingüinos,
                    delfines y cormoranes, dependiendo de la época del año.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                  <Clock className="h-6 w-6 text-[#e12222]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                    Duración
                  </h3>
                  <p className="text-white/80 text-sm text-center lg:text-start">
                    La excursión completa dura aproximadamente 2 horas,
                    dependiendo de la cantidad de inmersiones que realices,
                    éstas pueden ser hasta 2 en un día
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                  <Anchor className="h-6 w-6 text-[#e12222]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                    Regreso y Despedida
                  </h3>
                  <p className="text-white/80 text-sm text-center lg:text-start">
                    Tras la inmersión, regresaremos al centro disfrutando del
                    entorno. Una vez allí, podrás comentar tus experiencias con
                    nuestro equipo y otros turistas, compartiendo recuerdos y
                    anécdotas de la aventura.
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        <div className="flex flex-col w-full">
          <CollapsibleSection
            title="Requisitos"
            icon={<Shield className="h-6 w-6 text-[#e12222]" />}
          >
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-[#e12222]/10 rounded-full">
                  <Calendar className="h-6 w-6 text-[#e12222]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white text-center mb-2">
                    Edad Mínima
                  </h3>
                  <p className="text-white/80 text-sm text-center">
                    La edad mínima para participar es de 12 años.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-[#e12222]/10 rounded-full">
                  <Thermometer className="h-6 w-6 text-[#e12222]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white text-center mb-2">
                    Condición Física
                  </h3>
                  <p className="text-white/80 text-sm text-center">
                    En caso de ser mayor de 65 años, contar con certificado
                    médico de buena salud.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-[#e12222]/10 rounded-full">
                  <BadgeCheck className="h-6 w-6 text-[#e12222]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white text-center mb-2">
                    Certificación
                  </h3>
                  <p className="text-white/80 text-sm text-center">
                    Se requiere certificación correspondiente según la
                    profundidad del punto de buceo
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-[#e12222]/10 rounded-full">
                  <HeartPulse className="h-6 w-6 text-[#e12222]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white text-center mb-2">
                    Salud y Aptitud Física
                  </h3>
                  <p className="text-white/80 text-sm text-center">
                    Es importante no tener enfermedades cardíacas u otras
                    condiciones médicas que puedan presentar problemas debido al
                    esfuerzo físico y el impacto con el agua fría.
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
}
