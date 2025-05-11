"use client";

import Image from "next/image";
import imagen from "../../../public/images/inicio/bautismo.jpg";
import logo from "../../../public/images/footer/pngwing.com(1).png"
import ButtonRojo from "../ui/button-rojo";
import ButtonNegro from "../ui/button-negro";
import { motion } from "framer-motion";

export default function PadiSection() {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const imageAnimation = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const logoAnimation = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-12 overflow-hidden">
            <div className="container flex flex-col items-center justify-center px-8 mx-auto">
                <motion.div 
                    className="mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white uppercase tracking-wide shadow-md">Cursos PADI</h2>
                    <p className="text-center text-white max-w-3xl mx-auto mb-12 prose-lg">
                        Certifícate con nosotros y descubre un mundo de posibilidades bajo el agua.
                    </p>
                </motion.div>
                <div className="w-full grid items-center gap-8 lg:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="flex sm:items-center gap-4 sm:justify-between mb-4"
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">Certifícate con Nosotros</h2>
                            <motion.div 
                                className="flex justify-start sm:justify-end"
                                variants={logoAnimation}
                            >
                                <Image 
                                    src={logo} 
                                    alt="Certificación PADI" 
                                    width={170} 
                                    height={60} 
                                    className="object-contain bg-white p-1 rounded" 
                                />
                            </motion.div>
                        </motion.div>
                        <motion.p 
                            className="mb-6 text-lg text-white/80 prose-2xl"
                            variants={fadeIn}
                        >
                            Como <span className="font-bold text-rojo">centro autorizado PADI</span>, ofrecemos una amplia gama de cursos de buceo para todos los niveles, desde principiantes hasta avanzados, y brindamos apoyo especializado a escuelas de buceo.
                        </motion.p>
                        <motion.p 
                            className="mb-6 text-lg text-white/80 prose-2xl"
                            variants={fadeIn}
                        >
                            Nuestro equipo de <span className="font-bold text-rojo">instructores certificados</span> te guiará paso a paso en tu formación, garantizando una experiencia segura, profesional y emocionante en cada inmersión.
                        </motion.p>
                        <motion.div 
                            className="flex flex-wrap gap-4 text-end"
                            variants={fadeIn}
                        >
                            <ButtonRojo texto="Ver cursos PADI" href="/cursos/padi" />
                            <ButtonNegro texto="Ver Checkout Escuelas" href="/cursos/checkout" />
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="relative h-[350px] w-full overflow-hidden rounded-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={imageAnimation}
                    >
                        <Image src={imagen} alt="Certificación PADI" fill className="object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}