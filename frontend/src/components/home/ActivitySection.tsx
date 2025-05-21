"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { excursiones } from "@/lib/data/Excursiones";
import ExcursionCard from "../excursiones/ExcursionCard";
import { FormattedMessage } from "react-intl";

export default function ActivitySection() {
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
    <section
      className="pb-20 pt-24"
      id="actividades"
      ref={ref}
    >
      <motion.div className="container flex flex-col items-center justify-center px-8 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 uppercase font-oceanica tracking-wide"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FormattedMessage id="home.activity.title" />
        </motion.h2>
        <motion.p
          className="text-lg text-center text-white mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FormattedMessage id="home.activity.description" />
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {excursiones.slice(0, 3).map((excursion, index) => (
            <ExcursionCard
              key={index}
              title={excursion.title}
              description={excursion.miniDescription}
              image={excursion.cardImage}
              link={`/excursiones/${excursion.slug}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
