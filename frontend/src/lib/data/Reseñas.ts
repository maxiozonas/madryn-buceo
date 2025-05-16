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
      image: "/images/reseñas/reseña 1.png",
    },
    {
      id: 2,
      name: "home.reseña.2.name",
      rating: 5,
      text: "home.reseña.2.text",
      date: "home.reseña.2.date",
      image: "/images/reseñas/reseñas 2.png",
    },
    {
      id: 3,
      name: "home.reseña.3.name",
      rating: 5,
      text: "home.reseña.3.text",
      date: "home.reseña.3.date",
      image: "/images/reseñas/reseñas 3.png",
    },
];