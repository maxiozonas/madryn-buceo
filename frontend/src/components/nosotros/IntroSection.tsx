"use client"

import React from "react"
import { motion } from "framer-motion"

export function IntroSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      className="text-center"
      variants={sectionVariants}
    >
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-white uppercase tracking-wide shadow-md"
      >
        Sobre Nosotros
      </h1>
      <p className="text-lg text-white max-w-3xl mx-auto">
        Somos una operadora con{" "}
        <span className="text-[#ff4d4d] font-bold">más de 30 años</span>, ofreciendo verdaderas experiencias de buceo y snorkel. Dos generaciones trabajando a la par, con{" "}
        <span className="text-[#ff4d4d] font-bold">Certificaciones Nacionales e Internacionales</span>, tanto en buceo como en náutica.
      </p>
    </motion.section>
  )
}
