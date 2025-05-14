"use client";

import { motion } from "framer-motion";
import { SeparatorHorizontal } from "lucide-react";
import Link from "next/link";
import ImageGallery from "../nosotros/ImageGallery";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function IntroSection() {
  const divingMedia: { type: "image" | "video"; url: string }[] = [
    { type: "image", url: "/images/buceo/descripcion.webp" },
    { type: "image", url: "/images/puntos/chino/chino.webp" },
    { type: "video", url: "/videos/puntos/mirages/mirages1.webm" },
    { type: "image", url: "/images/puntos/urabain/urabain.webp" },
    { type: "video", url: "/videos/puntos/folias/folias1.webm" },
  ];

  return (
    <motion.section
      className="mt-20 mb-10 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 inline-flex items-center relative uppercase">
              Viví una experiencia única
            </h2>

            <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />

            <p className="text-white/80 mb-4 leading-relaxed">
            Más de {" "}
              <span className="text-rojo font-semibold">
                6 naufragios
              </span>{" "}
              ideales para realizar exploraciones submarinas inolvidables.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              Sumérgete en{" "}
              <span className="text-rojo font-semibold">
                parques rocosos naturales
              </span>{" "}
              repletos de vida marina.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              Disfruta de{" "}
              <span className="text-rojo font-semibold">
                buceo con lobos marinos
              </span>{" "}
              en su hábitat natural, una experiencia única disponible todo el
              año.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              Descubre más de{" "}
              <Link
                href="/buceo/puntos-de-buceo"
                className="text-rojo font-semibold hover:underline"
              >
                12 sitios de buceo
              </Link>{" "}
              para todos los niveles.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              ¡No te pierdas la oportunidad de hacer{" "}
              <Link
                href="/excursiones/snorkeling-con-lobos"
                className="text-rojo font-semibold hover:underline"
              >
                snorkel con lobos marinos
              </Link>
              !{" "}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <ImageGallery
              media={divingMedia}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}