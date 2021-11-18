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
  <Layout title="Poker">
    <Container className="noselect" pt={6}>
      <Title>Multiplayer Poker Game</Title>
      <P>
        A WebSocket based Multiplayer Poker Game with Token Based Authentication
        using a REST API
      </P>
      <List ml={4} my={3}>
        <ListItem mb={3}>
          <span>
            <Badge variant="solid" colorScheme="green">
              MongoDB
            </Badge>{' '}
            <Badge variant="solid" colorScheme="orange">
              Express
            </Badge>{' '}
            <Badge variant="solid" colorScheme="blue">
              React
            </Badge>{' '}
            <Badge variant="solid">NodeJS</Badge>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link isExternal href="https://raghu-poker-game.netlify.app/">
            https://raghu-poker-game.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link
            isExternal
            href="https://github.com/Raghuboi/multiplayer-poker-game"
          >
            https://github.com/Raghuboi/multiplayer-poker-game{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Implemented JWT authentication with Refresh/Access token patterns to
          protect against XSS (cross-site scripting) vulnerabilities.
        </ListItem>
        <ListItem>
          Stored Tokens in Secure, HttpOnly cookies instead of LocalStorage for
          further protection.
        </ListItem>
        <ListItem>
          Created REST API endpoints for Sign In/Sign Up that validate and store
          data in a MongoDB database.
        </ListItem>
        <ListItem>
          Added hashing to user passwords before saving them in the database.
        </ListItem>
        <ListItem>
          Implemented logic for sending out confirmation emails to users,
          requiring them to activate their account before signing in.
        </ListItem>
        <ListItem>
          Implemented Room-code matchmaking and automatic Queue based
          matchmaking using WebSockets.
        </ListItem>
      </UnorderedList>

      <ProjectImage
        src="/images/portfolio/poker-in-game.png"
        alt="Poker in-game"
      />
      <ProjectImage
        src="/images/portfolio/poker-reveal-cards.png"
        alt="Poker in-game 2"
      />
      <ProjectImage
        src="/images/portfolio/poker-matchmaking.png"
        alt="Poker Matchmaking"
      />
      <ProjectImage
        src="/images/portfolio/poker-signed-in.png"
        alt="Poker Signed In"
      />
      <ProjectImage
        src="/images/portfolio/poker-join-room.png"
        alt="Poker Join Room"
      />
      <ProjectImage
        src="/images/portfolio/poker-sign-in.png"
        alt="Poker Sign In"
      />
      <ProjectImage
        src="/images/portfolio/poker-sign-up.png"
        alt="Poker Sign Up"
      />
    </Container>
  </Layout>
)

export default Project
