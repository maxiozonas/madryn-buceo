"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { FormattedMessage } from "react-intl";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;


export default function MapSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE_OUT, // ✅ FIX
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      className="mt-6 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-8">
        <motion.div
          className="mt-8 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="overflow-hidden h-full flex flex-col shadow-lg bg-[#252422] border-[#403d39] hover:shadow-xl transition-shadow p-0 rounded-lg">
              <div className="relative h-64 rounded-t-lg">
                <iframe
                  className="h-full w-full rounded-t-lg"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2928.441243190807!2d-65.017134!3d-42.779021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe024aaf5130b587%3A0x67d8409a6b02a656!2sMadryn%20Buceo!5e0!3m2!1ses!2sar!4v1747014001371!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <CardContent className="text-white flex flex-col flex-grow p-4">
                <motion.div
                  className="mb-4 flex justify-center"
                  variants={contentVariants}
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-rojo" />
                    <FormattedMessage id="here" defaultMessage="here" />
                  </h2>
                </motion.div>
                <motion.p
                  className="text-white/80 text-sm text-center whitespace-pre-line"
                  variants={contentVariants}
                >
                  <FormattedMessage id="see.you" defaultMessage="About Us" />
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
