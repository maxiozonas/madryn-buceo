import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
}

export default function ImageGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 md:h-80">
      <Image
        src={images[current]}
        alt="Foto del sitio"
        fill
        className="object-cover rounded-t-xl"
        priority
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
