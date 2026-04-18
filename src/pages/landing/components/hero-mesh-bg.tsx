import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'

const VIEW_W = 1400
const VIEW_H = 900
const VANISH_X = 700
const VANISH_Y = 405
const VIEWER_Y = 900
const Z_STEPS = 26
const COL_HALF = 11
const COL_SPACING = 150
const DOT_VISIBLE_MIN_Y = 540

type GridLine = { x1: number; y1: number; x2: number; y2: number; alpha: number }
type GridDot = { cx: number; cy: number; delay: number }

function buildMesh() {
  const horizontals: GridLine[] = []
  const verticals: GridLine[] = []
  const dots: GridDot[] = []
  const floorSpan = VIEWER_Y - VANISH_Y

  for (let z = 1; z <= Z_STEPS; z++) {
    const y = VANISH_Y + floorSpan / z
    const nearness = Math.pow(1 - (z - 1) / (Z_STEPS - 1), 2.2)
    const alpha = 0.1 + 0.12 * nearness
    horizontals.push({ x1: -200, y1: y, x2: VIEW_W + 200, y2: y, alpha })
  }

  for (let col = -COL_HALF; col <= COL_HALF; col++) {
    const bottomX = VANISH_X + col * COL_SPACING
    const centerness = 1 - Math.min(Math.abs(col) / COL_HALF, 1)
    const alpha = 0.1 + 0.1 * centerness
    verticals.push({ x1: VANISH_X, y1: VANISH_Y, x2: bottomX, y2: VIEWER_Y, alpha })
  }

  let dotIndex = 0
  for (let z = 1; z <= Z_STEPS; z++) {
    const y = VANISH_Y + floorSpan / z
    if (y < DOT_VISIBLE_MIN_Y) continue
    const t = (y - VANISH_Y) / floorSpan
    for (let col = -COL_HALF; col <= COL_HALF; col++) {
      const bottomX = VANISH_X + col * COL_SPACING
      const x = VANISH_X + t * (bottomX - VANISH_X)
      if (x < -20 || x > VIEW_W + 20) continue
      dots.push({ cx: x, cy: y, delay: (dotIndex % 9) * 0.25 })
      dotIndex++
    }
  }

  return { horizontals, verticals, dots }
}

export function HeroMeshBg() {
  const { horizontals, verticals, dots } = useMemo(buildMesh, [])

  return (
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      aria-hidden
      sx={{
        maskImage:
          'radial-gradient(ellipse 90% 80% at 50% 60%, black 20%, transparent 80%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 90% 80% at 50% 60%, black 20%, transparent 80%)',
      }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      >
        <g style={{ animation: 'meshFlow 8s ease-in-out infinite' }}>
          {horizontals.map((l, i) => (
            <line
              key={`h${i}`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={`rgba(45,212,168,${l.alpha})`}
              strokeWidth={1}
            />
          ))}
        </g>
        <g>
          {verticals.map((l, i) => (
            <line
              key={`v${i}`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={`rgba(45,212,168,${l.alpha})`}
              strokeWidth={1}
            />
          ))}
        </g>
        <g style={{ animation: 'meshFlow 8s ease-in-out infinite' }}>
          {dots.map((d, i) => (
            <circle
              key={`d${i}`}
              cx={d.cx}
              cy={d.cy}
              r={1.5}
              fill="rgba(45,212,168,0.5)"
              style={{
                animation: `meshDotPulse 3.6s ease-in-out ${d.delay}s infinite`,
                filter: 'drop-shadow(0 0 4px rgba(45,212,168,0.4))',
              }}
            />
          ))}
        </g>
      </svg>
    </Box>
  )
}
