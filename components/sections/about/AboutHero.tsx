'use client'

import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center justify-center gap-1.5">
            <span className="h-px w-6 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              Our Story
            </p>
            <span className="h-px w-6 bg-gold opacity-60" />
          </div>
          <blockquote className="font-serif-display text-3xl leading-[1.15] text-ink sm:text-4xl md:text-[3rem]">
            "Craft rooted in Liberia.
            <br className="hidden sm:block" /> Worn by the world."
          </blockquote>
          <p className="mx-auto mt-6 max-w-lg font-sans-body text-sm leading-7 text-stone md:text-[15px]">
            Maison Zola was founded on the belief that African dress codes deserve the same level of
            precision, intention, and cultural reverence as any great tailoring tradition.
          </p>
        </motion.div>
      </div>
    </section>
  )
}