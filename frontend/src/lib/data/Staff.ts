export interface Staff {
    name: string;
    description: string;
    media: { type: "image", url: string };
  }

  export const staff: Staff[] = [
    {   name: "Marcelo Echeverria",
        description: "marcelo.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699984/marcelo_k8ieyy.png"}},
    {   name:"Lucio Echeverria",
        description:"lucio.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699643/lucio_qvjfil.jpg"}},
    {   name :"Julian Bala", 
        description:"julian.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102678/julian_d1i4kb.webp"}},
    {   name :"Mauro Mazzanti", 
        description:"mauro.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699640/mauro_ldyme4.jpg"}},
    {   name :"Saira Amante", 
        description:"saira.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699939/sai_n5ibmr.png"}},
    {   name :"Camila Casanova", 
        description:"camila.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748699642/cami_kaowdw.jpg"}},
    ]