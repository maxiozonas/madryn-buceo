"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  heroImage: string;
  buttonText: string;
}

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

export default function HeroSection({ title, heroImage, buttonText }: HeroSectionProps) {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
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
          {title}
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
          className="bg-[#e12222] hover:bg-[#e12222]/80 text-white transition-all duration-300 text-lg font-semibold"
        >
          <Link href="#reservar">{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}