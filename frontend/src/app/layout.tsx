import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "../components/layout/Footer";
import "leaflet/dist/leaflet.css";


const geist = Geist({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Madryn Buceo",
  description: "PAGINA WEB DE MADRYN BUCEO",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.className + "container mx-auto"}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
