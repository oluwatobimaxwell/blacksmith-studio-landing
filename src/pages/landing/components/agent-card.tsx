import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { AgentItem } from '../data/agents'

const MotionBox = motion.create(Box)

interface AgentCardProps {
  agent: AgentItem
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function AgentCard({ agent }: AgentCardProps) {
  const Icon = agent.icon

  return (
    <MotionBox
      variants={cardVariants}
      p="xl"
      borderRadius="xl"
      bg="var(--studio-surface)"
      borderWidth="1px"
      borderColor="var(--studio-border)"
      textAlign="center"
      css={{ transition: 'all 0.2s' }}
      _hover={{
        borderColor: 'var(--studio-border-hover)',
        bg: 'var(--studio-surface-raised)',
      }}
    >
      <VStack spacing="md">
        <Box
          p="md"
          borderRadius="full"
          bg="var(--studio-brand-green-subtle)"
          color="var(--studio-brand-green)"
        >
          <Icon size={22} />
        </Box>
        <Heading
          as="h3"
          fontSize="15px"
          fontWeight={600}
          color="var(--studio-text-primary)"
          letterSpacing="-0.01em"
        >
          {agent.role}
        </Heading>
        <Text
          fontSize="13px"
          color="var(--studio-text-secondary)"
          lineHeight={1.6}
        >
          {agent.description}
        </Text>
      </VStack>
    </MotionBox>
  )
}
