import { Box } from '@chakra-ui/react'
import { LandingShell } from '@/shared/components/landing-shell'
import { HeroSection } from './components/hero-section'
import { ProblemSection } from './components/problem-section'
import { HowItWorksSection } from './components/how-it-works-section'
import { AudienceSection } from './components/audience-section'
import { DownloadSection } from './components/download-section'
import { useActiveSection } from './hooks/use-active-section'
import { useHashScroll } from './hooks/use-hash-scroll'
import { sectionIds } from './data/nav-links'

export default function LandingPage() {
  const active = useActiveSection(sectionIds)
  useHashScroll()

  return (
    <LandingShell active={active} mainPt={0}>
      <Box id="top" position="absolute" top={0} aria-hidden />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <AudienceSection />
      <DownloadSection />
    </LandingShell>
  )
}
