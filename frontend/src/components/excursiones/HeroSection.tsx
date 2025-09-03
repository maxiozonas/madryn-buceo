"use client";

import ButtonRojo from "../ui/button-rojo";
import { ChevronDown } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  heroImage: string;
  miniDescription: string;
  callToAction: { href: string };
  altText: string;
}

const scrollToNextSection = () => {
  const nextSection = document.getElementById("descripcion");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Element with ID 'descripcion' not found for scrolling.");
  }
};

export default function HeroSection({
  title,
  heroImage,
  miniDescription,
  callToAction,
  altText,
}: HeroSectionProps) {
  return (
    <>
      <motion.section
        className="h-[90vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <Image
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 z-0 bg-black/50" />
        </div>

        <span className="sr-only">
          <FormattedMessage id={altText} />
        </span>
        <div className="container mb-20 relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FormattedMessage id={title} />
          </motion.h1>
          <motion.p
            className="text-base md:text-2xl mb-8 font-oceanica"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FormattedMessage id={miniDescription} />
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <ButtonRojo
              texto={<FormattedMessage id="hero.button.bookNow" />}
              href={callToAction.href}
            />
          </motion.div>
        </div>
      </motion.section>
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          className="animate-bounce cursor-pointer bg-none flex flex-col items-center gap-2"
          onClick={scrollToNextSection}
        >
          <p className="text-white font-medium">
            <FormattedMessage id="hero.exploreMore" />
          </p>
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.button>
      </motion.div>
    </>
  );
}
