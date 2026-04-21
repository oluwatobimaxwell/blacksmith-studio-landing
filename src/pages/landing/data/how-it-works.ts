export interface HowStep {
  step: string
  title: string
  body: string
}

export const howSteps: HowStep[] = [
  {
    step: '01',
    title: 'You describe it',
    body: 'Tell Blacksmith what you want to build, in plain language. No code required.',
  },
  {
    step: '02',
    title: 'Agents build it',
    body: 'A team of senior-level AI agents — PM, Architect, Engineer, Reviewer, QA — each do their job, in order.',
  },
  {
    step: '03',
    title: 'You ship it',
    body: 'You get a professionally architected, production-ready codebase. Structured to maintain, extend, and scale.',
  },
]
