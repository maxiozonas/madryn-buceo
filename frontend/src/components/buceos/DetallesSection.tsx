"use client";

import { Anchor, Binoculars, Clock, Leaf, Shell, Users } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

interface DetallesSectionProps {
  details: string[];
  slug: string;
}

const getIconsBySlug = (slug: string): ReactNode[] => {
  switch (slug) {
    case "buceo-certificado":
      return [
        <Clock key="clock" className="h-5 w-5 text-[#e12222]" />,
        <Users key="users" className="h-5 w-5 text-[#e12222]" />,
        <Leaf key="leaf" className="h-5 w-5 text-[#e12222]" />,
        <Binoculars key="binoculars" className="h-5 w-5 text-[#e12222]" />,
      ];
    case "buceo-con-lobos":
      return [
        <Clock key="clock" className="h-5 w-5 text-[#e12222]" />,
        <Users key="users" className="h-5 w-5 text-[#e12222]" />,
        <Leaf key="leaf" className="h-5 w-5 text-[#e12222]" />,
        <Shell key="shell" className="h-5 w-5 text-[#e12222]" />,
        <Binoculars key="binoculars" className="h-5 w-5 text-[#e12222]" />,
      ];
    default:
      return [
        <Clock key="clock-default" className="h-5 w-5 text-[#e12222]" />,
        <Anchor key="anchor" className="h-5 w-5 text-[#e12222]" />,
      ];
  }
};

const getDetailIcon = (slug: string, index: number): ReactNode => {
  const icons = getIconsBySlug(slug);
  return icons[index % icons.length];
};

export default function DetallesSection({ details, slug }: DetallesSectionProps) {
  return (
    <div className="bg-[#252422] rounded-xl p-6 shadow-lg border border-[#403d39]">
      <h2 className="text-3xl font-bold mb-6 text-white text-center flex items-center justify-center uppercase font-oceanica">
        <Anchor className="mr-3 h-6 w-6 text-[#e12222]" />
        Detalles
      </h2>
      <div className="flex flex-col gap-4">
        {details.map((detail, index) => {
          const icon = getDetailIcon(slug, index);
          let detailContent: ReactNode = detail;

          if (
            slug === "buceo-certificado" &&
            detail.includes("Hacé click y conocelos")
          ) {
            const [before, after] = detail.split("Hacé click y conocelos");
            detailContent = (
              <>
                {before}
                <Link
                  href="/buceo/puntos-de-buceo"
                  className="text-[#e12222] underline hover:text-red-400 transition-colors"
                >
                  Hacé click y conocelos
                </Link>
                {after}
              </>
            );
          }

          return (
            <div
              key={index}
              className="bg-[#1a1917] border-l-4 border-[#e12222] p-4 rounded-lg shadow-md hover:bg-[#252422] transition-colors duration-300"
            >
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex-shrink-0 p-2 bg-[#e12222]/10 rounded-full text-center lg:text-start">
                  {icon}
                </div>
                <span className="text-white text-sm font-medium text-center lg:text-start">
                  {detailContent}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
