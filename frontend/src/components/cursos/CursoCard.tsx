import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Curso } from "@/lib/data/Cursos";
import Image from "next/image";

interface CursoCardProps {
  course: Curso;
}

export default function CursoCard({ course }: CursoCardProps) {
  return (
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
        <CardContent className="p-4 flex flex-col items-center text-center text-white relative">
          <h3 className="text-lg uppercase font-extrabold mb-2 text-white font-oceanica tracking-tight">
            {course.title}
          </h3>
          <p className="text-white/80 mb-4 text-sm">{course.shortDescription}</p>
          <Button
            asChild
            className="w-full bg-rojo hover:bg-rojo/50  text-white transition-all duration-300 text-lg font-semibold"
          >
            <Link href={course.href}>Ver más</Link>
          </Button>
        </CardContent>
      </Card>
  );
}