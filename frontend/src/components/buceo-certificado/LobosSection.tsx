"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonRojo from "../ui/button-rojo";
import { SeparatorHorizontal } from "lucide-react";

export default function DescriptionSection() {
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

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <div className="w-full grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold uppercase text-white mb-4 flex items-center gap-2"
              variants={fadeIn}
            >
              Buceo con Lobos Marinos
            </motion.h2>
            <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />
            <motion.p
              className="text-white/80 mb-1 leading-relaxed "
              variants={fadeIn}
            >
              Atrévete a vivir una experiencia única buceando con lobos marinos
              en su hábitat natural.
            </motion.p>
            <motion.p
              className="text-white/80 mb-1 leading-relaxed "
              variants={fadeIn}
            >
              Esta experiencia incluye un pintoresco paseo náutico de 20 km de
              navegación, hasta el área protegida de la Reserva Natural Punta
              Loma y está diseñada específicamente para buceadores certificados
              que desean bucear con lobos marinos.
            </motion.p>
            <motion.p
              className="text-white/80 mb-2 leading-relaxed "
              variants={fadeIn}
            >
              Dentro de la reserva también tenemos la opción de excursión
              Snorkeling con lobos.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 text-end"
              variants={fadeIn}
            >
              <ButtonRojo
                texto="Snorkeling con lobos"
                href="/excursiones/snorkeling-con-lobos"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[350px] w-full overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageAnimation}
          >
            <Image
              src="/images/buceo/buceoLobos.webp"
              alt="Buceo con Lobos Marinos"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
