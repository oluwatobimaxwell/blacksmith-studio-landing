import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Divider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { agents } from '../data/agents'
import { AgentCard } from './agent-card'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)
const MotionSimpleGrid = motion.create(SimpleGrid)

export function AgentTeamSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="agents" py={{ base: '4xl', md: '6xl' }} maxW="5xl" mx="auto" px="lg">
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
              Multi-Agent Team
            </Text>
          </MotionBox>
          <MotionBox
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '24px', md: '36px' }}
              textAlign="center"
              color="var(--studio-text-primary)"
              letterSpacing="-0.025em"
              fontWeight={700}
            >
              Your AI Development Team
            </Heading>
          </MotionBox>
          <MotionBox
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Text
              fontSize={{ base: '14px', md: '16px' }}
              textAlign="center"
              color="var(--studio-text-secondary)"
              maxW="xl"
              lineHeight={1.7}
            >
              Coordinated AI agents collaborate on a visual canvas — each with a
              specialized role, working together to plan, build, test, and ship
              your features.
            </Text>
          </MotionBox>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing="xl"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {agents.map((agent, index) => (
            <AgentCard key={agent.role} agent={agent} index={index} />
          ))}
        </MotionSimpleGrid>

        {/* Orchestrator connector */}
        <MotionBox
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
          }}
        >
          <Flex
            mt="3xl"
            align="center"
            justify="center"
            gap="lg"
          >
            <Divider
              borderColor="var(--studio-border)"
              borderStyle="dashed"
              flex={1}
              maxW="120px"
            />
            <Badge
              px="lg"
              py="xs"
              borderRadius="full"
              bg="var(--studio-brand-green-subtle)"
              color="var(--studio-brand-green)"
              fontSize="12px"
              fontWeight={600}
              borderWidth="1px"
              borderColor="var(--studio-brand-green-border)"
              letterSpacing="wider"
              textTransform="uppercase"
              whiteSpace="nowrap"
            >
              Coordinated by Claude AI
            </Badge>
            <Divider
              borderColor="var(--studio-border)"
              borderStyle="dashed"
              flex={1}
              maxW="120px"
            />
          </Flex>
        </MotionBox>
      </MotionBox>
    </Box>
  )
}
