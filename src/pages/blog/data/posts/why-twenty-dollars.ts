import type { BlogPost } from '../types'

export const whyTwentyDollars: BlogPost = {
  slug: 'why-twenty-dollars',
  tag: 'Field notes',
  date: 'Mar 21',
  read: '5 min',
  title: 'Why $20 a month is not nothing.',
  body: 'In Lagos, a subscription is a real decision. If price is the only gate between talent and the AI era, the gate is wrong.',
  content: [
    {
      type: 'paragraph',
      text: 'I know engineers who say twenty dollars a month is nothing. I know engineers who say it is everything. Both are telling the truth.',
    },
    { type: 'heading', text: 'What $20 is' },
    {
      type: 'paragraph',
      text: 'The minimum wage in Nigeria is around seventy thousand naira a month. At today’s exchange rate, that is roughly forty-seven dollars. Twenty dollars is more than a third of a minimum-wage month.',
    },
    {
      type: 'paragraph',
      text: 'A developer job in Lagos pays more, of course. But not everyone who wants to learn is in a job. Students are not. Interns often are not. Someone building the portfolio that will get them a job is not.',
    },
    { type: 'heading', text: 'The quiet exclusion' },
    {
      type: 'paragraph',
      text: 'When a tool costs twenty dollars a month, most people shrug. Some people do not sign up. The people who do not sign up do not show up in your usage metrics. They show up nowhere. They are the quiet exclusion.',
    },
    {
      type: 'paragraph',
      text: 'The AI era is being built right now, in the open, on the backs of early adopters. If a generation of African engineers is absent from that window, we will look back in ten years and try to explain what happened. The explanation will not sound good.',
    },
    { type: 'heading', text: 'What to do about it' },
    {
      type: 'paragraph',
      text: 'Make the tool free. Make it open source. Make it good. That is the whole argument.',
    },
    {
      type: 'paragraph',
      text: 'Blacksmith is free forever. Not as a freemium funnel. As a principle.',
    },
  ],
}
