"use client"

import type React from "react"

import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GaleriaSectionProps {
  galleryImages: string[]
  title: string
}

export default function GaleriaSection({ galleryImages, title }: GaleriaSectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % galleryImages.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextImage()
    } else if (e.key === "ArrowLeft") {
      prevImage()
    } else if (e.key === "Escape") {
      closeModal()
    }
  }

  return (
    <Card className="bg-negro-secundario shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ImageIcon className="h-6 w-6 text-rojo" />
          Galería
        </h2>
        {/* Show only first image on mobile, full gallery on larger screens */}
        <div className="block sm:hidden mb-4">
          {galleryImages.length > 0 && (
            <motion.div
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(0)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src={galleryImages[0] || "/placeholder.svg?height=300&width=400"}
                alt={`${title} - Imagen destacada`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-negro-primario/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-rojo/80 px-4 py-2 rounded-md hover:bg-rojo transition-colors">Ver galería ({galleryImages.length} imágenes)</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Full gallery on larger screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={image || "/placeholder.svg?height=300&width=400"}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-negro-primario/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-rojo/80 px-4 py-2 rounded-md hover:bg-rojo transition-colors">Ver imagen</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-negro-primario/90 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full h-[80vh] flex flex-col bg-negro-secundario/20 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/30"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative flex-1 flex items-center justify-center p-4">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-[800px] h-[500px] mx-auto">
                    <Image
                      src={galleryImages[selectedImage] || "/placeholder.svg?height=800&width=1200"}
                      alt={`${title} - Imagen ${selectedImage + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority
                      quality={90}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <motion.button
                  className="bg-negro-secundario/90 p-3 rounded-full text-white hover:bg-rojo transition-colors ml-4 shadow-lg hover:scale-110 transform duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  aria-label="Imagen anterior"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <motion.button
                  className="bg-negro-secundario/90 p-3 rounded-full text-white hover:bg-rojo transition-colors mr-4 shadow-lg hover:scale-110 transform duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  aria-label="Imagen siguiente"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              <div className="absolute bottom-4 left-4 bg-negro-secundario/90 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg backdrop-blur-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {galleryImages.length > 5 ? (
                  <div className="flex space-x-1 bg-negro-secundario/90 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm">
                    {[...Array(Math.min(5, galleryImages.length))].map((_, i) => {
                      // Create a range of 5 dots centered around the current image
                      let adjustedIndex;
                      if (selectedImage < 2) {
                        adjustedIndex = i;
                      } else if (selectedImage > galleryImages.length - 3) {
                        adjustedIndex = galleryImages.length - 5 + i;
                      } else {
                        adjustedIndex = selectedImage - 2 + i;
                      }
                      
                      if (adjustedIndex >= 0 && adjustedIndex < galleryImages.length) {
                        return (
                          <button
                            key={adjustedIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${selectedImage === adjustedIndex ? 'bg-rojo scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(adjustedIndex);
                            }}
                            aria-label={`Ir a imagen ${adjustedIndex + 1}`}
                          />
                        );
                      }
                      return null;
                    })}
                    {galleryImages.length > 5 && <span className="text-white/70 text-xs">...</span>}
                  </div>
                ) : (
                  <div className="flex space-x-2 bg-negro-secundario/90 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm">
                    {galleryImages.map((_, i) => (
                      <button
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${selectedImage === i ? 'bg-rojo scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(i);
                        }}
                        aria-label={`Ir a imagen ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
