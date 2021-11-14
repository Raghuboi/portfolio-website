import {
  Container,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  useColorModeValue
} from '@chakra-ui/react'
import { ProjectItem } from '../components/project-item'
import Layout from '../components/layouts/projects'
import Section from '../components/section'

import pokerInGame from '../public/images/portfolio/poker-in-game.png'
import snakeInGame from '../public/images/portfolio/snake-in-game.png'
import portfolioWebsiteThumbnail from '../public/images/portfolio/portfolio-website-thumbnail.png'

const Portfolio = () => {
  return (
    <Container pt={6}>
      <Heading as="h3" variant="section-title" mb={6}>
        Projects
      </Heading>
      <Alert
        mb={3}
        py={2}
        borderRadius={20}
        colorScheme="purple"
        variant={useColorModeValue('solid', 'subtle')}
        status="info"
      >
        <AlertIcon />
        Click on a Project for more information
      </Alert>
      <Layout>
        <VStack>
          <Section mb={1.5} delay={0.025}>
            <ProjectItem
              id="portfolio-website"
              title="Portfolio Website"
              thumbnail={portfolioWebsiteThumbnail}
            >
              This very website. Fully responsive and server-side rendered using
              Next.js
            </ProjectItem>
          </Section>
          <Section mb={1.5} delay={0.05}>
            <ProjectItem
              id="poker"
              title="Multiplayer Poker Game"
              thumbnail={pokerInGame}
            >
              WebSocket based Poker with User Authentication
            </ProjectItem>
          </Section>
          <Section mb={1.5} delay={0.075}>
            <ProjectItem id="snake" title="Snake AI" thumbnail={snakeInGame}>
              Re-creation of the classic Snake game given an AI with pathfinding
              algorithms
            </ProjectItem>
          </Section>
        </VStack>
      </Layout>
    </Container>
  )
}

export default Portfolio
