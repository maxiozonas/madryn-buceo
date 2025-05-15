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
      <div className="bg-[#252422] p-2 md:p-3 rounded-xl w-[90%] max-w-3xl max-h-[96vh] overflow-auto overflow-x-hidden overflow-y-hidden">
        <div className="mb-2 overflow-visible">
          <ImageGallery media={site.media} />
        </div>

        <h3 className="text-lg font-bold text-rojo mb-1">{site.name}</h3>
        <p className="text-white/80 text-sm mb-2">{site.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-white/80 mb-2">
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
              <strong>Distancia:</strong> {site.time}
            </p>
          </div>
        </div>

        <div className="mt-2">
          <button
            onClick={closeModal}
            className="w-full py-2 px-4 bg-rojo text-white rounded-lg hover:bg-rojo/80 transition"
          >
            Cerrar
          </button>
        </div>

        {handleGoBack && (
          <button
            onClick={handleGoBack}
            className="absolute top-3 left-3 bg-[#252422] text-white border border-rojo rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#403d39] transition z-[2100]"
            aria-label="Volver"
          >
            <ChevronLeft className="w-5 h-5 text-rojo" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DiveSiteModal;
