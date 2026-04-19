export interface AgentNode {
  id: string
  name: string
  role?: string
  x: number
  y: number
  primary?: boolean
  tier?: 1 | 2
}

export const agentNodes: AgentNode[] = [
  { id: 'pm', name: 'Product Manager', role: 'Intent → Work', x: 50, y: 8, primary: true, tier: 1 },
  { id: 'arch', name: 'Architecture', role: 'System', x: 17, y: 34, tier: 2 },
  { id: 'eng', name: 'Engineering', role: 'Build', x: 50, y: 34, tier: 2 },
  { id: 'qa', name: 'Quality', role: 'Review', x: 83, y: 34, tier: 2 },
  { id: 'sa', name: 'Software Arch.', x: 9, y: 62 },
  { id: 'de', name: 'Database', x: 24, y: 62 },
  { id: 'fe', name: 'Frontend', x: 38, y: 62 },
  { id: 'be', name: 'Backend', x: 52, y: 62 },
  { id: 'cr', name: 'Reviewer', x: 66, y: 62 },
  { id: 'sec', name: 'Security', x: 81, y: 62 },
  { id: 'wr', name: 'Tech Writer', x: 93, y: 62 },
  { id: 'ux', name: 'UI/UX Designer', x: 22, y: 90 },
  { id: 'do', name: 'DevOps', x: 50, y: 90 },
  { id: 'qae', name: 'QA Engineer', x: 78, y: 90 },
]

export const agentEdges: [string, string][] = [
  ['pm', 'arch'],
  ['pm', 'eng'],
  ['pm', 'qa'],
  ['arch', 'sa'],
  ['arch', 'de'],
  ['eng', 'fe'],
  ['eng', 'be'],
  ['qa', 'cr'],
  ['qa', 'sec'],
  ['qa', 'wr'],
  ['arch', 'ux'],
  ['eng', 'do'],
  ['qa', 'qae'],
]
