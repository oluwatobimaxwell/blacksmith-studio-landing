import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { heroFeatures, supportFeatures } from '../data/features'
import { FeatureCard } from './feature-card'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturesSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="features" py={{ base: '80px', md: '120px' }} maxW="5xl" mx="auto" px={{ base: 5, md: 8 }}>
      <MotionBox ref={ref} initial="hidden" animate={controls} variants={sectionVariants}>
        <VStack spacing={3} mb={14} align="center">
          <MotionBox variants={itemVariants}>
            <Text
              fontSize="12px"
              fontWeight={500}
              color="var(--studio-brand-green)"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Features
            </Text>
          </MotionBox>
          <MotionBox variants={itemVariants}>
            <Heading
              as="h2"
              fontSize={{ base: '32px', md: '48px' }}
              fontWeight={600}
              textAlign="center"
              color="var(--studio-text-primary)"
              letterSpacing="-0.03em"
              lineHeight={1.1}
            >
              One workspace.
              <br />
              Every tool you need.
            </Heading>
          </MotionBox>
          <MotionBox variants={itemVariants}>
            <Text
              fontSize={{ base: '15px', md: '17px' }}
              textAlign="center"
              color="var(--studio-text-secondary)"
              maxW="lg"
              lineHeight={1.7}
            >
              AI chat, multi-agent canvas, terminal, code editor, git, and dev services — all integrated. No plugins. No configuration. No context switching.
            </Text>
          </MotionBox>
        </VStack>

        {/* Bento grid */}
        <MotionBox variants={itemVariants}>
          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={4}
          >
            {/* Hero features — first spans 2 cols */}
            <Box gridColumn={{ md: 'span 2' }}>
              <FeatureCard feature={heroFeatures[0]} featured />
            </Box>
            <Box>
              <FeatureCard feature={heroFeatures[1]} featured />
            </Box>

            {/* Support features — 3 per row */}
            {supportFeatures.map((feature) => (
              <Box key={feature.title}>
                <FeatureCard feature={feature} />
              </Box>
            ))}
          </Box>
        </MotionBox>
      </MotionBox>
    </Box>
  )
}
