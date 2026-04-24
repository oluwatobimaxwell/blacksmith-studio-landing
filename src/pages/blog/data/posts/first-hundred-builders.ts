import type { BlogPost } from '../types'

export const firstHundredBuilders: BlogPost = {
  slug: 'first-hundred-builders',
  tag: 'Community',
  date: 'Mar 28',
  read: '4 min',
  title: 'The first hundred builders.',
  body: "A letter to the community. What we're building next, and who's building it with us.",
  content: [
    {
      type: 'paragraph',
      text: 'We hit one hundred builders this week. Thank you, if you are one of them.',
    },
    {
      type: 'paragraph',
      text: 'Here is what I can tell you about who you are.',
    },
    {
      type: 'list',
      items: [
        'You are spread across dozens of countries on every continent.',
        'A significant number of you are in Africa, Europe, and the Americas. The rest spread across Asia and beyond.',
        'Three-quarters of you are building your first real production project inside the studio.',
        'A small but meaningful number of you are senior engineers stress-testing how far Blacksmith can be pushed. Your bug reports are gold.',
      ],
    },
    { type: 'heading', text: 'What you are building' },
    {
      type: 'paragraph',
      text: 'Fintech tools for informal markets. Student platforms. Church membership apps. Fishing-cooperative dashboards. Internal tools. Personal portfolios. A surprising number of Discord bots.',
    },
    {
      type: 'paragraph',
      text: 'There is no pattern. There is only the pattern of people finally getting to build the thing they always wanted to build.',
    },
    { type: 'heading', text: 'What comes next' },
    {
      type: 'paragraph',
      text: 'The agent graph is going to get two more members this quarter — one for integrations, one for security review. The CLI is getting a proper first release. And we are opening office hours twice a week, rotating across timezones so everyone gets a fair seat.',
    },
    {
      type: 'paragraph',
      text: 'See you in Discord.',
    },
  ],
}
