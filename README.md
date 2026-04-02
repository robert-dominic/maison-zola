# Maison Zola

A premium bespoke tailoring demo website for a Liberian-based West African luxury fashion house. Built as a portfolio piece to attract high-end clients locally and across the diaspora.

**Live:** [maison-zola.vercel.app](https://maison-zola.vercel.app)  
**Stack:** Next.js 16.2 · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion

---

## Overview

Maison Zola presents bespoke African tailoring with a premium, editorial aesthetic. The site is designed to communicate craft, cultural depth, and quiet confidence — targeting diaspora clients and local high-end customers in Monrovia, Liberia.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, brand highlights, featured collection, bespoke CTA |
| `/collections` | Full lookbook with category filtering |
| `/collections/[slug]` | Individual piece detail with fabric info and related pieces |
| `/bespoke` | Bespoke tailoring service — process, pricing tiers, CTA |
| `/about` | Brand story, founder, studio values |
| `/contact` | Enquiry form with validation and contact info |

---

## Tech Stack

- **Framework:** Next.js 16.2 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom `@theme` tokens
- **Components:** shadcn/ui
- **Animation:** Framer Motion
- **Fonts:** Cormorant Garamond · Playfair Display · DM Sans (via `next/font/google`)
- **Form:** react-hook-form + zod v4
- **Deployment:** Vercel

---

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#241b17` | Primary text |
| `noir` | `#372925` | Dark backgrounds, footer |
| `cream` | `#f4ede3` | Primary background |
| `cream-muted` | `#eadbca` | Card surfaces |
| `stone` | `#887767` | Secondary text |
| `gold` | `#b5864d` | Accents, labels |
| `burgundy` | `#6d2232` | Brand color, CTAs |
| `border` | `rgba(36,27,23,0.12)` | All borders |

### Typography

| Role | Font |
|---|---|
| Display / Headlines | Cormorant Garamond |
| Subheadings | Playfair Display |
| Body / UI | DM Sans |

### Motion

Framer Motion is used in exactly three places:
1. Hero section entrance animation
2. HeroHighlights card slide transition + mobile swipe
3. Bespoke process timeline scroll-triggered reveals

Everything else uses CSS transitions only.

---

## Project Structure

```
app/
  layout.tsx
  page.tsx
  collections/
    page.tsx
    [slug]/page.tsx
  bespoke/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  layout/
    Nav.tsx
    Footer.tsx
    PageTransition.tsx
    navLinks.ts
  sections/
    home/HeroHighlights.tsx
    collections/CollectionsGrid.tsx · FilterBar.tsx
    bespoke/BespokeHero.tsx · BespokeProcess.tsx · BespokePricing.tsx · BespokeCTA.tsx
    about/AboutHero.tsx · FounderStory.tsx · StudioValues.tsx · AboutCTA.tsx
    contact/ContactForm.tsx · ContactInfo.tsx
  shared/
    PieceCard.tsx

lib/
  data/collections.ts

types/
  index.ts

config/
  navLinks.ts

public/
  images/
    hero-1.jpeg · hero-2.jpeg
    founder.jpeg · interior.jpeg
    collections/
      men-1.jpeg → men-4.jpeg
      women-1.jpeg → women-4.jpeg
      ceremonial-1.jpeg → ceremonial-4.jpeg
      rtw-1.jpeg → rtw-4.jpeg
    bespoke/
      process-1.jpeg → process-4.jpeg
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Data

All collection data is static mock data in `lib/data/collections.ts`. No database. 16 pieces across 4 categories: Men, Women, Ceremonial, Ready to Wear.

To add or edit pieces, update the `pieces` array in `lib/data/collections.ts`. Each piece follows the `Piece` type defined in `types/index.ts`.

---

## Deployment

Deployed on Vercel. Push to `main` branch triggers automatic deployment.

```bash
git add .
git commit -m "your message"
git push
```

---

## Credits

Built by [Robert Dominic](https://linkedin.com/in/robertdominic) · WebNova Studio · Monrovia, Liberia