import { Box, VStack, Heading, Text, HStack, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { steps } from '../data/how-it-works'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function HowItWorksSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" py={{ base: '4xl', md: '6xl' }} maxW="4xl" mx="auto" px="lg">
      <MotionBox
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <VStack spacing="lg" mb="3xl">
          <MotionBox variants={itemVariants}>
            <Text textStyle="label" color="var(--studio-brand-green)">
              How It Works
            </Text>
          </MotionBox>
          <MotionBox variants={itemVariants}>
            <Heading
              as="h2"
              fontSize={{ base: '24px', md: '36px' }}
              textAlign="center"
              color="var(--studio-text-primary)"
              letterSpacing="-0.025em"
              fontWeight={700}
            >
              Three steps to shipping
            </Heading>
          </MotionBox>
        </VStack>

        <VStack spacing="xl" align="stretch">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <MotionBox key={step.step} variants={itemVariants}>
                <HStack
                  spacing="xl"
                  p="xl"
                  borderRadius="xl"
                  bg="var(--studio-surface)"
                  borderWidth="1px"
                  borderColor="var(--studio-border)"
                  align="start"
                >
                  <Flex
                    minW="44px"
                    h="44px"
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="var(--studio-brand-green-subtle)"
                    color="var(--studio-brand-green)"
                    flexShrink={0}
                  >
                    <Icon size={20} />
                  </Flex>
                  <VStack align="start" spacing="xs">
                    <Text
                      fontSize="12px"
                      fontWeight={600}
                      color="var(--studio-brand-green)"
                      letterSpacing="wider"
                      textTransform="uppercase"
                    >
                      Step {step.step}
                    </Text>
                    <Heading
                      as="h3"
                      fontSize="17px"
                      fontWeight={600}
                      color="var(--studio-text-primary)"
                      letterSpacing="-0.01em"
                    >
                      {step.title}
                    </Heading>
                    <Text
                      fontSize="14px"
                      color="var(--studio-text-secondary)"
                      lineHeight={1.7}
                    >
                      {step.description}
                    </Text>
                  </VStack>
                </HStack>
              </MotionBox>
            )
          })}
        </VStack>
      </MotionBox>
    </Box>
  )
}
