import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { MessageCircle, Users } from 'lucide-react'

interface FrameChromeProps {
  title: string
  tabs?: string[]
  compact?: boolean
}

const TAB_ICONS: Record<string, React.ElementType> = {
  Chat: MessageCircle,
  'Agent Team': Users,
}

export function FrameChrome({ title, tabs, compact = false }: FrameChromeProps) {
  const height = compact ? '32px' : '36px'
  return (
    <Flex
      h={height}
      borderBottom="1px solid var(--hairline)"
      align="center"
      px="14px"
      gap="12px"
      bg="var(--paper-2)"
    >
      <HStack spacing="6px" className="cl-traffic-lights">
        <Box as="span" />
        <Box as="span" />
        <Box as="span" />
      </HStack>
      <Text
        flex="1"
        textAlign="center"
        fontSize={compact ? '11px' : '12px'}
        lineHeight={compact ? '14px' : '16px'}
        fontWeight={500}
        color="var(--fg-3)"
      >
        {title}
      </Text>
      {tabs ? (
        <HStack spacing="4px">
          {tabs.map((tab, i) => {
            const IconCmp = TAB_ICONS[tab]
            const active = i === 0
            return (
              <HStack
                key={tab}
                h="22px"
                px="10px"
                spacing="6px"
                borderRadius="6px"
                fontSize="11px"
                lineHeight="14px"
                fontWeight={500}
                color={active ? 'var(--fg-1)' : 'var(--fg-3)'}
                bg={active ? 'var(--paper-3)' : 'transparent'}
              >
                {IconCmp ? <IconCmp size={11} /> : null}
                <Text as="span">{tab}</Text>
              </HStack>
            )
          })}
        </HStack>
      ) : (
        <Box w="40px" />
      )}
    </Flex>
  )
}
