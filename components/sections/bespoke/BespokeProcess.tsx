'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'The Consultation',
    description:
      'We begin with a private conversation — about the occasion, the silhouette, and what the garment needs to say. No templates. No shortcuts.',
  },
  {
    number: '02',
    title: 'Fabric Selection',
    description:
      'You choose from our curated library of West African and international textiles. Kente, Aso-Oke, Italian wool, Belgian linen — each chosen for its character.',
  },
  {
    number: '03',
    title: 'Pattern & Fitting',
    description:
      'A pattern is drafted specifically for your measurements. The first fitting reveals the silhouette. Adjustments are made until the fit is precise.',
  },
  {
    number: '04',
    title: 'Construction',
    description:
      'Your piece is cut and sewn by hand in our Monrovia atelier. Each seam, each detail, each finishing touch is deliberate.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description:
      'The finished piece is pressed, inspected, and delivered to you. Wearing it should feel like it was always yours.',
  },
]

export function BespokeProcess() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-px w-4 bg-gold opacity-60" />
            <p className="font-sans-body text-[9px] tracking-[0.28em] uppercase text-gold">
              How It Works
            </p>
          </div>
          <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            The Tailoring Process
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-[19px] hidden h-full w-px bg-border md:block" />

          <div className="space-y-10 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                className="relative flex gap-8 md:pb-12"
              >
                {/* Number */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-cream">
                  <span className="font-sans-body text-[10px] tracking-[0.2em] text-gold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1.5 pb-2">
                  <h3 className="font-serif-display text-xl text-ink md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans-body text-sm leading-7 text-stone md:text-[15px] max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}