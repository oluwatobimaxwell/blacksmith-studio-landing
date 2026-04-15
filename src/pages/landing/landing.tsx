import { Box } from '@chakra-ui/react'
import { NavBar } from './components/nav-bar'
import { HeroSection } from './components/hero-section'
import { SocialProofBar } from './components/social-proof-bar'
import { FeaturesSection } from './components/features-section'
import { AgentTeamSection } from './components/agent-team-section'
import { HowItWorksSection } from './components/how-it-works-section'
import { PricingSection } from './components/pricing-section'
import { CtaSection } from './components/cta-section'
import { LandingFooter } from './components/landing-footer'

export default function LandingPage() {
  return (
    <Box bg="var(--studio-bg)" minH="100vh" color="var(--studio-text-primary)">
      <NavBar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <FeaturesSection />
        <AgentTeamSection />
        <HowItWorksSection />
        <PricingSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </Box>
  )
}
