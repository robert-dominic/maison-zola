import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google'
import { PageTransition } from '@/components/layout/PageTransition'

import './globals.css'

import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Maison Zola',
  description:
    'Liberian-based African luxury tailoring for bespoke suiting, ceremonial dressing, and elevated cultural wardrobes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" 
      className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <div className="relative min-h-screen">
          <Nav />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
