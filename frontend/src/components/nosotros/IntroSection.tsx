import React from "react";
import Image from "next/image";

export function IntroSection() {
  return (
    <section className="py-7 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            Más de 30 años de experiencias submarinas
          </h1>
          <p className="text-lg leading-relaxed text-white">
            Somos una operadora familiar de buceo y snorkel, con más de tres
            décadas de trayectoria y certificaciones nacionales e
            internacionales en buceo y náutica. Dos generaciones compartiendo
            pasión por el mar, acompañándote a descubrir lo que esconde el Golfo
            Nuevo.
          </p>
        </div>
        <div className="hidden md:block relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/nosotros/staff.JPG"
            alt="Staff"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="#about" className="animate-bounce text-red-600" aria-label="Bajar a sección siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
