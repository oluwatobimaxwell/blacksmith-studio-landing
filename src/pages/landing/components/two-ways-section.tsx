import { Box, Heading, Text, SimpleGrid, VStack, HStack, Flex, Progress } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'
import { WindowChrome } from './window-chrome'

const MotionBox = motion.create(Box)

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function SingleAgentVisual() {
  return (
    <VStack spacing={3} align="stretch" fontSize="12px" fontFamily="mono">
      <Flex justify="flex-end">
        <Box
          maxW="75%"
          px={3}
          py={2}
          borderRadius="10px 10px 2px 10px"
          bg="rgba(45,212,168,0.12)"
          borderWidth="1px"
          borderColor="rgba(45,212,168,0.25)"
        >
          <Text fontSize="12px" color="rgba(255,255,255,0.85)" fontFamily="body">
            add a dark mode toggle to the settings page
          </Text>
        </Box>
      </Flex>
      <Box
        px={3}
        py={2}
        borderRadius="10px 10px 10px 2px"
        bg="rgba(255,255,255,0.04)"
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.08)"
      >
        <Text fontSize="11px" color="rgba(255,255,255,0.55)" mb={1.5} fontFamily="body">
          settings-page.tsx &middot; +8 &minus;2
        </Text>
        <VStack spacing={0.5} align="stretch">
          <Text fontSize="11px" color="rgba(45,212,168,0.85)">+ import {'{ useColorMode }'} from '@chakra-ui/react'</Text>
          <Text fontSize="11px" color="rgba(45,212,168,0.85)">+ const {'{ toggleColorMode }'} = useColorMode()</Text>
          <Text fontSize="11px" color="rgba(255,255,255,0.45)">  return (</Text>
          <Text fontSize="11px" color="rgba(45,212,168,0.85)">+   {'<Button onClick={toggleColorMode}>Dark</Button>'}</Text>
        </VStack>
      </Box>
      <HStack spacing={2} justify="flex-end" pt={1}>
        <Box
          px={3}
          py="4px"
          borderRadius="full"
          bg="rgba(255,255,255,0.04)"
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.08)"
        >
          <Text fontSize="11px" color="rgba(255,255,255,0.6)" fontFamily="body">Reject</Text>
        </Box>
        <Box
          px={3}
          py="4px"
          borderRadius="full"
          bg="rgba(45,212,168,0.18)"
          borderWidth="1px"
          borderColor="rgba(45,212,168,0.35)"
        >
          <Text fontSize="11px" color="#2dd4a8" fontWeight={600} fontFamily="body">Apply</Text>
        </Box>
      </HStack>
    </VStack>
  )
}

const multiAgentTasks = [
  { role: 'Architect', status: 'done', progress: 100 },
  { role: 'Database', status: 'done', progress: 100 },
  { role: 'Backend', status: 'running', progress: 68 },
  { role: 'UI/UX', status: 'running', progress: 42 },
  { role: 'Frontend', status: 'queued', progress: 0 },
  { role: 'QA', status: 'queued', progress: 0 },
]

const statusColor: Record<string, string> = {
  done: 'rgba(45,212,168,0.85)',
  running: 'rgba(255,184,84,0.85)',
  queued: 'rgba(255,255,255,0.25)',
}

function MultiAgentVisual() {
  return (
    <VStack spacing={2} align="stretch">
      <Flex justify="flex-end" mb={1}>
        <Box
          maxW="90%"
          px={3}
          py={2}
          borderRadius="10px 10px 2px 10px"
          bg="rgba(45,212,168,0.12)"
          borderWidth="1px"
          borderColor="rgba(45,212,168,0.25)"
        >
          <Text fontSize="12px" color="rgba(255,255,255,0.85)">
            add user profiles with avatar upload
          </Text>
        </Box>
      </Flex>
      {multiAgentTasks.map((task) => (
        <Flex
          key={task.role}
          align="center"
          gap={3}
          px={3}
          py={2}
          borderRadius="8px"
          bg="rgba(255,255,255,0.025)"
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.06)"
        >
          <Box w="6px" h="6px" borderRadius="full" bg={statusColor[task.status]} flexShrink={0} />
          <Text fontSize="11px" color="rgba(255,255,255,0.75)" fontWeight={500} minW="70px">
            {task.role}
          </Text>
          <Box flex={1} minW={0}>
            <Progress
              value={task.progress}
              size="xs"
              borderRadius="full"
              bg="rgba(255,255,255,0.05)"
              sx={{
                '& > div': {
                  background:
                    task.status === 'done'
                      ? 'rgba(45,212,168,0.75)'
                      : task.status === 'running'
                      ? 'rgba(255,184,84,0.75)'
                      : 'transparent',
                },
              }}
            />
          </Box>
          {task.status === 'done' && (
            <CheckCircle2 size={12} color="rgba(45,212,168,0.85)" />
          )}
        </Flex>
      ))}
    </VStack>
  )
}

interface ColumnProps {
  kicker: string
  title: string
  tagline: string
  body: string
  linkLabel: string
  linkHref: string
  children: React.ReactNode
}

function Column({ kicker, title, tagline, body, linkLabel, linkHref, children }: ColumnProps) {
  return (
    <MotionBox
      variants={itemVariants}
      as="article"
      position="relative"
      p={{ base: 6, md: 8 }}
      borderRadius="20px"
      bg="var(--studio-landing-surface)"
      borderWidth="1px"
      borderColor="var(--studio-landing-border)"
      sx={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease' }}
      _hover={{
        borderColor: 'rgba(45,212,168,0.25)',
        transform: 'translateY(-2px)',
      }}
      data-group
    >
      <VStack align="stretch" spacing={4}>
        <Text
          fontSize="11px"
          fontWeight={600}
          color="var(--studio-landing-text-accent)"
          letterSpacing="0.08em"
          textTransform="uppercase"
        >
          {kicker}
        </Text>
        <Heading
          as="h3"
          fontSize={{ base: '28px', md: '34px' }}
          fontWeight={600}
          color="var(--studio-landing-text-primary)"
          letterSpacing="-0.03em"
          lineHeight={1.1}
        >
          {title}
        </Heading>
        <Text fontSize="15px" color="var(--studio-landing-text-secondary)" lineHeight={1.6}>
          <Text as="span" color="var(--studio-landing-text-primary)" fontWeight={500}>
            {tagline}
          </Text>{' '}
          {body}
        </Text>
        <Box my={2}>
          <WindowChrome>
            <Box p={4}>{children}</Box>
          </WindowChrome>
        </Box>
        <Flex
          as="a"
          href={linkHref}
          align="center"
          gap={1.5}
          fontSize="13px"
          color="var(--studio-landing-text-secondary)"
          fontWeight={500}
          transition="color 0.15s ease, gap 0.2s ease"
          _hover={{ color: '#2dd4a8', gap: 2.5 }}
          cursor="pointer"
          width="fit-content"
        >
          {linkLabel}
          <ArrowRight size={13} />
        </Flex>
      </VStack>
    </MotionBox>
  )
}

export function TwoWaysSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <Box
      as="section"
      id="two-ways"
      aria-label="Two ways to build"
      py={{ base: '100px', md: '140px' }}
      bg="var(--studio-landing-bg)"
      position="relative"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
        <MotionBox ref={ref} initial="hidden" animate={controls} variants={sectionVariants}>
          <VStack spacing={4} mb={{ base: 10, md: 14 }} align="center" textAlign="center">
            <MotionBox variants={itemVariants}>
              <Text
                fontSize="12px"
                fontWeight={500}
                color="var(--studio-landing-text-accent)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                One product
              </Text>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Heading
                as="h2"
                fontSize={{ base: '34px', md: '48px' }}
                fontWeight={600}
                color="var(--studio-landing-text-primary)"
                letterSpacing="-0.035em"
                lineHeight={1.05}
                maxW="760px"
              >
                Two ways to build.
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text
                fontSize={{ base: '15px', md: '17px' }}
                color="var(--studio-landing-text-secondary)"
                maxW="560px"
                lineHeight={1.7}
              >
                Studio does two genuinely different things in the same app. Pick based on the size of the task.
              </Text>
            </MotionBox>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }}>
            <Column
              kicker="Single-agent chat"
              title="Single-agent chat."
              tagline='For the 80% of tasks that are "just do this."'
              body="You and one AI, talking. It reads your project, writes the diff, you accept or reject."
              linkLabel="Learn more"
              linkHref="#features"
            >
              <SingleAgentVisual />
            </Column>
            <Column
              kicker="Multi-agent team"
              title="Multi-agent team."
              tagline="For features that cross concerns."
              body="A project manager decomposes your request, a team of 13 specialists — architect, designer, backend, frontend, QA, security — executes in dependency order."
              linkLabel="Learn more"
              linkHref="#dispatch"
            >
              <MultiAgentVisual />
            </Column>
          </SimpleGrid>
        </MotionBox>
      </Box>
    </Box>
  )
}
