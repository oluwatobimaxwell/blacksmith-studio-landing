import { Box } from '@chakra-ui/react'
import screenRecord from '@/assets/screen-record.mov'
import posterImage from '@/assets/screenshot-1.png'

export function HeroVideoFrame() {
  return (
    <Box
      as="video"
      className="cl-reveal"
      display="block"
      mx="auto"
      mt="64px"
      w="full"
      maxW="960px"
      borderRadius={{ base: '12px', md: '16px' }}
      autoPlay
      muted
      loop
      playsInline
      poster={posterImage}
      src={screenRecord}
    />
  )
}
