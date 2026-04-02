'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const highlights = [
  {
    label: 'Private Consultations',
    title: 'Tailoring shaped through one-on-one fittings and refined direction.',
    description:
      'Each commission begins with a considered conversation around silhouette, ceremony, and personal presence.',
  },
  {
    label: 'Ceremonial Dressing',
    title: 'Designed for occasions that call for cultural depth and visual authority.',
    description:
      'Maison Zola approaches celebratory and formal wardrobes with a sharper, more elevated tailoring language.',
  },
  {
    label: 'Continental Perspective',
    title: "A Liberian house informed by the richness of Africa's great dress traditions.",
    description:
      'The brand draws inspiration from pan-African style codes while keeping every piece polished, modern, and personal.',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -28 : 28,
  }),
}

export function HeroHighlights() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % highlights.length)
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  const activeItem = highlights[activeIndex]

  const showPrevious = () => {
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + highlights.length) % highlights.length)
  }

  const showNext = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % highlights.length)
  }

  const showItem = (index: number) => {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  return (
    <div className="max-w-md rounded-2xl border border-border bg-cream-muted/72 p-6 backdrop-blur-sm md:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="font-sans-body text-[10px] tracking-[0.28em] uppercase text-burgundy">
          Why Maison Zola
        </p>
        <div className="flex items-center gap-2">
          {highlights.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => showItem(index)}
              aria-label={`Show ${item.label}`}
              className="group inline-flex items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 bg-burgundy'
                    : 'w-1.5 bg-burgundy/30 group-hover:bg-burgundy/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.label}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 h-[180px] overflow-hidden"
          {...(isMobile ? {
            drag: 'x' as const,
            dragConstraints: { left: 0, right: 0 },
            dragDirectionLock: true,
            dragElastic: 0.08,
            style: { touchAction: 'pan-y' },
            onDragEnd: (_: unknown, info: { offset: { x: number; y: number } }) => {
              if (Math.abs(info.offset.x) < Math.abs(info.offset.y)) return
              if (info.offset.x <= -40) showNext()
              else if (info.offset.x >= 40) showPrevious()
            },
          } : {})}
        >
          <p className="font-sans-body text-[10px] tracking-[0.28em] uppercase text-stone">
            {activeItem.label}
          </p>
          <h2 className="font-serif-display text-[1rem] leading-tight text-ink md:text-[1.5rem]">
            {activeItem.title}
          </h2>
          <p className="font-sans-body text-[12px] leading-7 text-stone md:text-[15px]">
            {activeItem.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
