import { CollectionsGridSkeleton } from '@/components/sections/collections/CollectionsGridSkeleton'

export default function Loading() {
  return (
    <section className="px-5 pt-20 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <p className="font-sans-body text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            Dressed for Every Chapter
          </h1>
          <p className="mt-4 font-sans-body text-sm leading-7 text-stone md:text-base">
            Each piece is made with intention — for the ceremony, the boardroom, and every room
            that calls for presence.
          </p>
        </div>

        <CollectionsGridSkeleton />
      </div>
    </section>
  )
}
