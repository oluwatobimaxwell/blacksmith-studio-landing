export interface WalkthroughFeature {
  id: string
  label: string
  headline: string
  description: string
  accent?: boolean
}

export const walkthroughFeatures: WalkthroughFeature[] = [
  {
    id: 'graphify',
    label: 'Graphify',
    headline: 'Your codebase as a graph',
    description: 'Agents navigate by structure, not grep.',
  },
  {
    id: 'project-builder',
    label: 'Project Builder',
    headline: 'From idea to running app',
    description: 'Scaffold a whole project from one prompt.',
  },
  {
    id: 'mcp',
    label: 'MCP',
    headline: 'Tools your agents can use',
    description: 'Plug in any MCP server, your agents pick them up.',
  },
  {
    id: 'runner',
    label: 'Runner',
    headline: 'Dev server, right there',
    description: 'Starts your project, captures logs, diagnoses crashes.',
  },
  {
    id: 'skills',
    label: 'Skills',
    headline: 'Your workflows, reusable',
    description: 'Publish a recurring flow once, invoke it with /.',
  },
  {
    id: 'templates',
    label: 'Templates',
    headline: "Starting isn't a project",
    description: 'Launch from a community template in two clicks.',
    accent: true,
  },
]
