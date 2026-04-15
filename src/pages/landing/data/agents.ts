import type { LucideIcon } from 'lucide-react'
import { ClipboardList, Compass, Layout, Server, TestTube, Palette } from 'lucide-react'

export interface AgentItem {
  role: string
  icon: LucideIcon
  description: string
}

export const agents: AgentItem[] = [
  {
    role: 'Product Manager',
    icon: ClipboardList,
    description: 'Breaks down features into tasks with acceptance criteria',
  },
  {
    role: 'Architect',
    icon: Compass,
    description: 'Designs system structure and technical approach',
  },
  {
    role: 'Frontend Engineer',
    icon: Layout,
    description: 'Builds components, pages, and user interactions',
  },
  {
    role: 'Backend Engineer',
    icon: Server,
    description: 'Implements APIs, models, and business logic',
  },
  {
    role: 'QA Engineer',
    icon: TestTube,
    description: 'Writes tests and validates edge cases',
  },
  {
    role: 'UI Designer',
    icon: Palette,
    description: 'Creates design specs with tokens and states',
  },
]
