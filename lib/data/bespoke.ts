import ProcessImage1 from '@/public/images/bespoke/process-1.jpeg'
import ProcessImage2 from '@/public/images/bespoke/process-2.jpeg'
import ProcessImage3 from '@/public/images/bespoke/process-3.jpeg'
import ProcessImage4 from '@/public/images/bespoke/process-4.jpeg'

export const bespokeProcessSteps = [
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

export const bespokeProcessImages = [
  ProcessImage1,
  ProcessImage2,
  ProcessImage3,
  ProcessImage4,
]

export const bespokePricingTiers = [
  {
    name: 'Ready to Wear',
    description: 'Select pieces from our existing collection, tailored to your measurements.',
    inclusions: [
      'Choice from current collection',
      'Basic alterations included',
      'One fitting session',
      '2–3 week turnaround',
    ],
    cta: 'View Collections',
    href: '/collections?category=ready-to-wear',
    highlighted: false,
  },
  {
    name: 'Bespoke',
    description: 'A fully custom garment built from scratch around your body and vision.',
    inclusions: [
      'Private consultation session',
      'Full pattern from your measurements',
      'Fabric selection from our library',
      'Two to three fittings',
      '4–6 week turnaround',
    ],
    cta: 'Book a Consultation',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Ceremonial Commission',
    description: 'For weddings, state occasions, and cultural ceremonies requiring elevated craft.',
    inclusions: [
      'Extended consultation process',
      'Priority fabric sourcing',
      'Cultural direction and styling',
      'Multiple fittings',
      'Custom embellishment options',
    ],
    cta: 'Enquire Now',
    href: '/contact',
    highlighted: false,
  },
]
