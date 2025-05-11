"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import ButtonRojo from "../ui/button-rojo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PricingSection() {
  const pricingOptions = [
    {
      option: "1 Buceo",
      cost: "$ 150000",
      reserveLink: "/reservas/1-buceo",
    },
    {
      option: "2 Buceos en un día",
      cost: "$ 220000",
      reserveLink: "/reservas/2-buceos",
    },
    {
      option: "1 Buceo con lobos",
      cost: "$ 230000",
      reserveLink:
        "https://madrynbuceo.outtrip.com/experiences/674f51e8752c8c796efc1f95/snorkel-con-lobos-marinos",
    },
    {
      option: "1 Buceo con lobos + 1 Buceo extra",
      cost: "$ 360000",
      reserveLink:
        "https://madrynbuceo.outtrip.com/experiences/67603b229c7fb90464e77a91/discover-con-lobos-marinos",
    },
    {
      option: "1 Buceo + Snorkeling con lobos",
      cost: "$ 250000",
      reserveLink: "/reservas/buceo-snorkeling",
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
      <div className="container mx-auto px-8">
        <Card className="bg-negro-secundario shadow-md border-[#403d39]">
          <CardContent className="p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-start gap-2">
            <ArrowRight className="h-8 w-8 text-rojo" />
              Opciones y Precios
            </h2>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm sm:text-base font-semibold border-b border-[#403d39] pb-2"></div>
              {pricingOptions.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b border-[#403d39] text-white/80 text-sm sm:text-base"
                >
                  <div className="text-center">{item.option}</div>
                  <div className="text-center">{item.cost}</div>
                  <div className="text-center w-full md:w-auto">
                    <ButtonRojo texto={"Reservar"} href={item.reserveLink} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
