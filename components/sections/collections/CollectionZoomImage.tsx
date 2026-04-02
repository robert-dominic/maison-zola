'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

type CollectionZoomImageProps = {
  src: string
  alt: string
  aspectTall?: boolean
}

export function CollectionZoomImage({ src, alt, aspectTall }: CollectionZoomImageProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="overflow-hidden rounded-lg border border-border bg-cream-muted text-left lg:h-full"
        aria-label="Open image viewer"
      >
        <div
          className={`relative h-[68vh] min-h-[26rem] w-full sm:h-[72vh] md:h-[78vh] ${
            aspectTall ? 'lg:aspect-[3/4]' : 'lg:aspect-[4/3]'
          } lg:h-full lg:aspect-auto`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-cream/92 backdrop-blur-sm"
              aria-label="Close image viewer"
            />

            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-4 md:px-6 md:py-6">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-border bg-cream/80 shadow-[0_20px_80px_rgba(36,27,23,0.12)]"
              >
                <div className="flex items-center justify-between px-4 py-4 md:px-6">
                  <p className="font-sans-body text-[10px] tracking-[0.18em] uppercase text-stone">
                    Pinch or double tap to zoom
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cream/80 text-ink transition-colors hover:border-burgundy hover:text-burgundy"
                    aria-label="Close image viewer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex flex-1 items-center justify-center px-4 pb-4 md:px-6 md:pb-6">
                  <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={4}
                    centerOnInit
                    doubleClick={{ mode: 'zoomIn', step: 1.2 }}
                    pinch={{ step: 5 }}
                    wheel={{ disabled: true }}
                    panning={{ disabled: true, velocityDisabled: true }}
                  >
                    <TransformComponent
                      wrapperClass="!h-full !w-full"
                      contentClass="!h-full !w-full"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-transparent p-1 md:p-2">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.1rem]">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          priority
                          className="object-contain"
                          sizes="100vw"
                        />
                        </div>
                      </div>
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
