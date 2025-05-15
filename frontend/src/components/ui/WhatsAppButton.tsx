import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hola, me gustaría obtener más información sobre sus servicios de buceo."
}) => {
  // Usar variable de entorno o un valor de respaldo (que no se expone en el código cliente)
  const phone = phoneNumber || process.env.WHATSAPP_PHONE || "";
  
  // Formato internacional para el número de teléfono (sin el '+')
  const formattedPhone = phone.startsWith('+') 
    ? phone.substring(1) 
    : phone;
  
  // Crear la URL de WhatsApp con el número y mensaje
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
};

export default WhatsAppButton;
