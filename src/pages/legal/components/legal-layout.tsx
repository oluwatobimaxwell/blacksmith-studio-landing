import type { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { LegalNav } from './legal-nav'
import { LegalSidebar } from './legal-sidebar'
import { LegalContent } from './legal-content'
import { LegalFooter } from './legal-footer'
import { useLegalScrollSpy } from '../hooks/use-legal-scroll-spy'

interface Section {
  id: string
  title: string
}

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  sections: Section[]
  currentDoc: string
  children: ReactNode
}

export function LegalLayout({ title, lastUpdated, sections, currentDoc, children }: LegalLayoutProps) {
  const sectionIds = sections.map((s) => s.id)
  const activeSection = useLegalScrollSpy(sectionIds)

  return (
    <Box bg="var(--studio-landing-bg)" color="var(--studio-landing-text-secondary)" minH="100vh">
      <LegalNav />

      <Flex pt="64px" minH="100vh" direction="column">
        <Flex flex={1}>
          <LegalSidebar sections={sections} currentDoc={currentDoc} activeSection={activeSection} />
          <LegalContent title={title} lastUpdated={lastUpdated}>
            {children}
          </LegalContent>
        </Flex>

        <LegalFooter currentDoc={currentDoc} />
      </Flex>
    </Box>
  )
}
