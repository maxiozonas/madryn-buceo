import Link from "next/link"
import ButtonRojo from "@/components/ui/button-rojo"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

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
            Descripción
          </h2>
          <div className="space-y-4">
            {description.map((paragraph, index) => {
              if (slug === "bautismo-buceo" && paragraph.toLowerCase().includes("discover scuba diving")) {
                const parts = paragraph.split(/(discover scuba diving)/i)
                return (
                  <p key={index} className="text-white leading-relaxed mb-2">
                    {parts.map((part, i) =>
                      part.toLowerCase() === "discover scuba diving" ? (
                        <span key={i} className="font-bold text-rojo hover:underline">
                          <Link href="/cursos/padi/discover-scuba-diving">{part}</Link>
                        </span>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                )
              }
              return (
                <p key={index} className="text-white leading-relaxed mb-2">
                  {paragraph}
                </p>
              )
            })}
            {slug === "bautismo-buceo" && (
              <div className="my-4 text-center">
                <Link href="/cursos/padi/discover-scuba-diving">
                  <ButtonRojo texto="Ir a Discover Scuba Diving" href="/cursos/padi/discover-scuba-diving" />
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
