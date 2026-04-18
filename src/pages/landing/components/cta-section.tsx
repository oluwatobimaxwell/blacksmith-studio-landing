import { Box, VStack, Heading, Text, Button, HStack, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const secondaryLinks = [
  { label: 'See the changelog', href: '#' },
  { label: 'Browse the Hub', href: '#graphify' },
  { label: 'Read the docs', href: 'https://docs.blacksmith.studio' },
]

export function CtaSection() {
  const { ref, controls } = useScrollReveal(0.2)

  return (
    <Box
      as="section"
      id="download"
      py={{ base: '100px', md: '140px' }}
      position="relative"
      overflow="hidden"
      bg="var(--studio-landing-bg)"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(ellipse 60% 50% at 50% 50%, rgba(45,212,168,0.045) 0%, transparent 70%)"
        pointerEvents="none"
        aria-hidden
      />

      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="500px"
        h="1px"
        background="linear-gradient(90deg, transparent, var(--studio-landing-border), transparent)"
        pointerEvents="none"
        aria-hidden
      />

      <MotionBox
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
        }}
        maxW="720px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        position="relative"
        textAlign="center"
      >
        <VStack spacing={7}>
          <Heading
            as="h2"
            fontSize={{ base: '36px', md: '56px' }}
            fontWeight={600}
            color="var(--studio-landing-text-primary)"
            letterSpacing="-0.04em"
            lineHeight={1.05}
          >
            Free. Forever.
            <br />
            Installed in seconds.
          </Heading>

          <HStack spacing={3} flexWrap="wrap" justify="center">
            <Button
              as="a"
              href="#download"
              bg="var(--studio-landing-cta-bg)"
              color="var(--studio-landing-cta-text)"
              size="lg"
              leftIcon={<Download size={16} />}
              px={8}
              h="52px"
              fontSize="15px"
              fontWeight={600}
              borderRadius="full"
              _hover={{ bg: 'var(--studio-landing-cta-bg-hover)', transform: 'translateY(-1px)' }}
              _active={{ transform: 'translateY(0)' }}
              transition="all 0.2s"
            >
              Download for macOS
            </Button>
          </HStack>

          <Flex align="center" gap={2} fontSize="13px" color="var(--studio-landing-text-muted)">
            <Text>macOS 12+</Text>
            <Box w="3px" h="3px" borderRadius="full" bg="var(--studio-landing-text-muted)" />
            <Text>Windows 10+</Text>
            <Box w="3px" h="3px" borderRadius="full" bg="var(--studio-landing-text-muted)" />
            <Text>Linux</Text>
          </Flex>

          <HStack
            spacing={{ base: 3, md: 5 }}
            divider={<Box w="1px" h="10px" bg="var(--studio-landing-border)" />}
            pt={2}
            flexWrap="wrap"
            justify="center"
          >
            {secondaryLinks.map((l) => (
              <Text
                key={l.label}
                as="a"
                href={l.href}
                fontSize="13px"
                color="var(--studio-landing-text-secondary)"
                transition="color 0.15s ease"
                _hover={{ color: 'white', textDecoration: 'none' }}
                cursor="pointer"
              >
                {l.label}
              </Text>
            ))}
          </HStack>
        </VStack>
      </MotionBox>
    </Box>
  )
}

export default CtaSection
