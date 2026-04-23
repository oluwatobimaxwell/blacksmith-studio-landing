export interface HowStep {
  step: string
  title: string
  body: string
}

export const howSteps: HowStep[] = [
  {
    step: '01',
    title: 'Describe what you want',
    body: 'Plain language. No boilerplate, no scaffolding. Just what you want to build.',
  },
  {
    step: '02',
    title: 'Agents do their jobs',
    body: 'PM defines scope. Architect designs the system. Engineer writes it. Reviewer checks it. QA tests it.',
  },
  {
    step: '03',
    title: 'You get clean code',
    body: 'Production-ready. Built to maintain, extend, and scale. Not just to demo.',
  },
]
