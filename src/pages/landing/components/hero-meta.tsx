import { Fragment } from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'

const items = ['Free · forever', 'Open source', 'macOS · Linux · Windows', 'Built in Helsinki / Lagos']

export function HeroMeta() {
  return (
    <Flex
      className="cl-reveal"
      mt="48px"
      align="center"
      justify="center"
      gap="24px"
      flexWrap="wrap"
      color="var(--fg-3)"
      fontSize="12px"
      lineHeight="16px"
      fontWeight={500}
      fontFamily="var(--font-mono)"
      letterSpacing="0.04em"
    >
      {items.map((item, i) => (
        <Fragment key={item}>
          <Text as="span">{item}</Text>
          {i < items.length - 1 && (
            <Box w="4px" h="4px" borderRadius="50%" bg="currentColor" opacity={0.5} />
          )}
        </Fragment>
      ))}
    </Flex>
  )
}
