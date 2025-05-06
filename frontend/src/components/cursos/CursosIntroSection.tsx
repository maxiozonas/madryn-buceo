
import { motion } from "framer-motion";
import { Award, SeparatorHorizontal } from "lucide-react";
import Image from "next/image";
import imagen from "../../../public/images/cursos/cursos-1.jpg"
import logo from "../../../public/images/footer/pngwing.com(1).png"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CursosIntroSection() {
    return (
        <motion.section className="mb-20 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                <div className="flex flex-col justify-center">

                    <div className="mb-4 w-36 inline-flex items-center justify-center rounded-lg bg-muted px-4 py-1.5 text-lg font-medium">
                        <Image src={logo} alt="Certificación PADI" width={100} height={100} className="object-cover" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 inline-flex items-center relative uppercase">
                        ¿Por qué certificarte con nosotros?
                    </h2>

                    <SeparatorHorizontal className="w-full h-1 bg-rojo mb-6 rounded-full" />

                    <p className="text-white/80 mb-4 leading-relaxed">
                        Descubre el fascinante mundo submarino en la impresionante Patagonia con nuestros cursos de buceo, diseñados para todos los niveles. Como <span className="text-rojo font-semibold">centro de buceo Padi</span>, garantizamos la más alta calidad de instrucción y seguridad.
                    </p>

                    <p className="text-white/80 mb-4 leading-relaxed">
                        Descubre por qué <span className="text-rojo font-semibold">Puerto Madryn</span> es reconocido como la <span className="text-rojo font-semibold">capital nacional del buceo</span>, ofreciéndote una experiencia única en las aguas del Golfo Nuevo.
                    </p>

                    <p className="text-white/80 mb-4 leading-relaxed">
                        Desde iniciarte en el buceo hasta convertirte en un experto, nuestros <span className="text-rojo font-semibold">instructores certificados</span> te guiarán en cada paso del camino.
                    </p>

                    <p className="text-white/80 mb-4 leading-relaxed">
                        Como centro oficial de buceo PADI (Professional Association of Diving Instructors), ofrecemos <span className="text-rojo font-semibold">certificaciones reconocidas internacionalmente</span>.
                    </p>

                    <p className="text-white/80 mb-4 leading-relaxed">PADI es la organización de entrenamiento de buceo más grande y respetada del mundo, con estándares rigurosos y metodologías probadas que garantizan una formación de calidad y segura.</p>
                </div>

                <div className="relative overflow-hidden rounded-xl">
                    <Image
                        src={imagen}
                        alt="Buceo en Puerto Madryn"
                        className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-4 left-4 z-20 bg-negro/80 backdrop-blur-sm p-3 rounded-lg border border-[#403d39]">
                        <div className="inline-flex items-center text-white font-medium text-sm">
                            <Award className="w-4 h-4 mr-2" />
                            Centro PADI Oficial
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}