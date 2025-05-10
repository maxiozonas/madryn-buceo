import React from "react";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import ImageGallery from "./ImageGallery";
import { ChevronLeft } from "lucide-react";

interface DiveSiteModalProps {
  isOpen: boolean;
  site: DiveSite | null;
  closeModal: () => void;
  handleGoBack?: () => void;
}

const DiveSiteModal: React.FC<DiveSiteModalProps> = ({
  isOpen,
  site,
  closeModal,
  handleGoBack,
}) => {
  if (!isOpen || !site) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[2000] flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-[#252422] p-4 md:p-7 rounded-xl w-[90%] md:w-[100vh] max-h-[96vh] overflow-auto
[&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-[#403d39]
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-rojo
          [&::-webkit-scrollbar-thumb]:rounded-full
          relative"
      >
        <div className="mb-4">
          <ImageGallery
            media={site.media}
            className="h-[50vh] md:h-[70vh] w-full"
          />
        </div>

        <h3 className="text-lg font-bold text-rojo mb-1">{site.name}</h3>
        <p className="text-white/80 text-sm mb-2">{site.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-white/70 mb-4">
          <div>
            <p>
              <strong>Dificultad:</strong> {site.difficulty}
            </p>
            <p>
              <strong>Profundidad:</strong> {site.depth}
            </p>
          </div>
          <div>
            <p>
              <strong>Certificación:</strong> {site.certification}
            </p>
            <p>
              <strong>Distancia en tiempo:</strong> {site.time}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={closeModal}
            className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Cerrar
          </button>
        </div>
      </div>

      {handleGoBack && (
        <button
          onClick={handleGoBack}
          className="absolute top-5 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 bg-[#252422] text-white border border-red-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-[#403d39] transition z-[2100]"
          aria-label="Volver"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#e12222]" />
        </button>
      )}
    </div>
  );
};

export default DiveSiteModal;