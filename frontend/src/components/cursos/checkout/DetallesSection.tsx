"use client";

import { LifeBuoy, Award, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { ReactNode } from "react";

export default function DetallesSection() {
  const details = [
    {
      title: <FormattedMessage id={"equipment"}/>,
      description: <FormattedMessage id={"equipment2"}/>,
      icon: "lifebuoy",
    },
    {
      title: <FormattedMessage id={"supervision"}/>,
      description: <FormattedMessage id={"supervision2"}/>,
      icon: "award",
    },
    {
      title: <FormattedMessage id={"Certification"}/>,
      description: <FormattedMessage id={"certification2"}/>,
      icon: "star",
    },
  ];

  const getIcon = (detail: { title?: ReactNode; description?: ReactNode; icon: unknown; }) => {
    switch ((detail.icon as string).toLowerCase()) {
      case "lifebuoy":
        return <LifeBuoy className="h-6 w-6 text-rojo" />;
      case "award":
        return <Award className="h-6 w-6 text-rojo" />;
      case "star":
        return <Star className="h-6 w-6 text-rojo" />;
      default:
        return <Award className="h-6 w-6 text-rojo" />;
    }
  };

  return (
    <Card className="bg-negro-secundario shadow-md border-[#403d39] hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <ArrowRight className="h-8 w-8 text-rojo" />
          <FormattedMessage id={"queincluye"}/>
        </h2>
        <div className="space-y-4">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-negro/40 p-4 rounded-lg hover:bg-negro/60 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mr-4 mt-2 flex items-start justify-center">{getIcon(detail)}</div>
              <div>
                <h3 className="font-bold text-white">{detail.title}</h3>
                <p className="text-white text-sm">{detail.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}