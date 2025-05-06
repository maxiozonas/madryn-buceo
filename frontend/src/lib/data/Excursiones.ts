export type Excursion = {
    title: string;
    slug: string;
    description: string[];
    miniDescription: string;
    details: string[];
    whatToExpect: { title: string; description: string }[];
    requirements: { title: string; description: string }[];
    callToAction: string;
    buttonText: string;
    heroImage: string;
    cardImage: string;
    galleryImages: string[];
};

export const excursiones: Excursion[] = [
    {
        title: "Snorkeling con Lobos Marinos",
        slug: "snorkeling-con-lobos",
        miniDescription: "Vive la experiencia única de nadar junto a los lobos marinos en su hábitat natural.",
        description: [
            "Embárcate en una aventura inolvidable mientras realizas snorkeling en compañía de los curiosos lobos marinos en su hábitat natural. Con la orientación de nuestro experimentado capitán y nuestros guías especializados, serás llevado al Área Natural Punta Loma.",
            "Durante el paseo náutico hacia la reserva, podrás asombrarte con la increíble fauna de la zona, incluyendo pingüinos, delfines, ballenas y cormoranes, dependiendo de la época del año. Una vez en la reserva, los lobos marinos nadarán libremente a tu alrededor, acercándose por su propia curiosidad.",
            "Esta interacción cercana y natural garantiza momentos mágicos que quedarán grabados en tu memoria para siempre."
        ],
        details: [
            "Duración Total: Aproximadamente 2:30 horas.",
            "Guía personalizado: El está presente para ayudar, guiar y acompañar en todo momento.",
            "Brindamos equipamiento de snorkeling completo.",
            "Ideal para Grupos e Individuos: Perfecta para familias, amigos y aventureros individuales.",
            "Apto para todo público: no necesitas experiencia previa y tampoco saber nadar.",
        ],
        whatToExpect: [
            { title: "Equipamiento", description: "Te proporcionaremos todo el equipo necesario, incluyendo máscara, snorkel, traje de neopreno y aletas." },
            { title: "Breve Introducción y Orientación", description: "Comenzamos con una breve explicación de los aspectos básicos del snorkeling y los protocolos de seguridad." },
            { title: "Paseo Náutico", description: "Nuestros capitanes experimentados te llevarán en un paseo náutico hacia la reserva protegida Punta Loma. En el camino, tendrás la oportunidad de avistar una increíble variedad de fauna, como pingüinos, delfines, ballenas y cormoranes, dependiendo de la época del año." },
            { title: "Snorkelling Guiado", description: "Nuestros guías te acompañarán en la reserva protegida Punta Loma, donde podrás estar cerca de los lobos marinos en su entorno natural y disfrutar de una experiencia segura y emocionante." },
            { title: "Interacción con la Fauna", description: "Disfruta de la interacción cercana con los lobos marinos mientras nadan a tu alrededor en su entorno natural." },
            { title: "Regreso y Despedida", description: "Al final de la experiencia, disfrutarás del paseo de regreso, deleitándote con los impresionantes paisajes de la Patagonia. De vuelta en el centro de buceo, podrás compartir tus impresiones y recuerdos de esta aventura inolvidable." },
        ],
        requirements: [
            { title: "Edad Mínima", description: "La edad mínima para participar es de 6 años en el verano, de 8 en el invierno (consultar)." },
            { title: "Condición Física", description: "En caso de ser mayor de 65 años, contar con certificado médico." },
            { title: "Salud y Aptitud Física", description: "Es importante no tener enfermedades cardíacas u otras condiciones médicas que puedan presentar problemas debido al movimiento de navegación, el esfuerzo físico básico/moderado y el impacto con el agua fría." },
        ],
        callToAction: "¿Listo para vivir una experiencia única de snorkeling? ¡Reserva tu aventura ahora y descubre la magia de estar cerca de los lobos marinos!",
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
        title: "Bautismo de Buceo",
        slug: "bautismo-buceo",
        miniDescription: "Anímate a descubrir el mundo submarino y sumérgete en la aventura con nosotros.",
        description: [
            "¿Querés vivir tu primera experiencia de buceo? El Bautismo Submarino es la manera más simple de entrar en este mundo, sin necesidad de saber nadar, ni tener experiencia previa. Tu instructor estará con vos en todo momento, se encargará del equipo, para que vos solo te concentres en disfrutar.",
            "El buceo te permite flotar libremente bajo el agua, como si estuvieras volando. Es una sensación única, que combina aventura, tranquilidad y una conexión profunda con el entorno. Vas a explorar los paisajes submarinos de la Patagonia y encontrarte cara a cara con peces, estrellas de mar y otras maravillas del fondo marino.",
            "A diferencia de otras experiencias, este bautismo no requiere teoría, ni manejo del equipo, está pensado para que cualquier persona pueda sumarse y vivir esta experiencia mágica con total confianza!",
            "¿Buscás una primera experiencia más completa? El Discover Scuba Diving es una alternativa ideal si te gustaría aprender un poco más sobre este mundo. En este programa aprenderás a manejar el equipo, moverte por tu cuenta bajo el agua y explorar más a fondo cómo funciona el buceo. Además, es el punto de partida si te gustaría hacer tu curso de buceo en un futuro."
        ],
        details: [
            "Instructor personalizado: Atención individualizada para cada participante.",
            "Duración Total: 1 hora y 30 minutos, con 20 minutos dedicados a la práctica y la inmersión.",
            "Apto para todos: No necesitas experiencia previa y tampoco saber nadar.",
            "Descubre un mundo nuevo: Conoce la grandiosa diversidad marina que se encuentra en la Patagonia!"
        ],
        whatToExpect: [
            {
                title: "Equipamiento",
                description:
                    "Te proporcionaremos el traje de neopreno en nuestro local antes de partir hacia el lugar de inmersión. El resto del equipo, incluyendo máscara, regulador y tanque, será proporcionado en el sitio de buceo."
            },
            {
                title: "Breve Introducción y Orientación",
                description:
                    "Comenzamos con una explicación breve de las 3 cosas básicas que deberás realizar durante la experiencia, el resto se encargará tu instructor."
            },
            {
                title: "Sesión de Práctica en Superficie",
                description:
                    "Realizarás una práctica en superficie para familiarizarte con el equipo y las técnicas de buceo."
            },
            {
                title: "Inmersión Guiada",
                description:
                    "Nuestros instructores te llevarán a una inmersión controlada, donde el mismo se encargará del control del equipo mientras te centras en explorar el mundo submarino en compañía de peces, estrellas de mar, anémonas y otras maravillas del ecosistema marino."
            },
            {
                title: "Regreso y Despedida",
                description:
                    "Al final de la experiencia, regresarás al centro de buceo, donde podrás compartir tus impresiones y recibir una breve evaluación de tu instructor."
            }
        ],
        requirements: [
            {
                title: "Edad Mínima",
                description:
                    "La edad mínima para participar es de 8 años (consultar para más detalles)."
            },
            {
                title: "Condición Física",
                description:
                    "En caso de ser mayor de 65 años, es necesario contar con un certificado médico."
            },
            {
                title: "Salud y Aptitud Física",
                description:
                    "Es importante no tener afecciones cardíacas, problemas respiratorios u otras condiciones médicas que puedan presentar un riesgo durante la inmersión."
            }
        ],
        callToAction:
            "¿Listo para descubrir el mundo submarino? ¡Reserva tu bautismo de buceo ahora y comienza tu aventura subacuática con nosotros!",
        buttonText: "Reserva Ahora",
        heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
        cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
        galleryImages: [
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg"
        ]
    },
    {
        title: "Búsqueda de Delfines",
        slug: "busqueda-delfines",
        miniDescription: "Embárcate en una aventura inolvidable en busca de los fascinantes delfines oscuros.",
        description: [
            "Embárcate en una aventura inolvidable en el Golfo Nuevo en busca de los fascinantes delfines oscuros. A bordo de nuestro bote semirrígido de 9 metros, vivirás una experiencia emocionante y altamente personalizada, con un máximo de 15 pasajeros. Nuestra embarcación parte directamente desde la playa en la magia del mar patagónico.",
            "Guiados por nuestros capitanes expertos, navegaremos hacia las áreas donde los delfines frecuentan. Estos animales, conocidos por su energía, acrobacias y curiosidad, suelen acercarse a las embarcaciones, ofreciendo un espectáculo natural inolvidable.",
            "En caso de no avistar delfines, el paseo se complementa con la visita a una reserva natural donde habitan lobos marinos y diversas especies de aves. Además, podrás admirar lugares icónicos como el Naufragio Folías, El Doradillo o Punta Cuevas. Perfecto para familias, amigos y aventureros individuales."
        ],
        details: [
            "Duración Total: Aproximadamente 2 horas (puede extenderse según condiciones del mar y avistamientos).",
            "Apto para Todo Público.",
            "Máximo 15 pasajeros para una experiencia personalizada."
        ],
        whatToExpect: [
            {
                title: "Equipamiento",
                description:
                    "Nuestra embarcación está equipada con elementos de seguridad y chalecos salvavidas para todos los pasajeros."
            },
            {
                title: "Paseo Guiado",
                description:
                    "Nos dirigimos a las aguas del Golfo Nuevo, donde nuestros guías bilingües te proporcionarán información sobre la diversa variedad de aves y fauna marina, además de recorrer lugares históricos y emblemáticos del lugar."
            },
            {
                title: "Regreso y Despedida",
                description:
                    "Finalizamos nuestra travesía regresando a la costa, donde podrás compartir tus impresiones y recuerdos de esta maravillosa experiencia."
            }
        ],
        requirements: [
            {
                title: "Edad Mínima",
                description:
                    "No tiene edad mínima. Los menores deben estar acompañados por un adulto."
            },
            {
                title: "Condición Física",
                description:
                    "En caso de ser mayor de 65 años, se recomienda contar con certificado médico."
            },
            {
                title: "Salud y Aptitud Física",
                description:
                    "Es importante no tener enfermedades cardíacas u otras condiciones que puedan verse afectadas por la navegación o el movimiento del mar."
            }
        ],
        callToAction:
            "¿Listo para vivir una aventura inolvidable en el mar? ¡Reserva tu paseo ahora y ven a descubrir la magia de los delfines oscuros en su hábitat natural!",
        buttonText: "Reserva Ahora",
        heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
        cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
        galleryImages: [
            "/images/excursiones/delfines/delfines-2.jpeg",
            "/images/excursiones/delfines/delfines-2.jpeg",
            "/images/excursiones/delfines/delfines-2.jpeg",
            "/images/excursiones/delfines/delfines-2.jpeg"
        ]
    },
    {
        title: "Salidas Privadas",
        slug: "salidas-privadas",
        miniDescription: "Personaliza tu experiencia con salidas exclusivas para ti y tu grupo.",
        description: [
            "¿Buscas una experiencia única y personalizada en las aguas cristalinas de la Patagonia? Nuestras salidas privadas en semirrígido son la opción perfecta para ti.",
            "Con capacidad para hasta 20 pasajeros, te ofrecemos una mañana completa de aventura y exploración en un entorno natural incomparable."
        ],
        details: [
            "Atención Personalizada: Con un grupo reducido, nuestros guías pueden enfocarse en brindar una atención más detallada y personalizada, asegurando que tu experiencia sea segura y memorable.",
            "Flexibilidad y Comodidad: Disfruta de la flexibilidad para elegir tus actividades favoritas y adaptar el itinerario según tus intereses.",
            "Exploración Exclusiva: Accede a sitios de buceo y snorkel menos concurridos, disfrutando de la tranquilidad y la belleza de la Patagonia sin las multitudes."
        ],
        whatToExpect: [
            {
                title: "Snorkel con Lobos Marinos",
                description:
                    "Sumérgete en las aguas y disfruta de la compañía de estos juguetones animales marinos en su hábitat natural. Guiado por nuestros instructores profesionales, tendrás la oportunidad de acercarte a los curiosos lobos marinos y observar sus comportamientos de cerca."
            },
            {
                title: "Buceo en Sitios Espectaculares",
                description:
                    "Si eres buceador certificado, podrás explorar el fascinante mundo submarino de la Patagonia. Descubre naufragios, coloridos arrecifes y la abundante vida marina que habita estas aguas."
            },
            {
                title: "Paseos Náuticos en Búsqueda de Delfines",
                description:
                    "Navega por las aguas en busca de los amistosos delfines. Estos paseos no solo te ofrecen la emoción de avistar delfines, sino también la oportunidad de disfrutar de los impresionantes paisajes marinos."
            }
        ],
        requirements: [
            {
                title: "Capacidad",
                description:
                    "Hasta 20 pasajeros para una experiencia privada y cómoda."
            },
            {
                title: "Buceo Certificado",
                description:
                    "Para la actividad de buceo, es necesario contar con certificación previa."
            },
            {
                title: "Personalización",
                description:
                    "Contacta con nosotros para adaptar el itinerario a tus preferencias."
            }
        ],
        callToAction:
            "No dejes pasar la oportunidad de vivir una experiencia única y personalizada en la Patagonia. Contáctanos hoy mismo para reservar tu salida privada en semirrígido y prepárate para una mañana llena de aventuras y descubrimientos.",
        buttonText: "Reserva Ahora",
        heroImage: "/images/excursiones/delfines/delfines-1.jpeg",
        cardImage: "/images/excursiones/delfines/delfines-1.jpeg",
        galleryImages: [
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg",
            "/images/excursiones/delfines/delfines-1.jpeg"
        ]
    }
];


