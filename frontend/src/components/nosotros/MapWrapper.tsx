"use client";

import dynamic from "next/dynamic";

// Importa dinámicamente el MapSection con SSR desactivado
const DynamicMap = dynamic(() => import("./MapSection"), {
  ssr: false,
});

export default function MapWrapper() {
  return <DynamicMap />;
}
