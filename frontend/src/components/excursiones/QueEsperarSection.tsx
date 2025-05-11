"use client"

import type { Excursion } from "@/lib/data/Excursiones"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shirt,
  BookOpen,
  Ship,
  Waves,
  Fish,
  Home,
  Clock,
  Map,
  Users,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface QueEsperarSectionProps {
  excursion: Excursion
}

export default function QueEsperarSection({ excursion }: QueEsperarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const getIcon = (index: number) => {
    const icons = [
      <Shirt key="shirt" className="h-6 w-6 text-rojo" />,
      <BookOpen key="book" className="h-6 w-6 text-rojo" />,
      <Ship key="ship" className="h-6 w-6 text-rojo" />,
      <Waves key="waves" className="h-6 w-6 text-rojo" />,
      <Fish key="fish" className="h-6 w-6 text-rojo" />,
      <Home key="home" className="h-6 w-6 text-rojo" />,
      <Clock key="clock" className="h-6 w-6 text-rojo" />,
      <Map key="map" className="h-6 w-6 text-rojo" />,
      <Users key="users" className="h-6 w-6 text-rojo" />,
    ]

    return icons[index % icons.length]
  }

  return (
    <Card className="bg-negro-secundario p-0 shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <button
          onClick={toggleExpanded}
          className="w-full cursor-pointer flex justify-between items-center text-left font-bold text-2xl text-white hover:text-gray-200 transition-colors duration-200"
        >
          <div className="flex items-center gap-2">
            <ArrowRight className="h-8 w-8 text-rojo" />
            <span>¿Qué esperar?</span>
          </div>
          {isExpanded ? <Minus className="h-7 w-7 text-rojo" /> : <Plus className="h-7 w-7 text-rojo" />}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-6"
            >
              <div className="space-y-4">
                {excursion.whatToExpect.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mr-4 mt-3 flex items-center justify-center w-10">{getIcon(index)}</div>
                    <div>
                      <h3 className="font-bold text-white">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-white text-sm mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
