import Image from "next/image";
import { useState } from "react";

interface Props {
  media: { type: "image" | "video"; url: string }[];
  className?: string;
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
          fill
          className="object-cover rounded-xl"
          priority
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
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={nextMedia}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded cursor-pointer"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}