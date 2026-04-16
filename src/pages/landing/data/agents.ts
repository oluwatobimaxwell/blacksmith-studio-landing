import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList,
  Compass,
  Layout,
  Server,
  TestTube,
  Palette,
  Shield,
  Terminal,
  BookOpen,
  Database,
  Eye,
} from 'lucide-react'

export interface AgentItem {
  role: string
  icon: LucideIcon
  description: string
  capabilities: string[]
}

export const agents: AgentItem[] = [
  {
    role: 'Product Manager',
    icon: ClipboardList,
    description: 'Breaks down features into tasks with acceptance criteria',
    capabilities: ['Feature scoping', 'Task planning', 'Acceptance criteria'],
  },
  {
    role: 'Architect',
    icon: Compass,
    description: 'Designs system structure and technical approach before any code is written',
    capabilities: ['System design', 'Tech decisions', 'Data modeling'],
  },
  {
    role: 'Frontend Engineer',
    icon: Layout,
    description: 'Builds components, pages, and user interactions',
    capabilities: ['React components', 'State management', 'UI styling'],
  },
  {
    role: 'Backend Engineer',
    icon: Server,
    description: 'Implements APIs, models, and business logic',
    capabilities: ['REST APIs', 'Database models', 'Auth logic'],
  },
  {
    role: 'Database Engineer',
    icon: Database,
    description: 'Designs schemas, migrations, and query optimization',
    capabilities: ['Schema design', 'Migrations', 'Query tuning'],
  },
  {
    role: 'DevOps Engineer',
    icon: Terminal,
    description: 'Manages deployments, CI/CD pipelines, and infrastructure',
    capabilities: ['Docker', 'CI/CD', 'Infrastructure'],
  },
  {
    role: 'UI Designer',
    icon: Palette,
    description: 'Creates design specs with tokens, states, and interaction patterns',
    capabilities: ['Component specs', 'Design tokens', 'All states'],
  },
  {
    role: 'Code Reviewer',
    icon: Eye,
    description: 'Reviews every output for quality, patterns, and best practices',
    capabilities: ['Code quality', 'Best practices', 'Pattern checks'],
  },
  {
    role: 'Security Engineer',
    icon: Shield,
    description: 'Identifies vulnerabilities and hardens the codebase against threats',
    capabilities: ['OWASP checks', 'Auth security', 'Vulnerability scan'],
  },
  {
    role: 'Technical Writer',
    icon: BookOpen,
    description: 'Documents APIs, components, and architecture decisions',
    capabilities: ['API docs', 'Component docs', 'Architecture'],
  },
  {
    role: 'QA Engineer',
    icon: TestTube,
    description: 'Writes tests and validates edge cases before anything ships',
    capabilities: ['Unit tests', 'Integration tests', 'Edge cases'],
  },
]
