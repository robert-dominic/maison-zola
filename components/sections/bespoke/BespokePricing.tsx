import Link from 'next/link'

import { bespokePricingTiers } from '@/lib/data/bespoke'

export function BespokePricing() {
  return (
    <section className="bg-cream-muted/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              Services
            </p>
          </div>
          <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-3 font-sans-body text-sm leading-7 text-stone">
            Pricing is discussed privately during your consultation. Every commission is different.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {bespokePricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg border p-6 md:p-7 ${
                tier.highlighted
                  ? 'border-burgundy/30 bg-noir text-cream'
                  : 'border-border bg-cream'
              }`}
            >
              <div className="mb-5">
                <p
                  className={`font-sans-body text-[9px] tracking-[0.24em] uppercase mb-3 ${
                    tier.highlighted ? 'text-gold' : 'text-gold'
                  }`}
                >
                  {tier.highlighted ? '— Most Popular' : '\u00A0'}
                </p>
                <h3
                  className={`font-serif-display text-xl ${
                    tier.highlighted ? 'text-cream' : 'text-ink'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 font-sans-body text-[13px] leading-6 ${
                    tier.highlighted ? 'text-smoke' : 'text-stone'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6 flex-1 space-y-2.5">
                {tier.inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span
                      className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                        tier.highlighted ? 'bg-gold' : 'bg-burgundy'
                      }`}
                    />
                    <p
                      className={`font-sans-body text-[12px] leading-5 ${
                        tier.highlighted ? 'text-smoke' : 'text-stone'
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={tier.href}
                className={`flex items-center justify-center rounded-lg px-5 py-3.5 font-sans-body text-[10px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                  tier.highlighted
                    ? 'bg-burgundy text-cream hover:bg-burgundy-deep'
                    : 'border border-border text-ink hover:border-burgundy hover:text-burgundy'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
