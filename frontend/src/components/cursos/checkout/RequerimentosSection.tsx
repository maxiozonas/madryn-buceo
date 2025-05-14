"use client";

import {
  ArrowRight,
  Calendar,
  Heart,
  Info,
  BookMarked,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function RequirementosSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const requirements = [
    {
      program: "Open Water",
      items: [
        {
          title: "Teoría y piscina",
          description: "Haber completado teoría y piscina (Referral).",
          icon: BookMarked,
        },
        {
          title: "Certificado médico",
          description: "Certificado médico apto ( < 12 meses ).",
          icon: Heart,
        },
        {
          title: "Edad mínima",
          description: "Edad mínima 10 años.",
          icon: Calendar,
        },
      ],
    },
    {
      program: "Advanced",
      items: [
        {
          title: "Certificación",
          description: "Certificación Open Water.",
          icon: BadgeCheck,
        },
        {
          title: "Certificado médico",
          description: "Certificado médico apto ( < 12 meses ).",
          icon: Heart,
        },
        {
          title: "eLearning",
          description: "Haber completado el eLearning Advanced (si aplica).",
          icon: Info,
        },
      ],
    },
  ];

  return (
    <motion.section
      className="mt-8 mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {requirements.map((program, programIndex) => (
            <Card
              key={programIndex}
              className="bg-negro-secundario shadow-md border-[#403d39] w-full hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <motion.h3
                    className="text-xl font-semibold text-white mb-4 flex items-center gap-2"
                    variants={fadeIn}
                  >
                    <ArrowRight className="h-6 w-6 text-rojo" />
                    Requisitos {program.program}
                  </motion.h3>
                  <div className="grid grid-cols-1 gap-4">
                    {program.items.map((req, reqIndex) => (
                      <motion.div
                        key={reqIndex}
                        className="bg-negro/40 p-6 rounded-lg hover:bg-negro/60 transition-colors duration-200 flex flex-col items-center text-center"
                        variants={fadeIn}
                        transition={{ delay: reqIndex * 0.1 }}
                      >
                        <div className="mb-4 bg-negro/60 p-4 rounded-full">
                          <req.icon className="h-6 w-6 text-rojo" />
                        </div>
                        <h4 className="font-bold text-white text-lg mb-2">
                          {req.title}
                        </h4>
                        <p className="text-white text-sm">{req.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
