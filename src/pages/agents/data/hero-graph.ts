export interface HeroGraphNode {
  id: string
  x: number
  y: number
  tier?: 1 | 2 | 3
  primary?: boolean
  virtual?: boolean
  compact?: boolean
  ref?: string
  label?: string
}

export const heroGraphNodes: HeroGraphNode[] = [
  { id: 'pm', x: 50, y: 10, primary: true, tier: 1 },
  { id: 'arch', x: 18, y: 36, tier: 2, label: 'Architecture' },
  { id: 'eng', x: 50, y: 36, tier: 2, label: 'Engineering', virtual: true },
  { id: 'qa', x: 82, y: 36, tier: 2, label: 'Quality', virtual: true },
  { id: 'ux', x: 10, y: 62, compact: true },
  { id: 'arch2', x: 30, y: 62, ref: 'arch', compact: true },
  { id: 'de', x: 50, y: 62, compact: true },
  { id: 'be', x: 70, y: 62, compact: true },
  { id: 'fe', x: 90, y: 62, compact: true },
  { id: 'do', x: 10, y: 80, compact: true },
  { id: 'sec', x: 30, y: 80, compact: true },
  { id: 'cr', x: 50, y: 80, compact: true },
  { id: 'qae', x: 70, y: 80, compact: true },
  { id: 'wr', x: 90, y: 80, compact: true },
]

export const heroGraphEdges: Array<[string, string]> = [
  ['pm', 'arch'],
  ['pm', 'eng'],
  ['pm', 'qa'],
  ['arch', 'ux'],
  ['arch', 'arch2'],
  ['eng', 'de'],
  ['eng', 'be'],
  ['eng', 'fe'],
  ['eng', 'do'],
  ['qa', 'sec'],
  ['qa', 'cr'],
  ['qa', 'qae'],
  ['qa', 'wr'],
]
