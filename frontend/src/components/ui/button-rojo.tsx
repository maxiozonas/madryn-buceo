"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

interface ButtonRojoProps {
    texto: string;
    href: string;
    fullWidth?: boolean;
}

export default function ButtonRojo({ texto, href, fullWidth = false }: ButtonRojoProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    };

    return (
        <Button
            size="lg"
            onClick={handleClick}
            className={`group bg-rojo rounded-sm hover:bg-rojo text-white transition-all duration-300 text-lg font-semibold cursor-pointer ${fullWidth ? 'w-full' : ''}`}
        >
            {texto}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
        </Button>
    );
}
