"use client";

import React, { ReactNode } from "react";
import ImageGallery from "./ImageGallery";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileClock, House, Users } from "lucide-react";
import { FormattedMessage } from "react-intl";

const historyMedia: { type: "image" | "video"; url: string }[] = [
  { url: "https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/nosotros/GaleriaLocal/galeriaLocal2_nxa28x.webp", type: "image" },
  { url: "https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/nosotros/GaleriaLocal/galeriaLocal1_xagqad.webp", type: "image" },
  { url: "https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/nosotros/GaleriaLocal/galeriaLocal3_wrb28t.webp", type: "image" },
];

export function AboutCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="mt-26 mb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <section ref={ref}>
        <div className="container mx-auto px-8">
          <motion.div
            className="mt-16 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AboutCard
              title={
                <div className="flex items-center gap-2">
                  <House className="h-6 w-6 text-rojo" />
                  <FormattedMessage id ={"our.store"}/>
                </div>
              }
              description={
                <FormattedMessage id ={"our.store2"}/>
              }>
              <ImageGallery
                media={historyMedia}
                className="absolute inset-0 w-full h-full"
                style={{ borderRadius: 0 }}/>
              </AboutCard>
      

            <AboutCard
              title={
                <div className="flex items-center gap-2">
                  <FileClock className="h-6 w-6 text-rojo" />
                  <FormattedMessage id ={"our.history"}/>
                </div>
              }
              description={
                <FormattedMessage id ={"our.history2"}/>
              }
              videoSrc="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/videos/nosotros/docu_wtmto4.mp4"
            >
            </AboutCard>

            <AboutCard
              title={
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-rojo" />
                  <FormattedMessage id ={"our.staff"}/>
                </div>
              }
              description={<FormattedMessage id ={"our.staff2"}/>}
              imageSrc="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/nosotros/staff_nrcxj9.jpg"
            />
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
}

function AboutCard({
  title,
  description,
  imageSrc,
  videoSrc,
  children,
}: {
  title: ReactNode;
  description: ReactNode;
  imageSrc?: string;
  videoSrc?: string;
  children?: React.ReactNode;
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
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
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Card
        className="overflow-hidden h-full flex flex-col shadow-lg bg-[#252422] border-[#403d39] hover:shadow-xl transition-shadow p-0"
        style={{ borderRadius: 0 }}
      >
        <div className="relative h-64" style={{ borderRadius: 0 }}>
          {imageSrc && (
<img
  src={imageSrc}
  alt=""
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
  style={{ borderRadius: 0 }}
/>

          )}
          {videoSrc && (
            <video
              controls
              className="w-full h-full object-cover"
              style={{ borderRadius: 0 }}
            >
              <source src={videoSrc} type="video/mp4" />
              <FormattedMessage id ={"browser"}/>
            </video>
          )}
          {children}
        </div>
        <CardContent className="text-white flex flex-col flex-grow p-4">
          <motion.div className="mb-4" variants={contentVariants}>
            <h3 className="text-white font-bold font-oceanica tracking-tight line-clamp-1">
              {title}
            </h3>
          </motion.div>
          <motion.p
            className="text-white/80 text-sm flex-grow whitespace-pre-line "
            variants={contentVariants}
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}