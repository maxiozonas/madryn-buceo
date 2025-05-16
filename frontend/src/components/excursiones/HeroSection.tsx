"use client"

import Image from "next/image"
import ButtonRojo from "../ui/button-rojo"
import { ChevronDown } from "lucide-react"
import { FormattedMessage } from "react-intl"

interface HeroSectionProps {
  title: string 
  heroImage: string 
  miniDescription: string 
  callToAction: { href: string } 
  altText: string 
}

const scrollToNextSection = () => {
  const nextSection = document.getElementById("descripcion")
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" })
  } else {
    console.warn("Element with ID 'descripcion' not found for scrolling.")
  }
}

export default function HeroSection({
  title,
  heroImage,
  miniDescription,
  callToAction,
  altText,
}: HeroSectionProps) {
  return (
    <>
      <section className="h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-0 bg-black/50" />
        </div>
        <span className="sr-only">
          <FormattedMessage id={altText} />
        </span>
        <div className="container mb-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica">
            <FormattedMessage id={title} />
          </h1>
          <p className="text-base md:text-2xl mb-8 font-oceanica">
            <FormattedMessage id={miniDescription} />
          </p>
          <ButtonRojo
            texto={<FormattedMessage id="hero.button.bookNow" />}
            href={callToAction.href}
          />
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-6">
        <button
          className="animate-bounce cursor-pointer bg-none flex flex-col items-center gap-2"
          onClick={scrollToNextSection}
        >
          <p className="text-white font-medium">
            <FormattedMessage id="hero.exploreMore" />
          </p>
          <ChevronDown className="h-10 w-10 text-white" />
        </button>
      </div>
    </>
  )
}