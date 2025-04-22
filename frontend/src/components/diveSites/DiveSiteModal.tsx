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
      <div className="bg-[#252422] p-6 rounded-xl w-3/4 md:w-1/3 max-h-[80vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <div className="mb-4">
          <ImageGallery images={site.images} />
        </div>

        <h3 className="text-lg font-bold text-red-500 mb-2">{site.name}</h3>
        <p className="text-white/80 mb-3">{site.description}</p>
        <ul className="text-sm text-white/70 space-y-1">
          <li>
            <strong>Dificultad:</strong> {site.difficulty}
          </li>
          <li>
            <strong>Profundidad:</strong> {site.depth}
          </li>
          <li>
            <strong>Certificación:</strong> {site.certification}
          </li>
          <li>
            <strong>Distancia:</strong> {site.time}
          </li>
        </ul>
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
