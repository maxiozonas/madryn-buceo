"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import spain from "../../../public/images/flags/spain.svg"
import uk from "../../../public/images/flags/uk.svg"

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export default function LanguageSwitcher({ isMobile = false }: LanguageSwitcherProps) {
  const [locale, setLocale] = useState("es")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("locale")
    if (stored && ["es", "en"].includes(stored)) {
      setLocale(stored)
    }

  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as "es" | "en"
    setLocale(selected)
    localStorage.setItem("locale", selected)
    window.location.reload()
  }

  const flags = {
    es: {
      src: spain,
      alt: "Bandera de España"
    },
    en: {
      src: uk,
      alt: "UK Flag"
    }
  }

  if (isMobile) {
    return (
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={() => handleChange({ target: { value: "es" } } as React.ChangeEvent<HTMLSelectElement>)}
          className={cn(
            "flex flex-col items-center p-3 rounded-lg transition-all duration-200",
            locale === "es" ? "bg-negro-secundario ring-2 ring-[#e12222]" : "bg-negro-secundario/50"
          )}
          aria-label="Cambiar a Español"
        >
          <div className="relative w-8 h-6 overflow-hidden rounded shadow-sm mb-1">
            <Image 
              src={flags.es.src}
              alt={flags.es.alt}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium">ESP</span>
        </button>
        
        <button
          onClick={() => handleChange({ target: { value: "en" } } as React.ChangeEvent<HTMLSelectElement>)}
          className={cn(
            "flex flex-col items-center p-3 rounded-lg transition-all duration-200",
            locale === "en" ? "bg-negro-secundario ring-2 ring-[#e12222]" : "bg-negro-secundario/50"
          )}
          aria-label="Switch to English"
        >
          <div className="relative w-8 h-6 overflow-hidden rounded shadow-sm mb-1">
            <Image 
              src={flags.en.src}
              alt={flags.en.alt}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium">ENG</span>
        </button>
      </div>
    )
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        buttonRef.current && 
        !dropdownRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300ms delay before closing the dropdown
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <button
        ref={buttonRef}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-negro-secundario transition-colors duration-200"
        aria-label="Seleccionar idioma"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onMouseEnter={handleMouseEnter}
      >
        <div className="relative w-6 h-4 overflow-hidden rounded shadow-sm">
          <Image 
            src={locale === "es" ? flags.es.src : flags.en.src}
            alt={locale === "es" ? flags.es.alt : flags.en.alt}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium">{locale === "es" ? "ESP" : "ENG"}</span>
      </button>
      
      {isDropdownOpen && (
        <div 
          ref={dropdownRef}
          className="absolute right-0 top-full mt-1 w-32 bg-negro-secundario shadow-lg rounded-md overflow-hidden z-50"
          onMouseEnter={handleMouseEnter}
        >
          <button
            onClick={() => handleChange({ target: { value: "es" } } as React.ChangeEvent<HTMLSelectElement>)}
            className={cn(
              "flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-negro-secundario/80 transition-colors duration-200",
              locale === "es" && "bg-negro-secundario/80"
            )}
          >
            <div className="relative w-6 h-4 overflow-hidden rounded shadow-sm">
              <Image 
                src={flags.es.src}
                alt={flags.es.alt}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm">ESP</span>
          </button>
          
          <button
            onClick={() => handleChange({ target: { value: "en" } } as React.ChangeEvent<HTMLSelectElement>)}
            className={cn(
              "flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-negro-secundario/80 transition-colors duration-200",
              locale === "en" && "bg-negro-secundario/80"
            )}
          >
            <div className="relative w-6 h-4 overflow-hidden rounded shadow-sm">
              <Image 
                src={flags.en.src}
                alt={flags.en.alt}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm">ENG</span>
          </button>
        </div>
      )}
    </div>
  )
}