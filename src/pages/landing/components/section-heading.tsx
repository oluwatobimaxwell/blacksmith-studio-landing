import { Heading } from '@chakra-ui/react'

interface SectionHeadingProps {
  children: React.ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Heading
      as="h2"
      className="cl-reveal"
      fontSize={{ base: '36px', md: '48px' }}
      lineHeight={{ base: '40px', md: '52px' }}
      fontWeight={600}
      letterSpacing="-0.025em"
      mt="16px"
      maxW="820px"
      sx={{ textWrap: 'balance' }}
      color="var(--fg-1)"
    >
      {children}
    </Heading>
  )
}
