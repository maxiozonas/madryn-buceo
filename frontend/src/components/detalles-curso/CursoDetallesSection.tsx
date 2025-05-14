import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonRojo from "../ui/button-rojo";
import { Clock, Anchor, Award, ListChecks, Info } from "lucide-react";

interface CourseDetailsProps {
    duration?: string;
    depth?: string;
    certification?: string;
    requirements?: string[];
    slug?: string;
}

export default function CourseDetails({ duration, depth, certification, requirements, slug }: CourseDetailsProps) {
    return (
        <div className="lg:col-span-1 relative">
            <Card className="sticky top-6 text-white bg-negro-secundario border-[#403d39]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-6 w-6 text-rojo" />
                  {slug === "discover-scuba-diving" ? "Detalles del Programa" : "Detalles del Curso"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-rojo" />
                    Duración
                  </h4>
                  <p className="text-white/80 ml-7">{duration || "Consultar"}</p>
                </div>
                
                {depth && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Anchor className="h-5 w-5 text-rojo" />
                      Profundidad
                    </h4>
                    <p className="text-white/80 ml-7">{depth}</p>
                  </div>
                )}
                
                {certification && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-rojo" />
                      Certificación
                    </h4>
                    <p className="text-white/80 ml-7">{certification}</p>
                  </div>
                )}
                
                {requirements && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <ListChecks className="h-5 w-5 text-rojo" />
                      Requisitos
                    </h4>
                    <ul className="text-white/80 pl-7 space-y-2">
                      {requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="pt-4">
                  <ButtonRojo texto="Solicitar más información" fullWidth={true} href="/contacto"/>
                </div>
              </CardContent>
            </Card>
          </div>
    );
}