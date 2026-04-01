import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'

export const metadata = {
  title: 'Contact — Maison Zola',
  description: 'Begin your Maison Zola commission. Book a private consultation in Monrovia.',
}

export default function ContactPage() {
  return (
    <div className="px-5 pt-25 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 max-w-xl">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              Get in Touch
            </p>
          </div>
          <h1 className="font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
            Begin Your Journey
          </h1>
          <p className="mt-4 font-sans-body text-sm leading-7 text-stone md:text-[15px]">
            Every commission starts with a conversation. Fill out the form below and we will be
            in touch within 48 hours to arrange your private consultation.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_0.55fr] lg:gap-24 lg:items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}