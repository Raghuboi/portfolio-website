import React from 'react'
import {
  Container,
  Box,
  Button,
  Heading,
  Spacer,
  useColorModeValue,
  Text,
  Link,
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
        <Text fontSize={25}>Full Stack Developer</Text>
      </Box>

      <Spacer p="0.5rem" />

      <Section>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Recent graduate with a double degree in Applied Computer Science
          (B.Sc.) and Economics (B.A.) from the{' '}
          <Link
            href="https://www.uwinnipeg.ca/"
            isExternal
            display="inline"
            fontWeight="semibold"
          >
            University Of Winnipeg
            <ExternalLinkIcon mx="2px" />
          </Link>
          <br />
          <br />1 year of full-stack app development experience working at a
          startup. Open source contributor and familiar with working in agile
          teams. Flexible working across the stack and adapting to new
          technologies.
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
              Current Tech Stack
            </Heading>
          }
          content={
            'I am highly excited by the newer bleeding edge JS frameworks! Currently my top 2 are SvelteKit and Next 13. SvelteKit, while it has an incredible developer experience, falls behind because of the massive React Ecosystem and React 18 Server Components. I find Next 13 really powerful in combination with libraries like Typescript, GraphQL, tRPC, and TailwindCSS. As for databases my current go-tos are PostgreSQL and Redis (depending on project requirements)'
          }
        />
        <MediaButtons ref={ButtonDiv} />
      </Section>
    </Container>
  )
}

const MediaButtons = React.forwardRef((props, ref) => {
  return (
    <>
      <Wrap ref={ref} justify="center" spacing={4} my={3.5}>
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
        <a
          href="https://www.linkedin.com/in/raghunath-prabhakar/"
          target="_blank"
          rel="noreferrer"
        >
          <Button leftIcon={<IoLogoLinkedin />} colorScheme="facebook">
            LinkedIn
          </Button>
        </a>
      </Wrap>
    </>
  )
})

export default Page
