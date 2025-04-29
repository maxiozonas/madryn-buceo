"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/images/buceo/buceo.webp"
        alt="Puerto Madryn Buceo"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide shadow-md text-center mb-8">
          Puerto Madryn
          <br />
          Capital Nacional del Buceo
        </h1>
      </div>
    </div>
  );
}