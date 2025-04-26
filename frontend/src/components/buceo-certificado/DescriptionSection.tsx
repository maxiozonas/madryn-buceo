"use client";

import Link from "next/link";
import Image from "next/image";

export default function DescriptionSection() {
  return (
    <section className="bg-[#252422] rounded-2xl shadow-xl overflow-hidden border border-[#403d39]">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
          <div className="text-white/80 text-base md:text-lg leading-relaxed space-y-6">
            <p className="text-white text-2xl font-bold mb-4 uppercase font-oceanica text-center md:text-left">
              Descubrí el buceo en su máxima expresión:
            </p>

            <ul className="list-disc list-inside space-y-3">
              <li>
                Más de{" "}
                <span className="text-[#e12222] font-semibold">
                  6 naufragios
                </span>{" "}
                ideales para
                <span className="text-[#e12222] font-semibold">
                  {" "}
                  increíbles penetraciones submarinas
                </span>
                .
              </li>
              <li>
                <span className="text-[#e12222] font-semibold">
                  Parques rocosos naturales
                </span>{" "}
                repletos de biodiversidad marina.
              </li>
              <li>
                Buceo con lobos marinos todo el año en el{" "}
                <span className="text-[#e12222] font-semibold">
                  Área Natural Punta Loma
                </span>
                .
              </li>
              <li>
                Más de{" "}
                <span className="text-[#e12222] font-semibold">
                  12 sitios de buceo
                </span>{" "}
                para todos los niveles.
              </li>
            </ul>

            <p>
              Podés realizar hasta{" "}
              <span className="text-[#e12222] font-semibold">
                2 buceos por día
              </span>
              , eligiendo tu sitio preferido.
            </p>

            <p>
              Recomendamos vivir las 3 experiencias:{" "}
              <span className="text-[#e12222] font-semibold">
                parques naturales
              </span>
              ,<span className="text-[#e12222] font-semibold"> naufragios</span>{" "}
              y<span className="text-[#e12222] font-semibold"> lobitos</span>.
            </p>

            <p>
              La noche anterior confirmamos la salida según el clima y el mar.
              Si no es favorable, reprogramamos para el día siguiente.
            </p>

            <div className="text-center font-semibold text-lg mt-8">
              ¡No te pierdas hacer
              <Link
                href="/excursiones/snorkeling-con-lobos"
                className="text-[#e12222] underline hover:text-red-400 ml-2"
              >
                Snorkel con Lobos Marinos
              </Link>
              !
            </div>
          </div>
        </div>

        <div className="relative md:min-h-[450px]">
          <Image
            src="/images/buceo/descripcion.JPG"
            alt="Buceo Puerto Madryn"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
