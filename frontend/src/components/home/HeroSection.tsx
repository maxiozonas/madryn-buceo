"use client"

import { ChevronDown } from "lucide-react"

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
      <section className="min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className="object-cover w-full h-full">
            <track kind="captions" srcLang="es" src="/videos/inicio/video1--optimizado.mp4" />
            <source src="/videos/inicio/video1--optimizado.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase font-oceanica">
            Bienvenido a tu próxima aventura
          </h1>
          <p className="text-base md:text-2xl mb-8 font-oceanica uppercase">
            Sumérgete en una experiencia en la Patagonia
          </p>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-6">
        <button className="animate-bounce cursor-pointer bg-none flex flex-col items-center gap-2" onClick={scrollToNextSection}>
          <p className="text-white font-medium">Explora más</p>
          <ChevronDown className="h-10 w-10 text-white" />
        </button>
      </div>
    </>

  )
}
