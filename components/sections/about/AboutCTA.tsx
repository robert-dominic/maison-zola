import Link from 'next/link'

export function AboutCTA() {
  return (
    <section className="bg-noir px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-px w-4 bg-gold opacity-60" />
              <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
                Work With Us
              </p>
            </div>
            <h2 className="font-serif-display text-3xl leading-tight text-cream sm:text-4xl">
              Let's build something worth wearing.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/bespoke"
              className="inline-flex items-center justify-center rounded-lg bg-burgundy px-7 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-200 hover:bg-burgundy-deep"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-smoke/30 px-7 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-200 hover:border-cream/60"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}