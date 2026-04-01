import { AboutHero } from '@/components/sections/about/AboutHero'
import { FounderStory } from '@/components/sections/about/FounderStory'
import { StudioValues } from '@/components/sections/about/StudioValues'
import { AboutCTA } from '@/components/sections/about/AboutCTA'

export const metadata = {
  title: 'About — Maison Zola',
  description:
    'A Liberian tailoring house built on cultural pride, quiet craft, and continental ambition.',
}

export default function AboutPage() {
  return (
    <div className="pb-24">
      <AboutHero />
      <FounderStory />
      <StudioValues />
      <AboutCTA />
    </div>
  )
}