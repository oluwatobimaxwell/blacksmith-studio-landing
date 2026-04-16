import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FeatureItem } from '../data/features'

const MotionBox = motion.create(Box)

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface FeatureCardProps {
  feature: FeatureItem
  featured?: boolean
}

export function FeatureCard({ feature, featured }: FeatureCardProps) {
  const Icon = feature.icon

  return (
    <MotionBox
      variants={cardVariants}
      p={featured ? 8 : 6}
      h="full"
      borderRadius="xl"
      bg="var(--studio-surface)"
      borderWidth="1px"
      borderColor="var(--studio-border)"
      transition="border-color 0.2s ease, background 0.2s ease"
      position="relative"
      overflow="hidden"
      _hover={{ borderColor: 'var(--studio-border-hover)', bg: 'var(--studio-surface-raised)' }}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(45,212,168,0.4), transparent)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          borderRadius: '9999px',
        },
        '&:hover::before': {
          opacity: 1,
        },
      }}
    >
      {/* Inner radial glow for featured cards */}
      {featured && (
        <Box
          position="absolute"
          inset={0}
          borderRadius="xl"
          background="radial-gradient(ellipse 60% 40% at 12% 12%, rgba(45,212,168,0.07), transparent)"
          pointerEvents="none"
        />
      )}

      <VStack align="start" spacing={featured ? 5 : 4} position="relative">
        <Box
          p={featured ? 3 : 2}
          borderRadius="lg"
          bg="var(--studio-brand-green-subtle)"
          color="var(--studio-brand-green)"
          borderWidth="1px"
          borderColor="var(--studio-brand-green-border)"
        >
          <Icon size={featured ? 24 : 18} />
        </Box>
        <VStack align="start" spacing={2}>
          <Heading
            as="h3"
            fontSize={featured ? '20px' : '15px'}
            fontWeight={600}
            color="var(--studio-text-primary)"
            letterSpacing="-0.02em"
          >
            {feature.title}
          </Heading>
          <Text
            fontSize={featured ? '15px' : '13px'}
            color="var(--studio-text-secondary)"
            lineHeight={1.7}
          >
            {feature.description}
          </Text>
        </VStack>
      </VStack>
    </MotionBox>
  )
}
