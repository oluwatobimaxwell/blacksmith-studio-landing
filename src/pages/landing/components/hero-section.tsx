import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Download, Github, Monitor } from 'lucide-react'
import { IdeMockup } from './ide-mockup'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  return (
    <Box
      as="section"
      aria-label="Hero"
      pt={{ base: '120px', md: '160px' }}
      pb={{ base: '4xl', md: '6xl' }}
      position="relative"
      overflow="hidden"
    >
      {/* Ambient glow */}
      <MotionBox
        position="absolute"
        top="10%"
        left="50%"
        w={{ base: '400px', md: '600px' }}
        h={{ base: '300px', md: '400px' }}
        bg="var(--studio-text-primary)"
        opacity={0.03}
        filter="blur(140px)"
        borderRadius="full"
        pointerEvents="none"
        style={{ x: '-50%' }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <MotionVStack
        spacing="xl"
        align="center"
        position="relative"
        maxW="4xl"
        mx="auto"
        px="lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionBox variants={itemVariants}>
          <Badge
            px="lg"
            py="xs"
            borderRadius="full"
            bg="var(--studio-brand-green-subtle)"
            color="var(--studio-brand-green)"
            fontSize="13px"
            fontWeight={500}
            borderWidth="1px"
            borderColor="var(--studio-brand-green-border)"
            display="flex"
            alignItems="center"
            gap="xs"
          >
            <Monitor size={12} />
            Now Available for macOS
          </Badge>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Heading
            as="h1"
            fontSize={{ base: '36px', md: '52px', lg: '64px' }}
            fontWeight={700}
            textAlign="center"
            lineHeight={1.08}
            letterSpacing="-0.03em"
            color="var(--studio-text-primary)"
          >
            The AI-Native IDE
            <br />
            <Text as="span" color="var(--studio-text-tertiary)">
              for Building Software
            </Text>
          </Heading>
        </MotionBox>

        <MotionBox variants={itemVariants} maxW="2xl">
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            textAlign="center"
            color="var(--studio-text-secondary)"
            lineHeight={1.7}
          >
            A desktop IDE with a coordinated team of AI agents — product managers,
            architects, engineers, and designers — working together to build your
            features.
          </Text>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <HStack spacing="md" pt="sm" flexWrap="wrap" justify="center">
            <Button
              variant="brand"
              size="lg"
              leftIcon={<Download size={16} />}
              px="2xl"
              h="48px"
              fontSize="15px"
              fontWeight={600}
              borderRadius="lg"
              transition="all 0.2s"
              _hover={{ opacity: 0.9, transform: 'translateY(-1px)', shadow: 'glow' }}
            >
              Download for macOS
            </Button>
            <Button
              as="a"
              href="https://github.com/nicholasgriffintn/blacksmith-studio"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              leftIcon={<Github size={16} />}
              px="2xl"
              h="48px"
              fontSize="15px"
              fontWeight={600}
              borderRadius="lg"
              transition="all 0.2s"
              _hover={{ transform: 'translateY(-1px)', bg: 'var(--studio-surface-raised)' }}
            >
              View on GitHub
            </Button>
          </HStack>
        </MotionBox>
      </MotionVStack>

      {/* IDE Mockup */}
      <MotionBox
        maxW="5xl"
        mx="auto"
        mt={{ base: '3xl', md: '4xl' }}
        px="lg"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        role="img"
        aria-label="Blacksmith Studio IDE interface preview"
      >
        <IdeMockup />
      </MotionBox>
    </Box>
  )
}
