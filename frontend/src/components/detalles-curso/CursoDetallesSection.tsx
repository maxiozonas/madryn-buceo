import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonRojo from "../ui/button-rojo";

interface CourseDetailsProps {
    duration?: string;
    depth?: string;
    certification?: string;
    requirements?: string[];
}

export default function CourseDetails({ duration, depth, certification, requirements }: CourseDetailsProps) {
    return (
        <div className="lg:col-span-1 relative">
            <Card className="sticky top-6 text-white bg-negro-secundario border-gray-800">
              <CardHeader>
                <CardTitle>Detalles del Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Duración</h4>
                  <p className="text-white/80">{duration || "Consultar"}</p>
                </div>
                
                {depth && (
                  <div>
                    <h4 className="font-semibold mb-2">Profundidad</h4>
                    <p className="text-white/80">{depth}</p>
                  </div>
                )}
                
                {certification && (
                  <div>
                    <h4 className="font-semibold mb-2">Certificación</h4>
                    <p className="text-white/80">{certification}</p>
                  </div>
                )}
                
                {requirements && (
                  <div>
                    <h4 className="font-semibold mb-2">Requisitos</h4>
                    <ul className="list-disc text-white/80 pl-6">
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