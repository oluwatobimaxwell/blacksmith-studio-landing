import { Flex, Text } from '@chakra-ui/react'

interface CommunityMemberProps {
  initials: string
  country: string
}

export function CommunityMember({ initials, country }: CommunityMemberProps) {
  return (
    <Flex
      position="relative"
      sx={{ aspectRatio: '1 / 1' }}
      border="1px solid var(--hairline)"
      borderRadius="var(--r-md)"
      bg="var(--paper)"
      align="center"
      justify="center"
      fontFamily="var(--font-mono)"
      fontWeight={600}
      fontSize="13px"
      color="var(--fg-2)"
      letterSpacing="0.02em"
      transition="border-color 160ms var(--ease), transform 160ms var(--ease)"
      _hover={{ borderColor: 'var(--hairline-strong)', transform: 'translateY(-2px)' }}
    >
      {initials}
      <Text
        as="span"
        position="absolute"
        bottom="4px"
        right="6px"
        fontSize="8px"
        lineHeight="1"
        fontFamily="var(--font-mono)"
        fontWeight={500}
        color="var(--fg-4)"
        letterSpacing="0.08em"
      >
        {country}
      </Text>
    </Flex>
  )
}
