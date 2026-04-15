import type { LucideIcon } from 'lucide-react'
import { MessageSquare, Users, Play, TerminalSquare, FileCode, GitBranch, Plug, Wand2 } from 'lucide-react'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

export const heroFeatures: FeatureItem[] = [
  {
    icon: MessageSquare,
    title: 'AI Chat',
    description:
      'Have a conversation with Claude about your codebase. Stream responses, execute tool calls, render rich markdown — with full context of your project.',
  },
  {
    icon: Users,
    title: 'Multi-Agent Team',
    description:
      'Assemble a team of specialized AI agents — PM, architect, engineers, QA, designer — and watch them collaborate on a shared canvas to deliver complete features.',
  },
]

export const supportFeatures: FeatureItem[] = [
  {
    icon: Play,
    title: 'Dev Services',
    description: 'Manage dev servers with log streaming and AI diagnostics.',
  },
  {
    icon: TerminalSquare,
    title: 'Terminal',
    description: 'Full PTY terminal with xterm.js and WebGL rendering.',
  },
  {
    icon: FileCode,
    title: 'Code Editor',
    description: 'Monaco-powered editor with custom themes and completions.',
  },
  {
    icon: GitBranch,
    title: 'Source Control',
    description: 'Git integration with diff viewer and AI commit messages.',
  },
  {
    icon: Plug,
    title: 'MCP Servers',
    description: 'Connect Claude to external tools via Model Context Protocol.',
  },
  {
    icon: Wand2,
    title: 'Skills',
    description: 'Reusable prompt templates as slash commands.',
  },
]
