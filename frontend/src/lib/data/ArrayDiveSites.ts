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
    name: "diveSites.primavera.name",
    description: "diveSites.primavera.description",
    difficulty: "diveSites.primavera.difficulty",
    depth: "diveSites.primavera.depth",
    certification: "Open Water Diver",
    time: "5 min",
    media: [
      { type: "image", url: "/images/puntos/primavera/primavera.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/primavera2_npvlju.mp4",
      },
      { type: "image", url: "/images/puntos/primavera/primavera2.webp" },
      { type: "image", url: "/images/puntos/primavera/primavera3.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/primavera1_ondpqv.mp4",
      },
      { type: "image", url: "/images/puntos/primavera/primavera4.webp" },
      { type: "image", url: "/images/puntos/primavera/primavera5.webp" },
    ],
    coords: [-42.757, -64.965],
  },
  {
    name: "diveSites.albatros.name",
    description: "diveSites.albatros.description",
    difficulty: "diveSites.albatros.difficulty",
    depth: "diveSites.albatros.depth",
    certification: "Open Water Diver",
    time: "5 min",
    media: [
      { type: "image", url: "/images/puntos/albatros/albatros.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/albatros1_bce9ad.webm",
      },
      { type: "image", url: "/images/puntos/albatros/albatros2.webp" },
    ],
    coords: [-42.758831653388214, -64.97829731579868],
  },
  {
    name: "diveSites.miralles.name",
    description: "diveSites.miralles.description",
    difficulty: "diveSites.miralles.difficulty",
    depth: "diveSites.miralles.depth",
    certification: "Advanced OWD",
    time: "15 min",
    media: [
      { type: "image", url: "/images/puntos/mirages/mirages.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/miralles_iy8y5s.mp4",
      },
      { type: "image", url: "/images/puntos/mirages/mirages.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753440/miralles2_tya3p0.mp4",
      },
      { type: "image", url: "/images/puntos/mirages/mirages2.webp" },
      { type: "image", url: "/images/puntos/mirages/mirages3.webp" },
      { type: "image", url: "/images/puntos/mirages/miralles4.webp" },
    ],
    coords: [-42.75908311304106, -64.95632460663693],
  },
  {
    name: "diveSites.urabain.name",
    description: "diveSites.urabain.description",
    difficulty: "diveSites.urabain.difficulty",
    depth: "diveSites.urabain.depth",
    certification: "Open Water Diver",
    time: "10 min",
    media: [
      { type: "image", url: "/images/puntos/urabain/urabain.webp" },
      { type: "video", url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753435/urabain_s6s0gy.webm" },
      { type: "image", url: "/images/puntos/urabain/urabain2.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain3.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain4.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain5.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain6.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain7.webp" },
      { type: "image", url: "/images/puntos/urabain/urabain8.webp" },
    ],
    coords: [-42.7605, -64.97],
  },
  {
    name: "diveSites.chinoHushung.name",
    description: "diveSites.chinoHushung.description",
    difficulty: "diveSites.chinoHushung.difficulty",
    depth: "diveSites.chinoHushung.depth",
    certification: "Advanced OWD",
    time: "10 min",
    media: [
      { type: "image", url: "/images/puntos/chino/chino.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753455/chino1_qnyr0p.webm",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753455/chino2_zwhslj.webm",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753444/chino3_qhhkub.mp4",
      },
      { type: "image", url: "/images/puntos/chino/chino2.webp" },
    ],
    coords: [-42.7615, -64.972],
  },
  {
    name: "diveSites.folias.name",
    description: "diveSites.folias.description",
    difficulty: "diveSites.folias.difficulty",
    depth: "diveSites.folias.depth",
    certification: "Scuba Diver",
    time: "15 min",
    media: [
      { type: "image", url: "/images/puntos/folias/folias.webp" },
      { type: "image", url: "/images/puntos/folias/folias2.webp" },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753436/folias1_swbr9g.webm",
      },
      { type: "image", url: "/images/puntos/folias/folias3.webp" },
      { type: "image", url: "/images/puntos/folias/folias4.webp" },
      { type: "image", url: "/images/puntos/folias/folias5.webp" },
    ],
    coords: [-42.763, -64.974],
  },
  {
    name: "diveSites.emma.name",
    description: "diveSites.emma.description",
    difficulty: "diveSites.emma.difficulty",
    depth: "diveSites.emma.depth",
    certification: "Scuba Diver",
    time: "5 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.7803, -64.995],
  },
  {
    name: "diveSites.parqueNuevo.name",
    description: "diveSites.parqueNuevo.description",
    difficulty: "diveSites.parqueNuevo.difficulty",
    depth: "diveSites.parqueNuevo.depth",
    certification: "Scuba Diver",
    time: "5 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.7806, -64.9945],
  },
  {
    name: "diveSites.puntaCuevas.name",
    description: "diveSites.puntaCuevas.description",
    difficulty: "diveSites.puntaCuevas.difficulty",
    depth: "diveSites.puntaCuevas.depth",
    certification: "Scuba Diver",
    time: "15 min",
    media: [
      { type: "image", url: "/images/puntos/folias/folias.webp" },
      { type: "video", url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753438/puntacuevas_e0sewd.mp4" },
    ],
    coords: [-42.75, -64.95],
  },
  {
    name: "diveSites.caletaParana.name",
    description: "diveSites.caletaParana.description",
    difficulty: "diveSites.caletaParana.difficulty",
    depth: "diveSites.caletaParana.depth",
    certification: "Scuba Diver",
    time: "10 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.749, -64.949],
  },
  {
    name: "diveSites.puntaLoma.name",
    description: "diveSites.puntaLoma.description",
    difficulty: "diveSites.puntaLoma.difficulty",
    depth: "diveSites.puntaLoma.depth",
    certification: "Scuba Diver",
    time: "30 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.787, -64.985],
  },
  {
    name: "diveSites.lasPiedras.name",
    description: "diveSites.lasPiedras.description",
    difficulty: "diveSites.lasPiedras.difficulty",
    depth: "diveSites.lasPiedras.depth",
    certification: "Scuba Diver",
    time: "15 min",
    media: [{ type: "image", url: "/images/puntos/folias/folias.webp" }],
    coords: [-42.765, -64.98],
  },
];
