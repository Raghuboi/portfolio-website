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
          <Link isExternal href="https://www.raghu-poker-game.netlify.app/">
            https://www.raghu-poker-game.netlify.app/{' '}
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
        <ListItem>Socket.io is used to provide WebSocket support</ListItem>
        <ListItem>
          Users can play with each other using Room Codes or choose to queue up
          for automatic Matchmaking
        </ListItem>
        <ListItem>
          Although the game does not need a database, we have implemented user
          authentication using a REST API that requires us to store data.
        </ListItem>
        <ListItem>
          Uses JWT authentication patterns, implemented Refresh Tokens and
          Access Tokens to protect against XSS attacks. Tokens are stored in
          Secure, HttpOnly Cookies as opposed to LocalStorage for further
          protection
        </ListItem>
        <ListItem>
          Passwords are hashed using the library bcrypt before saving
        </ListItem>
        <ListItem>
          A confirmation email (using nodemailer) is sent to users before
          activating their account
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
