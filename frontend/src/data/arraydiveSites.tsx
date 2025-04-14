export interface DiveSite {
  name: string;
  description: string;
  difficulty: string;
  depth: string;
  certification: string;
  time: string;
  image: string;
  coords: [number, number];
}

export const diveSites: DiveSite[] = [
  {
    name: "Naufragio Primavera",
    description:
      "Último naufragio, es un barco pesquero se encuentra en transición cubierto de vida ya que hace pocos meses se realizó su hundimiento.",
    difficulty: "Media/Baja",
    depth: "13 metros aprox",
    certification: "OWD",
    time: "5 min",
    image: "/images/puntos/primavera.JPG",
    coords: [-42.757, -64.965],
  },
  {
    name: "Naufragio Albatros",
    description:
      "Pesquero de 30 metros hundido en 1998. A 18 metros de profundidad, lleno de fauna marina. Apto para penetración.",
    difficulty: "Media",
    depth: "18 metros aprox",
    certification: "OWD",
    time: "5 min",
    image: "/images/puntos/albatros.JPG",
    coords: [-42.758831653388214, -64.97829731579868],
  },
  {
    name: "Naufragio Miralles",
    description:
      "Buque de 70 metros hundido en 2004. Tiene amplios espacios internos para exploración y vida marina variada.",
    difficulty: "Media",
    depth: "22 metros aprox",
    certification: "OWD",
    time: "15 min",
    image: "/images/puntos/mirages.JPG",
    coords: [-42.75908311304106, -64.95632460663693],
  },
  {
    name: "Naufragio Urabain",
    description: "En el año 2018, un barco pesquero frigorífico fue hundido para crear un nuevo sitio de buceo, este naufragio ofrece una estructura amplia para explorar bajo el agua.",
    difficulty: "Fácil",
    depth: "10/20 metros aprox",
    certification: "OWD",
    time: "10 min",
    image: "/images/puntos/urabain.JPG",
    coords: [-42.7605, -64.9700],
  },
  {
    name: "Naufragio Chino Hushung",
    description: "Pesquero chino secuestrado en 2015 por pesca ilegal. Escorado a estribor y preparado solo para exploración externa. Ideal para inmersiones extendidas.",
    difficulty: "Media",
    depth: "Máxima profundidad 30 metros",
    certification: "ADV",
    time: "10 min",
    image: "/images/puntos/chino.JPG",
    coords: [-42.7615, -64.9720],
  },
  {
    name: "Naufragio Folias",
    description: "Barco de 72 metros hundido en los 80′ frente a Playa Paraná. Recostado sobre babor y con parte de su estructura asomando a la superficie. Sus paredes están tapizadas de algas y anémonas.",
    difficulty: "Baja",
    depth: "13 metros",
    certification: "OWD",
    time: "10 min",
    image: "/images/puntos/folias.JPG",
    coords: [-42.7630, -64.9740],
  },
//   {
//     name: "Punta Cuevas 1",
//     description: "A 10 minutos al sur de la ciudad. Fondo rocoso con cañadones submarinos, pólipos y algas invasoras. Ideal para observar biodiversidad.",
//     difficulty: "Fácil",
//     depth: "3/8 metros",
//     certification: "Scuba Diver",
//     time: "10 min",
//     image: "/images/puntos/cuevas1.JPG",
//     coords: [-42.7803, -64.9950],
//   },
//   {
//     name: "Punta Cuevas 2",
//     description: "Cerca de Punta Cuevas 1. Diferente disposición geológica, distinta fauna y flora. También impactado por alga invasora.",
//     difficulty: "Fácil",
//     depth: "3/8 metros",
//     certification: "Scuba Diver",
//     time: "10 min",
//     image: "/images/puntos/cuevas2.JPG",
//     coords: [-42.7806, -64.9945],
//   },
//   {
//     name: "Las Piedras 1",
//     description: "Al norte de la ciudad, 15 minutos navegando. Fondo con restingas y biodiversidad. Ideal para fotografía submarina.",
//     difficulty: "Fácil",
//     depth: "6/12 metros",
//     certification: "OWD",
//     time: "15 min",
//     image: "/images/puntos/piedras1.JPG",
//     coords: [-42.7500, -64.9500],
//   },
//   {
//     name: "Las Piedras 2",
//     description: "Muy cerca de Las Piedras 1. Formaciones rocosas particulares y restingas llenas de vida. Ideal para principiantes y expertos.",
//     difficulty: "Fácil",
//     depth: "6/12 metros",
//     certification: "OWD",
//     time: "15 min",
//     image: "/images/puntos/piedras2.JPG",
//     coords: [-42.7490, -64.9490],
//   },
//   {
//     name: "Reserva Natural Punta Loma",
//     description: "Buceo con lobos marinos y observación del fondo natural. Área protegida. Experiencia única.",
//     difficulty: "Fácil",
//     depth: "5/10 metros aprox",
//     certification: "Scuba Diver",
//     time: "30 min",
//     image: "/images/puntos/punta-loma.JPG",
//     coords: [-42.7870, -64.9850],
//   },
//   {
//     name: "Caleta de Paraná",
//     description: "Buceo sencillo, ideal para primeras experiencias o entrenamientos. Observación del fondo natural.",
//     difficulty: "Fácil",
//     depth: "5/10 metros aprox",
//     certification: "DSD en adelante",
//     time: "10 min",
//     image: "/images/puntos/caletaparana.JPG",
//     coords: [-42.7650, -64.9800],
//   }
];
