import { Box, VStack, HStack, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { AgentItem } from '../data/agents'

const MotionBox = motion.create(Box)

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface AgentCardProps {
  agent: AgentItem
}

export function AgentCard({ agent }: AgentCardProps) {
  const Icon = agent.icon

  return (
    <MotionBox
      role="group"
      variants={cardVariants}
      whileHover={{ y: -4 }}
      p={5}
      borderRadius="xl"
      bg="var(--studio-landing-surface)"
      borderWidth="1px"
      borderColor="var(--studio-landing-border)"
      transition="border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease"
      _hover={{ borderColor: 'rgba(45,212,168,0.25)', bg: 'var(--studio-landing-surface-hover)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
      position="relative"
      overflow="hidden"
    >
      {/* Top accent line — revealed on hover */}
      <Box
        position="absolute"
        top={0}
        left="10%"
        right="10%"
        h="1px"
        background="linear-gradient(90deg, transparent, rgba(45,212,168,0.35), transparent)"
        opacity={0}
        transition="opacity 0.3s ease"
        pointerEvents="none"
        sx={{ '[role=group]:hover &': { opacity: 1 } }}
      />

      <VStack spacing={3} align="start">
        {/* Icon + status row */}
        <HStack w="full" justify="space-between">
          <Box
            p={2}
            borderRadius="lg"
            bg="rgba(45,212,168,0.08)"
            color="var(--studio-landing-text-accent)"
            borderWidth="1px"
            borderColor="rgba(45,212,168,0.15)"
            flexShrink={0}
          >
            <Icon size={15} />
          </Box>

          <HStack spacing={1.5}>
            <Box
              w="5px"
              h="5px"
              borderRadius="full"
              bg="var(--studio-landing-text-muted)"
              flexShrink={0}
              transition="background 0.25s ease"
              sx={{ '[role=group]:hover &': { background: 'var(--studio-landing-text-accent)' } }}
            />
            <Text
              fontSize="10px"
              fontWeight={500}
              color="var(--studio-landing-text-muted)"
              letterSpacing="0.04em"
              transition="color 0.25s ease"
              sx={{ '[role=group]:hover &': { color: 'var(--studio-landing-text-accent)' } }}
            >
              Ready
            </Text>
          </HStack>
        </HStack>

        <VStack spacing={1} align="start">
          <Heading as="h3" fontSize="13px" fontWeight={600} color="var(--studio-landing-text-primary)" letterSpacing="-0.01em">
            {agent.role}
          </Heading>
          <Text fontSize="12px" color="var(--studio-landing-text-muted)" lineHeight={1.6}>
            {agent.description}
          </Text>
        </VStack>

        {/* Capabilities — revealed on hover */}
        <Box
          w="full"
          sx={{
            maxHeight: '0px',
            opacity: 0,
            overflow: 'hidden',
            transition: 'max-height 0.35s ease, opacity 0.3s ease',
            '[role=group]:hover &': { maxHeight: '80px', opacity: 1 },
          }}
        >
          <Box borderTop="1px solid var(--studio-landing-border)" pt={2.5}>
            <HStack spacing={1.5} flexWrap="wrap">
              {agent.capabilities.map((cap) => (
                <Text
                  key={cap}
                  fontSize="10px"
                  fontWeight={500}
                  color="var(--studio-landing-text-accent)"
                  bg="rgba(45,212,168,0.08)"
                  borderWidth="1px"
                  borderColor="rgba(45,212,168,0.15)"
                  px={2}
                  py={0.5}
                  borderRadius="sm"
                  display="inline-block"
                >
                  {cap}
                </Text>
              ))}
            </HStack>
          </Box>
        </Box>
      </VStack>
    </MotionBox>
  )
}
