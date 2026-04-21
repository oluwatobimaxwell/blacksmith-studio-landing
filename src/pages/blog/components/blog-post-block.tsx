import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react'
import type { BlogContentBlock } from '../data/blog-posts'

interface BlogPostBlockProps {
  block: BlogContentBlock
}

export function BlogPostBlock({ block }: BlogPostBlockProps) {
  if (block.type === 'paragraph') {
    return (
      <Text
        as="p"
        className="cl-reveal"
        fontSize={{ base: '17px', md: '19px' }}
        lineHeight={{ base: '28px', md: '32px' }}
        color="var(--fg-2)"
        m={0}
        sx={{ textWrap: 'pretty' }}
      >
        {block.text}
      </Text>
    )
  }

  if (block.type === 'heading') {
    return (
      <Heading
        as="h2"
        className="cl-reveal"
        fontSize={{ base: '24px', md: '28px' }}
        lineHeight={{ base: '30px', md: '34px' }}
        fontWeight={600}
        letterSpacing="-0.02em"
        color="var(--fg-1)"
        mt={{ base: '24px', md: '32px' }}
        mb={0}
        sx={{ textWrap: 'balance' }}
      >
        {block.text}
      </Heading>
    )
  }

  if (block.type === 'quote') {
    return (
      <Box
        as="blockquote"
        className="cl-reveal"
        borderLeft="2px solid var(--fg-1)"
        pl={{ base: '20px', md: '28px' }}
        py="4px"
        my="12px"
      >
        <Text
          fontSize={{ base: '20px', md: '24px' }}
          lineHeight={{ base: '30px', md: '34px' }}
          color="var(--fg-1)"
          fontWeight={500}
          letterSpacing="-0.01em"
          m={0}
          sx={{ textWrap: 'balance' }}
        >
          {block.text}
        </Text>
        {block.attribution ? (
          <Text
            mt="12px"
            fontSize="12px"
            lineHeight="14px"
            fontFamily="var(--font-mono)"
            color="var(--fg-4)"
            letterSpacing="0.08em"
            textTransform="uppercase"
            m={0}
          >
            — {block.attribution}
          </Text>
        ) : null}
      </Box>
    )
  }

  return (
    <List
      as="ul"
      className="cl-reveal"
      spacing="12px"
      styleType="none"
      m={0}
      pl={0}
    >
      {block.items.map((item) => (
        <ListItem
          key={item}
          fontSize={{ base: '17px', md: '19px' }}
          lineHeight={{ base: '28px', md: '32px' }}
          color="var(--fg-2)"
          pl="24px"
          position="relative"
          sx={{ textWrap: 'pretty' }}
          _before={{
            content: '""',
            position: 'absolute',
            left: 0,
            top: '14px',
            w: '8px',
            h: '1px',
            bg: 'var(--fg-4)',
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  )
}
