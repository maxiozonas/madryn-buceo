import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Curso } from "@/lib/data/Cursos";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <Card className="overflow-hidden p-2 border-none shadow-lg bg-negro-secundario hover:shadow-xl transition-shadow">
        <div className="relative h-64">
          <Image
            src={course.cardImage}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110 rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
        </div>
        <CardContent className="p-4 text-white">
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
            className="text-white/80 mb-4 text-sm"
            variants={contentVariants}
          >
            {course.shortDescription}
          </motion.p>
          <motion.div variants={contentVariants}>
            <Button
              asChild
              className="w-full bg-rojo hover:bg-rojo/50 text-white transition-all duration-300 text-lg font-semibold"
            >
              <Link href={course.href}>Ver más</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}