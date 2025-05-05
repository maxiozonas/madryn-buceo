export interface Curso {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration?: string;
  depth?: string;
  requirements?: string[];
  certification?: string;
  includes?: string[];
  learningOutcomes?: string[];
  qualifications?: string[];
  href: string;
  cardImage: string;
  level: "iniciacion" | "avanzados" | "profesional";
}

export const cursos: { [key in Curso["level"]]: Curso[] } = {
  iniciacion: [
    {
      title: "Discover Scuba Diving",
      slug: "discover-scuba-diving",
      shortDescription: "Una experiencia de buceo para principiantes, aprenderás lo básico y disfrutarás de tu primera inmersión en aguas abiertas.",
      description:
        "Si está interesado en el buceo, pero no está seguro de querer inscribirse en una clase de certificación de buceo, Discover Scuba Diving es la manera perfecta de probar las aguas. En muy poco tiempo, aprenderás habilidades básicas de buceo y respirarás por primera vez bajo el agua. Un profesional PADI altamente entrenado te proporcionará el equipo de buceo, te explicará las técnicas básicas de buceo y responderá a cualquier pregunta que puedas tener.",
      duration: "2 horas de excursión, aprox 25 minutos de buceo.",
      depth: "12 metros",
      includes: [
        "Equipamiento completo para tu inmersión",
        "Introducción al buceo de la mano de tu instructor",
      ],
      requirements: [
        "Edad mínima: 10 años",
        "No requiere certificación previa",
      ],
      cardImage: "/images/cursos/scuba-diver.jpg",
      href: "/cursos/padi/discover-scuba-diving",
      level: "iniciacion",
    },
    {
      title: "Scuba Diver",
      slug: "scuba-diver",
      shortDescription: "Obtén tu certificación básica de buceo que te permite bucear bajo la supervisión de un profesional hasta 12 metros de profundidad.",
      description:
        "Para aquellos con limitaciones de tiempo o que prefieren una introducción más corta al mundo del buceo, ofrecemos la opción de realizar los primeros tres módulos del curso Open Water Diver. Con esta opción, puedes obtener la certificación de Scuba Diver que te permite bucear hasta 12 metros bajo la supervisión de un profesional. Este curso es un paso intermedio para obtener la certificación Open Water Diver, si ese es tu objetivo final.",
      duration: "Teoría online 3-7 hs, curso completo 2-3 días.",
      depth: "12 metros",
      includes: [
        "Equipamiento completo para todas tus inmersiones",
        "transporte a cada sitio de buceo",
        "clases teóricas y prácticas presenciales con tu instructor"
      ],
      requirements: [
        "Edad mínima: 10 años",
        "No requiere certificación previa",
      ],
      qualifications: [
        "Bucear bajo la supervisión directa de un profesional PADI hasta una profundidad máxima de 12 metros en cualquier parte del mundo.",
        "Obtener recargas de aire, alquilar o comprar equipo de buceo y participar en actividades de buceo siempre que estén adecuadamente supervisados.",
        "Continuar su formación en buceo completando la certificación PADI Open Water Diver y tomando ciertos cursos de especialidad.",
      ],
      certification: "Scuba Diver PADI",
      cardImage: "/images/cursos/scuba-diver.jpg",
      href: "/cursos/padi/scuba-diver",
      level: "iniciacion",
    },
    {
      title: "Open Water Diver",
      slug: "open-water-diver",
      shortDescription: "Obtén tu certificación básica de buceo que te permite bucear bajo la supervisión de un profesional hasta 18 metros de profundidad.",
      description:
        "El curso Advanced Open Water PADI Internacional se enfoca en mejorar tus habilidades de buceo e incrementar confianza y a desarrollar tus destrezas de buceo mediante la realización de especialidades. Este curso incluye 5 buceos especializados. De los 5 módulos de especialidad, dos son obligatorios: Buceo Profundo y Navegación Submarina. Los otros tres módulos son a elección, seleccionados del manual de PADI, lo que permite personalizar tu experiencia de aprendizaje. Tienes hasta un año para completar el curso.Una de las especialidades opcionales que puedes elegir es el buceo con lobos marinos en el área natural protegida, dentro del módulo de Naturalista.",
      duration: "Teoría online 5-10 hs, curso completo 4-5 días.",
      depth: "18 metros",
      includes: [
        "Equipamiento completo para todas tus inmersiones",
        "transporte a cada sitio de buceo",
        "clases teóricas y prácticas presenciales con tu instructor"
      ],
      requirements: [
        "Edad mínima: 10 años",
        "No requiere certificación previa",
      ],
      learningOutcomes: [
        "Sé un buceador seguro y hábil.",
        "Monta y usa equipo de buceo autónomo.",
        "Controla tu flotabilidad.",
        "Acércate con respeto a la vida marina.",
        "Gestiona problemas comunes."
      ],
      certification: "Open Water Diver PADI",
      cardImage: "/images/cursos/open-water-diver.jpg",
      href: "/cursos/padi/open-water-diver",
      level: "iniciacion",
    },
  ],
  avanzados: [
    {
      title: "Advanced Open Water",
      slug: "advanced-open-water",
      shortDescription: "Amplía tus habilidades y experiencia de buceo explorando nuevas áreas de interés bajo la supervisión de un instructor.",
      description:
        "El curso Advanced Open Water PADI Internacional se enfoca en mejorar tus habilidades de buceo e incrementar confianza y a desarrollar tus destrezas de buceo mediante la realización de especialidades. Este curso incluye 5 buceos especializados. De los 5 módulos de especialidad, dos son obligatorios: Buceo Profundo y Navegación Submarina. Los otros tres módulos son a elección, seleccionados del manual de PADI, lo que permite personalizar tu experiencia de aprendizaje. Tienes hasta un año para completar el curso. Una de las especialidades opcionales que puedes elegir es el buceo con lobos marinos en el área natural protegida, dentro del módulo de Naturalista.",
      duration: "Teoría online 6-8 hs, curso completo 2-3 días.",
      depth: "30 metros",
      includes: [
        "Equipamiento completo para todas tus inmersiones",
        "transporte a cada sitio de buceo",
        "clases teóricas y prácticas presenciales con tu instructor"
      ],
      requirements: [
        "Edad mínima: 12 años",
        "Open Water Diver/Junior Open Water Diver (o certificación equivalente)",
      ],
      learningOutcomes: [
        "Explora por debajo de 18m.",
        "Mejora tu flotabilidad.",
        "Usa una brújula y aprende sobre navegación submarina.",
      ],
      certification: "Advanced Open Water PADI",
      cardImage: "/images/cursos/advanced-open-water.jpg",
      href: "/cursos/padi/advanced-open-water",
      level: "avanzados",
    },
    {
      title: "Emergency First Response (EFR)",
      slug: "emergency-first-response",
      shortDescription: "Aprende técnicas de primeros auxilios y RCP para estar preparado en situaciones de emergencia tanto en tierra como bajo el agua.",
      description:
        "El curso Emergency First Response (EFR) te proporciona los conocimientos y habilidades necesarios para manejar situaciones de emergencia tanto en tierra como relacionadas con el buceo. Aprenderás a realizar RCP (Reanimación Cardiopulmonar), utilizar un DEA (Desfibrilador Externo Automático), controlar hemorragias, manejar lesiones y enfermedades, y responder ante emergencias. Este curso es un requisito previo para el curso Rescue Diver y es reconocido internacionalmente como un programa de formación en primeros auxilios de alta calidad.",
      duration: "Teoria online 2-4 hs, curso completo 6-8 horas",
      requirements: [
        "El deseo de ayudar a los demás.",
      ],
      learningOutcomes: [
        "Realiza con confianza la RCP",
        "Ayudar a alguien que no respira normalmente",
        "Aumentar las posibilidades de supervivencia del paciente",
      ],
      certification: "Emergency First Response PADI",
      cardImage: "/images/cursos/efr-instructor.jpg",
      href: "/cursos/padi/emergency-first-response",
      level: "avanzados",
    },
    {
      title: "Rescue Diver",
      slug: "rescue-diver",
      shortDescription: "Aprende a prevenir y gestionar problemas en el agua y conviértete en un buceador más seguro y consciente.",
      description:
        "El curso Rescue Diver se centra principalmente en ejercicios de rescate tanto dentro como fuera del agua, con un enfoque menor en el buceo recreativo. Los participantes completarán 5 módulos que incluyen prácticas de rescate y teoría, siguiendo el manual de PADI. Este curso está diseñado para prepararte en habilidades de rescate en diversas situaciones y para supervisar el bienestar de tus compañeros de buceo. El curso PADI Rescue Diver te cambiará la forma de bucear de la mejor manera posible. Aprende a identificar y solucionar problemas menores antes de que se conviertan en problemas grandes, gana mucha confianza y diviértete seriamente en el camino. Descubre por qué innumerables buceadores dicen que el Rescue Diver es su curso de buceo favorito.",
      duration: "Teoria online 8.12 hs, curso completo 4-7 días.",
      includes: [
        "Equipamiento completo para todas tus inmersiones",
        "transporte a cada sitio de buceo",
        "clases teóricas y prácticas presenciales con tu instructor"
      ],
      requirements: [
        "Buceador de aventura/Buceador de aventura junior (o certificación equivalente) con inmersión de navegación subacuática completada",
        "Capacitación en Atención Primaria y Secundaria de EFR (o capacitación equivalente) dentro de los últimos 24 meses",
      ],
      learningOutcomes: [
        "Ayudar a otros buceadores",
        "Arreglar problemas menores de equipo",
        "Usar un kit de oxígeno de emergencia",
      ],
      certification: "Rescue Diver PADI",
      cardImage: "/images/cursos/rescue-diver.jpg",
      href: "/cursos/padi/rescue-diver",
      level: "avanzados",
    },
  ],
  profesional: [
    {
      title: "Divemaster",
      slug: "divemaster",
      shortDescription: "Avanza en tu carrera de buceo y conviértete en un profesional capacitado para supervisar y guiar a otros buceadores.",
      description:
        "Aprende a dirigir paseos subacuáticos, a ayudar en las clases de buceo y a inspirar a otros para que cuiden del océano. Perfecciona tus habilidades y conviértete en el buceador que todos admiran. PADI Divemaster es la certificación de buceo profesional más popular y reconocida del mundo. Los PADI Divemasters disfrutan de abundantes oportunidades profesionales, cobran por bucear y comparten su amor por el océano. Adquiere experiencia práctica impartiendo briefings de buceo, ayudando en las clases y dirigiendo excursiones subacuáticas. Aprende a anticiparse a los problemas y a prestar ayuda, crea un Plan de Asistencia de Emergencia y mejora tus habilidades de navegación y resolución de problemas mediante talleres prácticos. ",
      duration: "Teoria online 10-16 hs, curso completo: tiempo variable",
      includes: [
        "Equipamiento completo para todas tus inmersiones",
        "transporte a cada sitio de buceo",
        "clases teóricas y prácticas presenciales con tu instructor"
      ],
      requirements: [
        "Edad mínima: 18 años",
        "Certificación PADI Rescue Diver",
        "Emergency First Response® Primary and Secondary Care en un plazo de 24 meses",
        "40 inmersiones registradas",
        "Examen médico y autorización para bucear por parte de un médico dentro de los últimos 12 meses",
      ],
      learningOutcomes: [
        "Dirige inmersiones guiadas.",
        "Ayuda con las clases de buceo.",
        "Da un briefing de buceo.",
        "Dirige el entrenamiento de actualización."
      ],
      certification: "Divemaster PADI",
      cardImage: "/images/cursos/dive-master.jpg",
      href: "/cursos/padi/divemaster",
      level: "profesional",
    },
  ],
};

export const allCursos: Curso[] = [
  ...cursos.iniciacion,
  ...cursos.avanzados,
  ...cursos.profesional,
];