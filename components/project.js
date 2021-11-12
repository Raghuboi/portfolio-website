import NextLink from 'next/link'
import { Heading, Box, Image, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/portfolio">
      <Link>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="xl" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Heading
    as="h2"
    fontSize={18}
    display="inline"
    textDecoration="underline"
    textDecorationThickness={1.5}
    textUnderlineOffset={3}
    mr={2}
  >
    {children}
  </Heading>
)
