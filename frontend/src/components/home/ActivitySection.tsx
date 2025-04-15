"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ActivitySection() {
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
    <section
      className="py-20"
      id="activities"
      ref={ref}
    >
      <motion.div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 uppercase font-oceanica tracking-wide shadow-md"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Nuestras Actividades
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ActivityCard
            title="Snorkeling con Lobos"
            description="Vive la experiencia única de nadar junto a los lobos marinos en su hábitat natural."
            image="/images/inicio/lobos.jpg"
            link="/excursiones/snorkeling-con-lobos"
          />
          <ActivityCard
            title="Bautismo de Buceo"
            description="Anímate a descubrir el mundo submarino y sumérgete en la aventura con nosotros."
            image="/images/inicio/bautismo.jpg"
            link="/excursiones/bautismo-de-buceo"
          />
          <ActivityCard
            title="Búsqueda de Delfines"
            description="Disfruta de un paseo por el mar en busca de delfines y otras especies marinas."
            image="/images/inicio/delfines.jpeg"
            link="/excursiones/paseo-nautico-delfines"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function ActivityCard({
  title,
  description,
  image,
  link,
}: {
  title: string
  description: string
  image: string
  link: string
}) {
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
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <Card className="overflow-hidden p-2 border-none shadow-lg bg-negro-secundario hover:shadow-xl transition-shadow">
        <div className="relative h-64">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110 rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
        </div>
        <CardContent className="p-4 flex flex-col items-center text-center text-white relative">
          <h3 className="text-lg uppercase font-extrabold mb-2 text-white font-oceanica tracking-tight">
            {title}
          </h3>
          <p className="text-white/80 mb-4 text-sm">{description}</p>
          <Button
            asChild
            className="w-full bg-rojo hover:bg-rojo/50  text-white transition-all duration-300 text-lg font-semibold"
          >
            <Link href={link}>Ver más</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}