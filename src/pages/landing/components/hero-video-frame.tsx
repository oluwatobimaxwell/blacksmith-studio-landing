import { Box } from '@chakra-ui/react'
import heroImage from '@/assets/screenshot-2.png'

export function HeroVideoFrame() {
  return (
    <Box
      as="img"
      className="cl-reveal"
      display="block"
      mx="auto"
      mt="64px"
      w="full"
      maxW="960px"
      borderRadius={{ base: '12px', md: '16px' }}
      src={heroImage}
      alt="Blacksmith Studio agent team graph"
    />
  )
}
