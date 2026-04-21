import type { BlogPost } from '../types'

export const seniorDiscipline: BlogPost = {
  slug: 'senior-discipline',
  tag: 'Engineering',
  date: 'Mar 14',
  read: '9 min',
  title: 'What senior discipline looks like in code.',
  body: 'The practical difference between AI code and AI code reviewed by a senior. Boundaries, tests, and the refusal to paper over smells.',
  content: [
    {
      type: 'paragraph',
      text: '“Senior engineer” is a title that gets diluted quickly. Everyone wants it on their LinkedIn. But on the job, it means something specific.',
    },
    { type: 'heading', text: 'What a senior actually does' },
    {
      type: 'paragraph',
      text: 'A senior engineer says no. Not because they love saying no, but because they have watched bad decisions compound. They have seen the code that looked fine on Monday become the reason the feature shipped three months late.',
    },
    {
      type: 'list',
      items: [
        'They question structure before they write code. Where does this belong? What owns it?',
        'They push decisions to the right layer. Business logic into services, not controllers. Types into their own files, not nestled in components.',
        'They write tests that assert behaviour, not implementation.',
        'They isolate side effects. Pure transforms in the middle. I/O only at the edges.',
        'They leave the code better than they found it. Not by rewriting — by making one thing clearer on the way past.',
      ],
    },
    {
      type: 'paragraph',
      text: 'None of this is mysterious. It is a set of habits, applied ten thousand times.',
    },
    { type: 'heading', text: 'How this shows up in Blacksmith' },
    {
      type: 'paragraph',
      text: 'Each of the agents in Blacksmith has these habits compiled into its behaviour. The Architect questions structure. The Reviewer questions readability. The Implementer refuses to write code without tests.',
    },
    {
      type: 'paragraph',
      text: 'You are not getting an AI that types fast. You are getting a team that refuses to ship what a senior engineer would not.',
    },
  ],
}
