import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'
import { heroGraphNodes, heroGraphEdges } from '../data/hero-graph'

const WIDTH = 1200
const HEIGHT = 800

export function HeroGraphBg() {
  const nodes = useMemo(() => heroGraphNodes, [])
  const edges = useMemo(
    () =>
      heroGraphEdges
        .map((e) => {
          const from = nodes.find((n) => n.id === e.from)
          const to = nodes.find((n) => n.id === e.to)
          return from && to ? { from, to, key: `${e.from}-${e.to}` } : null
        })
        .filter((e): e is NonNullable<typeof e> => e !== null),
    [nodes],
  )

  return (
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      aria-hidden
      sx={{
        maskImage:
          'radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 85%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 85%)',
      }}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      >
        <g>
          {edges.map((edge) => (
            <line
              key={edge.key}
              x1={edge.from.x}
              y1={edge.from.y}
              x2={edge.to.x}
              y2={edge.to.y}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth={1}
            />
          ))}
        </g>
        <g>
          {nodes.map((n, i) => (
            <circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={n.hub ? 4 : 2.2}
              fill={n.hub ? 'rgba(45,212,168,0.85)' : 'rgba(255,255,255,0.55)'}
              style={
                n.hub
                  ? {
                      animation: `graphPulse 3.6s ease-in-out ${i * 0.4}s infinite`,
                      filter: 'drop-shadow(0 0 6px rgba(45,212,168,0.55))',
                    }
                  : undefined
              }
            />
          ))}
        </g>
      </svg>
    </Box>
  )
}
