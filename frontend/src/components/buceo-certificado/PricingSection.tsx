"use client";

import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import ButtonRojo from "../ui/button-rojo";
import { FormattedMessage } from "react-intl";

export default function PricingSection() {
  const pricingOptions = [
    {
      option: <FormattedMessage id="diveCertification.tablePrice.text" />,
      cost: "$ 150000",
      reserveLink: "/reservas/1-buceo",
    },
    {
      option: <FormattedMessage id="diveCertification.tablePrice.text2" />,
      cost: "$ 220000",
      reserveLink: "/reservas/2-buceos",
    },
    {
      option: <FormattedMessage id="diveCertification.tablePrice.text3" />,
      cost: "$ 230000",
      reserveLink:
        "https://madrynbuceo.outtrip.com/experiences/674f51e8752c8c796efc1f95/snorkel-con-lobos-marinos",
    },
    {
      option: <FormattedMessage id="diveCertification.tablePrice.text4" />,
      cost: "$ 360000",
      reserveLink:
        "https://madrynbuceo.outtrip.com/experiences/67603b229c7fb90464e77a91/discover-con-lobos-marinos",
    },
    {
      option: <FormattedMessage id="diveCertification.tablePrice.text5" />,
      cost: "$ 250000",
      reserveLink: "/reservas/buceo-snorkeling",
    },
  ];

  return (
    <section className="mt-2 mb-8">
      <div className="container mx-auto px-8">
        <Card className="bg-negro-secundario shadow-md border-[#403d39]">
          <CardContent className="p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-start gap-2">
              <ArrowRight className="h-8 w-8 text-rojo" />
              <FormattedMessage id="diveCertification.tablePrice.title" />
            </h2>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm sm:text-base font-semibold border-b border-[#403d39] pb-2"></div>
              {pricingOptions.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b border-[#403d39] text-white/80 text-sm sm:text-base"
                >
                  <div className="text-center">{item.option}</div>
                  <div className="text-center">{item.cost}</div>
                  <div className="text-center w-full md:w-auto">
                    <ButtonRojo texto={"Reservar"} href={item.reserveLink} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}