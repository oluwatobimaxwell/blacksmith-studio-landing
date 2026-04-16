import { Box, VStack, Heading, Text, Button, HStack, SimpleGrid, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Check, Download, Zap, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

const tiers: PricingTier[] = [
  {
    name: 'Community',
    price: '$0',
    period: 'forever',
    description: 'The full IDE — free, always. No credit card. No expiry. No catch.',
    features: [
      'Full IDE with all tools',
      'AI chat with Claude',
      'Terminal & dev services',
      'Git integration',
      'Multi-agent canvas',
      'Community support',
    ],
    cta: 'Download Free',
    highlighted: false,
    badge: 'Always Free',
  },
  {
    name: 'Pro',
    price: '$20',
    period: '/month',
    description: 'For developers who want priority access and premium AI features.',
    features: [
      'Everything in Community',
      'Priority AI responses',
      'Custom MCP servers',
      'Extended context windows',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
]

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Box
      p={8}
      borderRadius="2xl"
      bg={tier.highlighted ? 'rgba(255,255,255,0.05)' : 'var(--studio-landing-surface)'}
      borderWidth="1px"
      borderColor={tier.highlighted ? 'rgba(45,212,168,0.25)' : 'var(--studio-landing-border)'}
      position="relative"
      h="full"
    >
      {tier.highlighted && (
        <HStack
          position="absolute"
          top="-13px"
          left="50%"
          transform="translateX(-50%)"
          bg="var(--studio-landing-text-accent)"
          color="#000"
          px={3}
          py={1}
          borderRadius="full"
          spacing={1}
          whiteSpace="nowrap"
        >
          <Zap size={11} />
          <Text fontSize="10px" fontWeight={700} letterSpacing="0.06em" textTransform="uppercase">
            Most Popular
          </Text>
        </HStack>
      )}

      {!tier.highlighted && tier.badge && (
        <HStack
          position="absolute"
          top="-13px"
          left="50%"
          transform="translateX(-50%)"
          bg="rgba(45,212,168,0.1)"
          borderWidth="1px"
          borderColor="rgba(45,212,168,0.2)"
          color="var(--studio-landing-text-accent)"
          px={3}
          py={1}
          borderRadius="full"
          spacing={1}
          whiteSpace="nowrap"
        >
          <Heart size={10} />
          <Text fontSize="10px" fontWeight={700} letterSpacing="0.06em" textTransform="uppercase">
            {tier.badge}
          </Text>
        </HStack>
      )}

      <VStack align="start" spacing={6} h="full">
        <VStack align="start" spacing={2}>
          <Text
            fontSize="12px"
            fontWeight={600}
            letterSpacing="0.05em"
            textTransform="uppercase"
            color={tier.highlighted ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-text-muted)'}
          >
            {tier.name}
          </Text>
          <HStack align="baseline" spacing={1}>
            <Text
              fontSize="48px"
              fontWeight={700}
              color="var(--studio-landing-text-primary)"
              letterSpacing="-0.04em"
              lineHeight={1}
            >
              {tier.price}
            </Text>
            <Text fontSize="14px" color="var(--studio-landing-text-muted)" pb={1}>
              {tier.period}
            </Text>
          </HStack>
          <Text fontSize="14px" color="var(--studio-landing-text-secondary)" lineHeight={1.6}>
            {tier.description}
          </Text>
        </VStack>

        <VStack align="start" spacing={3} flex={1} w="full">
          {tier.features.map((feature) => (
            <HStack key={feature} spacing={3} align="start">
              <Flex
                w="16px"
                h="16px"
                borderRadius="full"
                bg="rgba(45,212,168,0.1)"
                borderWidth="1px"
                borderColor="rgba(45,212,168,0.25)"
                align="center"
                justify="center"
                flexShrink={0}
                mt="1px"
              >
                <Check size={9} color="#2dd4a8" strokeWidth={3} />
              </Flex>
              <Text fontSize="14px" color="var(--studio-landing-text-secondary)">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Button
          w="full"
          h="46px"
          fontSize="14px"
          fontWeight={600}
          borderRadius="full"
          leftIcon={tier.highlighted ? <Zap size={14} /> : <Download size={14} />}
          bg={tier.highlighted ? 'var(--studio-landing-cta-bg)' : 'transparent'}
          color={tier.highlighted ? 'var(--studio-landing-cta-text)' : 'var(--studio-landing-text-primary)'}
          borderWidth="1px"
          borderColor={tier.highlighted ? 'transparent' : 'var(--studio-landing-border)'}
          _hover={{
            bg: tier.highlighted ? 'var(--studio-landing-cta-bg-hover)' : 'var(--studio-landing-surface-hover)',
            transform: 'translateY(-1px)',
          }}
          transition="all 0.2s"
        >
          {tier.cta}
        </Button>
      </VStack>
    </Box>
  )
}

export function PricingSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="pricing" py={{ base: '100px', md: '140px' }} position="relative" bg="var(--studio-landing-bg)">
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

      <Box maxW="820px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <VStack spacing={4} mb={16} align="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Pricing
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
                Free forever.
                <br />
                Scale when ready.
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                textAlign="center"
                color="var(--studio-landing-text-secondary)"
                maxW="lg"
                lineHeight={1.7}
              >
                Blacksmith Studio is free to download, free to use, and will always remain that way. This is not a temporary offer — it is a founding principle.
              </Text>
            </MotionBox>
          </VStack>

          <MotionBox variants={itemVariants}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} alignItems="stretch">
              {tiers.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </SimpleGrid>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Text fontSize="13px" color="var(--studio-landing-text-muted)" textAlign="center" mt={10} lineHeight={1.7}>
              We will never charge for access to Blacksmith Studio.
              <br />
              We will never put essential features behind a paywall.
            </Text>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  )
}
