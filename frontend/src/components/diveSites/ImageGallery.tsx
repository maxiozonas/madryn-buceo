
import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  media: { type: "image" | "video"; url: string }[];
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageGallery({ media, className, style }: Props) {
  const [current, setCurrent] = useState(0);

  const nextMedia = () => setCurrent((prev) => (prev + 1) % media.length);
  const prevMedia = () =>
    setCurrent((prev) => (prev - 1 + media.length) % media.length);

  useEffect(() => {
    if (media[current]?.type === "image") {
      const img = new window.Image();
      img.src = media[current].url || "/images/placeholder.jpg";
      img.onload = () => {
        const renderedImg = document.querySelector(
          `img[src="${img.src}"]`
        ) as HTMLImageElement;
        if (renderedImg) {
        }
      };
      img.onerror = () => {
        console.error("Failed to load image:", media[current].url);
      };
    } else if (media[current]?.type === "video") {
      const video = document.createElement("video");
      video.src = media[current].url;
      video.onloadedmetadata = () => {
      };
      video.onerror = () => {
        console.error("Failed to load video:", media[current].url);
      };
    }
  }, [media, current]);

  if (!media || media.length === 0) {
    return (
      <div className="w-full h-[50vh] md:h-[432px] bg-negro-secundario rounded-xl flex items-center justify-center">
        <span className="text-white/50 text-sm">No hay medios disponibles</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-[50vh] max-w-full md:h-[432px] overflow-hidden rounded-xl ${
        className || ""
      }`}
      style={style}
    >
      {media[current].type === "image" ? (
        <Image
          src={media[current].url || "/images/placeholder.jpg"}
          alt="Foto del sitio"
          width={768}
          height={432}
          className="w-full h-full max-w-full max-h-full object-contain rounded-xl"
          sizes="(max-width: 768px) 90vw, 768px"
          onError={() =>
            console.error("Error loading image:", media[current].url)
          }
        />
      ) : (
        <video
          src={media[current].url}
          controls
          autoPlay
          muted
          loop
          className="w-full h-full max-w-full max-h-full object-contain rounded-xl"
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
          <div className="absolute top-2 left-2 bg-negro-secundario/90 px-2 py-1 rounded-full text-white text-xs">
            {current + 1} / {media.length}
          </div>
        </>
      )}
    </div>
  );
}
