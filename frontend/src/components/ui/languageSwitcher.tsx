"use client"

import { useState, useEffect } from "react"

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("es")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("locale")
    if (stored && ["es", "en"].includes(stored)) {
      setLocale(stored)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as "es" | "en"
    setLocale(selected)
    localStorage.setItem("locale", selected)
    window.location.reload()
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className={`sticky top-0 z-50 text-white transition-all duration-300 p-3 ${
        isScrolled || isOpen ? "bg-negro-secundario shadow-md pt-3" : "bg-transparent hover:bg-negro-secundario hover:shadow-md hover:pt-3"
      }`}
      aria-label="Seleccionar idioma"
    >
      <option value="es">🇦🇷</option>
      <option value="en">🇺🇸</option>
    </select>
  )
}