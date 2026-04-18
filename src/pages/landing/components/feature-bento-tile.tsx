import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import type { WalkthroughFeature } from '../data/walkthrough-features'
import { getFeatureVisual, getFeatureIcon } from './feature-tile-visuals'

interface FeatureBentoTileProps {
  feature: WalkthroughFeature
}

export function FeatureBentoTile({ feature }: FeatureBentoTileProps) {
  const FeatureVisual = getFeatureVisual(feature.id)
  const FeatureIcon = getFeatureIcon(feature.id)
  const titleId = `feature-${feature.id}-title`

  return (
    <Box
      as="article"
      aria-labelledby={titleId}
      data-group
      position="relative"
      h="full"
      minH="260px"
      p={6}
      borderRadius="16px"
      bg="var(--studio-landing-surface)"
      borderWidth="1px"
      borderColor="var(--studio-landing-border)"
      overflow="hidden"
      transition="transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background 0.25s ease"
      _hover={{
        borderColor: 'rgba(45, 212, 168, 0.32)',
        bg: 'var(--studio-landing-surface-hover)',
        transform: 'translateY(-2px)',
      }}
    >
      <Flex direction="column" h="full" position="relative" zIndex={1}>
        <Flex align="center" gap={2} mb={4}>
          {FeatureIcon && (
            <Icon as={FeatureIcon} boxSize="18px" color="var(--studio-landing-text-primary)" opacity={0.9} />
          )}
          {feature.accent && (
            <Box
              w="6px"
              h="6px"
              borderRadius="full"
              bg="var(--studio-landing-text-accent)"
              boxShadow="0 0 8px rgba(45,212,168,0.6)"
            />
          )}
        </Flex>

        <Heading
          as="h3"
          id={titleId}
          fontSize="16px"
          fontWeight={600}
          color="var(--studio-landing-text-primary)"
          letterSpacing="-0.015em"
          lineHeight={1.25}
          mb={1.5}
        >
          {feature.headline}
        </Heading>

        <Text
          fontSize="14px"
          color="var(--studio-landing-text-secondary)"
          lineHeight={1.55}
          mb={5}
        >
          {feature.description}
        </Text>

        {FeatureVisual && (
          <Box
            mt="auto"
            pt={4}
            borderTopWidth="1px"
            borderColor="rgba(255,255,255,0.05)"
            opacity={{ base: 1, md: 0.5 }}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
          >
            <FeatureVisual />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
