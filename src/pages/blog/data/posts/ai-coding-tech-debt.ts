import type { BlogPost } from '../types'

export const aiCodingTechDebt: BlogPost = {
  slug: 'ai-coding-tech-debt',
  tag: 'Field notes',
  date: 'Apr 03',
  read: '6 min',
  title: 'AI coding tech debt is the new technical debt.',
  body: 'What we found when we audited 200 AI-generated repos — and the patterns that separate the ones that lasted.',
  content: [
    {
      type: 'paragraph',
      text: 'In the last year we audited roughly two hundred repositories that were generated largely by AI. Open source, side projects, a few production codebases. We wanted to know what the common patterns of decay looked like.',
    },
    { type: 'heading', text: 'Patterns that fail' },
    {
      type: 'list',
      items: [
        'Copy-paste instead of extraction. The same ten-line block, repeated in four files.',
        'Mixed abstractions. Business logic inside route handlers. Data transforms inside UI components.',
        'No boundaries. A function that logs, fetches, parses, validates, and returns — all in twenty lines.',
        'Silent errors. Every try/catch swallowing, nothing re-thrown, nothing logged.',
        'Tests that assert implementation, not behaviour. They break on any refactor.',
      ],
    },
    { type: 'heading', text: 'Patterns that last' },
    {
      type: 'paragraph',
      text: 'The repos that aged well had one thing in common: a human — usually a senior engineer — was treating the AI as a fast junior, not an autopilot. The human owned the structure. The AI filled the cells.',
    },
    {
      type: 'paragraph',
      text: 'Blacksmith is our attempt to take that pattern — senior discipline plus AI speed — and put it in the tool itself. So the person using the studio gets the output they would get from a senior-led team, even when they are working alone.',
    },
  ],
}
