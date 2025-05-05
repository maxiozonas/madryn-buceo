"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface GaleriaSectionProps {
  galleryImages: string[];
  title: string;
}

export default function GaleriaSection({ galleryImages, title }: GaleriaSectionProps) {

  return (
    <Card className="bg-negro-secundario rounded-xl p-6 border border-[#403d39] shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <ImageIcon className="h-6 w-6 text-rojo" />
                Galería
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-none overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg?height=300&width=400"}
                      alt={`${title} - Imagen ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
  );
}