import { Box } from '@chakra-ui/react'
import { NavBar } from '@/pages/landing/components/nav-bar'
import { LandingFooter } from '@/pages/landing/components/landing-footer'
import { useLandingTheme } from '@/pages/landing/hooks/use-landing-theme'
import { useScrollReveal } from '@/pages/landing/hooks/use-scroll-reveal'
import { AgentsHero } from './components/agents-hero'
import { AgentsDemo } from './components/agents-demo'
import { AgentsCompare } from './components/agents-compare'
import { AgentsFaq } from './components/agents-faq'
import { AgentsCta } from './components/agents-cta'
import { AgentModal } from './components/agent-modal'
import { useAgentModal } from './hooks/use-agent-modal'

export default function AgentsPage() {
  const { theme, toggle } = useLandingTheme()
  const { agent, index, total, isOpen, open, close } = useAgentModal()
  useScrollReveal()

  return (
    <Box className="cl-root" data-theme={theme} bg="var(--paper)" color="var(--fg-1)" minH="100vh">
      <NavBar theme={theme} onToggleTheme={toggle} active="agents" currentPage="agents" />
      <Box as="main" pt="56px">
        <AgentsHero onSelectAgent={open} />
        <AgentsDemo />
        <AgentsCompare />
        <AgentsFaq />
        <AgentsCta />
      </Box>
      <LandingFooter theme={theme} />
      <AgentModal agent={agent} index={index} total={total} isOpen={isOpen} theme={theme} onClose={close} />
    </Box>
  )
}
