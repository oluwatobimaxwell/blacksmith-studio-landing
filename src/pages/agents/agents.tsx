import { LandingShell } from '@/shared/components/landing-shell'
import { AgentsHero } from './components/agents-hero'
import { AgentsDemo } from './components/agents-demo'
import { AgentsCompare } from './components/agents-compare'
import { AgentsFaq } from './components/agents-faq'
import { AgentsCta } from './components/agents-cta'
import { AgentModal } from './components/agent-modal'
import { useAgentModal } from './hooks/use-agent-modal'

export default function AgentsPage() {
  const { agent, index, total, isOpen, open, close } = useAgentModal()

  return (
    <LandingShell active="agents" currentPage="agents">
      <AgentsHero onSelectAgent={open} />
      <AgentsDemo />
      <AgentsCompare />
      <AgentsFaq />
      <AgentsCta />
      <AgentModal agent={agent} index={index} total={total} isOpen={isOpen} onClose={close} />
    </LandingShell>
  )
}
