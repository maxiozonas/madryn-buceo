"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import logo from "../../../public/images/inicio/logo.png";
import { NavLinks } from "@/lib/utils/NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMainIndex, setExpandedMainIndex] = useState<number | null>(
    null
  );
  const [expandedSubIndex, setExpandedSubIndex] = useState<string | null>(null);

  const toggleMainMenu = (index: number) => {
    setExpandedMainIndex((prev) => (prev === index ? null : index));
    setExpandedSubIndex(null);
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
    <header className="sticky top-0 z-50 shadow-md text-white bg-[#121113] pt-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LOGO Y BOTÓN DE MENÚ */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src={logo}
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

        {/* MENÚ DESKTOP */}
        <nav className="hidden lg:flex items-center space-x-1">
          {NavLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.submenu ? (
                <>
                  <button className="flex items-center px-4 py-2 text-white hover:text-[#e12222] font-medium cursor-pointer transition-colors duration-200">
                    {link.title}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <AnimatePresence>
                    <motion.div
                      className="absolute left-0 top-full w-80 bg-[#121113] shadow-lg rounded-md px-4 py-4 hidden group-hover:block"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={submenuVariants}
                    >
                      {link.submenu.map((sublink, subIndex) => (
                        <div key={subIndex}>
                          <Link
                            href={sublink.href || "#"}
                            className="block px-3 py-3 text-white hover:bg-[#403d39] hover:text-[#e12222] rounded-md mb-2 transition-colors duration-200"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-sm uppercase">
                                {sublink.title}
                              </span>
                              {sublink.description && (
                                <span className="text-xs text-gray-300 mt-1">
                                  {sublink.description}
                                </span>
                              )}
                            </div>
                          </Link>

                          {/* Sub-submenu */}
                          {sublink.submenu && (
                            <div className="ml-3 mt-1 space-y-1">
                              {sublink.submenu.map((subsub, i) => (
                                <Link
                                  key={i}
                                  href={subsub.href}
                                  className="block px-3 py-2 font-medium text-sm uppercase text-[#e12222] hover:text-white hover:bg-[#2e2c2a] rounded-md transition"
                                >
                                  {subsub.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-white hover:text-[#e12222] font-medium transition-colors duration-200"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CONTENEDOR PARA BOTÓN Y REDES SOCIALES */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#e12222] to-[#ff4d4d] hover:scale-105 hover:shadow-lg text-white transition-all duration-300 text-lg font-semibold"
          >
            <Link href="/reservar" className="w-full">
              Reservar Ahora
            </Link>
          </Button>
          {/* Íconos de redes sociales */}
          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6 text-white hover:text-[#e12222] transition-colors duration-200" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6 text-white hover:text-[#e12222] transition-colors duration-200" />
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-6 w-6 text-white hover:text-[#e12222] transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      <div
        className={`lg:hidden mt-2 fixed inset-0 top-16 z-50 bg-[#121113]/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
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
                className="rounded-lg bg-[#1a1819]/50 shadow-sm overflow-hidden"
              >
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleMainMenu(index)}
                      className="w-full flex justify-between items-center py-4 px-4 text-white hover:text-[#e12222] font-medium transition-colors duration-200"
                    >
                      {link.title}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expandedMainIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedMainIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 py-2 bg-[#1f1d1e]/50">
                        {link.submenu.map((sublink, subIndex) => {
                          const hasSubsubmenu = !!sublink.submenu;
                          const isSubOpen =
                            expandedSubIndex === `${index}-${subIndex}`;
                          const toggleSubSubmenu = () => {
                            setExpandedSubIndex(
                              isSubOpen ? null : `${index}-${subIndex}`
                            );
                          };

                          return (
                            <div key={subIndex} className="mb-2">
                              <div className="flex justify-between items-center">
                                <Link
                                  href={sublink.href || "#"}
                                  className="block text-sm text-gray-200 hover:text-[#e12222] transition-colors duration-200"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sublink.title}
                                </Link>
                                {hasSubsubmenu && (
                                  <button
                                    onClick={toggleSubSubmenu}
                                    className="text-gray-300 hover:text-[#e12222] ml-2"
                                  >
                                    <ChevronRight
                                      className={`h-4 w-4 transition-transform ${
                                        isSubOpen ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Sub-submenú */}
                              {hasSubsubmenu && (
                                <div
                                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                                    isSubOpen
                                      ? "max-h-96 opacity-100"
                                      : "max-h-0 opacity-0"
                                  }`}
                                >
                                  {sublink.submenu.map(
                                    (subsub, subsubIndex) => (
                                      <Link
                                        key={subsubIndex}
                                        href={subsub.href}
                                        className="block text-xs text-gray-100 hover:text-[#e12222] transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subsub.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-4 px-4 text-white hover:text-[#e12222] font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6">
            <Button
              className="w-full bg-gradient-to-r from-[#e12222] to-[#ff4d4d] hover:scale-105 hover:shadow-lg text-white transition-all duration-300 text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/reservar" className="w-full">
                Reservar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
