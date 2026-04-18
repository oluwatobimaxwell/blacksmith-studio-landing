import { Box, VStack, HStack, Text, Flex, AspectRatio, Image } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import type { ShowcaseProject } from '../data/showcase'

interface ShowcaseCardProps {
  project: ShowcaseProject
}

export function ShowcaseCard({ project }: ShowcaseCardProps) {
  return (
    <Box
      as="a"
      href={`#showcase-${project.id}`}
      data-group
      flexShrink={0}
      w={{ base: '280px', md: '300px' }}
      borderRadius="14px"
      bg="var(--studio-landing-surface)"
      borderWidth="1px"
      borderColor="var(--studio-landing-border)"
      overflow="hidden"
      transition="transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.25s ease"
      _hover={{
        borderColor: 'rgba(45,212,168,0.35)',
        transform: 'translateY(-2px)',
      }}
      textDecoration="none"
      role="article"
      aria-labelledby={`showcase-${project.id}-title`}
    >
      <AspectRatio ratio={16 / 9}>
        <Box
          bg="#0f0f0f"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Image
            src={project.image}
            alt=""
            opacity={0.55}
            w="56px"
            h="56px"
            transition="opacity 0.25s ease, transform 0.35s ease"
            _groupHover={{ opacity: 0.85, transform: 'scale(1.05)' }}
          />
          <Box
            position="absolute"
            inset={0}
            background="radial-gradient(ellipse at center, rgba(45,212,168,0.08), transparent 70%)"
            pointerEvents="none"
          />
        </Box>
      </AspectRatio>

      <VStack align="stretch" spacing={3} p={4}>
        <VStack align="stretch" spacing={0.5}>
          <Text
            id={`showcase-${project.id}-title`}
            fontSize="14px"
            fontWeight={600}
            color="var(--studio-landing-text-primary)"
            letterSpacing="-0.01em"
            noOfLines={1}
          >
            {project.title}
          </Text>
          <Text fontSize="12px" color="var(--studio-landing-text-muted)">
            By {project.author}
          </Text>
        </VStack>

        <HStack spacing={1.5} flexWrap="wrap">
          {project.stack.map((s) => (
            <Text
              key={s}
              fontSize="10px"
              fontFamily="mono"
              color="rgba(255,255,255,0.5)"
              px={1.5}
              py="2px"
              borderRadius="4px"
              bg="rgba(255,255,255,0.04)"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.06)"
            >
              {s}
            </Text>
          ))}
        </HStack>

        <HStack spacing={3} fontSize="11px" color="rgba(255,255,255,0.6)" fontFamily="mono">
          <Text>{project.tasks} tasks</Text>
          <Box w="3px" h="3px" borderRadius="full" bg="rgba(255,255,255,0.2)" />
          <Text>{project.duration}</Text>
          <Box w="3px" h="3px" borderRadius="full" bg="rgba(255,255,255,0.2)" />
          <Text color="rgba(45,212,168,0.85)">{project.cost}</Text>
        </HStack>

        <Flex
          align="center"
          gap={1}
          fontSize="12px"
          color="rgba(255,255,255,0.7)"
          fontWeight={500}
          transition="gap 0.2s ease, color 0.15s ease"
          _groupHover={{ color: '#2dd4a8', gap: 2 }}
        >
          See the build
          <ArrowRight size={12} />
        </Flex>
      </VStack>
    </Box>
  )
}
