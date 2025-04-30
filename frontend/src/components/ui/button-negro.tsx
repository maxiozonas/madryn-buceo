"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

interface ButtonNegroProps {
    texto: string;
    fullWidth?: boolean;
}

export default function ButtonNegro({ texto, fullWidth = false }: ButtonNegroProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/reservar");
    };

    return (
        <Button
            size="lg"
            onClick={handleClick}
            className={`bg-negro-secundario hover:bg-negro-secundario/50 text-white transition-all duration-300 text-lg font-semibold cursor-pointer ${fullWidth ? 'w-full' : ''}`}
        >
            {texto}
        </Button>
    );
}