import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "../components/layout/Footer";
import "leaflet/dist/leaflet.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Madryn Buceo | Aventuras Submarinas en Puerto Madryn",
  description: "Descubre el fascinante mundo submarino con Madryn Buceo. Ofrecemos excursiones de buceo, cursos y certificaciones para todos los niveles en las cristalinas aguas de Puerto Madryn, Patagonia Argentina.",
  keywords: ["buceo", "Puerto Madryn", "Patagonia", "excursiones submarinas", "cursos de buceo", "vida marina", "turismo aventura"],
  authors: [{ name: "Madryn Buceo" }],
  creator: "Madryn Buceo",
  publisher: "Madryn Buceo",
  metadataBase: new URL("https://madrynbuceo.com"),
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/images/inicio/logo.png",
    apple: "/images/inicio/logo.png",
  },
  openGraph: {
    title: "Madryn Buceo | Aventuras Submarinas en Puerto Madryn",
    description: "Descubre el fascinante mundo submarino con Madryn Buceo. Excursiones, cursos y certificaciones en Puerto Madryn.",
    url: "https://madrynbuceo.com",
    siteName: "Madryn Buceo",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/inicio/logo.png",
        width: 800,
        height: 600,
        alt: "Madryn Buceo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madryn Buceo | Aventuras Submarinas en Puerto Madryn",
    description: "Excursiones, cursos y certificaciones de buceo en Puerto Madryn, Patagonia Argentina.",
    images: ["/images/inicio/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
