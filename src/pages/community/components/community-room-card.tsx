import { Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { ClButton } from '@/pages/landing/components/cl-button'
import type { Room } from '../data/rooms'

interface CommunityRoomCardProps {
  room: Room
}

export function CommunityRoomCard({ room }: CommunityRoomCardProps) {
  return (
    <VStack
      as="article"
      className="cl-reveal"
      align="stretch"
      spacing="20px"
      border="1px solid var(--hairline)"
      borderRadius="var(--r-xl)"
      bg="var(--paper)"
      p={{ base: '28px', md: '40px' }}
      transition="border-color 160ms var(--ease)"
      _hover={{ borderColor: 'var(--hairline-strong)' }}
      h="100%"
    >
      <Eyebrow lead={false}>{room.eyebrow}</Eyebrow>
      <Heading
        as="h3"
        fontSize={{ base: '22px', md: '26px' }}
        lineHeight={{ base: '28px', md: '32px' }}
        fontWeight={600}
        letterSpacing="-0.02em"
        color="var(--fg-1)"
        m={0}
        sx={{ textWrap: 'balance' }}
      >
        {room.title}
      </Heading>
      <Text
        fontSize="15px"
        lineHeight="24px"
        color="var(--fg-3)"
        m={0}
        flex="1"
        sx={{ textWrap: 'pretty' }}
      >
        {room.body}
      </Text>
      <ClButton
        as="a"
        href={room.ctaHref}
        target={room.ctaHref.startsWith('http') ? '_blank' : undefined}
        rel={room.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
        clVariant={room.ctaVariant}
        clSize="md"
        alignSelf="flex-start"
      >
        {room.ctaLabel}
      </ClButton>
    </VStack>
  )
}
