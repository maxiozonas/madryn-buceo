import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import ImageGallery from "../diveSites/ImageGallery";
import Link from "next/link";
import { Waves } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DescriptionSection() {
  const divingMedia: { type: "image" | "video"; url: string }[] = [
    { type: "image", url: "/images/buceo/descripcion.webp" },
    { type: "image", url: "/images/puntos/chino/chino.webp" },
    { type: "video", url: "/videos/puntos/mirages/mirages1.webm" },
    { type: "image", url: "/images/puntos/urabain/urabain.webp" },
    { type: "video", url: "/videos/puntos/folias/folias1.webm" },
  ];

  return (
    <motion.section
      className="mt-16 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
          <div className="container mx-auto px-8 ">
    <Card className="bg-negro-secundario shadow-md border-[#403d39]">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_57%] gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col justify-center h-full md:min-h-[500px]">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Waves className="h-6 w-6 text-rojo" />
              Buceo con Lobos Marinos
            </h2>


            <p className="text-white/80 mb-4 leading-relaxed">
            Atrévete a vivir una experiencia única buceando con lobos marinos en su hábitat natural. 
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
            Sumérgete en las aguas de la Patagonia y disfruta de la compañía de estos juguetones animales marinos. 
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
            Guiado por nuestros instructores profesionales, podrás acercarte a estos curiosos lobos marinos y observar sus comportamientos de cerca.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
            Esta experiencia incluye un pintoresco paseo náutico hasta el área protegida de la Reserva Natural Punta Loma y está diseñada específicamente para buceadores certificados que desean bucear con lobos marinos.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
            Dentro de la reserva tambien tenemos la opción de excursion                     <Link
                      key={"snorkeling"}
                      href="/excursiones/snorkeling-con-lobos"
                      className="text-[#e12222] underline hover:text-red-400 transition-colors"
                    >Snorkeling con lobos</Link>.
            </p>

          </div>
          <div className="relative overflow-hidden rounded-xl md:min-h-[500px]">
            <div className="relative h-full">
              <ImageGallery
                media={divingMedia}
                className="h-56 md:h-[550px] w-full "
              />
            </div>
          </div>
        </div>
        </CardContent>
        </Card>
      </div>   
    </motion.section>
  );
}