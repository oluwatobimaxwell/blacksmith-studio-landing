import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { CommunityRoomCard } from './community-room-card'
import { rooms } from '../data/rooms'

export function CommunityRooms() {
  return (
    <Box
      as="section"
      id="rooms"
      py={{ base: '96px', md: '128px' }}
      bg="var(--paper-2)"
      borderTop="1px solid var(--hairline)"
      borderBottom="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="24px" mb={{ base: '48px', md: '72px' }} maxW="820px">
          <Eyebrow>The rooms</Eyebrow>
          <SectionHeading>
            Four doors.
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              One room.
            </Text>
          </SectionHeading>
          <Text
            as="p"
            fontSize="16px"
            lineHeight="26px"
            color="var(--fg-3)"
            m={0}
            sx={{ textWrap: 'pretty' }}
          >
            The community lives across a handful of places. Come through whichever one fits
            your day. They all lead to the same people.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '20px', md: '24px' }}>
          {rooms.map((room) => (
            <CommunityRoomCard key={room.id} room={room} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
