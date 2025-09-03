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
  <title>Nuevo Mensaje - Madryn Buceo</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6; font-family: Arial, Helvetica, sans-serif;">

  <!-- Container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td align="center" style="padding: 30px 10px;">

        <!-- Card -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background:#ffffff; border-radius:12px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#dc2626; padding:30px; text-align:center; color:#ffffff;">
              <h1 style="margin:0; font-size:24px; font-weight:bold;">Nuevo Mensaje</h1>
              <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Formulario de Contacto</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size:15px; line-height:1.6; color:#111827;">
                
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #e5e7eb;">
                    <strong>Nombre:</strong> ${validatedData.name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #e5e7eb;">
                    <strong>Email:</strong> ${validatedData.email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #e5e7eb;">
                    <strong>Teléfono:</strong> ${validatedData.phone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #e5e7eb;">
                    <strong>Asunto:</strong> ${validatedData.subject}
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 0;">
                    <strong>Mensaje:</strong><br>
                    <p style="margin:10px 0; white-space:pre-wrap;">${validatedData.message}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1f2937; color:#9ca3af; text-align:center; padding:20px; font-size:13px;">
              <p style="margin:0; color:#ffffff; font-weight:bold;">Madryn Buceo</p>
              <p style="margin:5px 0;">Puerto Madryn - Patagonia Argentina</p>
              <p style="margin:5px 0;">📍 B. Brown 1900 - Bajada 5 - Balneario Sara</p>
              <p style="margin:10px 0 0;">Este mensaje fue enviado desde 
                <a href="https://madrynbuceo.com" style="color:#ef4444; text-decoration:none;">madrynbuceo.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>

    `;

    const mailOptions = {
      from: `"Madryn Buceo" <${process.env.EMAIL_USER}>`,
      to: 'madrynbuceo@gmail.com',
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