// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "../components/layout/Footer"
import "leaflet/dist/leaflet.css"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import ClientIntlProvider from "./ClientIntlProvider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Madryn Buceo | Aventuras Submarinas en Puerto Madryn",
  description: "Descubre el fascinante mundo submarino con Madryn Buceo. Ofrecemos excursiones de buceo, cursos y certificaciones para todos los niveles en las cristalinas aguas de Puerto Madryn, Patagonia Argentina.",
  keywords: ["buceo", "Puerto Madryn", "Patagonia", "excursiones submarinas", "cursos de buceo", "vida marina", "turismo aventura"],
  authors: [{ name: "Madryn Buceo" }],
  creator: "Madryn Buceo",
  publisher: "Madryn Buceo",
  metadataBase: new URL("https://madrynbuceo.com"),
  formatDetection: { telephone: false },
  icons: {
    icon: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
    apple: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
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
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png",
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
    images: ["https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102649/logo_keh8c8.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P62Y9L646D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P62Y9L646D');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1048777207441355');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1048777207441355&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <ClientIntlProvider locale="es">
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </ClientIntlProvider>
      </body>
    </html>
  )
}
