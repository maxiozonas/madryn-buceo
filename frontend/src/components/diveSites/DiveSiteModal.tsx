"use client";

import React from "react";
import { DiveSite } from "@/lib/data/ArrayDiveSites";
import ImageGallery from "./ImageGallery";
import { BadgeCheck, Ruler, Gauge, MapPinned } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";

interface DiveSiteModalProps {
  isOpen: boolean;
  site: DiveSite | null;
  closeModal: () => void;
  handleGoBack?: () => void;
}

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const DiveSiteModal: React.FC<DiveSiteModalProps> = ({
  isOpen,
  site,
  closeModal,
}) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && site && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-[2000] flex justify-center items-center p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleOverlayClick}
        >
          <motion.div
            className="bg-[#252422] rounded-xl w-full max-w-5xl max-h-[96vh] overflow-hidden"
            variants={modalVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 md:p-6">
              <div className="lg:col-span-2">
                <ImageGallery media={site.media} />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-rojo mb-2">
                    <FormattedMessage id={site.name} />
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    <FormattedMessage id={site.description} />
                  </p>

                  <div className="grid grid-cols-1 gap-2 text-sm text-white/80 mb-4">
                    <p className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-rojo" />
                      <strong>
                        <FormattedMessage
                          id="diveSite.difficulty"
                          defaultMessage="Difficulty"
                        />
                        :
                      </strong>{" "}
                      <FormattedMessage
                        id={site.difficulty}
                        defaultMessage="Difficulty"
                      />
                    </p>
                    <p className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-rojo" />
                      <strong>
                        <FormattedMessage id="depth" defaultMessage="Depth" />:
                      </strong>{" "}
                      <FormattedMessage id={site.depth} defaultMessage="Depth" />
                    </p>
                    <p className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-rojo" />
                      <strong>
                        <FormattedMessage
                          id="certification"
                          defaultMessage="Certification"
                        />
                        :
                      </strong>{" "}
                      {site.certification}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPinned className="w-5 h-5 text-rojo" />
                      <strong>
                        <FormattedMessage
                          id="diveSite.time"
                          defaultMessage="Distance"
                        />
                        :
                      </strong>{" "}
                      {site.time}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={closeModal}
                    className="w-full py-2 px-4 bg-rojo text-white rounded-lg hover:bg-rojo/80 transition cursor-pointer"
                  >
                    <FormattedMessage id="diveSite.close" defaultMessage="Close" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiveSiteModal;