import type { BlogPost } from '../types'

export const elevenAgents: BlogPost = {
  slug: 'eleven-agents',
  tag: 'Engineering',
  date: 'Apr 12',
  read: '8 min',
  title: 'Why we built eleven agents, not one.',
  body: "Specialization isn't a prompt trick — it's an organisational choice. Here's how the agent graph really works.",
  content: [
    {
      type: 'paragraph',
      text: 'When we started building Blacksmith, the obvious choice was one big model, one big prompt, and a lot of hope. We went the other way.',
    },
    { type: 'heading', text: 'Why not one agent?' },
    {
      type: 'paragraph',
      text: 'A single agent answering every question sounds simple until you watch one in production. It gets confused about which task it is currently working on. It overwrites tests that were fine. It forgets a constraint from three messages ago.',
    },
    {
      type: 'paragraph',
      text: 'Specialization fixes this — but not as a prompt trick. As a team structure.',
    },
    { type: 'heading', text: 'The eleven' },
    {
      type: 'paragraph',
      text: 'Blacksmith has eleven agents, each with one job. The Planner breaks work into tickets. The Architect designs before code is written. The Implementer writes the code. The Reviewer critiques it, from the perspective of a senior engineer. Others handle testing, docs, refactors, migrations, UI, search, and integration.',
    },
    {
      type: 'paragraph',
      text: 'They hand work to each other the way a good team does — with context, not just a prompt. The Architect does not pass the Implementer a sentence. It passes a plan.',
    },
    { type: 'heading', text: 'Organisational, not magical' },
    {
      type: 'paragraph',
      text: 'The model family underneath is the same for all of them. What changes is the role each one plays, the context it holds, and the standards it is held to.',
    },
    {
      type: 'paragraph',
      text: 'We think this is why the output feels different from vibe-coded output. It is not magic. It is boundaries.',
    },
  ],
}
