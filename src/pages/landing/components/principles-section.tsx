import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { principles } from '../data/principles'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function PrinciplesSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box
      as="section"
      id="principles"
      aria-label="Principles"
      py={{ base: '100px', md: '140px' }}
      bg="var(--studio-landing-bg)"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="500px"
        h="1px"
        background="linear-gradient(90deg, transparent, var(--studio-landing-border), transparent)"
        pointerEvents="none"
        aria-hidden
      />

      <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <VStack spacing={4} mb={{ base: 10, md: 14 }} align="center" textAlign="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Principles
              </Text>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Heading
                as="h2"
                fontSize={{ base: '32px', md: '46px' }}
                fontWeight={600}
                color="var(--studio-landing-text-primary)"
                letterSpacing="-0.035em"
                lineHeight={1.05}
                maxW="680px"
              >
                Built for how developers actually work.
              </Heading>
            </MotionBox>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 8, md: 0 }}
            position="relative"
          >
            {principles.map((p, i) => (
              <MotionBox
                key={p.title}
                variants={itemVariants}
                px={{ base: 0, md: 8 }}
                borderLeftWidth={{ base: 0, md: i === 0 ? 0 : '1px' }}
                borderColor="var(--studio-landing-border)"
              >
                <VStack align="flex-start" spacing={4} maxW="320px">
                  <Heading
                    as="h3"
                    fontSize="22px"
                    fontWeight={600}
                    letterSpacing="-0.025em"
                    lineHeight={1.25}
                  >
                    <Text as="span" color="var(--studio-landing-text-accent)">
                      {p.firstWord}
                    </Text>
                    <Text as="span" color="var(--studio-landing-text-primary)">
                      {' '}
                      {p.title.replace(p.firstWord, '').trim()}
                    </Text>
                  </Heading>
                  <Text
                    fontSize="15px"
                    color="var(--studio-landing-text-secondary)"
                    lineHeight={1.7}
                  >
                    {p.body}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Box>
    </Box>
  )
}
