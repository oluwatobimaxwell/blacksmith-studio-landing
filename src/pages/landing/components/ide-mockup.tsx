import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react'
import { Folder, FolderOpen, FileText } from 'lucide-react'

interface FileTreeItemProps {
  icon: typeof Folder
  label: string
  indent?: boolean
  active?: boolean
}

function FileTreeItem({ icon: Icon, label, indent, active }: FileTreeItemProps) {
  return (
    <HStack
      spacing="xs"
      px="md"
      py="2xs"
      pl={indent ? 'xl' : 'md'}
    >
      <Icon size={14} color={active ? 'var(--studio-brand-green)' : 'var(--studio-text-muted)'} />
      <Text
        fontSize="13px"
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
      w="200px"
      borderRight="1px solid var(--studio-border)"
      bg="var(--studio-bg-sidebar)"
      py="md"
      display={{ base: 'none', md: 'block' }}
    >
      <FileTreeItem icon={FolderOpen} label="src" />
      <FileTreeItem icon={FileText} label="app.tsx" indent />
      <FileTreeItem icon={FileText} label="theme.ts" indent />
      <FileTreeItem icon={FolderOpen} label="components" />
      <FileTreeItem icon={FileText} label="dashboard.tsx" indent active />
      <FileTreeItem icon={Folder} label="api" />
    </Box>
  )
}

function EditorPane() {
  const lines = [
    { num: 1, tokens: [{ text: 'import', type: 'keyword' as const }, { text: ' { useAgents } ', type: 'text' as const }, { text: 'from', type: 'keyword' as const }, { text: " '@/hooks'", type: 'string' as const }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [{ text: 'export', type: 'keyword' as const }, { text: ' ', type: 'text' as const }, { text: 'function', type: 'keyword' as const }, { text: ' ', type: 'text' as const }, { text: 'Dashboard', type: 'function' as const }, { text: '() {', type: 'text' as const }] },
    { num: 4, tokens: [{ text: '  ', type: 'text' as const }, { text: 'const', type: 'keyword' as const }, { text: ' { team } = ', type: 'text' as const }, { text: 'useAgents', type: 'function' as const }, { text: '()', type: 'text' as const }] },
    { num: 5, tokens: [] },
    { num: 6, tokens: [{ text: '  ', type: 'text' as const }, { text: 'return', type: 'keyword' as const }, { text: ' (', type: 'text' as const }] },
    { num: 7, tokens: [{ text: '    <', type: 'text' as const }, { text: 'AgentCanvas', type: 'keyword' as const }, { text: ' agents={team} />', type: 'text' as const }] },
    { num: 8, tokens: [{ text: '  )', type: 'text' as const }] },
    { num: 9, tokens: [{ text: '}', type: 'text' as const }] },
  ]

  const colorMap = {
    keyword: 'var(--studio-code-keyword)',
    string: 'var(--studio-code-string)',
    function: 'var(--studio-code-function)',
    text: 'var(--studio-code-text)',
  } as const

  return (
    <Box flex={1} py="md" px="lg">
      {lines.map((line) => (
        <HStack key={line.num} spacing="0" h="24px" align="center">
          <Text
            fontSize="13px"
            fontFamily="mono"
            color="var(--studio-text-muted)"
            w="2xl"
            textAlign="right"
            mr="lg"
            userSelect="none"
          >
            {line.num}
          </Text>
          {line.tokens.map((token, i) => (
            <Text
              key={i}
              as="span"
              fontSize="13px"
              fontFamily="mono"
              color={colorMap[token.type]}
              whiteSpace="pre"
            >
              {token.text}
            </Text>
          ))}
        </HStack>
      ))}
    </Box>
  )
}

function ChatPanel() {
  return (
    <VStack
      w="280px"
      borderLeft="1px solid var(--studio-border)"
      bg="var(--studio-surface)"
      py="md"
      px="md"
      align="stretch"
      spacing="sm"
      display={{ base: 'none', lg: 'flex' }}
    >
      <Text fontSize="13px" fontWeight={600} color="var(--studio-text-primary)" mb="xs">
        AI Chat
      </Text>

      <Box bg="var(--studio-surface-raised)" borderRadius="lg" p="sm">
        <Text fontSize="12px" color="var(--studio-text-secondary)" lineHeight={1.5}>
          I've created the Dashboard component with the agent canvas integration.
        </Text>
      </Box>

      <Box
        bg="var(--studio-brand-green-subtle)"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="var(--studio-brand-green-border)"
        p="sm"
      >
        <Text fontSize="12px" color="var(--studio-text-secondary)" lineHeight={1.5}>
          Add a status indicator for each agent
        </Text>
      </Box>

      <Box mt="auto">
        <Box
          bg="var(--studio-surface-raised)"
          borderRadius="md"
          p="xs"
          h="32px"
          display="flex"
          alignItems="center"
          px="sm"
        >
          <Text fontSize="12px" color="var(--studio-text-muted)">
            Ask anything...
          </Text>
          <Box
            ml="2xs"
            w="1px"
            h="14px"
            bg="var(--studio-text-muted)"
            animation="cursor-blink 1.2s step-end infinite"
          />
        </Box>
      </Box>
    </VStack>
  )
}

export function IdeMockup() {
  return (
    <Box
      p="1px"
      borderRadius="xl"
      background="var(--studio-gradient-border)"
      shadow="lg"
    >
      <Box bg="var(--studio-code-bg)" borderRadius="xl" overflow="hidden">
        {/* Title bar */}
        <HStack px="lg" py="md" borderBottom="1px solid var(--studio-border)">
          <HStack spacing="sm">
            <Box w="12px" h="12px" borderRadius="full" bg="#ef5350" />
            <Box w="12px" h="12px" borderRadius="full" bg="#ffa726" />
            <Box w="12px" h="12px" borderRadius="full" bg="#2dd4a8" />
          </HStack>
          <Text fontSize="12px" fontFamily="mono" color="var(--studio-text-muted)" ml="sm">
            Blacksmith Studio — my-app
          </Text>
        </HStack>

        {/* IDE body */}
        <Flex minH={{ base: '240px', md: '340px' }}>
          <Sidebar />
          <EditorPane />
          <ChatPanel />
        </Flex>
      </Box>
    </Box>
  )
}
