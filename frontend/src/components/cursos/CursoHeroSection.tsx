"use client";

import Image from "next/image";
import { FormattedMessage } from "react-intl";


export default function HeroSection() {
  const image = "https://drive.google.com/uc?export=view&id=1f61rt5N-l9vWZ0rVazrtWLFNZe72rP9x"

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
            <FormattedMessage id="courses.padi.title" />
          </h1>
          <p
            className="text-base md:text-2xl mb-8 font-oceanica"
          >
            <FormattedMessage id="courses.padi.description" />
          </p>
        </div>
      </section>
    </>
  );
}