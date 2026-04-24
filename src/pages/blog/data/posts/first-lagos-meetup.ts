import type { BlogPost } from '../types'

export const firstLagosMeetup: BlogPost = {
  slug: 'first-lagos-meetup',
  tag: 'Community',
  date: 'Feb 21',
  read: '4 min',
  title: 'Notes from the first meet-up.',
  body: 'Forty builders, one room, three laptops short. The questions that surprised me and the ones that did not.',
  content: [
    {
      type: 'paragraph',
      text: 'Forty people. One room above a café. A projector that did not work until the third attempt.',
    },
    {
      type: 'paragraph',
      text: 'We were three laptops short. Three builders borrowed, three builders shared. That is the community version of a fireside chat.',
    },
    { type: 'heading', text: 'What people asked' },
    {
      type: 'paragraph',
      text: 'The questions were not about the AI. They were about the craft.',
    },
    {
      type: 'list',
      items: [
        'How do I know when a refactor is worth doing?',
        'How do I write tests that do not annoy me?',
        'How do I review my own code before the studio does?',
        'When should I trust the Architect’s plan and when should I push back?',
      ],
    },
    {
      type: 'paragraph',
      text: 'These are the questions of people who want to build for a long time, not people who want to ship once. We took note.',
    },
    { type: 'heading', text: 'What surprised me' },
    {
      type: 'paragraph',
      text: 'How many people had already been using the studio quietly for weeks. How many were already shipping. How many wanted to talk less about features and more about philosophy.',
    },
    {
      type: 'paragraph',
      text: 'The next meet-up is in May. A bigger room.',
    },
    {
      type: 'paragraph',
      text: 'Come.',
    },
  ],
}
