export interface Principle {
  firstWord: string
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    firstWord: 'Local-first.',
    title: 'Local-first.',
    body: 'Your code never leaves your machine. Models you choose run against files you own. No cloud lock-in, no surprise bills, no "training on your data" asterisk.',
  },
  {
    firstWord: 'Readable,',
    title: 'Readable, not magical.',
    body: "Every dispatch shows you the plan, the artifacts, the files touched, the cost, the time. Black boxes are how tools lose developer trust — we'd rather you see too much than too little.",
  },
  {
    firstWord: 'Provider-agnostic.',
    title: 'Provider-agnostic.',
    body: "Runs on Claude CLI today. Anthropic API, OpenAI, Ollama — planned, and shipped via one abstraction. Pick your model; the IDE doesn't care.",
  },
]
