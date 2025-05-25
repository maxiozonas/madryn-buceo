export interface Staff {
    name: string;
    description: string;
    media: { type: "image", url: string };
  }

  export const staff: Staff[] = [
    {   name: "Marcelo Echeverria",
        description: "marcelo.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102425/terranovaa_lsleg4.webp"}},
    {   name:"Lucio Echeverria",
        description:"lucio.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102425/terranovaa_lsleg4.webp"}},
    {   name :"Julian Bala", 
        description:"julian.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102678/julian_d1i4kb.webp"}},
    {   name :"Mauro Mazzanti", 
        description:"mauro.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102425/terranovaa_lsleg4.webp"}},
    {   name :"Saira Amante", 
        description:"saira.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102425/terranovaa_lsleg4.webp"}},
    {   name :"Camila Casanova", 
        description:"camila.d",
        media: {type: "image", url: "https://res.cloudinary.com/dyxrbncdj/image/upload/v1748102425/terranovaa_lsleg4.webp"}},
    ]