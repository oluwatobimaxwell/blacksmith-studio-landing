export interface AgentProfileData {
  id: string
  initials: string
  name: string
  short: string
  lede: string
  principle: string
  resp: string[]
  inputs: string[]
  outputs: string[]
  gates: string[]
}

export const agents: AgentProfileData[] = [
  {
    id: 'pm',
    initials: 'PM',
    name: 'Product Manager',
    short: 'Intent → Work',
    lede: 'Turns a fuzzy idea into a scoped, sequenced plan the team can actually build.',
    principle: 'The cheapest line of code is the one you never had to write. Scope before speed.',
    resp: [
      'Clarifies intent — asks sharp follow-up questions before any work starts',
      'Breaks a product brief into milestones, then into tickets',
      "Decides what's in the first cut and what waits for v2",
      'Writes acceptance criteria the QA Engineer can test against',
    ],
    inputs: ['User intent', 'Existing codebase state', 'Project constraints'],
    outputs: ['Product brief', 'Ticketed backlog', 'Acceptance criteria'],
    gates: [
      'No ticket ships without an acceptance test',
      'Scope fits the stated constraints',
      'Every ticket has a clear owner agent',
    ],
  },
  {
    id: 'arch',
    initials: 'SA',
    name: 'Software Architect',
    short: 'Patterns & structure',
    lede: 'Designs the system before anyone writes a line of code.',
    principle: 'Structure is a one-time decision that pays interest every day after. Get it right first.',
    resp: [
      'Picks the stack, patterns, and folder layout that fit the problem',
      'Draws the module graph — what talks to what, through which boundary',
      'Chooses where state lives and how it flows',
      'Sets conventions the other engineers will follow',
    ],
    inputs: ['PM backlog', 'Existing architecture (if any)'],
    outputs: ['Architecture decision record', 'Module graph', 'Conventions doc'],
    gates: [
      'No engineer starts until the ADR is written',
      'All boundaries are explicit',
      'Tested at the seams, not just the leaves',
    ],
  },
  {
    id: 'ux',
    initials: 'UX',
    name: 'UI/UX Designer',
    short: 'Experience & flow',
    lede: 'Maps the user journey, chooses the components, writes the copy.',
    principle: 'Clarity beats cleverness. The interface should make the next step obvious.',
    resp: [
      'Lays out every screen in the user flow',
      'Picks components from the design system — never invents one without reason',
      "Writes interface copy in the product's voice",
      'Specs interaction states: hover, press, focus, disabled, loading, error',
    ],
    inputs: ['PM brief', 'Design system tokens', 'Existing screens'],
    outputs: ['Screen specs', 'Component choices', 'Copy deck'],
    gates: [
      'Every state has a spec',
      'Copy passes the product voice check',
      'No orphan screens — every flow has an exit',
    ],
  },
  {
    id: 'de',
    initials: 'DB',
    name: 'Database Engineer',
    short: 'Schema & storage',
    lede: "Owns the data model — what's stored, in what shape, with what guarantees.",
    principle: 'A good schema makes wrong states unrepresentable. Constraints are your friend.',
    resp: [
      'Designs tables, columns, constraints, and indexes',
      'Writes migrations that can be rolled back',
      'Specifies transactional boundaries for every mutation',
      'Plans capacity — what grows linearly, what explodes',
    ],
    inputs: ["Architect's data model", 'Expected read / write patterns'],
    outputs: ['Schema', 'Migrations', 'Query patterns doc'],
    gates: [
      'Every migration is reversible',
      'Every hot query has an index',
      'FKs declared where referential integrity matters',
    ],
  },
  {
    id: 'be',
    initials: 'BE',
    name: 'Backend Engineer',
    short: 'Services & APIs',
    lede: 'Builds the server-side logic — business rules, APIs, and integrations.',
    principle: 'Write the test first. The implementation is the easy part.',
    resp: [
      "Implements services against the Architect's interfaces",
      'Writes endpoint handlers with input validation and error codes',
      'Integrates external APIs behind a clean adapter',
      'Keeps handlers thin — logic lives in testable modules',
    ],
    inputs: ['ADR', 'Schema', 'Ticket'],
    outputs: ['Services', 'Endpoints', 'Tests'],
    gates: [
      'Test-first for every handler',
      'Errors return actionable codes',
      'No business logic in handlers',
    ],
  },
  {
    id: 'fe',
    initials: 'FE',
    name: 'Frontend Engineer',
    short: 'Interfaces & state',
    lede: 'Builds the UI — components, state, and the wiring between them.',
    principle: 'Components should be dumb by default. Put smarts in one place you can find.',
    resp: [
      "Builds components from the Designer's specs",
      'Wires state through the app — never props-drilled past 2 levels',
      'Handles loading, empty, and error states for every fetch',
      "Keeps the bundle small — imports what's needed, lazy-loads what isn't",
    ],
    inputs: ["Designer's specs", 'API contract', 'Design system'],
    outputs: ['Components', 'Pages', 'Client-side tests'],
    gates: [
      'Every fetch has loading and error states',
      'Accessibility baseline met',
      'Bundle size within budget',
    ],
  },
  {
    id: 'do',
    initials: 'DO',
    name: 'DevOps Engineer',
    short: 'Build & deploy',
    lede: 'Owns the path from commit to production — CI, CD, and the runtime.',
    principle: "If it isn't automated, it isn't done. Humans shouldn't deploy.",
    resp: [
      'Writes the build pipeline and the deploy pipeline',
      'Provisions environments — dev, preview, staging, prod',
      'Sets up logs, metrics, and alerts before the first deploy',
      'Chooses the rollback strategy up front',
    ],
    inputs: ['ADR', 'Infra constraints'],
    outputs: ['CI pipeline', 'Infra manifests', 'Runbook'],
    gates: [
      'Every deploy is reversible',
      'Observability is in place from day one',
      'Secrets never land in the repo',
    ],
  },
  {
    id: 'sec',
    initials: 'SE',
    name: 'Security Engineer',
    short: 'Hardening',
    lede: 'Treats the codebase like a locked door and checks every hinge.',
    principle: 'Assume compromise. Defense in depth. Least privilege. Always.',
    resp: [
      'Reviews authentication and session handling',
      'Checks input sanitization and output encoding',
      'Audits dependency tree for known CVEs',
      'Writes a threat model for every user-facing feature',
    ],
    inputs: ['Backend endpoints', 'Auth flows', 'Dependency graph'],
    outputs: ['Threat model', 'Security checklist', 'Patches'],
    gates: [
      'All user input validated at the boundary',
      'No secrets in code or logs',
      'OWASP top ten audited per feature',
    ],
  },
  {
    id: 'cr',
    initials: 'CR',
    name: 'Code Reviewer',
    short: 'Patterns & polish',
    lede: "Checks every output against the Architect's conventions and the team's standards.",
    principle: 'Consistency is a feature. Surprise is a bug. Polish is a professional courtesy.',
    resp: [
      'Reads every diff against the ADR and style guide',
      'Flags dead code, duplicated logic, and leaky abstractions',
      'Requests changes with specific, actionable comments',
      'Blocks merge until conventions are met',
    ],
    inputs: ["Every engineer's diff", 'ADR', 'Style guide'],
    outputs: ['Review comments', 'Merge / request-changes verdict'],
    gates: [
      'No merge without a green review',
      'Repeated issues become linter rules',
      'Every comment cites a specific line',
    ],
  },
  {
    id: 'qae',
    initials: 'QA',
    name: 'QA Engineer',
    short: 'Tests & verification',
    lede: 'Tests the system against the acceptance criteria the PM wrote, before anything ships.',
    principle: "Trust the tests, not the vibes. If it isn't in a test, it isn't guaranteed.",
    resp: [
      'Writes integration and end-to-end tests per acceptance criterion',
      'Verifies behavior in a real environment — not just unit tests',
      'Reproduces bugs with a failing test first',
      'Maintains the test matrix across supported platforms',
    ],
    inputs: ['Acceptance criteria', 'Built artifact', 'Platform matrix'],
    outputs: ['Test suite', 'Bug reports with reproductions', 'Release sign-off'],
    gates: [
      'Every acceptance criterion has a test',
      'CI must be green before release',
      'Regression tests added for every fixed bug',
    ],
  },
  {
    id: 'wr',
    initials: 'TW',
    name: 'Technical Writer',
    short: 'Docs & handoff',
    lede: 'Writes the docs — API reference, guides, and the changelog — so humans can actually use the thing.',
    principle: "If it isn't written down, it didn't happen. Future-you will thank present-you.",
    resp: [
      'Writes README, getting-started, and API reference',
      'Keeps the changelog current with every release',
      'Documents public behaviour and stable interfaces',
      'Flags breaking changes before they ship',
    ],
    inputs: ['Backend APIs', 'Frontend components', 'Release notes from DevOps'],
    outputs: ['README', 'API reference', 'Changelog', 'Migration guides'],
    gates: [
      'No public API ships without docs',
      'Every release has a changelog entry',
      'Breaking changes are called out in bold',
    ],
  },
]

export const agentsById: Record<string, AgentProfileData> = Object.fromEntries(
  agents.map((a) => [a.id, a]),
)
