"use client";

import { Card, CardContent } from "../ui/card";
import { Map } from "lucide-react";
import Image from "next/image";
import { allCursos } from "@/lib/data/Cursos";
import ButtonRojo from "../ui/button-rojo";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OtrosCursosSection() {
    return (
        <section className="py-16 bg-negro-secundario flex items-center justify-center">
            <div className="container">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 text-center">
                    <Map className="h-6 w-6 text-rojo" />
                    Otros cursos que podrían interesarte
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {(() => {
                        // Get 3 random courses
                        const shuffled = [...allCursos].sort(() => 0.5 - Math.random());
                        return shuffled.slice(0, 3);
                    })().map((relatedCurso, key) => (
                            <Card key={key} className="group overflow-hidden rounded-none pt-0 border-none shadow-md bg-negro transition-shadow">
                            <Link href={`/cursos/${relatedCurso.slug}`} className="block">
                              <div className="relative overflow-hidden h-64">
                                <motion.div layoutId={`card-image-container-${relatedCurso.slug}`} className="w-full h-full">
                                  <Image
                                    src={relatedCurso.cardImage}
                                    alt={relatedCurso.title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    priority
                                    id={`activity-image-${relatedCurso.slug}`}
                                  />
                                </motion.div>
                              </div>
                              <CardContent className="flex flex-col items-center text-center text-white relative p-6">
                                <motion.h3
                                  layoutId={`card-title-${relatedCurso.slug}`}
                                  className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
                                >
                                  {relatedCurso.title}
                                </motion.h3>
                                <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{relatedCurso.description}</p>
                                <ButtonRojo texto="Mas información" fullWidth={true} href={`/cursos/${relatedCurso.slug}`} />
                              </CardContent>
                            </Link>
                          </Card>
                        ))}
                </div>
            </div>
        </section>
    );
}