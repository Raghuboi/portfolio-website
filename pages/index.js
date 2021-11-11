import {
  Container,
  Box,
  Button,
  Heading,
  Text,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Full-stack developer based in Winnipeg ❄️
      </Box>

      <Box display={{ md: 'flex-grow' }}>
        <Heading as="h2" variant="page-title">
          Raghunath Prabhakar
        </Heading>
        <p>Developer, Designer</p>
      </Box>

      <Spacer p="0.5rem" />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a Full-stack developer based in Winnipeg, Manitoba.
          <br />
          <br />
          Having majored in Applied Computer Science from the{' '}
          <Text
            display="inline"
            fontWeight="semibold"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            University Of Winnipeg
          </Text>
          , i'm also avidly interested in Security, User-Authentication,
          WebSockets &amp; building/consuming REST APIs. You can see me
          implementing a mix of these throughout my projects.
          <br />
          <br />
          Obsessed with Agile principles and values, I also hold a Google
          Careers Certification in Project Management.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/portfolio">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
