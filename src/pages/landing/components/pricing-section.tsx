import { Box, VStack, Heading, Text, Button, HStack, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to get started.',
    features: [
      'Full IDE with all tools',
      'AI chat with Claude',
      'Terminal & dev services',
      'Git integration',
      'Community support',
    ],
    cta: 'Download Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$20',
    period: '/month',
    description: 'For teams building at scale.',
    features: [
      'Everything in Free',
      'Multi-agent team canvas',
      'Priority AI responses',
      'Custom MCP servers',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function PricingSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="pricing" py={{ base: '4xl', md: '6xl' }} maxW="4xl" mx="auto" px="lg">
      <MotionBox
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <VStack spacing="lg" mb="3xl">
          <MotionBox variants={itemVariants}>
            <Text textStyle="label" color="var(--studio-brand-green)">
              Pricing
            </Text>
          </MotionBox>
          <MotionBox variants={itemVariants}>
            <Heading
              as="h2"
              fontSize={{ base: '24px', md: '36px' }}
              textAlign="center"
              color="var(--studio-text-primary)"
              letterSpacing="-0.025em"
              fontWeight={700}
            >
              Start free, scale when ready
            </Heading>
          </MotionBox>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="xl">
          {tiers.map((tier) => (
            <MotionBox key={tier.name} variants={itemVariants}>
              <PricingCard tier={tier} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  )
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Box
      p="xl"
      borderRadius="xl"
      bg="var(--studio-surface)"
      borderWidth="1px"
      borderColor={
        tier.highlighted
          ? 'var(--studio-brand-green-border)'
          : 'var(--studio-border)'
      }
      position="relative"
    >
      <VStack align="start" spacing="lg">
        <VStack align="start" spacing="xs">
          <Text
            fontSize="14px"
            fontWeight={600}
            color={
              tier.highlighted
                ? 'var(--studio-brand-green)'
                : 'var(--studio-text-primary)'
            }
            letterSpacing="-0.01em"
          >
            {tier.name}
          </Text>
          <HStack align="baseline" spacing="xs">
            <Text
              fontSize="36px"
              fontWeight={700}
              color="var(--studio-text-primary)"
              letterSpacing="-0.03em"
              lineHeight={1}
            >
              {tier.price}
            </Text>
            <Text fontSize="14px" color="var(--studio-text-tertiary)">
              {tier.period}
            </Text>
          </HStack>
          <Text fontSize="14px" color="var(--studio-text-secondary)">
            {tier.description}
          </Text>
        </VStack>

        <VStack align="start" spacing="sm" w="full">
          {tier.features.map((feature) => (
            <HStack key={feature} spacing="sm">
              <Box color="var(--studio-brand-green)" flexShrink={0}>
                <Check size={14} />
              </Box>
              <Text fontSize="14px" color="var(--studio-text-secondary)">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Button
          w="full"
          size="lg"
          h="44px"
          fontSize="14px"
          fontWeight={600}
          borderRadius="lg"
          leftIcon={tier.highlighted ? undefined : <Download size={14} />}
          bg={
            tier.highlighted
              ? 'var(--studio-brand-green)'
              : 'transparent'
          }
          color={tier.highlighted ? '#121212' : 'var(--studio-text-primary)'}
          borderWidth={tier.highlighted ? '0' : '1px'}
          borderColor="var(--studio-border)"
          _hover={{
            opacity: tier.highlighted ? 0.9 : 1,
            bg: tier.highlighted
              ? 'var(--studio-brand-green)'
              : 'var(--studio-surface-raised)',
            transform: 'translateY(-1px)',
          }}
          _active={{ opacity: 0.8 }}
          transition="all 0.2s"
        >
          {tier.cta}
        </Button>
      </VStack>
    </Box>
  )
}
