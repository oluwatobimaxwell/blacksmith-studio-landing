import { Box } from '@chakra-ui/react'
import { NavBar } from './components/nav-bar'
import { HeroSection } from './components/hero-section'
import { TwoWaysSection } from './components/two-ways-section'
import { DispatchSection } from './components/dispatch-section'
import { FeatureBentoSection } from './components/feature-bento-section'
import { GraphifySection } from './components/graphify-section'
import { PrinciplesSection } from './components/principles-section'
import { ShowcaseSection } from './components/showcase-section'
import { CtaSection } from './components/cta-section'
import { LandingFooter } from './components/landing-footer'

export default function LandingPage() {
  return (
    <Box bg="var(--studio-landing-bg)" minH="100vh" color="var(--studio-landing-text-primary)">
      <NavBar />
      <main>
        <HeroSection />
        <TwoWaysSection />
        <DispatchSection />
        <FeatureBentoSection />
        <GraphifySection />
        <PrinciplesSection />
        <ShowcaseSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </Box>
  )
}
