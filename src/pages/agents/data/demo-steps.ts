export interface DemoStep {
  agent: string
  t: string
  title: string
  body: string
}

export const demoSteps: DemoStep[] = [
  {
    agent: 'pm',
    t: '00:00',
    title: 'Scopes the ask',
    body: 'Takes "I need a booking page" and returns a ticketed plan: calendar view, slot picker, confirm step, email receipt.',
  },
  {
    agent: 'arch',
    t: '00:04',
    title: 'Writes the ADR',
    body: 'Chooses Next.js + a server action endpoint, a single Booking table, and a queue for email. Draws the module graph.',
  },
  {
    agent: 'ux',
    t: '00:09',
    title: 'Specs the screens',
    body: 'Three screens: pick a date, confirm details, success. Picks components from the design system, writes copy.',
  },
  {
    agent: 'de',
    t: '00:14',
    title: 'Designs the schema',
    body: 'Booking(id, slot_id, email, name, status). Unique index on (slot_id, status). Migration file is ready.',
  },
  {
    agent: 'be',
    t: '00:19',
    title: 'Writes the API',
    body: 'POST /api/bookings with Zod input, idempotency key, and a transaction. Test first.',
  },
  {
    agent: 'fe',
    t: '00:25',
    title: 'Builds the UI',
    body: 'Three routes wired to the API. Loading, empty, error states all covered. Accessible date picker.',
  },
  {
    agent: 'do',
    t: '00:31',
    title: 'Ships the pipeline',
    body: 'GitHub Actions runs tests and deploys previews. Production deploy is behind a feature flag.',
  },
  {
    agent: 'sec',
    t: '00:35',
    title: 'Audits the surface',
    body: 'Confirms rate limiting, bot protection, email validation, and no PII in logs. Threat model added.',
  },
  {
    agent: 'cr',
    t: '00:39',
    title: 'Reviews the diff',
    body: 'Two nits, one real bug — hand-off of the slot ID was stringly-typed. Flagged and fixed.',
  },
  {
    agent: 'qae',
    t: '00:44',
    title: 'Runs the tests',
    body: 'All 14 acceptance tests pass in a real browser. One flake identified and stabilised.',
  },
  {
    agent: 'wr',
    t: '00:48',
    title: 'Writes the docs',
    body: 'API reference, a quickstart, and a changelog entry. Breaking change flagged (none this round).',
  },
]
