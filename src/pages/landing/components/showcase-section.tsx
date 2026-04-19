import { Box, Container } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { SectionSub } from './section-sub'
import { ShowcaseRow } from './showcase-row'
import { showcaseRows } from '../data/showcase'

export function ShowcaseSection() {
  return (
    <Container as="section" id="product" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>The product</Eyebrow>
      <SectionHeading>
        A full engineering team,
        <br />
        coordinated inside your editor.
      </SectionHeading>
      <SectionSub>
        Not a prompt box with good intentions. A desktop IDE where specialised agents do their work in the right order —
        visible, traceable, and structured the way a senior team would do it.
      </SectionSub>

      <Box mt="24px">
        {showcaseRows.map((row, i) => (
          <ShowcaseRow key={row.number} row={row} isLast={i === showcaseRows.length - 1} />
        ))}
      </Box>
    </Container>
  )
}
