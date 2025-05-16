"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonRojo from "../ui/button-rojo";
import { Clock, Anchor, Award, ListChecks, Info } from "lucide-react";
import { FormattedMessage } from "react-intl";

interface CourseDetailsProps {
  duration?: string;
  depth?: string;
  certification?: string;
  requirements?: string[];
  slug?: string;
}

export default function CourseDetails({
  duration,
  depth,
  certification,
  requirements,
  slug,
}: CourseDetailsProps) {
  return (
    <div className="lg:col-span-1 relative">
      <Card className="sticky top-6 text-white bg-negro-secundario border-[#403d39]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-6 w-6 text-rojo" />
            <FormattedMessage
              id={
                slug === "discover-scuba-diving"
                  ? "courseDetails.title.program"
                  : "courseDetails.title.course"
              }
              defaultMessage={
                slug === "discover-scuba-diving" ? "Program Details" : "Course Details"
              }
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-5 w-5 text-rojo" />
              <FormattedMessage id="time" defaultMessage="Duration" />
            </h4>
            <p className="text-white/80 ml-7">
              {duration ? (
                <FormattedMessage id={duration} defaultMessage="Consult" />
              ) : (
                <FormattedMessage
                  id="courseDetails.consult"
                  defaultMessage="Consult"
                />
              )}
            </p>
          </div>

          {depth && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Anchor className="h-5 w-5 text-rojo" />
                <FormattedMessage id="depth" defaultMessage="Depth" />
              </h4>
              <p className="text-white/80 ml-7">
                <FormattedMessage id={depth} defaultMessage="Consult" />
              </p>
            </div>
          )}

          {certification && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-rojo" />
                <FormattedMessage
                  id="certification"
                  defaultMessage="Certification"
                />
              </h4>
              <p className="text-white/80 ml-7">
                <FormattedMessage id={certification} defaultMessage="Consult" />
              </p>
            </div>
          )}

          {requirements && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-rojo" />
                <FormattedMessage
                  id="requirements"
                  defaultMessage="Requirements"
                />
              </h4>
              <ul className="text-white/80 pl-7 space-y-2">
                {requirements.map((requirement, index) => (
                  <li key={index}>
                    <FormattedMessage
                      id={requirement}
                      defaultMessage="Consult"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4">
            <ButtonRojo
              texto={
                <FormattedMessage
                  id="requestInfo"
                  defaultMessage="Request More Information"
                />
              }
              fullWidth={true}
              href="/contacto"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}