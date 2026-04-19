import { Container, SimpleGrid, Text } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { FeatureCard } from './feature-card'
import { features } from '../data/features'

export function FeaturesSection() {
  return (
    <Container as="section" id="features" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>Our commitments</Eyebrow>
      <SectionHeading>
        Four promises.
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          For the long term.
        </Text>
      </SectionHeading>

      <SimpleGrid
        className="cl-reveal"
        mt="56px"
        columns={{ base: 1, md: 2, lg: 4 }}
        gap="1px"
        bg="var(--hairline)"
        border="1px solid var(--hairline)"
        borderRadius="var(--r-xl)"
        overflow="hidden"
      >
        {features.map((feat, i) => (
          <FeatureCard
            key={feat.title}
            icon={feat.icon}
            title={feat.title}
            body={feat.body}
            index={i}
            total={features.length}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
