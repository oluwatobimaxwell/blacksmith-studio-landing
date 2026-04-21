export interface Refusal {
  claim: string
  reason: string
}

export const refusals: Refusal[] = [
  {
    claim: 'We will not ship tech debt as a feature.',
    reason: 'Fast code is not good code. The startup that rewrites everything at month six, the engineer who inherits a codebase held together with assumptions — they pay the real price. We will not let speed be the excuse for handing the next person a mess.',
  },
  {
    claim: 'We will not price out the people we built this for.',
    reason: 'A tool for builders has to reach the builders. Paywalled cores do not. If the price is the reason you cannot start, the price is the problem.',
  },
  {
    claim: 'We will not design for one city and call it global.',
    reason: 'The first version of this product had to work for the builder with the least — the tightest budget, the slowest connection, the most to prove. That is not a phase-two consideration. It is how we know we got it right.',
  },
]
