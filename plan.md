# Maison Zola — Project Plan v1.1
**Premium Bespoke Tailoring Demo Website**
*Luxury West African Fashion · Monrovia, Liberia*

---

## AGENT INSTRUCTIONS — READ THIS FIRST

This file is the single source of truth for building Maison Zola. Follow it exactly, in order, without skipping steps. Do not install Tailwind CSS or shadcn/ui separately — they are already configured during Next.js project initialization. Do not reinstall or reconfigure them. Read the full plan before writing any code.

---

## Step 1 — Project Assumptions (Do Not Change)

The developer initializes the Next.js 16.2 project manually. By the time you receive this plan, the following are already installed and configured:

- Next.js 16.2 with TypeScript
- Tailwind CSS v4 (configured during init)
- shadcn/ui (configured during init)
- App Router enabled
- `src/` directory: NO — use root `app/` directory

Do NOT re-run `npx create-next-app`. Do NOT re-run shadcn init. Do NOT touch `tailwind.config.ts` for color or font setup — Tailwind v4 uses `globals.css` for all token definitions.

---

## Step 2 — Install Dependencies

Run this single command to install all remaining dependencies:

```bash
npm i framer-motion @fontsource-variable/bodoni-moda @fontsource-variable/playfair-display @fontsource/ubuntu react-hook-form zod @hookform/resolvers
```

No other packages are needed. Do not install additional animation libraries, icon libraries (use lucide-react which ships with shadcn), or utility packages beyond what is listed.

---

## Step 3 — Fonts Setup

Create `lib/fonts.ts`:

```ts
import '@fontsource-variable/bodoni-moda'
import '@fontsource-variable/playfair-display'
import '@fontsource/ubuntu/300.css'
import '@fontsource/ubuntu/400.css'
```

Import `lib/fonts.ts` at the top of `app/layout.tsx`.

Font usage:

| Role | Font | Tailwind class |
|---|---|---|
| Display / Hero headlines | Bodoni Moda | `font-display` |
| Subheadings | Playfair Display | `font-sub` |
| Body / UI / nav links | Ubuntu | `font-body` |
| Section labels | Playfair Display italic | `font-sub italic tracking-[0.25em]` |

---

## Step 4 — Global Styles (`app/globals.css`)

Replace the entire contents of `globals.css` with this:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-ivory: #F7F2E9;
  --color-linen: #EDE4D0;
  --color-espresso: #18120A;
  --color-forest: #2C4A3E;
  --color-forest-light: #3D6657;
  --color-gold: #C09A3C;
  --color-gold-light: #D4AF6A;
  --color-ash: #8A7E6F;
  --color-bark: #5C4A32;

  /* Fonts */
  --font-display: 'Bodoni Moda Variable', serif;
  --font-sub: 'Playfair Display Variable', serif;
  --font-body: 'Ubuntu', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-ivory);
  color: var(--color-espresso);
  font-family: var(--font-body);
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}
```

---

## Step 5 — Folder Structure

Create this exact folder and file structure before writing any component code:

```
app/
  layout.tsx
  page.tsx
  collections/
    page.tsx
    [slug]/
      page.tsx
  bespoke/
    page.tsx
  about/
    page.tsx
  contact/
    page.tsx

components/
  layout/
    Nav.tsx
    Footer.tsx
    MobileDrawer.tsx
  shared/
    SectionLabel.tsx
    GoldRule.tsx
    CTAButton.tsx
    PieceCard.tsx
  sections/
    home/
      Hero.tsx
      BrandStatement.tsx
      FeaturedGrid.tsx
      BespokeCTAStrip.tsx
      ProcessPreview.tsx
    collections/
      FilterBar.tsx
      MasonryGrid.tsx
    bespoke/
      BespokeHero.tsx
      ProcessTimeline.tsx
      PricingCards.tsx
    about/
      FounderStory.tsx
      StudioValues.tsx
    contact/
      ContactForm.tsx
      ContactInfo.tsx

lib/
  fonts.ts
  utils.ts
  data/
    collections.ts
```

---

## Step 6 — Mock Data (`lib/data/collections.ts`)

```ts
export type Piece = {
  slug: string
  name: string
  category: 'men' | 'women' | 'ceremonial' | 'ready-to-wear'
  fabric: string
  fabricOrigin: string
  description: string
  priceRange: string
  images: string[]
  featured: boolean
}

export const pieces: Piece[] = [
  {
    slug: 'kente-ceremonial-robe',
    name: 'Kente Ceremonial Robe',
    category: 'ceremonial',
    fabric: 'Hand-woven Kente',
    fabricOrigin: 'Ghana',
    description: 'A commanding ceremonial robe woven from authentic Kente cloth. Structured shoulders, open front, floor-length.',
    priceRange: 'USD 600 – 950',
    images: ['/images/piece-1.jpg'],
    featured: true,
  },
  {
    slug: 'monrovia-suit',
    name: 'The Monrovia Suit',
    category: 'men',
    fabric: 'Italian Wool Blend',
    fabricOrigin: 'Italy',
    description: 'A two-piece bespoke suit cut for the Liberian climate. Slim silhouette, single-button, peak lapels.',
    priceRange: 'USD 450 – 700',
    images: ['/images/piece-2.jpg'],
    featured: true,
  },
  {
    slug: 'adire-wrap-dress',
    name: 'Adire Wrap Dress',
    category: 'women',
    fabric: 'Adire Tie-Dye Cotton',
    fabricOrigin: 'Nigeria',
    description: 'A flowing wrap dress in hand-dyed Adire cotton. Deep indigo tones with organic pattern variation.',
    priceRange: 'USD 280 – 420',
    images: ['/images/piece-3.jpg'],
    featured: true,
  },
  {
    slug: 'ankara-blazer',
    name: 'Ankara Power Blazer',
    category: 'women',
    fabric: 'Ankara Wax Print',
    fabricOrigin: 'West Africa',
    description: 'Structured blazer in bold Ankara print. Fully lined, padded shoulders, statement silhouette.',
    priceRange: 'USD 320 – 480',
    images: ['/images/piece-4.jpg'],
    featured: false,
  },
  {
    slug: 'aso-oke-agbada',
    name: 'Aso-Oke Agbada Set',
    category: 'ceremonial',
    fabric: 'Aso-Oke',
    fabricOrigin: 'Nigeria',
    description: 'Three-piece Agbada set in hand-loomed Aso-Oke. Flowing outer robe, inner tunic, trousers. Gold embroidery at collar and cuffs.',
    priceRange: 'USD 700 – 1,100',
    images: ['/images/piece-5.jpg'],
    featured: false,
  },
  {
    slug: 'linen-safari-shirt',
    name: 'Linen Safari Shirt',
    category: 'ready-to-wear',
    fabric: 'Belgian Linen',
    fabricOrigin: 'Belgium',
    description: 'Relaxed-fit safari shirt in premium Belgian linen. Four pockets, camp collar, bone buttons.',
    priceRange: 'USD 120 – 180',
    images: ['/images/piece-6.jpg'],
    featured: false,
  },
  {
    slug: 'dashiki-evening-coat',
    name: 'Dashiki Evening Coat',
    category: 'men',
    fabric: 'Silk-Cotton Dashiki Blend',
    fabricOrigin: 'Liberia',
    description: 'Long evening coat in a silk-cotton Dashiki weave. Mandarin collar, hidden button placket, side slits.',
    priceRange: 'USD 380 – 560',
    images: ['/images/piece-7.jpg'],
    featured: false,
  },
  {
    slug: 'bogolan-skirt-set',
    name: 'Bogolan Skirt Set',
    category: 'women',
    fabric: 'Bogolan (Mud Cloth)',
    fabricOrigin: 'Mali',
    description: 'Two-piece co-ord in authentic Mali mud cloth. Cropped structured top and midi A-line skirt.',
    priceRange: 'USD 260 – 390',
    images: ['/images/piece-8.jpg'],
    featured: false,
  },
]

export const featuredPieces = pieces.filter(p => p.featured)
```

---

## Step 7 — Shared Components

### `components/shared/SectionLabel.tsx`

```tsx
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sub italic text-gold text-xs tracking-[0.25em] uppercase mb-3">
      {children}
    </p>
  )
}
```

### `components/shared/GoldRule.tsx`

```tsx
export function GoldRule({ className = '' }: { className?: string }) {
  return <hr className={`border-none h-px bg-gold opacity-40 ${className}`} />
}
```

### `components/shared/CTAButton.tsx`

Two variants: `solid` (forest green background, ivory text) and `ghost` (gold border, no fill).

```tsx
type CTAButtonProps = {
  variant?: 'solid' | 'ghost'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function CTAButton({ variant = 'solid', children, href, onClick, className = '' }: CTAButtonProps) {
  const base = 'inline-block font-body text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 cursor-pointer'
  const styles = {
    solid: 'bg-forest text-ivory hover:bg-forest-light',
    ghost: 'border border-gold text-espresso hover:bg-gold hover:text-ivory',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}
```

### `components/shared/PieceCard.tsx`

- `withHover={true}` — for featured home grid cards only. Shows image overlay on hover.
- `withHover={false}` — for collection grid. Static, clean, no overlay.
- Do NOT apply hover overlays everywhere. Keep it selective.

```tsx
import Link from 'next/link'
import { Piece } from '@/lib/data/collections'

type PieceCardProps = {
  piece: Piece
  withHover?: boolean
}

export function PieceCard({ piece, withHover = false }: PieceCardProps) {
  return (
    <Link href={`/collections/${piece.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-linen aspect-[3/4]`}>
        <div className="w-full h-full bg-linen" />
        {withHover && (
          <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div>
              <p className="font-sub text-ivory text-lg">{piece.name}</p>
              <p className="font-body text-gold-light text-xs tracking-widest uppercase mt-1">{piece.category}</p>
            </div>
          </div>
        )}
      </div>
      {!withHover && (
        <div className="pt-3">
          <p className="font-sub text-espresso text-base">{piece.name}</p>
          <p className="font-body text-ash text-xs tracking-widest uppercase mt-0.5">{piece.category}</p>
        </div>
      )}
    </Link>
  )
}
```

---

## Step 8 — Navigation

### Behavior Rules
- Fixed to top of viewport always
- **Smart hide:** hides (slides up) when user scrolls down, reappears when user scrolls up
- At top of page: transparent background
- After scrolling 60px: ivory background + subtle bottom border
- Mobile: right-side drawer, 75% screen width, does NOT cover full screen, dark overlay behind it
- Drawer uses CSS transform only — no Framer Motion

### `components/layout/Nav.tsx`

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MobileDrawer } from './MobileDrawer'
import { Menu } from 'lucide-react'

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Bespoke', href: '/bespoke' },
  { label: 'Atelier', href: '/atelier' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastScrollY.current || currentY < 60)
      setScrolled(currentY > 60)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-400
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${scrolled ? 'bg-ivory border-b border-linen' : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl text-espresso tracking-wide">
            Maison Zola
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-espresso tracking-[0.15em] uppercase hover:text-forest transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-espresso"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} links={navLinks} />
    </>
  )
}
```

### `components/layout/MobileDrawer.tsx`

```tsx
'use client'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

function GoldRule({ className = '' }: { className?: string }) {
  return <hr className={`border-none h-px bg-gold opacity-40 ${className}`} />
}

export function MobileDrawer({ open, onClose, links }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-espresso/50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-ivory flex flex-col pt-20 pb-10 px-8 transition-transform duration-400 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button onClick={onClose} className="absolute top-5 right-6 text-espresso" aria-label="Close menu">
          <X size={22} />
        </button>
        <GoldRule className="mb-8" />
        <nav className="flex flex-col gap-7">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-2xl text-espresso hover:text-forest transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <GoldRule className="mb-6" />
          <p className="font-body text-ash text-xs tracking-widest uppercase">Monrovia, Liberia</p>
        </div>
      </div>
    </>
  )
}
```

---

## Step 9 — Footer (`components/layout/Footer.tsx`)

- Forest green background
- Ivory text throughout
- Layout: logo + tagline left / nav links center / email + Instagram right
- Bottom: thin gold rule + copyright
- No shadows. No card borders. Clean and flat.

---

## Step 10 — Pages

Build pages in this order. Each page imports its section components.

### Home (`app/page.tsx`)
1. `<Hero />` — Full viewport. Large Bodoni Moda headline. Thin gold rule. Subtitle in Ubuntu. CTA button (solid). **Framer Motion here only:** staggered word fade-up on load, then rule, then CTA.
2. `<BrandStatement />` — Centered Bodoni italic quote. Static.
3. `<FeaturedGrid />` — 3 featured pieces. `<PieceCard withHover={true} />`. Asymmetric 3-column layout.
4. `<BespokeCTAStrip />` — Full-width forest green band. Ivory headline. Ghost button → `/bespoke`.
5. `<ProcessPreview />` — 3 columns: Consult · Craft · Deliver. Icon, short label, one sentence. Static.

### Collections (`app/collections/page.tsx`)
1. Page header: SectionLabel + Bodoni heading "Dressed for Every Chapter"
2. `<FilterBar />` — Pills: All · Men · Women · Ceremonial · Ready-to-Wear. Underline active state, no box borders.
3. `<MasonryGrid />` — CSS grid 2–3 columns, variable row heights. `<PieceCard withHover={false} />`.

### Single Piece (`app/collections/[slug]/page.tsx`)
1. 60/40 split: image left, details right (name, SectionLabel category, description, fabric details, priceRange, CTA)
2. Fabric story block: fabric name, origin, description on linen background
3. Related pieces: 3-column grid of other pieces in same category

### Bespoke (`app/bespoke/page.tsx`)
1. Forest green hero: ivory Bodoni headline, Ubuntu subtitle
2. Two-column: image left, text right with gold rule
3. `<ProcessTimeline />` — 5 steps vertical. Gold number (Cinzel style), Playfair heading, Ubuntu body. **Framer Motion here:** each step fades in on scroll with `whileInView`, `once: true`.
4. `<PricingCards />` — 3 shadcn Cards. Name, starting price, feature list, CTA. Subtle border only, no shadow.
5. CTA strip → `/contact`

### Atelier (`app/atelier/page.tsx`)
1. Large Bodoni italic opening quote, centered. **Framer Motion here:** single slow fade-in, `whileInView`, `once: true`.
2. `<FounderStory />` — Portrait image left, story text right
3. Studio image grid: 3–4 images, Playfair captions
4. `<StudioValues />` — 3 columns: Craftsmanship · Heritage · Precision

### Contact (`app/contact/page.tsx`)
1. Page header: SectionLabel + heading "Begin Your Journey"
2. `<ContactForm />` — Fields: Name, Email, Phone, Service Interest (shadcn Select: Bespoke / Ready-to-Wear / General Enquiry), Message (textarea), Preferred Date (shadcn date picker). Validation via react-hook-form + zod. Submit button: solid CTAButton.
3. `<ContactInfo />` — 3 columns: Location (Monrovia, Liberia) · Email · Instagram

---

## Step 11 — Framer Motion (3 Places Only)

```ts
// Reusable animation variant — use this everywhere Framer Motion is needed
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}
```

**Location 1 — Home Hero:** Wrap headline words in `<motion.span>` with staggerChildren. Then animate the gold rule and CTA in sequence.

**Location 2 — Bespoke Process Timeline:** Each `<ProcessStep>` wrapped in `<motion.div whileInView="visible" initial="hidden" viewport={{ once: true }}>` with increasing delay per index.

**Location 3 — Atelier Opening Quote:** Single `<motion.blockquote whileInView="visible" initial="hidden" viewport={{ once: true }}>`.

Everywhere else: CSS transitions only.

---

## Step 12 — Design Rules (Non-Negotiable)

- Backgrounds: ivory or linen only. Never pure white (`#fff`).
- Text: espresso only. Never pure black (`#000`).
- Gold: accents only. Thin rules, label text, icon accents. Never a background fill.
- Borders: intentional, not default. 2–3 elements per page max. Never on every card.
- Shadows: only on the MobileDrawer overlay. Nowhere else.
- Hover states: PieceCard (featured only), CTAButton, nav links. Not on paragraphs, not on every div.
- Spacing: generous. All sections minimum `py-20`. Hero `py-32` or full viewport height.
- Images: `next/image` with `bg-linen` placeholder until real images are provided.
- Cards: not every card needs a border. Not every border needs a radius. Keep it flat and premium.

---

## Step 13 — Build Order (Execute Exactly)

1. `npm i` (Step 2 command)
2. Create `lib/fonts.ts`
3. Overwrite `app/globals.css` (Step 4)
4. Create all folders and empty `.tsx` files (Step 5 structure)
5. Write `lib/data/collections.ts`
6. Write shared components: `SectionLabel` → `GoldRule` → `CTAButton` → `PieceCard`
7. Write `MobileDrawer.tsx` then `Nav.tsx` then `Footer.tsx`
8. Write `app/layout.tsx` (imports fonts, wraps children in Nav + Footer)
9. Build Home page: Hero → BrandStatement → FeaturedGrid → BespokeCTAStrip → ProcessPreview
10. Build Collections page
11. Build `[slug]` page
12. Build Bespoke page
13. Build Atelier page
14. Build Contact page + form validation
15. Add Framer Motion to the 3 designated locations only
16. Final polish: spacing, mobile layout, font sizes, image placeholders

---

*Plan v1.1 — Fonts locked (Bodoni Moda / Playfair Display / Ubuntu via Fontsource). Nav smart-hide + right drawer defined. Motion stripped to 3 locations. Agent build order confirmed. Ready for GitHub push.*