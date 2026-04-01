'use client'

import Image from 'next/image'
import Link from 'next/link'

import { type Piece } from '@/types'

type PieceCardProps = {
  piece: Piece
}

export function PieceCard({ piece }: PieceCardProps) {
  return (
    <Link
      href={`/collections/${piece.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-cream transition-shadow duration-300 hover:shadow-[0_2px_20px_rgba(36,27,23,0.08)]"
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-muted">
        <Image
          src={piece.image}
          alt={piece.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-noir/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-full bg-cream/80 px-3 py-1 font-sans-body text-[9px] tracking-[0.2em] uppercase text-ink backdrop-blur-sm">
            {piece.category}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Fabric detail */}
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-px w-4 bg-gold opacity-60" />
          <p className="font-sans-body text-[9px] tracking-[0.2em] uppercase text-gold">
            {piece.fabric} · {piece.fabricOrigin}
          </p>
        </div>

        <p className="font-serif-display text-[1.05rem] leading-snug text-ink transition-colors duration-200 group-hover:text-burgundy">
          {piece.name}
        </p>

        <p className="mt-1.5 font-sans-body text-[11px] leading-relaxed text-stone line-clamp-2">
          {piece.description}
        </p>

        {/* View button */}
        <div className="mt-auto flex items-center gap-1.5 pt-4">
          <span className="font-sans-body text-[10px] tracking-[0.22em] uppercase text-burgundy transition-all duration-200 group-hover:tracking-[0.28em]">
            View Piece
          </span>
          <svg
            className="h-3 w-3 text-burgundy transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
