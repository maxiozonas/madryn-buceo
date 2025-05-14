import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Curso } from "@/lib/data/Cursos";
import Image from "next/image";
import ButtonRojo from "../ui/button-rojo";

interface CursoCardProps {
  course: Curso;
}


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
    <div>
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
          <div 
            className="flex justify-between items-center mb-4"
          >
            <h3 className="text-sm uppercase font-extrabold text-white font-oceanica tracking-tight line-clamp-1">
              {course.title}
            </h3>
            <Badge  
              variant={getBadgeVariant(course.level)}
              className="uppercase text-xs font-semibold rounded-md"
            >
              {course.level}
            </Badge>
          </div>
          <p 
            className="text-white/80 mb-4 text-sm flex-grow"
          >
            {course.shortDescription}
          </p>
          <div className="mt-auto">
            <ButtonRojo
              texto="Mas información"
              fullWidth={true}
              href={course.href}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}