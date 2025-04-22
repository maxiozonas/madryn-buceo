"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface DetallesSectionProps {
  details: string[];
}

export default function DetallesSection({ details }: DetallesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-negro-secundario rounded-xl overflow-hidden shadow-lg border border-[#403d39] p-6 mb-10 w-full"
    >
      <h2 className="text-3xl font-bold mb-4 text-white flex items-center uppercase font-oceanica text-center">Detalles del Curso</h2>
      <div className="bg-negro-secundario rounded-lg p-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-start"
            >
              <span className="mr-2 mt-1 text-rojo">
                <Check size={18} />
              </span>
              <span className="text-gray-200">{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}