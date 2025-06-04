"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import ButtonRojo from "@/components/ui/button-rojo";
import { FormattedMessage } from "react-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TableSection() {
  const divePrograms = [
    {
      program: "tableSection.program.openWater",
      dives: "tableSection.dives.openWater",
      duration: "tableSection.duration.openWater",
      target: "tableSection.target.openWater",
      reserveLink: "/reservas/open-water-checkout",
    },
    {
      program: "tableSection.program.advanced",
      dives: "tableSection.dives.advanced",
      duration: "tableSection.duration.advanced",
      target: "tableSection.target.advanced",
      reserveLink: "/reservas/advanced-checkout",
    },
  ];

  return (
    <motion.section
      className="mt-16 mb-8"
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
              <FormattedMessage
                id="tableSection.title"
                defaultMessage="Available Modalities"
              />
            </h2>
            <div className="overflow-x-auto">
              {divePrograms.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center py-4 border-b border-[#403d39] text-white/80 text-sm sm:text-base"
                >
                  <div className="text-center">
                    <FormattedMessage id={item.program} defaultMessage="Program" />
                  </div>
                  <div className="text-center">
                    <FormattedMessage id={item.dives} defaultMessage="Dives" />
                  </div>
                  <div className="text-center">
                    <FormattedMessage id={item.duration} defaultMessage="Duration" />
                  </div>
                  <div className="text-center">
                    <FormattedMessage id={item.target} defaultMessage="Target" />
                  </div>
                  <div className="text-center w-full md:w-auto">
                    <ButtonRojo
                      texto={
                        <FormattedMessage
                          id="tableSection.button.reserve"
                          defaultMessage="Reserve"
                        />
                      }
                      href="/contacto"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-sm mt-4">
              <FormattedMessage
                id="tableSection.note"
                defaultMessage="* Deep, Underwater Navigation, and three adventure dives of your choice (e.g., Buoyancy, Wreck, Naturalist)."
              />
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}