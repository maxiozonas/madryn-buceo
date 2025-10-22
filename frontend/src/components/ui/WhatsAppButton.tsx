import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message = "Hola, me gustaría obtener más información sobre sus excursiones."
}) => {
  const phone = "+5492804366805";
  
  const formattedPhone = phone.startsWith('+') 
    ? phone.substring(1) 
    : phone;
  
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
