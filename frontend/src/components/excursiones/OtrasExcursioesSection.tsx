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
    const handleNavigate = (e: React.MouseEvent) => {
        e.preventDefault()
        sessionStorage.setItem('scrollPosition', window.scrollY.toString())
        sessionStorage.setItem('transitionSource', excursion.slug)
        router.push(`/excursiones/${excursion.slug}`)
      }
    return (
        <section className="py-16 bg-negro-secundario flex items-center justify-center">
            <div className="container">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 text-center">
                    <Map className="h-6 w-6 text-rojo" />
                    Otras excursiones que podrían interesarte
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {excursiones
                        .filter((e) => e.slug !== excursion.slug)
                        .slice(0, 3)
                        .map((relatedExcursion, key) => (
                            <Card key={key} className="group overflow-hidden rounded-none pt-0 border-none shadow-md bg-negro transition-shadow">
                            <Link href={`/excursiones/${relatedExcursion.slug}`} onClick={handleNavigate} className="block">
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
                              <CardContent className="flex flex-col items-center text-center text-white relative p-6">
                                <motion.h3
                                  layoutId={`card-title-${relatedExcursion.slug}`}
                                  className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
                                >
                                  {relatedExcursion.title}
                                </motion.h3>
                                <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{relatedExcursion.miniDescription}</p>
                                <ButtonRojo texto="Mas información" fullWidth={true} href={`/excursiones/${relatedExcursion.slug}`} />
                              </CardContent>
                            </Link>
                          </Card>
                        ))}
                </div>
            </div>
        </section>
    );
}