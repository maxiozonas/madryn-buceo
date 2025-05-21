"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react"

interface ButtonRojoProps {
    texto: ReactNode 
    href?: string;
    fullWidth?: boolean;
    layoutId?: string;
    onClick?: () => void;
}

export default function ButtonRojo({ texto, href, fullWidth = false, layoutId, onClick }: ButtonRojoProps) {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    };

    if (layoutId) {
        return (
            <motion.div 
                layoutId={layoutId}
                transition={{
                    type: "spring",
                    duration: 0.8,
                    bounce: 0.2,
                    damping: 20
                }}
            >
                <Button
                    size="lg"
                    onClick={onClick || handleClick}
                    className={`group bg-rojo rounded-sm hover:bg-rojo text-white transition-all duration-300 text-lg font-semibold cursor-pointer ${fullWidth ? 'w-full' : ''}`}
                >
                    {texto}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
            </motion.div>
        );
    }
    
    return (
        <Button
            size="lg"
            onClick={onClick || handleClick}
            className={`group bg-rojo rounded-sm hover:bg-rojo text-white transition-all duration-300 text-lg font-semibold cursor-pointer ${fullWidth ? 'w-full' : ''}`}
        >
            {texto}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
        </Button>
    );
}
