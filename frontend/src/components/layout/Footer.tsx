"use client";

import Image from "next/image";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function Footer() {
  return (
    <footer
      className="w-full text-white py-6 px-6 mt-auto"
      style={{ borderTop: "1px solid #444", backgroundColor: "#e12222" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex justify-center ">
          <a
            href="https://www.tripadvisor.com.ar/Attraction_Review-g312832-d7353317-Reviews-Madryn_Buceo-Puerto_Madryn_Province_of_Chubut_Patagonia.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Tripadvisor"
          >
            <Image
              src="https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102584/logo-trip-footer_omt51e.png"
              alt="Tripadvisor"
              width={160}
              height={32}
              className="object-contain"
            />
          </a>

          <a
            href="https://madryn.travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Madryn Travel"
          >
            <Image
              src="https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102586/logo-madryn-footer_qsilvz.png"
              alt="Madryn Travel"
              width={160}
              height={32} 
              className="object-contain"
            />
          </a>
        </div>
        <div className="text-center text-sm">
          <p><FormattedMessage id="footer.text.1" /></p>
          <p><FormattedMessage id="footer.text.2" /></p>
          <p><FormattedMessage id="footer.text.3" /></p>
        </div>
        <div className="flex justify-center">
          <a/>
            <Image
              src="https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102583/footer-widget-logo_hvzu7u.png"
              alt="Tripadvisor"
              width={300}
              height={82}
            />
        </div>
        <div className="text-center text-sm">
          <p><FormattedMessage id="footer.text.4" /></p>
        </div>
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Madryn Buceo. Todos los derechos reservados.</p>
          <p className="mt-2">
            Desarrollado por{" "}
            <a 
              href="https://www.linkedin.com/in/maximoozonas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline font-bold"
            >
              Máximo
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline-block ml-1 -mt-1">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>{" "}y{" "}
            <a 
              href="https://www.linkedin.com/in/ezequiel-valle-y-garcia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline font-bold"
            >
              Ezequiel
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline-block ml-1 -mt-1">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

