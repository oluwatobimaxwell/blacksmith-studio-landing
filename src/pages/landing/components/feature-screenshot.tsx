import { Box, Flex, HStack, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ClipboardList, Compass, Layout, Server, TestTube, Shield, Eye, Database,
  Terminal, BookOpen, Palette, GitBranch, Wifi, Play, Square,
} from 'lucide-react'
import type { WalkthroughFeature } from '../data/walkthrough-features'

const MotionBox = motion.create(Box)

// ─── Shared window chrome ────────────────────────────────────────────────────

function WindowChrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box
      borderRadius="16px"
      overflow="hidden"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.08)"
      bg="#0d0d0d"
      boxShadow="0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)"
    >
      {/* Title bar */}
      <HStack
        px={4}
        h="40px"
        borderBottom="1px solid rgba(255,255,255,0.06)"
        bg="rgba(255,255,255,0.02)"
        spacing={3}
        flexShrink={0}
      >
        <HStack spacing={1.5}>
          <Box w="11px" h="11px" borderRadius="full" bg="#ef5350" opacity={0.8} />
          <Box w="11px" h="11px" borderRadius="full" bg="#ffa726" opacity={0.8} />
          <Box w="11px" h="11px" borderRadius="full" bg="#2dd4a8" opacity={0.8} />
        </HStack>
        <Text fontSize="12px" fontFamily="mono" color="rgba(255,255,255,0.3)" flex={1} textAlign="center">
          {title}
        </Text>
        <Box w="48px" />
      </HStack>
      {children}
    </Box>
  )
}

// ─── Canvas screenshot ────────────────────────────────────────────────────────

const canvasAgents = [
  { icon: ClipboardList, label: 'Product Manager', status: 'done', color: '#2dd4a8' },
  { icon: Compass, label: 'Architect', status: 'done', color: '#2dd4a8' },
  { icon: Layout, label: 'Frontend', status: 'working', color: '#60a5fa' },
  { icon: Server, label: 'Backend', status: 'working', color: '#60a5fa' },
  { icon: Database, label: 'Database', status: 'waiting', color: 'rgba(255,255,255,0.25)' },
  { icon: Eye, label: 'Code Review', status: 'waiting', color: 'rgba(255,255,255,0.25)' },
  { icon: Shield, label: 'Security', status: 'waiting', color: 'rgba(255,255,255,0.25)' },
  { icon: TestTube, label: 'QA Engineer', status: 'waiting', color: 'rgba(255,255,255,0.25)' },
]

function CanvasScreenshot() {
  return (
    <Box minH="420px" p={4} position="relative">
      {/* Task bar */}
      <Box mb={4} p={3} borderRadius="lg" bg="rgba(255,255,255,0.04)" borderWidth="1px" borderColor="rgba(255,255,255,0.06)">
        <HStack justify="space-between" mb={2}>
          <Text fontSize="11px" fontWeight={600} color="rgba(255,255,255,0.5)" letterSpacing="0.06em" textTransform="uppercase">Current Task</Text>
          <Box px={2} py={0.5} borderRadius="full" bg="rgba(45,212,168,0.12)" borderWidth="1px" borderColor="rgba(45,212,168,0.25)">
            <Text fontSize="10px" fontWeight={600} color="#2dd4a8">In Progress</Text>
          </Box>
        </HStack>
        <Text fontSize="13px" color="rgba(255,255,255,0.8)" fontWeight={500}>Build user authentication with JWT + refresh tokens</Text>
      </Box>

      {/* Agent grid */}
      <SimpleGrid columns={4} gap={2}>
        {canvasAgents.map((agent) => {
          const Icon = agent.icon
          const isActive = agent.status !== 'waiting'
          return (
            <Box
              key={agent.label}
              p={3}
              borderRadius="lg"
              bg={isActive ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)'}
              borderWidth="1px"
              borderColor={agent.status === 'done' ? 'rgba(45,212,168,0.3)' : agent.status === 'working' ? 'rgba(96,165,250,0.3)' : 'rgba(255,255,255,0.05)'}
            >
              <VStack spacing={2} align="start">
                <HStack justify="space-between" w="full">
                  <Box color={agent.color} opacity={isActive ? 1 : 0.4}>
                    <Icon size={14} />
                  </Box>
                  <Box
                    w="6px"
                    h="6px"
                    borderRadius="full"
                    bg={agent.status === 'done' ? '#2dd4a8' : agent.status === 'working' ? '#60a5fa' : 'rgba(255,255,255,0.15)'}
                    sx={agent.status === 'working' ? { animation: 'heroPulse 1.5s ease-in-out infinite' } : {}}
                  />
                </HStack>
                <Text fontSize="10px" fontWeight={500} color={isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)'} lineHeight={1.3}>
                  {agent.label}
                </Text>
              </VStack>
            </Box>
          )
        })}
      </SimpleGrid>

      {/* Output log */}
      <Box mt={3} p={3} borderRadius="lg" bg="rgba(255,255,255,0.02)" borderWidth="1px" borderColor="rgba(255,255,255,0.05)" fontFamily="mono">
        <Text fontSize="10px" fontWeight={600} color="rgba(255,255,255,0.3)" mb={2} letterSpacing="0.06em">OUTPUT</Text>
        {['✓  PM: Feature scoped — 4 tasks created', '✓  Architect: System design complete', '⟳  Frontend: Writing auth components...', '⟳  Backend: Implementing JWT service...'].map((line, i) => (
          <Text key={i} fontSize="11px" color={line.startsWith('✓') ? '#2dd4a8' : 'rgba(255,255,255,0.5)'} lineHeight={1.8}>
            {line}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

// ─── Chat screenshot ──────────────────────────────────────────────────────────

const chatMessages = [
  { role: 'user', text: 'Why is the auth token not refreshing?' },
  { role: 'ai', text: 'Looking at your `api/client.ts`... the refresh interceptor is attached after the initial request fires. The token expires mid-flight and the retry logic never triggers.\n\nHere\'s the fix:' },
  { role: 'code', text: '// Move interceptor registration to module level\nexport const client = createClient()\nclient.interceptors.response.use(null, handleRefresh)' },
  { role: 'user', text: 'Can you apply that fix?' },
  { role: 'ai', text: 'Done — edited `api/client.ts`. The interceptor now registers at module init. Your auth flow should work correctly.' },
]

function ChatScreenshot() {
  return (
    <Flex minH="420px">
      {/* File tree sidebar */}
      <Box w="160px" borderRight="1px solid rgba(255,255,255,0.06)" bg="rgba(255,255,255,0.01)" py={3} flexShrink={0} display={{ base: 'none', sm: 'block' }}>
        <Text fontSize="9px" fontWeight={600} color="rgba(255,255,255,0.25)" px={3} pb={2} letterSpacing="0.08em" textTransform="uppercase">Explorer</Text>
        {['src/', '  api/', '    client.ts', '    hooks/', '  components/', '  pages/'].map((item, i) => (
          <Text key={i} fontSize="11px" fontFamily="mono" color={item.includes('client.ts') ? '#2dd4a8' : 'rgba(255,255,255,0.3)'} px={3} py={0.5} bg={item.includes('client.ts') ? 'rgba(45,212,168,0.08)' : 'transparent'}>
            {item}
          </Text>
        ))}
      </Box>

      {/* Chat panel */}
      <Flex flex={1} direction="column" py={3} px={4}>
        <Text fontSize="10px" fontWeight={600} color="rgba(255,255,255,0.25)" pb={3} letterSpacing="0.06em" textTransform="uppercase">AI Chat</Text>
        <VStack spacing={3} align="stretch" flex={1}>
          {chatMessages.map((msg, i) => (
            <Box key={i}>
              {msg.role === 'user' && (
                <Flex justify="flex-end">
                  <Box maxW="75%" px={3} py={2} borderRadius="lg" borderBottomRightRadius="sm" bg="rgba(255,255,255,0.07)" borderWidth="1px" borderColor="rgba(255,255,255,0.1)">
                    <Text fontSize="12px" color="rgba(255,255,255,0.9)">{msg.text}</Text>
                  </Box>
                </Flex>
              )}
              {msg.role === 'ai' && (
                <Box maxW="85%" px={3} py={2} borderRadius="lg" borderBottomLeftRadius="sm" bg="rgba(255,255,255,0.03)" borderWidth="1px" borderColor="rgba(255,255,255,0.07)">
                  <Text fontSize="12px" color="rgba(255,255,255,0.65)" lineHeight={1.6} whiteSpace="pre-line">{msg.text}</Text>
                </Box>
              )}
              {msg.role === 'code' && (
                <Box maxW="90%" px={3} py={2.5} borderRadius="lg" bg="#0a0a0a" borderWidth="1px" borderColor="rgba(255,255,255,0.08)" fontFamily="mono">
                  <Text fontSize="11px" color="#2dd4a8" lineHeight={1.8} whiteSpace="pre">{msg.text}</Text>
                </Box>
              )}
            </Box>
          ))}
        </VStack>
        {/* Input bar */}
        <HStack mt={3} px={3} py={2} borderRadius="lg" bg="rgba(255,255,255,0.04)" borderWidth="1px" borderColor="rgba(255,255,255,0.08)">
          <Text fontSize="12px" color="rgba(255,255,255,0.25)" flex={1}>Ask anything about your code...</Text>
          <Box w="1px" h="14px" bg="rgba(255,255,255,0.4)" sx={{ animation: 'cursor-blink 1.2s step-end infinite' }} />
        </HStack>
      </Flex>
    </Flex>
  )
}

// ─── Editor screenshot ────────────────────────────────────────────────────────

const editorLines = [
  { num: 1,  tokens: [{ t: 'import', k: 'kw' }, { t: ' { useState } ', k: 'tx' }, { t: 'from', k: 'kw' }, { t: " 'react'", k: 'st' }] },
  { num: 2,  tokens: [] },
  { num: 3,  tokens: [{ t: 'export', k: 'kw' }, { t: ' function ', k: 'tx' }, { t: 'useAuth', k: 'fn' }, { t: '() {', k: 'tx' }] },
  { num: 4,  tokens: [{ t: '  const', k: 'kw' }, { t: ' [token, setToken] = ', k: 'tx' }, { t: 'useState', k: 'fn' }, { t: '<', k: 'tx' }, { t: 'string', k: 'kw' }, { t: ' | ', k: 'tx' }, { t: 'null', k: 'kw' }, { t: '>(null)', k: 'tx' }] },
  { num: 5,  tokens: [] },
  { num: 6,  tokens: [{ t: '  const', k: 'kw' }, { t: ' login = ', k: 'tx' }, { t: 'async', k: 'kw' }, { t: ' (email: ', k: 'tx' }, { t: 'string', k: 'kw' }, { t: ') => {', k: 'tx' }] },
  { num: 7,  tokens: [{ t: '    const', k: 'kw' }, { t: ' res = ', k: 'tx' }, { t: 'await', k: 'kw' }, { t: ' ', k: 'tx' }, { t: 'apiFetch', k: 'fn' }, { t: "('/auth/login', {", k: 'tx' }] },
  { num: 8,  tokens: [{ t: '      method: ', k: 'tx' }, { t: "'POST'", k: 'st' }, { t: ', body: { email }', k: 'tx' }] },
  { num: 9,  tokens: [{ t: '    })', k: 'tx' }] },
  { num: 10, tokens: [{ t: '    setToken(res.accessToken)', k: 'tx' }] },
  { num: 11, tokens: [{ t: '  }', k: 'tx' }] },
  { num: 12, tokens: [] },
  { num: 13, tokens: [{ t: '  return', k: 'kw' }, { t: ' { token, login }', k: 'tx' }] },
  { num: 14, tokens: [{ t: '}', k: 'tx' }] },
]

const editorColors: Record<string, string> = {
  kw: 'rgba(255,255,255,0.9)',
  st: '#2dd4a8',
  fn: '#60a5fa',
  tx: 'rgba(255,255,255,0.5)',
}

function EditorScreenshot() {
  return (
    <Box minH="420px">
      {/* Tabs */}
      <HStack spacing={0} borderBottom="1px solid rgba(255,255,255,0.06)" flexShrink={0}>
        {['use-auth.ts', 'api/client.ts', 'types.ts'].map((tab, i) => (
          <Box key={tab} px={4} py={2.5} fontSize="12px" fontFamily="mono"
            color={i === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.3)'}
            borderBottom={i === 0 ? '1px solid #2dd4a8' : '1px solid transparent'}
            cursor="default" whiteSpace="nowrap"
          >
            {tab}
          </Box>
        ))}
      </HStack>
      {/* Code */}
      <Box py={3} px={2} overflowX="auto">
        {editorLines.map((line) => (
          <HStack key={line.num} spacing={0} h="20px" align="center">
            <Text fontSize="11px" fontFamily="mono" color="rgba(255,255,255,0.2)" w="32px" textAlign="right" mr={4} userSelect="none" flexShrink={0}>
              {line.num}
            </Text>
            {line.tokens.map((tok, i) => (
              <Text key={i} as="span" fontSize="12px" fontFamily="mono" color={editorColors[tok.k]} whiteSpace="pre">
                {tok.t}
              </Text>
            ))}
          </HStack>
        ))}
      </Box>
    </Box>
  )
}

// ─── Terminal screenshot ──────────────────────────────────────────────────────

const terminalLines = [
  { text: '$ npm run dev', color: 'rgba(255,255,255,0.6)' },
  { text: '', color: '' },
  { text: '  VITE v6.0.0  ready in 241ms', color: '#2dd4a8' },
  { text: '', color: '' },
  { text: '  ➜  Local:   http://localhost:5173/', color: 'rgba(255,255,255,0.5)' },
  { text: '  ➜  Network: use --host to expose', color: 'rgba(255,255,255,0.3)' },
  { text: '', color: '' },
  { text: '[dev-server] Starting Django on :8000...', color: 'rgba(255,255,255,0.4)' },
  { text: 'System check identified no issues (0 silenced).', color: 'rgba(255,255,255,0.35)' },
  { text: 'Starting development server at http://127.0.0.1:8000/', color: '#2dd4a8' },
  { text: 'Quit the server with CONTROL-C.', color: 'rgba(255,255,255,0.25)' },
  { text: '', color: '' },
  { text: '[16:42:03] GET /api/auth/me 200 OK  (12ms)', color: 'rgba(255,255,255,0.4)' },
  { text: '[16:42:04] POST /api/auth/refresh 200 OK  (8ms)', color: 'rgba(255,255,255,0.4)' },
  { text: '$ _', color: 'rgba(255,255,255,0.6)' },
]

function TerminalScreenshot() {
  return (
    <Box minH="420px" bg="#020202" p={4} fontFamily="mono">
      <HStack spacing={3} mb={4} pb={3} borderBottom="1px solid rgba(255,255,255,0.06)">
        <HStack spacing={1}>
          <Box px={3} py={0.5} borderRadius="sm" bg="rgba(255,255,255,0.08)" borderWidth="1px" borderColor="rgba(255,255,255,0.06)">
            <Text fontSize="11px" color="rgba(255,255,255,0.5)">Terminal</Text>
          </Box>
          <Box px={3} py={0.5} borderRadius="sm">
            <Text fontSize="11px" color="rgba(255,255,255,0.25)">Dev Services</Text>
          </Box>
        </HStack>
        <Box flex={1} />
        <HStack spacing={1}>
          <Box w="6px" h="6px" borderRadius="full" bg="#2dd4a8" sx={{ animation: 'heroPulse 2s ease-in-out infinite' }} />
          <Text fontSize="10px" color="#2dd4a8">2 services running</Text>
        </HStack>
      </HStack>
      {terminalLines.map((line, i) => (
        <Text key={i} fontSize="12px" color={line.color} lineHeight={1.75} sx={line.text === '$ _' ? { animation: 'cursor-blink 1.2s step-end infinite' } : {}}>
          {line.text || '\u00A0'}
        </Text>
      ))}
    </Box>
  )
}

// ─── Git screenshot ───────────────────────────────────────────────────────────

const gitDiffLines = [
  { prefix: '@@', text: ' -12,7 +12,11 @@ function apiFetch(...)', color: 'rgba(255,255,255,0.35)' },
  { prefix: ' ', text: '  const response = await fetch(url, opts)', color: 'rgba(255,255,255,0.5)' },
  { prefix: '-', text: '  if (response.status === 401) {', color: '#ef5350', bg: 'rgba(239,83,80,0.08)' },
  { prefix: '-', text: '    clearTokens()', color: '#ef5350', bg: 'rgba(239,83,80,0.08)' },
  { prefix: '-', text: '    throw new Error("Unauthorized")', color: '#ef5350', bg: 'rgba(239,83,80,0.08)' },
  { prefix: '+', text: '  if (response.status === 401 && !opts._retry) {', color: '#2dd4a8', bg: 'rgba(45,212,168,0.07)' },
  { prefix: '+', text: '    const newToken = await attemptTokenRefresh()', color: '#2dd4a8', bg: 'rgba(45,212,168,0.07)' },
  { prefix: '+', text: '    if (!newToken) { clearTokens(); throw new Error("Session expired") }', color: '#2dd4a8', bg: 'rgba(45,212,168,0.07)' },
  { prefix: '+', text: '    opts._retry = true', color: '#2dd4a8', bg: 'rgba(45,212,168,0.07)' },
  { prefix: '+', text: '    return apiFetch(url, opts)', color: '#2dd4a8', bg: 'rgba(45,212,168,0.07)' },
  { prefix: ' ', text: '  }', color: 'rgba(255,255,255,0.5)' },
  { prefix: ' ', text: '  return response.json()', color: 'rgba(255,255,255,0.5)' },
]

function GitScreenshot() {
  return (
    <Box minH="420px">
      <Flex>
        {/* Changed files */}
        <Box w="180px" borderRight="1px solid rgba(255,255,255,0.06)" py={3} flexShrink={0} display={{ base: 'none', sm: 'block' }}>
          <Text fontSize="9px" fontWeight={600} color="rgba(255,255,255,0.25)" px={3} pb={2} letterSpacing="0.06em" textTransform="uppercase">Changes</Text>
          {[{ f: 'api/client.ts', s: 'M', c: '#ffa726' }, { f: 'hooks/use-auth.ts', s: 'M', c: '#ffa726' }, { f: 'types.ts', s: 'A', c: '#2dd4a8' }].map(({ f, s, c }) => (
            <HStack key={f} px={3} py={1.5} _hover={{ bg: 'rgba(255,255,255,0.03)' }}>
              <Text fontSize="10px" fontWeight={700} color={c} w="12px">{s}</Text>
              <Text fontSize="11px" fontFamily="mono" color="rgba(255,255,255,0.5)">{f}</Text>
            </HStack>
          ))}
        </Box>

        {/* Diff */}
        <Box flex={1} py={3} px={2} fontFamily="mono" overflowX="auto">
          <Text fontSize="11px" fontWeight={600} color="rgba(255,255,255,0.4)" px={2} pb={2}>api/client.ts</Text>
          {gitDiffLines.map((line, i) => (
            <HStack key={i} spacing={0} h="20px" bg={line.bg} borderRadius="sm" px={1}>
              <Text fontSize="11px" color={line.color} w="14px" flexShrink={0} fontWeight={600}>{line.prefix}</Text>
              <Text fontSize="11px" color={line.color} whiteSpace="pre" letterSpacing="-0.01em">{line.text}</Text>
            </HStack>
          ))}

          {/* Commit box */}
          <Box mt={4} p={3} borderRadius="lg" bg="rgba(255,255,255,0.03)" borderWidth="1px" borderColor="rgba(255,255,255,0.07)">
            <HStack justify="space-between" mb={2}>
              <HStack spacing={1.5}>
                <GitBranch size={11} color="rgba(255,255,255,0.3)" />
                <Text fontSize="11px" fontFamily="mono" color="rgba(255,255,255,0.3)">main</Text>
              </HStack>
              <Text fontSize="10px" color="#2dd4a8" fontWeight={500}>AI suggested ↑</Text>
            </HStack>
            <Text fontSize="12px" color="rgba(255,255,255,0.7)" fontFamily="mono">fix: add token refresh retry to apiFetch interceptor</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

const screenshotMap: Record<string, React.FC> = {
  canvas: CanvasScreenshot,
  chat: ChatScreenshot,
  editor: EditorScreenshot,
  terminal: TerminalScreenshot,
  git: GitScreenshot,
}

const titleMap: Record<string, string> = {
  canvas: 'Blacksmith Studio — Multi-Agent Canvas',
  chat: 'Blacksmith Studio — AI Chat',
  editor: 'Blacksmith Studio — Code Editor',
  terminal: 'Blacksmith Studio — Terminal',
  git: 'Blacksmith Studio — Git',
}

interface FeatureScreenshotProps {
  feature: WalkthroughFeature
}

export function FeatureScreenshot({ feature }: FeatureScreenshotProps) {
  const Screenshot = screenshotMap[feature.id] ?? CanvasScreenshot

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={feature.id}
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.99 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <WindowChrome title={titleMap[feature.id]}>
          <Screenshot />
        </WindowChrome>
      </MotionBox>
    </AnimatePresence>
  )
}
