import { Box, Container } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { AgentsFaqRow } from './agents-faq-row'
import { faqs } from '../data/faqs'

export function AgentsFaq() {
  return (
    <Container as="section" id="faq" className="ag-faq" maxW="1200px" px="32px">
      <Eyebrow>FAQ</Eyebrow>
      <SectionHeading>Questions we get a lot.</SectionHeading>

      <Box className="ag-faq-list cl-reveal">
        {faqs.map((item, i) => (
          <AgentsFaqRow key={item.question} item={item} index={i} defaultOpen={i === 0} />
        ))}
      </Box>
    </Container>
  )
}
