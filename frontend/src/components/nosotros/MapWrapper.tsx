"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapSection"), {
  ssr: false,
});

export default function MapWrapper() {
  return <DynamicMap />;
}
