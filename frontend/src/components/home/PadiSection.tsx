import Image from "next/image";
import imagen from "../../../public/images/inicio/bautismo.jpg";
import ButtonRojo from "../ui/button-rojo";
import ButtonNegro from "../ui/button-negro";

export default function PadiSection() {
    return (
        <section className="py-12">
            <div className="container flex flex-col items-center justify-center px-8 mx-auto">
                <div className="w-full grid items-center gap-8 lg:grid-cols-2">
                    <div>
                        <div className="mb-4 inline-block rounded-lg bg-muted px-4 py-1.5 text-lg font-medium">
                            Centro PADI Oficial
                        </div>
                        <h2 className="mb-4 text-3xl font-bold uppercase text-white">Certifícate con Nosotros</h2>
                        <p className="mb-6 text-lg text-white/80 prose-2xl">
                            Como centro PADI, ofrecemos cursos para todos los niveles y apoyo a escuelas de buceo. Nuestros
                            instructores certificados te guiarán en cada paso de tu formación.
                        </p> 
                        <div className="flex flex-wrap gap-4 text-end">
                            <ButtonRojo texto="Ver cursos PADI" />
                            <ButtonNegro texto="Ver Checkout Escuelas" />                        </div>
                    </div>
                    <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                        <Image src={imagen} alt="Certificación PADI" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}