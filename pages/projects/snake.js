import {
  Container,
  Badge,
  Link,
  List,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/projects'

const Project = () => (
  <Layout title="Snake">
    <Container className="noselect" pt={6}>
      <Title>Snake AI</Title>
      <P>
        A new spin to the classic snake game-- showcasing best-first search
        pathfinding algorithms
      </P>
      <List ml={4} my={3}>
        <ListItem mb={3}>
          <span>
            <Badge variant="solid" colorScheme="yellow">
              JavaScript
            </Badge>{' '}
            <Badge variant="solid" colorScheme="blue">
              React
            </Badge>{' '}
            <Badge variant="solid">CSS</Badge>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link isExternal href="https://raghu-snake-game.netlify.app/">
            https://raghu-snake-game.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link isExternal href="https://github.com/Raghuboi/snake-game-AI">
            https://github.com/Raghuboi/snake-game-AI{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Game can be played manually with a keyboard/touchscreen or
          automatically by showcasing the algorithms
        </ListItem>
        <ListItem>
          Implemented A* and Greedy best-first search algorithms
        </ListItem>
        <ListItem>
          React swipable is used to provide touchscreen support for playing on
          mobile
        </ListItem>
        <ListItem>Game is rendered in an HTML canvas using React</ListItem>
        <ListItem>
          A custom UseInterval() React hook is used to time the gameloop
        </ListItem>
      </UnorderedList>

      <ProjectImage src="/images/portfolio/snake-a-star.png" alt="Snake A*" />
      <ProjectImage
        src="/images/portfolio/snake-scanned.png"
        alt="Snake Scanned Tiles"
      />
      <ProjectImage
        src="/images/portfolio/snake-in-game-manual.png"
        alt="Snake In-game"
      />
      <ProjectImage
        src="/images/portfolio/snake-game-over.png"
        alt="Snake Game Over"
      />
      <ProjectImage
        src="/images/portfolio/snake-greedy.png"
        alt="Snake Greedy"
      />
    </Container>
  </Layout>
)

export default Project
