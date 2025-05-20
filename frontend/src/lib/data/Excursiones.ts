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
  callToAction: { text: string; href: string }[]
  buttonText: string
  heroImage: string
  cardImage: string
  galleryImages: string[]
}

export const excursiones: Excursion[] = [
  {
    title: "excursions.snorkeling.title",
    slug: "snorkeling-con-lobos",
    miniDescription: "excursions.snorkeling.miniDescription",
    description: [
      "excursions.snorkeling.description.0",
      "excursions.snorkeling.description.1",
      "excursions.snorkeling.description.2",
    ],
    details: [
      {
        title: "excursions.snorkeling.details.duration.title",
        description: "excursions.snorkeling.details.duration.description",
        icon: "clock",
      },
      {
        title: "excursions.snorkeling.details.guide.title",
        description: "excursions.snorkeling.details.guide.description",
        icon: "user",
      },
      {
        title: "excursions.snorkeling.details.equipment.title",
        description: "excursions.snorkeling.details.equipment.description",
        icon: "lifeBuoy",
      },
      {
        title: "excursions.snorkeling.details.forAll.title",
        description: "excursions.snorkeling.details.forAll.description",
        icon: "users",
      },
      {
        title: "excursions.snorkeling.details.noExperience.title",
        description: "excursions.snorkeling.details.noExperience.description",
        icon: "thumbsUp",
      },
    ],
    whatToExpect: [
      {
        title: "excursions.snorkeling.whatToExpect.equipment.title",
        description: "excursions.snorkeling.whatToExpect.equipment.description",
      },
      {
        title: "excursions.snorkeling.whatToExpect.briefing.title",
        description: "excursions.snorkeling.whatToExpect.briefing.description",
      },
      {
        title: "excursions.snorkeling.whatToExpect.boatTrip.title",
        description: "excursions.snorkeling.whatToExpect.boatTrip.description",
      },
      {
        title: "excursions.snorkeling.whatToExpect.guidedSnorkeling.title",
        description: "excursions.snorkeling.whatToExpect.guidedSnorkeling.description",
      },
      {
        title: "excursions.snorkeling.whatToExpect.wildlifeInteraction.title",
        description: "excursions.snorkeling.whatToExpect.wildlifeInteraction.description",
      },
      {
        title: "excursions.snorkeling.whatToExpect.return.title",
        description: "excursions.snorkeling.whatToExpect.return.description",
      },
    ],
    requirements: [
      {
        title: "excursions.snorkeling.requirements.minAge.title",
        description: "excursions.snorkeling.requirements.minAge.description",
      },
      {
        title: "excursions.snorkeling.requirements.physicalCondition.title",
        description: "excursions.snorkeling.requirements.physicalCondition.description",
      },
      {
        title: "excursions.snorkeling.requirements.health.title",
        description: "excursions.snorkeling.requirements.health.description",
      },
    ],
    callToAction: [
      {
        text: "excursions.snorkeling.callToAction.text",
        href: "https://madrynbuceo.outtrip.com/experiences/674f51e8752c8c796efc1f95/snorkel-con-lobos-marinos",
      },
    ],
    buttonText: "excursions.snorkeling.buttonText",
    heroImage: "https://drive.google.com/uc?export=view&id=1f61rt5N-l9vWZ0rVazrtWLFNZe72rP9x",
    cardImage: "https://drive.google.com/uc?export=view&id=1f61rt5N-l9vWZ0rVazrtWLFNZe72rP9x",
    galleryImages: [
      "https://drive.google.com/uc?export=view&id=17s8A9qBO_LkxV5Vxz4sCz7ocu60b_vgM",
      "https://drive.google.com/uc?export=view&id=1dfQ_ElSItkXM_BanEBVsXQEox6VCwbhM",
      "https://drive.google.com/uc?export=view&id=1rncEDIY9Ghx_nQwHBDmWDJAwHI9LURlF",
      "https://drive.google.com/uc?export=view&id=1bq0JPzIB1jSeM81TWu1fugcdQiN0s_L6",
    ],
  },
  {
    title: "excursions.bautismo.title",
    slug: "bautismo-buceo",
    miniDescription: "excursions.bautismo.miniDescription",
    description: [
      "excursions.bautismo.description.0",
      "excursions.bautismo.description.1",
      "excursions.bautismo.description.2",
      "excursions.bautismo.description.3",
    ],
    details: [
      {
        title: "excursions.bautismo.details.instructor.title",
        description: "excursions.bautismo.details.instructor.description",
        icon: "award",
      },
      {
        title: "excursions.bautismo.details.duration.title",
        description: "excursions.bautismo.details.duration.description",
        icon: "clock",
      },
      {
        title: "excursions.bautismo.details.forAll.title",
        description: "excursions.bautismo.details.forAll.description",
        icon: "users",
      },
      {
        title: "excursions.bautismo.details.underwater.title",
        description: "excursions.bautismo.details.underwater.description",
        icon: "fish",
      },
    ],
    whatToExpect: [
      {
        title: "excursions.bautismo.whatToExpect.equipment.title",
        description: "excursions.bautismo.whatToExpect.equipment.description",
      },
      {
        title: "excursions.bautismo.whatToExpect.briefing.title",
        description: "excursions.bautismo.whatToExpect.briefing.description",
      },
      {
        title: "excursions.bautismo.whatToExpect.practice.title",
        description: "excursions.bautismo.whatToExpect.practice.description",
      },
      {
        title: "excursions.bautismo.whatToExpect.dive.title",
        description: "excursions.bautismo.whatToExpect.dive.description",
      },
      {
        title: "excursions.bautismo.whatToExpect.return.title",
        description: "excursions.bautismo.whatToExpect.return.description",
      },
    ],
    requirements: [
      {
        title: "excursions.bautismo.requirements.minAge.title",
        description: "excursions.bautismo.requirements.minAge.description",
      },
      {
        title: "excursions.bautismo.requirements.physicalCondition.title",
        description: "excursions.bautismo.requirements.physicalCondition.description",
      },
      {
        title: "excursions.bautismo.requirements.health.title",
        description: "excursions.bautismo.requirements.health.description",
      },
    ],
    callToAction: [
      {
        text: "excursions.bautismo.callToAction.text",
        href: "https://madrynbuceo.outtrip.com/experiences/674f404d7e5b9806387322d6/bautismos-submarinos-",
      },
    ],
    buttonText: "excursions.bautismo.buttonText",
    heroImage: "https://drive.google.com/uc?export=view&id=1vu0MC7NhOGP5Ne0EivwqsrfYUm0mISQm",
    cardImage: "https://drive.google.com/uc?export=view&id=1vu0MC7NhOGP5Ne0EivwqsrfYUm0mISQm",
    galleryImages: [
      "https://drive.google.com/uc?export=view&id=1UclvBvyXy1kov-a50Gut26hd9nT3Dt0f",
      "https://drive.google.com/uc?export=view&id=18ajKPkwy0cgriox33mTm-cI4IUXhLe1e",
      "https://drive.google.com/uc?export=view&id=1wI8wqX-MrSAqvUzGd73DIQOYgPXgR1GC",
      "https://drive.google.com/uc?export=view&id=1hTWmgR_cpAlfAzR7jj_Q-cD_UP-pcSld",
    ],
  },
  {
    title: "excursions.delfines.title",
    slug: "paseo-nautico-en-busca-de-delfines",
    miniDescription: "excursions.delfines.miniDescription",
    description: [
      "excursions.delfines.description.0",
      "excursions.delfines.description.1",
      "excursions.delfines.description.2",
    ],
    details: [
      {
        title: "excursions.delfines.details.duration.title",
        description: "excursions.delfines.details.duration.description",
        icon: "clock",
      },
      {
        title: "excursions.delfines.details.forAll.title",
        description: "excursions.delfines.details.forAll.description",
        icon: "users",
      },
      {
        title: "excursions.delfines.details.smallGroup.title",
        description: "excursions.delfines.details.smallGroup.description",
        icon: "userPlus",
      },
      {
        title: "excursions.delfines.details.boarding.title",
        description: "excursions.delfines.details.boarding.description",
        icon: "anchor",
      },
    ],
    whatToExpect: [
      {
        title: "excursions.delfines.whatToExpect.equipment.title",
        description: "excursions.delfines.whatToExpect.equipment.description",
      },
      {
        title: "excursions.delfines.whatToExpect.guidedTour.title",
        description: "excursions.delfines.whatToExpect.guidedTour.description",
      },
      {
        title: "excursions.delfines.whatToExpect.return.title",
        description: "excursions.delfines.whatToExpect.return.description",
      },
    ],
    callToAction: [
      {
        text: "excursions.delfines.callToAction.text",
        href: "https://madrynbuceo.outtrip.com/experiences/67603481407d6f69b98a0f43/paseo-nautico-en-busqueda-de-delfines",
      },
    ],
    buttonText: "excursions.delfines.buttonText",
    heroImage: "https://drive.google.com/uc?export=view&id=1TU8THawD7g-VCPCzhcRAfXiYHdoOnGvi",
    cardImage: "https://drive.google.com/uc?export=view&id=1TU8THawD7g-VCPCzhcRAfXiYHdoOnGvi",
    galleryImages: [
      "https://drive.google.com/uc?export=view&id=1W3XmOfHYfwXtQnjeQe4U72Sd0SSz-1YZ",
      "https://drive.google.com/uc?export=view&id=1hYx5vQDghxcIPlEuMGIfgLGMbAMgugdh",
      "https://drive.google.com/uc?export=view&id=1EP3RuZZA3DjJbvDVpcTaAXiokUvsXt_j",
      "https://drive.google.com/uc?export=view&id=1ysBMYIrDhcWIccPa-uOg8Kz3Hx0F6vvf",
    ],
  },
  {
    title: "excursions.salidas.title",
    slug: "salidas-privadas",
    miniDescription: "excursions.salidas.miniDescription",
    description: [
      "excursions.salidas.description.0",
    ],
    details: [
      {
        title: "excursions.salidas.details.personalized.title",
        description: "excursions.salidas.details.personalized.description",
        icon: "star",
      },
      {
        title: "excursions.salidas.details.flexibility.title",
        description: "excursions.salidas.details.flexibility.description",
        icon: "shuffle",
      },
      {
        title: "excursions.salidas.details.exclusive.title",
        description: "excursions.salidas.details.exclusive.description",
        icon: "map",
      },
    ],
    whatToExpect: [
      {
        title: "excursions.salidas.whatToExpect.snorkeling.title",
        description: "excursions.salidas.whatToExpect.snorkeling.description",
      },
      {
        title: "excursions.salidas.whatToExpect.diving.title",
        description: "excursions.salidas.whatToExpect.diving.description",
      },
      {
        title: "excursions.salidas.whatToExpect.dolphinTour.title",
        description: "excursions.salidas.whatToExpect.dolphinTour.description",
      },
    ],
    callToAction: [
      {
        text: "excursions.salidas.callToAction.text",
        href: "https://madrynbuceo.outtrip.com/experiences/67603481407d6f69b98a0f43/paseo-nautico-en-busqueda-de-delfines",
      },
    ],
    buttonText: "excursions.salidas.buttonText",
    heroImage: "https://drive.google.com/uc?export=view&id=1C6QpOKVpM1uuQqVzVjQC0GIVjV42xS-1",
    cardImage: "https://drive.google.com/uc?export=view&id=1C6QpOKVpM1uuQqVzVjQC0GIVjV42xS-1",
    galleryImages: [
      "https://drive.google.com/uc?export=view&id=1zz1Tx0sFT2hE3QHDiD3zCeRRJS8vCSYY",
      "https://drive.google.com/uc?export=view&id=1kiiaPaTVGNuyJzDUj62gxaE-GWvQAfAL",
      "https://drive.google.com/uc?export=view&id=1jkwuc7s7bRE_d2Qa9WQuhZxkFzKDTOOQ",
      "https://drive.google.com/uc?export=view&id=1lbULPrD6jtzA6kL5RuysG18RaootLrbC",
    ],
  },
]
