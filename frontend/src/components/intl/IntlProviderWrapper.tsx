"use client"

import { IntlProvider } from "react-intl"
import es from "@/app/locales/es.json"
import en from "@/app/locales/en.json"
import { useEffect, useState } from "react"

const messages: Record<string, Record<string, string>> = { es, en }

export default function IntlProviderWrapper({
  children,
  locale = "es",
}: {
  children: React.ReactNode
  locale?: "es" | "en"
}) {
  const [currentLocale, setCurrentLocale] = useState(locale)

  useEffect(() => {
    // Leer el locale desde localStorage al montar el componente
    const storedLocale = localStorage.getItem("locale") || locale
    setCurrentLocale(storedLocale as "es" | "en")
  }, [locale])

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      {children}
    </IntlProvider>
  )
}