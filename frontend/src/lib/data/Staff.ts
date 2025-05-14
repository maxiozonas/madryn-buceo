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
        description:"Encargado de la empresa e Instructor de cursos PADI.",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Julian Bala", 
        description:"Capitán e instructor PADI. Acompaña a la empresa desde hace más de 15 años. Amante del fútbol, hincha de Estudiantes.",
        media: {type: "image", url: "/images/nosotros/Staff/julian.webp"}},
    {   name :"Mauro Mazzanti", 
        description:" Dive Master formado en el centro, acompaña las salidas comprometido con la seguridad y el buen desarrollo de cada inmersión",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Saira Amante", 
        description:"  Administrativa, encargada de venta y atención al público.",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Camila Casanova", 
        description:"  Administrativa, Atencion al publico y en formación como futura Dive Master de la operadora.",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    ]