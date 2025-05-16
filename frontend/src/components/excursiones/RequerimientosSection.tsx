"use client"

import { Calendar, Activity, Heart, ArrowRight, Info } from "lucide-react"
import type { Excursion } from "@/lib/data/Excursiones"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { FormattedMessage } from "react-intl"

interface RequerimientosSectionProps {
  excursion: Excursion
}

export default function RequirementsSection({ excursion }: RequerimientosSectionProps) {
  if (!excursion.requirements || excursion.requirements.length === 0) {
    let imageSrc = excursion.cardImage

    if (excursion.slug.includes("salidas")) {
      imageSrc = "/images/excursiones/salidas/salidas-5.webp"
    } else if (excursion.slug.includes("delfines")) {
      imageSrc = "/images/excursiones/delfines/delfines-2.webp"
    }

    return (
      <Card className="bg-negro-secundario shadow-md border-gray-800 h-full p-0 rounded-2xl">
        <CardContent className="p-0 overflow-hidden h-full rounded-2xl">
          <div className="relative w-full h-full rounded-2xl" style={{ minHeight: "100%" }}>
            <Image
              src={imageSrc}
              alt="formattedMessage({ id: `${excursion.title}.noRequirementsAlt` })"
              fill
              className="object-cover"
            />
            <span className="sr-only">
              <FormattedMessage id={`${excursion.title}.noRequirementsAlt`} />
            </span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getIcon = (reqKey: string) => {
    if (reqKey.includes("minAge")) {
      return <Calendar className="h-6 w-6 text-rojo" />
    } else if (reqKey.includes("physicalCondition")) {
      return <Activity className="h-6 w-6 text-rojo" />
    } else if (reqKey.includes("health")) {
      return <Heart className="h-6 w-6 text-rojo" />
    } else {
      return <Info className="h-6 w-6 text-rojo" />
    }
  }

  return (
    <Card className="bg-negro-secundario shadow-md border-[#403d39] hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ArrowRight className="h-8 w-8 text-rojo" />
          <FormattedMessage id="requerimientosSection.title" />
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {excursion.requirements.slice(0, -1).map((req, index) => (
              <div
                key={index}
                className="bg-negro/40 p-6 rounded-lg hover:bg-negro/60 transition-colors duration-200 flex flex-col items-center text-center"
              >
                <div className="mb-4 bg-negro/60 p-4 rounded-full">{getIcon(req.title)}</div>
                <h3 className="font-bold text-white text-lg mb-2">
                  <FormattedMessage id={req.title} />
                </h3>
                <p className="text-white text-sm">
                  <FormattedMessage id={req.description} />
                </p>
              </div>
            ))}
          </div>

          {excursion.requirements.length > 0 && (
            <div
              key="last-requirement"
              className="bg-negro/40 p-6 rounded-lg hover:bg-negro/60 transition-colors duration-200 flex flex-col items-center text-center w-full"
            >
              <div className="mb-4 bg-negro/60 p-4 rounded-full">
                {getIcon(excursion.requirements[excursion.requirements.length - 1].title)}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">
                <FormattedMessage id={excursion.requirements[excursion.requirements.length - 1].title} />
              </h3>
              <p className="text-white text-sm">
                <FormattedMessage id={excursion.requirements[excursion.requirements.length - 1].description} />
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}