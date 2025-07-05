"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FormattedMessage } from "react-intl"

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('actividades');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Element with ID 'next-section-id' not found for scrolling.");
    }
  }

  return (
    <>
      <motion.section 
        className="min-h-[90vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className="object-cover w-full h-full">
            <track kind="captions" srcLang="es" src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/videos/inicio/video1--optimizado_ope7xh.mp4" />
            <source src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/videos/inicio/video1--optimizado_ope7xh.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase font-oceanica"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FormattedMessage id="home.hero.title" />
          </motion.h1>
          <motion.p 
            className="text-base md:text-2xl mb-8 font-oceanica uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FormattedMessage id="home.hero.description" />
          </motion.p>
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
          <motion.p 
            className="text-white font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FormattedMessage id="home.hero.exploreMore" />
          </motion.p>
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.button>
      </motion.div>
    </>
  )
}
