import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ProjectItem = ({ children, title, id, thumbnail }) => (
  <NextLink href={`/projects/${id}`}>
    <SimpleGrid
      cursor="pointer"
      className="noselect"
      p={4}
      borderRadius={8}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
      _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.200') }}
      columns={[null, null, 2]}
      w="100%"
      gap={6}
    >
      <Box>
        <Text mb={2} textAlign="start" fontWeight="semibold">
          {title}
        </Text>
        <Text mb={2} textAlign="start" fontSize={15}>
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
  </NextLink>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: none;
      }
    `}
  />
)
