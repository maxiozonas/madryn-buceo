export type Reseña = {
    id: number
    name: string
    rating: number
    text: string
    date: string
    image: string
}

export const reseñas: Reseña[] = [
    {
      id: 1,
      name: "home.reseña.1.name",
      rating: 5,
      text: "home.reseña.1.text",
      date: "home.reseña.1.date",
      image: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102534/rese%C3%B1a-1_akz0gk.png",
    },
    {
      id: 2,
      name: "home.reseña.2.name",
      rating: 5,
      text: "home.reseña.2.text",
      date: "home.reseña.2.date",
      image: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102534/rese%C3%B1as-2_ji9t09.png",
    },
    {
      id: 3,
      name: "home.reseña.3.name",
      rating: 5,
      text: "home.reseña.3.text",
      date: "home.reseña.3.date",
      image: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102533/rese%C3%B1as-3_ves2ng.png",
    },
];