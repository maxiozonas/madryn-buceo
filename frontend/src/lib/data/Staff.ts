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
        description:"Encargado de la empresa e Instructor de cursos PADI . Acompaña a la empresa con su carisma, su buen sentido del humor y pasión por el buceo. ",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Julian Bala", 
        description:"Capitán e instructor PADI con amplia experiencia. Acompaña a la empresa desde hace más de 15 años. Amante del fútbol, hincha de Estudiantes",
        media: {type: "image", url: "/images/nosotros/Staff/julian.webp"}},
    {   name :"Mauro Mazzanti", 
        description:"  Dive Master formado en nuestro centro y traductor de inglés. Acompaña las excursiones comprometiéndose con la seguridad, el disfrute de los pasajeros y el buen desarrollo de cada excursión.",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Saira Amante", 
        description:"Técnica en turismo, encargada de la administración, venta y atención al público. Recibe a nuestros pasajeros con la mejor atención y se encarga de brindar toda la información sobre nuestros servicios. ",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Camila Casanova", 
        description:" Dive Master formada en nuestro centro y futura bióloga marina. Acompaña a las excursiones contagiando su entusiasmo por la vida marina con una tonada muy especial. ",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    ]