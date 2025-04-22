"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

interface ButtonRojoProps {
    texto: string;
}

export default function ButtonRojo({ texto }: ButtonRojoProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/reservar");
    };

    return (
        <Button
            size="lg"
            onClick={handleClick}
            className="bg-rojo hover:bg-rojo/50 text-white transition-all duration-300 text-lg font-semibold cursor-pointer"
        >
            {texto}
        </Button>
    );
}
