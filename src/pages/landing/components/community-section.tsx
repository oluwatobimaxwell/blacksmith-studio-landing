import { Box, VStack, Heading, Text, HStack, SimpleGrid, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Code2, Lightbulb, GraduationCap, Briefcase, LayoutGrid, Globe } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const audiences = [
  {
    icon: Code2,
    title: 'Developers',
    description: 'Build faster without sacrificing quality. Get an AI engineering team that thinks at a senior level.',
  },
  {
    icon: Lightbulb,
    title: 'Founders',
    description: 'Turn an idea into a professionally architected, production-ready codebase — no technical co-founder needed.',
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Build real things, not just tutorials. Learn best practices as you go, with AI that teaches while it builds.',
  },
  {
    icon: LayoutGrid,
    title: 'PMs & Designers',
    description: 'Bridge the gap between what you envision and what gets built. Prototype and validate faster than any traditional cycle.',
  },
  {
    icon: Briefcase,
    title: 'Small Businesses',
    description: 'Build the tools your business needs — booking systems, portals, dashboards — without custom development costs.',
  },
  {
    icon: Globe,
    title: 'Anyone, Anywhere',
    description: 'If you have an idea and the belief that you should be able to build it — you belong here. No borders.',
  },
]

export function CommunitySection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box as="section" id="community" py={{ base: '100px', md: '140px' }} position="relative" bg="var(--studio-landing-bg)">
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

      <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={sectionVariants}>

          <VStack spacing={4} mb={16} align="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Community
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
                Built for every builder.
                <br />
                <Text
                  as="span"
                  bg="linear-gradient(135deg, #2dd4a8 0%, rgba(45,212,168,0.65) 100%)"
                  bgClip="text"
                  sx={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Everywhere.
                </Text>
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                textAlign="center"
                color="var(--studio-landing-text-secondary)"
                maxW="xl"
                lineHeight={1.7}
              >
                Not a community for a specific type of person, country, or level of experience. If you have something you want to build, you belong here.
              </Text>
            </MotionBox>
          </VStack>

          {/* Audience grid */}
          <MotionBox variants={itemVariants}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3} mb={14}>
              {audiences.map((audience) => {
                const Icon = audience.icon
                return (
                  <Box
                    key={audience.title}
                    p={6}
                    borderRadius="xl"
                    bg="var(--studio-landing-surface)"
                    borderWidth="1px"
                    borderColor="var(--studio-landing-border)"
                    transition="border-color 0.2s ease, background 0.2s ease"
                    _hover={{ borderColor: 'var(--studio-landing-border-hover)', bg: 'var(--studio-landing-surface-hover)' }}
                  >
                    <VStack align="start" spacing={4}>
                      <Box
                        p={2}
                        borderRadius="lg"
                        bg="rgba(45,212,168,0.08)"
                        color="var(--studio-landing-text-accent)"
                        borderWidth="1px"
                        borderColor="rgba(45,212,168,0.15)"
                      >
                        <Icon size={17} />
                      </Box>
                      <VStack align="start" spacing={1.5}>
                        <Heading as="h3" fontSize="15px" fontWeight={600} color="var(--studio-landing-text-primary)" letterSpacing="-0.02em">
                          {audience.title}
                        </Heading>
                        <Text fontSize="13px" color="var(--studio-landing-text-secondary)" lineHeight={1.65}>
                          {audience.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                )
              })}
            </SimpleGrid>
          </MotionBox>

          {/* Founder quote */}
          <MotionBox variants={itemVariants}>
            <Box
              p={{ base: 7, md: 10 }}
              borderRadius="2xl"
              bg="var(--studio-landing-surface)"
              borderWidth="1px"
              borderColor="var(--studio-landing-border)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                inset={0}
                background="radial-gradient(ellipse 50% 60% at 0% 50%, rgba(45,212,168,0.04), transparent)"
                pointerEvents="none"
              />
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={8}
                align={{ base: 'flex-start', md: 'center' }}
                position="relative"
              >
                <Box
                  w={{ base: '36px', md: '3px' }}
                  h={{ base: '3px', md: '72px' }}
                  bg="var(--studio-landing-text-accent)"
                  borderRadius="full"
                  flexShrink={0}
                  opacity={0.5}
                />
                <VStack align="start" spacing={4} flex={1}>
                  <Text
                    fontSize={{ base: '16px', md: '19px' }}
                    color="var(--studio-landing-text-primary)"
                    lineHeight={1.65}
                    fontWeight={400}
                    letterSpacing="-0.01em"
                  >
                    "The world has extraordinary talent in every country, every city, and every community. That talent deserves tools that match its ambition."
                  </Text>
                  <HStack spacing={3}>
                    <Flex
                      w="32px"
                      h="32px"
                      borderRadius="full"
                      bg="rgba(45,212,168,0.08)"
                      borderWidth="1px"
                      borderColor="rgba(45,212,168,0.2)"
                      align="center"
                      justify="center"
                    >
                      <Text fontSize="13px" fontWeight={600} color="var(--studio-landing-text-accent)">T</Text>
                    </Flex>
                    <VStack align="start" spacing={0}>
                      <Text fontSize="13px" fontWeight={600} color="var(--studio-landing-text-primary)">Tobi Sholanke</Text>
                      <Text fontSize="12px" color="var(--studio-landing-text-muted)">Founder, Blacksmith · Helsinki</Text>
                    </VStack>
                  </HStack>
                </VStack>
                <VStack align={{ base: 'flex-start', md: 'flex-end' }} spacing={2} flexShrink={0}>
                  <Text fontSize="11px" fontWeight={500} color="var(--studio-landing-text-muted)" letterSpacing="0.06em" textTransform="uppercase">Built in</Text>
                  <Text fontSize="15px" fontWeight={500} color="rgba(255,255,255,0.5)">Nigeria</Text>
                  <Text fontSize="11px" fontWeight={500} color="var(--studio-landing-text-muted)" letterSpacing="0.06em" textTransform="uppercase" mt={2}>For the</Text>
                  <Text fontSize="15px" fontWeight={600} color="var(--studio-landing-text-accent)">World</Text>
                </VStack>
              </Flex>
            </Box>
          </MotionBox>

        </MotionBox>
      </Box>
    </Box>
  )
}
