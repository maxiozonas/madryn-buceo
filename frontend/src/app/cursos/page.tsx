import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CursosPage() {
  return (
    <main
      className="p-8 max-w-5xl mx-auto min-h-screen w-full"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <h1
        className="text-4xl font-bold mb-6 text-center"
        style={{ color: "#e12222" }}
      >
        Cursos de Buceo
      </h1>
      
      <p className="text-lg leading-relaxed text-gray-700 text-center mb-8">
        Explora el fascinante mundo submarino en la impresionante Patagonia con
        nuestros cursos de buceo, diseñados para todos los niveles. Como centro
        de buceo <span className="font-bold">PADI</span>, garantizamos la más
        alta calidad de instrucción y seguridad. Descubre por qué Puerto Madryn
        es reconocido como la capital nacional del buceo, ofreciéndote una
        experiencia única en las aguas del Golfo Nuevo. Desde iniciarte en el
        buceo hasta convertirte en un experto, nuestros instructores
        certificados te guiarán en cada paso del camino. Encuentra el curso
        perfecto para ti y comienza tu aventura subacuática con nosotros.
      </p>

      <div className="flex justify-center mb-8">
        <a
          href="https://www.padi.com/es"
          target="_blank"
          rel="noopener noreferrer"
          title="PADI"
        >
          <Image
            src="/images/pngwing.com(1).png"
            alt="PADI"
            width={300}
            height={82}
          />
        </a>
      </div>

      <p className="text-lg leading-relaxed text-gray-700 text-center mb-12">
        PADI (la Asociación Profesional de Instructores de Buceo) es la
        organización de entrenamiento de buceo más reconocida en todo el mundo,
        con más de 30 millones de buceadores.
      </p>

      <div className="flex justify-center mb-9">
        <a href="#cursos" className="animate-bounce text-red-600">
          <ChevronDown size={40} />
        </a>
      </div>

      <section id="cursos" className="mb-16">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#e12222" }}
        >
          Cursos de iniciación en el buceo
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 border rounded-2xl shadow-md bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Discover Scuba Diving
            </h3>
            <div className="w-full h-48 mb-4 relative">
              <Image
                src="/images/discover.JPG"
                alt="Scuba"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Tu aventura comienza aquí. Una introducción rápida y fácil al
              buceo en aguas abiertas.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Más Información
            </Button>
          </div>

          <div className="p-6 border rounded-2xl shadow-md bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Open Water Diver / SCUBA
            </h3>
            <div className="w-full h-48 mb-4 relative">
              <Image
                src="/images/waterdiver.JPG"
                alt="Scuba"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Obtén tu certificación básica de buceo que te permite bucear bajo
              la supervisión de un profesional hasta 18 metros de profundidad.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Más Información
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#e12222" }}
        >
          Niveles avanzados
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 border rounded-2xl shadow-md bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Advanced Open Water Diver
            </h3>
            <div className="w-full h-48 mb-4 relative">
              <Image
                src="/images/advancedwater.JPG"
                alt="Scuba"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Amplía tus habilidades y experiencia de buceo explorando nuevas
              áreas de interés bajo la supervisión de un instructor.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Más Información
            </Button>
          </div>

          <div className="p-6 border rounded-2xl shadow-md bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Primeros Auxilios y RCP
            </h3>
            <div className="w-full h-48 mb-4 relative">
              <Image
                src="/images/primaux.JPG"
                alt="Scuba"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Aprende técnicas de primeros auxilios y RCP para estar preparado
              en situaciones de emergencia tanto en tierra como bajo el agua.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Más Información
            </Button>
          </div>

          <div className="p-6 border rounded-2xl shadow-md bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Rescue Diver</h3>
            <div className="w-full h-48 mb-4 relative">
              <Image
                src="/images/rescue.JPG"
                alt="Scuba"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Aprende a prevenir y gestionar problemas en el agua y conviértete
              en un buceador más seguro y consciente.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Más Información
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#e12222" }}
        >
          Nivel profesional
        </h2>

        <div className="p-6 border rounded-2xl shadow-md bg-white max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Divemaster</h3>
          <div className="w-full h-48 mb-4 relative">
            <Image
              src="/images/master.JPG"
              alt="Scuba"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Avanza en tu carrera de buceo y conviértete en un profesional
            capacitado para supervisar y guiar a otros buceadores.
          </p>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            Más Información
          </Button>
        </div>
      </section>
    </main>
  );
}
