import { Box } from '@chakra-ui/react'
import screenRecord from '@/assets/screen-record.mov'
import posterImage from '@/assets/screenshot-1.png'

export function HeroVideoFrame() {
  return (
    <Box
      as="video"
      display="block"
      w="full"
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
