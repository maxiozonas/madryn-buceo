"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactFormSection() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptcha = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <section className="py-10 px-6" id="contacto">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-[#252422] text-white border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl md:text-3xl font-bold text-white">
              Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action="https://formsubmit.co/evalleygarcia@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white"
                />
                <input
                  type="date"
                  name="fecha"
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="personas"
                  min={1}
                  placeholder="Cantidad de personas"
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white"
                />
                <input
                  type="text"
                  name="pais"
                  placeholder="País de origen"
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white"
                />
              </div>
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={4}
                className="w-full p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white"
              />

              <div className="flex justify-center rounded">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key pública de Google, hsy que cambiarla despues
                  onChange={handleCaptcha}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                disabled={!captchaValue}
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
