import { Box } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { graphifyNodes, graphifyEdges, GROUP_COLORS } from '../data/graphify-demo'

const VIEW_W = 720
const VIEW_H = 520

export function GraphifyGraph() {
  const [hovered, setHovered] = useState<string | null>(null)

  const neighbors = useMemo(() => {
    const map: Record<string, Set<string>> = {}
    graphifyEdges.forEach((e) => {
      const fromSet = (map[e.from] ||= new Set())
      const toSet = (map[e.to] ||= new Set())
      fromSet.add(e.to)
      toSet.add(e.from)
    })
    return map
  }, [])

  const isDimmed = (id: string) =>
    hovered !== null && hovered !== id && !(neighbors[hovered]?.has(id) ?? false)

  const isEdgeDimmed = (from: string, to: string) =>
    hovered !== null && hovered !== from && hovered !== to

  return (
    <Box
      w="full"
      position="relative"
      borderRadius="16px"
      overflow="hidden"
      bg="radial-gradient(ellipse at 50% 50%, rgba(45,212,168,0.06), transparent 70%)"
      borderWidth="1px"
      borderColor="var(--studio-landing-border)"
      aspectRatio={{ base: '4 / 3', md: '16 / 11' }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        width="100%"
        height="100%"
        role="img"
        aria-label="Interactive knowledge graph of the Blacksmith Studio codebase"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(45,212,168,0.7)" />
            <stop offset="100%" stopColor="rgba(45,212,168,0)" />
          </radialGradient>
        </defs>

        <g>
          {graphifyEdges.map((e) => {
            const from = graphifyNodes.find((n) => n.id === e.from)!
            const to = graphifyNodes.find((n) => n.id === e.to)!
            const dimmed = isEdgeDimmed(e.from, e.to)
            const highlighted =
              hovered !== null && (hovered === e.from || hovered === e.to)
            return (
              <line
                key={`${e.from}-${e.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={highlighted ? 'rgba(45,212,168,0.7)' : 'rgba(255,255,255,0.18)'}
                strokeWidth={highlighted ? 1.5 : 1}
                style={{
                  transition: 'stroke 0.2s ease, opacity 0.2s ease',
                  opacity: dimmed ? 0.15 : 1,
                }}
              />
            )
          })}
        </g>

        <g>
          {graphifyNodes.map((n) => {
            const dimmed = isDimmed(n.id)
            const hoveredThis = hovered === n.id
            const color = GROUP_COLORS[n.group]
            return (
              <g
                key={n.id}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(n.id)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                style={{
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                  opacity: dimmed ? 0.25 : 1,
                  outline: 'none',
                }}
              >
                {hoveredThis && (
                  <circle cx={n.x} cy={n.y} r={18} fill="url(#glow)" />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={hoveredThis ? 7 : 5}
                  fill={color}
                  stroke="rgba(0,0,0,0.5)"
                  strokeWidth={1}
                  style={{ transition: 'r 0.15s ease' }}
                />
                {hoveredThis && (
                  <g>
                    <rect
                      x={n.x + 12}
                      y={n.y - 14}
                      width={n.label.length * 6.6 + 14}
                      height={22}
                      rx={6}
                      ry={6}
                      fill="rgba(0,0,0,0.85)"
                      stroke="rgba(45,212,168,0.4)"
                    />
                    <text
                      x={n.x + 19}
                      y={n.y + 1}
                      fontSize={11}
                      fontFamily="SF Mono, monospace"
                      fill="rgba(255,255,255,0.9)"
                      dominantBaseline="middle"
                    >
                      {n.label}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </g>
      </svg>

      <Box
        position="absolute"
        top={3}
        right={3}
        px={2.5}
        py={1}
        borderRadius="full"
        bg="rgba(0,0,0,0.6)"
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.08)"
        backdropFilter="blur(6px)"
      >
        <Box
          as="span"
          fontSize="10px"
          fontFamily="mono"
          color="rgba(255,255,255,0.55)"
          letterSpacing="0.04em"
        >
          {graphifyNodes.length} files &middot; {graphifyEdges.length} edges
        </Box>
      </Box>
    </Box>
  )
}
