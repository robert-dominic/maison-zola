import type { Piece } from "@/types"

export const pieces: Piece[] = [
  {
    slug: 'kente-ceremonial-robe',
    name: 'Kente Ceremonial Robe',
    category: 'ceremonial',
    fabric: 'Hand-woven Kente',
    fabricOrigin: 'Ghana',
    description:
      'A commanding ceremonial robe woven from authentic Kente cloth. Structured shoulders, open front, floor-length.',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4b3b3e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    aspectTall: true,
  },
  {
    slug: 'monrovia-suit',
    name: 'The Monrovia Suit',
    category: 'men',
    fabric: 'Italian Wool Blend',
    fabricOrigin: 'Italy',
    description:
      'A two-piece bespoke suit cut for the Liberian climate. Slim silhouette, single-button, peak lapels.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featured: true,
    aspectTall: false,
  },
  {
    slug: 'adire-wrap-dress',
    name: 'Adire Wrap Dress',
    category: 'women',
    fabric: 'Adire Tie-Dye Cotton',
    fabricOrigin: 'Nigeria',
    description:
      'A flowing wrap dress in hand-dyed Adire cotton. Deep indigo tones with organic pattern variation.',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    aspectTall: true,
  },
  {
    slug: 'ankara-blazer',
    name: 'Ankara Power Blazer',
    category: 'women',
    fabric: 'Ankara Wax Print',
    fabricOrigin: 'West Africa',
    description:
      'Structured blazer in bold Ankara print. Fully lined, padded shoulders, statement silhouette.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectTall: false,
  },
  {
    slug: 'aso-oke-agbada',
    name: 'Aso-Oke Agbada Set',
    category: 'ceremonial',
    fabric: 'Aso-Oke',
    fabricOrigin: 'Nigeria',
    description:
      'Three-piece Agbada set in hand-loomed Aso-Oke. Flowing outer robe, inner tunic, trousers. Gold embroidery at collar and cuffs.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectTall: true,
  },
  {
    slug: 'linen-safari-shirt',
    name: 'Linen Safari Shirt',
    category: 'ready-to-wear',
    fabric: 'Belgian Linen',
    fabricOrigin: 'Belgium',
    description:
      'Relaxed-fit safari shirt in premium Belgian linen. Four pockets, camp collar, bone buttons.',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectTall: false,
  },
  {
    slug: 'dashiki-evening-coat',
    name: 'Dashiki Evening Coat',
    category: 'men',
    fabric: 'Silk-Cotton Dashiki Blend',
    fabricOrigin: 'Liberia',
    description:
      'Long evening coat in a silk-cotton Dashiki weave. Mandarin collar, hidden button placket, side slits.',
    image:
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectTall: true,
  },
  {
    slug: 'bogolan-skirt-set',
    name: 'Bogolan Skirt Set',
    category: 'women',
    fabric: 'Bogolan (Mud Cloth)',
    fabricOrigin: 'Mali',
    description:
      'Two-piece co-ord in authentic Mali mud cloth. Cropped structured top and midi A-line skirt.',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectTall: false,
  },
]

export const featuredPieces = pieces.filter((p) => p.featured)