"use client";

import { SeparatorHorizontal } from "lucide-react";
import ImageGallery from "../nosotros/ImageGallery";
import { FormattedMessage, useIntl } from "react-intl";

export default function IntroSection() {
  const intl = useIntl();
  const divingMedia: { type: "image" | "video"; url: string }[] = [
    { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102581/galeria1_elkzuh.webp" },
    { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748112130/G0453282_ynfn94.jpg" },
    { type: "video", url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747875248/mirages1_vg6pog.webm" },
    { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102579/galeria2_ssjzkv.webp" },
    { type: "video", url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747875312/folias1_vdkark.webm" },
  ];

  return (
    <section id="descripcion" className="mt-8 mb-10 relative">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 inline-flex items-center relative uppercase">
              <FormattedMessage id="diveCertification.description.subTitle" />
            </h2>

            <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />

            <p className="text-white/80 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "diveCertification.description.text1" }) }}
            />

            <p className="text-white/80 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "diveCertification.description.text2" }) }}
            />

            <p className="text-white/80 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "diveCertification.description.text3" }) }}
            />

            <p className="text-white/80 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "diveCertification.description.text4" }) }}
            />

            <p className="text-white/80 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "diveCertification.description.text5" }) }}
            />
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <ImageGallery
              media={divingMedia}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}