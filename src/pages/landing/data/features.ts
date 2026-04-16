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
      'Talk to Claude about your codebase directly. Stream responses, execute tool calls, render rich markdown — with full project context loaded automatically.',
  },
  {
    icon: Users,
    title: 'Multi-Agent Canvas',
    description:
      'Coordinate a full team of specialized agents — PM, architect, frontend, backend, QA, security, and more — collaborating on a shared canvas to deliver complete, production-ready features.',
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
