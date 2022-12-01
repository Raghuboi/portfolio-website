import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  Spacer,
  useColorModeValue,
  Alert,
  Text,
  Wrap
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { CustomAccordianHomeTitle } from '../components/custom-accordion'
import { useRef, useEffect } from 'react'

const Page = () => {
  const ButtonDiv = useRef()

  useEffect(() => {
    setTimeout(() => {
      ButtonDiv.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'end'
      })
    }, 500) // framer motion animations execute before page is scrolled into view
  }, [])

  return (
    <Container pt={6}>
      <Box display={{ md: 'flex-grow' }}>
        <Heading as="h2" variant="page-title">
          Raghunath Prabhakar
        </Heading>
      </Box>

      <Spacer p="0.5rem" />

      <Section>
        <Alert
          borderRadius={15}
          fontSize={16}
          mb={3}
          px={4}
          py={1}
          variant={useColorModeValue('solid', 'subtle')}
          colorScheme="purple"
          status="warning"
        >
          <Text as="i">
            “The illiterate of the 21st century will not be those who cannot
            read and write, but those who cannot learn, unlearn, and relearn.” ―
            Alvin Toffler
          </Text>
        </Alert>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I am a Full-stack developer based in Winnipeg, Manitoba with a passion
          for Economics and Finance.
          <br />
          <br />
          Double degree, B.Sc. Applied Computer Science and B.A. Economics from
          the{' '}
          <Link
            href="https://www.uwinnipeg.ca/"
            isExternal
            display="inline"
            fontWeight="semibold"
          >
            University Of Winnipeg
            <ExternalLinkIcon mx="2px" />
          </Link>
          . I am interested in security, UI/UX, OO design patterns, cloud
          computing, and computer networks. Firm believer in Agile principles
          and values.
          <br />
          <br />I want to work in places where I can learn and grow as a
          developer. Would, eventually, like to have a career in Project
          Management.
        </Paragraph>

        <CustomAccordianHomeTitle
          heading={
            <Heading
              mt={6}
              as="h3"
              variant="section-title"
              _hover={{
                textDecorationColor: useColorModeValue(
                  'purple.500',
                  'purple.200'
                )
              }}
            >
              About Me
            </Heading>
          }
          content="I am learning to be humble in an industry dominated by noise; to be
          calm when everyone's excited. I am the person you can never quite
          figure out— someone who always has something more to say, something
          more to add. I am always thinking, constantly questioning, and forever
          learning."
        />
        <Wrap ref={ButtonDiv} justify="center" spacing={4} my={3.5}>
          <MediaButtons />
        </Wrap>
      </Section>
    </Container>
  )
}

const MediaButtons = () => {
  return (
    <>
      <NextLink href="/portfolio">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
          My portfolio
        </Button>
      </NextLink>
      <a href="https://github.com/Raghuboi" target="_blank" rel="noreferrer">
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
      <a href="https://github.com/Raghuboi" target="_blank" rel="noreferrer">
        <Button leftIcon={<IoLogoLinkedin />} colorScheme="facebook">
          LinkedIn
        </Button>
      </a>
    </>
  )
}

export default Page
