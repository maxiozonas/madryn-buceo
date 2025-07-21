import { Award, SeparatorHorizontal } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";

export default function CursosIntroSection() {
  const imagen =
    "https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/buceo/GOPR1373_yz9rgw.jpg";
  const logo =
    "https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/cursos/padi.webp";

  const intl = useIntl();
  return (
    <section className="mb-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col justify-center">
          <div className="mb-4 w-36 inline-flex items-center justify-center rounded-lg bg-muted px-4 py-1.5 text-lg font-medium">
            <img
              src={logo}
              alt="Certificación PADI"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 inline-flex items-center relative uppercase">
            <FormattedMessage id="courses.padi.subTitle.1" />
          </h2>

          <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />

          <p
            className="text-white/80 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "courses.padi.description.1" }),
            }}
          />

          <p
            className="text-white/80 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "courses.padi.description.2" }),
            }}
          />

          <p
            className="text-white/80 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "courses.padi.description.3" }),
            }}
          />

          <p
            className="text-white/80 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "courses.padi.description.4" }),
            }}
          />

          <p
            className="text-white/80 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "courses.padi.description.5" }),
            }}
          />
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <img
            src={imagen}
            alt="Buceo en Puerto Madryn"
            className="absolute inset-0 w-full h-full object-cover aspect-[4/3]"
          />

          <div className="absolute bottom-4 left-4 z-20 bg-negro/80 backdrop-blur-sm p-3 rounded-lg border border-[#403d39]">
            <div className="inline-flex items-center text-white font-medium text-sm">
              <Award className="w-4 h-4 mr-2" />
              <FormattedMessage id="courses.padi.badge.1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
