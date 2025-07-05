"use client";

import { FormattedMessage } from "react-intl";

export default function HeroSection() {
  const image =
    "https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/cursos/G0135558_yojydu.jpg";

  return (
    <>
      <section className="h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <img
            src={image}
            alt="Local"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-0 bg-black/50" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica">
            <FormattedMessage id="courses.padi.title" />
          </h1>
          <p className="text-base md:text-2xl mb-8 font-oceanica">
            <FormattedMessage id="courses.padi.description" />
          </p>
        </div>
      </section>
    </>
  );
}
