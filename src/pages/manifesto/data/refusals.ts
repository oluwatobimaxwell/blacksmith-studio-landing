export interface Refusal {
  claim: string
  reason: string
}

export const refusals: Refusal[] = [
  {
    claim: 'We will not price out the people we built this for.',
    reason: 'A tool for builders has to reach the builders. Paywalled cores do not. If the price is the reason you cannot start, the price is the problem.',
  },
  {
    claim: 'We will not ship tech debt as a feature.',
    reason: 'Fast code is not the same as good code. We refuse to let the AI hand the next engineer a mess — even when the mess would ship sooner.',
  },
  {
    claim: 'We will not treat Africa as a market to grow into later.',
    reason: 'The people we grew up around are the first users, not a phase-two rollout. The map does not start in San Francisco.',
  },
]
