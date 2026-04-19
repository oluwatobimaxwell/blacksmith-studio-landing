export interface BlogPost {
  tag: string
  date: string
  read: string
  title: string
  body: string
}

export const blogPosts: BlogPost[] = [
  {
    tag: 'Engineering',
    date: 'Apr 12',
    read: '8 min',
    title: 'Why we built eleven agents, not one.',
    body: "Specialization isn't a prompt trick — it's an organizational choice. Here's how the agent graph really works.",
  },
  {
    tag: 'Field notes',
    date: 'Apr 03',
    read: '6 min',
    title: 'AI coding tech debt is the new technical debt.',
    body: 'What we found when we audited 200 AI-generated repos — and the patterns that separate the ones that lasted.',
  },
  {
    tag: 'Community',
    date: 'Mar 28',
    read: '4 min',
    title: 'The first hundred builders.',
    body: "A letter from Helsinki to Lagos. What we're building next, and who's building it with us.",
  },
]
