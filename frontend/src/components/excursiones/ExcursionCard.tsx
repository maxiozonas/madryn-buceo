import { motion } from "framer-motion"
import { Card } from "../ui/card"
import Link from "next/link"
import Image from "next/image"
import { CardContent } from "../ui/card"
import ButtonRojo from "../ui/button-rojo"

export default function ExcursionCard({
  title,
  description,
  image,
  link
}: {
  title: string
  description: string
  image: string
  link: string
}) {
  const slug = link.split('/').pop() || ''

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
    <motion.div
      variants={cardVariants}
      className="group relative bg-[#252422] overflow-hidden shadow-md h-full flex flex-col"
      layoutId={`card-container-${slug}`}
    >
      <Card className="overflow-hidden p-0 border-none rounded-none shadow-md bg-negro-secundario transition-shadow h-full">
        <Link href={link} className="h-full flex flex-col">
          <div className="relative overflow-hidden h-64">
            <motion.div layoutId={`card-image-container-${slug}`} className="w-full h-full rounded-none">
              <Image
                src={image}
                alt={title}
                fill
                className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                priority
                id={`excursion-image-${slug}`}
              />
            </motion.div>
          </div>
          <CardContent className="flex flex-col items-center text-center text-white relative p-6 flex-grow justify-between">
            <motion.h3
              layoutId={`card-title-${slug}`}
              className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
            >
              {title}
            </motion.h3>
            <div className="flex-grow mb-6">
              <p className="text-gray-300 line-clamp-3">{description}</p>
            </div>
            <div className="mt-auto w-full">
              <ButtonRojo texto="Mas información" fullWidth={true} href={link} />
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}