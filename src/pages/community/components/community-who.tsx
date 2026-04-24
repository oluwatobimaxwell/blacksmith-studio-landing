import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { CommunityMember } from '@/pages/landing/components/community-member'
import { memberBadges } from '@/pages/landing/data/members'
import { communityStats } from '../data/community-stats'

export function CommunityWho() {
  return (
    <Box
      as="section"
      id="who"
      py={{ base: '96px', md: '128px' }}
      borderBottom="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="24px" mb={{ base: '48px', md: '72px' }} maxW="820px">
          <Eyebrow>Who is here</Eyebrow>
          <SectionHeading>
            Sixty-two countries,
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              and counting.
            </Text>
          </SectionHeading>
        </VStack>

        <SimpleGrid
          className="cl-reveal"
          columns={{ base: 2, md: 4 }}
          gap={{ base: '24px', md: '48px' }}
          py="40px"
          borderTop="1px solid var(--hairline)"
          borderBottom="1px solid var(--hairline)"
        >
          {communityStats.map((stat) => (
            <VStack key={stat.label} align="flex-start" spacing={0}>
              <Text
                fontSize={{ base: '36px', md: '44px' }}
                lineHeight={{ base: '40px', md: '46px' }}
                fontWeight={600}
                letterSpacing="-0.025em"
                color="var(--fg-1)"
              >
                {stat.n}
              </Text>
              <Text
                mt="10px"
                fontSize="12px"
                lineHeight="16px"
                fontWeight={500}
                fontFamily="var(--font-mono)"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="var(--fg-3)"
              >
                {stat.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <SimpleGrid
          className="cl-reveal"
          mt={{ base: '48px', md: '64px' }}
          columns={{ base: 6, md: 9 }}
          spacing="12px"
        >
          {memberBadges.map((m) => (
            <CommunityMember key={`${m.initials}-${m.country}`} initials={m.initials} country={m.country} />
          ))}
        </SimpleGrid>

        <Text
          as="p"
          mt={{ base: '48px', md: '64px' }}
          fontSize={{ base: '18px', md: '20px' }}
          lineHeight={{ base: '28px', md: '32px' }}
          color="var(--fg-2)"
          maxW="720px"
          m={0}
          sx={{ textWrap: 'pretty' }}
        >
          A teacher in Ibadan prototyping a tool for her classroom. A founder in Nairobi building a
          booking app. A solo engineer in Helsinki debugging a system late at night. You will find
          a version of yourself in here, and a version of the person you are about to become.
        </Text>
      </Container>
    </Box>
  )
}
