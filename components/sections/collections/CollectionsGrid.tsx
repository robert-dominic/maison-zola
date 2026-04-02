'use client'

import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { FilterBar } from '@/components/sections/collections/FilterBar'
import { PieceCard } from '@/components/shared/PieceCard'
import { pieces } from '@/lib/data/collections'
import { type Category } from '@/types'

export function CollectionsGrid() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  useEffect(() => {
    const cat = searchParams.get('category') as Category | null

    if (
      cat === 'all' ||
      cat === 'men' ||
      cat === 'women' ||
      cat === 'ceremonial' ||
      cat === 'ready-to-wear'
    ) {
      setActiveCategory(cat)
    }
  }, [searchParams])

  const filtered =
    activeCategory === 'all'
      ? pieces
      : pieces.filter((p) => p.category === activeCategory)

  return (
    <div className="space-y-10">
      <FilterBar active={activeCategory} onChange={setActiveCategory} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-sans-body text-sm text-stone">
                No pieces in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((piece, index) => (
                <motion.div
                  key={piece.slug}
                  className="h-full"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.06,
                  }}
                >
                  <PieceCard piece={piece} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
