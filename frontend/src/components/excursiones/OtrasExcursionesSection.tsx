"use client";

import { Map } from "lucide-react";
import { excursiones } from "@/lib/data/Excursiones";
import { Excursion } from "@/lib/data/Excursiones";
import ExcursionCard from "./ExcursionCard";  

interface OtrasExcursioesSectionProps {
  excursion: Excursion;
}

export default function OtrasExcursioesSection({ excursion }: OtrasExcursioesSectionProps) {

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
              <ExcursionCard key={key} title={relatedExcursion.title} description={relatedExcursion.miniDescription} image={relatedExcursion.cardImage} link={`/excursiones/${relatedExcursion.slug}`} bg={true}/>
            ))}
        </div>
      </div>
    </section>
  );
}