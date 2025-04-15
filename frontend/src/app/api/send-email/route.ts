import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const { nombre, email, telefono, fecha, personas, pais, mensaje } = data;

    const response = await resend.emails.send({
      from: 'Tu sitio <no-reply@tusitio.com>',
      to: 'evalleygarcia@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Cantidad de personas:</strong> ${personas}</p>
        <p><strong>País de origen:</strong> ${pais}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
