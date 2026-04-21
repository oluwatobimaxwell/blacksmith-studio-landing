import { Flex, HStack, Text, VStack, type StackProps } from '@chakra-ui/react'
import type { AgentNode as AgentNodeData } from '../data/agents'

interface AgentNodeProps {
  node: AgentNodeData
  onSelect?: (profileId: string) => void
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

export function AgentNode({ node, onSelect }: AgentNodeProps) {
  const { primary, tier, ref } = node
  const padY = tier === 1 ? '10px' : tier === 2 ? '8px' : '6px'
  const padX = tier === 1 ? '14px' : tier === 2 ? '12px' : '10px'
  const avatarSize = tier === 1 ? 24 : tier === 2 ? 20 : 18
  const avatarRadius = tier === 1 ? 7 : tier === 2 ? 6 : 5
  const avatarFontSize = tier === 1 || tier === 2 ? '10px' : '9px'
  const nameSize = tier === 1 ? '12px' : tier === 2 ? '11px' : '10px'
  const nameLine = tier === 1 ? '14px' : tier === 2 ? '13px' : '12px'
  const roleSize = tier === 1 ? '10px' : '9px'
  const roleLine = tier === 1 ? '12px' : '11px'

  const clickable = Boolean(ref && onSelect)

  const shellProps: StackProps = {
    position: 'absolute',
    left: `${node.x}%`,
    top: `${node.y}%`,
    transform: 'translate(-50%, -50%)',
    bg: primary ? 'var(--ink)' : 'var(--paper)',
    color: primary ? 'var(--paper)' : 'var(--fg-1)',
    border: '1px solid',
    borderColor: primary ? 'var(--ink)' : 'var(--hairline)',
    borderRadius: 'var(--r-md)',
    py: padY,
    px: padX,
    spacing: '8px',
    whiteSpace: 'nowrap',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'border-color 160ms var(--ease), transform 160ms var(--ease), background 160ms var(--ease)',
    _hover: clickable
      ? {
          borderColor: primary ? 'var(--ink)' : 'var(--hairline-strong)',
          transform: 'translate(-50%, -50%) translateY(-1px)',
          bg: primary ? 'var(--ink)' : 'var(--paper-2)',
        }
      : undefined,
    _focusVisible: clickable ? { outline: 'none', boxShadow: '0 0 0 2px var(--fg-1)' } : undefined,
  }

  const inner = (
    <>
      <Flex
        w={`${avatarSize}px`}
        h={`${avatarSize}px`}
        borderRadius={`${avatarRadius}px`}
        bg={primary ? 'var(--paper)' : 'var(--paper-3)'}
        color={primary ? 'var(--ink)' : 'var(--fg-1)'}
        align="center"
        justify="center"
        fontFamily="var(--font-mono)"
        fontWeight={600}
        fontSize={avatarFontSize}
        lineHeight="1"
        letterSpacing="0.02em"
        flexShrink={0}
      >
        {initials(node.name)}
      </Flex>
      <VStack align="flex-start" spacing="1px" minW={0}>
        <Text fontSize={nameSize} lineHeight={nameLine} fontWeight={600}>
          {node.name}
        </Text>
        {node.role && (
          <Text
            fontSize={roleSize}
            lineHeight={roleLine}
            fontFamily="var(--font-mono)"
            fontWeight={500}
            opacity={0.55}
            letterSpacing="0.04em"
            textTransform="uppercase"
          >
            {node.role}
          </Text>
        )}
      </VStack>
    </>
  )

  if (clickable) {
    return (
      <HStack
        as="button"
        type="button"
        onClick={() => onSelect?.(ref as string)}
        aria-label={`Open ${node.name} profile`}
        {...shellProps}
      >
        {inner}
      </HStack>
    )
  }

  return <HStack {...shellProps}>{inner}</HStack>
}
