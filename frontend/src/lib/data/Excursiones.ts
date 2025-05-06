export type ExcursionDetail = {
  title: string
  description: string
  icon?: string 
}

export type Excursion = {
  title: string
  slug: string
  description: string[]
  miniDescription: string
  details: ExcursionDetail[] 
  whatToExpect: { title: string; description: string }[]
  requirements?: { title: string; description: string }[]
  callToAction: string
  buttonText: string
  heroImage: string
  cardImage: string
  galleryImages: string[]
}

export const excursiones: Excursion[] = [
  {
    title: "Snorkeling con Lobos Marinos",
    slug: "snorkeling-con-lobos",
    miniDescription: "Vive la experiencia única de nadar junto a los lobos marinos en su hábitat natural.",
    description: [
      "Embárcate en una aventura inolvidable mientras realizas snorkeling en compañía de los curiosos lobos marinos en su hábitat natural. Con la orientación de nuestro experimentado capitán y nuestros guías especializados, serás llevado al Área Natural Punta Loma.",
      "Durante el paseo náutico hacia la reserva, podrás asombrarte con la increíble fauna de la zona, incluyendo pingüinos, delfines, ballenas y cormoranes, dependiendo de la época del año.",
      "Una vez en la reserva, los lobos marinos nadarán libremente a tu alrededor, acercándote por su propia curiosidad. Esta interacción cercana y natural garantiza momentos mágicos que quedarán grabados en tu memoria para siempre.",
    ],
    details: [
      {
        title: "Duración",
        description: "Aproximadamente 2:30 horas.",
        icon: "clock",
      },
      {
        title: "Guía personalizado",
        description: "Presente para ayudar, guiar y acompañar en todo momento.",
        icon: "user",
      },
      {
        title: "Equipamiento",
        description: "Brindamos equipamiento de snorkeling completo.",
        icon: "lifeBuoy",
      },
      {
        title: "Para todos",
        description: "Ideal para familias, amigos o individuos aventureros.",
        icon: "users",
      },
      {
        title: "Sin experiencia previa",
        description: "No necesitas experiencia previa y tampoco saber nadar.",
        icon: "thumbsUp",
      },
    ],
    whatToExpect: [
      {
        title: "Equipamiento",
        description:
          "Te proporcionaremos todo el equipo necesario, incluyendo máscara, snorkel, traje de neopreno y aletas.",
      },
      {
        title: "Breve Introducción y Orientación",
        description:
          "Comenzamos con una breve explicación de los aspectos básicos del snorkeling y los protocolos de seguridad.",
      },
      {
        title: "Paseo Náutico",
        description:
          "Nuestros capitanes experimentados te llevarán en un paseo náutico hacia la Reserva Natural Punta Loma. En el camino, tendrás la oportunidad de avistar una increíble variedad de fauna, como pingüinos, delfines, ballenas y cormoranes, dependiendo de la época del año.",
      },
      {
        title: "Snorkelling Guiado",
        description:
          "Nuestros guías te acompañarán en la Reserva Natural Punta Loma, donde podrás estar cerca de los lobos marinos en su entorno natural y disfrutar de una experiencia segura y emocionante.",
      },
      {
        title: "Interacción con la Fauna",
        description:
          "Disfruta de la interacción cercana con los lobos marinos mientras nadan a tu alrededor en su entorno natural.",
      },
      {
        title: "Regreso y Despedida",
        description:
          "Al final de la experiencia, disfrutarás del paseo de regreso, deleitándote con los impresionantes paisajes de la Patagonia. De vuelta en el centro de buceo, podrás compartir tus impresiones y recuerdos de esta aventura inolvidable.",
      },
    ],
    requirements: [
      {
        title: "Edad Mínima",
        description: "La edad mínima para participar es de 6 años en el verano, de 8 en el invierno (consultar).",
      },
      {
        title: "Condición Física",
        description: "En caso de ser mayor de 65 años debes contar con un certificado médico de buena salud",
      },
      {
        title: "Salud y Aptitud Física",
        description:
          "Es importante no tener enfermedades cardíacas u otras condiciones médicas que puedan presentar problemas debido al movimiento de navegación, el esfuerzo físico básico/moderado y el impacto con el agua fría.",
      },
    ],
    callToAction:
      "¿Listo para vivir una experiencia única de snorkeling? ¡Reserva tu aventura ahora y descubre la magia de estar cerca de los lobos marinos!",
    buttonText: "Reserva Ahora",
    heroImage: "/images/excursiones/snorkel/lobo-header.webp",
    cardImage: "/images/excursiones/snorkel/lobo-2.webp",
    galleryImages: [
      "/images/excursiones/snorkel/lobo-1.webp",
      "/images/excursiones/snorkel/lobo-2.webp",
      "/images/excursiones/snorkel/lobo-3.webp",
      "/images/excursiones/snorkel/lobo-4.webp",
    ],
  },
  {
    title: "Bautismo de Buceo",
    slug: "bautismo-buceo",
    miniDescription: "Anímate a descubrir el mundo submarino y sumérgete en la aventura con nosotros.",
    description: [
      "¿Querés vivir tu primera experiencia de buceo? El Bautismo Submarino es la manera más simple de entrar en este mundo, sin necesidad de saber nadar, ni tener experiencia previa. Tu instructor estará con vos en todo momento, se encargará del equipo, para que vos solo te concentres en disfrutar.",
      "El buceo te permite flotar libremente bajo el agua, como si estuvieras volando. Es una sensación única, que combina aventura, tranquilidad y una conexión profunda con el entorno. Vas a explorar los paisajes submarinos de la Patagonia y encontrarte cara a cara con peces, estrellas de mar y otras maravillas del fondo marino.",
      "A diferencia de otras experiencias, este bautismo no requiere teoría, ni manejo del equipo, está pensado para que cualquier persona pueda sumarse y vivir esta experiencia mágica con total confianza!",
      "¿Buscás una primera experiencia más completa? El Discover Scuba Diving es una alternativa ideal si te gustaría aprender un poco más sobre este mundo. En este programa aprenderás a manejar el equipo, moverte por tu cuenta bajo el agua y explorar más a fondo cómo funciona el buceo. Además, es el punto de partida si te gustaría hacer tu curso de buceo en un futuro.",
    ],
    details: [
      {
        title: "Instructor personalizado",
        description: "Atención individualizada para cada participante.",
        icon: "award",
      },
      {
        title: "Duración",
        description: "1 hora y 30 minutos, con 20 minutos dedicados a la práctica y la inmersión.",
        icon: "clock",
      },
      {
        title: "Para todos",
        description:
          "No necesitas experiencia previa y tampoco saber nadar, cualquiera puede acceder a esta excursión.",
        icon: "users",
      },
      {
        title: "Mundo submarino",
        description: "Conoce la grandiosa diversidad marina que se encuentra en la Patagonia!",
        icon: "fish",
      },
    ],
    whatToExpect: [
      {
        title: "Equipamiento",
        description:
          "Te proporcionaremos el traje de neopreno en nuestro local antes de partir hacia el lugar de inmersión. El resto del equipo, incluyendo máscara, regulador y tanque, será proporcionado en el sitio de buceo.",
      },
      {
        title: "Breve Introducción y Orientación",
        description:
          "Comenzamos con una breve explicación de lo que necesitas saber para tu experiencia, algunos conocimientos básicos y el instructor se encargará del resto.",
      },
      {
        title: "Sesión de Práctica en Superficie",
        description: "Realizarás una práctica en superficie para familiarizarte con el equipo y las técnicas de buceo.",
      },
      {
        title: "Inmersión Guiada",
        description:
          "Nuestros instructores te llevarán a una inmersión controlada, donde el mismo se encargará del control del equipo mientras te centras en explorar el mundo submarino en compañía de peces, estrellas de mar, anémonas y otras maravillas del ecosistema marino.",
      },
      {
        title: "Regreso y Despedida",
        description:
          "Al final de la experiencia, regresarás al centro de buceo, donde podrás compartir tus impresiones y recibir una breve evaluación de tu instructor.",
      },
    ],
    requirements: [
      {
        title: "Edad Mínima",
        description: "La edad mínima para participar es de 8 años (consultar para más detalles).",
      },
      {
        title: "Condición Física",
        description: "En caso de ser mayor de 65 años, debes contar con un certificado médico de buena salud.",
      },
      {
        title: "Salud y Aptitud Física",
        description:
          "Es importante no tener afecciones cardíacas, problemas respiratorios u otras condiciones médicas que puedan presentar un riesgo durante la inmersión.",
      },
    ],
    callToAction:
      "¿Listo para descubrir el mundo submarino? ¡Reserva tu bautismo de buceo ahora y comienza tu aventura subacuática con nosotros!",
    buttonText: "Reserva Ahora",
    heroImage: "/images/excursiones/bautismo/bautismo-header.webp",
    cardImage: "/images/excursiones/bautismo/bautismo-4.webp",
    galleryImages: [
      "/images/excursiones/bautismo/bautismo-1.webp",
      "/images/excursiones/bautismo/bautismo-2.webp",
      "/images/excursiones/bautismo/bautismo-3.webp",
      "/images/excursiones/bautismo/bautismo-4.webp",
    ],
  },
  {
    title: "Paseo Náutico en Busca de Delfines",
    slug: "paseo-nautico-en-busca-de-delfines",
    miniDescription: "Embárcate en una aventura inolvidable en busca de delfines.",
    description: [
      "Navega por las aguas del golfo Nuevo en busca de los fascinantes delfines oscuros. A bordo de nuestro bote semirrigido de 9 metros, vivirás una experiencia emocionante y altamente personalizada, con un máximo de 15 pasajeros. Nuestra embarcación parte directamente desde la playa en la magia del mar patagonico.",
      "Guiados por nuestros capitanes expertos, navegaremos hacia las áreas donde los delfines frecuentan. Estos animales, conocidos por su energía, acrobacias y curiosidad, suelen acercarse a las embarcaciones, ofreciendo un espectáculo natural inolvidable.",
      "Además de avistar diversas especies de aves y fauna local, dependiendo del trayecto podemos llegar a ver lugares icónicos como el Naufragio Folías, Punta Cuevas o  El doradillo. Perfecto para familias, amigos y aventureros individuales.",
    ],
    details: [
      {
        title: "Duración",
        description: "Aproximadamente 2 horas (puede extenderse según condiciones del mar y avistamientos).",
        icon: "clock",
      },
      {
        title: "Para todos",
        description: "Apto para Todo Público.",
        icon: "users",
      },
      {
        title: "Grupo reducido",
        description: "Máximo 15 pasajeros para una experiencia personalizada.",
        icon: "userPlus",
      },
      {
        title: "Embarque",
        description: "Directo desde la costa, deben asistir con ropa y calzado apto para mojarse hasta las rodillas.",
        icon: "anchor",
      },
    ],
    whatToExpect: [
      {
        title: "Equipamiento",
        description:
          "Nuestra embarcación está equipada con elementos de seguridad y chalecos salvavidas para todos los pasajeros.",
      },
      {
        title: "Paseo Guiado",
        description:
          "Nos dirigimos a las aguas del Golfo Nuevo, donde nuestros guías bilingües te proporcionarán información sobre la diversa variedad de aves y fauna marina, además de recorrer lugares históricos y emblemáticos del lugar.",
      },
      {
        title: "Regreso y Despedida",
        description:
          "Finalizamos nuestra travesía regresando a la costa, donde podrás compartir tus impresiones y recuerdos de esta maravillosa experiencia.",
      },
    ],
    callToAction:
      "¿Listo para vivir una aventura inolvidable en el mar? ¡Reserva tu paseo ahora y ven a descubrir la magia de los delfines oscuros en su hábitat natural!",
    buttonText: "Reserva Ahora",
    heroImage: "/images/excursiones/delfines/delfines-header.webp",
    cardImage: "/images/excursiones/delfines/delfines-1.webp",
    galleryImages: [
      "/images/excursiones/delfines/delfines-1.webp",
      "/images/excursiones/delfines/delfines-2.webp",
      "/images/excursiones/delfines/delfines-3.webp",
      "/images/excursiones/delfines/delfines-4.webp",
    ],
  },
  {
    title: "Salidas Privadas",
    slug: "salidas-privadas",
    miniDescription: "Personaliza tu experiencia con salidas exclusivas para ti y tu grupo.",
    description: [
      "¿Buscas una experiencia única y personalizada en las aguas cristalinas de la Patagonia? Nuestras salidas privadas en semirrígido son la opción perfecta para ti. Con capacidad para hasta 15 pasajeros, te ofrecemos una mañana completa de aventura y exploración en un entorno natural incomparable, adaptamos la aventura a tus preferencias y necesidades.",
    ],
    details: [
      {
        title: "Atención Personalizada",
        description:
          "Con un grupo reducido, nuestros guías pueden enfocarse en brindar una atención más detallada y personalizada, asegurando que tu experiencia sea segura y memorable.",
        icon: "star",
      },
      {
        title: "Flexibilidad",
        description:
          "Disfruta de la flexibilidad para elegir tus actividades favoritas y adaptar el itinerario según tus intereses.",
        icon: "shuffle",
      },
      {
        title: "Exploración Exclusiva",
        description:
          "Accede a sitios de buceo y snorkel menos concurridos, disfrutando de la tranquilidad y la belleza de la Patagonia sin las multitudes.",
        icon: "map",
      },
    ],
    whatToExpect: [
      {
        title: "Snorkel con Lobos Marinos",
        description:
          "Sumérgete en las aguas y disfruta de la compañía de estos juguetones animales marinos en su hábitat natural. Guiado por nuestros instructores profesionales, tendrás la oportunidad de acercarte a los curiosos lobos marinos y observar sus comportamientos de cerca.",
      },
      {
        title: "Buceo en Sitios Espectaculares",
        description:
          "Si eres buceador certificado, o quieres vivir tu primera experiencia de buceo, podrás explorar el fascinante mundo submarino de la Patagonia. Descubre naufragios, coloridos arrecifes y la abundante vida marina que habita estas aguas.",
      },
      {
        title: "Paseos Náuticos en Búsqueda de Delfines",
        description:
          "Navega por las aguas en busca de los amistosos delfines. Estos paseos no solo te ofrecen la emoción de avistar delfines, sino también la oportunidad de disfrutar de los impresionantes paisajes marinos.",
      },
    ],
    callToAction:
      "No dejes pasar la oportunidad de vivir una experiencia única y personalizada en la Patagonia. Contáctanos hoy mismo para reservar tu salida privada en semirrígido y prepárate para una mañana llena de aventuras y descubrimientos.",
    buttonText: "Reserva Ahora",
    heroImage: "/images/excursiones/salidas/salidas-header.webp",
    cardImage: "/images/excursiones/salidas/salidas-1.webp",
    galleryImages: [
      "/images/excursiones/salidas/salidas-1.webp",
      "/images/excursiones/salidas/salidas-2.webp",
      "/images/excursiones/salidas/salidas-3.webp",
      "/images/excursiones/salidas/salidas-4.webp",
    ],
  },
]
