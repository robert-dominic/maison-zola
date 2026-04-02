'use client'

import { useState } from 'react'
import { AtSign, Check, Copy, Mail, MapPin } from 'lucide-react'

export function ContactInfo() {
  const [copied, setCopied] = useState(false)

  return (
    <div className="space-y-6 lg:pt-1">
      <div className="rounded-lg border border-border bg-cream p-5">
        <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">
          Location
        </p>
        <p className="mt-1.5 font-serif-display text-lg text-ink">Monrovia, Liberia</p>
        <p className="font-sans-body text-[11px] leading-5 text-stone">
          Consultations by appointment only
        </p>
        <a
          href="https://maps.google.com/?q=Monrovia,Liberia"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-burgundy hover:underline"
        >
          <MapPin size={13} />
          <span className="font-sans-body text-[10px] tracking-[0.16em] uppercase">
            Open Maps
          </span>
        </a>
      </div>

      <div className="rounded-lg border border-border bg-cream p-5">
        <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">Email</p>
        <div className="mt-1 flex items-center gap-2">
          <p className="font-serif-display text-lg text-ink">hello@maisonzola.com</p>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText('hello@maisonzola.com')
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-burgundy transition-colors hover:border-burgundy/40"
            aria-label="Copy email address"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            <span className="font-sans-body text-[9px] tracking-[0.16em] uppercase">
              {copied ? 'Copied' : 'Copy'}
            </span>
          </button>
        </div>
        <p className="font-sans-body text-[11px] leading-5 text-stone">We respond within 48 hours</p>
        <a href="mailto:hello@maisonzola.com" className="mt-3 inline-flex items-center gap-1.5 text-burgundy hover:underline">
          <Mail size={13} />
          <span className="font-sans-body text-[10px] tracking-[0.16em] uppercase">
            Open Mail
          </span>
        </a>
      </div>

      <div className="rounded-lg border border-border bg-cream p-5">
        <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">
          Instagram
        </p>
        <p className="mt-1.5 font-serif-display text-lg text-ink">@maisonzola</p>
        <p className="font-sans-body text-[11px] leading-5 text-stone">Follow our latest work</p>
        <a
          href="https://instagram.com/maisonzola"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-burgundy hover:underline"
        >
          <AtSign size={13} />
          <span className="font-sans-body text-[10px] tracking-[0.16em] uppercase">
            Follow Us
          </span>
        </a>
      </div>

      <div className="rounded-lg border border-border bg-cream-muted/60 p-5">
        <p className="font-sans-body text-[11px] leading-6 text-stone">
          Maison Zola operates by appointment. Walk-ins are not available. All consultations
          are private and held at our Monrovia studio.
        </p>
      </div>
    </div>
  )
}
