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
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="py-12" ref={ref}>
      <div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white uppercase tracking-wide shadow-md"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-12 prose-lg">
          Somos el centro de buceo más antiguo de la zona, con{" "}
          <span className="text-rojo font-bold">más de 40 años</span> de experiencia en{" "}
          <span className="text-rojo font-bold">Puerto Madryn</span>, la capital nacional del buceo. Combinamos la
          experiencia de dos generaciones, <span className="text-rojo font-bold">padre e hijo</span>, para ofrecer experiencias de buceo y
          snorkeling excepcionales.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FeatureCard
            icon={<Clock className="h-12 w-12 text-rojo" />}
            title="Experiencia y Trayectoria"
            description="Con más de cuatro décadas dedicadas al buceo en la región, somos líderes en el campo y conocemos los secretos del Golfo Nuevo como nadie más."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-rojo" />}
            title="Atención Personalizada"
            description="Nuestro equipo comprometido se asegura de que cada cliente reciba atención personalizada, adaptándose a sus necesidades y habilidades."
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-rojo" />}
            title="Seguridad Garantizada"
            description="Nuestros protocolos de seguridad, experiencia y planificación son claves para asegurar que cada inmersión sea una experiencia segura y placentera."
          />
          <FeatureCard
            icon={<ThumbsUp className="h-12 w-12 text-rojo" />}
            title="Reseñas que Hablan por Sí Mismas"
            description="Descubre por qué nuestros clientes nos eligen una y otra vez. Lee las reseñas y testimonios que reflejan la calidad y la excelencia de nuestras experiencias submarinas."
          />
          <FeatureCard
            icon={<Heart className="h-12 w-12 text-rojo" />}
            title="Ambiente Cálido y Familiar"
            description="En nuestro centro, te sentirás como en casa desde el momento en que llegues. Nuestro ambiente acogedor y familiar es parte de lo que nos hace especiales."
          />
          <FeatureCard
            icon={<Anchor className="h-12 w-12 text-rojo" />}
            title="Exploramos el Golfo Nuevo"
            description="Exploramos parques naturales, naufragios y la reserva de lobos marinos, ofreciendo experiencias únicas para todos los niveles, desde principiantes hasta Dive Masters."
          />
        </motion.div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-rojo hover:bg-rojo/50  text-white transition-all duration-300 text-lg font-semibold"
          >
            <Link href="/reservar">¡Sumérgete hoy!</Link>
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
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div variants={cardVariants} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
      <Card className="border-none shadow-md bg-card hover:shadow-xl transition-shadow">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <div className="mb-4 relative">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <SeparatorHorizontal className="w-24 h-1 bg-rojo mb-2 rounded-full" />
          <p className="text-muted-foreground prose-p text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}