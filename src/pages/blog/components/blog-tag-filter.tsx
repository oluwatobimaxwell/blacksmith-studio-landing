import { Button, HStack } from '@chakra-ui/react'
import { blogFilterTags, type BlogFilterTag } from '../data/blog-tags'

interface BlogTagFilterProps {
  activeTag: BlogFilterTag
  onChange: (tag: BlogFilterTag) => void
}

export function BlogTagFilter({ activeTag, onChange }: BlogTagFilterProps) {
  return (
    <HStack
      as="nav"
      aria-label="Filter posts by tag"
      spacing="8px"
      flexWrap="wrap"
      rowGap="8px"
      className="cl-reveal"
    >
      {blogFilterTags.map((tag) => {
        const isActive = tag === activeTag
        return (
          <Button
            key={tag}
            variant="unstyled"
            onClick={() => onChange(tag)}
            h="32px"
            px="14px"
            fontSize="12px"
            fontWeight={500}
            lineHeight="16px"
            borderRadius="999px"
            border="1px solid"
            borderColor={isActive ? 'var(--fg-1)' : 'var(--hairline)'}
            bg={isActive ? 'var(--fg-1)' : 'transparent'}
            color={isActive ? 'var(--paper)' : 'var(--fg-2)'}
            display="inline-flex"
            alignItems="center"
            transition="background 160ms var(--ease), border-color 160ms var(--ease), color 160ms var(--ease)"
            _hover={isActive ? undefined : { borderColor: 'var(--hairline-strong)', color: 'var(--fg-1)' }}
            aria-pressed={isActive}
          >
            {tag}
          </Button>
        )
      })}
    </HStack>
  )
}
