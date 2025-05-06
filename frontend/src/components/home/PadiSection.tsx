import Image from "next/image";
import imagen from "../../../public/images/inicio/bautismo.jpg";
import logo from "../../../public/images/footer/pngwing.com(1).png"
import ButtonRojo from "../ui/button-rojo";
import ButtonNegro from "../ui/button-negro";

export default function PadiSection() {
    return (
        <section className="py-12">
            <div className="container flex flex-col items-center justify-center px-8 mx-auto">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white uppercase tracking-wide shadow-md">Cursos PADI</h2>
                    <p className="text-center text-white max-w-3xl mx-auto mb-12 prose-lg">
                        Certifícate con nosotros y descubre un mundo de posibilidades bajo el agua.
                    </p>
                </div>
                <div className="w-full grid items-center gap-8 lg:grid-cols-2">
                    <div>
                        <div className="flex justify-between">
                            <h2 className="mb-4 text-3xl font-bold uppercase text-white">Certifícate con Nosotros</h2>
                            <div className="mb-4 inline-block rounded-lg bg-muted px-4 py-1.5 text-lg font-medium">
                                <Image src={logo} alt="Certificación PADI" width={100} height={100} className="object-cover" />
                            </div>
                        </div>
                        <p className="mb-6 text-lg text-white/80 prose-2xl">
                            Como <span className="font-bold text-rojo">centro autorizado PADI</span>, ofrecemos una amplia gama de cursos de buceo para todos los niveles, desde principiantes hasta avanzados, y brindamos apoyo especializado a escuelas de buceo.
                        </p>
                        <p className="mb-6 text-lg text-white/80 prose-2xl">
                            Nuestro equipo de <span className="font-bold text-rojo">instructores certificados</span> te guiará paso a paso en tu formación, garantizando una experiencia segura, profesional y emocionante en cada inmersión.
                        </p>
                        <div className="flex flex-wrap gap-4 text-end">
                            <ButtonRojo texto="Ver cursos PADI" href="/cursos/padi" />
                            <ButtonNegro texto="Ver Checkout Escuelas" href="/checkout-escuelas" />
                        </div>
                    </div>
                    <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                        <Image src={imagen} alt="Certificación PADI" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}