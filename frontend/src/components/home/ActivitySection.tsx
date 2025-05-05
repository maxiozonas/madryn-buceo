"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { excursiones } from "@/lib/data/Excursiones"
import ExcursionCard from "../excursiones/ExcursionCard"

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
          Nuestras Actividades
        </motion.h2>
        <motion.p
          className="text-lg text-center text-white mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Descubre las emocionantes actividades que ofrecemos en la Patagonia.
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

// function ActivityCard({
//   title,
//   description,
//   image,
//   link
// }: {
//   title: string
//   description: string
//   image: string
//   link: string
// }) {
//   const router = useRouter()
//   const slug = link.split('/').pop() || ''

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   }

//   const handleNavigate = (e: React.MouseEvent) => {
//     e.preventDefault()
//     sessionStorage.setItem('scrollPosition', window.scrollY.toString())
//     sessionStorage.setItem('transitionSource', slug)
//     router.push(link)
//   }

//   return (
//     <motion.div
//       variants={cardVariants}
//       className="group relative bg-[#252422] overflow-hidden shadow-md h-full flex flex-col"
//       layoutId={`card-container-${slug}`}
//     >
//       <Card className="overflow-hidden rounded-sm pt-0 border-none shadow-md bg-negro-secundario transition-shadow">
//         <Link href={link} onClick={handleNavigate} className="block">
//           <div className="relative overflow-hidden h-64">
//             <motion.div layoutId={`card-image-container-${slug}`} className="w-full h-full">
//               <Image
//                 src={image}
//                 alt={title}
//                 fill
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 priority
//                 id={`activity-image-${slug}`}
//               />
//             </motion.div>
//           </div>
//           <CardContent className="flex flex-col items-center text-center text-white relative p-6">
//             <motion.h3
//               layoutId={`card-title-${slug}`}
//               className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
//             >
//               {title}
//             </motion.h3>
//             <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{description}</p>
//             <ButtonRojo texto="Mas información" fullWidth={true} href={link} />
//           </CardContent>
//         </Link>
//       </Card>
//     </motion.div>
//   )
// }