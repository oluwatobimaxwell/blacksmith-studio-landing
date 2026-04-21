export interface Tenet {
  id: string
  title: string
  body: string
}

export const tenets: Tenet[] = [
  {
    id: 'senior-code',
    title: 'The AI should code like a senior engineer.',
    body: 'Structure. Naming. Boundaries. Tests. Types. The discipline a senior brings on day one, engineered into the studio itself. The first draft is the one you ship — not the one you rewrite.',
  },
  {
    id: 'team',
    title: 'A team beats an agent.',
    body: 'Software was never built by one role. Blacksmith ships the full team — PM, architect, designer, engineers, reviewer, QA, writer — working through a real process, not a single prompt.',
  },
  {
    id: 'taste',
    title: 'Taste is not optional.',
    body: 'Fast and thoughtless is still thoughtless. We build for the reader of the code, not only the writer — because the people who inherit what you build deserve it legible.',
  },
  {
    id: 'free',
    title: 'Free is a principle, not a tier.',
    body: 'The core tools stay free. If price is what stops a builder from starting, we have failed before the work begins.',
  },
  {
    id: 'global',
    title: 'The world is not one city.',
    body: 'We design for the builder with the most to prove, not the one with the most resources. If it works for the person with the slowest connection and the tightest budget, it works everywhere. That is the standard.',
  },
]
