import { LandingShell } from '@/shared/components/landing-shell'
import { ManifestoHero } from './components/manifesto-hero'
import { ManifestoStake } from './components/manifesto-stake'
import { ManifestoTenets } from './components/manifesto-tenets'
import { ManifestoRefusals } from './components/manifesto-refusals'
import { ManifestoCall } from './components/manifesto-call'

export default function ManifestoPage() {
  return (
    <LandingShell active="manifesto" currentPage="manifesto">
      <ManifestoHero />
      <ManifestoStake />
      <ManifestoTenets />
      <ManifestoRefusals />
      <ManifestoCall />
    </LandingShell>
  )
}
