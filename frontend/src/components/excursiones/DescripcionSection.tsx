"use client"

import Link from "next/link"
import ButtonRojo from "@/components/ui/button-rojo"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { FormattedMessage } from "react-intl"

interface DescripcionSectionProps {
  slug: string
  description: string[]
}

export default function DescripcionSection({ slug, description }: DescripcionSectionProps) {
  return (
    <section id="descripcion" className="pt-12 scroll-mt-16">
      <Card className="relative bg-negro-secundario shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <ArrowRight className="h-8 w-8 text-rojo" />
            <FormattedMessage id="descripcionSection.title" />
          </h2>
          <div className="space-y-4">
            {description.map((descKey, index) => {
              if (slug === "bautismo-buceo") {
                return (
                  <p key={index} className="text-white leading-relaxed mb-2">
                    <FormattedMessage
                      id={descKey}
                      values={{
                        discoverScubaDiving: (
                          <span className="font-bold text-rojo hover:underline">
                            <Link href="/cursos/padi/discover-scuba-diving">
                              <FormattedMessage id="descripcionSection.discoverScubaDiving" />
                            </Link>
                          </span>
                        ),
                      }}
                    />
                  </p>
                )
              }
              return (
                <p key={index} className="text-white leading-relaxed mb-2">
                  <FormattedMessage id={descKey} />
                </p>
              )
            })}
            {slug === "bautismo-buceo" && (
              <div className="my-4 text-center">
                <Link href="/cursos/padi/discover-scuba-diving">
                  <ButtonRojo
                    texto={<FormattedMessage id="descripcionSection.button.discoverScubaDiving" />}
                    href="/cursos/padi/discover-scuba-diving"
                  />
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}