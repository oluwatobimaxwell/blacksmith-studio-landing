import { Box, Heading, Text, VStack, Flex, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { showcaseProjects } from '../data/showcase'
import { ShowcaseCard } from './showcase-card'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

const MotionBox = motion.create(Box)

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function ShowcaseSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box
      as="section"
      id="showcase"
      aria-label="Showcase"
      py={{ base: '100px', md: '140px' }}
      bg="var(--studio-landing-bg)"
      position="relative"
      overflow="hidden"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'flex-end' }}
            gap={4}
            mb={{ base: 10, md: 12 }}
          >
            <VStack align="flex-start" spacing={3}>
              <MotionBox variants={itemVariants}>
                <Text
                  fontSize="12px"
                  fontWeight={500}
                  color="var(--studio-landing-text-accent)"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  Showcase
                </Text>
              </MotionBox>
              <MotionBox variants={itemVariants}>
                <Heading
                  as="h2"
                  fontSize={{ base: '32px', md: '46px' }}
                  fontWeight={600}
                  color="var(--studio-landing-text-primary)"
                  letterSpacing="-0.035em"
                  lineHeight={1.05}
                >
                  Built with Blacksmith.
                </Heading>
              </MotionBox>
              <MotionBox variants={itemVariants}>
                <Text fontSize={{ base: '15px', md: '17px' }} color="var(--studio-landing-text-secondary)" lineHeight={1.7}>
                  Real projects, real dispatches, real numbers.
                </Text>
              </MotionBox>
            </VStack>
            <MotionBox variants={itemVariants}>
              <Flex
                as="a"
                href="#showcase"
                align="center"
                gap={1.5}
                fontSize="14px"
                color="var(--studio-landing-text-secondary)"
                fontWeight={500}
                _hover={{ color: 'white', gap: 2.5 }}
                transition="color 0.15s ease, gap 0.2s ease"
                cursor="pointer"
              >
                View all
                <ArrowRight size={14} />
              </Flex>
            </MotionBox>
          </Flex>
        </MotionBox>
      </Box>

      <MotionBox
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      >
        <Box
          as="div"
          role="list"
          overflowX="auto"
          overflowY="hidden"
          sx={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            maskImage: 'linear-gradient(90deg, transparent, black 3%, black 97%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 3%, black 97%, transparent)',
          }}
          pb={4}
        >
          <HStack
            spacing={4}
            px={{ base: 5, md: 8 }}
            w="max-content"
          >
            {showcaseProjects.map((project) => (
              <Box key={project.id} role="listitem">
                <ShowcaseCard project={project} />
              </Box>
            ))}
            <Box
              flexShrink={0}
              w={{ base: '180px', md: '220px' }}
              borderRadius="14px"
              bg="transparent"
              borderWidth="1px"
              borderColor="var(--studio-landing-border)"
              borderStyle="dashed"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                as="a"
                href="#showcase"
                direction="column"
                align="center"
                gap={2}
                p={6}
                color="var(--studio-landing-text-secondary)"
                _hover={{ color: 'white' }}
                transition="color 0.15s ease"
                cursor="pointer"
                textAlign="center"
              >
                <Text fontSize="14px" fontWeight={500}>
                  View all
                </Text>
                <ArrowRight size={16} />
              </Flex>
            </Box>
          </HStack>
        </Box>
      </MotionBox>
    </Box>
  )
}
