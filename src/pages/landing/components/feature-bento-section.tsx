import { Box, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { walkthroughFeatures } from '../data/walkthrough-features'
import { FeatureBentoTile } from './feature-bento-tile'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function FeatureBentoSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box
      as="section"
      id="features"
      aria-label="Features"
      py={{ base: '100px', md: '140px' }}
      position="relative"
      bg="var(--studio-landing-bg)"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={sectionVariants}>
          <VStack spacing={4} mb={{ base: 10, md: 14 }} align="center" textAlign="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Platform
              </Text>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Heading
                as="h2"
                fontSize={{ base: '34px', md: '52px' }}
                fontWeight={600}
                textAlign="center"
                color="var(--studio-landing-text-primary)"
                letterSpacing="-0.035em"
                lineHeight={1.05}
                maxW="760px"
              >
                Not just an AI chat window.
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                textAlign="center"
                color="var(--studio-landing-text-secondary)"
                maxW="580px"
                lineHeight={1.7}
              >
                Studio is a full IDE. Here&apos;s what comes in the box.
              </Text>
            </MotionBox>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={4}
          >
            {walkthroughFeatures.map((feature) => (
              <MotionBox key={feature.id} variants={itemVariants} h="full">
                <FeatureBentoTile feature={feature} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Box>
    </Box>
  )
}
