import { Box, VStack, Heading, Text, Button, HStack, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Download, Github, ArrowRight } from 'lucide-react'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stats = [
  { value: '11', label: 'AI agents' },
  { value: '80%', label: 'less tech debt' },
  { value: '100%', label: 'free' },
  { value: 'Open', label: 'source' },
]

export function HeroSection() {
  return (
    <Box
      as="section"
      aria-label="Hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bg="var(--studio-landing-bg)"
      pt={{ base: '100px', md: '80px' }}
      pb={{ base: '80px', md: '60px' }}
    >
      {/* Very subtle radial glow — centered, tight */}
      <Box
        position="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: '600px', md: '900px' }}
        h={{ base: '400px', md: '600px' }}
        background="radial-gradient(ellipse, rgba(45,212,168,0.06) 0%, transparent 65%)"
        pointerEvents="none"
      />

      {/* Subtle noise grain texture overlay */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        backgroundImage={noiseSvg}
        backgroundRepeat="repeat"
        backgroundSize="128px"
        pointerEvents="none"
      />

      <MotionVStack
        spacing={0}
        align="center"
        position="relative"
        maxW="900px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <MotionBox variants={itemVariants} mb={8}>
          <Flex
            as="a"
            href="https://github.com/nicholasgriffintn/blacksmith-studio"
            target="_blank"
            rel="noopener noreferrer"
            align="center"
            gap={2}
            px={4}
            py={2}
            borderRadius="full"
            bg="var(--studio-landing-surface)"
            borderWidth="1px"
            borderColor="var(--studio-landing-border)"
            display="inline-flex"
            cursor="pointer"
            transition="border-color 0.2s, background 0.2s"
            _hover={{ borderColor: 'var(--studio-landing-border-hover)', bg: 'var(--studio-landing-surface-hover)' }}
            textDecoration="none"
          >
            <Box w="7px" h="7px" borderRadius="full" bg="var(--studio-landing-text-accent)" flexShrink={0} />
            <Text fontSize="13px" color="rgba(255,255,255,0.6)" letterSpacing="0.01em">
              Free & Open Source · Now on macOS
            </Text>
            <ArrowRight size={13} color="rgba(255,255,255,0.4)" />
          </Flex>
        </MotionBox>

        {/* Headline */}
        <MotionBox variants={itemVariants} mb={6}>
          <Heading
            as="h1"
            fontSize={{ base: '52px', sm: '68px', md: '88px', lg: '104px' }}
            fontWeight={600}
            textAlign="center"
            lineHeight={0.95}
            letterSpacing="-0.045em"
            color="var(--studio-landing-text-primary)"
          >
            Build real software.
            <br />
            <Text
              as="span"
              bg="linear-gradient(135deg, #2dd4a8 0%, rgba(45,212,168,0.7) 100%)"
              bgClip="text"
              sx={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              The right way.
            </Text>
          </Heading>
        </MotionBox>

        {/* Subtext */}
        <MotionBox variants={itemVariants} mb={10} maxW="560px">
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            textAlign="center"
            color="var(--studio-landing-text-secondary)"
            lineHeight={1.7}
          >
            A free, open source desktop IDE where 11 specialized AI agents coordinate to
            build production-ready software — structured like a senior engineering team,
            not just a chatbot.
          </Text>
        </MotionBox>

        {/* CTAs */}
        <MotionBox variants={itemVariants} mb={12}>
          <HStack spacing={3} flexWrap="wrap" justify="center">
            <Button
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
            <Button
              as="a"
              href="https://github.com/nicholasgriffintn/blacksmith-studio"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              leftIcon={<Github size={16} />}
              px={8}
              h="52px"
              fontSize="15px"
              fontWeight={500}
              borderRadius="full"
              color="rgba(255,255,255,0.7)"
              borderWidth="1px"
              borderColor="var(--studio-landing-border)"
              _hover={{ bg: 'var(--studio-landing-surface)', borderColor: 'var(--studio-landing-border-hover)', color: 'white' }}
              transition="all 0.2s"
            >
              View on GitHub
            </Button>
          </HStack>
        </MotionBox>

        {/* Stats row */}
        <MotionBox variants={itemVariants} w="full">
          <Flex
            justify="center"
            align="center"
            gap={0}
            flexWrap="wrap"
            borderTop="1px solid var(--studio-landing-border)"
            borderBottom="1px solid var(--studio-landing-border)"
            py={5}
          >
            {stats.map((stat, i) => (
              <Flex key={stat.label} align="center">
                <VStack spacing={0} px={{ base: 5, md: 8 }}>
                  <Text
                    fontSize={{ base: '24px', md: '28px' }}
                    fontWeight={700}
                    color="var(--studio-landing-text-primary)"
                    letterSpacing="-0.03em"
                    lineHeight={1}
                  >
                    {stat.value}
                  </Text>
                  <Text fontSize="12px" color="var(--studio-landing-text-muted)" letterSpacing="0.02em">
                    {stat.label}
                  </Text>
                </VStack>
                {i < stats.length - 1 && (
                  <Box w="1px" h="28px" bg="var(--studio-landing-border)" flexShrink={0} />
                )}
              </Flex>
            ))}
          </Flex>
        </MotionBox>

        {/* Scroll hint */}
        <MotionBox
          variants={itemVariants}
          mt={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Text fontSize="12px" color="var(--studio-landing-text-muted)" letterSpacing="0.04em">
            Scroll to explore
          </Text>
          <Box
            w="1px"
            h="32px"
            bg="linear-gradient(to bottom, var(--studio-landing-border), transparent)"
            sx={{ animation: 'scrollHint 2s ease-in-out infinite' }}
          />
        </MotionBox>
      </MotionVStack>
    </Box>
  )
}
