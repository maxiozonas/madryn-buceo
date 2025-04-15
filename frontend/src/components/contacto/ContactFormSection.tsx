"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactFormSection() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    personas: "",
    pais: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        fecha: "",
        personas: "",
        pais: "",
        mensaje: "",
      });
      setCaptchaValue(null);
    } else {
      alert("Error al enviar el formulario. Intente nuevamente.");
    }
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="nombre" placeholder="Nombre" required
                  value={formData.nombre} onChange={handleChange}
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white" />
                <input type="email" name="email" placeholder="Email" required
                  value={formData.email} onChange={handleChange}
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="tel" name="telefono" placeholder="Teléfono"
                  value={formData.telefono} onChange={handleChange}
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white" />
                <input type="date" name="fecha"
                  value={formData.fecha} onChange={handleChange}
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="number" name="personas" min={1} placeholder="Cantidad de personas"
                  value={formData.personas} onChange={handleChange}
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white" />
                <input type="text" name="pais" placeholder="País de origen"
                  value={formData.pais} onChange={handleChange}
                  className="p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white" />
              </div>
              <textarea name="mensaje" placeholder="Mensaje" rows={4}
                value={formData.mensaje} onChange={handleChange}
                className="w-full p-2 rounded bg-[#1e1e1e] border border-red-600 text-white placeholder-white" />

              <div className="flex justify-center rounded">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // test key
                  onChange={setCaptchaValue}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                disabled={!captchaValue || loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </Button>

              {success && (
                <p className="text-green-400 text-center mt-2">¡Mensaje enviado con éxito!</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
