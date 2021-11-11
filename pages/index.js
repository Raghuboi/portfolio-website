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
    <Container pt={6}>
      <Box display={{ md: 'flex-grow' }}>
        <Heading as="h2" variant="page-title">
          Raghunath Prabhakar
        </Heading>
        <p>Developer, Designer</p>
      </Box>

      <Spacer p="0.5rem" />

      <Section>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a Full-stack developer based in Winnipeg, Manitoba.
          <br />
          <br />
          Having majored in Applied Computer Science (B.Sc) from the{' '}
          <Text
            display="inline"
            fontWeight="semibold"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            University Of Winnipeg
          </Text>
          , I am also avidly interested in Security, User Authentication, UI/UX
          design and working with REST APIs. You can see me implementing a mix
          of these throughout my projects.
          <br />
          <br />
          Fascinated by Agile principles and values, I also hold a Google
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
