"use client";
import React from "react";

export function LocalSection() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center">
        Nuestro Local
      </h2>
      <p className="text-lg mb-6" style={{ color: "#ffffff" }}>
        Nuestro local también funciona como museo. Allí podrán disfrutar de
        artículos encontrados en las profundidades del mar, hasta equipos
        históricos que se han utilizado a lo largo de los años en el buceo.
      </p>
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <video controls className="w-full h-auto" src="/videos/local-web.mp4">
          Tu navegador no admite la reproducción de video.
        </video>
      </div>
    </section>
  );
}
