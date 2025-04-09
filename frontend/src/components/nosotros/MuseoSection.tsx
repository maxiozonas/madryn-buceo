import React from "react";
import Image from "next/image";

export function MuseoSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center">
        Staff
      </h2>
      <p className="text-lg text-center" style={{ color: "#ffffff" }}>
        Nuestro Staff está certificado en PADI y, además de bucear en Puerto
        Madryn, buceamos por todo el mundo.
      </p>
      <div className="relative mt-6 h-64 bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src="/images/nosotros/staff.JPG"
          alt="Staff"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
