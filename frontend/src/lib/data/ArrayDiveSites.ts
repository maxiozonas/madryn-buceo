export interface DiveSite {
  name: string;
  description: string;
  difficulty: string;
  depth: string;
  certification: string;
  time: string;
  media: { type: "image" | "video"; url: string }[];
  coords: [number, number];
}

export const diveSites: DiveSite[] = [
  {
    name: "Naufragio Primavera",
    description:
      "Es un barco pesquero pequeño,y el naufragio más nuevo en nuestro golfo, por lo cual está en pleno proceso de poblarse completamente de vida marina.",
    difficulty: "Media/Baja",
    depth: "13 metros",
    certification: "Open Water Diver",
    time: "5 minutos",
    media: [
      { type: "image", url: "/images/puntos/primavera/primavera.webp" },
      { type: "video", url: "/videos/puntos/primavera/primavera1.mp4" },
      { type: "image", url: "/images/puntos/primavera/primavera2.webp" },
      { type: "image", url: "/images/puntos/primavera/primavera3.webp" },
      { type: "image", url: "/images/puntos/primavera/primavera4.webp" },
      { type: "image", url: "/images/puntos/primavera/primavera5.webp" },
    ],
    coords: [-42.757, -64.965],
  },
  {
    name: "Naufragio Albatros",
    description:
      "El buque Albatros es un pesquero de 30 metros, hundido en septiembre de 1998 para crear un sitio de buceo recreativo, colmado de vida por su antigüedad.",
    difficulty: "Media",
    depth: "22 metros",
    certification: "Open Water Diver",
    time: " 5 minutos",
    media: [
      { type: "image", url: "/images/puntos/albatros/albatros.webp" },
      { type: "video", url: "/videos/puntos/albatros/albatros1.webm" },
      { type: "image", url: "/images/puntos/albatros/albatros2.webp" },
    ],
    coords: [-42.758831653388214, -64.97829731579868],
  },
  {
    name: "Naufragio Miralles",
    description:
      "En marzo de 2004, éste buque de 70 metros, fue hundido para crear un sitio de buceo recreativo. Cuenta con espacios internos amplios lo cual permite penetraciones seguras. Alberga una gran variedad de vida marina.",
    difficulty: "Media",
    depth: "24 metros",
    certification: "Advanced OWD",
    time: "15 minutos",
    media: [
      { type: "image", url: "/images/puntos/mirages/mirages.webp" },
      { type: "video", url: "/videos/puntos/mirages/mirages1.webm" },
      { type: "image", url: "/images/puntos/mirages/mirages.webp" },
      { type: "image", url: "/images/puntos/mirages/mirages2.webp" },
      { type: "image", url: "/images/puntos/mirages/mirages3.webp" },
    ],
    coords: [-42.75908311304106, -64.95632460663693],
  },
  {
    name: "Naufragio Urabain",
    description:
      "En el año 2018, un barco pesquero frigorífico fue hundido para crear un nuevo sitio de buceo, este naufragio ofrece una estructura amplia para explorar bajo el agua.",
    difficulty: "Media/Baja",
    depth: "20 metros aprox",
    certification: "Open Water Diver",
    time: "10 minutos",
    media: [
      { type: "image", url: "/images/puntos/urabain/urabain.webp" },
      { type: "video", url: "/videos/puntos/urabain/urabain.webm" },
      { type: "image", url: "/images/puntos/urabain/urabain2.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain3.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain4.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain5.webp" },
    ],
    coords: [-42.7605, -64.97],
  },
  {
    name: "Naufragio Chino Hushung",
    description:
      "Es un barco pesquero chino que fue secuestrado en 2016 debido a la pesca ilegal en mar argentino por la prefectura naval. Posee 78 metros de eslora.",
    difficulty: "Media/Alta",
    depth: "30 metros",
    certification: "Advanced OWD",
    time: "10 minutos",
    media: [
      { type: "image", url: "/images/puntos/chino/chino.webp" },
      { type: "video", url: "/videos/puntos/chino/chino1.webm" },
      { type: "video", url: "/videos/puntos/chino/chino2.webm" },
      { type: "image", url: "/images/puntos/chino/chino2.webp" },
    ],
    coords: [-42.7615, -64.972],
  },
  {
    name: "Naufragio Folias",
    description:
      "Barco pesquero de 72 mts. de eslora hundido a principios de los 80′ sobre las costas de Playa Paraná, víctima de un incendio provocado de manera intencional. Parte de su estructura asoma a la superficie.",
    difficulty: "Baja",
    depth: "12 metros",
    certification: "Scuba Diver",
    time: "15 minutos",
    media: [
      { type: "image", url: "/images/puntos/folias/folias.webp" },
      { type: "image", url: "/images/puntos/folias/folias2.webp" },
      { type: "video", url: "/videos/puntos/folias/folias1.webm" },
      { type: "image", url: "/images/puntos/folias/folias3.webp" },
      { type: "image", url: "/images/puntos/folias/folias4.webp" },
      { type: "image", url: "/images/puntos/folias/folias5.webp" },
    ],
    coords: [-42.763, -64.974],
  },
  {
    name: "Naufragio Emma",
    description:
      "Goleta de madera que desempeñó diversas tareas en las costas patagónicas chilenas y argentinas. En 1947 se hundió frente a Puerto Madryn tras sufrir un incendio. ",
    difficulty: "Baja",
    depth: "16 metros",
    certification: "Scuba Diver",
    time: "5 minutos",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.7803, -64.995],
  },
  {
    name: "Parque Nuevo",
    description:
      "Parque artificial formado por diferentes atractivos como partes de barcos, restos de avionetas, que fueron invadidos por la naturaleza del lugar.",
    difficulty: "Baja",
    depth: "10 metros",
    certification: "Scuba Diver",
    time: "5 minutos",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.7806, -64.9945],
  },
  {
    name: "Parque Natural Punta Cuevas",
    description:
      "Es un hermoso arrecife natural, su fondo rocoso presenta cañadones submarinos habitados por una abundante diversidad de peces e invertebrados. Destaca por la gran variedad de pólipos de colores que tapizan sus aleros.",
    difficulty: "Baja",
    depth: "12 metros",
    certification: "Scuba Diver",
    time: "15 minutos",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.75, -64.95],
  },
  {
    name: "Caleta de paraná (restinga punta este)",
    description:
      "Sitio de buceo sencillo ideal para primeras experiencias o entrenamientos donde veremos el fondo natural de nuestras aguas repleto de vida marina.",
    difficulty: "Baja",
    depth: "10 metros",
    certification: "Scuba Diver",
    time: "10 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.749, -64.949],
  },
  {
    name: "Reserva Natural Punta Loma",
    description:
      "Reserva natural con una colonia estable de lobos marinos donde buceamos rodeados de estos hermosos y cariñosos animales, además de ver el fondo natural de nuestras aguas lleno de diversidad marina.",
    difficulty: "Baja",
    depth: "8 metros",
    certification: "Scuba Diver",
    time: "30 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.787, -64.985],
  },
  {
    name: "Parque Las piedras",
    description:
      "Su estructura del arrecife natural rocoso brinda múltiples refugios para la fauna marina, convirtiéndose en un punto de gran atractivo para el buceo recreativo y la fotografía submarina.",
    difficulty: "Baja",
    depth: "12 metros",
    certification: "Scuba Diver",
    time: "15 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.765, -64.98],
  },
];
