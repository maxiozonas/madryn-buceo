export interface Curso {
  title: string;
  shortDescription: string;
  description: string;
  details: string[];
  href: string;
  level: "iniciacion" | "avanzados" | "profesional";
}

export const cursos: { [key in Curso["level"]]: Curso[] } = {
  iniciacion: [
    {
      title: "Discover Scuba Diving",
      shortDescription: "Una introducción rápida al buceo",
      description:
        "Experimenta la emoción de bucear por primera vez bajo la supervisión de un instructor PADI. Ideal para probar el buceo sin comprometerte a un curso completo.",
      details: [
        "Duración: 1 día",
        "Incluye introducción teórica y buceo en aguas abiertas",
        "Edad mínima: 10 años",
        "Profundidad máxima: 12 metros",
        "No requiere certificación previa",
      ],
      href: "/cursos/discover-scuba-diving",
      level: "iniciacion",
    },
    {
      title: "Open Water Diver",
      shortDescription: "Certificación básica de buceo",
      description:
        "Conviértete en un buceador certificado con este curso introductorio. Aprende habilidades esenciales para bucear de forma independiente hasta 18 metros de profundidad.",
      details: [
        "Duración: 4-5 días",
        "Incluye teoría, prácticas en piscina y 4 buceos en aguas abiertas",
        "Edad mínima: 10 años",
        "Profundidad máxima: 18 metros",
        "Certificación PADI válida mundialmente",
      ],
      href: "/cursos/open-water-diver",
      level: "iniciacion",
    },
  ],
  avanzados: [
    {
      title: "Advanced Open Water Diver",
      shortDescription: "Mejora tus habilidades de buceo",
      description:
        "Explora nuevas aventuras y perfecciona tus habilidades con 5 buceos de especialidad, como buceo profundo y navegación subacuática.",
      details: [
        "Duración: 2-3 días",
        "Incluye 5 buceos de aventura",
        "Edad mínima: 12 años",
        "Profundidad máxima: 30 metros",
        "Requisito: Certificación Open Water Diver",
      ],
      href: "/cursos/advanced-open-water",
      level: "avanzados",
    },
    {
      title: "Emergency First Response (EFR)",
      shortDescription: "Habilidades para emergencias",
      description:
        "Domina técnicas de primeros auxilios y RCP para responder a emergencias tanto en el buceo como en la vida cotidiana.",
      details: [
        "Duración: 6-8 horas",
        "Incluye formación teórica y práctica",
        "Edad mínima: Sin requisito",
        "No requiere experiencia en buceo",
        "Certificación válida para Rescue Diver",
      ],
      href: "/cursos/emergency-first-response",
      level: "avanzados",
    },
    {
      title: "Rescue Diver",
      shortDescription: "Rescate y seguridad en buceo",
      description:
        "Aprende a prevenir y manejar emergencias subacuáticas, convirtiéndote en un buceador más confiado y preparado.",
      details: [
        "Duración: 3-4 días",
        "Incluye ejercicios de rescate y escenarios prácticos",
        "Edad mínima: 12 años",
        "Requisitos: Advanced Open Water y EFR",
        "Certificación PADI reconocida mundialmente",
      ],
      href: "/cursos/rescue-diver",
      level: "avanzados",
    },
  ],
  profesional: [
    {
      title: "Divemaster",
      shortDescription: "Primer nivel profesional",
      description:
        "Conviértete en un líder del buceo, guiando a otros buceadores y asistiendo a instructores en este curso profesional intensivo.",
      details: [
        "Duración: 3-6 semanas (variable)",
        "Incluye formación teórica, práctica y supervisión",
        "Edad mínima: 18 años",
        "Requisitos: Rescue Diver, 40 inmersiones registradas",
        "Certificación para trabajar en la industria del buceo",
      ],
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