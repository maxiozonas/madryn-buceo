import Image from "next/image";
import { Camera } from "lucide-react";

interface GaleriaSectionProps {
  galleryImages: string[];
  title: string;
}

export default function GaleriaSection({ galleryImages, title }: GaleriaSectionProps) {
  return (
    <div className="bg-[#252422] rounded-xl p-6 border border-[#403d39] shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
        <Camera className="mr-3 h-6 w-6 text-[#e12222]" />
        Galería de Fotos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}