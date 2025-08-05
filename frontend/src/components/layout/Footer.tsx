"use client";

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
            <img
              src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/footer/logo-trip-footer_omt51e.png"
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
            <img
              src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/footer/logo-madryn-footer_qsilvz.png"
              alt="Madryn Travel"
              width={160}
              height={32}
              className="object-contain"
            />
          </a>
        </div>
        <div className="text-center text-sm">
          <p>
            <FormattedMessage id="footer.text.1" />
          </p>
          <p>
            <FormattedMessage id="footer.text.2" />
          </p>
          <p>
            <FormattedMessage id="footer.text.3" />
          </p>
        </div>
        <div className="flex justify-center">
          <a />
          <img
            src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/footer/footer-widget-logo_hvzu7u.png"
            alt="Tripadvisor"
            width={300}
            height={82}
          />
        </div>
        <div className="text-center text-sm">
          <p>
            <FormattedMessage id="footer.text.4" />
          </p>
        </div>
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Madryn Buceo. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 justify-center items-center flex gap-2 ">
            Desarrollado por{" "}
                      <a
            href="https://www.xurbyte.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Xurbyte"
          >
            <img
            src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/XURBYTE(3)(2).png"
            alt="Tripadvisor"
            width={160}
            height={32}
            className="object-contain"
          />
          </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
