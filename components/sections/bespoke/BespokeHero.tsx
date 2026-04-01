export function BespokeHero() {
  return (
    <section className="bg-noir px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              The Atelier
            </p>
          </div>
          <h1 className="font-serif-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-[3.5rem]">
            Every stitch made for you.
          </h1>
          <p className="mt-6 font-sans-body text-sm leading-7 text-smoke md:text-[15px] max-w-lg">
            Bespoke at Maison Zola means more than made-to-measure. It means a garment built around
            your identity, your occasion, and the cultural language you carry.
          </p>
        </div>
      </div>
    </section>
  )
}