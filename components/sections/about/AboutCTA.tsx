import Link from 'next/link'

export function AboutCTA() {
  return (
    <section className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-border bg-cream-muted/60 px-8 py-14 text-center md:px-16 md:py-20">
          <div className="mb-4 flex items-center justify-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              Work With Us
            </p>
            <span className="h-px w-4 bg-gold opacity-60" />
          </div>
          <div className="mx-auto max-w-xl">
            <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl md:text-[2.8rem]">
              Let's build something worth wearing.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/bespoke"
              className="inline-flex items-center justify-center rounded-lg bg-burgundy px-8 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-200 hover:bg-burgundy-deep"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-ink transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
