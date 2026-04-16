import { Box, Flex, VStack, Heading, Text, Button } from '@chakra-ui/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef } from 'react'
import { walkthroughFeatures, type WalkthroughFeature } from '../data/walkthrough-features'
import { FeatureScreenshot } from './feature-screenshot'
import { useScrollProgress } from '../hooks/use-scroll-progress'

const MotionBox = motion.create(Box)

const SECTION_HEIGHT = `${(walkthroughFeatures.length + 1) * 100}vh`
const CINEMATIC_EASE = [0.25, 0.46, 0.45, 0.94] as const

// ─── Dot Nav ─────────────────────────────────────────────────────────────────

interface FeatureDotNavProps {
  activeIndex: number
  features: WalkthroughFeature[]
  onSelect: (i: number) => void
}

function FeatureDotNav({ activeIndex, features, onSelect }: FeatureDotNavProps) {
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      const next = Math.min(index + 1, features.length - 1)
      onSelect(next)
      dotRefs.current[next]?.focus()
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = Math.max(index - 1, 0)
      onSelect(prev)
      dotRefs.current[prev]?.focus()
    }
  }

  return (
    <Box
      as="nav"
      aria-label="Feature navigation"
      position="absolute"
      right={{ base: 4, md: 8 }}
      top="50%"
      transform="translateY(-50%)"
      display={{ base: 'none', md: 'flex' }}
      flexDirection="column"
      alignItems="center"
      gap={4}
      zIndex={10}
    >
      {features.map((feature, i) => {
        const isActive = i === activeIndex
        return (
          <Button
            key={feature.id}
            ref={(el) => { dotRefs.current[i] = el }}
            variant="unstyled"
            aria-label={feature.label}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            display="block"
            w="8px"
            h={isActive ? '24px' : '8px'}
            minW={0}
            minH={0}
            p={0}
            borderRadius={isActive ? '4px' : 'full'}
            bg={isActive ? '#2dd4a8' : 'rgba(255,255,255,0.2)'}
            boxShadow={isActive ? '0 0 12px rgba(45,212,168,0.3)' : 'none'}
            transition="all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            _hover={{ bg: isActive ? '#2dd4a8' : 'rgba(255,255,255,0.4)' }}
            _focusVisible={{ boxShadow: '0 0 0 2px rgba(45,212,168,0.4)', outline: 'none' }}
          />
        )
      })}
    </Box>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function FeatureWalkthroughSection() {
  const { sectionRef, activeIndex, totalProgress } = useScrollProgress(walkthroughFeatures.length)
  const feature = walkthroughFeatures[activeIndex] ?? walkthroughFeatures[0]!
  const prefersReducedMotion = useReducedMotion()

  const scrollToFeature = (index: number) => {
    const el = sectionRef.current
    if (!el) return
    const totalScrollable = el.offsetHeight - window.innerHeight
    const targetScroll = el.offsetTop + (totalScrollable * index) / walkthroughFeatures.length
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  const slideMotionProps = {
    initial: prefersReducedMotion ? { opacity: 0 } : { x: '100%', opacity: 0 },
    animate: prefersReducedMotion ? { opacity: 1 } : { x: 0, opacity: 1 },
    exit: prefersReducedMotion ? { opacity: 0 } : { x: '-100%', opacity: 0 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: CINEMATIC_EASE },
  }

  const textEnter = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
  const textExit = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -24 }
  const textTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: CINEMATIC_EASE }

  return (
    <Box
      as="section"
      id="features"
      aria-label="Features walkthrough"
      ref={sectionRef}
      height={SECTION_HEIGHT}
      position="relative"
    >
      <Box position="sticky" top={0} height="100vh" overflow="hidden">

        {/* Progress bar */}
        <Box
          position="absolute"
          top={0}
          left={0}
          h="2px"
          w={`${totalProgress * 100}%`}
          bg="var(--studio-landing-text-accent)"
          boxShadow="0 0 12px rgba(45,212,168,0.4)"
          transition="width 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"
          zIndex={10}
          role="progressbar"
          aria-valuenow={Math.round(totalProgress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <Flex
          maxW="1280px"
          mx="auto"
          px={{ base: 5, md: 10 }}
          height="100%"
          align="center"
          gap={{ base: 8, md: 12 }}
          direction={{ base: 'column', md: 'row' }}
          pt={{ base: '80px', md: 0 }}
          position="relative"
        >
          {/* Left text panel — 38% width */}
          <Box
            w={{ base: 'full', md: '38%' }}
            flexShrink={0}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            position="relative"
            zIndex={2}
          >
            <Text
              fontSize="13px"
              fontWeight={500}
              letterSpacing="0.03em"
              textTransform="uppercase"
              color="var(--studio-landing-text-accent)"
              mb={6}
              lineHeight={1.4}
            >
              Features
            </Text>

            <Box overflow="hidden">
              <AnimatePresence mode="wait">
                <MotionBox
                  key={feature.id}
                  initial={textEnter}
                  animate={{ opacity: 1, y: 0 }}
                  exit={textExit}
                  transition={textTransition}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: '24px', md: '28px', lg: '36px' }}
                    fontWeight={600}
                    lineHeight={1.15}
                    letterSpacing="-0.03em"
                    color="var(--studio-landing-text-primary)"
                    mb={4}
                  >
                    {feature.headline}
                  </Heading>

                  <Text
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight={1.75}
                    color="var(--studio-landing-text-secondary)"
                    mb={8}
                    maxW="380px"
                  >
                    {feature.description}
                  </Text>

                  <VStack align="start" spacing={3}>
                    {feature.bullets.map((bullet) => (
                      <Flex key={bullet} gap={3} align="flex-start">
                        <Box
                          w="16px"
                          h="16px"
                          borderRadius="full"
                          bg="var(--studio-brand-green-subtle)"
                          borderWidth="1px"
                          borderColor="var(--studio-brand-green-border)"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          mt="1px"
                        >
                          <Check size={9} color="#2dd4a8" strokeWidth={3} />
                        </Box>
                        <Text
                          fontSize="13px"
                          color="var(--studio-landing-text-secondary)"
                          lineHeight={1.5}
                        >
                          {bullet}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                </MotionBox>
              </AnimatePresence>
            </Box>
          </Box>

          {/* Right screenshot panel */}
          <Box flex={1} overflow="hidden" position="relative" minH={0}>
            <FeatureScreenshot feature={feature} motionProps={slideMotionProps} />
          </Box>

          {/* Dot nav — absolutely positioned within the Flex */}
          <FeatureDotNav
            activeIndex={activeIndex}
            features={walkthroughFeatures}
            onSelect={scrollToFeature}
          />
        </Flex>
      </Box>
    </Box>
  )
}
