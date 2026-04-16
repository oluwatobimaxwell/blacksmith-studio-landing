import { Box } from '@chakra-ui/react'
import { NavBar } from './components/nav-bar'
import { HeroSection } from './components/hero-section'
import { FeatureWalkthroughSection } from './components/feature-walkthrough-section'
import { AgentTeamSection } from './components/agent-team-section'
import { CommunitySection } from './components/community-section'
import { CtaSection } from './components/cta-section'
import { LandingFooter } from './components/landing-footer'

export default function LandingPage() {
  return (
    <Box bg="var(--studio-landing-bg)" minH="100vh" color="var(--studio-landing-text-primary)">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureWalkthroughSection />
        <AgentTeamSection />
        <CommunitySection />
        <CtaSection />
      </main>
      <LandingFooter />
    </Box>
  )
}
