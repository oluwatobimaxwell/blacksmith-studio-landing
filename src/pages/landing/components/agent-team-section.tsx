import { Box, VStack, Heading, Text, HStack, Flex, Badge, Divider, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { agents } from '../data/agents'
import { AgentCard } from './agent-card'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AgentTeamSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="agents" py={{ base: '100px', md: '140px' }} position="relative" bg="var(--studio-landing-bg)">
      {/* Top separator */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="500px"
        h="1px"
        background="linear-gradient(90deg, transparent, var(--studio-landing-border), transparent)"
        pointerEvents="none"
      />

      <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={sectionVariants}>
          <VStack spacing={4} mb={16} align="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Multi-Agent Team
              </Text>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Heading
                as="h2"
                fontSize={{ base: '36px', md: '52px' }}
                fontWeight={600}
                textAlign="center"
                color="var(--studio-landing-text-primary)"
                letterSpacing="-0.035em"
                lineHeight={1.05}
              >
                11 agents. One team.
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                textAlign="center"
                color="var(--studio-landing-text-secondary)"
                maxW="xl"
                lineHeight={1.7}
              >
                Every agent operates at the level of a senior professional — doing their specific job, in the right order. Not AI making things up. A structured engineering process, automated.
              </Text>
            </MotionBox>
          </VStack>

          {/* Agent grid */}
          <MotionBox variants={itemVariants}>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={3}>
              {agents.map((agent) => (
                <AgentCard key={agent.role} agent={agent} />
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Orchestrator label */}
          <MotionBox variants={itemVariants}>
            <Flex mt={10} align="center" justify="center" gap={4}>
              <Divider borderColor="var(--studio-landing-border)" borderStyle="dashed" flex={1} maxW="100px" />
              <Badge
                px={4}
                py={1.5}
                borderRadius="full"
                bg="rgba(45,212,168,0.08)"
                color="var(--studio-landing-text-accent)"
                fontSize="11px"
                fontWeight={600}
                borderWidth="1px"
                borderColor="rgba(45,212,168,0.2)"
                letterSpacing="0.05em"
                textTransform="uppercase"
                whiteSpace="nowrap"
              >
                All coordinated by Claude AI
              </Badge>
              <Divider borderColor="var(--studio-landing-border)" borderStyle="dashed" flex={1} maxW="100px" />
            </Flex>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  )
}
