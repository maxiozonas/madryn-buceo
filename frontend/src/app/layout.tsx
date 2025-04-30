import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "../components/layout/Footer";
import "leaflet/dist/leaflet.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Madryn Buceo",
  description: "PAGINA WEB DE MADRYN BUCEO",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
