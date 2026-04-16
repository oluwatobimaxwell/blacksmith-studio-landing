export interface WalkthroughFeature {
  id: string
  label: string
  headline: string
  description: string
  bullets: string[]
}

export const walkthroughFeatures: WalkthroughFeature[] = [
  {
    id: 'canvas',
    label: 'Multi-Agent Canvas',
    headline: 'Your entire engineering team. In one window.',
    description:
      'Coordinate 11 specialized AI agents — PM, Architect, Frontend, Backend, QA, Security, and more — all collaborating on a shared canvas. Each does their specific job, in the right order, following real engineering principles.',
    bullets: [
      'PM scopes the feature first',
      'Architect designs before anyone codes',
      'Engineers build in parallel',
      'QA validates before it ships',
    ],
  },
  {
    id: 'chat',
    label: 'AI Chat',
    headline: 'Talk to your codebase. Get real answers.',
    description:
      'Have a deep conversation with Claude about your project. Ask about architecture decisions, debug complex issues, understand unfamiliar code — with your entire codebase loaded as context.',
    bullets: [
      'Full project context loaded automatically',
      'Streaming responses with tool execution',
      'Rich markdown with code blocks',
      'File reads, edits, and creation inline',
    ],
  },
  {
    id: 'editor',
    label: 'Code Editor',
    headline: 'Monaco-powered. Built for AI workflows.',
    description:
      'A professional-grade editor that understands AI-generated code. Syntax highlighting across every language, intelligent completions, and a custom Blacksmith theme designed for long sessions.',
    bullets: [
      'Monaco editor core (VS Code engine)',
      'AI-aware completions',
      'Custom Blacksmith dark theme',
      'Multi-file editing with split panes',
    ],
  },
  {
    id: 'terminal',
    label: 'Terminal & Dev Services',
    headline: 'From code to running server. One workspace.',
    description:
      'A full PTY terminal with WebGL rendering, live dev server management with log streaming, and AI-powered diagnostics when something breaks. Stop switching between tools.',
    bullets: [
      'Full PTY terminal (xterm.js + WebGL)',
      'Live log streaming with search',
      'AI diagnostics on errors',
      'Multiple service management',
    ],
  },
  {
    id: 'git',
    label: 'Git Integration',
    headline: 'Version control with AI understanding.',
    description:
      'Stage changes, review diffs, and write commit messages — with AI that understands what changed and why. Full git integration built into the workspace. No terminal required.',
    bullets: [
      'Visual diff viewer with syntax highlighting',
      'AI-generated commit messages',
      'Branch management and history',
      'Conflict resolution assistance',
    ],
  },
]
