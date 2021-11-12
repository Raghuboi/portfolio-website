import { Container, Heading, VStack, Alert, AlertIcon } from '@chakra-ui/react'
import { ProjectItem } from '../components/project-item'
import Layout from '../components/layouts/projects'
import Section from '../components/section'

import pokerInGame from '../public/images/portfolio/poker-in-game.png'
import snakeInGame from '../public/images/portfolio/snake-in-game.png'

const Portfolio = () => {
  return (
    <Layout>
      <Container pt={6}>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <Section mb={3}>
          <Alert borderRadius={20} status="info">
            <AlertIcon />
            Click on a Project for more information
          </Alert>
        </Section>
        <VStack>
          <Section mb={1.5} delay={0.1}>
            <ProjectItem
              id="poker"
              title="Multiplayer Poker Game"
              thumbnail={pokerInGame}
            >
              WebSocket based Poker with User Authentication
            </ProjectItem>
          </Section>
          <Section mb={1.5} delay={0.2}>
            <ProjectItem id="snake" title="Snake AI" thumbnail={snakeInGame}>
              Re-creation of the classic Snake game given an AI with pathfinding
              algorithms
            </ProjectItem>
          </Section>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Portfolio
