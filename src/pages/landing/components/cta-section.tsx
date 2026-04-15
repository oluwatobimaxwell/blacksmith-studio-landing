import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

export function CtaSection() {
  const { ref, controls } = useScrollReveal(0.3)

  return (
    <Box as="section" py={{ base: '4xl', md: '6xl' }} maxW="3xl" mx="auto" px="lg">
      <MotionBox
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.98 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
          },
        }}
      >
        {/* Gradient border wrapper */}
        <Box
          p="1px"
          borderRadius="xl"
          background="var(--studio-gradient-border)"
          position="relative"
        >
          {/* Glow behind card */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="80%"
            h="80%"
            bg="var(--studio-brand-green)"
            opacity={0.04}
            filter="blur(60px)"
            borderRadius="full"
            pointerEvents="none"
          />

          <Box
            bg="var(--studio-surface)"
            borderRadius="xl"
            px={{ base: 'xl', md: '4xl' }}
            py={{ base: '3xl', md: '4xl' }}
            textAlign="center"
            position="relative"
          >
            <VStack spacing="lg">
              <Heading
                as="h2"
                fontSize={{ base: '24px', md: '36px' }}
                color="var(--studio-text-primary)"
                letterSpacing="-0.025em"
                fontWeight={700}
              >
                Ready to build with AI?
              </Heading>
              <Text
                fontSize={{ base: '14px', md: '16px' }}
                color="var(--studio-text-secondary)"
                maxW="md"
                lineHeight={1.7}
              >
                Download Blacksmith Studio and start building with your AI team
                today.
              </Text>
              <Button
                as="a"
                href="#pricing"
                bg="var(--studio-brand-green)"
                color="#121212"
                size="lg"
                leftIcon={<Download size={16} />}
                px="2xl"
                h="48px"
                fontSize="15px"
                fontWeight={600}
                borderRadius="lg"
                transition="all 0.2s"
                _hover={{ opacity: 0.9, transform: 'translateY(-1px)', shadow: 'glow' }}
                _active={{ opacity: 0.8 }}
              >
                Download for macOS
              </Button>
            </VStack>
          </Box>
        </Box>
      </MotionBox>
    </Box>
  )
}
