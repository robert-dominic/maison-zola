import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CollectionZoomImage } from '@/components/sections/collections/CollectionZoomImage'
import { PieceCard } from '@/components/shared/PieceCard'
import { pieces } from '@/lib/data/collections'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const piece = pieces.find((p) => p.slug === slug)
  if (!piece) return {}
  return {
    title: `${piece.name} — Maison Zola`,
    description: piece.description,
  }
}

export default async function PiecePage({ params }: Props) {
  const { slug } = await params
  const piece = pieces.find((p) => p.slug === slug)

  if (!piece) notFound()

  const related = pieces
    .filter((p) => p.category === piece.category && p.slug !== piece.slug)
    .slice(0, 3)

  return (
    <div className="px-5 pt-12 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="hidden md:block mb-10 flex items-center gap-2 font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone">
          <Link href="/collections" className="hover:text-burgundy transition-colors duration-200">
            Collections
          </Link>
          <span className="text-smoke">·</span>
          <span className="text-ink">{piece.name}</span>
        </div>

        {/* Hero split */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-16 mt-6 md:mt-0">

          {/* Image */}
          <CollectionZoomImage
            src={piece.image}
            alt={piece.name}
            aspectTall={piece.aspectTall}
          />

          {/* Details */}
          <div className="space-y-8 rounded-xl border border-border p-4 lg:flex lg:h-full lg:flex-col lg:pt-4">

            {/* Category + fabric */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="h-px w-4 bg-gold opacity-60" />
                <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">
                  {piece.category}
                </p>
              </div>
              <h1 className="font-serif-display text-xl leading-tight text-ink sm:text-4xl md:text-[2.8rem]">
                {piece.name}
              </h1>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-border" />

            {/* Description */}
            <p className="font-sans-body text-sm leading-7 text-stone md:text-[15px]">
              {piece.description}
            </p>

            {/* Fabric details */}
            <div className="rounded-lg border border-border bg-cream-muted/60 p-5 space-y-3">
              <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">
                Fabric Details
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-sans-body text-[10px] tracking-[0.16em] uppercase text-stone mb-1">
                    Material
                  </p>
                  <p className="text-sm text-ink">
                    {piece.fabric}
                  </p>
                </div>
                <div>
                  <p className="font-sans-body text-[10px] tracking-[0.16em] uppercase text-stone mb-1">
                    Origin
                  </p>
                  <p className="text-sm text-ink">
                    {piece.fabricOrigin}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-lg bg-burgundy px-6 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-cream transition-colors duration-200 hover:bg-burgundy-deep"
              >
                Book a Fitting
              </Link>
              <Link
                href="/bespoke"
                className="flex w-full items-center justify-center rounded-lg border border-border px-6 py-4 font-sans-body text-[11px] tracking-[0.22em] uppercase text-ink transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
              >
                Learn About Bespoke
              </Link>
            </div>

            {/* Fine print */}
            <p className="font-sans-body text-[10px] leading-relaxed text-stone/70">
              All pieces are made to order. Pricing is discussed during your private consultation.
            </p>
          </div>
        </div>

        {/* Related pieces */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-px w-4 bg-gold opacity-60" />
                  <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">
                    You May Also Like
                  </p>
                </div>
                <h2 className="font-serif-display text-2xl text-ink">
                  Related Pieces
                </h2>
              </div>
              <Link
                href="/collections"
                className="font-sans-body text-[10px] tracking-[0.2em] uppercase text-stone hover:text-burgundy transition-colors duration-200 whitespace-nowrap"
              >
                View All
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PieceCard key={p.slug} piece={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
