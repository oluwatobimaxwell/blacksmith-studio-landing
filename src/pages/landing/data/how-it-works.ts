import type { LucideIcon } from 'lucide-react'
import { MessageSquare, GitBranch, Rocket } from 'lucide-react'

export interface HowItWorksStep {
  step: number
  icon: LucideIcon
  title: string
  description: string
}

export const steps: HowItWorksStep[] = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Describe your feature',
    description:
      'Tell your AI team what to build in natural language. The PM breaks it into tasks and the architect designs the approach.',
  },
  {
    step: 2,
    icon: GitBranch,
    title: 'Watch agents collaborate',
    description:
      'Frontend and backend engineers write code while the QA engineer validates. The UI designer specs every component.',
  },
  {
    step: 3,
    icon: Rocket,
    title: 'Review and ship',
    description:
      'Review the generated code, run tests, and merge — all inside the IDE. Your feature is ready to deploy.',
  },
]
