
import { useState } from "react";
import Image from "next/image";

interface Props {
  media: { type: "image" | "video"; url: string }[];
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageGallery({ media, className }: Props) {
  const [current, setCurrent] = useState(0);

  const nextMedia = () => setCurrent((prev) => (prev + 1) % media.length);
  const prevMedia = () =>
    setCurrent((prev) => (prev - 1 + media.length) % media.length);

  return (
<div className={`relative w-full ${className || "h-64 md:h-80"}`}>
  {media[current].type === "image" ? (
    <Image
      src={media[current].url}
      alt="Foto del sitio"
      className="absolute inset-0 w-full h-full object-cover rounded-xl"
      width={800}
      height={600}
    />
  ) : (
    <video
      src={media[current].url}
      controls
      autoPlay
      muted
      loop
      className="w-full h-full object-cover rounded-xl"
    />
  )}
  {media.length > 1 && (
    <>
      <button
        onClick={prevMedia}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-negro-secundario/90 text-rojo p-2 rounded-full hover:bg-rojo hover:text-white transition-colors cursor-pointer"
        aria-label="Media anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextMedia}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-negro-secundario/90 text-rojo p-2 rounded-full hover:bg-rojo hover:text-white transition-colors cursor-pointer"
        aria-label="Media siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  )}
</div>

  );
}