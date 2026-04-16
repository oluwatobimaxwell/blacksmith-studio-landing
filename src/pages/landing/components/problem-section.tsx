import { Box, VStack, Heading, Text, HStack, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AlertTriangle, Layers, TestTube, Compass } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const painPoints = [
  {
    icon: Layers,
    title: 'Fragile structure',
    description: 'AI writes functions, not systems. Without an architect designing the approach first, the codebase collapses under its own weight.',
  },
  {
    icon: TestTube,
    title: 'Missing tests',
    description: 'QA is always an afterthought. When AI generates code at speed, nothing is tested until something breaks in production.',
  },
  {
    icon: Compass,
    title: 'No architecture',
    description: 'No one designed the system. Technical decisions get made ad hoc, and fixing them later costs more than building them right the first time.',
  },
]

export function ProblemSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="problem" py={{ base: '80px', md: '120px' }} position="relative">
      {/* Top border glow */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="600px"
        h="1px"
        background="linear-gradient(90deg, transparent, rgba(239,83,80,0.3), transparent)"
        pointerEvents="none"
      />

      <Box maxW="5xl" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={sectionVariants}>

          {/* Section label */}
          <MotionBox variants={itemVariants}>
            <Flex justify="center" mb={6}>
              <Flex
                align="center"
                gap={2}
                px={3}
                py={1}
                borderRadius="full"
                bg="rgba(239,83,80,0.08)"
                borderWidth="1px"
                borderColor="rgba(239,83,80,0.2)"
                display="inline-flex"
              >
                <AlertTriangle size={12} color="var(--studio-error)" />
                <Text fontSize="12px" fontWeight={500} color="var(--studio-error)" letterSpacing="0.04em">
                  The Problem
                </Text>
              </Flex>
            </Flex>
          </MotionBox>

          {/* Headline */}
          <MotionBox variants={itemVariants}>
            <VStack spacing={4} mb={16} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '32px', md: '52px' }}
                fontWeight={600}
                textAlign="center"
                color="var(--studio-text-primary)"
                letterSpacing="-0.035em"
                lineHeight={1.05}
              >
                AI builds fast.
                <br />
                Fast isn't the same as{' '}
                <Text as="span" color="var(--studio-error)">good.</Text>
              </Heading>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                textAlign="center"
                color="var(--studio-text-secondary)"
                maxW="2xl"
                lineHeight={1.7}
              >
                Most AI-generated code works in a demo. It passes a quick test. It looks impressive.
                But underneath it is fragile — poorly structured, difficult to maintain, impossible to scale.
                Engineers call this technical debt. When AI generates it at speed, we call it{' '}
                <Text as="span" color="var(--studio-text-primary)" fontWeight={500}>AI coding tech debt.</Text>
              </Text>
            </VStack>
          </MotionBox>

          {/* Pain points */}
          <MotionBox variants={itemVariants}>
            <Box
              display="grid"
              gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={4}
              mb={14}
            >
              {painPoints.map((point) => {
                const Icon = point.icon
                return (
                  <Box
                    key={point.title}
                    p={6}
                    borderRadius="xl"
                    bg="var(--studio-surface)"
                    borderWidth="1px"
                    borderColor="var(--studio-border)"
                    position="relative"
                    overflow="hidden"
                    _hover={{ borderColor: 'rgba(239,83,80,0.2)' }}
                    transition="border-color 0.2s"
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left="10%"
                      right="10%"
                      h="1px"
                      background="linear-gradient(90deg, transparent, rgba(239,83,80,0.25), transparent)"
                      pointerEvents="none"
                    />
                    <VStack align="start" spacing={4}>
                      <Box
                        p={2}
                        borderRadius="lg"
                        bg="rgba(239,83,80,0.08)"
                        color="var(--studio-error)"
                        borderWidth="1px"
                        borderColor="rgba(239,83,80,0.2)"
                      >
                        <Icon size={18} />
                      </Box>
                      <VStack align="start" spacing={2}>
                        <Heading
                          as="h3"
                          fontSize="15px"
                          fontWeight={600}
                          color="var(--studio-text-primary)"
                          letterSpacing="-0.02em"
                        >
                          {point.title}
                        </Heading>
                        <Text fontSize="13px" color="var(--studio-text-secondary)" lineHeight={1.7}>
                          {point.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                )
              })}
            </Box>
          </MotionBox>

          {/* Bridge to solution */}
          <MotionBox variants={itemVariants}>
            <Box
              p={{ base: 7, md: 10 }}
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              borderWidth="1px"
              borderColor="var(--studio-brand-green-border)"
              bg="var(--studio-brand-green-subtle)"
              textAlign="center"
            >
              <Box
                position="absolute"
                inset={0}
                background="radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,212,168,0.08), transparent)"
                pointerEvents="none"
              />
              <VStack spacing={3} position="relative">
                <Text
                  fontSize="12px"
                  fontWeight={600}
                  color="var(--studio-brand-green)"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  The Blacksmith Answer
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: '22px', md: '28px' }}
                  fontWeight={600}
                  color="var(--studio-text-primary)"
                  letterSpacing="-0.03em"
                  lineHeight={1.2}
                >
                  What if AI built software the way a senior engineering team would?
                </Heading>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  color="var(--studio-text-secondary)"
                  maxW="2xl"
                  lineHeight={1.7}
                >
                  Blacksmith Studio coordinates 11 specialized agents — architect, engineers, QA, security, reviewer — each doing their specific job, in the right order. The result is code structured for production, not just a demo. Blacksmith reduces AI coding tech debt by over 80%.
                </Text>
                <HStack spacing={6} pt={2} flexWrap="wrap" justify="center">
                  {['Architect first', 'Code reviewed', 'Tests written', 'Security checked'].map((item) => (
                    <HStack key={item} spacing={2}>
                      <Box w="5px" h="5px" borderRadius="full" bg="var(--studio-brand-green)" />
                      <Text fontSize="13px" color="var(--studio-text-secondary)" fontWeight={500}>{item}</Text>
                    </HStack>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </MotionBox>

        </MotionBox>
      </Box>
    </Box>
  )
}
