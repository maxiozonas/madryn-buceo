"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { sendEmail } from "@/app/actions/email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { FormattedMessage, useIntl } from "react-intl"

export default function ContactoForm() {
  const intl = useIntl() 
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')


  const formSchema = z.object({
    name: z.string().min(2, {
      message: intl.formatMessage({ id: "contact.form.name.error" }),
    }),
    email: z.string().email({
      message: intl.formatMessage({ id: "contact.form.email.error" }),
    }),
    phone: z.string().min(8, {
      message: intl.formatMessage({ id: "contact.form.phone.error" }),
    }),
    subject: z.string().min(5, {
      message: intl.formatMessage({ id: "contact.form.subject.error" }),
    }),
    message: z.string().min(10, {
      message: intl.formatMessage({ id: "contact.form.message.error" }),
    }),
  })

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setFormStatus('idle')
    try {
      const result = await sendEmail(data)
      if (result.success) {
        setFormStatus('success')
        alert(intl.formatMessage({ id: "contact.form.success.alert" }))
        form.reset()
      } else {
        setFormStatus('error')
        alert(intl.formatMessage({ id: "contact.form.error.alert" }))
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error)
      setFormStatus('error')
      alert(intl.formatMessage({ id: "contact.form.error.alert" }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  <FormattedMessage id="contact.form.name.label" defaultMessage="Nombre" />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={intl.formatMessage({ id: "contact.form.name.placeholder" })}
                    {...field}
                    className="bg-negro border-none text-white placeholder:text-white/70 focus:ring-0 focus:border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  <FormattedMessage id="contact.form.email.label" defaultMessage="Email" />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={intl.formatMessage({ id: "contact.form.email.placeholder" })}
                    {...field}
                    className="bg-negro border-none text-white placeholder:text-white/70 focus:ring-0 focus:border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  <FormattedMessage id="contact.form.phone.label" defaultMessage="Teléfono" />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={intl.formatMessage({ id: "contact.form.phone.placeholder" })}
                    {...field}
                    className="bg-negro border-none text-white placeholder:text-white/70 focus:ring-0 focus:border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  <FormattedMessage id="contact.form.subject.label" defaultMessage="Asunto" />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={intl.formatMessage({ id: "contact.form.subject.placeholder" })}
                    {...field}
                    className="bg-negro border-none text-white placeholder:text-white/70 focus:ring-0 focus:border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                <FormattedMessage id="contact.form.message.label" defaultMessage="Mensaje" />
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={intl.formatMessage({ id: "contact.form.message.placeholder" })}
                  {...field}
                  className="števbg-negro border-none text-white min-h-[150px] placeholder:text-white/70 focus:ring-0 focus:border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-rojo hover:bg-rojo/90 text-white cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <FormattedMessage id="contact.form.submitting" defaultMessage="Enviando..." />
            </>
          ) : formStatus === 'success' ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              <FormattedMessage id="contact.form.success" defaultMessage="Mensaje enviado" />
            </>
          ) : formStatus === 'error' ? (
            <>
              <AlertCircle className="mr-2 h-4 w-4" />
              <FormattedMessage id="contact.form.error" defaultMessage="Intentar nuevamente" />
            </>
          ) : (
            <FormattedMessage id="contact.form.submit" defaultMessage="Enviar mensaje" />
          )}
        </Button>
      </form>
    </Form>
  )
}