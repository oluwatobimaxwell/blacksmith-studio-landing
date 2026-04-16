import { Box, Flex, VStack, HStack, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { walkthroughFeatures } from '../data/walkthrough-features'
import { FeatureScreenshot } from './feature-screenshot'
import { useScrollProgress } from '../hooks/use-scroll-progress'

const MotionBox = motion.create(Box)

// Each feature occupies 100vh of scroll distance, +1 extra for the last one to dwell
const SECTION_HEIGHT = `${(walkthroughFeatures.length + 1) * 100}vh`

interface FeatureItemProps {
  label: string
  index: number
  activeIndex: number
  onClick: (i: number) => void
}

function FeatureItem({ label, index, activeIndex, onClick }: FeatureItemProps) {
  const isActive = index === activeIndex
  const isPast = index < activeIndex

  return (
    <HStack
      spacing={3}
      cursor="pointer"
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(index)}
      aria-pressed={isActive}
      transition="opacity 0.3s ease"
      opacity={isActive ? 1 : isPast ? 0.35 : 0.35}
      _hover={{ opacity: isActive ? 1 : 0.65 }}
      align="center"
    >
      {/* Step indicator */}
      <Flex
        w="22px"
        h="22px"
        borderRadius="full"
        align="center"
        justify="center"
        flexShrink={0}
        borderWidth="1px"
        borderColor={isActive ? 'var(--studio-landing-text-accent)' : isPast ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-border)'}
        bg={isPast ? 'var(--studio-landing-text-accent)' : 'transparent'}
        transition="all 0.3s ease"
      >
        {isPast
          ? <Check size={11} color="#000" strokeWidth={3} />
          : <Text fontSize="10px" fontWeight={700} color={isActive ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-text-muted)'}>
              {String(index + 1).padStart(2, '0')}
            </Text>
        }
      </Flex>

      <Text
        fontSize={{ base: '14px', md: '15px' }}
        fontWeight={isActive ? 600 : 400}
        color={isActive ? 'var(--studio-landing-text-primary)' : 'var(--studio-landing-text-muted)'}
        transition="all 0.3s ease"
        lineHeight={1}
      >
        {label}
      </Text>
    </HStack>
  )
}

export function FeatureWalkthroughSection() {
  const { sectionRef, activeIndex } = useScrollProgress(walkthroughFeatures.length)
  const feature = walkthroughFeatures[activeIndex]

  const scrollToFeature = (index: number) => {
    const el = sectionRef.current
    if (!el) return
    const totalScrollable = el.offsetHeight - window.innerHeight
    const targetScroll = el.offsetTop + (totalScrollable * index) / walkthroughFeatures.length
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    <Box
      as="section"
      id="features"
      ref={sectionRef}
      height={SECTION_HEIGHT}
      position="relative"
    >
      {/* Sticky viewport */}
      <Box position="sticky" top={0} height="100vh" overflow="hidden">

        {/* Top fade from hero */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          h="1px"
          background="linear-gradient(90deg, transparent, var(--studio-landing-border), transparent)"
          pointerEvents="none"
          zIndex={1}
        />

        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 5, md: 10 }}
          height="100%"
          align="center"
          gap={{ base: 8, lg: 16 }}
          direction={{ base: 'column', md: 'row' }}
          pt={{ base: '80px', md: 0 }}
        >

          {/* ── Left panel ────────────────────────────────────── */}
          <VStack
            align="start"
            spacing={0}
            w={{ base: 'full', md: '42%' }}
            flexShrink={0}
          >
            <Text
              fontSize="12px"
              fontWeight={500}
              color="var(--studio-landing-text-accent)"
              letterSpacing="0.08em"
              textTransform="uppercase"
              mb={8}
            >
              Features
            </Text>

            {/* Feature nav */}
            <VStack align="start" spacing={5} mb={10} w="full">
              {walkthroughFeatures.map((f, i) => (
                <FeatureItem
                  key={f.id}
                  label={f.label}
                  index={i}
                  activeIndex={activeIndex}
                  onClick={scrollToFeature}
                />
              ))}
            </VStack>

            {/* Active feature text */}
            <Box overflow="hidden">
              <MotionBox
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: '24px', md: '28px', lg: '34px' }}
                  fontWeight={600}
                  color="var(--studio-landing-text-primary)"
                  letterSpacing="-0.03em"
                  lineHeight={1.15}
                  mb={4}
                >
                  {feature.headline}
                </Heading>
                <Text
                  fontSize={{ base: '14px', md: '15px' }}
                  color="var(--studio-landing-text-secondary)"
                  lineHeight={1.75}
                  mb={6}
                >
                  {feature.description}
                </Text>
                <VStack align="start" spacing={2.5}>
                  {feature.bullets.map((bullet) => (
                    <HStack key={bullet} spacing={3} align="start">
                      <Box
                        w="16px"
                        h="16px"
                        borderRadius="full"
                        bg="rgba(45,212,168,0.12)"
                        borderWidth="1px"
                        borderColor="rgba(45,212,168,0.3)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                        mt="1px"
                      >
                        <Check size={9} color="#2dd4a8" strokeWidth={3} />
                      </Box>
                      <Text fontSize="13px" color="var(--studio-landing-text-secondary)" lineHeight={1.5}>
                        {bullet}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </MotionBox>
            </Box>
          </VStack>

          {/* ── Right panel — screenshot ───────────────────────── */}
          <Box flex={1} w="full" display={{ base: 'none', md: 'block' }}>
            <FeatureScreenshot feature={feature} />
          </Box>

        </Flex>
      </Box>
    </Box>
  )
}
