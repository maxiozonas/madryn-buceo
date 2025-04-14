"use client";

import dynamic from "next/dynamic";

const DiveSitesPage = dynamic(() => import("@/components/diveSites/DiveSites"), {
  ssr: false,
});

export default function Page() {
  return <DiveSitesPage />;
}
