import { BespokeHero } from '@/components/sections/bespoke/BespokeHero'
import { BespokeProcess } from '@/components/sections/bespoke/BespokeProcess'
import { BespokePricing } from '@/components/sections/bespoke/BespokePricing'
import { BespokeCTA } from '@/components/sections/bespoke/BespokeCTA'

export const metadata = {
  title: 'Bespoke — Maison Zola',
  description:
    'Every Maison Zola piece begins with a conversation. Discover our bespoke tailoring process.',
}

export default function BespokePage() {
  return (
    <div className="pb-24">
      <BespokeHero />
      <BespokeProcess />
      <BespokePricing />
      <BespokeCTA />
    </div>
  )
}