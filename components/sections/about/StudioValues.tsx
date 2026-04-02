import { studioValues } from '@/lib/data/about'

export function StudioValues() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              What We Stand For
            </p>
          </div>
          <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            The values behind the work.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {studioValues.map((value, index) => (
            <div
              key={value.title}
              className="rounded-lg border border-border bg-cream p-7 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-sans-body text-[10px] tracking-[0.2em] text-gold/60">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-serif-display text-xl text-ink">{value.title}</h3>
              <p className="font-sans-body text-[13px] leading-6 text-stone">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
