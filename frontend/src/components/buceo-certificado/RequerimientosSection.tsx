"use client"

import {
  Calendar,
  Thermometer,
  BadgeCheck,
  HeartPulse,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FormattedMessage } from "react-intl"
import { Card, CardContent } from "@/components/ui/card"

export default function RequerimientosSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const getIcon = (index: number) => {
    const icons = [
      <Calendar key="calendar" className="h-6 w-6 text-rojo" />,
      <Thermometer key="thermometer" className="h-6 w-6 text-rojo" />,
      <BadgeCheck key="badge" className="h-6 w-6 text-rojo" />,
      <HeartPulse key="heart" className="h-6 w-6 text-rojo" />,
    ]

    return icons[index % icons.length]
  }

  const requirements = [
    {
      title: "diveCertification.requirements.text1.title",
      description: "diveCertification.requirements.text1.text",
    },
    {
      title: "diveCertification.requirements.text2.title",
      description: "diveCertification.requirements.text2.text",
    },
    {
      title: "diveCertification.requirements.text3.title",
      description: "diveCertification.requirements.text3.text",
    },
    {
      title: "diveCertification.requirements.text4.title",
      description: "diveCertification.requirements.text4.text",
    },
  ]

  return (
    <Card className="bg-negro-secundario p-0 shadow-md mb-8 border-[#403d39] hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <button
          onClick={toggleExpanded}
          className="w-full cursor-pointer flex justify-between items-center text-left font-bold text-2xl text-white hover:text-gray-200 transition-colors duration-200"
        >
          <div className="flex items-center gap-2">
            <ArrowRight className="h-8 w-8 text-rojo" />
            <span>
              <FormattedMessage id="diveCertification.requirements.title" />
            </span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-4 bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 p-3 bg-[#e12222]/10 rounded-full">{getIcon(index)}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-white text-center mb-2">
                        {index + 1}. <FormattedMessage id={item.title} />
                      </h3>
                      <p className="text-white/80 text-sm text-center">
                        <FormattedMessage id={item.description} />
                      </p>
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
