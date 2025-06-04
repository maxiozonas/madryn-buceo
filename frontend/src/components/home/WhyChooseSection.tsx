"use client"

import type React from "react"
import { Anchor, Clock, Heart, SeparatorHorizontal, Shield, ThumbsUp, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ButtonRojo from "../ui/button-rojo"
import { FormattedMessage } from "react-intl";

export default function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="py-12 bg-negro-secundario" ref={ref}>
      <div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white uppercase tracking-wide shadow-md"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FormattedMessage id="home.whychoose.title" />
        </motion.h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-12 prose-lg">
          <FormattedMessage id="home.whychoose.description" />
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FeatureCard
            icon={<Clock className="h-12 w-12 text-rojo" />}
            title={<FormattedMessage id="home.whychoose.feature1.title" />}
            description={<FormattedMessage id="home.whychoose.feature1.description" />}
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-rojo" />}
            title={<FormattedMessage id="home.whychoose.feature2.title" />}
            description={<FormattedMessage id="home.whychoose.feature2.description" />}
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-rojo" />}
            title={<FormattedMessage id="home.whychoose.feature3.title" />}
            description={<FormattedMessage id="home.whychoose.feature3.description" />}
          />
          <FeatureCard
            icon={<ThumbsUp className="h-12 w-12 text-rojo" />}
            title={<FormattedMessage id="home.whychoose.feature4.title" />}
            description={<FormattedMessage id="home.whychoose.feature4.description" />}
          />
          <FeatureCard
            icon={<Heart className="h-12 w-12 text-rojo" />}
            title={<FormattedMessage id="home.whychoose.feature5.title" />}
            description={<FormattedMessage id="home.whychoose.feature5.description" />}
          />
          <FeatureCard
            icon={<Anchor className="h-12 w-12 text-rojo" />}
            title={<FormattedMessage id="home.whychoose.feature6.title" />}
            description={<FormattedMessage id="home.whychoose.feature6.description" />}
          />
        </motion.div>
        <div className="text-center mt-12">
          <ButtonRojo texto={<FormattedMessage id="home.whychoose.button" />} href="https://madrynbuceo.outtrip.com/"/>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: React.ReactNode; description: React.ReactNode }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div variants={cardVariants} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
      <Card className="border-none rounded-none bg-negro transition-shadow h-full">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <div className="mb-4 relative">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white ">{title}</h3>
          <SeparatorHorizontal className="w-24 h-1 bg-rojo mb-2 rounded-full" />
          <p className="text-white/80 prose-p text-center mt-auto">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}