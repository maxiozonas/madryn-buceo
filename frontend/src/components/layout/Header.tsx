"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../../public/images/inicio/logo.png";
import { NavLinks } from "@/lib/utils/NavLinks";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);

    const toggleSubmenu = (index: number) => {
        setExpandedSubmenu(expandedSubmenu === index ? null : index);
    };

    return (
        <header className="sticky top-0 z-50 shadow-sm text-white bg-[#121113] pt-2">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* LOGO Y BOTON DE MENU */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src={logo}
                            width={80}
                            height={40}
                            alt="Madryn Buceo Logo"
                            className="h-20 w-auto"
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

                {/* MENU DESKTOP */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {NavLinks.map((link, index) => (
                        <div key={index} className="relative group">
                            {link.submenu ? (
                                <>
                                    <button className="flex items-center px-4 py-2 text-white hover:text-[#e12222] font-medium cursor-pointer">
                                        {link.title}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full w-80 bg-[#121113] shadow-lg rounded-md px-4 py-4 hidden group-hover:block">
                                        {link.submenu.map((sublink, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={sublink.href}
                                                className="block px-3 py-3 text-white hover:bg-[#403d39] hover:text-[#e12222] rounded-md mb-2"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-sm uppercase">
                                                        {sublink.title}
                                                    </span>
                                                    <span className="text-xs text-gray-300 mt-1">
                                                        {sublink.description}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-white hover:text-[#e12222] font-medium"
                                >
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <Button className="bg-[#e12222] hover:bg-[#e12222]/60 text-white hidden md:inline">
                    <Link href="/reservar" className="w-full">
                        Reservar Ahora
                    </Link>
                </Button>
            </div>

            {/* MENU MOBILE */}
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
                                            onClick={() => toggleSubmenu(index)}
                                            className="w-full flex justify-between items-center py-4 px-4 text-white hover:text-[#e12222] font-medium transition-colors duration-200"
                                        >
                                            {link.title}
                                            <ChevronDown
                                                className={`h-5 w-5 transition-transform duration-300 ${
                                                    expandedSubmenu === index ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                expandedSubmenu === index
                                                    ? "max-h-96 opacity-100"
                                                    : "max-h-0 opacity-0"
                                            }`}
                                        >
                                            <div className="px-6 py-2 bg-[#1f1d1e]/50">
                                                {link.submenu.map((sublink, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={sublink.href}
                                                        className="block py-3 text-sm text-gray-200 hover:text-[#e12222] transition-colors duration-200"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sublink.title}
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
                                        {link.title}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="mt-6">
                        <Button
                            className="w-full bg-gradient-to-r from-[#e12222] to-[#ff4d4d] hover:from-[#e12222]/80 hover:to-[#ff4d4d]/80 text-white font-semibold py-3 transition-all duration-300 shadow-lg"
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