import { Box, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Download, Github } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

export function CtaSection() {
  const { ref, controls } = useScrollReveal(0.2)

  return (
    <Box
      as="section"
      py={{ base: '100px', md: '140px' }}
      position="relative"
      overflow="hidden"
      bg="var(--studio-landing-bg)"
    >
      {/* Very subtle radial glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="800px"
        h="500px"
        background="radial-gradient(ellipse, rgba(45,212,168,0.05) 0%, transparent 65%)"
        pointerEvents="none"
      />

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

      <MotionBox
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
        }}
        maxW="680px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        position="relative"
        textAlign="center"
      >
        <VStack spacing={7}>
          <Text
            fontSize="12px"
            fontWeight={500}
            color="var(--studio-landing-text-accent)"
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            Get Started
          </Text>

          <Heading
            as="h2"
            fontSize={{ base: '40px', md: '64px' }}
            fontWeight={600}
            color="var(--studio-landing-text-primary)"
            letterSpacing="-0.04em"
            lineHeight={1.0}
          >
            Start building.
            <br />
            <Text
              as="span"
              bg="linear-gradient(135deg, #2dd4a8 0%, rgba(45,212,168,0.65) 100%)"
              bgClip="text"
              sx={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              The right way.
            </Text>
          </Heading>

          <Text
            fontSize={{ base: '15px', md: '17px' }}
            color="var(--studio-landing-text-secondary)"
            maxW="500px"
            lineHeight={1.7}
          >
            Download Blacksmith Studio and join a global community of builders — developers, founders, students, and makers from every country. Free, forever.
          </Text>

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
              fontWeight={400}
              borderRadius="full"
              color="rgba(255,255,255,0.6)"
              borderWidth="1px"
              borderColor="var(--studio-landing-border)"
              _hover={{ bg: 'var(--studio-landing-surface)', borderColor: 'var(--studio-landing-border-hover)', color: 'white' }}
              transition="all 0.2s"
            >
              View on GitHub
            </Button>
          </HStack>

          <Text fontSize="13px" color="var(--studio-landing-text-muted)">
            Free forever · No credit card required · macOS 13+
          </Text>
        </VStack>
      </MotionBox>
    </Box>
  )
}
