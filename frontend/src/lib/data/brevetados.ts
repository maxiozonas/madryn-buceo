export type Buceo = {
    title: string;
    slug: string;
    description: string[];
    details: string[];
    whatToExpect: { title: string; description: string }[];
    requirements: { title: string; description: string }[];
    callToAction: string;
    buttonText: string;
    heroImage: string;
    cardImage: string;
    galleryImages: string[];
};

export const buceos: Buceo[] = [
    {
        title: "Buceo Certificado",
        slug: "buceo-certificado",
        description: [
            "Descubre las maravillas submarinas de la Patagonia con nuestras experiencias exclusivas para buzos certificados. Sumérgete en aguas patagónicas y explora la biodiversidad marina, incluyendo encuentros cercanos con lobos marinos, naufragios históricos y formaciones rocosas impresionantes llenas de vida. Guiados por nuestros experimentados instructores, te ofrecemos una serie de inmersiones que van a desafiar y enriquecer tus habilidades de buceo, garantizando una aventura inolvidable."
        ],
        details: [
            "Duración Total: Aproximadamente 2 horas. (Depende de la cantidad de buceos que realices, puedes hacer hasta dos buceos en el día.)",
            "Instructores Profesionales: Irás acompañado de instructores experimentados para asegurar una experiencia segura y emocionante.",
            "Interacción Natural: Disfruta de la curiosidades que te brindan los parques naturales o de los emocionantes naufragios que hay en las aguas del Golfo",
            "Ideal para Buzos Certificados: Contamos con diversos puntos de buceos para todos los niveles. Hacé click y conocelos"
          ],
        whatToExpect: [
            { title: "Equipamiento", description: "Te proporcionaremos todo el equipo necesario, incluyendo traje de neopreno, máscara, aletas, chaleco compensador, regulador y 1 tanque por cada buceo" },
            { title: "Breve Introducción y Orientación", description: "Comenzamos con una breve explicación de los aspectos básicos del buceo y los protocolos de seguridad específicos para cada punto de buceo." },
            { title: "Paseo Náutico", description: "Nuestros capitanes experimentados te llevarán al punto de buceo y en el camino está la posibilidad de poder avistar una increíble variedad de fauna marina, como pingüinos, delfines y cormoranes, dependiendo de la época del año." },
            { title: "Inmersión Guiada", description: "Nuestros guías te acompañarán durante la inmersión en cada sitio de buceo, donde podrás interactuar de cerca con la fauna patagónica en su entorno natural y apreciar la belleza de nuestros naufragios." },
            { title: "Regreso y Despedida", description: "Tras la inmersión, regresaremos al centro disfrutando del entorno. Una vez allí, podrás comentar tus experiencias con nuestro equipo y otros turistas, compartiendo recuerdos y anécdotas de la aventura..." },
        ],
        requirements: [
            { title: "Edad Mínima", description: "La edad mínima para participar es de 12 años. (Consultar en caso de menores)." },
            { title: "Certificación de Buceo", description: "Se requiere certificación correspondiente según la profundidad del punto de buceo" },
            { title: "Condición Física", description: "En caso de ser mayor de 65 años, contar con certificado médico." },
            { title: "Salud y Aptitud Física", description: "Es importante no tener enfermedades cardíacas u otras condiciones médicas que puedan presentar problemas debido al movimiento de navegación, el esfuerzo físico básico/moderado y el impacto con el agua fría." },
        ],
        callToAction: "¿Listo para descubrir el mundo submarino? ¡Reserva tu buceo ahora y comienza tu aventura subacuática con nosotros!",
        buttonText: "Reserva Ahora",
        heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
        cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
        galleryImages: [
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
        ],
    },
    {
        title: "Buceo con lobos",
        slug:"buceo-con-lobos",
        description:[
          "Atrévete a vivir una experiencia única buceando con lobos marinos en su hábitat natural. Sumérgete en las aguas de la Patagonia y disfruta de la compañía de estos juguetones animales marinos. Guiado por nuestros instructores profesionales, podrás acercarte a estos curiosos lobos marinos y observar sus comportamientos de cerca. Esta experiencia incluye un pintoresco paseo náutico hasta el área protegida de la Reserva Natural Punta Loma y está diseñada específicamente para buceadores certificados que desean bucear con lobos marinos",], 
          details: [
          "Duración Total: Aproximadamente 3 horas.",
          "Instructores Profesionales: Acompañamiento de instructores experimentados para asegurar una experiencia segura y emocionante.",
          "Interacción Natural: Disfruta de la curiosidad natural de los lobos marinos mientras bucean y juegan a tu alrededor.",
          "Exploración del Hábitat: Bucea en la reserva protegida Punta Loma, conocida por su abundante fauna marina.",
          "Ideal para Buceadores Certificados: Perfecto para aquellos con certificación de buceo scuba diver(+12m) o superior",
        ],
        whatToExpect: [
          {
            title: "Equipamiento",
            description:
              "Te proporcionaremos todo el equipo necesario, incluyendo traje de neoprene, máscara, aletas y chaleco compensador",
          },
          {
            title: "Breve Introducción y Orientación",
            description:
              "Comenzamos con una breve explicación de los aspectos básicos del buceo y los protocolos de seguridad específicos para bucear con lobos marinos.",
          },
          {
            title: "Paseo Náutico",
            description:
              "Nuestros capitanes experimentados te llevarán en un paseo náutico hacia la reserva protegida Punta Loma. En el camino, podrás avistar una increíble variedad de fauna marina, como pingüinos, delfines y cormoranes, dependiendo de la época del año.",
          },
          {
            title: "Inmersión Guiada",
            description:
              "Nuestros guías te acompañarán durante la inmersión en Punta Loma, donde podrás interactuar de cerca con los lobos marinos en su entorno natural.",
          },
          {
            title: "Regreso y Despedida",
            description:
              "Tras la inmersión, regresaremos al centro disfrutando del entorno. Una vez allí, podrás comentar tus experiencias con nuestro equipo y otros turistas, compartiendo recuerdos y anécdotas de la aventura...",
          },
        ],
        requirements: [
          {
            title: "Edad Mínima",
            description:
              "La edad mínima para participar es de 12 años. (Consultar en caso de menores).",
          },
          {
            title: "Certificación de Buceo",
            description:
              "Se requiere certificación de buceo (Scuba Diver o equivalente).",
          },
          {
            title: "Condición Física",
            description:
              "En caso de ser mayor de 65 años, es necesario contar con un certificado médico.",
          },
          {
            title: "Salud y Aptitud Física",
            description:
              "Es importante no tener enfermedades cardíacas u otras condiciones médicas que puedan presentar problemas debido al esfuerzo físico y el impacto con el agua fría.",
          },
        ],
        callToAction:
          "¿Listo para vivir una experiencia única de buceo con lobos marinos? ¡Reserva tu aventura ahora y descubre la magia de estar cerca de estos increíbles animales!",
        buttonText: "Reserva Ahora",
        heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
        cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
        galleryImages: [
          "/images/excursiones/delfines/delfines-1.jpeg",
          "/images/excursiones/delfines/delfines-1.jpeg",
          "/images/excursiones/delfines/delfines-1.jpeg",
          "/images/excursiones/delfines/delfines-1.jpeg",
        ],
      },
];

