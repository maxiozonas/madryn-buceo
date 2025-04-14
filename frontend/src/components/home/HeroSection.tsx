"use client"

import Image from "next/image"
import heroImage from "../../../public/images/inicio/hero-image-2.jpg"
import { Button } from "../ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage || "/placeholder.svg"} alt="Madryn Buceo" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase font-oceanica">
            Bienvenido a tu próxima aventura
          </h1>
          <p className="text-base md:text-2xl mb-8 font-oceanica uppercase">
            Sumérgete en una experiencia inolvidable en la Patagonia
          </p>
          <Button asChild size="lg" className="bg-[#e12222] hover:bg-[#e12222]/50  text-white transition-all duration-300 text-lg font-semibold">
            <Link href="/reservar">Reserva ahora</Link>
          </Button>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-6">
        <div className="animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <ChevronDown className="h-10 w-10 text-white" />
        </div>
      </div>
      <div className="h-4 bg-gradient-to-r from-[#e12222] via-[#e12222]/80 to-black" />
    </div>
  )
}