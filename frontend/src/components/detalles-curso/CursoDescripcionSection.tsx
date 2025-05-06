import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check } from "lucide-react";

interface CourseDescriptionProps {
    description: string;
    learningOutcomes?: string[];
    includes?: string[];
    qualifications?: string[];
}

export default function CourseDescription({ description, learningOutcomes, includes, qualifications }: CourseDescriptionProps) {
    return (
        <div>
            <Card className="relative bg-negro-secundario shadow-md mb-8 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">Descripción</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 whitespace-pre-line">{description}</p>
                </CardContent>
            </Card>
            {learningOutcomes && learningOutcomes.length > 0 && (
                <Card className="bg-negro-secundario shadow-md mb-8 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">Lo que aprenderás</CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                        <ul className="space-y-3">
                            {learningOutcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-rojo mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
            {includes && includes.length > 0 && (
                <Card className="relative bg-negro-secundario shadow-md mb-8 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">¿Qué incluye?</CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                        <ul className="space-y-3">
                            {includes.map((include, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-rojo mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{include}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
            {qualifications && qualifications.length > 0 && (
                <Card className="relative bg-negro-secundario shadow-md mb-8 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">Los PADI Scuba Divers están calificados para:</CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                        <ul className="space-y-3">
                            {qualifications.map((qualification, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-rojo mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{qualification}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}