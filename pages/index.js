import {
  Container,
  Box,
  HStack,
  Button,
  Heading,
  Link,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
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
          I am a Full-stack developer based in Winnipeg, Manitoba
          <br />
          <br />
          Having majored in Applied Computer Science (B.Sc) from the{' '}
          <Link
            href="https://www.uwinnipeg.ca/"
            isExternal
            display="inline"
            fontWeight="semibold"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            University Of Winnipeg
            <ExternalLinkIcon mx="2px" />
          </Link>
          , I am also avidly interested in Security, User Authentication, UI/UX
          design and working with REST APIs. You can see me implementing a mix
          of these throughout my projects
          <br />
          <br />
          Fascinated by Agile principles and values, I am also pursuing a Google
          Careers Certification in Project Management
        </Paragraph>
        <HStack justify="center" spacing={4} my={4}>
          <NextLink href="/portfolio">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
          <a
            href="https://github.com/Raghuboi"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              leftIcon={<IoLogoGithub />}
              bg={useColorModeValue('#2E2E2E', 'whiteAlpha.200')}
              _hover={{
                bg: useColorModeValue('#000000', '#454545')
              }}
              color="white"
            >
              GitHub
            </Button>
          </a>
        </HStack>
      </Section>
    </Container>
  )
}

export default Page
