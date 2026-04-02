import Image from 'next/image'
import Link from 'next/link'

import { HeroHighlights } from '@/components/sections/home/HeroHighlights'
import MainHero from '@/public/images/hero/hero-1.jpeg'
import SubHero from '@/public/images/hero/hero-2.jpeg'

export default function Home() {
  return (
    <section className="px-5 pt-25 pb-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-8 lg:pt-10">
          <h1 className="max-w-4xl font-serif-display text-4xl leading-[0.96] tracking-[0.03em] text-ink md:text-4xl lg:text-[4rem]">
            Tailoring African dress codes with modern precision.
          </h1>
          <p className="max-w-lg font-sans-body text-[15px] leading-7 text-stone md:text-base">
            Maison Zola is a Liberian-based tailoring house creating bespoke pieces with cultural
            depth, quiet confidence, and polished presence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/collections"
              className="inline-flex min-w-44 cursor-pointer items-center justify-center rounded-xl bg-burgundy px-6 py-3 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-300 hover:bg-burgundy-deep"
            >
              View Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-44 cursor-pointer items-center justify-center rounded-xl border border-border bg-cream/40 px-6 py-3 font-sans-body text-[11px] tracking-[0.22em] uppercase text-ink transition-colors duration-300 hover:border-burgundy hover:text-burgundy"
            >
              Book Consultation
            </Link>
          </div>
          <HeroHighlights />
        </div>

        <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] lg:pt-10">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-cream/60">
              <Image
                src={MainHero}
                alt="African menswear portrait"
                width={1200}
                height={1500}
                priority
                loading="eager"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-border bg-cream-muted p-6">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-px w-4 bg-gold opacity-60" />
                <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
                  Current Season
                </p>
              </div>
              <p className="font-serif-display text-2xl leading-tight text-ink">
                The Harmattan Edit
              </p>
              <p className="mt-2 font-sans-body text-[12px] leading-6 text-stone">
                Lightweight fabrics, sharp silhouettes. Dressed for the dry season without losing
                presence.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <p className="font-sans-body text-[9px] tracking-[0.2em] uppercase text-stone">
                  Available now
                </p>
                <Link
                  href="/collections"
                  className="font-sans-body text-[9px] tracking-[0.2em] uppercase text-burgundy hover:underline"
                >
                  View pieces →
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-noir">
            <Image
              src={SubHero}
              alt="African fashion portrait"
              width={1200}
              height={1500}
              loading="eager"
              className="aspect-[4/5] h-full w-full object-cover"
            />
            <div className="border-t border-white-soft bg-noir px-6 py-5 md:px-8">
              <p className="font-sans-body text-[10px] tracking-[0.28em] uppercase text-gold">
                African Ceremonial Direction
              </p>
              <p className="mt-3 max-w-md font-serif-copy text-2xl leading-tight text-cream md:text-3xl">
                Crafted to suggest bespoke confidence across West African ceremony and pan-African
                elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
