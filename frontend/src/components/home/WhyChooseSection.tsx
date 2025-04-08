"use client"

import type React from "react"

import { Anchor, Clock, Heart, SeparatorHorizontal, Shield, ThumbsUp, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <section className="py-12" ref={ref}>
      <div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white uppercase">¿Por qué elegirnos?</h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-12 prose-lg">
          Somos el centro de buceo más antiguo de la zona, con más de 40 años de experiencia en Puerto Madryn, la
          capital nacional del buceo. Combinamos la experiencia de dos generaciones, <strong>padre e hijo</strong>, para
          ofrecer experiencias de buceo y snorkeling excepcionales.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FeatureCard
            icon={<Clock className="h-10 w-10 text-[#e12222]" />}
            title="Experiencia y Trayectoria"
            description="Con más de cuatro décadas dedicadas al buceo en la región, somos líderes en el campo y conocemos los secretos del Golfo Nuevo como nadie más."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-[#e12222]" />}
            title="Atención Personalizada"
            description="Nuestro equipo comprometido se asegura de que cada cliente reciba atención personalizada, adaptándose a sus necesidades y habilidades."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-[#e12222]" />}
            title="Seguridad Garantizada"
            description="Nuestros protocolos de seguridad, experiencia y planificación son claves para asegurar que cada inmersión sea una experiencia segura y placentera."
          />
          <FeatureCard
            icon={<ThumbsUp className="h-10 w-10 text-[#e12222]" />}
            title="Reseñas que Hablan por Sí Mismas"
            description="Descubre por qué nuestros clientes nos eligen una y otra vez. Lee las reseñas y testimonios que reflejan la calidad y la excelencia de nuestras experiencias submarinas."
          />
          <FeatureCard
            icon={<Heart className="h-10 w-10 text-[#e12222]" />}
            title="Ambiente Cálido y Familiar"
            description="En nuestro centro, te sentirás como en casa desde el momento en que llegues. Nuestro ambiente acogedor y familiar es parte de lo que nos hace especiales."
          />
          <FeatureCard
            icon={<Anchor className="h-10 w-10 text-[#e12222]" />}
            title="Exploramos las Maravillas del Golfo Nuevo"
            description="Exploramos parques naturales, naufragios y la reserva de lobos marinos, ofreciendo experiencias únicas para todos los niveles, desde principiantes hasta Dive Masters."
          />
        </motion.div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-[#e12222] hover:bg-[#e12222]/60 text-white">
            <Link href="/reservar">¡Reserva ahora!</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={cardVariants}>
      <Card className="border-none shadow-md bg-card">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <SeparatorHorizontal className="w-24 h-1 bg-[#e12222] mb-2" />
          <p className="text-muted-foreground prose-p text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
