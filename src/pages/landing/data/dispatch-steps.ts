export interface DispatchStep {
  number: number
  title: string
  body: string
}

export const dispatchSteps: DispatchStep[] = [
  {
    number: 1,
    title: 'You prompt.',
    body: '"Add a comment thread to blog posts — editable, with replies."',
  },
  {
    number: 2,
    title: 'The PM decomposes.',
    body: 'Six tasks appear. Database → Backend → UI/UX → Frontend → QA → Docs. Each with its own specialist.',
  },
  {
    number: 3,
    title: 'Dependencies run in parallel.',
    body: "The UI designer drafts the HTML spec while the database engineer plans the schema. They don't block each other.",
  },
  {
    number: 4,
    title: 'Every specialist reads what came before.',
    body: "The frontend doesn't guess: it reads the designer's actual HTML artifact and converts it exactly.",
  },
  {
    number: 5,
    title: 'A reviewer gates the merge.',
    body: "The code reviewer checks correctness, security, and your project's conventions before anything lands.",
  },
  {
    number: 6,
    title: 'You see everything.',
    body: 'Every decision, every artifact, every cost, every file touched. Nothing happens in a black box.',
  },
]
