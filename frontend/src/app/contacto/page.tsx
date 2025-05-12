import { MapPin, Phone, Mail, Facebook, Instagram, TwitterIcon as TikTok } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import heroImage from "../../../public/images/nosotros/intro.webp"
import ContactoForm from "@/components/contacto/ContactoForm"

export default function ContactoPage() {
  return (
    <div className="bg-negro min-h-screen">
      <section className="h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 mask-fade-bottom">
          <Image
            src={heroImage}
            alt="Contacto - Madryn Buceo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-0 bg-black/50" />
        </div>
        <div className="relative z-20 container h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase font-oceanica">
            Contacto
          </h1>
          <p className="text-base md:text-2xl mb-8 font-oceanica">
            Estamos aquí para responder tus preguntas y ayudarte a planificar tu próxima aventura submarina.
          </p>
        </div>
      </section>

      <section className="flex justify-center relative p-8 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-negro-secundario p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Envíanos un mensaje</h2>
              <ContactoForm />
            </div>

            <div className="bg-negro-secundario p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Información de contacto</h2>

              <div className="bg-negro rounded-lg p-8 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-rojo p-3 rounded-full text-white mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Dirección</h3>
                      <p className="text-gray-300">
                        B. Brown 1900 - Bajada 5 - Balneario Sara, Puerto Madryn - Patagonia Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-rojo p-3 rounded-full text-white mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Teléfono</h3>
                      <p className="text-gray-300">+5492804564422</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-rojo p-3 rounded-full text-white mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Email</h3>
                      <p className="text-gray-300">madrynbuceo@hotmail.com</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <h3 className="font-semibold text-white text-lg mb-4">Síguenos en redes sociales</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/madrynbuceo/?fref=ts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rojo p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/madrynbuceo/?hl=es-la"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rojo p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@madrynbuceo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rojo p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                      >
                        <TikTok className="h-6 w-6" />
                      </a>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5492804564422&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rojo p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                      >
                        <FaWhatsapp className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-8 w-full">
            <h3 className="font-semibold text-white text-lg mb-4">Nuestra ubicación</h3>
            <div className="h-[70vh] rounded-lg overflow-hidden">
              <iframe className="rounded-lg h-full w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2928.441243190807!2d-65.017134!3d-42.779021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe024aaf5130b587%3A0x67d8409a6b02a656!2sMadryn%20Buceo!5e0!3m2!1ses!2sar!4v1747014001371!5m2!1ses!2sar" width="100%" height="70%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-negro-secundario flex justify-center px-8 md:px-0">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-white">Preguntas frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-negro rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-white">¿Necesito saber nadar para hacer snorkeling?</h3>
              <p className="text-gray-300">
                No es necesario saber nadar para realizar snorkeling con nosotros. Nuestros guías te acompañarán en todo
                momento y te proporcionarán un chaleco salvavidas para mayor seguridad.
              </p>
            </div>
            <div className="bg-negro rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-white">
                ¿Cuál es la mejor época para bucear en Puerto Madryn?
              </h3>
              <p className="text-gray-300">
                Puerto Madryn ofrece experiencias de buceo durante todo el año. Sin embargo, la temporada alta es de
                septiembre a abril, cuando las temperaturas son más cálidas y la visibilidad submarina es mejor.
              </p>
            </div>
            <div className="bg-negro rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-white">¿Qué debo llevar para las excursiones?</h3>
              <p className="text-gray-300">
                Recomendamos traer traje de baño, toalla, protector solar, gorra y ropa de cambio. Nosotros
                proporcionamos todo el equipo necesario para la actividad.
              </p>
            </div>
            <div className="bg-negro rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-white">¿Ofrecen descuentos para grupos?</h3>
              <p className="text-gray-300">
                Sí, ofrecemos tarifas especiales para grupos. Contáctanos directamente para obtener más información
                sobre nuestros paquetes para grupos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}