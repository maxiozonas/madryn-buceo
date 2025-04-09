import Image from "next/image";
import React from "react";

export function HistorySection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center">
        Equipo y Embarcación
      </h2>
      <p className="text-lg mb-6 text-center" style={{ color: "#ffffff" }}>
        Contamos con nuestra propia embarcación, equipos de buceo e indumentaria
        húmeda o seca, para las temperaturas frías del invierno.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative h-64 rounded-xl overflow-hidden">
          <Image
            src="/images/nosotros/terranova2.JPG"
            alt="Terranova"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden">
          <Image
            src="/images/nosotros/terranova1.jpg"
            alt="Terranova"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
