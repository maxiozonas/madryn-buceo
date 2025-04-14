import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Curso } from "@/lib/data/Cursos";

interface CursoCardProps {
  course: Curso;
}

export default function CursoCard({ course }: CursoCardProps) {
  return (
    <Card className="bg-[#252422] border-[#403d39] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white font-oceanica">
          {course.title}
        </CardTitle>
        <p className="text-[#e12222] text-sm font-medium">
          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-white/80 text-sm leading-relaxed">
          {course.shortDescription}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-[#e12222] hover:bg-[#ff4d4d] text-white font-medium"
        >
          <Link href={course.href} className="flex items-center justify-center">
            Ver Curso
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}