export interface GraphNode {
  id: string
  x: number
  y: number
  hub?: boolean
}

export interface GraphEdge {
  from: string
  to: string
}

export const heroGraphNodes: GraphNode[] = [
  { id: 'a', x: 220, y: 180, hub: true },
  { id: 'b', x: 320, y: 260 },
  { id: 'c', x: 180, y: 320 },
  { id: 'd', x: 400, y: 180 },
  { id: 'e', x: 500, y: 320, hub: true },
  { id: 'f', x: 420, y: 410 },
  { id: 'g', x: 600, y: 420 },
  { id: 'h', x: 720, y: 300 },
  { id: 'i', x: 820, y: 420, hub: true },
  { id: 'j', x: 940, y: 340 },
  { id: 'k', x: 900, y: 520 },
  { id: 'l', x: 1040, y: 460 },
  { id: 'm', x: 620, y: 580 },
  { id: 'n', x: 460, y: 620 },
  { id: 'o', x: 300, y: 560 },
  { id: 'p', x: 180, y: 480 },
  { id: 'q', x: 780, y: 640 },
  { id: 'r', x: 1080, y: 620, hub: true },
  { id: 's', x: 520, y: 160 },
  { id: 't', x: 700, y: 180 },
  { id: 'u', x: 860, y: 200 },
  { id: 'v', x: 1000, y: 220 },
  { id: 'w', x: 150, y: 640 },
  { id: 'x', x: 980, y: 120 },
  { id: 'y', x: 260, y: 420 },
  { id: 'z', x: 580, y: 470 },
]

export const heroGraphEdges: GraphEdge[] = [
  { from: 'a', to: 'b' },
  { from: 'a', to: 'c' },
  { from: 'a', to: 'd' },
  { from: 'b', to: 'e' },
  { from: 'c', to: 'y' },
  { from: 'd', to: 's' },
  { from: 's', to: 't' },
  { from: 't', to: 'u' },
  { from: 'u', to: 'v' },
  { from: 'v', to: 'x' },
  { from: 'e', to: 'f' },
  { from: 'e', to: 'g' },
  { from: 'e', to: 'h' },
  { from: 'h', to: 'i' },
  { from: 'h', to: 'u' },
  { from: 'i', to: 'j' },
  { from: 'i', to: 'k' },
  { from: 'i', to: 'l' },
  { from: 'j', to: 'v' },
  { from: 'k', to: 'r' },
  { from: 'l', to: 'r' },
  { from: 'g', to: 'z' },
  { from: 'z', to: 'm' },
  { from: 'm', to: 'q' },
  { from: 'q', to: 'r' },
  { from: 'm', to: 'n' },
  { from: 'n', to: 'o' },
  { from: 'o', to: 'p' },
  { from: 'p', to: 'w' },
  { from: 'w', to: 'o' },
  { from: 'f', to: 'z' },
  { from: 'y', to: 'f' },
  { from: 'y', to: 'p' },
  { from: 'c', to: 'p' },
]
