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
  level: "cursos.filters.iniciacion" | "cursos.filters.avanzados" | "cursos.filters.profesional";
}

export const cursos: { [key in Curso["level"]]: Curso[] } = {
  "cursos.filters.iniciacion": [
    {
      title: "cursos.discover.title",
      slug: "discover-scuba-diving",
      shortDescription: "cursos.discover.shortDescription",
      description: "cursos.discover.description",
      duration: "cursos.discover.duration",
      depth: "cursos.discover.depth",
      includes: [
        "cursos.discover.includes.0",
        "cursos.discover.includes.1",
      ],
      requirements: [
        "cursos.discover.requirements.0",
        "cursos.discover.requirements.1",
      ],
      qualifications: [],
      certification: "cursos.discover.certification",
      cardImage: "/images/cursos/scuba-diver.jpg",
      href: "/cursos/padi/discover-scuba-diving",
      level: "cursos.filters.iniciacion",
    },
    {
      title: "cursos.scuba.title",
      slug: "scuba-diver",
      shortDescription: "cursos.scuba.shortDescription",
      description: "cursos.scuba.description",
      duration: "cursos.scuba.duration",
      depth: "cursos.scuba.depth",
      includes: [
        "cursos.scuba.includes.0",
        "cursos.scuba.includes.1",
        "cursos.scuba.includes.2",
      ],
      requirements: [
        "cursos.scuba.requirements.0",
        "cursos.scuba.requirements.1",
      ],
      qualifications: [
        "cursos.scuba.qualifications.0",
        "cursos.scuba.qualifications.1",
        "cursos.scuba.qualifications.2",
      ],
      certification: "cursos.scuba.certification",
      cardImage: "/images/cursos/scuba-diver.jpg",
      href: "/cursos/padi/scuba-diver",
      level: "cursos.filters.iniciacion",
    },
    {
      title: "cursos.owd.title",
      slug: "open-water-diver",
      shortDescription: "cursos.owd.shortDescription",
      description: "cursos.owd.description",
      duration: "cursos.owd.duration",
      depth: "cursos.owd.depth",
      includes: [
        "cursos.owd.includes.0",
        "cursos.owd.includes.1",
        "cursos.owd.includes.2",
      ],
      requirements: [
        "cursos.owd.requirements.0",
        "cursos.owd.requirements.1",
      ],
      learningOutcomes: [
        "cursos.owd.learningOutcomes.0",
        "cursos.owd.learningOutcomes.1",
        "cursos.owd.learningOutcomes.2",
        "cursos.owd.learningOutcomes.3",
        "cursos.owd.learningOutcomes.4",
      ],
      certification: "cursos.owd.certification",
      cardImage: "/images/cursos/open-water-diver.jpg",
      href: "/cursos/padi/open-water-diver",
      level: "cursos.filters.iniciacion",
    },
  ],
  "cursos.filters.avanzados": [
    {
      title: "cursos.AOW.title",
      slug: "advanced-open-water",
      shortDescription: "cursos.AOW.shortDescription",
      description: "cursos.AOW.description",
      duration: "cursos.AOW.duration",
      depth: "cursos.AOW.depth",
      includes: [
        "cursos.AOW.includes.0",
        "cursos.AOW.includes.1",
        "cursos.AOW.includes.2",
      ],
      requirements: [
        "cursos.AOW.requirements.0",
        "cursos.AOW.requirements.1",
      ],
      learningOutcomes: [
        "cursos.AOW.learningOutcomes.0",
        "cursos.AOW.learningOutcomes.1",
        "cursos.AOW.learningOutcomes.2",
      ],
      certification: "cursos.AOW.certification",
      cardImage: "/images/cursos/advanced-open-water.jpg",
      href: "/cursos/padi/advanced-open-water",
      level: "cursos.filters.avanzados",
    },
    {
      title: "cursos.efr.title",
      slug: "emergency-first-response",
      shortDescription: "cursos.efr.shortDescription",
      description: "cursos.efr.description",
      duration: "cursos.efr.duration",
      requirements: [
        "cursos.efr.requirements.0",
      ],
      learningOutcomes: [
        "cursos.efr.learningOutcomes.0",
        "cursos.efr.learningOutcomes.1",
        "cursos.efr.learningOutcomes.2",
      ],
      certification: "cursos.efr.certification",
      cardImage: "/images/cursos/efr-instructor.jpg",
      href: "/cursos/padi/emergency-first-response",
      level: "cursos.filters.avanzados",
    },
    {
      title: "cursos.rescue.title",
      slug: "rescue-diver",
      shortDescription: "cursos.rescue.shortDescription",
      description: "cursos.rescue.description",
      duration: "cursos.rescue.duration",
      includes: [
        "cursos.rescue.includes.0",
        "cursos.rescue.includes.1",
        "cursos.rescue.includes.2",
      ],
      requirements: [
        "cursos.rescue.requirements.0",
        "cursos.rescue.requirements.1",
      ],
      learningOutcomes: [
        "cursos.rescue.learningOutcomes.0",
        "cursos.rescue.learningOutcomes.1",
        "cursos.rescue.learningOutcomes.2",
      ],
      certification: "cursos.rescue.certification",
      cardImage: "/images/cursos/rescue-diver.jpg",
      href: "/cursos/padi/rescue-diver",
      level: "cursos.filters.avanzados",
    },
  ],
  "cursos.filters.profesional": [
    {
      title: "cursos.divemaster.title",
      slug: "divemaster",
      shortDescription: "cursos.divemaster.shortDescription",
      description: "cursos.divemaster.description",
      duration: "cursos.divemaster.duration",
      includes: [
        "cursos.divemaster.includes.0",
        "cursos.divemaster.includes.1",
        "cursos.divemaster.includes.2",
      ],
      requirements: [
        "cursos.divemaster.requirements.0",
        "cursos.divemaster.requirements.1",
        "cursos.divemaster.requirements.2",
        "cursos.divemaster.requirements.3",
        "cursos.divemaster.requirements.4",
      ],
      learningOutcomes: [
        "cursos.divemaster.learningOutcomes.0",
        "cursos.divemaster.learningOutcomes.1",
        "cursos.divemaster.learningOutcomes.2",
        "cursos.divemaster.learningOutcomes.3",
      ],
      certification: "cursos.divemaster.certification",
      cardImage: "/images/cursos/dive-master.jpg",
      href: "/cursos/padi/divemaster",
      level: "cursos.filters.profesional",
    },
  ],
};

export const allCursos: Curso[] = [
  ...cursos["cursos.filters.iniciacion"],
  ...cursos["cursos.filters.avanzados"],
  ...cursos["cursos.filters.profesional"],
];