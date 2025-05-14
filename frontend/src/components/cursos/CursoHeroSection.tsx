"use client";

import Image from "next/image";
import image from "../../../public/images/inicio/hero-image-2.jpg"


export default function HeroSection() {

  return (
    <>
      <section className="h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <Image
            src={image}
            alt="Local"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica"
          >
            Cursos PADI
          </h1>
          <p
            className="text-base md:text-2xl mb-8 font-oceanica"
          >
            Certifícate con nosotros y descubre un mundo de posibilidades bajo el agua.
          </p>
        </div>
      </section>
    </>
  );
}