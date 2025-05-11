"use client";

import { Card, CardContent } from "../ui/card";
import { Map } from "lucide-react";
import Image from "next/image";
import { excursiones } from "@/lib/data/Excursiones";
import { Excursion } from "@/lib/data/Excursiones";
import ButtonRojo from "../ui/button-rojo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface OtrasExcursioesSectionProps {
  excursion: Excursion;
}

export default function OtrasExcursioesSection({ excursion }: OtrasExcursioesSectionProps) {
  const router = useRouter()

  const handleNavigate = (e: React.MouseEvent, targetSlug: string) => {
    e.preventDefault()
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    sessionStorage.setItem('transitionSource', targetSlug)
    router.push(`/excursiones/${targetSlug}`)
  }
  return (
    <section className="py-16 px-8 bg-negro-secundario flex items-center justify-center">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Map className="h-6 w-6 text-rojo" />
          Otras excursiones
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {excursiones
            .filter((e) => e.slug !== excursion.slug)
            .slice(0, 3)
            .map((relatedExcursion, key) => (
              <Card key={key} className="group overflow-hidden rounded-none pt-0 border-none shadow-md bg-negro transition-shadow h-full">
                <Link
                  href={`/excursiones/${relatedExcursion.slug}`}
                  onClick={(e) => handleNavigate(e, relatedExcursion.slug)}
                  className="h-full flex flex-col">
                  <div className="relative overflow-hidden h-64">
                    <motion.div layoutId={`card-image-container-${relatedExcursion.slug}`} className="w-full h-full">
                      <Image
                        src={relatedExcursion.cardImage}
                        alt={relatedExcursion.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        priority
                        id={`activity-image-${relatedExcursion.slug}`}
                      />
                    </motion.div>
                  </div>
                  <CardContent className="flex flex-col items-center text-center text-white relative p-6 flex-grow justify-between">
                    <motion.h3
                      layoutId={`card-title-${relatedExcursion.slug}`}
                      className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
                    >
                      {relatedExcursion.title}
                    </motion.h3>
                    <div className="flex-grow mb-6">
                      <p className="text-gray-300 line-clamp-3">{relatedExcursion.miniDescription}</p>
                    </div>
                    <div className="mt-auto w-full">
                      <ButtonRojo texto="Mas información" fullWidth={true} href={`/excursiones/${relatedExcursion.slug}`} />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}