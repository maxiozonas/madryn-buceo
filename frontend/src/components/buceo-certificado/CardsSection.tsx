"use client";

import Link from "next/link";

export default function CardsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#252422] border border-[#403d39] rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#e12222] uppercase font-oceanica">
            Buceo Brevetados
          </h3>
          <p className="text-white/80">
            Para buzos certificados que buscan explorar naufragios y parques submarinos únicos.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/buceo/brevetados/buceo-brevetados"
            className="inline-block bg-[#e12222] text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Ver más
          </Link>
        </div>
      </div>

      <div className="bg-[#252422] border border-[#403d39] rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#e12222] uppercase font-oceanica">
            Buceo con Lobos
          </h3>
          <p className="text-white/80">
            Viví la experiencia única de bucear rodeado de lobos marinos en su hábitat natural.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/buceo/brevetados/buceo-con-lobos"
            className="inline-block bg-[#e12222] text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
}
