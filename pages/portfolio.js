import { Container, Heading, VStack } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
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
        <VStack>
          <Section>
            <WorkGridItem
              id="poker"
              title="Multiplayer Poker Game"
              thumbnail={pokerInGame}
            >
              WebSocket based Poker with User Authentication
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="snake-ai"
              title="Snake AI"
              thumbnail={snakeInGame}
            >
              Re-creation of the classic Snake game given an AI with pathfinding
              algorithms
            </WorkGridItem>
          </Section>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Portfolio
