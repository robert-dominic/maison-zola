'use client'

import { collectionFilters } from '@/lib/data/filters'
import { type Category } from '@/types'

type FilterBarProps = {
  active: Category
  onChange: (category: Category) => void
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3">
      {collectionFilters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          className={`font-sans-body text-[10px] tracking-[0.22em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
            active === filter.value
              ? 'border-burgundy bg-burgundy text-cream'
              : 'border-border bg-transparent text-stone hover:border-burgundy/40 hover:text-burgundy'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
