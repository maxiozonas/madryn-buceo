
import { Badge } from "../ui/badge";
import { Clock, ArrowDown, Check } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface CursoIntroSectionProps {
  title: ReactNode;
  shortDescription: ReactNode;
  certification?: ReactNode;
  duration?: ReactNode;
  depth?: ReactNode;
  cardImage: string;
  level: ReactNode;
}

export default function CursoIntroSection({
  title,
  shortDescription,
  certification,
  duration,
  depth,
  cardImage,
  level,
}: CursoIntroSectionProps) {
  return (
    <>
      <section className="h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <Image
            src={cardImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto relative h-full flex flex-col justify-end pb-12 px-6 text-white">
          <div className="inline-block bg-ocean rounded text-sm font-semibold mb-2">
            <Badge className="bg-rojo uppercase text-base font-semibold font-oceanica">
              {level}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{shortDescription}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            {duration && (
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{duration}</span>
              </div>
            )}
            {depth && (
              <div className="flex items-center">
                <ArrowDown className="w-5 h-5 mr-2" />
                <span>Profundidad: {depth}</span>
              </div>
            )}
            {certification && (
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>{certification}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
