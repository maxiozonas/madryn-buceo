"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";  
import { ArrowRight } from "lucide-react";
import ButtonRojo from "@/components/ui/button-rojo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TableSection() {
  const divePrograms = [
    {
      program: "Open Water Check-out",
      dives: "4 inmersiones evaluadas",
      duration: "2 – 4 días (1-2 buceos/día)",
      target: "Alumnos que ya hicieron teoría + piscina",
      reserveLink: "/reservas/open-water-checkout",
    },
    {
      program: "Advanced Check-out (opcional)",
      dives: "5 inmersiones de aventura*",
      duration: "2 – 3 días",
      target: "Buzos Open Water que buscan el siguiente nivel",
      reserveLink: "/reservas/advanced-checkout",
    },
  ];

  return (
    <motion.section
      className="mt-16 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="relative bg-negro-secundario shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
        <Card className="bg-negro-secundario shadow-md border-[#403d39]">
          <CardContent className="p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-start gap-2">
              <ArrowRight className="h-8 w-8 text-rojo" />
              Modalidades disponibles
            </h2>
            <div className="overflow-x-auto">
              {divePrograms.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center py-4 border-b border-[#403d39] text-white/80 text-sm sm:text-base"
                >
                  <div className="text-center">{item.program}</div>
                  <div className="text-center">{item.dives}</div>
                  <div className="text-center">{item.duration}</div>
                  <div className="text-center">{item.target}</div>
                  <div className="text-center w-full md:w-auto">
                    <ButtonRojo texto={"Reservar"} href={item.reserveLink} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-sm mt-4">
              * Profundidad, Navegación Submarina y tres aventuras a elección (p. ej., Flotabilidad, Naufragio, Naturalista).
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}