import { Card } from "../ui/card"
import Link from "next/link"
import Image from "next/image"
import { CardContent } from "../ui/card"
import ButtonRojo from "../ui/button-rojo"
import { useRouter } from "next/navigation"

export default function ExcursionCard({
  title,
  description,
  image,
  link,
  bg
}: {
  title: string
  description: string
  image: string
  link: string
  bg?: boolean
}) {
  const router = useRouter()


  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(link)
  }

  return (
    <div
      className={bg ? "group relative bg-negro overflow-hidden shadow-md h-full flex flex-col" : "group relative bg-negro-secundario overflow-hidden shadow-md h-full flex flex-col"}
    >
      <Card className={bg ? "overflow-hidden p-0 border-none rounded-none shadow-md bg-negro transition-shadow h-full" : "overflow-hidden p-0 border-none rounded-none shadow-md bg-negro-secundario transition-shadow h-full"}>
        <Link href={link} className="h-full flex flex-col" onClick={handleClick}>
          <div className="relative overflow-hidden h-64">
            <div 
              className="w-full h-full rounded-none"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
          <CardContent className={bg ? "flex flex-col items-center text-center text-white relative p-6 flex-grow justify-between" : "flex flex-col items-center text-center text-white relative p-6 flex-grow justify-between"}>
            <h3
              className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors"
            >
              {title}
            </h3>
            <div className={bg ? "flex-grow mb-6" : "flex-grow mb-6"}>
              <p 
                className="text-gray-300 line-clamp-3"
              >{description}</p>
            </div>
            <div className={bg ? "mt-auto w-full" : "mt-auto w-full"}>
              <ButtonRojo 
                texto="Mas información" 
                fullWidth={true} 
                href={link} 
              />
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  )
}