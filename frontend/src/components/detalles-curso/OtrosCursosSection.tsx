"use client";

import { Card, CardContent } from "../ui/card";
import { Map } from "lucide-react";
import { allCursos } from "@/lib/data/Cursos";
import ButtonRojo from "../ui/button-rojo";
import Link from "next/link";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

export default function OtrosCursosSection() {
  return (
    <section className="py-16 bg-negro-secundario flex items-center justify-center">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 text-center">
          <Map className="h-6 w-6 text-rojo" />
          <FormattedMessage
            id={"otros.cursos"}
            defaultMessage={"tros cursos que podrían interesarte"}
          />
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {(() => {
            const shuffled = [...allCursos].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 3);
          })().map((relatedCurso, key) => (
            <Card
              key={key}
              className="group overflow-hidden rounded-none pt-0 border-none shadow-md bg-negro transition-shadow"
            >
              <Link href={`/cursos/${relatedCurso.slug}`} className="block">
                <div className="relative overflow-hidden h-64">
                  <motion.div
                    layoutId={`card-image-container-${relatedCurso.slug}`}
                    className="w-full h-full"
                  >
                    <Image
                      src={relatedCurso.cardImage}
                      alt={relatedCurso.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      id={`activity-image-${relatedCurso.slug}`}
                      width={500}
                      height={500}
                    />
                  </motion.div>
                </div>

                <CardContent className="flex flex-col items-center text-center text-white relative p-6">
                  <motion.h3
                    layoutId={`card-title-${relatedCurso.slug}`}
                    className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
                  >
                    <FormattedMessage
                      id={relatedCurso.title}
                      defaultMessage={"Titulo"}
                    />
                  </motion.h3>
                  <p className="text-gray-300 mb-4 flex-grow line-clamp-3">
                    <FormattedMessage
                      id={relatedCurso.description}
                      defaultMessage={"Titulo"}
                    />
                  </p>
                  <ButtonRojo
                    texto={
                      <FormattedMessage
                        id={"excursionCard.button.moreInfo"}
                        defaultMessage={"Info"}
                      />
                    }
                    fullWidth={true}
                    href={`/cursos/${relatedCurso.slug}`}
                  />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
