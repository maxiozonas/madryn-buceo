"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section ref={ref} className="py-1 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AboutCard
            title="Nuestro Local"
            description="Nuestro local también funciona como museo. Allí podrán disfrutar de artículos encontrados en las profundidades del mar, hasta equipos históricos que se han utilizado a lo largo de los años en el buceo."
            videoSrc="/videos/local-web.mp4"
          />

          <AboutCard
            title="Nuestra Historia"
            description="Contamos con nuestra propia embarcación, equipos de buceo e indumentaria húmeda o seca, ideales para disfrutar del mar incluso en las frías aguas del invierno."
            imageSrc="/images/nosotros/terranova1.jpg"
          />

          <AboutCard
            title="Nuestro Staff"
            description="Nuestro Staff está certificado en PADI y, además de bucear en Puerto Madryn, buceamos por todo el mundo."
            imageSrc="/images/nosotros/staff.JPG"
          />
        </motion.div>
      </div>
      <div className="flex justify-center mt-7">
        <a
          href="#about"
          className="animate-bounce"
          aria-label="Bajar a sección siguiente"
          style={{color:"#ff4d4d"}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

function AboutCard({
  title,
  description,
  imageSrc,
  videoSrc,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
}) {
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
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Card className="bg-[#252422] text-white overflow-hidden border-none shadow-lg h-full">
        <CardHeader>
          <CardTitle className="text-lg text-center font-semibold" style={{color:"#ff4d4d"}}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent
          className="flex flex-col gap-4 text-sm"
          style={{ color: "#ffffff" }}
        >
          {imageSrc && (
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src={imageSrc} alt={title} fill className="object-cover" />
            </div>
          )}
          {videoSrc && (
            <div className="rounded-xl overflow-hidden">
              <video controls className="w-full h-48 object-cover">
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no admite la reproducción de video.
              </video>
            </div>
          )}
          <p className="text-white">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
