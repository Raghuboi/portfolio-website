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
import codeForceLogo from '../public/images/portfolio/code-force-logo.png'
import portfolioWebsiteThumbnailDark from '../public/images/portfolio/portfolio-website-thumbnail.png'
import portfolioWebsiteThumbnailLight from '../public/images/portfolio/portfolio-website-light.png'
import wavelengthLogo from '../public/images/portfolio/wavelength-logo.png'
import enrollLogo from '../public/images/portfolio/enroll.png'

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
      <Layout title="Portfolio">
        <VStack spacing={3}>
          <Section m={0} delay={0.025}>
            <ProjectItem
              id="enroll"
              title="Enroll"
              badge="Capstone Project"
              badgeColor="orange"
              thumbnail={enrollLogo}
            >
              A registration and scheduling app for the Manitoba Conservatory of
              Music and Arts
            </ProjectItem>
          </Section>
          <Section m={0} delay={0.05}>
            <ProjectItem
              id="wavelength"
              title="Wavelength"
              badge="STARTUP"
              badgeColor="purple"
              thumbnail={wavelengthLogo}
            >
              A News app for Android and iOS
            </ProjectItem>
          </Section>
          <Section m={0} delay={0.075}>
            <ProjectItem
              id="student-net"
              title="Student Net"
              badge="OPEN SOURCE"
              badgeColor="green"
              thumbnail={codeForceLogo}
            >
              One spot for all University of Winnipeg student information
            </ProjectItem>
          </Section>
          <Section m={0} delay={0.1}>
            <ProjectItem
              id="poker"
              title="Multiplayer Poker Game"
              thumbnail={pokerInGame}
            >
              WebSocket based Poker with User Authentication
            </ProjectItem>
          </Section>
          <Section m={0} delay={0.125}>
            <ProjectItem
              id="portfolio-website"
              title="Portfolio Website"
              thumbnail={useColorModeValue(
                portfolioWebsiteThumbnailDark,
                portfolioWebsiteThumbnailLight
              )}
            >
              This very website,
              <br />
              Fully responsive and server-side rendered using Next.js
            </ProjectItem>
          </Section>

          <Section m={0} delay={0.15}>
            <ProjectItem id="snake" title="Snake AI" thumbnail={snakeInGame}>
              Re-creation of the classic Snake game, given an AI with
              pathfinding algorithms
            </ProjectItem>
          </Section>
        </VStack>
      </Layout>
    </Container>
  )
}

export default Portfolio
