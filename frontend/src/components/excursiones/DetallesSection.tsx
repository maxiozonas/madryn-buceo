"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, LifeBuoy, Award, Fish, UserPlus, Anchor, Star, Shuffle, Map, ThumbsUp, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import type { ExcursionDetail } from "@/lib/data/Excursiones"

interface DetallesSectionProps {
  details: ExcursionDetail[]
}

export default function DetallesSection({ details }: DetallesSectionProps) {
  const getIcon = (detail: ExcursionDetail) => {
    if (detail.icon) {
      switch (detail.icon.toLowerCase()) {
        case "clock":
          return <Clock className="h-6 w-6 text-rojo" />
        case "users":
          return <Users className="h-6 w-6 text-rojo" />
        case "lifebuoy":
          return <LifeBuoy className="h-6 w-6 text-rojo" />
        case "award":
          return <Award className="h-6 w-6 text-rojo" />
        case "fish":
          return <Fish className="h-6 w-6 text-rojo" />
        case "userplus":
          return <UserPlus className="h-6 w-6 text-rojo" />
        case "anchor":
          return <Anchor className="h-6 w-6 text-rojo" />
        case "star":
          return <Star className="h-6 w-6 text-rojo" />
        case "shuffle":
          return <Shuffle className="h-6 w-6 text-rojo" />
        case "map":
          return <Map className="h-6 w-6 text-rojo" />
        case "thumbsup":
          return <ThumbsUp className="h-6 w-6 text-rojo" />
        case "user":
          return <User className="h-6 w-6 text-rojo" />
        default:
          return <Award className="h-6 w-6 text-rojo" />
      }
    }

    const lowerTitle = detail.title.toLowerCase()
    if (lowerTitle.includes("duración") || lowerTitle.includes("hora")) {
      return <Clock className="h-6 w-6 text-rojo" />
    } else if (lowerTitle.includes("guía") || lowerTitle.includes("instructor")) {
      return <Award className="h-6 w-6 text-rojo" />
    } else if (lowerTitle.includes("equipamiento") || lowerTitle.includes("equipo")) {
      return <LifeBuoy className="h-6 w-6 text-rojo" />
    } else if (lowerTitle.includes("todos") || lowerTitle.includes("público")) {
      return <Users className="h-6 w-6 text-rojo" />
    } else {
      return <Award className="h-6 w-6 text-rojo" />
    }
  }

  return (
    <Card className="bg-negro-secundario shadow-md border-[#403d39] hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ArrowRight className="h-8 w-8 text-rojo" />
          Detalles de la Experiencia</h2>
        <div className="space-y-4">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mr-4 mt-2 flex items-center justify-center w-10">{getIcon(detail)}</div>
              <div>
                <h3 className="font-bold text-white">{detail.title}</h3>
                <p className="text-white text-sm">{detail.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
