"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight, SeparatorHorizontal } from "lucide-react";
import Image from "next/image";

const items = [
    "Instructores con amplia experiencia en aguas patagónicas",
    "Grupos reducidos para atención personalizada",
    "Equipamiento de última generación",
    "Certificación internacional válida en todo el mundo",
    "Ubicación privilegiada con fauna marina excepcional",
]



const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function CursosIntroSection() {
    return (
        <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#121113]/70 to-transparent z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Buceo en Puerto Madryn"
                        className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-4 left-4 z-20 bg-[#1a1917]/80 backdrop-blur-sm p-3 rounded-lg border border-[#403d39]">
                        <div className="inline-flex items-center text-[#e12222] font-medium text-sm">
                            <Award className="w-4 h-4 mr-2" />
                            Centro PADI Oficial
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-[#e12222]/10 border border-[#e12222]/20">
                        <Award className="mr-2 h-4 w-4 text-[#e12222]" />
                        <span className="text-[#e12222] font-medium text-sm">Centro PADI Oficial</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 inline-flex items-center relative uppercase">
                        ¿Por qué certificarte con nosotros?
                    </h2>

                    <SeparatorHorizontal className="w-full h-1 bg-[#e12222] mb-2 rounded-full" />

                    <p className="text-white/80 mb-8 leading-relaxed">
                        Somos un centro PADI con más de 40 años de experiencia en la formación de buceadores. Nuestros
                        instructores certificados te guiarán en cada paso de tu formación, asegurando un aprendizaje seguro y
                        divertido en las fascinantes aguas de Puerto Madryn.
                    </p>

                    <motion.ul
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {items.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex bg-[#1a1917] border-l-4 border-[#e12222] p-4 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300"
                                variants={fadeIn}
                            >
                                <ChevronRight className="mr-3 h-5 w-5 text-[#e12222] flex-shrink-0 mt-0.5" />
                                <span className="text-white/90">{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.section>
    );
}