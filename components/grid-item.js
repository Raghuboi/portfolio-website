import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  Button,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <SimpleGrid
    borderRadius="12px"
    p={4}
    bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
    columns={[1, 1, 2]}
    w="100%"
    gap={6}
  >
    <Box>
      <Text mb={2} fontSize={20} textAlign="start" fontWeight="semibold">
        {title}
      </Text>
      <Text mb={2} textAlign="start" fontSize={14}>
        {children}
      </Text>
    </Box>
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
  </SimpleGrid>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
