import { Box } from '@chakra-ui/react'
import { LandingShell } from '@/shared/components/landing-shell'
import { HeroSection } from './components/hero-section'
import { RailSection } from './components/rail-section'
import { ProblemSection } from './components/problem-section'
import { ShowcaseSection } from './components/showcase-section'
import { FeaturesSection } from './components/features-section'
import { AgentGraphSection } from './components/agent-graph-section'
import { ManifestoSection } from './components/manifesto-section'
import { AudienceSection } from './components/audience-section'
import { CommunitySection } from './components/community-section'
import { DownloadSection } from './components/download-section'
import { BlogSection } from './components/blog-section'
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
      <RailSection />
      <ProblemSection />
      <ShowcaseSection />
      <FeaturesSection />
      <AgentGraphSection />
      <ManifestoSection />
      <AudienceSection />
      <CommunitySection />
      <DownloadSection />
      <BlogSection />
    </LandingShell>
  )
}
