import Image from 'next/image'

export function FounderStory() {
  return (
    <section className="bg-cream-muted/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-lg border border-border bg-cream-muted aspect-[4/5] relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Maison Zola founder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Story */}
          <div className="space-y-6">
            <div>
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-px w-4 bg-gold opacity-60" />
                <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
                  The Founder
                </p>
              </div>
              <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
                Born in Monrovia,
                <br /> tailored for the world.
              </h2>
            </div>

            <div className="h-px w-full bg-border" />

            <div className="space-y-4 font-sans-body text-sm leading-7 text-stone md:text-[15px]">
              <p>
                Maison Zola began as a quiet obsession — a determination to bring the same
                deliberate craft to West African dress that the great European ateliers had long
                applied to their own traditions.
              </p>
              <p>
                Founded in Monrovia, Liberia, the house draws its identity from the richness of
                pan-African textile culture and the discipline of modern tailoring. Every piece
                is an argument for the continent's elegance on its own terms.
              </p>
              <p>
                We work slowly, deliberately, and with a deep respect for the client who trusts
                us with how they are seen.
              </p>
            </div>

            <div className="pt-2">
              <p className="font-serif-display text-lg text-ink">Zola Mensah</p>
              <p className="font-sans-body text-[11px] tracking-[0.2em] uppercase text-stone mt-0.5">
                Founder & Head Tailor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}