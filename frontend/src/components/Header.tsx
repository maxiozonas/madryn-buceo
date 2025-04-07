"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../public/images/inicio/logo.png"
import { NavLinks } from "@/lib/utils/NavLinks";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    const toggleSubmenu = (title: string) => {
        if (openSubmenu === title) {
            setOpenSubmenu(null)
        } else {
            setOpenSubmenu(title)
        }
    }

    return (
        <header className="sticky top-0 z-50 shadow-sm text-white bg-[#121113] pt-2">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* LOGO Y BOTON DE MENU */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center gap-2">
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
                        className="lg:hidden bg-transparent hover:bg-[gray-700] text-white"
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
                                    <button className="flex items-center px-4 py-2 text-white hover:text-red-500 font-medium">
                                        {link.title}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full w-60 border bg-[#121113] shadow-lg rounded-md px-2 py-3 hidden group-hover:block">
                                        {link.submenu.map((sublink, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={sublink.href}
                                                className="block px-4 py-2 text-sm text-white hover:bg-[#403d39] hover:text-red-500 rounded-md"
                                            >
                                                {sublink.title}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link href={link.href} className="px-4 py-2 text-white hover:text-red-500 font-medium">
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <Button className="bg-red-600 hover:bg-red-700 text-white hidden md:inline">
                    <Link href="/reservar" className="w-full">
                        Reservar Ahora
                    </Link>
                </Button>
            </div>

            {/* MENU MOBILE */}
            {isOpen && (
                <div className="lg:hidden border-b fixed inset-0 top-16 z-50 bg-[#121113] mt-2">
                    <div className="container h-full flex flex-col justify-between py-4">
                        <nav className="flex flex-col flex-1">
                            {NavLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="block py-4 px-2 text-white hover:text-red-500 font-medium border-b bg-[#121113]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-4 px-4">
                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                <Link href="/reservar" className="w-full" onClick={() => setIsOpen(false)}>
                                    Reservar Ahora
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}