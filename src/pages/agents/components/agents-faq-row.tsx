import { useId, useState } from 'react'
import { Box, chakra, Text } from '@chakra-ui/react'
import { Plus } from 'lucide-react'
import type { FaqItem } from '../data/faqs'

interface AgentsFaqRowProps {
  item: FaqItem
  index: number
  defaultOpen?: boolean
}

const SummaryButton = chakra('button')

export function AgentsFaqRow({ item, index, defaultOpen = false }: AgentsFaqRowProps) {
  const [open, setOpen] = useState(defaultOpen)
  const reactId = useId()
  const panelId = `ag-faq-panel-${reactId}`
  const buttonId = `ag-faq-button-${reactId}`

  return (
    <Box className={`ag-faq-row ${open ? 'open' : ''}`}>
      <SummaryButton
        type="button"
        id={buttonId}
        className="ag-faq-q"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <Text as="span" className="ag-faq-no">
          {String(index + 1).padStart(2, '0')}
        </Text>
        <Text as="span" className="ag-faq-text">
          {item.question}
        </Text>
        <Box as="span" className="ag-faq-toggle" aria-hidden>
          <Plus size={14} />
        </Box>
      </SummaryButton>
      <Box
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="ag-faq-a-wrap"
      >
        <Box className="ag-faq-a-inner">
          <Text as="p" className="ag-faq-a">
            {item.answer}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
