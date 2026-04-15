import { Box, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { heroFeatures, supportFeatures } from '../data/features'

const features = [...heroFeatures, ...supportFeatures]
import { FeatureCard } from './feature-card'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)
const MotionSimpleGrid = motion.create(SimpleGrid)

export function FeaturesSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="features" py={{ base: '4xl', md: '6xl' }} maxW="5xl" mx="auto" px="lg">
      <MotionBox
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <VStack spacing="lg" mb="3xl">
          <MotionBox
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Text textStyle="label" color="var(--studio-brand-green)">
              Features
            </Text>
          </MotionBox>
          <MotionBox
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Heading
              textStyle="heading"
              fontSize={{ base: '24px', md: '36px' }}
              textAlign="center"
              color="var(--studio-text-primary)"
              letterSpacing="-0.01em"
            >
              Everything you need, built in
            </Heading>
          </MotionBox>
          <MotionBox
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Text
              textStyle="body"
              fontSize={{ base: '14px', md: '16px' }}
              textAlign="center"
              color="var(--studio-text-secondary)"
              maxW="lg"
            >
              Eight integrated tools in one workspace — no plugins, no configuration,
              no context switching.
            </Text>
          </MotionBox>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="xl"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </MotionSimpleGrid>
      </MotionBox>
    </Box>
  )
}
