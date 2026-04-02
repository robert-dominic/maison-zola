'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import ProcessImage1 from '@/public/images/bespoke/process-1.jpeg'
import ProcessImage2 from '@/public/images/bespoke/process-2.jpeg'
import ProcessImage3 from '@/public/images/bespoke/process-3.jpeg'
import ProcessImage4 from '@/public/images/bespoke/process-4.jpeg'

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

const processImages = [ProcessImage1, ProcessImage2, ProcessImage3, ProcessImage4]

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

        <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-start md:gap-10 lg:gap-14">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 left-[19px] h-full w-0 border-l border-dotted border-md" />

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
                    <p className="mt-2 max-w-lg font-sans-body text-sm leading-7 text-stone md:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:grid md:grid-cols-2 md:gap-4"
          >
            {processImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-cream-muted"
              >
                <Image
                  src={image}
                  alt={`Bespoke process ${index + 1}`}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
