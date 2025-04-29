import React from "react";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import ImageGallery from "./ImageGallery";

interface DiveSiteModalProps {
  isOpen: boolean;
  site: DiveSite | null;
  closeModal: () => void;
}

const DiveSiteModal: React.FC<DiveSiteModalProps> = ({
  isOpen,
  site,
  closeModal,
}) => {
  if (!isOpen || !site) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[2000] flex justify-center items-center">
      <div className="bg-[#252422] p-4 md:p-7 rounded-xl w-[90%] md:w-[100vh] max-h-[96vh] overflow-y-hidden relative">

        <div className="mb-4">
          <ImageGallery media={site.media} className="h-[50vh] md:h-[60vh] w-full object-cover" />
        </div>


        <h3 className="text-lg font-bold text-red-500 mb-1">{site.name}</h3>
        <p className="text-white/80 mb-1">{site.description}</p>

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
              <strong>Distancia:</strong> {site.time}
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
    </div>
  );
};

export default DiveSiteModal;