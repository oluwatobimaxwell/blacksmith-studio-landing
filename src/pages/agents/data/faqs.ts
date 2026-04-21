export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Are these real separate agents, or one AI with prompts?',
    answer:
      'Each agent is a distinct role with its own system prompt, tools, and success criteria. They run in sequence with explicit hand-offs — not a single context pretending to be many.',
  },
  {
    question: 'Do I have to use all eleven for every task?',
    answer:
      'No. For a one-line tweak the Reviewer and QA may be all you need. For a new feature the full team runs. Blacksmith picks the subset based on the work.',
  },
  {
    question: 'Can I run a single agent on its own?',
    answer:
      'Yes. Re-run any node in the graph without re-running the rest. Useful for a doc update, a second-opinion review, or a targeted QA pass.',
  },
  {
    question: 'What AI model powers them?',
    answer:
      'Claude Sonnet, Opus, or Haiku depending on the agent and your preference. On-device Llama, Codestral, and Qwen are on the roadmap.',
  },
  {
    question: 'Does the team see my whole codebase?',
    answer:
      'Each agent sees only what it needs — scoped by the Architect. Nothing is sent anywhere unless the task requires it. No telemetry by default.',
  },
  {
    question: 'What if an agent gets something wrong?',
    answer:
      'The Reviewer catches most of it. If something slips, re-run that agent with a note. Because agents are scoped, fixing one doesn\'t unwind the rest.',
  },
  {
    question: 'Can I customise an agent?',
    answer:
      'Yes. Every system prompt, tool list, and output schema is editable in Settings → Skills. The defaults follow senior-team practice.',
  },
  {
    question: 'Is this really free?',
    answer:
      'The IDE and all agents are free forever. You bring your own model access — a Claude API key, Claude Code CLI, or a local model. That also means you are not stacking a separate AI subscription on top of a dev platform. One key covers both.',
  },
]
