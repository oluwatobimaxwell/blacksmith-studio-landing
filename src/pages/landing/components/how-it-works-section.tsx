import { Box, VStack, Heading, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { steps } from '../data/how-it-works'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function HowItWorksSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="how-it-works" py={{ base: '80px', md: '120px' }} maxW="5xl" mx="auto" px={{ base: 5, md: 8 }}>
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
              How It Works
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
              Three steps to shipping
            </Heading>
          </MotionBox>
        </VStack>

        {/* Horizontal timeline */}
        <MotionBox variants={itemVariants}>
          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', md: '1fr auto 1fr auto 1fr' }}
            gap={{ base: 4, md: 0 }}
            alignItems="stretch"
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <>
                  {/* Step card */}
                  <Box
                    key={step.step}
                    p={{ base: 6, md: 7 }}
                    borderRadius="xl"
                    bg="var(--studio-surface)"
                    borderWidth="1px"
                    borderColor="var(--studio-border)"
                    _hover={{ borderColor: 'var(--studio-border-hover)' }}
                    transition="border-color 0.2s"
                  >
                    <VStack align="start" spacing={4}>
                      <Flex align="center" gap={3}>
                        <Flex
                          w="36px"
                          h="36px"
                          align="center"
                          justify="center"
                          borderRadius="full"
                          bg="var(--studio-brand-green-subtle)"
                          color="var(--studio-brand-green)"
                          borderWidth="1px"
                          borderColor="var(--studio-brand-green-border)"
                          flexShrink={0}
                        >
                          <Icon size={16} />
                        </Flex>
                        <Text
                          fontSize="11px"
                          fontWeight={600}
                          color="var(--studio-brand-green)"
                          letterSpacing="0.08em"
                          textTransform="uppercase"
                        >
                          Step {step.step}
                        </Text>
                      </Flex>
                      <VStack align="start" spacing={2}>
                        <Heading
                          as="h3"
                          fontSize="17px"
                          fontWeight={600}
                          color="var(--studio-text-primary)"
                          letterSpacing="-0.02em"
                        >
                          {step.title}
                        </Heading>
                        <Text fontSize="14px" color="var(--studio-text-secondary)" lineHeight={1.7}>
                          {step.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>

                  {/* Arrow connector — desktop only */}
                  {i < steps.length - 1 && (
                    <Flex
                      key={`arrow-${i}`}
                      display={{ base: 'none', md: 'flex' }}
                      align="center"
                      justify="center"
                      px={3}
                      color="var(--studio-brand-green)"
                      opacity={0.4}
                    >
                      <ArrowRight size={18} />
                    </Flex>
                  )}
                </>
              )
            })}
          </Box>
        </MotionBox>
      </MotionBox>
    </Box>
  )
}
