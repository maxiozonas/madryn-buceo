"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

interface ButtonRojoProps {
    texto: string;
    fullWidth?: boolean;
}

export default function ButtonRojo({ texto, fullWidth = false }: ButtonRojoProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/reservar");
    };

    return (
        <Button
            size="lg"
            onClick={handleClick}
            className={`bg-rojo hover:bg-rojo/50 text-white transition-all duration-300 text-lg font-semibold cursor-pointer ${fullWidth ? 'w-full' : ''}`}
        >
            {texto}
        </Button>
    );
}
