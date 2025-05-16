"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import googleLogo from "../../../public/images/inicio/google.png"
import { Reseña } from "@/lib/types/reseñas"
import { Button } from "../ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { reseñas } from "@/lib/data/Reseñas"
import { FormattedMessage, useIntl } from "react-intl"


export default function ReseñasSection() {
  const controls = useAnimation();
  const intl = useIntl();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-12 bg-negro-secundario overflow-hidden">
      <motion.div 
        className="container flex flex-col items-center justify-center px-8 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 uppercase font-oceanica tracking-wide shadow-md"
          variants={titleVariants}
        >
          <FormattedMessage id="home.reseñas.title" />
        </motion.h2>
        <motion.p 
          className="text-center text-white max-w-3xl mx-auto mb-12"
          variants={titleVariants}
          dangerouslySetInnerHTML={{ 
            __html: intl.formatMessage({ id: 'home.reseñas.description' })
          }}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainerVariants}
        >
          <AnimatePresence>
            {reseñas.map((reseña, index) => (
              <ReseñaCard key={reseña.id} reseña={reseña} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-12 flex items-center justify-center"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Link 
            target="_blank" 
            href="https://www.google.com/search?q=madryn+buceo&oq=madryn+buceo+&gs_lcrp=EgZjaHJvbWUyBggAEEUYPDILCAEQRRgeGDkYqQYyCAgCEAAYFhgeMgsIAxAAGAUYHhipBjILCAQQABgFGB4YqQYyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNjI5ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0xbe024aaf5130b587:0x67d8409a6b02a656,1,,,,"
            className="w-full flex justify-center"
          >
            <Button
              className="bg-white hover:bg-white text-black text-lg font-semibold cursor-pointer flex items-center gap-2"
            >
              <Image src={googleLogo} alt="Google" width={24} height={24} />
              <FormattedMessage id="home.reseñas.button" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ReseñaCard({ reseña, index }: { reseña: Reseña; index: number }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3 + (index * 0.1)
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
    >
      <Card className="border-none h-full shadow-lg bg-negro rounded-none text-white">
        <CardContent className="p-6">
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          >
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image src={reseña.image || "/placeholder.svg"} alt={reseña.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-medium"><FormattedMessage id={reseña.name} /></h4>
              <p className="text-xs"><FormattedMessage id={reseña.date} /></p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex mb-4 items-center"
            variants={starContainerVariants}
          >
            <Image src={googleLogo} alt="Google" width={20} height={20} className="mr-2"/>
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} variants={starVariants}>
                <Star
                  className={`h-5 w-5 ${i < reseña.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-md line-clamp-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
          >
            <FormattedMessage id={reseña.text} />
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
