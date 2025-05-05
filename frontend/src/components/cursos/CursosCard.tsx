import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Curso } from "@/lib/data/Cursos";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonRojo from "../ui/button-rojo";

interface CursoCardProps {
  course: Curso;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      delay: 0.2,
      duration: 0.4
    }
  }
};

export default function CursoCard({ course }: CursoCardProps) {
  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "programa":
        return "default";
      case "iniciacion":
        return "default";
      case "avanzados":
        return "secondary";
      case "profesional":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Card className="overflow-hidden h-full flex flex-col pt-0 border-none shadow-lg bg-negro-secundario hover:shadow-xl transition-shadow">
        <div className="relative h-64">
          <Image
            src={course.cardImage}
            alt={course.title}
            width={500}
            height={500}
            className="object-cover transition-transform duration-300"
          />
        </div>
        <CardContent className="text-white flex flex-col flex-grow">
          <motion.div 
            className="flex justify-between items-center mb-4"
            variants={contentVariants}
          >
            <h3 className="text-sm uppercase font-extrabold text-white font-oceanica tracking-tight line-clamp-1">
              {course.title}
            </h3>
            <Badge  
              variant={getBadgeVariant(course.level)}
              className="uppercase text-xs font-semibold"
            >
              {course.level}
            </Badge>
          </motion.div>
          <motion.p 
            className="text-white/80 mb-4 text-sm flex-grow"
            variants={contentVariants}
          >
            {course.shortDescription}
          </motion.p>
          <motion.div variants={contentVariants} className="mt-auto">
            <ButtonRojo
              texto="Mas información"
              fullWidth={true}
              href={course.href}
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}