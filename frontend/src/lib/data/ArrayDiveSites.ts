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
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698124/IMG_2209_hh14gh.jpg",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1748698270/GH018218_dceedt.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698121/464810858_27198941499754168_8250281170148689569_n_goef7u.jpg",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1748698437/GH018211_bvruzh.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698125/GOPR8204_imrqah.jpg",
      },
            {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698153/G0060367_bc5tkn.jpg",
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
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698633/IMG_2235_af5bn1.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698632/IMG_2258_hexhhv.jpg",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1748698792/GX011040_kcmtks.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698629/IMG_2293_h0gaok.jpg",
      },
            {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698628/IMG_2273_t4dptr.jpg",
      },
                  {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748698629/IMG_2299_sxpzdi.jpg",
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
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697301/IMG_2245_tvp7va.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697302/IMG_2220_du89kp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697301/29196829_1844414142300253_3505204453298929664_n_at13u6.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697298/IMG_2207_g5bf0o.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697297/IMG_2205_npkkhe.jpg" }
    ],
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
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748696753/IMG_2213_yprbx5.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110003/WhatsApp_Image_2025-05-19_at_12.57.55_xkh5aj.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748696740/IMG_2246_nakm6x.jpg",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dyxrbncdj/video/upload/v1748696833/GX014767_b5rj9q.mp4",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748696771/G0237866_d9bvem.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748696740/GX017821_-_frame_at_0m0s_uwqkdf.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748696756/IMG_2256_timrt3.jpg",
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
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699003/IMG_2214_buyguh.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699002/IMG_2226_ua9brq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699002/IMG_2251_cp1xbu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699001/IMG_2210_qa70jq.jpg" }
    ],
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
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697527/IMG_2260_wsyhcu.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110127/puntaloma2_o85uvz.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748110119/puntaloma1_zhwaow.jpg",
      },
            {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697527/GX015467_-_frame_at_0m13s_ufyski.jpg",
      },
{
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697527/464678161_27169256919389293_4018327767793814721_n_wkvnf1.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697527/IMG_2227_v1iv4d.jpg",
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
    media: [{ type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697801/IMG_2206_mscbes.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697803/464803529_27184937277821257_6738654526236211925_n_pkupww.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697802/IMG_2255_u1fgqu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697803/IMG_2228_e9v3ua.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748697804/464149890_27147354271579558_2534001931330962887_n_cy9kk0.jpg" }
    ],
    coords: [-42.734299379311864, -65.03257410915717],
  },
];
