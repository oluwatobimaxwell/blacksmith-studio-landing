import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  AspectRatio,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Download, Play } from 'lucide-react'
import { HeroMeshBg } from './hero-mesh-bg'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export function HeroSection() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as="section"
      aria-label="Hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      position="relative"
      overflow="hidden"
      bg="var(--studio-landing-bg)"
      pt={{ base: '120px', md: '100px' }}
      pb={{ base: '80px', md: '60px' }}
    >
      <HeroMeshBg />

      <Box
        position="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: '600px', md: '1100px' }}
        h={{ base: '400px', md: '700px' }}
        background="radial-gradient(ellipse, rgba(45,212,168,0.07) 0%, transparent 60%)"
        pointerEvents="none"
        aria-hidden
      />

      <MotionVStack
        spacing={0}
        align={{ base: 'center', md: 'flex-start' }}
        position="relative"
        maxW="1200px"
        w="full"
        mx="auto"
        px={{ base: 6, md: 10 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionBox variants={itemVariants} mb={8} maxW="880px">
          <Heading
            as="h1"
            fontSize={{ base: '44px', sm: '58px', md: '78px', lg: '92px' }}
            fontWeight={500}
            textAlign={{ base: 'center', md: 'left' }}
            lineHeight={1.0}
            letterSpacing="-0.045em"
            color="var(--studio-landing-text-primary)"
          >
            A team of AI agents,
            <br />
            <Text
              as="span"
              bg="linear-gradient(135deg, #2dd4a8 0%, rgba(45,212,168,0.7) 100%)"
              bgClip="text"
              sx={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              in one IDE.
            </Text>
          </Heading>
        </MotionBox>

        <MotionBox variants={itemVariants} mb={10} maxW="560px">
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            textAlign={{ base: 'center', md: 'left' }}
            color="var(--studio-landing-text-secondary)"
            lineHeight={1.65}
          >
            Prompt once. A product manager plans it, specialists build it, a reviewer checks it. Yours runs on your machine. Free, forever.
          </Text>
        </MotionBox>

        <MotionBox variants={itemVariants} mb={5}>
          <HStack spacing={3} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
            <Button
              as="a"
              href="#download"
              bg="var(--studio-landing-cta-bg)"
              color="var(--studio-landing-cta-text)"
              size="lg"
              leftIcon={<Download size={16} />}
              px={7}
              h="52px"
              fontSize="15px"
              fontWeight={600}
              borderRadius="full"
              _hover={{ bg: 'var(--studio-landing-cta-bg-hover)', transform: 'translateY(-1px)' }}
              _active={{ transform: 'translateY(0)' }}
              transition="all 0.15s ease"
            >
              Download for macOS
            </Button>
            <Button
              onClick={onOpen}
              variant="ghost"
              size="lg"
              leftIcon={<Play size={14} />}
              px={7}
              h="52px"
              fontSize="15px"
              fontWeight={500}
              borderRadius="full"
              color="rgba(255,255,255,0.85)"
              borderWidth="1px"
              borderColor="var(--studio-landing-border)"
              _hover={{
                bg: 'var(--studio-landing-surface)',
                borderColor: 'var(--studio-landing-border-hover)',
                color: 'white',
              }}
              transition="all 0.15s ease"
            >
              See it build &mdash; 90s
            </Button>
          </HStack>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Flex
            align="center"
            gap={2}
            justify={{ base: 'center', md: 'flex-start' }}
            flexWrap="wrap"
          >
            <Text fontSize="13px" color="var(--studio-landing-text-muted)">
              Also for
            </Text>
            <Text as="a" href="#download" fontSize="13px" color="var(--studio-landing-text-secondary)" _hover={{ color: 'white' }} cursor="pointer">
              Windows
            </Text>
            <Box w="3px" h="3px" borderRadius="full" bg="var(--studio-landing-text-muted)" />
            <Text as="a" href="#download" fontSize="13px" color="var(--studio-landing-text-secondary)" _hover={{ color: 'white' }} cursor="pointer">
              Linux
            </Text>
          </Flex>
        </MotionBox>
      </MotionVStack>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="rgba(0,0,0,0.85)" backdropFilter="blur(12px)" />
        <ModalContent
          bg="#0a0a0a"
          borderWidth="1px"
          borderColor="var(--studio-landing-border)"
          mx={4}
        >
          <ModalCloseButton color="rgba(255,255,255,0.6)" size="lg" />
          <ModalBody p={0}>
            <AspectRatio ratio={16 / 9}>
              <Flex
                align="center"
                justify="center"
                bg="#000"
                direction="column"
                gap={3}
                aria-label="90-second product demo placeholder"
              >
                <Box
                  w="64px"
                  h="64px"
                  borderRadius="full"
                  bg="rgba(45,212,168,0.15)"
                  borderWidth="1px"
                  borderColor="rgba(45,212,168,0.35)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Play size={24} color="#2dd4a8" />
                </Box>
                <Text fontSize="14px" color="rgba(255,255,255,0.6)">
                  90-second build demo &mdash; coming with the next release.
                </Text>
              </Flex>
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
