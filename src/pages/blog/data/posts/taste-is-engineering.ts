import type { BlogPost } from '../types'

export const tasteIsEngineering: BlogPost = {
  slug: 'taste-is-engineering',
  tag: 'Manifesto',
  date: 'Feb 28',
  read: '5 min',
  title: 'Taste is an engineering concern.',
  body: 'An interface that feels cheap teaches its user that building software is cheap. We think that teaches the wrong thing.',
  content: [
    {
      type: 'paragraph',
      text: 'Some people will tell you that taste is the frosting and engineering is the cake. We disagree.',
    },
    { type: 'heading', text: 'What taste teaches' },
    {
      type: 'paragraph',
      text: 'An interface that feels cheap teaches its user that building software is cheap. Bad spacing teaches that detail does not matter. Bad copy teaches that words do not matter. A UI that ships broken hover states teaches that behaviour does not matter. The user learns. And when they go off to build their own thing, they build what they learned.',
    },
    {
      type: 'quote',
      text: 'Every tool is a school. The question is what it teaches.',
    },
    { type: 'heading', text: 'Taste as a constraint' },
    {
      type: 'paragraph',
      text: 'We treat taste as a constraint, not a decoration. When the studio generates a component, it generates one that follows spacing rules, a clear visual hierarchy, an accessible focus state, and the smallest number of props that would make it usable. When the generated output does not meet that standard, the Reviewer rejects it. Same as any other test.',
    },
    {
      type: 'paragraph',
      text: 'We are not claiming Blacksmith has perfect taste. But it refuses to ship what it knows is wrong. That is the start.',
    },
    { type: 'heading', text: 'The stake' },
    {
      type: 'paragraph',
      text: 'A generation of African engineers is about to learn what good software looks like — partly from the tools we hand them. If those tools have lazy taste, we will get lazy taste back, at scale, for a decade.',
    },
    {
      type: 'paragraph',
      text: 'We would rather not.',
    },
  ],
}
