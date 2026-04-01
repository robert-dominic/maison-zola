# Maison Zola — Project Plan
**Premium Bespoke Tailoring Demo Website**
*Luxury West African Fashion · Monrovia, Liberia*

---

## Brand Direction

Maison Zola is a Liberian-based luxury tailoring house. The site targets diaspora clients and local high-end customers. Every design decision should communicate craft, restraint, and cultural pride — never loud or generic.

**Design mental model:** Premium. Responsive. Consistent. Every page should feel like it belongs to the same brand. Follow modern design practices throughout — spacing, hierarchy, accessibility, and mobile experience all matter equally.

---

## Color System

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#241b17` | Primary text |
| `noir` | `#372925` | Dark backgrounds, footer |
| `cream` | `#f4ede3` | Primary background |
| `cream-end` | `#efe5d8` | Gradient end |
| `cream-muted` | `#eadbca` | Card surfaces |
| `smoke` | `#d5c9ba` | Subtle borders, dividers |
| `stone` | `#887767` | Muted/secondary text |
| `gold` | `#b5864d` | Accents, labels, highlights |
| `burgundy` | `#6d2232` | Primary brand color, CTAs |
| `burgundy-deep` | `#571a28` | Hover state |
| `burgundy-press` | `#4f1624` | Active/pressed state |
| `border` | `rgba(36,27,23,0.12)` | All borders |

---

## Typography

| Role | Font | Usage |
|---|---|---|
| Display | Cormorant Garamond | Hero headlines, section titles, pull quotes |
| Copy | Playfair Display | Subheadings, card titles, editorial text |
| Body | DM Sans | Paragraphs, nav links, UI text, labels |

All loaded via `next/font/google`. Font variables injected on `<html>`. Utility classes defined in `@layer utilities` in `globals.css`.

---

## Pages

### Home
The first impression. Editorial, confident, unhurried.
- Hero section with headline, subtitle, two CTAs, and the HeroHighlights card
- Brand statement section
- Featured collections grid (3 pieces)
- Bespoke CTA strip
- Process preview (Consult → Craft → Deliver)

### Collections
Full lookbook of all pieces.
- Page header
- Filter bar (All · Men · Women · Ceremonial · Ready-to-Wear)
- Masonry/grid layout of collection cards

### Collections / [slug]
Individual piece page.
- Large image + piece details split layout
- Fabric story
- Related pieces

### Bespoke
Converts visitors into consultation bookings.
- What bespoke means at Maison Zola
- The tailoring process (step by step)
- Pricing tiers
- CTA to contact/book

### About
Builds trust and emotional connection.
- Brand story and founder
- Roots in Monrovia
- Studio values

### Contact
- Inquiry and booking form
- Location, email, Instagram

---

## Navigation

**Behavior:**
- Fixed to top at all times
- Hides (slides up) when user scrolls down
- Reappears when user scrolls up
- Transparent at top of page, solid cream background after scrolling 60px

**Mobile:**
- Hamburger icon triggers a right-side drawer
- Drawer is ~75% screen width, does not cover full screen
- Dark overlay sits behind the drawer
- CSS transitions only — no Framer Motion on the nav

---

## Motion Rules

Framer Motion is used in exactly three places:

1. **Home Hero** — entrance animation on headline and CTA
2. **HeroHighlights card** — slide transition between highlight items, swipe on mobile
3. **Bespoke process steps** — each step animates in on scroll

Everything else uses CSS transitions only. Motion should feel slow and intentional — never bouncy or fast. Easing should always be custom cubic-bezier, not spring.

---

## Design Rules

- Backgrounds: cream or cream-muted only. Never pure white.
- Text: ink for primary, stone for secondary. Never pure black.
- Burgundy: primary brand color for CTAs, active states, key labels.
- Gold: accent only — thin rules, label highlights, icon accents. Never a background.
- Borders: intentional, not default. Use `border-border` token consistently.
- Shadows: minimal. Only where they add depth that matters.
- Spacing: generous. Sections need room to breathe.
- Images: `next/image` always. Cream-colored placeholder until real images are supplied.
- Every interactive element must have a visible hover state.
- Cursor pointer must be applied globally to all `a` and `button` elements.

---

## Stack

- Next.js 16.2 · TypeScript · App Router
- Tailwind CSS v4 · shadcn/ui
- Framer Motion
- next/font/google
- react-hook-form + zod (contact form)
- Vercel (deployment)

---

## Data

All collection data is static mock data in `lib/data/collections.ts`. No database for this demo. 8–10 pieces covering all categories.

---

## Build Order

1. Global styles and font setup
2. Shared components (SectionLabel, GoldRule, CTAButton, PieceCard)
3. Nav + MobileDrawer + Footer
4. Root layout
5. Home page
6. Collections page
7. Single piece page
8. Bespoke page
9. About page
10. Contact page + form
11. Motion pass — add Framer Motion to the 3 designated locations
12. Polish pass — spacing, mobile, consistency check across all pages

---

