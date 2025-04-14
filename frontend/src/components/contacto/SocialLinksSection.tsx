import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export function SocialLinksSection() {
  return (
    <section className="mt-12 text-center">
      <h3 className="text-xl font-semibold text-white mb-4">
        Seguinos en nuestras redes
      </h3>
      <div className="flex justify-center gap-7 text-3xl" style={{color:"#ff4d4d"
      }}>
        <a
          href="https://www.facebook.com/madrynbuceo/?fref=ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-blue-600" />
        </a>
        <a
          href="https://www.instagram.com/madrynbuceo/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a href="https://www.tiktok.com/@madrynbuceo" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="hover:text-white" />
        </a>
      </div>
    </section>
  );
}
