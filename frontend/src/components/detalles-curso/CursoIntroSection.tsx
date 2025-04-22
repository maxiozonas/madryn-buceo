import { Award } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface CursoIntroSectionProps {
    title: string;
    shortDescription: string;
    cardImage: string;
    level: string;
}


export default function CursoIntroSection({ title, shortDescription, cardImage, level }: CursoIntroSectionProps) {

    return (
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-white">
                    <div className="mb-4">
                        <Badge className="bg-rojo uppercase text-base font-semibold font-oceanica">
                            {level}
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica">{title}</h1>
                    <p className="text-lg text-ocean-50 mb-6">{shortDescription}</p>
                </div>

                <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#121113]/20 to-transparent z-10"></div>
                    <Image
                        src={cardImage}
                        alt="Buceo en Puerto Madryn"
                        width={500}
                        height={500}
                        className="w-2xl h-80 object-cover aspect-[4/3] rounded-2xl"
                    />
                    <div className="absolute bottom-4 left-4 z-20 bg-negro/80 backdrop-blur-sm p-3 rounded-lg border border-[#403d39]">
                        <div className="inline-flex items-center text-white font-medium text-sm">
                            <Award className="w-4 h-4 mr-2" />
                            Centro PADI Oficial
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}