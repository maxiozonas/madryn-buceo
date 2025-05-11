"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";
import ImageGallery from "../diveSites/ImageGallery";
import Link from "next/link";

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

  const details = [
    {
      text: "Más de 6 naufragios ideales para realizar exploraciones submarinas inolvidables.",
      linkText: "6 naufragios",
      href: "/buceo/puntos-de-buceo",
    },
    {
      text: "Parques rocosos naturales repletos de vida.",
      linkText: "Parques rocosos naturales",
      href: "/buceo/puntos-de-buceo",
    },
    {
      text: "Buceo con lobos marinos en su hábitat natural todo el año.",
      linkText: "",
      href: "",
    },
    {
      text: "Más de 12 sitios de buceo para todos los niveles.",
      linkText: "12 sitios de buceo",
      href: "/buceo/puntos-de-buceo",
    },
  ];

  return (
    <motion.section
      className="mt-24 mb-10 relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-8">
        <Card className="bg-negro-secundario shadow-md border-[#403d39] hover:shadow-xl transition-shadow duration-300 h-full">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_57%] gap-8 lg:gap-12 items-stretch">
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 mt-0">
                  <ArrowRight className="h-8 w-8 text-rojo" />
                  Viví una experiencia única
                </h2>
                <ul className="flex flex-col justify-between mb-6">
                  {details.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-start mb-6"
                    >
                      <span className="text-rojo mr-2 font-bold">
                        <ChevronRight />
                      </span>
                      <span>
                        {item.text.split(item.linkText).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <Link
                                href={item.href}
                                className="text-rojo hover:underline"
                              >
                                {item.linkText}
                              </Link>
                            )}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold mb-6 text-white gap-1">
                  ¡ No te pierdas hacer{" "}
                  <Link href="/snorkel" className="text-rojo hover:underline transition-colors">
                    snorkel con lobos marinos
                  </Link>!
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl md:min-h-[500px]">
                <div className="relative h-full">
                  <ImageGallery
                    media={divingMedia}
                    className="h-56 md:h-[500px] w-full"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}