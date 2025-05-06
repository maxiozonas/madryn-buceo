"use client";

import { Card, CardContent } from "../ui/card";
import { ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DescriptionSection() {
  return (
    <motion.section
      className="mt-16 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-8 ">
        <Card className="bg-negro-secundario shadow-md border-[#403d39]">
          <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-white flex justify-center items-center gap-2">
              <ClipboardList className="h-6 w-6 text-rojo" />
              Descripción
            </h2>
            <ul className="flex flex-col justify-between h-full">
              <p className="text-white/80 mb-2 leading-relaxed">
                Descubrí las maravillas submarinas de Puerto Madryn, la Capital
                Nacional del Buceo. Este destino único te espera con
                experiencias exclusivas para buzos certificados, en un entorno
                natural inigualable.
              </p>

              <p className="text-white/80 mb-2 leading-relaxed">
                Sumérgete en aguas patagónicas y explora la biodiversidad
                marina, incluyendo encuentros cercanos con lobos marinos,
                naufragios históricos y formaciones rocosas impresionantes
                llenas de vida.
              </p>

              <p className="text-white/80 mb-2 leading-relaxed">
                Guiados por nuestros experimentados instructores, te ofrecemos
                una serie de inmersiones que van a desafiar y enriquecer tus
                habilidades de buceo, garantizando una aventura inolvidable.
                Recomendamos realizar al menos 4 inmersiones para disfrutar de
                todos nuestros atractivos
              </p>
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
