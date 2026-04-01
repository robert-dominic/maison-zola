'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import InteriorImage from '@/public/images/about/interior.jpeg'

export function AboutHero() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left"
        >
          <div className="mb-6 flex items-center justify-center gap-1.5 md:justify-start">
            <span className="h-px w-6 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              Our Story
            </p>
            <span className="hidden h-px w-6 bg-gold opacity-60 md:block" />
          </div>
          <blockquote className="font-serif-display text-3xl leading-[1.15] text-ink sm:text-4xl md:text-[3rem]">
            "Craft rooted in Liberia.
            <br className="hidden sm:block" /> Worn by the world."
          </blockquote>
          <p className="mx-auto mt-6 max-w-lg font-sans-body text-sm leading-7 text-stone md:mx-0 md:text-[15px]">
            Maison Zola was founded on the belief that African dress codes deserve the same level of
            precision, intention, and cultural reverence as any great tailoring tradition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden overflow-hidden rounded-2xl border border-border bg-cream-muted md:block"
        >
          <Image
            src={InteriorImage}
            alt="Maison Zola studio interior"
            className="aspect-[4/5] h-full w-full object-cover"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  )
}
