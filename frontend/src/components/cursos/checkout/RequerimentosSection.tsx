"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Heart, Info, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function RequirementosSection() {
  const [openSections, setOpenSections] = useState<Record<"OpenWater" | "Advanced", boolean>>({ OpenWater: false, Advanced: false });

  const toggleSection = (program: "OpenWater" | "Advanced") => {
    setOpenSections((prev) => ({
      ...prev,
      [program]: !prev[program],
    }));
  };

  const requirements = [
    {
      program: "Open Water",
      items: [
        {
          title: "Teoría y piscina",
          description: "Haber completado teoría y piscina (Referral).",
        },
        {
          title: "Certificado médico",
          description: "Certificado médico apto (< 12 meses).",
        },
        {
          title: "Edad mínima",
          description: "Edad mínima 10 años.",
        },
      ],
    },
    {
      program: "Advanced",
      items: [
        {
          title: "Certificación",
          description: "Certificación Open Water.",
        },
        {
          title: "eLearning",
          description: "Haber completado el eLearning Advanced (si aplica).",
        },
        {
          title: "Certificado médico",
          description: "Certificado médico apto (< 12 meses).",
        },
      ],
    },
  ];

  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("edad")) {
      return <Calendar className="h-6 w-6 text-rojo" />;
    } else if (lowerTitle.includes("salud") || lowerTitle.includes("certificado médico")) {
      return <Heart className="h-6 w-6 text-rojo" />;
    } else {
      return <Info className="h-6 w-6 text-rojo" />;
    }
  };

  return (
    <Card className="bg-negro-secundario shadow-md border-[#403d39] hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ArrowRight className="h-8 w-8 text-rojo" />
          Requisitos
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {requirements.map((program, programIndex) => (
            <div key={programIndex} className="space-y-4">
              <button
                onClick={() => toggleSection(program.program.replace(" ", "") as "OpenWater" | "Advanced")}
                className="w-full flex items-center justify-between text-xl font-semibold text-white bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              >
                <span>{program.program}</span>
                {openSections[program.program.replace(" ", "") as "OpenWater" | "Advanced"] ? (
                  <ChevronUp className="h-6 w-6 text-rojo" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-rojo" />
                )}
              </button>
              <AnimatePresence>
                {openSections[program.program.replace(" ", "") as "OpenWater" | "Advanced"] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.items.map((req, reqIndex) => (
                        <motion.div
                          key={reqIndex}
                          className="bg-negro/40 p-6 rounded-lg hover:bg-negro/60 transition-colors duration-200 flex flex-col items-center text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reqIndex * 0.1 }}
                        >
                          <div className="mb-4 bg-negro/60 p-4 rounded-full">{getIcon(req.title)}</div>
                          <h4 className="font-bold text-white text-lg mb-2">{req.title}</h4>
                          <p className="text-white text-sm">{req.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}