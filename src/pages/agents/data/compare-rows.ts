export interface CompareRow {
  label: string
  single: string
  team: string
}

export const compareRows: CompareRow[] = [
  {
    label: 'Best for',
    single: 'A focused task: bug fix, refactor, doc tweak, or review.',
    team: 'A whole feature or project, from plan through ship.',
  },
  {
    label: 'You drive',
    single: 'Pick the specialist, write the brief.',
    team: 'Pick the goal. PM scopes and sequences the work.',
  },
  {
    label: 'Scope',
    single: 'One agent, one prompt, one artifact.',
    team: 'Eleven agents, coordinated through acceptance criteria.',
  },
  {
    label: 'Hand-offs',
    single: 'None. Single input, single output.',
    team: 'Architect → Engineers → Reviewer → QA → Writer.',
  },
  {
    label: 'Tests',
    single: 'On request. You decide what to cover.',
    team: 'QA writes them against the PM’s acceptance criteria.',
  },
  {
    label: 'Review',
    single: 'You review the diff.',
    team: 'Reviewer gates merge against the ADR and style guide.',
  },
  {
    label: 'Docs',
    single: 'On request.',
    team: 'Technical Writer updates changelog and reference.',
  },
  {
    label: 'Time to first output',
    single: 'Seconds. Straight to the answer.',
    team: 'Minutes. Plan first, then build.',
  },
]
