import { Box, Container, Grid, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { MessageCircle, Github } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { ClButton } from './cl-button'
import { CommunityMember } from './community-member'
import { memberBadges } from '../data/members'

const STATS = [
  { n: '4.2k', lbl: 'Members' },
  { n: '62', lbl: 'Countries' },
  { n: '118', lbl: 'Contributors' },
  { n: 'Weekly', lbl: 'Office hours' },
] as const

export function CommunitySection() {
  return (
    <Box as="section" id="community" py={{ base: '96px', md: '128px' }} position="relative" overflow="hidden">
      <Container maxW="1200px" px="32px">
        <Grid
          className="cl-reveal"
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: '48px', lg: '64px' }}
          alignItems="center"
        >
          <VStack align="stretch" spacing="24px">
            <Eyebrow>The community</Eyebrow>
            <Heading
              as="h2"
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '44px', md: '60px' }}
              fontWeight={600}
              letterSpacing="-0.03em"
              m={0}
              sx={{ textWrap: 'balance' }}
              color="var(--fg-1)"
            >
              A global home for builders.
            </Heading>
            <Text fontSize="17px" lineHeight="26px" color="var(--fg-3)" m={0}>
              Share what you're making, ask for help, give feedback, celebrate wins — learn from people on the same
              journey, from Lagos to Jakarta to Helsinki.
            </Text>
            <HStack spacing="12px" flexWrap="wrap">
              <ClButton clSize="lg" leftIcon={<MessageCircle size={16} />}>Join on Discord</ClButton>
              <ClButton clVariant="ghost" clSize="lg" leftIcon={<Github size={16} />}>
                Contribute on GitHub
              </ClButton>
            </HStack>
          </VStack>

          <SimpleGrid columns={{ base: 4, md: 6 }} gap="12px">
            {memberBadges.map((m) => (
              <CommunityMember key={m.initials} initials={m.initials} country={m.country} />
            ))}
          </SimpleGrid>
        </Grid>

        <SimpleGrid
          className="cl-reveal"
          mt="72px"
          columns={{ base: 2, md: 4 }}
          gap={{ base: '24px', md: '48px' }}
          py="48px"
          borderTop="1px solid var(--hairline)"
          borderBottom="1px solid var(--hairline)"
        >
          {STATS.map((stat) => (
            <VStack key={stat.lbl} align="flex-start" spacing={0}>
              <Text fontSize="40px" lineHeight="42px" fontWeight={600} letterSpacing="-0.025em" color="var(--fg-1)">
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
                {stat.lbl}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <SimpleGrid className="cl-reveal" mt="72px" columns={{ base: 1, md: 2 }} gap="24px">
          {[
            {
              eyebrow: 'In-app support',
              title: "Human help when AI isn't enough.",
              body:
                "Raise a ticket inside Blacksmith Studio when you're genuinely stuck. Connect with a real developer from the community — free, or at a fair rate. A bridge, inside the tool.",
            },
            {
              eyebrow: 'Office hours',
              title: 'Thursdays, open mic.',
              body:
                'Live demos, critique, and working sessions. Rotating regional slots so every timezone has a seat.',
            },
          ].map((card) => (
            <VStack
              key={card.eyebrow}
              align="stretch"
              border="1px solid var(--hairline)"
              borderRadius="var(--r-xl)"
              p="32px"
              spacing="16px"
            >
              <Eyebrow lead={false}>{card.eyebrow}</Eyebrow>
              <Heading as="h3" fontSize="24px" lineHeight="30px" fontWeight={600} letterSpacing="-0.02em" m={0}>
                {card.title}
              </Heading>
              <Text fontSize="14px" lineHeight="22px" color="var(--fg-3)" m={0}>
                {card.body}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
