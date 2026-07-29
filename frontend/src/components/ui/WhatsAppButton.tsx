import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Bed } from 'lucide-react';
import Link from 'next/link';

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message = "Hola, me gustaría obtener más información sobre sus excursiones."
}) => {
  const phone = "+5492804564422";
  const alojamientoUrl = "https://paraisomadryn.com.ar/";
  const alojamientoButtonClassName =
    "flex h-14 w-14 items-center justify-center rounded-full bg-negro-secundario/90 p-2 text-rojo shadow-lg transition-colors duration-200 hover:bg-rojo hover:text-white";
  
  const formattedPhone = phone.startsWith('+') 
    ? phone.substring(1) 
    : phone;
  
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <Link
        href={alojamientoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={alojamientoButtonClassName}
        aria-label="Ver alojamiento"
      >
        <Bed size={26} aria-hidden="true" />
      </Link>

      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
