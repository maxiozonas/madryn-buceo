export interface Curso {
  title: string;
  shortDescription: string;
  description: string;
  details: string[];
  href: string;
  cardImage: string;
  level: "iniciacion" | "avanzados" | "profesional";
}

export const cursos: { [key in Curso["level"]]: Curso[] } = {
  iniciacion: [
    {
      title: "Scuba Diver",
      shortDescription: "Obtén tu certificación básica de buceo que te permite bucear bajo la supervisión de un profesional hasta 12 metros de profundidad.",
      description:
        "Para aquellos con limitaciones de tiempo o que prefieren una introducción más corta al mundo del buceo, ofrecemos la opción de realizar los primeros tres módulos del curso Open Water Diver. Con esta opción, puedes obtener la certificación de Scuba Diver que te permite bucear hasta 12 metros bajo la supervisión de un profesional. Este curso es un paso intermedio para obtener la certificación Open Water Diver, si ese es tu objetivo final.",
      details: [
        "Duración: 1 día",
        "Incluye introducción teórica y buceo en aguas abiertas",
        "Edad mínima: 10 años",
        "Profundidad máxima: 12 metros",
        "No requiere certificación previa",
      ],
      cardImage: "/images/cursos/scuba-diver.jpg",
      href: "/cursos/padi/scuba-diver",
      level: "iniciacion",
    },
    {
      title: "Open Water Diver",
      shortDescription: "Obtén tu certificación básica de buceo que te permite bucear bajo la supervisión de un profesional hasta 18 metros de profundidad.",
      description:
        "Conviértete en un buceador certificado con este curso introductorio. Aprende habilidades esenciales para bucear de forma independiente hasta 18 metros de profundidad.",
      details: [
        "Duración: 4-5 días",
        "Incluye teoría, prácticas en piscina y 4 buceos en aguas abiertas",
        "Edad mínima: 10 años",
        "Profundidad máxima: 18 metros",
        "Certificación PADI válida mundialmente",
      ],
      cardImage: "/images/cursos/open-water-diver.jpg",
      href: "/cursos/open-water-diver",
      level: "iniciacion",
    },
  ],
  avanzados: [
    {
      title: "Advanced Open Water Diver",
      shortDescription: "Amplía tus habilidades y experiencia de buceo explorando nuevas áreas de interés bajo la supervisión de un instructor.",
      description:
        "Explora nuevas aventuras y perfecciona tus habilidades con 5 buceos de especialidad, como buceo profundo y navegación subacuática.",
      details: [
        "Duración: 2-3 días",
        "Incluye 5 buceos de aventura",
        "Edad mínima: 12 años",
        "Profundidad máxima: 30 metros",
        "Requisito: Certificación Open Water Diver",
      ],
      cardImage: "/images/cursos/advanced-open-water.jpg",
      href: "/cursos/advanced-open-water",
      level: "avanzados",
    },
    {
      title: "Emergency First Response (EFR)",
      shortDescription: "Aprende técnicas de primeros auxilios y RCP para estar preparado en situaciones de emergencia tanto en tierra como bajo el agua.",
      description:
        "Domina técnicas de primeros auxilios y RCP para responder a emergencias tanto en el buceo como en la vida cotidiana.",
      details: [
        "Duración: 6-8 horas",
        "Incluye formación teórica y práctica",
        "Edad mínima: Sin requisito",
        "No requiere experiencia en buceo",
        "Certificación válida para Rescue Diver",
      ],
      cardImage: "/images/cursos/efr-instructor.jpg",
      href: "/cursos/emergency-first-response",
      level: "avanzados",
    },
    {
      title: "Rescue Diver",
      shortDescription: "Aprende a prevenir y gestionar problemas en el agua y conviértete en un buceador más seguro y consciente.",
      description:
        "Aprende a prevenir y manejar emergencias subacuáticas, convirtiéndote en un buceador más confiado y preparado.",
      details: [
        "Duración: 3-4 días",
        "Incluye ejercicios de rescate y escenarios prácticos",
        "Edad mínima: 12 años",
        "Requisitos: Advanced Open Water y EFR",
        "Certificación PADI reconocida mundialmente",
      ],
      cardImage: "/images/cursos/rescue-diver.jpg",
      href: "/cursos/rescue-diver",
      level: "avanzados",
    },
  ],
  profesional: [
    {
      title: "Divemaster",
      shortDescription: "Avanza en tu carrera de buceo y conviértete en un profesional capacitado para supervisar y guiar a otros buceadores.",
      description:
        "Conviértete en un líder del buceo, guiando a otros buceadores y asistiendo a instructores en este curso profesional intensivo.",
      details: [
        "Duración: 3-6 semanas (variable)",
        "Incluye formación teórica, práctica y supervisión",
        "Edad mínima: 18 años",
        "Requisitos: Rescue Diver, 40 inmersiones registradas",
        "Certificación para trabajar en la industria del buceo",
      ],
      cardImage: "/images/cursos/dive-master.jpg",
      href: "/cursos/divemaster",
      level: "profesional",
    },
  ],
};

export const allCursos: Curso[] = [
  ...cursos.iniciacion,
  ...cursos.avanzados,
  ...cursos.profesional,
];