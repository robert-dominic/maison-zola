import Link from 'next/link'

export function BespokeCTA() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-border bg-cream-muted/60 px-8 py-14 text-center md:px-16 md:py-20">
          <div className="mb-4 flex items-center justify-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              Begin Here
            </p>
            <span className="h-px w-4 bg-gold opacity-60" />
          </div>
          <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl md:text-[2.8rem]">
            Ready to commission your piece?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans-body text-sm leading-7 text-stone">
            Every commission starts with a conversation. Reach out and we will arrange a private
            consultation at our Monrovia atelier.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-burgundy px-8 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-200 hover:bg-burgundy-deep"
            >
              Book a Consultation
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-ink transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}