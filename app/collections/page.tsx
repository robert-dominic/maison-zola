import { Suspense } from 'react'

import { CollectionsGrid } from '@/components/sections/collections/CollectionsGrid'

export const metadata = {
  title: 'Collections — Maison Zola',
  description:
    'Browse the Maison Zola lookbook. Bespoke suiting, ceremonial dressing, and elevated cultural wardrobes.',
}

export default function CollectionsPage() {
  return (
    <section className="px-5 pt-20 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Page header */}
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

        {/* Grid with filter */}
        <Suspense fallback={<div className="h-24" />}>
          <CollectionsGrid />
        </Suspense>

      </div>
    </section>
  )
}
