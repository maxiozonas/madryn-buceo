import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
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
              src="/images/logo-trip-footer.png"
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
              src="/images/logo-madryn-footer.png"
              alt="Madryn Travel"
              width={160}
              height={32} 
              className="object-contain"
            />
          </a>
        </div>
        <div className="text-center text-sm">
          <p>Centro de buceo: B. Brown 1900 - Bajada 5 - Balneario Sara, Puerto Madryn - Patagonia Argentina</p>
          <p>Teléfono: +5492804564422</p>
          <p>Email: madrynbuceo@hotmail.com</p>
        </div>
        <div className="flex justify-center">
          <a/>
            <Image
              src="/images/footer-widget-logo.png"
              alt="Tripadvisor"
              width={300}
              height={82}
            />
        </div>
        <div className="text-center text-sm">
  <p>Desde <span className="font-bold">1992</span> buceando en la patagonia...</p>
        </div>
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Madryn Buceo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
