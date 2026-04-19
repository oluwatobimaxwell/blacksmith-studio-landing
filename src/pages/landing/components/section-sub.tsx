import { Text } from '@chakra-ui/react'

interface SectionSubProps {
  children: React.ReactNode
}

export function SectionSub({ children }: SectionSubProps) {
  return (
    <Text
      className="cl-reveal"
      fontSize="17px"
      lineHeight="26px"
      color="var(--fg-3)"
      mt="18px"
      maxW="640px"
      sx={{ textWrap: 'pretty' }}
    >
      {children}
    </Text>
  )
}
