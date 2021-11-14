import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ProjectItem = ({ children, title, id, thumbnail }) => (
  <NextLink href={`/projects/${id}`}>
    <SimpleGrid
      cursor="pointer"
      className="noselect"
      borderRadius={10}
      boxShadow="0 5px 4px 1px rgba(0, 0, 0, 0.2)"
      bg={useColorModeValue('whiteAlpha.700', '#2E2E2E')}
      _hover={{ bg: useColorModeValue('white', '#404040') }}
      columns={[null, null, 2]}
      w="100%"
      py={2}
      px={2.5}
    >
      <Box letterSpacing={0.95} fontFamily="'Sarabun', sans-serif" p={1}>
        <Text mb={2} fontWeight="semibold" fontSize={16.5} textAlign="start">
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
        border-radius: 10px;
      }
    `}
  />
)
