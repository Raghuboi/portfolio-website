import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="twitter.900" p={3} mb={6} align="center">
        Full-stack developer based in Winnipeg ❄️
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
