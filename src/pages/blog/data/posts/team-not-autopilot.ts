import type { BlogPost } from '../types'

export const teamNotAutopilot: BlogPost = {
  slug: 'team-not-autopilot',
  tag: 'Engineering',
  date: 'Mar 07',
  read: '6 min',
  title: 'A team, not an autopilot.',
  body: 'Why the studio hands work between agents the way a good team hands off tickets — with context, not just a prompt.',
  content: [
    {
      type: 'paragraph',
      text: 'There are two mental models for AI coding tools. One is autopilot — you set a destination, the machine flies. The other is team — you have colleagues, and you coordinate.',
    },
    { type: 'heading', text: 'Why autopilot fails' },
    {
      type: 'paragraph',
      text: 'Autopilot works in narrow, well-bounded problems. Fly from A to B. The path is known.',
    },
    {
      type: 'paragraph',
      text: 'Software is not that. Software is decisions, trade-offs, and discovery. Halfway through a feature the requirements change. A library does not behave as documented. An edge case appears in testing. Autopilot cannot negotiate.',
    },
    { type: 'heading', text: 'Why team works' },
    {
      type: 'paragraph',
      text: 'A team passes context. When a designer hands work to an engineer, they do not hand over a sentence. They hand over a mock-up, a rationale, a list of constraints, and an explicit set of open questions.',
    },
    {
      type: 'paragraph',
      text: 'Blacksmith’s agents do the same. The Planner hands the Architect a context packet — user intent, constraints, prior decisions. The Architect hands the Implementer a design, not a prompt. The Implementer hands the Reviewer a diff, plus the tests that prove it.',
    },
    {
      type: 'quote',
      text: 'The work is the handoff. The handoff is where the quality lives.',
    },
    { type: 'heading', text: 'What this means for you' },
    {
      type: 'paragraph',
      text: 'You are not piloting Blacksmith. You are the product manager. You set direction. You review work. You intervene when something is off. The agents do the rest.',
    },
    {
      type: 'paragraph',
      text: 'It feels less like flying and more like leading a small, senior team. Which, we think, is the right feeling.',
    },
  ],
}
