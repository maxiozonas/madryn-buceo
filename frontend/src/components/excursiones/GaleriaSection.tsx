"use client";

import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

interface GaleriaSectionProps {
  galleryImages: string[];
  title: string;
}

export default function GaleriaSection({ galleryImages, title }: GaleriaSectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage, prevImage, nextImage, closeModal]);

  return (
    <div className="bg-negro-secundario rounded-xl p-6 border border-[#403d39] shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center uppercase font-oceanica">
        <Camera className="mr-3 h-6 w-6 text-rojo" />
        Galería
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openModal(index)}
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

      {isModalOpen && selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <Button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-white bg-rojo rounded-full hover:bg-rojo/80 transition-colors z-10 cursor-pointer"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </Button>
          <Button
            onClick={prevImage}
            className="absolute left-4 text-white bg-rojo/60 hover:bg-rojo rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            onClick={nextImage}
            className="absolute right-4 p-2 text-white bg-rojo/60 hover:bg-rojo rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[80vh]">
            <Image
              src={galleryImages[selectedImage]}
              alt={`${title} ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 90vw, 80vw"
            />
          </div>

          <div className="absolute bottom-4 text-white">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}