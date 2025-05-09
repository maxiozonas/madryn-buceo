export interface Staff {
    name: string;
    description: string;
    media: { type: "image", url: string };
  }

  export const staff: Staff[] = [
    {   name: "Marcelo Echeverria",
        description: "Fundador de Madryn Buceo. Capitan con más de 40 años de experiencia, ha acompañado a miles de pasajeros en su primer experiencia en buceo y snorkel.",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name:"Lucio Echeverria",
        description:"Encargado de la empresa e Instructor de cursos PADI. Acompaña a la empresa con su carisma y pasion por el buceo.",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Julian", 
        description:"Capitan e instructor. Con más de 10 años de experiencia",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
]