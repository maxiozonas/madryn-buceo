"use client";

import Image from "next/image";
import Link from "next/link";

interface DescripcionSectionProps {
  title: string;
  description: string[];
  cardImage: string;
}

export default function DescripcionSection({
  title,
  description,
  cardImage,
}: DescripcionSectionProps) {
  return (
    <div className="bg-[#252422] rounded-xl overflow-hidden shadow-lg border border-[#403d39]">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-white flex items-center justify-center uppercase font-oceanica text-center">
          Descripción de la Experiencia
        </h2>

        {description.map((paragraph, index) => {
          if (paragraph.includes("Snorkeling con lobos")) {
            const parts = paragraph.split(/(Snorkeling con lobos)/i);
            return (
              <p key={index} className="text-white/80 leading-relaxed mb-2">
                {parts.map((part, i) =>
                  part.toLowerCase() === "snorkeling con lobos" ? (
                    <Link
                      key={i}
                      href="/excursiones/snorkeling-con-lobos"
                      className="text-[#e12222] underline hover:text-red-400 transition-colors"
                    >
                      {part}
                    </Link>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            );
          }

          return (
            <p key={index} className="text-white/80 leading-relaxed mb-2">
              {paragraph}
            </p>
          );
        })}
      </div>

      <div className="relative h-[300px]">
        <Image
          src={cardImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
