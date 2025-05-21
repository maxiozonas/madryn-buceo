"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check, BookOpen, Award, Package, Briefcase } from "lucide-react";
import { FormattedMessage } from "react-intl";

interface CourseDescriptionProps {
  description: ReactNode;
  learningOutcomes?: string[];
  includes?: string[];
  qualifications?: string[];
}

export default function CourseDescription({
  description,
  learningOutcomes,
  includes,
  qualifications,
}: CourseDescriptionProps) {
  return (
    <div>
      <Card className="relative bg-negro-secundario shadow-md mb-8 border-[#403d39]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-rojo" />
            <FormattedMessage
              id="cursos.description.title"
              defaultMessage="Descripción"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <p className="text-gray-300 whitespace-pre-line">{description}</p>
        </CardContent>
      </Card>
      {learningOutcomes && learningOutcomes.length > 0 && (
        <Card className="relative bg-negro-secundario shadow-md mb-8 border-[#403d39]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="h-6 w-6 text-rojo" />
              <FormattedMessage
                id="cursos.learningOutcomes.title"
                defaultMessage="Lo que aprenderás"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <ul className="space-y-3">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-rojo mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <FormattedMessage id={outcome} />
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {includes && includes.length > 0 && (
        <Card className="relative bg-negro-secundario shadow-md mb-8 border-[#403d39]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <Package className="h-6 w-6 text-rojo" />
              <FormattedMessage
                id="cursos.includes.title"
                defaultMessage="¿Qué incluye?"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <ul className="space-y-3">
              {includes.map((include, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-rojo mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <FormattedMessage id={include} />
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {qualifications && qualifications.length > 0 && (
        <Card className="relative bg-negro-secundario shadow-md mb-8 border-[#403d39]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-rojo" />
              <FormattedMessage
                id="cursos.qualifications.title"
                defaultMessage="Los PADI Scuba Divers están calificados para:"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <ul className="space-y-3">
              {qualifications.map((qualification, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-rojo mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <FormattedMessage id={qualification} />
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
