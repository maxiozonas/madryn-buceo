"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Anchor,
  Clock,
  Compass,
  LifeBuoy,
  Shield,
  Thermometer,
  Users,
  Calendar,
  Heart,
  Info,
  Camera,
} from "lucide-react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function PaseoNauticoDelfines() {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  }

  const getDetailIcon = (index: number): ReactNode => {
    const icons = [
      <Clock key="clock" className="h-5 w-5 text-[#e12222]" />,
      <Users key="users" className="h-5 w-5 text-[#e12222]" />,
      <Heart key="heart" className="h-5 w-5 text-[#e12222]" />,
    ]
    return icons[index % icons.length]
  }

  const getExpectIcon = (index: number): ReactNode => {
    const icons = [
      <LifeBuoy key="lifeBuoy" className="h-6 w-6 text-[#e12222]" />,
      <Compass key="compass" className="h-6 w-6 text-[#e12222]" />,
      <Anchor key="anchor" className="h-6 w-6 text-[#e12222]" />,
    ]
    return icons[index % icons.length]
  }

  const getRequirementIcon = (index: number): ReactNode => {
    const icons = [
      <Calendar key="calendar" className="h-6 w-6 text-[#e12222]" />,
      <Thermometer key="thermometer" className="h-6 w-6 text-[#e12222]" />,
      <Shield key="shield" className="h-6 w-6 text-[#e12222]" />,
    ]
    return icons[index % icons.length]
  }

  const excursion = {
    title: "Búsqueda de Delfines",
    description:
      "Embárcate en una aventura inolvidable en el Golfo Nuevo en busca de los fascinantes delfines oscuros. A bordo de nuestro bote semirrígido de 9 metros, vivirás una experiencia emocionante y altamente personalizada, con un máximo de 15 pasajeros. Nuestra embarcación parte directamente desde la playa en la magia del mar patagónico. Guiados por nuestros capitanes expertos, navegaremos hacia las áreas donde los delfines frecuentan. Estos animales, conocidos por su energía, acrobacias y curiosidad, suelen acercarse a las embarcaciones, ofreciendo un espectáculo natural inolvidable. En caso de no avistar delfines, el paseo se complementa con la visita a una reserva natural donde habitan lobos marinos y diversas especies de aves. Además, podrás admirar lugares icónicos como el Naufragio Folías, El Doradillo o Punta Cuevas. Perfecto para familias, amigos y aventureros individuales.",
    details: [
      "Duración Total: Aproximadamente 2 horas (puede extenderse según condiciones del mar y avistamientos).",
      "Apto para Todo Público.",
      "Máximo 15 pasajeros para una experiencia personalizada.",
    ],
    whatToExpect: [
      { title: "Equipamiento", description: "Nuestra embarcación está equipada con elementos de seguridad y chalecos salvavidas para todos los pasajeros." },
      { title: "Paseo Guiado", description: "Nos dirigimos a las aguas del Golfo Nuevo, donde nuestros guías bilingües te proporcionarán información sobre la diversa variedad de aves y fauna marina, además de recorrer lugares históricos y emblemáticos del lugar." },
      { title: "Regreso y Despedida", description: "Finalizamos nuestra travesía regresando a la costa, donde podrás compartir tus impresiones y recuerdos de esta maravillosa experiencia." },
    ],
    requirements: [
      { title: "Edad Mínima", description: "No tiene edad mínima. Los menores deben estar acompañados por un adulto." },
      { title: "Condición Física", description: "En caso de ser mayor de 65 años, se recomienda contar con certificado médico." },
      { title: "Salud y Aptitud Física", description: "Es importante no tener enfermedades cardíacas u otras condiciones que puedan verse afectadas por la navegación o el movimiento del mar." },
    ],
    callToAction: "¿Listo para vivir una aventura inolvidable en el mar? ¡Reserva tu paseo ahora y ven a descubrir la magia de los delfines oscuros en su hábitat natural!",
    buttonText: "Reserva Ahora",
    heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
    cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
    galleryImages: [
      "/images/excursiones/delfines/delfines-2.jpeg",
      "/images/excursiones/delfines/delfines-2.jpeg",
      "/images/excursiones/delfines/delfines-2.jpeg",
      "/images/excursiones/delfines/delfines-2.jpeg",
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={excursion.heroImage}
            alt={excursion.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {excursion.title}
          </motion.h1>
          <motion.p
            className="text-base md:text-2xl mb-8 font-oceanica"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Vive una experiencia inolvidable en las aguas de la Patagonia
          </motion.p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#e12222] to-[#ff4d4d] hover:scale-105 hover:shadow-lg text-white transition-all duration-300 text-lg font-semibold"
          >
            <Link href="#reservar">{excursion.buttonText}</Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container flex flex-col items-center justify-center px-8 mx-auto py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Descripcion y detalles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#252422] rounded-xl overflow-hidden shadow-lg border border-[#403d39]">
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4 text-white flex items-center uppercase font-oceanica">
                    <Info className="mr-3 h-6 w-6 text-[#e12222]" />
                    Descripción de la Experiencia
                  </h2>
                  <p className="text-white/80 leading-relaxed text-justify">{excursion.description}</p>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src={excursion.cardImage}
                    alt={excursion.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#252422] rounded-xl p-6 shadow-lg border border-[#403d39]">
                <h2 className="text-3xl font-bold mb-6 text-white text-center flex items-center justify-center uppercase font-oceanica">
                  <Anchor className="mr-3 h-6 w-6 text-[#e12222]" />
                  Detalles
                </h2>
                <div className="flex flex-col gap-4">
                  {excursion.details.map((detail, index) => (
                    <div
                      key={index}
                      className="bg-[#1a1917] border-l-4 infrequent border-[#e12222] p-4 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 p-2 bg-[#e12222]/10 rounded-full">{getDetailIcon(index)}</div>
                        <span className="text-white text-sm font-medium">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ¿Qué Esperar? */}
          <div className="mb-16">
            <div className="bg-[#252422] rounded-xl p-6 border border-[#403d39] shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
                <Compass className="mr-3 h-6 w-6 text-[#e12222]" />
                ¿Qué Esperar?
              </h2>
              <div className="space-y-4">
                {excursion.whatToExpect.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">{getExpectIcon(index)}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Requisitos */}
          <div className="mb-16">
            <div className="bg-[#252422] rounded-xl p-6 border border-[#403d39] shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
                <Shield className="mr-3 h-6 w-6 text-[#e12222]" />
                Requisitos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {excursion.requirements.map((req, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300 h-full"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-3 bg-[#e12222]/10 rounded-full">{getRequirementIcon(index)}</div>
                      <div>
                        <h3 className="font-semibold text-lg text-white text-center mb-2">{req.title}</h3>
                        <p className="text-white/80 text-sm text-center leading-relaxed">{req.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            id="reservar"
            className="bg-gradient-to-r from-[#e12222] to-[#ff4d4d] border border-[#e12222] rounded-xl p-8 text-center shadow-lg mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white uppercase font-oceanica">Reserva tu experiencia</h2>
            <p className="text-white/80 mb-6 max-w-3xl mx-auto">{excursion.callToAction}</p>
            <Button
              asChild
              size="lg"
              className="bg-[#121113] hover:scale-105 hover:shadow-lg text-white transition-all duration-300 text-lg font-semibold"
            >
              <Link href="/reservar">{excursion.buttonText}</Link>
            </Button>
          </div>

          {/* Galeria */}
          <div className="mb-16">
            <div className="bg-[#252422] rounded-xl p-6 border border-[#403d39] shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
                <Camera className="mr-3 h-6 w-6 text-[#e12222]" />
                Galería de Fotos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {excursion.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <Image
                      src={image}
                      alt={`Paseo Náutico Delfines ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}