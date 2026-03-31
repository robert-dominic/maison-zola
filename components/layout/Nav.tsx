'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/bespoke', label: 'Bespoke' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="font-serif-display text-2xl tracking-[0.18em] text-burgundy md:text-3xl">
            Maison Zola
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans-body text-[11px] tracking-[0.24em] uppercase text-stone transition-colors duration-200 hover:text-burgundy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex cursor-pointer items-center justify-center p-2 text-burgundy transition-colors hover:text-burgundy-press md:hidden ${
              open ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <span className="relative block h-5 w-6">
                <span className="absolute top-2.5 left-0 block h-px w-6 -rotate-45 bg-current" />
                <span className="absolute top-2.5 left-0 block h-px w-6 rotate-45 bg-current" />
              </span>
            ) : (
              <span className="flex h-5 w-6 flex-col justify-center gap-[5px]">
                <span className="block h-px w-6 self-start bg-current" />
                <span className="block h-px w-4 self-end bg-current" />
                <span className="block h-px w-5 self-start bg-current" />
              </span>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-ink/28 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 left-0 z-50 flex h-screen w-[70vw] max-w-sm flex-col border-r border-border bg-cream px-6 pt-6 pb-8 md:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-3">
                <p className="font-serif-display text-[1.3rem] tracking-[0.12em] text-burgundy">
                  Maison Zola
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex cursor-pointer items-center justify-center p-1 text-burgundy transition-colors hover:text-burgundy-press"
                >
                  <span className="relative block h-4 w-4">
                    <span className="absolute top-1/2 left-0 block h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
                    <span className="absolute top-1/2 left-0 block h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
                  </span>
                </button>
              </div>
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer border-b border-border py-4 font-serif-display text-[1.2rem] leading-none text-burgundy"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t border-border pt-6">
                <p className="font-sans-body text-[10px] tracking-[0.22em] uppercase text-stone">
                  Monrovia, Liberia
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
