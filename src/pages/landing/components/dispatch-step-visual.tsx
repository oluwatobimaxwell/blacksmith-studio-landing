import { Box, Flex, HStack, VStack, Text, Progress } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Shield, Code2, Database, Palette, ClipboardList, FileText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { WindowChrome } from './window-chrome'

const MotionBox = motion.create(Box)

interface DispatchTask {
  role: string
  icon: LucideIcon
  status: 'queued' | 'running' | 'done'
  progress: number
}

interface StepVisualProps {
  step: number
}

const STEP2_TASKS: DispatchTask[] = [
  { role: 'Database', icon: Database, status: 'queued', progress: 0 },
  { role: 'Backend', icon: Code2, status: 'queued', progress: 0 },
  { role: 'UI/UX', icon: Palette, status: 'queued', progress: 0 },
  { role: 'Frontend', icon: Code2, status: 'queued', progress: 0 },
  { role: 'QA', icon: ClipboardList, status: 'queued', progress: 0 },
  { role: 'Docs', icon: FileText, status: 'queued', progress: 0 },
]

const STEP3_TASKS: DispatchTask[] = [
  { role: 'Database', icon: Database, status: 'running', progress: 58 },
  { role: 'Backend', icon: Code2, status: 'queued', progress: 0 },
  { role: 'UI/UX', icon: Palette, status: 'running', progress: 72 },
  { role: 'Frontend', icon: Code2, status: 'queued', progress: 0 },
  { role: 'QA', icon: ClipboardList, status: 'queued', progress: 0 },
  { role: 'Docs', icon: FileText, status: 'queued', progress: 0 },
]

const STEP6_TASKS: DispatchTask[] = [
  { role: 'Database', icon: Database, status: 'done', progress: 100 },
  { role: 'Backend', icon: Code2, status: 'done', progress: 100 },
  { role: 'UI/UX', icon: Palette, status: 'done', progress: 100 },
  { role: 'Frontend', icon: Code2, status: 'done', progress: 100 },
  { role: 'QA', icon: ClipboardList, status: 'done', progress: 100 },
  { role: 'Docs', icon: FileText, status: 'done', progress: 100 },
]

const statusColor: Record<DispatchTask['status'], string> = {
  done: 'rgba(45,212,168,0.9)',
  running: 'rgba(255,184,84,0.9)',
  queued: 'rgba(255,255,255,0.25)',
}

const statusBarColor: Record<DispatchTask['status'], string> = {
  done: 'rgba(45,212,168,0.75)',
  running: 'rgba(255,184,84,0.75)',
  queued: 'transparent',
}

function TaskRow({ task }: { task: DispatchTask }) {
  return (
    <Flex
      align="center"
      gap={3}
      px={3}
      py={2}
      borderRadius="8px"
      bg="rgba(255,255,255,0.025)"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.06)"
    >
      <Box
        w="22px"
        h="22px"
        borderRadius="6px"
        bg="rgba(255,255,255,0.04)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <task.icon size={11} color={statusColor[task.status]} />
      </Box>
      <Text fontSize="11px" color="rgba(255,255,255,0.75)" fontWeight={500} minW="70px">
        {task.role}
      </Text>
      <Box flex={1} minW={0}>
        <Progress
          value={task.progress}
          size="xs"
          borderRadius="full"
          bg="rgba(255,255,255,0.05)"
          sx={{ '& > div': { background: statusBarColor[task.status] } }}
        />
      </Box>
      {task.status === 'done' && <CheckCircle2 size={12} color="rgba(45,212,168,0.9)" />}
    </Flex>
  )
}

function PromptInput() {
  return (
    <Flex
      align="center"
      gap={2}
      px={3}
      py={3}
      borderRadius="10px"
      bg="rgba(255,255,255,0.03)"
      borderWidth="1px"
      borderColor="rgba(45,212,168,0.3)"
    >
      <Box w="6px" h="6px" borderRadius="full" bg="#2dd4a8" flexShrink={0} />
      <Text fontSize="12px" color="rgba(255,255,255,0.8)" fontFamily="mono">
        Add a comment thread to blog posts
        <Box
          as="span"
          display="inline-block"
          w="2px"
          h="12px"
          bg="#2dd4a8"
          ml={1}
          verticalAlign="middle"
          sx={{ animation: 'cursor-blink 1.1s ease-in-out infinite' }}
        />
      </Text>
    </Flex>
  )
}

function ArtifactHandoff() {
  return (
    <VStack spacing={2} align="stretch">
      <Box
        px={3}
        py={2}
        borderRadius="8px"
        bg="rgba(255,255,255,0.025)"
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.06)"
      >
        <Text fontSize="10px" color="rgba(255,255,255,0.35)" letterSpacing="0.06em" textTransform="uppercase" mb={1.5}>
          Designer artifact &middot; comment-thread.html
        </Text>
        <Text fontSize="10.5px" fontFamily="mono" color="rgba(255,255,255,0.55)" lineHeight={1.6}>
          {'<section class="thread">'}<br />
          &nbsp;&nbsp;{'<article class="comment">'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<button>Reply</button>'}<br />
          &nbsp;&nbsp;{'</article>'}<br />
          {'</section>'}
        </Text>
      </Box>
      <Flex justify="center" py={1}>
        <Box
          fontSize="10px"
          color="rgba(45,212,168,0.7)"
          fontFamily="mono"
          letterSpacing="0.1em"
        >
          ↓ handed to frontend
        </Box>
      </Flex>
      <Box
        px={3}
        py={2}
        borderRadius="8px"
        bg="rgba(45,212,168,0.04)"
        borderWidth="1px"
        borderColor="rgba(45,212,168,0.18)"
      >
        <Text fontSize="10px" color="rgba(45,212,168,0.7)" letterSpacing="0.06em" textTransform="uppercase" mb={1.5}>
          Frontend output &middot; CommentThread.tsx
        </Text>
        <Text fontSize="10.5px" fontFamily="mono" color="rgba(255,255,255,0.65)" lineHeight={1.6}>
          {'<VStack as="section">'}<br />
          &nbsp;&nbsp;{'<Box as="article">'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<Button>Reply</Button>'}<br />
          &nbsp;&nbsp;{'</Box>'}<br />
          {'</VStack>'}
        </Text>
      </Box>
    </VStack>
  )
}

function ReviewerCheck() {
  const checks = [
    'Schema matches spec',
    'No N+1 queries',
    "Follows project's component pattern",
    'Tests cover reply + edit paths',
    'No secrets committed',
  ]
  return (
    <VStack spacing={2} align="stretch">
      <Flex align="center" gap={2} mb={1}>
        <Box
          w="26px"
          h="26px"
          borderRadius="full"
          bg="rgba(45,212,168,0.12)"
          borderWidth="1px"
          borderColor="rgba(45,212,168,0.3)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Shield size={12} color="#2dd4a8" />
        </Box>
        <Text fontSize="11px" color="rgba(255,255,255,0.7)" fontWeight={600} letterSpacing="0.02em">
          Reviewer &middot; merge gate
        </Text>
      </Flex>
      {checks.map((check, i) => (
        <Flex key={check} align="center" gap={2}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <CheckCircle2 size={12} color="rgba(45,212,168,0.9)" />
          </motion.div>
          <Text fontSize="11.5px" color="rgba(255,255,255,0.7)">
            {check}
          </Text>
        </Flex>
      ))}
    </VStack>
  )
}

function DispatchSummary() {
  const stats = [
    { label: 'Tasks', value: '6' },
    { label: 'Duration', value: '47 min' },
    { label: 'Files', value: '14' },
    { label: 'Cost', value: '$0.83' },
  ]
  return (
    <VStack spacing={3} align="stretch">
      <Flex align="center" gap={2}>
        <CheckCircle2 size={14} color="#2dd4a8" />
        <Text fontSize="12px" color="rgba(45,212,168,0.9)" fontWeight={600}>
          Dispatch complete
        </Text>
      </Flex>
      <HStack
        spacing={0}
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.06)"
        borderRadius="10px"
        overflow="hidden"
        bg="rgba(255,255,255,0.02)"
      >
        {stats.map((s, i) => (
          <Flex key={s.label} flex={1} direction="column" px={3} py={3} borderLeftWidth={i === 0 ? 0 : '1px'} borderColor="rgba(255,255,255,0.06)">
            <Text fontSize="10px" color="rgba(255,255,255,0.35)" letterSpacing="0.06em" textTransform="uppercase">
              {s.label}
            </Text>
            <Text fontSize="16px" color="rgba(255,255,255,0.92)" fontWeight={600} letterSpacing="-0.02em">
              {s.value}
            </Text>
          </Flex>
        ))}
      </HStack>
    </VStack>
  )
}

function Frame({ children, frameKey }: { children: React.ReactNode; frameKey: string }) {
  return (
    <MotionBox
      key={frameKey}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionBox>
  )
}

export function DispatchStepVisual({ step }: StepVisualProps) {
  return (
    <WindowChrome title="dispatch &middot; comment-thread">
      <Box p={4} minH="360px">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Frame frameKey="s0">
              <PromptInput />
            </Frame>
          )}
          {step === 1 && (
            <Frame frameKey="s1">
              <VStack spacing={2} align="stretch">
                {STEP2_TASKS.map((t) => (
                  <TaskRow key={t.role} task={t} />
                ))}
              </VStack>
            </Frame>
          )}
          {step === 2 && (
            <Frame frameKey="s2">
              <VStack spacing={2} align="stretch">
                {STEP3_TASKS.map((t) => (
                  <TaskRow key={t.role} task={t} />
                ))}
              </VStack>
            </Frame>
          )}
          {step === 3 && (
            <Frame frameKey="s3">
              <ArtifactHandoff />
            </Frame>
          )}
          {step === 4 && (
            <Frame frameKey="s4">
              <ReviewerCheck />
            </Frame>
          )}
          {step === 5 && (
            <Frame frameKey="s5">
              <VStack spacing={3} align="stretch">
                <VStack spacing={1.5} align="stretch">
                  {STEP6_TASKS.map((t) => (
                    <TaskRow key={t.role} task={t} />
                  ))}
                </VStack>
                <DispatchSummary />
              </VStack>
            </Frame>
          )}
        </AnimatePresence>
      </Box>
    </WindowChrome>
  )
}
