import { Box, Heading, Text, VStack, SimpleGrid, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'
import { GraphifyGraph } from './graphify-graph'

const MotionBox = motion.create(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function GraphifySection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box
      as="section"
      id="graphify"
      aria-label="Graphify"
      py={{ base: '100px', md: '140px' }}
      bg="var(--studio-landing-bg)"
      position="relative"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 14 }} alignItems="center">
            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={5} textAlign={{ base: 'center', lg: 'left' }}>
              <MotionBox variants={itemVariants}>
                <Text
                  fontSize="12px"
                  fontWeight={500}
                  color="var(--studio-landing-text-accent)"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  Graphify
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
                >
                  Your codebase has a shape.
                </Heading>
              </MotionBox>
              <MotionBox variants={itemVariants}>
                <Text
                  fontSize={{ base: '15px', md: '17px' }}
                  color="var(--studio-landing-text-secondary)"
                  lineHeight={1.75}
                  maxW="500px"
                >
                  Graphify builds a knowledge graph of every file, function, import, and relationship the moment you open a project. Agents use it as their map.
                </Text>
              </MotionBox>
              <MotionBox variants={itemVariants}>
                <Text
                  fontSize={{ base: '15px', md: '17px' }}
                  color="var(--studio-landing-text-secondary)"
                  lineHeight={1.75}
                  maxW="500px"
                >
                  It means the frontend agent doesn&apos;t Glob and Grep its way to a component &mdash; it jumps straight there. It means a rename propagates through the graph before a single file is touched. It means your project gets smarter the longer you use it.
                </Text>
              </MotionBox>
              <MotionBox variants={itemVariants}>
                <Flex
                  as="a"
                  href="#features"
                  align="center"
                  gap={2}
                  fontSize="14px"
                  color="var(--studio-landing-text-primary)"
                  fontWeight={500}
                  transition="gap 0.2s ease, color 0.15s ease"
                  _hover={{ color: '#2dd4a8', gap: 3 }}
                  cursor="pointer"
                  width="fit-content"
                >
                  See how it works
                  <ArrowRight size={14} />
                </Flex>
              </MotionBox>
            </VStack>

            <MotionBox variants={itemVariants}>
              <GraphifyGraph />
            </MotionBox>
          </SimpleGrid>
        </MotionBox>
      </Box>
    </Box>
  )
}
