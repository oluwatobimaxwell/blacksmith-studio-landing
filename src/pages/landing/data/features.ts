import { Sparkles, GitBranch, Database, BookOpen, type LucideIcon } from 'lucide-react'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  body: string
}

export const features: FeatureItem[] = [
  {
    icon: Sparkles,
    title: 'Free. Forever.',
    body: 'Not freemium. Not a trial. A founding principle — download, use, fork, ship, at no cost, now or ever.',
  },
  {
    icon: GitBranch,
    title: 'Open source',
    body: "Apache-2.0. Every line open to read, study, fork, and improve. The community doesn't just use the tool — it owns it.",
  },
  {
    icon: Database,
    title: 'Local models, when ready',
    body: 'Llama, Codestral, Qwen on-device are coming. For anywhere connectivity is unreliable or API costs are out of reach.',
  },
  {
    icon: BookOpen,
    title: 'Built in the open',
    body: 'Honest writing, live office hours, and a roadmap anyone can see. No hype — notes from the forge.',
  },
]
