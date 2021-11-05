import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="messenger.500" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Winnipeg! ❄️
      </Box>

      <Box display={{ md: 'flex-grow' }}>
        <Heading as="h2" variant="page-title">
          Raghunath Prabhakar
        </Heading>
        <p>Developer, Designer</p>
      </Box>
    </Container>
  )
}

export default Page
