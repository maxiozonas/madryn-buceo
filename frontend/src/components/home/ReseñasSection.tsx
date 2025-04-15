"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import googleLogo from "../../../public/images/inicio/google.png"
import { Reseña } from "@/lib/types/reseñas"
import { Button } from "../ui/button"

export default function ReseñasSection() {
  // Ejemplo de reseñas (en un futuro se integrarían con Google Reviews) PREGUNTAR????
  const reseña: Reseña[] = [
    {
      id: 1,
      name: "María González",
      rating: 5,
      text: "¡Experiencia increíble! El equipo de Madryn Buceo es muy profesional y la experiencia de bucear con lobos marinos fue inolvidable.",
      date: "Marzo 2023",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Juan Pérez",
      rating: 5,
      text: "Mi primer bautismo de buceo y no pudo haber sido mejor. Los instructores son muy pacientes y te hacen sentir seguro en todo momento.",
      date: "Febrero 2023",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Laura Martínez",
      rating: 5,
      text: "Hice el curso Open Water y la experiencia fue excelente. Muy recomendable para quienes quieren certificarse.",
      date: "Enero 2023",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <section className="py-12 bg-negro-secundario">
      <div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 uppercase font-oceanica tracking-wide shadow-md">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-12">
          Descubre por qué somos el <span className="text-rojo font-bold">centro de buceo mejor valorado</span> en Puerto Madryn
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reseña.map((review, index) => (
            <ReseñaCard key={review.id} review={review} index={index} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Button
            className="bg-white hover:scale-105 hover:shadow-lg hover:bg-white text-black transition-all duration-300 text-lg font-semibold cursor-pointer"
          >
            <Image src={googleLogo} alt="Google" width={24} height={24} />
            Ver todas las reseñas en Google
          </Button>
        </div>
      </div>
    </section>
  )
}

function ReseñaCard({ review, index }: { review: Reseña; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="border-none shadow-lg bg-white text-[#252422]">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-medium">{review.name}</h4>
              <p className="text-xs">{review.date}</p>
            </div>
          </div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
              />
            ))}
          </div>
          <p className="text-[#252422] text-sm">{review.text}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
