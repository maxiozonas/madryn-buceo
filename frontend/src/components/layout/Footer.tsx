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
              src="https://drive.google.com/uc?export=view&id=1LMHGiD3f2cW22C566vpZTf7PZVr7BPHY"
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
              src="https://drive.google.com/uc?export=view&id=1sRbVeSpQsT7aVrKYjeyK4W0e4orvfZTK"
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
              src="https://drive.google.com/uc?export=view&id=1UYGW2CZiB2ljaAp-yh5TUR6xOezXg7P3"
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
        </div>
      </div>
    </footer>
  );
}

