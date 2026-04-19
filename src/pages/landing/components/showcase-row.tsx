import { Box, Flex, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react'
import { MockHome } from './mocks/mock-home'
import { MockAgents } from './mocks/mock-agents'
import { MockChat } from './mocks/mock-chat'
import { MockSettings } from './mocks/mock-settings'
import type { ShowcaseRow as ShowcaseRowData } from '../data/showcase'

const MOCKS = {
  home: MockHome,
  agents: MockAgents,
  chat: MockChat,
  settings: MockSettings,
} as const

interface ShowcaseRowProps {
  row: ShowcaseRowData
  isLast: boolean
}

export function ShowcaseRow({ row, isLast }: ShowcaseRowProps) {
  const MockCmp = MOCKS[row.mock]
  return (
    <Flex
      className="cl-reveal"
      direction={{ base: 'column', lg: row.reverse ? 'row-reverse' : 'row' }}
      align="center"
      gap={{ base: '48px', lg: '64px' }}
      py={{ base: '48px', lg: '64px' }}
      borderTop="1px solid var(--hairline)"
      borderBottom={isLast ? '1px solid var(--hairline)' : undefined}
    >
      <Box flex={{ base: '1', lg: '0 0 420px' }}>
        <VStack align="stretch" spacing={0}>
          <Text
            fontSize="11px"
            lineHeight="14px"
            fontWeight={500}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="var(--fg-3)"
          >
            {row.eyebrow}
          </Text>
          <Heading
            as="h3"
            mt="12px"
            fontSize="36px"
            lineHeight="42px"
            fontWeight={600}
            letterSpacing="-0.025em"
            color="var(--fg-1)"
          >
            {row.title}
          </Heading>
          <Text mt="18px" fontSize="15px" lineHeight="24px" color="var(--fg-3)">
            {row.body}
          </Text>
          <List mt="24px" spacing="10px" styleType="none">
            {row.bullets.map((bullet) => (
              <ListItem
                key={bullet}
                pl="18px"
                position="relative"
                fontSize="14px"
                lineHeight="22px"
                color="var(--fg-2)"
                _before={{
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  w: '8px',
                  h: '1px',
                  bg: 'var(--fg-3)',
                }}
              >
                {bullet}
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
      <Box flex="1" minW={0} w="full">
        <MockCmp />
      </Box>
    </Flex>
  )
}
