"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLinks } from "@/lib/data/NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "../ui/languageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index: number) => {
    setExpandedSubmenu(expandedSubmenu === index ? null : index);
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-all duration-300 p-3 ${
        isScrolled || isOpen
          ? "bg-negro-secundario shadow-md pt-3"
          : "bg-transparent hover:bg-negro-secundario hover:shadow-md hover:pt-3"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://xurbyte.github.io/assets-mdybuceo/MADRYN%20BUCEO_2025-07-05_09_54/images/inicio/logo_keh8c8.png"
              width={80}
              height={40}
              alt="Madryn Buceo Logo"
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-transparent hover:bg-gray-700 text-white"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav className="hidden lg:flex items-center space-x-1">
          {NavLinks.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredSubmenu(index)}
              onMouseLeave={() => setHoveredSubmenu(null)}
            >
              {link.submenu ? (
                <>
                  <button className="flex items-center px-4 py-2 text-white hover:text-[#e12222] font-medium cursor-pointer transition-colors duration-200">
                    <FormattedMessage
                      id={`${link.title}`}
                      defaultMessage={link.title}
                    />

                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <AnimatePresence>
                    <motion.div
                      className={`absolute left-0 top-full w-80 bg-negro-secundario shadow-lg rounded-md px-4 py-4 ${hoveredSubmenu === index ? "block" : "hidden"}`}
                      initial="hidden"
                      animate={hoveredSubmenu === index ? "visible" : "exit"}
                      exit="exit"
                      variants={submenuVariants}
                    >
                      {link.submenu.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          className="block px-3 py-3 text-white hover:bg-negro-secundario hover:text-[#e12222] rounded-md mb-2 transition-colors duration-200"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-sm uppercase">
                              <FormattedMessage
                                id={`${sublink.title}`}
                                defaultMessage={sublink.title}
                              />
                            </span>
                            <span className="text-xs text-gray-300 mt-1">
                              <FormattedMessage
                                id={`${sublink.description}`}
                                defaultMessage={sublink.description}
                              />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-white hover:text-rojo font-medium transition-colors duration-200"
                >
                  <FormattedMessage
                    id={`${link.title}`}
                    defaultMessage={link.title}
                  />
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3 text-xl">
            <a
              href="https://www.facebook.com/madrynbuceo/?fref=ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/madrynbuceo/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://www.tiktok.com/@madrynbuceo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="hover:text-rojo" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5492804564422&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-600" />
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <div
        className={`lg:hidden mt-2 fixed inset-0 top-16 z-50 bg-negro-secundario/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        <div className="container h-full flex flex-col py-6 px-4">
          <nav className="flex flex-col flex-1 space-y-2">
            {NavLinks.map((link, index) => (
              <div
                key={index}
                className="rounded-lg bg-negro-secundario shadow-sm overflow-hidden"
              >
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex justify-between items-center py-4 px-4 text-white hover:text-[#e12222] font-medium transition-colors duration-200"
                    >
                      <FormattedMessage
                        id={`${link.title}`}
                        defaultMessage={link.title}
                      />
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expandedSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden bg-negro-secundario ${
                        expandedSubmenu === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 py-2 bg-negro-secundario">
                        {link.submenu.map((sublink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sublink.href}
                            className="block py-3 text-sm text-gray-200 hover:text-[#e12222] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <FormattedMessage
                              id={`${sublink.title}`}
                              defaultMessage={sublink.title}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-4 px-4 text-white hover:text-[#e12222] font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <FormattedMessage
                      id={`${link.title}`}
                      defaultMessage={link.title}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex justify-center">
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-sm font-medium text-gray-400 mb-2 px-4">
                Idioma / Language
              </h3>
              <LanguageSwitcher isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
