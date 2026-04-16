import { Box, Flex, HStack, VStack, Text } from '@chakra-ui/react'
import { Folder, FolderOpen, FileText, GitBranch, Wifi } from 'lucide-react'

interface FileTreeItemProps {
  icon: typeof Folder
  label: string
  indent?: boolean
  active?: boolean
}

function FileTreeItem({ icon: Icon, label, indent, active }: FileTreeItemProps) {
  return (
    <HStack
      spacing={2}
      px={3}
      py="2px"
      pl={indent ? 7 : 3}
      bg={active ? 'rgba(45,212,168,0.07)' : 'transparent'}
      borderRadius="sm"
    >
      <Icon size={13} color={active ? 'var(--studio-brand-green)' : 'var(--studio-text-muted)'} />
      <Text
        fontSize="12px"
        fontFamily="mono"
        color={active ? 'var(--studio-brand-green)' : 'var(--studio-text-muted)'}
      >
        {label}
      </Text>
    </HStack>
  )
}

function Sidebar() {
  return (
    <Box
      w="180px"
      borderRight="1px solid var(--studio-border)"
      bg="rgba(255,255,255,0.02)"
      py={2}
      display={{ base: 'none', md: 'block' }}
      flexShrink={0}
    >
      <Text fontSize="10px" fontWeight={600} color="var(--studio-text-muted)" px={3} pb={2} letterSpacing="0.08em" textTransform="uppercase">
        Explorer
      </Text>
      <FileTreeItem icon={FolderOpen} label="src" />
      <FileTreeItem icon={FileText} label="app.tsx" indent />
      <FileTreeItem icon={FileText} label="theme.ts" indent />
      <FileTreeItem icon={FolderOpen} label="components" />
      <FileTreeItem icon={FileText} label="dashboard.tsx" indent active />
      <FileTreeItem icon={Folder} label="api" />
      <FileTreeItem icon={Folder} label="hooks" />
    </Box>
  )
}

function TabBar() {
  const tabs = [
    { label: 'dashboard.tsx', active: true },
    { label: 'app.tsx', active: false },
    { label: 'theme.ts', active: false },
  ]
  return (
    <HStack spacing={0} borderBottom="1px solid var(--studio-border)" flexShrink={0} overflowX="auto">
      {tabs.map((tab) => (
        <Box
          key={tab.label}
          px={4}
          py={2}
          fontSize="12px"
          fontFamily="mono"
          color={tab.active ? 'var(--studio-text-primary)' : 'var(--studio-text-muted)'}
          bg={tab.active ? 'transparent' : 'transparent'}
          borderBottom={tab.active ? '1px solid var(--studio-brand-green)' : '1px solid transparent'}
          cursor="default"
          whiteSpace="nowrap"
          flexShrink={0}
        >
          {tab.label}
        </Box>
      ))}
    </HStack>
  )
}

function EditorPane() {
  const lines = [
    { num: 1, tokens: [{ t: 'import', c: 'keyword' as const }, { t: ' { useAgents } ', c: 'text' as const }, { t: 'from', c: 'keyword' as const }, { t: " '@/hooks'", c: 'string' as const }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [{ t: 'export', c: 'keyword' as const }, { t: ' function ', c: 'text' as const }, { t: 'Dashboard', c: 'fn' as const }, { t: '() {', c: 'text' as const }] },
    { num: 4, tokens: [{ t: '  const', c: 'keyword' as const }, { t: ' { team } = ', c: 'text' as const }, { t: 'useAgents', c: 'fn' as const }, { t: '()', c: 'text' as const }] },
    { num: 5, tokens: [] },
    { num: 6, tokens: [{ t: '  return', c: 'keyword' as const }, { t: ' (', c: 'text' as const }] },
    { num: 7, tokens: [{ t: '    <', c: 'text' as const }, { t: 'AgentCanvas', c: 'keyword' as const }, { t: ' agents={team} />', c: 'text' as const }] },
    { num: 8, tokens: [{ t: '  )', c: 'text' as const }] },
    { num: 9, tokens: [{ t: '}', c: 'text' as const }] },
  ]
  const colorMap = {
    keyword: 'var(--studio-code-keyword)',
    string: 'var(--studio-code-string)',
    fn: 'var(--studio-code-function)',
    text: 'var(--studio-code-text)',
  } as const

  return (
    <Box flex={1} overflow="hidden">
      <TabBar />
      <Box py={3} px={4} overflowX="auto">
        {lines.map((line) => (
          <HStack key={line.num} spacing={0} h="22px" align="center">
            <Text
              fontSize="12px"
              fontFamily="mono"
              color="var(--studio-text-muted)"
              w={7}
              textAlign="right"
              mr={4}
              userSelect="none"
              opacity={0.5}
              flexShrink={0}
            >
              {line.num}
            </Text>
            {line.tokens.map((token, i) => (
              <Text key={i} as="span" fontSize="13px" fontFamily="mono" color={colorMap[token.c]} whiteSpace="pre">
                {token.t}
              </Text>
            ))}
          </HStack>
        ))}
      </Box>
    </Box>
  )
}

function ChatPanel() {
  return (
    <VStack
      w="260px"
      borderLeft="1px solid var(--studio-border)"
      bg="rgba(255,255,255,0.015)"
      py={3}
      px={3}
      align="stretch"
      spacing={2}
      display={{ base: 'none', lg: 'flex' }}
      flexShrink={0}
    >
      <Text fontSize="11px" fontWeight={600} color="var(--studio-text-muted)" letterSpacing="0.08em" textTransform="uppercase" mb={1}>
        AI Chat
      </Text>
      <Box bg="var(--studio-surface-raised)" borderRadius="lg" p={3}>
        <Text fontSize="12px" color="var(--studio-text-secondary)" lineHeight={1.6}>
          I've created the Dashboard with agent canvas integration and status indicators.
        </Text>
      </Box>
      <Box
        bg="var(--studio-brand-green-subtle)"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="var(--studio-brand-green-border)"
        p={3}
      >
        <Text fontSize="12px" color="var(--studio-text-secondary)" lineHeight={1.6}>
          Add a loading skeleton while agents initialize
        </Text>
      </Box>
      <Box mt="auto">
        <Box
          bg="var(--studio-surface-raised)"
          borderRadius="md"
          px={3}
          h="32px"
          display="flex"
          alignItems="center"
        >
          <Text fontSize="12px" color="var(--studio-text-muted)" flex={1}>Ask anything...</Text>
          <Box w="1px" h="14px" bg="var(--studio-text-muted)" opacity={0.5} animation="cursor-blink 1.2s step-end infinite" />
        </Box>
      </Box>
    </VStack>
  )
}

function StatusBar() {
  return (
    <HStack
      px={3}
      h="22px"
      borderTop="1px solid var(--studio-border)"
      bg="rgba(45,212,168,0.06)"
      spacing={4}
      flexShrink={0}
    >
      <HStack spacing={1}>
        <GitBranch size={11} color="var(--studio-brand-green)" />
        <Text fontSize="11px" fontFamily="mono" color="var(--studio-text-muted)">main</Text>
      </HStack>
      <HStack spacing={1}>
        <Wifi size={11} color="var(--studio-brand-green)" />
        <Text fontSize="11px" fontFamily="mono" color="var(--studio-brand-green)">6 agents active</Text>
      </HStack>
    </HStack>
  )
}

export function IdeMockup() {
  return (
    <Box p="1px" borderRadius="xl" background="var(--studio-gradient-border)" shadow="lg">
      <Box bg="var(--studio-code-bg)" borderRadius="xl" overflow="hidden">
        {/* Title bar */}
        <HStack px={4} h="40px" borderBottom="1px solid var(--studio-border)" flexShrink={0}>
          <HStack spacing={2}>
            <Box w="12px" h="12px" borderRadius="full" bg="#ef5350" />
            <Box w="12px" h="12px" borderRadius="full" bg="#ffa726" />
            <Box w="12px" h="12px" borderRadius="full" bg="#2dd4a8" />
          </HStack>
          <Text fontSize="12px" fontFamily="mono" color="var(--studio-text-muted)" ml={3} opacity={0.7}>
            Blacksmith Studio — my-app
          </Text>
        </HStack>

        <Flex minH={{ base: '240px', md: '340px' }}>
          <Sidebar />
          <EditorPane />
          <ChatPanel />
        </Flex>

        <StatusBar />
      </Box>
    </Box>
  )
}
