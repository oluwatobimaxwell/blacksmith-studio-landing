import { Box } from '@chakra-ui/react'
import { NavBar } from './components/nav-bar'
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
import { LandingFooter } from './components/landing-footer'
import { useLandingTheme } from './hooks/use-landing-theme'
import { useScrollReveal } from './hooks/use-scroll-reveal'
import { useActiveSection } from './hooks/use-active-section'
import { useHashScroll } from './hooks/use-hash-scroll'
import { sectionIds } from './data/nav-links'

export default function LandingPage() {
  const { theme, toggle } = useLandingTheme()
  const active = useActiveSection(sectionIds)
  useScrollReveal()
  useHashScroll()

  return (
    <Box
      className="cl-root"
      data-theme={theme}
      bg="var(--paper)"
      color="var(--fg-1)"
      minH="100vh"
    >
      <Box id="top" position="absolute" top={0} aria-hidden />
      <NavBar theme={theme} onToggleTheme={toggle} active={active} />
      <Box as="main">
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
      </Box>
      <LandingFooter theme={theme} />
    </Box>
  )
}
