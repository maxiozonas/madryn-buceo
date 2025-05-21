export interface Staff {
    name: string;
    description: string;
    media: { type: "image", url: string };
  }

  export const staff: Staff[] = [
    {   name: "Marcelo Echeverria",
        description: "marcelo.d",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name:"Lucio Echeverria",
        description:"lucio.d",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Julian Bala", 
        description:"julian.d",
        media: {type: "image", url: "/images/nosotros/Staff/julian.webp"}},
    {   name :"Mauro Mazzanti", 
        description:"mauro.d",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Saira Amante", 
        description:"saira.d",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    {   name :"Camila Casanova", 
        description:"camila.d",
        media: {type: "image", url: "/images/nosotros/intro.webp"}},
    ]