"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Anchor,
  Clock,
  Calendar,
  Speech,
  LifeBuoy,
  Ship,
  Thermometer,
  BadgeCheck,
  HeartPulse,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-negro-secundario p-0 shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer flex justify-between items-center text-left font-bold text-2xl text-white hover:text-gray-200 transition-colors duration-200"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          {isOpen ? (
            <Minus className="h-7 w-7 text-rojo" />
          ) : (
            <Plus className="h-7 w-7 text-rojo" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-6"
            >
              <div className="space-y-4">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default function ExpectationsAndRequirements() {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col w-full">
          <CollapsibleSection
            title="¿Qué Esperar?"
            icon={<ArrowRight className="h-8 w-8 text-rojo" />}
          >
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <LifeBuoy className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  1. Equipamiento
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  Te proporcionaremos todo el equipo necesario, incluyendo traje de neopreno, máscara, aletas, chaleco compensador, regulador y 1 tanque por cada buceo.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <Speech className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  2. Breve Introducción y Orientación
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  Comenzamos con una breve explicación de los aspectos básicos del buceo y los protocolos de seguridad específicos para cada punto de buceo.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <Ship className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  3. Paseo Náutico
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  Nuestros capitanes experimentados te llevarán al punto de buceo y en el camino está la posibilidad de poder avistar una increíble variedad de fauna marina, como pingüinos, delfines y cormoranes, dependiendo de la época del año.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <Clock className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  4. Duración
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  La excursión completa dura aproximadamente 2 horas, dependiendo de la cantidad de inmersiones que realices, éstas pueden ser hasta 2 en un día.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <Anchor className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  5. Regreso y Despedida
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  Tras la inmersión, regresaremos al centro disfrutando del entorno. Una vez allí, podrás comentar tus experiencias con nuestro equipo y otros turistas, compartiendo recuerdos y anécdotas de la aventura.
                </p>
              </div>
            </motion.div>
          </CollapsibleSection>
        </div>

        <div className="flex flex-col w-full">
          <CollapsibleSection
            title="Requisitos"
            icon={<ArrowRight className="h-8 w-8 text-rojo" />}
          >
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <Calendar className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  1. Edad Mínima
                </h3>
                <p className="text-white/80 text-sm text-center negative-margin-top lg:text-start">
                  La edad mínima para participar es de 12 años.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <Thermometer className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  2. Condición Física
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  En caso de ser mayor de 65 años, contar con certificado médico de buena salud.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <BadgeCheck className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  3. Certificación
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  Se requiere certificación correspondiente según la profundidad del punto de buceo.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                <HeartPulse className="h-6 w-6 text-[#e12222]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white text-center lg:text-start mb-2">
                  4. Salud y Aptitud Física
                </h3>
                <p className="text-white/80 text-sm text-center lg:text-start">
                  Es importante no tener enfermedades cardíacas u otras condiciones médicas que puedan presentar problemas debido al esfuerzo físico y el impacto con el agua fría.
                </p>
              </div>
            </motion.div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
}