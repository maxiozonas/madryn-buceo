"use client"

import ButtonNegro from "@/components/ui/button-negro"
import { motion } from "framer-motion"

interface CallToActionSectionProps {
  callToAction: string
  buttonText: string
}

export default function CallToActionSection({ callToAction, buttonText }: CallToActionSectionProps) {
  return (
    <motion.div
      id="reservar"
      className="bg-rojo border border-rojo rounded-xl p-8 text-center shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white uppercase">Reserva tu experiencia</h2>
      <p className="text-white font-semibold mb-6 max-w-3xl mx-auto">{callToAction}</p>
      <ButtonNegro texto={buttonText || "Reservar ahora"} href="/reservar" />
    </motion.div>
  )
}
