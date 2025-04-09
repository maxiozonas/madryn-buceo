
"use client";

import dynamic from "next/dynamic";

// Importa el componente que usa Leaflet sin SSR
const DiveSitesPage = dynamic(() => import("./diveSites"), {
  ssr: false,
});

export default function Page() {
  return <DiveSitesPage />;
}
