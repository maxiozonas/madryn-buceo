"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Anchor,
    Clock,
    Compass,
    LifeBuoy,
    Ship,
    Shield,
    Thermometer,
    Users,
    Waves,
    Calendar,
    Heart,
    Info,
    Camera,
} from "lucide-react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function BautismoSubmarino() {
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
            <LifeBuoy key="lifeBuoy" className="h-5 w-5 text-[#e12222]" />,
            <Heart key="heart" className="h-5 w-5 text-[#e12222]" />,
        ]
        return icons[index % icons.length]
    }

    const getExpectIcon = (index: number): ReactNode => {
        const icons = [
            <LifeBuoy key="lifeBuoy" className="h-6 w-6 text-[#e12222]" />,
            <Compass key="compass" className="h-6 w-6 text-[#e12222]" />,
            <Ship key="ship" className="h-6 w-6 text-[#e12222]" />,
            <Waves key="waves" className="h-6 w-6 text-[#e12222]" />,
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
        title: "Bautismo Submarino",
        description:
            "Descubre el fascinante mundo submarino con nuestro Bautismo de Buceo. Ideal para principiantes, esta actividad te permitirá experimentar la magia del buceo en un entorno seguro y controlado, guiado por nuestros instructores profesionales. A diferencia del <a href='/discover-scuba-diving' class='text-[#e12222] hover:underline'>Discover Scuba Diving</a>, esta actividad es completamente personalizada, ya que el instructor controla todo tu equipo, asegurando que te sientas cómodo y seguro en todo momento. Perfecta para aquellos que no se sienten tan seguros como para realizar el Discover Scuba Diving, este bautismo te ofrece una atención individualizada para que disfrutes al máximo de tu primera inmersión y de la asombrosa fauna y flora local.",
        details: [
            "Instructor personalizado: Atención individualizada para cada participante.",
            "Duración Total: 1 hora y 30 minutos, con 20 minutos dedicados a la práctica y la inmersión.",
            "Apto para todos: No necesitas experiencia previa y tampoco saber nadar.",
            "Descubre un mundo nuevo: Conoce la grandiosa diversidad marina que se encuentra en la Patagonia!",
        ],
        whatToExpect: [
            { title: "Equipamiento", description: "Te proporcionaremos el traje de neopreno en nuestro local antes de partir hacia el lugar de inmersión. El resto del equipo, incluyendo máscara, regulador y tanque, será proporcionado en el sitio de buceo." },
            { title: "Breve Introducción y Orientación", description: "Comenzamos con una explicación breve de las 3 cosas básicas que deberás realizar durante la experiencia, el resto se encargará tu instructor." },
            { title: "Sesión de Práctica en Superficie", description: "Realizarás una práctica en superficie para familiarizarte con el equipo y las técnicas de buceo." },
            { title: "Inmersión Guiada", description: "Nuestros instructores te llevarán a una inmersión controlada, donde el mismo se encargará del control del equipo mientras te centras en explorar el mundo submarino en compañía de peces, estrellas de mar, anémonas y otras maravillas del ecosistema marino." },
            { title: "Regreso y Despedida", description: "Al final de la experiencia, regresarás al centro de buceo, donde podrás compartir tus impresiones y recibir una breve evaluación de tu instructor." },
        ],
        requirements: [
            { title: "Edad Mínima", description: "La edad mínima para participar es de 8 años (consultar para más detalles)." },
            { title: "Condición Física", description: "En caso de ser mayor de 65 años, es necesario contar con un certificado médico." },
            { title: "Salud y Aptitud Física", description: "Es importante no tener afecciones cardíacas, problemas respiratorios u otras condiciones médicas que puedan presentar un riesgo durante la inmersión." },
        ],
        callToAction: "¿Listo para descubrir el mundo submarino? ¡Reserva tu bautismo de buceo ahora y comienza tu aventura subacuática con nosotros!",
        buttonText: "Reserva Ahora",
        heroImage: "/images/excursiones/snorkel/lobo-1.jpg",
        cardImage: "/images/excursiones/snorkel/lobo-1.jpg",
        galleryImages: [
            "/images/excursiones/snorkel/lobo-2.jpg",
            "/images/excursiones/snorkel/lobo-2.jpg",
            "/images/excursiones/snorkel/lobo-2.jpg",
            "/images/excursiones/snorkel/lobo-2.jpg",
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
                                                <p className="text-white/80 text-sm text-center prose-p">{req.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div id="reservar" className="bg-gradient-to-r from-[#e12222] to-[#ff4d4d] border border-[#e12222] rounded-xl p-8 text-center shadow-lg mb-16"
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
                                            alt={`Bautismo Submarino ${index + 1}`}
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