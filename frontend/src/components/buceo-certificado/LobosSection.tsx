"use client";

import Image from "next/image";
import ButtonRojo from "../ui/button-rojo";
import { SeparatorHorizontal } from "lucide-react";
import { FormattedMessage } from "react-intl";

export default function DescriptionSection() {

  return (
    <section
      className="py-10 overflow-hidden"
    >
      <div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <div className="w-full grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold uppercase text-white mb-4 flex items-center gap-2"
            >
              <FormattedMessage id="diveCertification.seaLobos.title" />
            </h2>
            <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />
            <p
              className="text-white/80 mb-1 leading-relaxed "
            >
              <FormattedMessage id="diveCertification.seaLobos.text" />
            </p>
            <p
              className="text-white/80 mb-1 leading-relaxed "
            >
              <FormattedMessage id="diveCertification.seaLobos.text2" />
            </p>
            <p
              className="text-white/80 mb-2 leading-relaxed "
            >
              <FormattedMessage id="diveCertification.seaLobos.text3" />
            </p>
            <div
              className="flex flex-wrap gap-4 text-end"
            >
              <ButtonRojo
                texto={<FormattedMessage id="diveCertification.seaLobos.buttonSnorkeling" />}
                href="/excursiones/snorkeling-con-lobos"
              />
            </div>
          </div>
          <div
            className="relative h-[350px] w-full overflow-hidden rounded-lg"
          >
            <Image
              src="/images/buceo/buceoLobos.webp"
              alt="Buceo con Lobos Marinos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
