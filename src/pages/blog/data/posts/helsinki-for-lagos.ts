import type { BlogPost } from '../types'

export const helsinkiForLagos: BlogPost = {
  slug: 'helsinki-for-lagos',
  tag: 'Field notes',
  date: 'Apr 15',
  read: '7 min',
  title: 'Building from Helsinki, for Lagos.',
  body: 'A studio made in Finland, aimed at the people who taught me how to write software. The origin story, told properly.',
  content: [
    {
      type: 'paragraph',
      text: 'In 2024 I was sitting in a café in Helsinki, and a friend in Lagos messaged me. He wanted to try one of the AI coding tools I had been using at work. I sent him the link. "Twenty dollars a month," he replied. "That is most of a week for me."',
    },
    {
      type: 'paragraph',
      text: 'That is the moment Blacksmith Studio became real.',
    },
    { type: 'heading', text: 'Two gates, one answer' },
    {
      type: 'paragraph',
      text: 'The AI coding era has two gates, and neither of them should exist.',
    },
    {
      type: 'paragraph',
      text: 'The first gate is price. Twenty dollars in Helsinki is a lunch. Twenty dollars in Lagos is a real decision — food, transport, a family member you help. If price is what separates a talented engineer from the AI era, we have chosen a bad way to organise the future.',
    },
    {
      type: 'paragraph',
      text: 'The second gate is quality. The current generation of AI coding tools is fast, but what they produce is frequently a long-term liability. Projects that ship quickly, then rot within six months. Senior engineers spend the next year cleaning up what an afternoon of vibe-coding produced. That is the quieter exclusion: people who lack a senior engineer to clean up behind them.',
    },
    { type: 'heading', text: 'Built in Helsinki, for Lagos' },
    {
      type: 'paragraph',
      text: 'We are building Blacksmith from Finland, for the country that taught me how to write software. Free, open source, permanently. Engineered around the discipline of a senior engineer — so the code it produces is code you would ship without apology.',
    },
    {
      type: 'paragraph',
      text: 'This is not charity. Nigeria has extraordinary engineers. Kenya, Ghana, South Africa, Egypt — the same. The question is not whether they are ready for this era. It is whether this era is ready for them.',
    },
    {
      type: 'quote',
      text: 'The internet was built on a promise it has only half-kept. Let us keep the other half.',
    },
  ],
}
