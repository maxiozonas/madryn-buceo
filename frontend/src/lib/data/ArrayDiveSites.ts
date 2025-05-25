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
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102617/primavera3_tfnods.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/primavera2_npvlju.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102619/primavera2_xgpmbj.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102617/primavera_ja6nhb.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/primavera1_ondpqv.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102609/primavera4_oqtchh.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102606/primavera5_sbiopb.webp",
      },
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
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102600/albatros_wagiho.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/albatros1_bce9ad.webm",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102596/albatros2_pz17jp.webp",
      },
    ],
    coords: [-42.772176671466276, -65.00268587567936],
  },
  {
    name: "diveSites.miralles.name",
    description: "diveSites.miralles.description",
    difficulty: "diveSites.miralles.difficulty",
    depth: "diveSites.miralles.depth",
    certification: "Advanced OWD",
    time: "15 min",
    media: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102614/mirages_cb5hjp.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753441/miralles_iy8y5s.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102608/mirages2_p9vtdm.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753440/miralles2_tya3p0.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102597/mirages3_zmkx7b.webp",
      },
    ],
    coords: [-42.779059040732605, -64.98180054843917],
  },
  {
    name: "diveSites.urabain.name",
    description: "diveSites.urabain.description",
    difficulty: "diveSites.urabain.difficulty",
    depth: "diveSites.urabain.depth",
    certification: "Open Water Diver",
    time: "10 min",
    media: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102639/urabain3_x59dh5.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753435/urabain_s6s0gy.webm",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102631/urabain2_xolgqs.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102629/urabain4_lpydo1.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102621/urabain_fxwvxx.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102620/urabain5_ptoqzv.webp",
      },
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
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102630/chino2_pyk5ox.webp",
      },
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
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102637/folias5_eegmaf.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102642/folias_ixwlq4.webp",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753436/folias1_swbr9g.webm",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102643/folias3_x4gm7w.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102635/folias4_kagc7j.webp",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102639/folias2_j7zj3n.webp",
      },
    ],
    coords: [-42.79393030124875, -64.93821467050833],
  },
  {
    name: "diveSites.emma.name",
    description: "diveSites.emma.description",
    difficulty: "diveSites.emma.difficulty",
    depth: "diveSites.emma.depth",
    certification: "Scuba Diver",
    time: "5 min",
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110254/parquenuevo_vosgac.jpg" }],
    coords: [-42.76477721055545, -65.01671570280027],
  },
  {
    name: "diveSites.parqueNuevo.name",
    description: "diveSites.parqueNuevo.description",
    difficulty: "diveSites.parqueNuevo.difficulty",
    depth: "diveSites.parqueNuevo.depth",
    certification: "Scuba Diver",
    time: "5 min",
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110254/parquenuevo_vosgac.jpg" }],
    coords: [-42.766697529064395, -65.02275419633675],
  },
  {
    name: "diveSites.puntaCuevas.name",
    description: "diveSites.puntaCuevas.description",
    difficulty: "diveSites.puntaCuevas.difficulty",
    depth: "diveSites.puntaCuevas.depth",
    certification: "Scuba Diver",
    time: "15 min",
    media: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110005/WhatsApp_Image_2025-05-19_at_12.57.56_1_lkfrqs.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110005/WhatsApp_Image_2025-05-19_at_12.57.56_kpxdbc.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110003/WhatsApp_Image_2025-05-19_at_12.57.55_xkh5aj.jpg",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1747753438/puntacuevas_e0sewd.mp4",
      },
    ],
    coords: [-42.77900291600345, -64.99946429862112],
  },
  {
    name: "diveSites.caletaParana.name",
    description: "diveSites.caletaParana.description",
    difficulty: "diveSites.caletaParana.difficulty",
    depth: "diveSites.caletaParana.depth",
    certification: "Scuba Diver",
    time: "10 min",
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110254/parquenuevo_vosgac.jpg" }],
    coords: [-42.749, -64.949],
  },
  {
    name: "diveSites.puntaLoma.name",
    description: "diveSites.puntaLoma.description",
    difficulty: "diveSites.puntaLoma.difficulty",
    depth: "diveSites.puntaLoma.depth",
    certification: "Scuba Diver",
    time: "30 min",
    media: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110127/puntaloma2_o85uvz.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110119/puntaloma1_zhwaow.jpg",
      },
    ],
    coords: [-42.81233204545886, -64.89998144500629],
  },
  {
    name: "diveSites.lasPiedras.name",
    description: "diveSites.lasPiedras.description",
    difficulty: "diveSites.lasPiedras.difficulty",
    depth: "diveSites.lasPiedras.depth",
    certification: "Scuba Diver",
    time: "15 min",
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110254/parquenuevo_vosgac.jpg" }],
    coords: [-42.734299379311864, -65.03257410915717],
  },
];
