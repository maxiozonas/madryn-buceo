"use client";

import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { FormattedMessage } from "react-intl";

export default function DescriptionSection() {
  return (
    <section
      id="descripcion"
      className="mt-2 mb-8"
    >
      <div className="container mx-auto px-8 ">
        <Card className="bg-negro-secundario shadow-md border-[#403d39]">
          <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-start gap-2">
          <ArrowRight className="h-8 w-8 text-rojo" />
              <FormattedMessage id="diveCertification.description2.title" />
            </h2>
            <ul className="flex flex-col justify-between h-full">
              <p className="text-white/80 mb-2 leading-relaxed">
                <FormattedMessage id="diveCertification.description2.text6.1" />
              </p>

              <p className="text-white/80 mb-2 leading-relaxed">
                <FormattedMessage id="diveCertification.description2.text6.2" />
              </p>

              <p className="text-white/80 mb-2 leading-relaxed">
                <FormattedMessage id="diveCertification.description2.text6.3" />
              </p>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
