import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import { AgentProfile } from './agent-profile'
import type { AgentProfileData } from '../data/agents'

interface AgentModalProps {
  agent: AgentProfileData | null
  index: number
  total: number
  isOpen: boolean
  theme: 'light' | 'dark'
  onClose: () => void
}

export function AgentModal({ agent, index, total, isOpen, theme, onClose }: AgentModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
      <ModalOverlay bg="rgba(10, 10, 10, 0.62)" backdropFilter="blur(6px)" />
      <ModalContent
        className="cl-root"
        data-theme={theme}
        bg="var(--paper)"
        color="var(--fg-1)"
        border="1px solid var(--hairline)"
        borderRadius="var(--r-2xl)"
        overflow="hidden"
        mx="24px"
        my="24px"
        maxW="1136px"
        w="calc(100vw - 48px)"
        maxH="calc(100vh - 48px)"
        boxShadow="0 32px 80px rgba(0, 0, 0, 0.32)"
      >
        <ModalCloseButton
          zIndex={2}
          top="16px"
          right="16px"
          color="var(--fg-3)"
          bg="var(--paper)"
          border="1px solid var(--hairline)"
          borderRadius="999px"
          w="32px"
          h="32px"
          minW="32px"
          _hover={{ bg: 'var(--paper-2)', color: 'var(--fg-1)', borderColor: 'var(--hairline-strong)' }}
          _focusVisible={{ boxShadow: '0 0 0 2px var(--fg-1)' }}
        />
        <ModalBody p={0}>
          {agent && index >= 0 && (
            <AgentProfile agent={agent} index={index} total={total} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
