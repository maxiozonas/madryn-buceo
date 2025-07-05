"use client";

import type React from "react";

import { ImageIcon, Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import ButtonRojo from "../ui/button-rojo";

interface GaleriaSectionProps {
  galleryImages: string[];
  galleryVideos?: string[];
  title: string;
}

type MediaItem = {
  type: "image" | "video";
  src: string;
  index: number;
};

export default function GaleriaSection({
  galleryImages,
  galleryVideos = [],
  title,
}: GaleriaSectionProps) {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video">("image");
  const videoRef = useRef<HTMLVideoElement>(null);

  const allMedia: MediaItem[] = [
    ...galleryImages.map((src, index) => ({
      type: "image" as const,
      src,
      index,
    })),
    ...galleryVideos.map((src, index) => ({
      type: "video" as const,
      src,
      index: galleryImages.length + index,
    })),
  ];

  const openModal = (index: number, type: "image" | "video" = "image") => {
    setSelectedMedia(index);
    setMediaType(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = "auto";
  };

  const nextMedia = () => {
    if (selectedMedia === null) return;
    const nextIndex = (selectedMedia + 1) % allMedia.length;
    setSelectedMedia(nextIndex);
    setMediaType(allMedia[nextIndex].type);
  };

  const prevMedia = () => {
    if (selectedMedia === null) return;
    const prevIndex = (selectedMedia - 1 + allMedia.length) % allMedia.length;
    setSelectedMedia(prevIndex);
    setMediaType(allMedia[prevIndex].type);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextMedia();
    } else if (e.key === "ArrowLeft") {
      prevMedia();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <Card className="bg-negro-secundario shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ImageIcon className="h-6 w-6 text-rojo" />
          Galería
        </h2>
        <div className="block sm:hidden mb-4">
          {allMedia.length > 0 && (
            <div
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(0, allMedia[0].type)}
            >
              {allMedia[0].type === "image" ? (
                <img
                  src={
                    allMedia[0].src || "/placeholder.svg?height=300&width=400"
                  }
                  alt={`${title} - Imagen destacada`}
                  className="object-cover transition-transform duration-300 brightness-50 absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={allMedia[0].src}
                    className="object-cover w-full h-full brightness-50"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Film className="h-12 w-12 text-white opacity-70" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="text-white text-sm font-medium bg-rojo/90 hover:bg-rojo px-3 py-2 rounded-md transition-colors shadow-lg flex items-center gap-1"
                  onClick={() => openModal(0, allMedia[0].type)}
                >
                  <ImageIcon className="h-4 w-4" />
                  Ver Galería
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="hidden sm:grid grid-cols-3 gap-4">
          {allMedia.map((media, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(index, media.type)}
            >
              {media.type === "image" ? (
                <img
                  src={media.src || "/placeholder.svg?height=300&width=400"}
                  alt={`${title} - Imagen ${index + 1}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50 absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={media.src}
                    className="object-cover w-full h-full group-hover:scale-110 group-hover:brightness-50 transition-transform duration-300"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-negro-primario/30">
                    <Film className="h-12 w-12 text-white opacity-90" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-negro-primario/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="text-white cursor-pointer font-medium bg-rojo px-4 py-2 rounded-md transition-all duration-200 transform group-hover:scale-105 shadow-lg flex items-center gap-2">
                  {media.type === "image" ? (
                    <ImageIcon className="h-5 w-5" />
                  ) : (
                    <Film className="h-5 w-5" />
                  )}
                  {media.type === "image" ? "Ver imagen" : "Ver video"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block mt-6 text-center">
          <ButtonRojo
            onClick={() => openModal(0, allMedia[0]?.type || "image")}
            texto={`Ver galería completa`}
          />
        </div>
      </CardContent>

      {selectedMedia !== null && (
        <div
          className="fixed inset-0 z-50 bg-negro-primario/90 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-5xl w-full h-[80vh] flex flex-col bg-negro-secundario/20 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-negro-secundario/90 p-2 rounded-full text-white hover:bg-rojo transition-colors shadow-lg hover:scale-110 transform duration-200"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative flex-1 flex items-center justify-center p-4">
              <div
                key={selectedMedia}
                className="flex items-center justify-center"
              >
                {mediaType === "image" ? (
                  <div className="relative w-[800px] h-[500px] mx-auto">
                    <img
                      src={
                        allMedia[selectedMedia].src ||
                        "/placeholder.svg?height=800&width=1200"
                      }
                      alt={`${title} - Imagen ${selectedMedia + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                ) : (
                  <div className="relative w-[800px] h-[500px] mx-auto flex items-center justify-center rounded-lg">
                    <video
                      ref={videoRef}
                      src={allMedia[selectedMedia].src}
                      className="w-full h-full object-contain max-h-[500px]"
                      autoPlay
                      playsInline
                      controlsList="nodownload"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                className="bg-negro-secundario/90 p-3 rounded-full text-white hover:bg-rojo transition-colors ml-4 shadow-lg hover:scale-110 transform duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                aria-label="Contenido anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                className="bg-negro-secundario/90 p-3 rounded-full text-white hover:bg-rojo transition-colors mr-4 shadow-lg hover:scale-110 transform duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                aria-label="Contenido siguiente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-4 left-4 bg-negro-secundario/90 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg backdrop-blur-sm">
              {selectedMedia + 1} / {allMedia.length}{" "}
              {mediaType === "image" ? "(Imagen)" : "(Video)"}
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              {allMedia.length > 5 ? (
                <div className="flex space-x-1 bg-negro-secundario/90 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  {[...Array(Math.min(5, allMedia.length))].map((_, i) => {
                    let adjustedIndex;
                    if (selectedMedia < 2) {
                      adjustedIndex = i;
                    } else if (selectedMedia > allMedia.length - 3) {
                      adjustedIndex = allMedia.length - 5 + i;
                    } else {
                      adjustedIndex = selectedMedia - 2 + i;
                    }

                    if (adjustedIndex >= 0 && adjustedIndex < allMedia.length) {
                      const itemType = allMedia[adjustedIndex].type;
                      return (
                        <button
                          key={adjustedIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${selectedMedia === adjustedIndex ? "bg-rojo scale-125" : itemType === "video" ? "bg-blue-400/70 hover:bg-blue-400" : "bg-white/50 hover:bg-white/80"}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMedia(adjustedIndex);
                            setMediaType(itemType);
                          }}
                          aria-label={`Ir a ${itemType === "image" ? "imagen" : "video"} ${adjustedIndex + 1}`}
                        />
                      );
                    }
                    return null;
                  })}
                  {allMedia.length > 5 && (
                    <span className="text-white/70 text-xs">...</span>
                  )}
                </div>
              ) : (
                <div className="flex space-x-2 bg-negro-secundario/90 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  {allMedia.map((media, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${selectedMedia === i ? "bg-rojo scale-125" : media.type === "video" ? "bg-blue-400/70 hover:bg-blue-400" : "bg-white/50 hover:bg-white/80"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMedia(i);
                        setMediaType(media.type);
                      }}
                      aria-label={`Ir a ${media.type === "image" ? "imagen" : "video"} ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
