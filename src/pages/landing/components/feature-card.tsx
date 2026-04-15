import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FeatureItem } from '../data/features'

const MotionBox = motion.create(Box)

interface FeatureCardProps {
  feature: FeatureItem
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

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon

  return (
    <MotionBox
      variants={cardVariants}
      p="xl"
      borderRadius="xl"
      bg="var(--studio-surface)"
      borderWidth="1px"
      borderColor="var(--studio-border)"
      css={{ transition: 'all 0.2s' }}
      _hover={{
        borderColor: 'var(--studio-border-hover)',
        bg: 'var(--studio-surface-raised)',
      }}
    >
      <VStack align="start" spacing="md">
        <Box
          p="sm"
          borderRadius="lg"
          bg="var(--studio-brand-green-subtle)"
          color="var(--studio-brand-green)"
        >
          <Icon size={20} />
        </Box>
        <Heading
          as="h3"
          fontSize="16px"
          fontWeight={600}
          color="var(--studio-text-primary)"
          letterSpacing="-0.01em"
        >
          {feature.title}
        </Heading>
        <Text
          fontSize="14px"
          color="var(--studio-text-secondary)"
          lineHeight={1.6}
        >
          {feature.description}
        </Text>
      </VStack>
    </MotionBox>
  )
}
