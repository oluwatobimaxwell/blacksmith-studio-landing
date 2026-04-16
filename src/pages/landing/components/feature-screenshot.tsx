import { Box, HStack, Image, Text } from '@chakra-ui/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { AnimationProps } from 'framer-motion'
import type { WalkthroughFeature } from '../data/walkthrough-features'

type MotionConfig = Pick<AnimationProps, 'initial' | 'animate' | 'exit' | 'transition'>

const MotionBox = motion.create(Box)

// ─── Shared window chrome ────────────────────────────────────────────────────

function WindowChrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box
      position="relative"
      zIndex={1}
      borderRadius="16px"
      overflow="hidden"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.08)"
      bg="var(--walkthrough-window-bg)"
      boxShadow="var(--walkthrough-window-glow-shadow)"
      transition="box-shadow 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      _groupHover={{
        boxShadow: 'var(--walkthrough-window-glow-shadow-hover)',
        borderColor: 'rgba(255,255,255,0.09)',
      }}
    >
      {/* Title bar */}
      <HStack
        px={4}
        h="40px"
        borderBottom="1px solid var(--walkthrough-titlebar-border)"
        bg="var(--walkthrough-titlebar-bg)"
        spacing={3}
        flexShrink={0}
        aria-hidden="true"
      >
        <HStack spacing={1.5}>
          <Box
            w="11px" h="11px" borderRadius="full" bg="#ef5350" opacity={0.8}
            transition="opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            _groupHover={{ opacity: 1 }}
          />
          <Box
            w="11px" h="11px" borderRadius="full" bg="#ffa726" opacity={0.8}
            transition="opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            _groupHover={{ opacity: 1 }}
          />
          <Box
            w="11px" h="11px" borderRadius="full" bg="#2dd4a8" opacity={0.8}
            transition="opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            _groupHover={{ opacity: 1 }}
          />
        </HStack>
        <Text
          fontSize="12px"
          fontFamily="mono"
          color="rgba(255,255,255,0.3)"
          flex={1}
          textAlign="center"
          transition="color 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          _groupHover={{ color: 'rgba(255,255,255,0.35)' }}
        >
          {title}
        </Text>
        <Box w="48px" />
      </HStack>

      {children}
    </Box>
  )
}

// ─── Window body with image + edge gradients ─────────────────────────────────

function WindowBody({ feature }: { feature: WalkthroughFeature }) {
  return (
    <Box
      position="relative"
      w="100%"
      sx={{ aspectRatio: '16 / 9' }}
      overflow="hidden"
      bg="#111111"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        zIndex: 3,
        pointerEvents: 'none',
      }}
    >
      {/* TODO: Replace .svg placeholders with production .webp screenshots */}
      <Image
        src={`/assets/screenshots/${feature.id}.svg`}
        alt={`${feature.label} feature — ${feature.headline}`}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="top left"
        loading="lazy"
        decoding="async"
        transition="transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        _groupHover={{ transform: 'scale(1.005)' }}
      />

      {/* Edge gradient — bottom */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="40%"
        background="linear-gradient(to top, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.12) 40%, transparent 100%)"
        pointerEvents="none"
        zIndex={2}
        aria-hidden="true"
      />

      {/* Edge gradient — horizontal vignette */}
      <Box
        position="absolute"
        inset={0}
        background="linear-gradient(to right, var(--studio-landing-bg) 0%, transparent 12%, transparent 88%, var(--studio-landing-bg) 100%)"
        pointerEvents="none"
        zIndex={2}
        aria-hidden="true"
      />
    </Box>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

const titleMap: Record<string, string> = {
  canvas: 'Blacksmith Studio — Multi-Agent Canvas',
  chat: 'Blacksmith Studio — AI Chat',
  editor: 'Blacksmith Studio — Code Editor',
  terminal: 'Blacksmith Studio — Terminal',
  git: 'Blacksmith Studio — Git',
}

interface FeatureScreenshotProps {
  feature: WalkthroughFeature
  motionProps?: Partial<MotionConfig>
}

export function FeatureScreenshot({ feature, motionProps }: FeatureScreenshotProps) {
  const prefersReducedMotion = useReducedMotion()

  const initial = motionProps?.initial ?? (prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.99 })
  const animate = motionProps?.animate ?? { opacity: 1, y: 0, scale: 1 }
  const exit = motionProps?.exit ?? (prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.99 })
  const transition = motionProps?.transition ?? (prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] })

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={feature.id}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {/* GlowWrap — ambient glow + hover group */}
        <Box
          position="relative"
          role="group"
          _before={{
            content: '""',
            position: 'absolute',
            inset: '-80px -40px',
            background: 'radial-gradient(ellipse 70% 60% at 50% 55%, var(--walkthrough-glow-color) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'background 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          _hover={{
            _before: {
              background: 'radial-gradient(ellipse 70% 60% at 50% 55%, var(--walkthrough-glow-color-hover) 0%, transparent 70%)',
            },
          }}
        >
          <WindowChrome title={titleMap[feature.id] ?? `Blacksmith Studio — ${feature.label}`}>
            <WindowBody feature={feature} />
          </WindowChrome>
        </Box>
      </MotionBox>
    </AnimatePresence>
  )
}
