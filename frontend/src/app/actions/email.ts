'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string(),
  message: z.string().min(10),
});


type ContactFormData = z.infer<typeof formSchema>;

export async function sendEmail(data: ContactFormData) {
  try {
    const validatedData = formSchema.parse(data);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Mensaje de Contacto - Madryn Buceo</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #e5e7eb; margin: 0; padding: 0; background-color: #1f2937;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #374151; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #ef4444; font-size: 24px; margin: 0;">Nuevo Mensaje de Contacto</h2>
            <p style="color: #9ca3af; font-size: 16px;">Madryn Buceo - Puerto Madryn</p>
          </div>
          <div style="background-color: #4b5563; padding: 20px; border-radius: 6px;">
            <p style="margin: 0 0 10px;"><strong style="color: #e5e7eb;">Nombre:</strong> ${validatedData.name}</p>
            <p style="margin: 0 0 10px;"><strong style="color: #e5e7eb;">Correo Electrónico:</strong> ${validatedData.email}</p>
            <p style="margin: 0 0 10px;"><strong style="color: #e5e7eb;">Teléfono:</strong> ${validatedData.phone}</p>
            <p style="margin: 0 0 10px;"><strong style="color: #e5e7eb;">Asunto:</strong> ${validatedData.subject}</p>
            <p style="margin: 0 0 10px;"><strong style="color: #e5e7eb;">Mensaje:</strong></p>
            <p style="white-space: pre-wrap; color: #d1d5db;">${validatedData.message}</p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #9ca3af;">
            <p>Este mensaje fue enviado desde el formulario de contacto de <a href="https://madrynbuceo.com" style="color: #ef4444; text-decoration: none;">Madryn Buceo</a>.</p>
            <p>B. Brown 1900 - Bajada 5 - Balneario Sara, Puerto Madryn, Argentina</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Madryn Buceo" <${process.env.EMAIL_USER}>`,
      to: 'madrynbuceo@hotmail.com',
      replyTo: validatedData.email,
      subject: `Nuevo mensaje de contacto: ${validatedData.subject}`,
      text: `
        Nombre: ${validatedData.name}
        Correo: ${validatedData.email}
        Teléfono: ${validatedData.phone}
        Asunto: ${validatedData.subject}
        Mensaje: ${validatedData.message}
      `,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Correo enviado con éxito' };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    throw new Error('Error al enviar el correo');
  }
}