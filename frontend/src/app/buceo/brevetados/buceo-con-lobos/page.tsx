"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Anchor,
  Clock,
  Compass,
  Leaf,
  Ship,
  Shield,
  Thermometer,
  Users,
  Waves,
  Calendar,
  Info,
  Camera,
  LifeBuoy,
  Binoculars,
  BadgeCheck,
  Shell,
} from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function BuceoConLobos() {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const getDetailIcon = (index: number): ReactNode => {
    const icons = [
      <Clock key="clock" className="h-5 w-5 text-[#e12222]" />,
      <Users key="users" className="h-5 w-5 text-[#e12222]" />,
      <Leaf key="leaf" className="h-5 w-5 text-[#e12222]" />,
      <Shell key="shell" className="h-5 w-5 text-[#e12222]" />,
      <Binoculars key="binoculars" className="h-5 w-5 text-[#e12222]" />,
    ];
    return icons[index % icons.length];
  };

  const getExpectIcon = (index: number): ReactNode => {
    const icons = [
      <LifeBuoy key="lifeBuoy" className="h-6 w-6 text-[#e12222]" />,
      <Compass key="compass" className="h-6 w-6 text-[#e12222]" />,
      <Ship key="ship" className="h-6 w-6 text-[#e12222]" />,
      <Waves key="waves" className="h-6 w-6 text-[#e12222]" />,
      <Anchor key="anchor" className="h-6 w-6 text-[#e12222]" />,
    ];
    return icons[index % icons.length];
  };

  const getRequirementIcon = (index: number): ReactNode => {
    const icons = [
      <Calendar key="calendar" className="h-6 w-6 text-[#e12222]" />,
      <BadgeCheck key="badge-check" className="h-6 w-6 text-[#e12222]" />,
      <Thermometer key="thermometer" className="h-6 w-6 text-[#e12222]" />,
      <Shield key="shield" className="h-6 w-6 text-[#e12222]" />,
    ];
    return icons[index % icons.length];
  };

  const excursion = {
    title: "Buceo con lobos",
    description:
      "Atrévete a vivir una experiencia única buceando con lobos marinos en su hábitat natural. Sumérgete en las aguas de la Patagonia y disfruta de la compañía de estos juguetones animales marinos. Guiado por nuestros instructores profesionales, podrás acercarte a estos curiosos lobos marinos y observar sus comportamientos de cerca. Esta experiencia incluye un pintoresco paseo náutico hasta el área protegida de la Reserva Natural Punta Loma y está diseñada específicamente para buceadores certificados que desean bucear con lobos marinos",
    details: [
      "Duración Total: Aproximadamente 3 horas.",
      "Instructores Profesionales: Acompañamiento de instructores experimentados para asegurar una experiencia segura y emocionante.",
      "Interacción Natural: Disfruta de la curiosidad natural de los lobos marinos mientras bucean y juegan a tu alrededor.",
      "Exploración del Hábitat: Bucea en la reserva protegida Punta Loma, conocida por su abundante fauna marina.",
      "Ideal para Buceadores Certificados: Perfecto para aquellos con certificación de buceo scuba diver(+12m) o superior",
    ],
    whatToExpect: [
      {
        title: "Equipamiento",
        description:
          "Te proporcionaremos todo el equipo necesario, incluyendo traje de neoprene, máscara, aletas y chaleco compensador",
      },
      {
        title: "Breve Introducción y Orientación",
        description:
          "Comenzamos con una breve explicación de los aspectos básicos del buceo y los protocolos de seguridad específicos para bucear con lobos marinos.",
      },
      {
        title: "Paseo Náutico",
        description:
          "Nuestros capitanes experimentados te llevarán en un paseo náutico hacia la reserva protegida Punta Loma. En el camino, podrás avistar una increíble variedad de fauna marina, como pingüinos, delfines y cormoranes, dependiendo de la época del año.",
      },
      {
        title: "Inmersión Guiada",
        description:
          "Nuestros guías te acompañarán durante la inmersión en Punta Loma, donde podrás interactuar de cerca con los lobos marinos en su entorno natural.",
      },
      {
        title: "Regreso y Despedida",
        description:
          "Tras la inmersión, regresaremos al centro disfrutando del entorno. Una vez allí, podrás comentar tus experiencias con nuestro equipo y otros turistas, compartiendo recuerdos y anécdotas de la aventura...",
      },
    ],
    requirements: [
      {
        title: "Edad Mínima",
        description:
          "La edad mínima para participar es de 12 años. (Consultar en caso de menores).",
      },
      {
        title: "Certificación de Buceo",
        description:
          "Se requiere certificación de buceo (Scuba Diver o equivalente).",
      },
      {
        title: "Condición Física",
        description:
          "En caso de ser mayor de 65 años, es necesario contar con un certificado médico.",
      },
      {
        title: "Salud y Aptitud Física",
        description:
          "Es importante no tener enfermedades cardíacas u otras condiciones médicas que puedan presentar problemas debido al esfuerzo físico y el impacto con el agua fría.",
      },
    ],
    callToAction:
      "¿Listo para vivir una experiencia única de buceo con lobos marinos? ¡Reserva tu aventura ahora y descubre la magia de estar cerca de estos increíbles animales!",
    buttonText: "Reserva Ahora",
    heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
    cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
    galleryImages: [
      "/images/excursiones/delfines/delfines-1.jpeg",
      "/images/excursiones/delfines/delfines-1.jpeg",
      "/images/excursiones/delfines/delfines-1.jpeg",
      "/images/excursiones/delfines/delfines-1.jpeg",
    ],
  };

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
          {/* Description and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#252422] rounded-xl overflow-hidden shadow-lg border border-[#403d39]">
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4 text-white flex items-center uppercase font-oceanica">
                    <Info className="mr-3 h-6 w-6 text-[#e12222]" />
                    Descripción de la Experiencia
                  </h2>
                  <p
                    className="text-white/80 leading-relaxed text-justify"
                    dangerouslySetInnerHTML={{ __html: excursion.description }}
                  />
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
                      className="bg-[#1a1917] border-l-4 border-[#e12222] p-4 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 p-2 bg-[#e12222]/10 rounded-full">
                          {getDetailIcon(index)}
                        </div>
                        <span className="text-white text-sm font-medium">
                          {detail}
                        </span>
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
                      <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">
                        {getExpectIcon(index)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {excursion.requirements.map((req, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1917] border-l-4 border-[#e12222] p-5 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300 h-full"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-3 bg-[#e12222]/10 rounded-full">
                        {getRequirementIcon(index)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white text-center mb-2">
                          {req.title}
                        </h3>
                        <p className="text-white/80 text-sm text-center prose-p">
                          {req.description}
                        </p>
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
            <h2 className="text-3xl font-bold mb-4 text-white uppercase font-oceanica">
              Reserva tu experiencia
            </h2>
            <p className="text-white/80 mb-6 max-w-3xl mx-auto">
              {excursion.callToAction}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#121113] hover:scale-105 hover:shadow-lg text-white transition-all duration-300 text-lg font-semibold"
            >
              <Link href="/reservar">{excursion.buttonText}</Link>
            </Button>
          </div>

          {/* Photo Gallery */}
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
                      alt={`Buceo Certificado ${index + 1}`}
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
  );
}
