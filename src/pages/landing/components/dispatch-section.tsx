import { Box, Heading, Text, VStack, Flex, HStack, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { dispatchSteps } from '../data/dispatch-steps'
import { useActiveStep } from '../hooks/use-active-step'
import { DispatchStepVisual } from './dispatch-step-visual'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function DispatchSection() {
  const { setRef, activeIndex } = useActiveStep(dispatchSteps.length)
  const { ref, controls } = useScrollReveal()

  return (
    <Box
      as="section"
      id="dispatch"
      aria-label="How a dispatch works"
      py={{ base: '100px', md: '140px' }}
      bg="var(--studio-landing-bg)"
      position="relative"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <VStack spacing={4} mb={{ base: 12, md: 20 }} align="center" textAlign="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Multi-agent dispatch
              </Text>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Heading
                as="h2"
                fontSize={{ base: '34px', md: '52px' }}
                fontWeight={600}
                color="var(--studio-landing-text-primary)"
                letterSpacing="-0.035em"
                lineHeight={1.05}
                maxW="760px"
              >
                How a dispatch actually works.
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                color="var(--studio-landing-text-secondary)"
                maxW="540px"
                lineHeight={1.7}
              >
                One prompt, six steps, a whole team. Scroll to watch the pipeline run end-to-end.
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, lg: 16 }}
          alignItems="flex-start"
        >
          <Box>
            <VStack spacing={{ base: 8, md: 12 }} align="stretch">
              {dispatchSteps.map((step, i) => {
                const isActive = i === activeIndex
                return (
                  <Box
                    key={step.number}
                    ref={setRef(i)}
                    minH={{ base: 'auto', lg: '40vh' }}
                    py={{ base: 2, lg: 6 }}
                  >
                    <HStack align="flex-start" spacing={4}>
                      <Flex
                        w="32px"
                        h="32px"
                        borderRadius="full"
                        bg={isActive ? 'rgba(45,212,168,0.16)' : 'rgba(255,255,255,0.03)'}
                        borderWidth="1px"
                        borderColor={isActive ? 'rgba(45,212,168,0.4)' : 'rgba(255,255,255,0.08)'}
                        align="center"
                        justify="center"
                        flexShrink={0}
                        transition="all 0.3s ease"
                        mt="2px"
                      >
                        <Text
                          fontSize="13px"
                          fontWeight={600}
                          color={isActive ? '#2dd4a8' : 'rgba(255,255,255,0.5)'}
                          transition="color 0.3s ease"
                        >
                          {step.number}
                        </Text>
                      </Flex>
                      <VStack align="stretch" spacing={2} flex={1}>
                        <Heading
                          as="h3"
                          fontSize={{ base: '20px', md: '24px' }}
                          fontWeight={600}
                          color={isActive ? 'var(--studio-landing-text-primary)' : 'rgba(255,255,255,0.55)'}
                          letterSpacing="-0.025em"
                          lineHeight={1.2}
                          transition="color 0.3s ease"
                        >
                          {step.title}
                        </Heading>
                        <Text
                          fontSize={{ base: '14px', md: '15px' }}
                          color={isActive ? 'var(--studio-landing-text-secondary)' : 'rgba(255,255,255,0.3)'}
                          lineHeight={1.7}
                          transition="color 0.3s ease"
                        >
                          {step.body}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                )
              })}
            </VStack>
          </Box>

          <Box
            position={{ base: 'relative', lg: 'sticky' }}
            top={{ base: 'auto', lg: '120px' }}
            alignSelf="flex-start"
            display={{ base: 'none', lg: 'block' }}
          >
            <DispatchStepVisual step={activeIndex} />
          </Box>

          <Box display={{ base: 'block', lg: 'none' }}>
            <DispatchStepVisual step={activeIndex} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
