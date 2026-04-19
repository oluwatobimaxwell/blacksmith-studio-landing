export type ShowcaseMock = 'home' | 'agents' | 'chat' | 'settings'

export interface ShowcaseRow {
  number: string
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  mock: ShowcaseMock
  reverse?: boolean
}

export const showcaseRows: ShowcaseRow[] = [
  {
    number: '01',
    eyebrow: '01 · Home',
    title: 'Start where you left off.',
    body:
      "Every project you've opened, one keystroke away. A composer that doesn't get in the way when you're drafting — and quick actions for the moves you make every day.",
    bullets: [
      'Recent projects with inline metadata',
      'Quick actions — resource, page, API, auth',
      'Forge or open — one composer, one shortcut',
    ],
    mock: 'home',
  },
  {
    number: '02',
    eyebrow: '02 · Agent Team',
    title: 'See the work before it happens.',
    body:
      "A live graph of who's doing what. Hand-offs are explicit. Dependencies are drawn. You can watch a plan unfold instead of guessing what the AI is up to.",
    bullets: [
      'Expand any node to read its brief and output',
      'Re-run a single agent without re-running the rest',
      'Chat and agent modes share one composer',
    ],
    mock: 'agents',
    reverse: true,
  },
  {
    number: '03',
    eyebrow: '03 · Chat',
    title: 'Every step, traceable.',
    body:
      'Plans, tool calls, diffs, system messages — tempered, quenched, staged. Nothing disappears into a black box.',
    bullets: [
      'System messages in the forge vocabulary',
      'Inline tool cards for every edit',
      'Chat or agent mode from the same composer',
    ],
    mock: 'chat',
  },
  {
    number: '04',
    eyebrow: '04 · Settings',
    title: 'Your models. Your keys. Your machine.',
    body:
      'Ships with Claude Code CLI, auto-detected. On-device models are next — so the tool still works on a bad connection or a tight budget.',
    bullets: [
      'Model-per-task: Sonnet, Opus, Haiku',
      'MCP servers, skills, and workspace settings in one panel',
      'Nothing phones home by default',
    ],
    mock: 'settings',
    reverse: true,
  },
]
