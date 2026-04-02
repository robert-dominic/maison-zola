'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { contactServices } from '@/lib/data/contact'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const schema = z.object({
  name: z.string({ error: 'Please enter your full name' }).min(2, 'Your name seems too short'),
  email: z.email({ error: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  service: z.enum(['bespoke', 'ready-to-wear', 'ceremonial', 'general'] as const, {
    error: 'Please select the service you are interested in',
  }),
  message: z
    .string({ error: 'Please tell us about your enquiry' })
    .min(10, 'Tell us a little more about what you are looking for'),
})

type FormData = z.infer<typeof schema>

const inputClass =
  'w-full rounded-lg border border-border bg-cream px-4 py-3.5 font-sans-body text-sm text-ink placeholder:text-stone/50 outline-none transition-colors duration-200 focus:border-burgundy/50 focus:ring-0'

const errorClass = 'mt-1.5 font-sans-body text-[11px] text-burgundy'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    // Replace with your actual form submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => setSubmitted(true), 400)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start gap-4 rounded-lg border border-border bg-cream p-10"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-px w-4 bg-gold opacity-60" />
          <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
            Received
          </p>
        </div>
        <h2 className="font-serif-display text-2xl text-ink">
          Thank you. We'll be in touch shortly.
        </h2>
        <p className="font-sans-body text-sm leading-7 text-stone">
          Your enquiry has been received. Expect a response within 48 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone">
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone">
            Phone{' '}
            <span className="normal-case tracking-normal text-stone/50">(optional)</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+231 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone">
            Service Interest
          </label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {contactServices.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about the occasion, the garment, or simply introduce yourself..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-burgundy px-6 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-200 hover:bg-burgundy-deep disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:min-w-48"
      >
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
