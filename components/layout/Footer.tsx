import Link from 'next/link'
import { footerLinks } from '@/lib/data/footer'

export function Footer() {
  return (
    <footer className="border-t border-border bg-noir text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-8 md:grid-cols-[1.1fr_0.8fr_0.8fr] md:px-8">
        <div className="space-y-5">
          <p className="font-serif-display text-xl tracking-[0.16em]">Maison Zola</p>
          <p className="max-w-md font-sans-body text-sm leading-7 text-stone">
            A Liberian-based African tailoring house shaped around bespoke suiting, ceremonial
            dressing, and refined wardrobes inspired by the continent’s most enduring style codes.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-sans-body text-[11px] tracking-[0.24em] uppercase text-gold">
            Explore
          </p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans-body text-sm text-stone transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-sans-body text-[11px] tracking-[0.24em] uppercase text-gold">
            Contact
          </p>
          <div className="space-y-3 font-sans-body text-sm text-stone">
            <p>Monrovia, Liberia</p>
            <p>maisonzola@gmail.com</p>
            <p>@maisonzola</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white-soft px-5 py-4 md:px-8">
        <p className="text-center font-sans-body text-[10px] tracking-[0.18em] uppercase text-stone">
          Copyright 2026 Maison Zola. Designed and built by WebNova Studio.
        </p>
      </div>
    </footer>
  )
}
