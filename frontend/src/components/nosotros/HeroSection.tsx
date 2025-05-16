"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: ReactNode;
  heroImage: string;
  miniDescription: ReactNode;
}

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

export default function HeroSection({
  title,
  heroImage,
  miniDescription,
}: HeroSectionProps) {
  return (
    <>
      <section className="h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <Image
            src={heroImage}
            alt={""}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-0 bg-black/50" />
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
            {miniDescription}
          </motion.p>
        </div>
      </section>
    </>
  );
}
