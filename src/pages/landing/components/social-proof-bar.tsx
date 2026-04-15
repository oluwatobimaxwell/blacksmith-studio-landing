import { Box, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Star, Download, Users } from 'lucide-react'

const MotionBox = motion.create(Box)

interface StatItemProps {
  icon: React.ReactNode
  value: string
  label: string
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <HStack spacing="sm">
      <Box color="var(--studio-brand-green)">{icon}</Box>
      <Text fontSize="14px" fontWeight={600} color="var(--studio-text-primary)">
        {value}
      </Text>
      <Text fontSize="14px" color="var(--studio-text-tertiary)">
        {label}
      </Text>
    </HStack>
  )
}

export function SocialProofBar() {
  return (
    <MotionBox
      as="section"
      py="xl"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="var(--studio-border)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <HStack
        maxW="4xl"
        mx="auto"
        px="lg"
        justify="center"
        spacing={{ base: 'xl', md: '3xl' }}
        flexWrap="wrap"
      >
        <StatItem icon={<Star size={14} />} value="4.9" label="avg rating" />
        <StatItem icon={<Download size={14} />} value="10k+" label="downloads" />
        <StatItem icon={<Users size={14} />} value="2k+" label="active devs" />
      </HStack>
    </MotionBox>
  )
}
